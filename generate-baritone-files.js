/**
 * Generate baritone ukulele chord files from curated chord data
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { baritoneChords } from './baritone-chord-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BARITONE_DIR = path.join(__dirname, 'src', 'db', 'baritone', 'chords');

// Map suffix names from data to file names
const suffixMap = {
  major: 'major',
  minor: 'minor',
  7: '7',
  maj7: 'maj7',
  m7: 'm7',
  sus2: 'sus2',
  sus4: 'sus4',
  dim: 'dim',
  aug: 'aug',
  6: '6',
  m6: 'm6',
  9: '9',
  add9: 'add9',
  madd9: 'madd9',
  m9: 'm9',
  maj9: 'maj9',
  dim7: 'dim7',
  m7b5: 'm7b5',
  '7sus4': '7sus4',
  mmaj7: 'mmaj7',
};

/**
 * Generate chord files for all keys and suffixes
 */
function generateChordFiles() {
  console.log('🎵 Generating baritone ukulele chord files...\n');

  let totalGenerated = 0;

  // Iterate through all chord data
  for (const [keyName, chordTypes] of Object.entries(baritoneChords)) {
    const keyDir = path.join(BARITONE_DIR, keyName);

    // Create key directory if it doesn't exist
    if (!fs.existsSync(keyDir)) {
      fs.mkdirSync(keyDir, { recursive: true });
    }

    for (const [suffix, positions] of Object.entries(chordTypes)) {
      const fileName = suffixMap[suffix] || suffix;

      const chordObject = {
        key: keyName,
        suffix: fileName,
        positions: positions,
      };

      // Write chord file
      const filePath = path.join(keyDir, `${fileName}.js`);
      const content = `export default ${JSON.stringify(chordObject, null, 2)};\n`;

      fs.writeFileSync(filePath, content);
      totalGenerated++;

      console.log(`✅ Generated ${keyName}/${fileName}.js`);
    }
  }

  console.log(`\n✨ Generated ${totalGenerated} chord files!`);
}

/**
 * Generate index.js for each key directory
 */
function generateIndexFiles() {
  console.log('\n📑 Generating index files for each key...\n');

  const keys = Object.keys(baritoneChords);

  for (const key of keys) {
    const keyDir = path.join(BARITONE_DIR, key);

    if (!fs.existsSync(keyDir)) {
      continue;
    }

    // Get all chord files in the directory
    const files = fs.readdirSync(keyDir)
      .filter(file => file.endsWith('.js') && file !== 'index.js')
      .sort();

    if (files.length === 0) {
      continue;
    }

    // Generate imports and exports
    const imports = [];
    const exports = [];

    files.forEach(file => {
      const suffix = file.replace('.js', '');
      // Create valid variable name
      let varName = suffix
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/^_+/, '');

      // Handle numeric starts
      if (/^\d/.test(varName)) {
        varName = '_' + varName;
      }

      imports.push(`import ${varName} from './${suffix}.js';`);
      exports.push(`  ${varName},`);
    });

    const content = `${imports.join('\n')}\n\nexport default [\n${exports.join('\n')}\n];\n`;

    const indexPath = path.join(keyDir, 'index.js');
    fs.writeFileSync(indexPath, content);

    console.log(`📄 Created index.js for ${key} (${files.length} chords)`);
  }

  console.log('\n✅ All index files created!');
}

/**
 * Generate main baritone/index.js file
 */
function generateMainIndex() {
  console.log('\n📚 Generating main baritone/index.js...\n');

  const keys = Object.keys(baritoneChords).sort();

  // Generate imports
  const imports = keys.map(key => `import ${key} from './chords/${key}/index.js';`);

  // Generate chords export
  const chordsExports = keys.map(key => `  ${key},`);

  // Generate main file
  const mainContent = `import main from './main.js';
import keys from './keys.js';
import suffixes from './suffixes.js';
import tunings from './tunings.js';

${imports.join('\n')}

const chords = [
${chordsExports.join('\n')}
];

const baritone = {
  main,
  keys,
  suffixes,
  tunings,
  chords,
};

export { main, keys, suffixes, tunings, chords };
export default baritone;
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
    generateChordFiles();
    generateIndexFiles();
    generateMainIndex();

    console.log('\n🎉 Baritone ukulele chord database generation complete!');
    console.log('\n📊 Summary:');
    console.log(`   - 12 keys (A-G with sharps/flats)`);
    console.log(`   - 20 chord types`);
    console.log(`   - 240+ chord variations with multiple voicings`);
    console.log(`   - Tuning: DGBE (Baritone Standard)`);
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
