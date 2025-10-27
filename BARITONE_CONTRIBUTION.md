# Baritone Ukulele Addition to chords-db

## Overview

This contribution adds comprehensive baritone ukulele chord data to the chords-db library.

## What's New

### Instrument Added
- **Baritone Ukulele** (DGBE Tuning)
  - Standard baritone tuning: D3-G3-B3-E4
  - Same tuning as the top 4 strings of a guitar
  - 4 strings, 4 frets span for fingering

### Chord Coverage

**20 Chord Types** × **12 Keys** = **240 Total Chords**

#### Basic Triads
- Major
- Minor
- Diminished (dim)
- Augmented (aug)

#### Seventh Chords
- Dominant 7th (7)
- Major 7th (maj7)
- Minor 7th (m7)
- Diminished 7th (dim7)
- Half-diminished (m7b5)
- Minor-major 7th (mmaj7)

#### Suspended Chords
- sus2
- sus4
- 7sus4

#### Sixth Chords
- 6
- m6

#### Ninth Chords
- 9
- add9
- madd9
- m9
- maj9

### Multiple Voicings

Each chord includes 2-4 different fingering positions ranging from open positions to barre chords up the neck, providing flexibility for different musical contexts.

## Structure

The baritone ukulele follows the same organizational structure as the existing ukulele instrument:

```
src/db/baritone/
├── main.js          # Instrument configuration (4 strings, 4 frets)
├── keys.js          # All 12 keys
├── suffixes.js      # All 20 chord types
├── tunings.js       # DGBE standard tuning
├── index.js         # Main export
└── chords/
    ├── A/           # All A chords (Amajor, Am, A7, etc.)
    ├── Bb/
    ├── B/
    ├── C/
    ├── Db/
    ├── D/
    ├── Eb/
    ├── E/
    ├── F/
    ├── Gb/
    ├── G/
    └── Ab/
```

## Data Format

Each chord follows the standard chords-db format:

```javascript
{
  key: 'A',
  suffix: 'major',
  positions: [
    {
      frets: '2220',       // D-G-B-E string fret positions
      fingers: '2340'      // Finger numbers (0=open, 1-4=fingers)
    },
    {
      frets: '2225',
      fingers: '1114',
      barres: 2,           // Barre at fret 2
      capo: true           // Visual indicator for barre
    }
  ]
}
```

## Generation

Chord data was generated from `baritone-chord-data.js` using the `generate-baritone-corrected.js` script, which:

1. Organizes chords by base note (A, Bb, B, C, etc.)
2. Creates individual chord files for each variation
3. Generates index files for proper module exports
4. Ensures compatibility with the existing chords-db structure

## Data Sources

Chord fingerings were curated using:
- Music theory principles for DGBE tuning
- Common baritone ukulele fingering patterns
- Verification against standard baritone chord resources

## Usage

```javascript
import db from '@tombatossals/chords-db';

// Access baritone ukulele
const baritone = db.baritone;

// Get all A major chords
const AMajor = baritone.chords.A.find(chord => chord.suffix === 'major');

// Access tuning information
const tuning = baritone.tunings.standard; // ['D3', 'G3', 'B3', 'E4']

// Get all available chord types
const chordTypes = baritone.suffixes;
```

## Testing

Tests are included in `src/db/baritone.test.js` following the same testing patterns as other instruments in the library.

Run tests with:
```bash
npm test
```

## Benefits for Users

1. **Comprehensive Coverage**: 240 chords with multiple voicings each
2. **Consistency**: Same data format as guitar and ukulele
3. **Flexibility**: Multiple fingering options for each chord
4. **Compatibility**: Works seamlessly with existing chords-db implementations

## Future Improvements

Potential enhancements:
- Additional exotic chord types (13th, altered, etc.)
- More voicing variations
- Chord diagrams with visual fingering guides
- Integration with chord progression tools

## Author

Generated and curated for the chords-db open-source project.

## License

MIT (same as chords-db)
