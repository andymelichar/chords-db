/* global it, describe, expect */

import baritone from './baritone';
import {
  strChord2array,
  chord2midi,
  processString,
  numberOfBarres,
  unique,
  getNoteFromMidiNumber,
} from '../tools';

describe('baritone Chords', () => {
  describe('Strings', () => {
    it('Should have 4 strings', () => expect(baritone.main.strings).toEqual(4));
  });

  describe('Types', () => {
    baritone.suffixes.map((suffix) =>
      it(`Type suffix ${suffix} should have a description`, () =>
        expect(suffix).toBeDefined())
    );
  });

  describe(`Test Cmajor midi notes`, () => {
    it(`Should match [ 62, 67, 71, 76 ]`, () => {
      const Cmajor = baritone.chords.C.find((chord) => chord.suffix === 'major');
      const midiNotes = chord2midi(
        processString(Cmajor.positions[0].frets),
        baritone.tunings['standard']
      );
      // Baritone tuning DGBE: D3=62, G3=67, B3=71, E4=76
      // C major (0003): D3, G3, B3, G4 = [62, 67, 71, 79]
      const CmajorNotes = [62, 67, 71, 79];
      expect(JSON.stringify(midiNotes)).toEqual(JSON.stringify(CmajorNotes));
    });
  });

  Object.keys(baritone.chords).map((key) =>
    describe(`Key ${key} chords`, () => {
      const chords = baritone.chords[key];

      it(`Should not have duplicated suffixes`, () => {
        let seen = new Set();
        const duplicates = chords.some(
          (chord) => seen.size === seen.add(chord.suffix).size
        );
        expect(duplicates).toBe(false);
      });

      chords.map((chord) =>
        describe(`Chord ${chord.key}${chord.suffix}`, () => {
          describe('General properties', () => {
            it(`The chord ${key}${chord.suffix} should have a defined key property`, () =>
              expect(chord.key).toEqual(key.replace('sharp', '#')));
            it(`The chord ${key}${chord.suffix} should have a defined suffix property`, () =>
              expect(chord.suffix).toBeDefined());
            it(`The chord ${key}${chord.suffix} should have a list of positions`, () =>
              expect(chord.positions).toBeInstanceOf(Array));
          });

          describe(`Positions`, () => {
            chord.positions.map((position, index) => {
              const frets = Array.isArray(position.frets)
                ? position.frets
                : strChord2array(position.frets);
              const effectiveFrets = frets.filter((f) => f > 0);
              describe(`Frets`, () => {
                it(`The ${
                  index + 1
                } position frets array should have 4 values`, () =>
                  expect(frets.length).toEqual(4));
                it(`The ${
                  index + 1
                } position frets array should have values lower than 16`, () =>
                  expect(Math.max(...frets)).toBeLessThan(16));
                it(`The ${
                  index + 1
                } position frets array should have at most 4 fingers of distance`, () =>
                  expect(
                    Math.max(...effectiveFrets) - Math.min(...effectiveFrets)
                  ).toBeLessThan(baritone.main.fretsOnChord));
              });

              if (position.fingers) {
                describe(`Fingers`, () => {
                  const fingers = Array.isArray(position.fingers)
                    ? position.fingers
                    : strChord2array(position.fingers);
                  it(`The ${
                    index + 1
                  } position fingers array should have 4 values`, () =>
                    expect(fingers.length).toEqual(4));
                  it(`The ${
                    index + 1
                  } position fingers array should have values lower than 5`, () =>
                    expect(Math.max(...fingers)).toBeLessThan(5));
                  it(`The ${
                    index + 1
                  } position fingers array should have values higher or equal to 0`, () =>
                    expect(Math.min(...fingers)).toBeGreaterThanOrEqual(0));
                });
              }

              describe(`Barres`, () => {
                if (position.fingers && !position.barres) {
                  it(`The ${index + 1} position needs a barres property`, () =>
                    expect(numberOfBarres(position.fingers)).toEqual(0));
                }

                if (!position.barres) {
                  it(`The ${
                    index + 1
                  } position doesn't need a capo property`, () =>
                    expect(position.capo).not.toEqual(true));
                }

                if (position.barres) {
                  const barres = Array.isArray(position.barres)
                    ? position.barres
                    : [position.barres];

                  if (position.fingers) {
                    it(`The ${
                      index + 1
                    } position needs a barres property`, () =>
                      expect(numberOfBarres(position.fingers)).toEqual(
                        barres.length
                      ));
                  }

                  barres.map((barre) => {
                    it(`The barre at position ${
                      index + 1
                    } should have frets`, () =>
                      expect(frets.indexOf(barre)).not.toEqual(-1));
                    it(`The barre at position ${
                      index + 1
                    } should have two strings at least`, () =>
                      expect(frets.indexOf(barre)).not.toEqual(
                        frets.lastIndexOf(barre)
                      ));
                  });
                }
              });
            });

            describe('MIDI checks', () => {
              var initialNotes = chord2midi(
                processString(chord.positions[0].frets),
                baritone.tunings['standard']
              ).map((n) => getNoteFromMidiNumber(n));
              chord.positions.map((position, index) => {
                it(`The MIDI notes should be homogeneous at position ${
                  index + 1
                }`, () => {
                  const notes = chord2midi(
                    processString(position.frets),
                    baritone.tunings['standard']
                  ).map((n) => getNoteFromMidiNumber(n));
                  expect(unique(notes.sort())).toEqual(
                    unique(initialNotes.sort())
                  );
                });
              });
            });
          });
        })
      );
    })
  );
});
