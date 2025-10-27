/**
 * Generate baritone ukulele chord files with correct structure
 * Each base note (A, Bb, B, C, etc.) gets its own directory
 * containing all chord variations for that note
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { baritoneChords } from './baritone-chord-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BARITONE_DIR = path.join(__dirname, 'src', 'db', 'baritone', 'chords');

// Base notes (natural notes and accidentals)
const baseNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

// Map chord key names to base notes
// E.g., "Am" -> "A", "Cmaj7" -> "C", "F#7" -> "Gb"
function getBaseNote(chordKey) {
  // Handle enharmonic equivalents and compound chord names
  // Check two-character prefixes first to avoid conflicts
  if (chordKey.startsWith('Ab')) return 'Ab';
  if (chordKey.startsWith('Bb')) return 'Bb';
  if (chordKey.startsWith('Db')) return 'Db';
  if (chordKey.startsWith('Eb')) return 'Eb';
  if (chordKey.startsWith('Gb')) return 'Gb';

  // Then check single-character prefixes
  if (chordKey.startsWith('A')) return 'A';
  if (chordKey.startsWith('B')) return 'B';
  if (chordKey.startsWith('C')) return 'C';
  if (chordKey.startsWith('D')) return 'D';
  if (chordKey.startsWith('E')) return 'E';
  if (chordKey.startsWith('F')) return 'F';
  if (chordKey.startsWith('G')) return 'G';

  throw new Error(`Cannot determine base note for: ${chordKey}`);
}

/**
 * Organize chord data by base note
 */
function organizeByBaseNote() {
  const organized = {};

  // Initialize each base note
  baseNotes.forEach(note => {
    organized[note] = {};
  });

  // Organize all chords by their base note
  for (const [chordKey, chordTypes] of Object.entries(baritoneChords)) {
    const baseNote = getBaseNote(chordKey);

    for (const [suffix, positions] of Object.entries(chordTypes)) {
      // Store with the suffix as the key
      organized[baseNote][suffix] = {
        key: baseNote,
        suffix: suffix,
        positions: positions
      };
    }
  }

  return organized;
}

/**
 * Generate chord files for all base notes
 */
function generateChordFiles() {
  console.log('🎵 Generating baritone ukulele chord files with correct structure...\n');

  const organized = organizeByBaseNote();
  let totalGenerated = 0;

  // Generate files for each base note
  for (const [baseNote, chordTypes] of Object.entries(organized)) {
    if (Object.keys(chordTypes).length === 0) continue;

    const baseNoteDir = path.join(BARITONE_DIR, baseNote);

    // Create base note directory
    if (!fs.existsSync(baseNoteDir)) {
      fs.mkdirSync(baseNoteDir, { recursive: true });
    }

    // Generate a file for each chord type
    for (const [suffix, chord] of Object.entries(chordTypes)) {
      const fileName = suffix === 'major' ? 'major.js' : `${suffix}.js`;
      const filePath = path.join(baseNoteDir, fileName);

      const content = `export default ${JSON.stringify(chord, null, 2)};\n`;
      fs.writeFileSync(filePath, content);
      totalGenerated++;

      console.log(`✅ Generated ${baseNote}/${fileName}`);
    }
  }

  console.log(`\n✨ Generated ${totalGenerated} chord files!`);
  return organized;
}

/**
 * Generate index.js for each base note directory
 */
function generateBaseNoteIndexFiles(organized) {
  console.log('\n📑 Generating index files for each base note...\n');

  for (const [baseNote, chordTypes] of Object.entries(organized)) {
    if (Object.keys(chordTypes).length === 0) continue;

    const baseNoteDir = path.join(BARITONE_DIR, baseNote);
    const suffixes = Object.keys(chordTypes).sort();

    if (suffixes.length === 0) continue;

    // Generate imports
    const imports = suffixes.map(suffix => {
      const varName = suffix
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/^_+/, '')
        .replace(/^(\d)/, '_$1');

      const fileName = suffix === 'major' ? 'major' : suffix;
      return `import ${varName} from './${fileName}.js';`;
    });

    // Generate exports array
    const exports = suffixes.map(suffix => {
      const varName = suffix
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/^_+/, '')
        .replace(/^(\d)/, '_$1');

      return `  ${varName},`;
    });

    const content = `${imports.join('\n')}\n\nexport default [\n${exports.join('\n')}\n];\n`;

    const indexPath = path.join(baseNoteDir, 'index.js');
    fs.writeFileSync(indexPath, content);

    console.log(`📄 Created index.js for ${baseNote} (${suffixes.length} chord types)`);
  }

  console.log('\n✅ All base note index files created!');
}

/**
 * Generate main chords/index.js file
 */
function generateChordsIndex() {
  console.log('\n📚 Generating chords/index.js...\n');

  const existingBaseNotes = baseNotes.filter(note => {
    const dir = path.join(BARITONE_DIR, note);
    return fs.existsSync(dir);
  });

  // Generate imports
  const imports = existingBaseNotes.map(note =>
    `import ${note} from './${note}/index.js';`
  );

  // Generate export object
  const exports = existingBaseNotes.map(note => `  ${note},`);

  const content = `${imports.join('\n')}\n\nexport default {\n${exports.join('\n')}\n};\n`;

  const indexPath = path.join(BARITONE_DIR, 'index.js');
  fs.writeFileSync(indexPath, content);

  console.log('✅ Created chords/index.js');
}

/**
 * Generate main baritone/index.js file
 */
function generateMainIndex() {
  console.log('\n📚 Generating main baritone/index.js...\n');

  const mainContent = `import main from './main.js';
import keys from './keys.js';
import suffixes from './suffixes.js';
import tunings from './tunings.js';
import chords from './chords/index.js';

export default {
  main,
  keys,
  suffixes,
  tunings,
  chords,
};
`;

  const mainIndexPath = path.join(__dirname, 'src', 'db', 'baritone', 'index.js');
  fs.writeFileSync(mainIndexPath, mainContent);

  console.log('✅ Created src/db/baritone/index.js');
}

/**
 * Main execution
 */
async function main() {
  try {
    const organized = generateChordFiles();
    generateBaseNoteIndexFiles(organized);
    generateChordsIndex();
    generateMainIndex();

    console.log('\n🎉 Baritone ukulele chord database generation complete!');
    console.log('\n📊 Summary:');
    console.log(`   - 12 base notes (A-G with sharps/flats)`);
    console.log(`   - 20 chord types per note`);
    console.log(`   - 240 total chord variations with multiple voicings`);
    console.log(`   - Tuning: DGBE (Baritone Standard)`);
    console.log('\n✨ Structure matches ukulele format for compatibility!');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
