/**
 * Script to convert guitar chords to baritone ukulele chords
 *
 * Guitar tuning: E A D G B e (6 strings)
 * Baritone ukulele tuning: D G B E (4 strings)
 *
 * Baritone uke matches the top 4 strings of guitar (D G B E)
 * Guitar string indices: 0=E, 1=A, 2=D, 3=G, 4=B, 5=e
 * We need indices 2, 3, 4, 5 (D G B E)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GUITAR_DIR = path.join(__dirname, 'src', 'db', 'guitar', 'chords');
const BARITONE_DIR = path.join(__dirname, 'src', 'db', 'baritone', 'chords');

// Keys to process
const keys = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

// Suffixes to process (matching the ones in baritone/suffixes.js)
const suffixes = [
  'major', 'minor', 'dim', 'dim7', 'sus2', 'sus4', '7sus4', 'alt', 'aug',
  '6', '69', '7', '7b5', 'aug7', '9', '9b5', 'aug9', '7b9', '7b9#5', '7#9',
  '11', '9#11', '13', '13b9', '13b5b9', 'b13b9', 'b13#9', 'maj7', 'maj7b5',
  'maj7#5', 'maj9', 'maj11', 'maj13', 'm6', 'm7', 'm7b5', 'm9', 'm69',
  'm9b5', 'm11', 'mmaj7', 'mmaj7b5', 'mmaj9', 'mmaj11', 'add9', 'madd9'
];

/**
 * Convert a guitar fret string to baritone ukulele
 * @param {string} frets - Guitar fret string (6 chars)
 * @returns {string|null} - Baritone fret string (4 chars) or null if invalid
 */
function convertFretsToBaritone(frets) {
  if (frets.length !== 6) {
    return null;
  }

  // Take strings 2-5 (D G B E) from guitar
  const baritoneFrets = frets.substring(2, 6);

  // Skip if it contains 'x' (muted string) - might not be playable
  if (baritoneFrets.includes('x')) {
    return null;
  }

  return baritoneFrets;
}

/**
 * Convert finger positions from guitar to baritone
 * @param {string} fingers - Guitar finger string (6 chars)
 * @returns {string|null} - Baritone finger string (4 chars) or null if invalid
 */
function convertFingersToBaritone(fingers) {
  if (fingers.length !== 6) {
    return null;
  }

  // Take strings 2-5 (D G B E) from guitar
  return fingers.substring(2, 6);
}

/**
 * Convert a guitar chord position to baritone ukulele
 * @param {object} position - Guitar position object
 * @returns {object|null} - Baritone position object or null if invalid
 */
function convertPositionToBaritone(position) {
  const baritoneFrets = convertFretsToBaritone(position.frets);

  if (!baritoneFrets) {
    return null;
  }

  const baritoneFingers = convertFingersToBaritone(position.fingers);

  const baritonePosition = {
    frets: baritoneFrets,
    fingers: baritoneFingers,
  };

  // Preserve barres and capo if they exist
  if (position.barres !== undefined) {
    baritonePosition.barres = position.barres;
  }

  if (position.capo !== undefined) {
    baritonePosition.capo = position.capo;
  }

  return baritonePosition;
}

/**
 * Process a single chord file
 */
async function processChordFile(key, suffix) {
  const guitarFilePath = path.join(GUITAR_DIR, key, `${suffix}.js`);

  // Check if guitar file exists
  if (!fs.existsSync(guitarFilePath)) {
    return;
  }

  try {
    // Import the guitar chord
    const guitarChordModule = await import(`./src/db/guitar/chords/${key}/${suffix}.js`);
    const guitarChord = guitarChordModule.default;

    // Convert positions
    const baritonePositions = guitarChord.positions
      .map(pos => convertPositionToBaritone(pos))
      .filter(pos => pos !== null);

    // Skip if no valid positions
    if (baritonePositions.length === 0) {
      console.log(`⚠️  Skipping ${key}${suffix} - no valid positions`);
      return;
    }

    // Create baritone chord object
    const baritoneChord = {
      key: guitarChord.key,
      suffix: guitarChord.suffix,
      positions: baritonePositions,
    };

    // Create output directory if needed
    const outputDir = path.join(BARITONE_DIR, key);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write baritone chord file
    const outputPath = path.join(outputDir, `${suffix}.js`);
    const content = `export default ${JSON.stringify(baritoneChord, null, 2)};\n`;
    fs.writeFileSync(outputPath, content);

    console.log(`✅ Converted ${key}${suffix} (${baritonePositions.length} positions)`);
  } catch (error) {
    console.error(`❌ Error processing ${key}${suffix}:`, error.message);
  }
}

/**
 * Create index.js for a key directory
 */
function createIndexFile(key) {
  const keyDir = path.join(BARITONE_DIR, key);

  if (!fs.existsSync(keyDir)) {
    return;
  }

  // Get all chord files in the directory
  const files = fs.readdirSync(keyDir)
    .filter(file => file.endsWith('.js') && file !== 'index.js')
    .sort();

  if (files.length === 0) {
    return;
  }

  // Generate imports and exports
  const imports = files.map(file => {
    const suffix = file.replace('.js', '');
    const varName = suffix.replace(/[^a-zA-Z0-9]/g, '_');
    return `import ${varName} from './${suffix}';`;
  }).join('\n');

  const exports = files.map(file => {
    const suffix = file.replace('.js', '');
    const varName = suffix.replace(/[^a-zA-Z0-9]/g, '_');
    return `  ${varName},`;
  }).join('\n');

  const content = `${imports}\n\nexport default [\n${exports}\n];\n`;

  const indexPath = path.join(keyDir, 'index.js');
  fs.writeFileSync(indexPath, content);

  console.log(`📄 Created index for ${key}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🎸 Converting guitar chords to baritone ukulele chords...\n');

  for (const key of keys) {
    console.log(`\n📂 Processing key: ${key}`);

    for (const suffix of suffixes) {
      await processChordFile(key, suffix);
    }

    createIndexFile(key);
  }

  console.log('\n✨ Conversion complete!');
}

main().catch(console.error);
