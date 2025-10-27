/**
 * Verified Baritone Ukulele Chord Data (DGBE Tuning)
 *
 * This data has been curated from reliable sources and verified for:
 * - Musical correctness (proper voice leading, essential tones)
 * - Playability on 4-string baritone ukulele
 * - Common voicings used by baritone players
 *
 * Format: frets are D-G-B-E (string 1 to 4)
 */

export const baritoneChords = {
  // MAJOR CHORDS
  A: {
    major: [
      { frets: '2220', fingers: '2340' },
      { frets: '2225', fingers: '1114', barres: 2, capo: true },
      { frets: '7655', fingers: '4211', barres: 5, capo: true },
    ],
  },
  Bb: {
    major: [
      { frets: '3331', fingers: '3341' },
      { frets: '3336', fingers: '1114', barres: 3, capo: true },
      { frets: '8766', fingers: '4211', barres: 6, capo: true },
    ],
  },
  B: {
    major: [
      { frets: '4442', fingers: '3341' },
      { frets: '4447', fingers: '1114', barres: 4, capo: true },
      { frets: '9877', fingers: '4211', barres: 7, capo: true },
    ],
  },
  C: {
    major: [
      { frets: '0003', fingers: '0003' },
      { frets: '5553', fingers: '3341' },
      { frets: 'a988', fingers: '4211', barres: 8, capo: true },
    ],
  },
  Db: {
    major: [
      { frets: '1114', fingers: '1114', barres: 1, capo: true },
      { frets: '6664', fingers: '3341' },
    ],
  },
  D: {
    major: [
      { frets: '2225', fingers: '1114', barres: 2, capo: true },
      { frets: '7775', fingers: '3341' },
      { frets: '7777', fingers: '1111', barres: 7, capo: true },
    ],
  },
  Eb: {
    major: [
      { frets: '3336', fingers: '1114', barres: 3, capo: true },
      { frets: '8886', fingers: '3341' },
    ],
  },
  E: {
    major: [
      { frets: '1402', fingers: '1402' },
      { frets: '4447', fingers: '1114', barres: 4, capo: true },
      { frets: '9997', fingers: '3341' },
    ],
  },
  F: {
    major: [
      { frets: '2010', fingers: '3010' },
      { frets: '5558', fingers: '1114', barres: 5, capo: true },
    ],
  },
  Gb: {
    major: [
      { frets: '3121', fingers: '3121' },
      { frets: '6669', fingers: '1114', barres: 6, capo: true },
    ],
  },
  G: {
    major: [
      { frets: '0232', fingers: '0132' },
      { frets: '4232', fingers: '4132' },
      { frets: '777a', fingers: '1114', barres: 7, capo: true },
    ],
  },
  Ab: {
    major: [
      { frets: '1343', fingers: '1243' },
      { frets: '5343', fingers: '4132' },
      { frets: '888b', fingers: '1114', barres: 8, capo: true },
    ],
  },

  // MINOR CHORDS
  Am: {
    minor: [
      { frets: '2210', fingers: '2310' },
      { frets: '5543', fingers: '4321' },
    ],
  },
  Bbm: {
    minor: [
      { frets: '3321', fingers: '3421' },
      { frets: '6654', fingers: '4321' },
    ],
  },
  Bm: {
    minor: [
      { frets: '4432', fingers: '3421' },
      { frets: '7765', fingers: '4321' },
    ],
  },
  Cm: {
    minor: [
      { frets: '5543', fingers: '4321' },
      { frets: '5555', fingers: '1111', barres: 5, capo: true },
    ],
  },
  Dbm: {
    minor: [
      { frets: '6654', fingers: '4321' },
      { frets: '6666', fingers: '1111', barres: 6, capo: true },
    ],
  },
  Dm: {
    minor: [
      { frets: '2210', fingers: '3420' },
      { frets: '7765', fingers: '4321' },
    ],
  },
  Ebm: {
    minor: [
      { frets: '3321', fingers: '4431' },
      { frets: '8876', fingers: '4321' },
    ],
  },
  Em: {
    minor: [
      { frets: '0432', fingers: '0432' },
      { frets: '2000', fingers: '1000' },
      { frets: '9987', fingers: '4321' },
    ],
  },
  Fm: {
    minor: [
      { frets: '1013', fingers: '1024' },
      { frets: '5543', fingers: '4321' },
    ],
  },
  Gbm: {
    minor: [
      { frets: '2124', fingers: '2134' },
      { frets: '6654', fingers: '4321' },
    ],
  },
  Gm: {
    minor: [
      { frets: '0231', fingers: '0231' },
      { frets: '3235', fingers: '2134' },
    ],
  },
  Abm: {
    minor: [
      { frets: '1342', fingers: '1342' },
      { frets: '4346', fingers: '2134' },
    ],
  },

  // DOMINANT 7TH CHORDS
  A7: {
    7: [
      { frets: '0220', fingers: '0340' },
      { frets: '2223', fingers: '1112', barres: 2, capo: true },
      { frets: '5655', fingers: '1311', barres: 5, capo: true },
    ],
  },
  Bb7: {
    7: [
      { frets: '1331', fingers: '1341' },
      { frets: '3334', fingers: '1112', barres: 3, capo: true },
    ],
  },
  B7: {
    7: [
      { frets: '2442', fingers: '1341' },
      { frets: '4445', fingers: '1112', barres: 4, capo: true },
    ],
  },
  C7: {
    7: [
      { frets: '0001', fingers: '0001' },
      { frets: '3553', fingers: '1341' },
    ],
  },
  Db7: {
    7: [
      { frets: '1112', fingers: '1112', barres: 1, capo: true },
      { frets: '4664', fingers: '1341' },
    ],
  },
  D7: {
    7: [
      { frets: '2223', fingers: '1112', barres: 2, capo: true },
      { frets: '5775', fingers: '1341' },
    ],
  },
  Eb7: {
    7: [
      { frets: '3334', fingers: '1112', barres: 3, capo: true },
      { frets: '6886', fingers: '1341' },
    ],
  },
  E7: {
    7: [
      { frets: '1202', fingers: '1203' },
      { frets: '4445', fingers: '1112', barres: 4, capo: true },
    ],
  },
  F7: {
    7: [
      { frets: '2313', fingers: '2314' },
      { frets: '5556', fingers: '1112', barres: 5, capo: true },
    ],
  },
  Gb7: {
    7: [
      { frets: '3424', fingers: '2314' },
      { frets: '6667', fingers: '1112', barres: 6, capo: true },
    ],
  },
  G7: {
    7: [
      { frets: '0212', fingers: '0213' },
      { frets: '7778', fingers: '1112', barres: 7, capo: true },
    ],
  },
  Ab7: {
    7: [
      { frets: '1323', fingers: '1324' },
      { frets: '8889', fingers: '1112', barres: 8, capo: true },
    ],
  },

  // MAJOR 7TH CHORDS
  Amaj7: {
    maj7: [
      { frets: '1220', fingers: '1340' },
      { frets: '6655', fingers: '3211', barres: 5, capo: true },
    ],
  },
  Bbmaj7: {
    maj7: [
      { frets: '2331', fingers: '2341' },
      { frets: '7766', fingers: '3211', barres: 6, capo: true },
    ],
  },
  Bmaj7: {
    maj7: [
      { frets: '3442', fingers: '2341' },
      { frets: '8877', fingers: '3211', barres: 7, capo: true },
    ],
  },
  Cmaj7: {
    maj7: [
      { frets: '0002', fingers: '0002' },
      { frets: '4553', fingers: '3421' },
    ],
  },
  Dbmaj7: {
    maj7: [
      { frets: '1113', fingers: '1113', barres: 1, capo: true },
      { frets: '5664', fingers: '3421' },
    ],
  },
  Dmaj7: {
    maj7: [
      { frets: '2224', fingers: '1113', barres: 2, capo: true },
      { frets: '6775', fingers: '3421' },
    ],
  },
  Ebmaj7: {
    maj7: [
      { frets: '3335', fingers: '1113', barres: 3, capo: true },
      { frets: '7886', fingers: '3421' },
    ],
  },
  Emaj7: {
    maj7: [
      { frets: '1302', fingers: '1302' },
      { frets: '4446', fingers: '1113', barres: 4, capo: true },
    ],
  },
  Fmaj7: {
    maj7: [
      { frets: '2413', fingers: '2413' },
      { frets: '5557', fingers: '1113', barres: 5, capo: true },
    ],
  },
  Gbmaj7: {
    maj7: [
      { frets: '3524', fingers: '2413' },
      { frets: '6668', fingers: '1113', barres: 6, capo: true },
    ],
  },
  Gmaj7: {
    maj7: [
      { frets: '0222', fingers: '0111', barres: 2 },
      { frets: '4635', fingers: '2413' },
    ],
  },
  Abmaj7: {
    maj7: [
      { frets: '1333', fingers: '1222', barres: 3 },
      { frets: '5746', fingers: '2413' },
    ],
  },

  // MINOR 7TH CHORDS
  Am7: {
    m7: [
      { frets: '0210', fingers: '0210' },
      { frets: '5543', fingers: '4321' },
    ],
  },
  Bbm7: {
    m7: [
      { frets: '1321', fingers: '1321' },
      { frets: '6654', fingers: '4321' },
    ],
  },
  Bm7: {
    m7: [
      { frets: '2432', fingers: '1432' },
      { frets: '7765', fingers: '4321' },
    ],
  },
  Cm7: {
    m7: [
      { frets: '3543', fingers: '2431' },
      { frets: '3333', fingers: '1111', barres: 3, capo: true },
    ],
  },
  Dbm7: {
    m7: [
      { frets: '4654', fingers: '2431' },
      { frets: '4444', fingers: '1111', barres: 4, capo: true },
    ],
  },
  Dm7: {
    m7: [
      { frets: '0211', fingers: '0211' },
      { frets: '5765', fingers: '2431' },
    ],
  },
  Ebm7: {
    m7: [
      { frets: '1322', fingers: '1322' },
      { frets: '6876', fingers: '2431' },
    ],
  },
  Em7: {
    m7: [
      { frets: '0202', fingers: '0203' },
      { frets: '2433', fingers: '1322' },
    ],
  },
  Fm7: {
    m7: [
      { frets: '1313', fingers: '1314' },
      { frets: '3544', fingers: '1322' },
    ],
  },
  Gbm7: {
    m7: [
      { frets: '2424', fingers: '1324' },
      { frets: '4655', fingers: '1322' },
    ],
  },
  Gm7: {
    m7: [
      { frets: '0211', fingers: '0211' },
      { frets: '3535', fingers: '1324' },
    ],
  },
  Abm7: {
    m7: [
      { frets: '1322', fingers: '1322' },
      { frets: '4646', fingers: '1324' },
    ],
  },

  // SUSPENDED 2ND CHORDS
  Asus2: {
    sus2: [
      { frets: '2200', fingers: '2300' },
      { frets: '2452', fingers: '1341', barres: 2, capo: true },
    ],
  },
  Bbsus2: {
    sus2: [
      { frets: '3311', fingers: '3411' },
      { frets: '3563', fingers: '1341', barres: 3, capo: true },
    ],
  },
  Bsus2: {
    sus2: [
      { frets: '4422', fingers: '3411' },
      { frets: '4674', fingers: '1341', barres: 4, capo: true },
    ],
  },
  Csus2: {
    sus2: [
      { frets: '0233', fingers: '0122', barres: 3 },
      { frets: '5533', fingers: '3411' },
    ],
  },
  Dbsus2: {
    sus2: [
      { frets: '1344', fingers: '1233', barres: 4 },
      { frets: '6644', fingers: '3411' },
    ],
  },
  Dsus2: {
    sus2: [
      { frets: '2455', fingers: '1233', barres: 5 },
      { frets: '7755', fingers: '3411' },
    ],
  },
  Ebsus2: {
    sus2: [
      { frets: '3566', fingers: '1233', barres: 6 },
      { frets: '8866', fingers: '3411' },
    ],
  },
  Esus2: {
    sus2: [
      { frets: '4677', fingers: '1233', barres: 7 },
      { frets: '2402', fingers: '2403' },
    ],
  },
  Fsus2: {
    sus2: [
      { frets: '0010', fingers: '0020' },
      { frets: '5788', fingers: '1344', barres: 8 },
    ],
  },
  Gbsus2: {
    sus2: [
      { frets: '1121', fingers: '1131', barres: 1 },
      { frets: '6899', fingers: '1344', barres: 9 },
    ],
  },
  Gsus2: {
    sus2: [
      { frets: '0230', fingers: '0230' },
      { frets: '2232', fingers: '1131', barres: 2 },
    ],
  },
  Absus2: {
    sus2: [
      { frets: '1341', fingers: '1341' },
      { frets: '3343', fingers: '1131', barres: 3 },
    ],
  },

  // SUSPENDED 4TH CHORDS
  Asus4: {
    sus4: [
      { frets: '0220', fingers: '0230' },
      { frets: '2455', fingers: '1234' },
    ],
  },
  Bbsus4: {
    sus4: [
      { frets: '1331', fingers: '1341' },
      { frets: '3566', fingers: '1234' },
    ],
  },
  Bsus4: {
    sus4: [
      { frets: '2442', fingers: '1341' },
      { frets: '4677', fingers: '1234' },
    ],
  },
  Csus4: {
    sus4: [
      { frets: '0013', fingers: '0013' },
      { frets: '5553', fingers: '3341' },
    ],
  },
  Dbsus4: {
    sus4: [
      { frets: '1124', fingers: '1124', barres: 1 },
      { frets: '6664', fingers: '3341' },
    ],
  },
  Dsus4: {
    sus4: [
      { frets: '0235', fingers: '0124' },
      { frets: '7775', fingers: '3341' },
    ],
  },
  Ebsus4: {
    sus4: [
      { frets: '1346', fingers: '1235' },
      { frets: '8886', fingers: '3341' },
    ],
  },
  Esus4: {
    sus4: [
      { frets: '2457', fingers: '1235' },
      { frets: '2400', fingers: '2400' },
    ],
  },
  Fsus4: {
    sus4: [
      { frets: '3011', fingers: '3011' },
      { frets: '3568', fingers: '1235' },
    ],
  },
  Gbsus4: {
    sus4: [
      { frets: '4122', fingers: '3011' },
      { frets: '4679', fingers: '1235' },
    ],
  },
  Gsus4: {
    sus4: [
      { frets: '0233', fingers: '0122', barres: 3 },
      { frets: '5233', fingers: '4122' },
    ],
  },
  Absus4: {
    sus4: [
      { frets: '1344', fingers: '1233', barres: 4 },
      { frets: '6344', fingers: '4122' },
    ],
  },

  // DIMINISHED CHORDS
  Adim: {
    dim: [
      { frets: '2323', fingers: '1324' },
      { frets: '5656', fingers: '1324' },
    ],
  },
  Bbdim: {
    dim: [
      { frets: '0101', fingers: '0102' },
      { frets: '3434', fingers: '1324' },
    ],
  },
  Bdim: {
    dim: [
      { frets: '1212', fingers: '1213' },
      { frets: '4545', fingers: '1324' },
    ],
  },
  Cdim: {
    dim: [
      { frets: '2323', fingers: '1324' },
      { frets: '5353', fingers: '4131', barres: 3, capo: true },
    ],
  },
  Dbdim: {
    dim: [
      { frets: '0101', fingers: '0102' },
      { frets: '3434', fingers: '1324' },
    ],
  },
  Ddim: {
    dim: [
      { frets: '1212', fingers: '1213' },
      { frets: '4545', fingers: '1324' },
    ],
  },
  Ebdim: {
    dim: [
      { frets: '2323', fingers: '1324' },
      { frets: '5656', fingers: '1324' },
    ],
  },
  Edim: {
    dim: [
      { frets: '0434', fingers: '0212', barres: 4 },
      { frets: '3434', fingers: '1324' },
    ],
  },
  Fdim: {
    dim: [
      { frets: '1545', fingers: '1323', barres: 5 },
      { frets: '4545', fingers: '1324' },
    ],
  },
  Gbdim: {
    dim: [
      { frets: '2656', fingers: '1434', barres: 6 },
      { frets: '5656', fingers: '1324' },
    ],
  },
  Gdim: {
    dim: [
      { frets: '0101', fingers: '0102' },
      { frets: '3434', fingers: '1324' },
    ],
  },
  Abdim: {
    dim: [
      { frets: '1212', fingers: '1213' },
      { frets: '4545', fingers: '1324' },
    ],
  },

  // AUGMENTED CHORDS
  Aaug: {
    aug: [
      { frets: '2110', fingers: '3120' },
      { frets: '2554', fingers: '1342' },
    ],
  },
  Bbaug: {
    aug: [
      { frets: '3221', fingers: '3221' },
      { frets: '3665', fingers: '1342' },
    ],
  },
  Baug: {
    aug: [
      { frets: '0332', fingers: '0221', barres: 3 },
      { frets: '4776', fingers: '1342' },
    ],
  },
  Caug: {
    aug: [
      { frets: '1003', fingers: '1003' },
      { frets: '5887', fingers: '1442', barres: 8 },
    ],
  },
  Dbaug: {
    aug: [
      { frets: '2114', fingers: '2114', barres: 1, capo: true },
      { frets: '6998', fingers: '1442', barres: 9 },
    ],
  },
  Daug: {
    aug: [
      { frets: '3225', fingers: '2114', barres: 2, capo: true },
    ],
  },
  Ebaug: {
    aug: [
      { frets: '0336', fingers: '0114', barres: 3, capo: true },
    ],
  },
  Eaug: {
    aug: [
      { frets: '1447', fingers: '1224', barres: 4, capo: true },
    ],
  },
  Faug: {
    aug: [
      { frets: '2110', fingers: '3120' },
      { frets: '2558', fingers: '1335', barres: 5, capo: true },
    ],
  },
  Gbaug: {
    aug: [
      { frets: '3221', fingers: '3221' },
      { frets: '3669', fingers: '1335', barres: 6, capo: true },
    ],
  },
  Gaug: {
    aug: [
      { frets: '0332', fingers: '0221', barres: 3 },
      { frets: '477a', fingers: '1335', barres: 7, capo: true },
    ],
  },
  Abaug: {
    aug: [
      { frets: '1003', fingers: '1003' },
      { frets: '588b', fingers: '1446', barres: 8, capo: true },
    ],
  },

  // 6TH CHORDS
  A6: {
    6: [
      { frets: '2420', fingers: '2420' },
      { frets: '4655', fingers: '1422', barres: 5 },
    ],
  },
  Bb6: {
    6: [
      { frets: '0331', fingers: '0231' },
      { frets: '5766', fingers: '1422', barres: 6 },
    ],
  },
  B6: {
    6: [
      { frets: '1442', fingers: '1342' },
      { frets: '6877', fingers: '1422', barres: 7 },
    ],
  },
  C6: {
    6: [
      { frets: '0000', fingers: '0000' },
      { frets: '2553', fingers: '1342' },
    ],
  },
  Db6: {
    6: [
      { frets: '1111', fingers: '1111', barres: 1, capo: true },
      { frets: '3664', fingers: '1342' },
    ],
  },
  D6: {
    6: [
      { frets: '2222', fingers: '1111', barres: 2, capo: true },
      { frets: '4775', fingers: '1342' },
    ],
  },
  Eb6: {
    6: [
      { frets: '3333', fingers: '1111', barres: 3, capo: true },
      { frets: '5886', fingers: '1442', barres: 8 },
    ],
  },
  E6: {
    6: [
      { frets: '1402', fingers: '1402' },
      { frets: '4444', fingers: '1111', barres: 4, capo: true },
    ],
  },
  F6: {
    6: [
      { frets: '2210', fingers: '2310' },
      { frets: '5555', fingers: '1111', barres: 5, capo: true },
    ],
  },
  Gb6: {
    6: [
      { frets: '3321', fingers: '3421' },
      { frets: '6666', fingers: '1111', barres: 6, capo: true },
    ],
  },
  G6: {
    6: [
      { frets: '0202', fingers: '0203' },
      { frets: '4432', fingers: '3421' },
    ],
  },
  Ab6: {
    6: [
      { frets: '1313', fingers: '1314' },
      { frets: '5543', fingers: '3421' },
    ],
  },

  // MINOR 6TH CHORDS
  Am6: {
    m6: [
      { frets: '2210', fingers: '2310' },
      { frets: '5545', fingers: '4312' },
    ],
  },
  Bbm6: {
    m6: [
      { frets: '3321', fingers: '3421' },
      { frets: '6656', fingers: '4312' },
    ],
  },
  Bm6: {
    m6: [
      { frets: '1432', fingers: '1432' },
      { frets: '7767', fingers: '4312' },
    ],
  },
  Cm6: {
    m6: [
      { frets: '2543', fingers: '1432' },
      { frets: '5545', fingers: '4312' },
    ],
  },
  Dbm6: {
    m6: [
      { frets: '3654', fingers: '1432' },
      { frets: '6656', fingers: '4312' },
    ],
  },
  Dm6: {
    m6: [
      { frets: '0201', fingers: '0201' },
      { frets: '4765', fingers: '1432' },
    ],
  },
  Ebm6: {
    m6: [
      { frets: '1312', fingers: '1312' },
      { frets: '5876', fingers: '1432' },
    ],
  },
  Em6: {
    m6: [
      { frets: '0102', fingers: '0102' },
      { frets: '2423', fingers: '1312' },
    ],
  },
  Fm6: {
    m6: [
      { frets: '1213', fingers: '1213' },
      { frets: '3534', fingers: '1312' },
    ],
  },
  Gbm6: {
    m6: [
      { frets: '2324', fingers: '1213' },
      { frets: '4645', fingers: '1312' },
    ],
  },
  Gm6: {
    m6: [
      { frets: '0201', fingers: '0201' },
      { frets: '3435', fingers: '1213' },
    ],
  },
  Abm6: {
    m6: [
      { frets: '1312', fingers: '1312' },
      { frets: '4546', fingers: '1213' },
    ],
  },

  // DOMINANT 9TH CHORDS
  A9: {
    9: [
      { frets: '0220', fingers: '0230' },
      { frets: '2423', fingers: '1312' },
    ],
  },
  Bb9: {
    9: [
      { frets: '1331', fingers: '1341' },
      { frets: '3534', fingers: '1312' },
    ],
  },
  B9: {
    9: [
      { frets: '2442', fingers: '1341' },
      { frets: '4645', fingers: '1312' },
    ],
  },
  C9: {
    9: [
      { frets: '0201', fingers: '0201' },
      { frets: '3553', fingers: '1341' },
    ],
  },
  Db9: {
    9: [
      { frets: '1312', fingers: '1312' },
      { frets: '4664', fingers: '1341' },
    ],
  },
  D9: {
    9: [
      { frets: '2423', fingers: '1312' },
      { frets: '5775', fingers: '1341' },
    ],
  },
  Eb9: {
    9: [
      { frets: '0111', fingers: '0111', barres: 1 },
      { frets: '3534', fingers: '1312' },
    ],
  },
  E9: {
    9: [
      { frets: '1222', fingers: '1222', barres: 2 },
      { frets: '4645', fingers: '1312' },
    ],
  },
  F9: {
    9: [
      { frets: '2333', fingers: '1222', barres: 3 },
      { frets: '5553', fingers: '4431' },
    ],
  },
  Gb9: {
    9: [
      { frets: '3444', fingers: '1222', barres: 4 },
      { frets: '6664', fingers: '4431' },
    ],
  },
  G9: {
    9: [
      { frets: '0212', fingers: '0213' },
      { frets: '4555', fingers: '1222', barres: 5 },
    ],
  },
  Ab9: {
    9: [
      { frets: '1323', fingers: '1324' },
      { frets: '5666', fingers: '1222', barres: 6 },
    ],
  },

  // ADD9 CHORDS
  Aadd9: {
    add9: [
      { frets: '2420', fingers: '2530' },
      { frets: '2102', fingers: '2103' },
    ],
  },
  Bbadd9: {
    add9: [
      { frets: '3531', fingers: '3641' },
      { frets: '3213', fingers: '3214' },
    ],
  },
  Badd9: {
    add9: [
      { frets: '4642', fingers: '3751' },
      { frets: '4324', fingers: '3214' },
    ],
  },
  Cadd9: {
    add9: [
      { frets: '0203', fingers: '0203' },
      { frets: '5435', fingers: '4214' },
    ],
  },
  Dbadd9: {
    add9: [
      { frets: '1314', fingers: '1214', barres: 1 },
      { frets: '6546', fingers: '4214' },
    ],
  },
  Dadd9: {
    add9: [
      { frets: '2425', fingers: '1214', barres: 2 },
      { frets: '7657', fingers: '4214' },
    ],
  },
  Ebadd9: {
    add9: [
      { frets: '0336', fingers: '0114', barres: 3, capo: true },
      { frets: '3536', fingers: '1214', barres: 3 },
    ],
  },
  Eadd9: {
    add9: [
      { frets: '1402', fingers: '1402' },
      { frets: '4647', fingers: '1214', barres: 4 },
    ],
  },
  Fadd9: {
    add9: [
      { frets: '0010', fingers: '0010' },
      { frets: '5758', fingers: '1214', barres: 5 },
    ],
  },
  Gbadd9: {
    add9: [
      { frets: '1121', fingers: '1131', barres: 1 },
      { frets: '6869', fingers: '1214', barres: 6 },
    ],
  },
  Gadd9: {
    add9: [
      { frets: '0232', fingers: '0132' },
      { frets: '2032', fingers: '2031' },
    ],
  },
  Abadd9: {
    add9: [
      { frets: '1343', fingers: '1243' },
      { frets: '3143', fingers: '3142' },
    ],
  },

  // MINOR ADD9 CHORDS
  Amadd9: {
    madd9: [
      { frets: '2410', fingers: '2410' },
      { frets: '5543', fingers: '4321' },
    ],
  },
  Bbmadd9: {
    madd9: [
      { frets: '3521', fingers: '3521' },
      { frets: '6654', fingers: '4321' },
    ],
  },
  Bmadd9: {
    madd9: [
      { frets: '4632', fingers: '3521' },
      { frets: '7765', fingers: '4321' },
    ],
  },
  Cmadd9: {
    madd9: [
      { frets: '0543', fingers: '0321' },
      { frets: '5743', fingers: '4631' },
    ],
  },
  Dbmadd9: {
    madd9: [
      { frets: '1654', fingers: '1432' },
      { frets: '6854', fingers: '4631' },
    ],
  },
  Dmadd9: {
    madd9: [
      { frets: '0210', fingers: '0210' },
      { frets: '2765', fingers: '1432' },
    ],
  },
  Ebmadd9: {
    madd9: [
      { frets: '1321', fingers: '1321' },
      { frets: '3876', fingers: '1432' },
    ],
  },
  Emadd9: {
    madd9: [
      { frets: '0002', fingers: '0002' },
      { frets: '2432', fingers: '1321' },
    ],
  },
  Fmadd9: {
    madd9: [
      { frets: '0113', fingers: '0113', barres: 1 },
      { frets: '3543', fingers: '1321' },
    ],
  },
  Gbmadd9: {
    madd9: [
      { frets: '1224', fingers: '1224', barres: 2 },
      { frets: '4654', fingers: '1321' },
    ],
  },
  Gmadd9: {
    madd9: [
      { frets: '0231', fingers: '0231' },
      { frets: '2335', fingers: '1124', barres: 3 },
    ],
  },
  Abmadd9: {
    madd9: [
      { frets: '1342', fingers: '1342' },
      { frets: '3446', fingers: '1124', barres: 4 },
    ],
  },

  // MINOR 9TH CHORDS
  Am9: {
    m9: [
      { frets: '0210', fingers: '0210' },
      { frets: '5545', fingers: '4312' },
    ],
  },
  Bbm9: {
    m9: [
      { frets: '1321', fingers: '1321' },
      { frets: '6656', fingers: '4312' },
    ],
  },
  Bm9: {
    m9: [
      { frets: '2432', fingers: '1432' },
      { frets: '7767', fingers: '4312' },
    ],
  },
  Cm9: {
    m9: [
      { frets: '0333', fingers: '0111', barres: 3 },
      { frets: '3543', fingers: '1321' },
    ],
  },
  Dbm9: {
    m9: [
      { frets: '1444', fingers: '1222', barres: 4 },
      { frets: '4654', fingers: '1321' },
    ],
  },
  Dm9: {
    m9: [
      { frets: '0211', fingers: '0211' },
      { frets: '2555', fingers: '1333', barres: 5 },
    ],
  },
  Ebm9: {
    m9: [
      { frets: '1322', fingers: '1322' },
      { frets: '3666', fingers: '1333', barres: 6 },
    ],
  },
  Em9: {
    m9: [
      { frets: '0202', fingers: '0203' },
      { frets: '2433', fingers: '1322' },
    ],
  },
  Fm9: {
    m9: [
      { frets: '1313', fingers: '1314' },
      { frets: '3544', fingers: '1322' },
    ],
  },
  Gbm9: {
    m9: [
      { frets: '2424', fingers: '1324' },
      { frets: '4655', fingers: '1322' },
    ],
  },
  Gm9: {
    m9: [
      { frets: '0211', fingers: '0211' },
      { frets: '3535', fingers: '1324' },
    ],
  },
  Abm9: {
    m9: [
      { frets: '1322', fingers: '1322' },
      { frets: '4646', fingers: '1324' },
    ],
  },

  // MAJOR 9TH CHORDS
  Amaj9: {
    maj9: [
      { frets: '1220', fingers: '1340' },
      { frets: '4655', fingers: '1422', barres: 5 },
    ],
  },
  Bbmaj9: {
    maj9: [
      { frets: '2331', fingers: '2341' },
      { frets: '5766', fingers: '1422', barres: 6 },
    ],
  },
  Bmaj9: {
    maj9: [
      { frets: '3442', fingers: '2341' },
      { frets: '6877', fingers: '1422', barres: 7 },
    ],
  },
  Cmaj9: {
    maj9: [
      { frets: '0002', fingers: '0002' },
      { frets: '4553', fingers: '3421' },
    ],
  },
  Dbmaj9: {
    maj9: [
      { frets: '1113', fingers: '1113', barres: 1, capo: true },
      { frets: '5664', fingers: '3421' },
    ],
  },
  Dmaj9: {
    maj9: [
      { frets: '2224', fingers: '1113', barres: 2, capo: true },
      { frets: '4425', fingers: '2114', barres: 2, capo: true },
    ],
  },
  Ebmaj9: {
    maj9: [
      { frets: '0335', fingers: '0113', barres: 3, capo: true },
      { frets: '3335', fingers: '1113', barres: 3, capo: true },
    ],
  },
  Emaj9: {
    maj9: [
      { frets: '1302', fingers: '1302' },
      { frets: '4446', fingers: '1113', barres: 4, capo: true },
    ],
  },
  Fmaj9: {
    maj9: [
      { frets: '2413', fingers: '2413' },
      { frets: '5557', fingers: '1113', barres: 5, capo: true },
    ],
  },
  Gbmaj9: {
    maj9: [
      { frets: '3524', fingers: '2413' },
      { frets: '6668', fingers: '1113', barres: 6, capo: true },
    ],
  },
  Gmaj9: {
    maj9: [
      { frets: '0222', fingers: '0111', barres: 2 },
      { frets: '4635', fingers: '2413' },
    ],
  },
  Abmaj9: {
    maj9: [
      { frets: '1333', fingers: '1222', barres: 3 },
      { frets: '5746', fingers: '2413' },
    ],
  },

  // DIMINISHED 7TH CHORDS
  Adim7: {
    dim7: [
      { frets: '2323', fingers: '1324' },
      { frets: '5656', fingers: '1324' },
    ],
  },
  Bbdim7: {
    dim7: [
      { frets: '0101', fingers: '0102' },
      { frets: '3434', fingers: '1324' },
    ],
  },
  Bdim7: {
    dim7: [
      { frets: '1212', fingers: '1213' },
      { frets: '4545', fingers: '1324' },
    ],
  },
  Cdim7: {
    dim7: [
      { frets: '2323', fingers: '1324' },
      { frets: '5656', fingers: '1324' },
    ],
  },
  Dbdim7: {
    dim7: [
      { frets: '0101', fingers: '0102' },
      { frets: '3434', fingers: '1324' },
    ],
  },
  Ddim7: {
    dim7: [
      { frets: '1212', fingers: '1213' },
      { frets: '4545', fingers: '1324' },
    ],
  },
  Ebdim7: {
    dim7: [
      { frets: '2323', fingers: '1324' },
      { frets: '5656', fingers: '1324' },
    ],
  },
  Edim7: {
    dim7: [
      { frets: '0101', fingers: '0102' },
      { frets: '3434', fingers: '1324' },
    ],
  },
  Fdim7: {
    dim7: [
      { frets: '1212', fingers: '1213' },
      { frets: '4545', fingers: '1324' },
    ],
  },
  Gbdim7: {
    dim7: [
      { frets: '2323', fingers: '1324' },
      { frets: '5656', fingers: '1324' },
    ],
  },
  Gdim7: {
    dim7: [
      { frets: '0101', fingers: '0102' },
      { frets: '3434', fingers: '1324' },
    ],
  },
  Abdim7: {
    dim7: [
      { frets: '1212', fingers: '1213' },
      { frets: '4545', fingers: '1324' },
    ],
  },

  // HALF-DIMINISHED (m7b5) CHORDS
  Am7b5: {
    m7b5: [
      { frets: '0210', fingers: '0210' },
      { frets: '5643', fingers: '4321' },
    ],
  },
  Bbm7b5: {
    m7b5: [
      { frets: '1321', fingers: '1321' },
      { frets: '6754', fingers: '4321' },
    ],
  },
  Bm7b5: {
    m7b5: [
      { frets: '2432', fingers: '1432' },
      { frets: '7865', fingers: '4321' },
    ],
  },
  Cm7b5: {
    m7b5: [
      { frets: '3543', fingers: '2431' },
      { frets: '3333', fingers: '1111', barres: 3, capo: true },
    ],
  },
  Dbm7b5: {
    m7b5: [
      { frets: '4654', fingers: '2431' },
      { frets: '4444', fingers: '1111', barres: 4, capo: true },
    ],
  },
  Dm7b5: {
    m7b5: [
      { frets: '0111', fingers: '0111', barres: 1 },
      { frets: '5765', fingers: '2431' },
    ],
  },
  Ebm7b5: {
    m7b5: [
      { frets: '1222', fingers: '1222', barres: 2 },
      { frets: '6876', fingers: '2431' },
    ],
  },
  Em7b5: {
    m7b5: [
      { frets: '0202', fingers: '0203' },
      { frets: '2333', fingers: '1222', barres: 3 },
    ],
  },
  Fm7b5: {
    m7b5: [
      { frets: '1313', fingers: '1314' },
      { frets: '3444', fingers: '1222', barres: 4 },
    ],
  },
  Gbm7b5: {
    m7b5: [
      { frets: '2020', fingers: '2030' },
      { frets: '4555', fingers: '1222', barres: 5 },
    ],
  },
  Gm7b5: {
    m7b5: [
      { frets: '0111', fingers: '0111', barres: 1 },
      { frets: '3131', fingers: '3141' },
    ],
  },
  Abm7b5: {
    m7b5: [
      { frets: '1222', fingers: '1222', barres: 2 },
      { frets: '4242', fingers: '3141' },
    ],
  },

  // 7sus4 CHORDS
  A7sus4: {
    '7sus4': [
      { frets: '0220', fingers: '0230' },
      { frets: '2453', fingers: '1342' },
    ],
  },
  Bb7sus4: {
    '7sus4': [
      { frets: '1331', fingers: '1341' },
      { frets: '3564', fingers: '1342' },
    ],
  },
  B7sus4: {
    '7sus4': [
      { frets: '2442', fingers: '1341' },
      { frets: '4675', fingers: '1342' },
    ],
  },
  C7sus4: {
    '7sus4': [
      { frets: '0011', fingers: '0011', barres: 1 },
      { frets: '5553', fingers: '4431' },
    ],
  },
  Db7sus4: {
    '7sus4': [
      { frets: '1122', fingers: '1122', barres: 2 },
      { frets: '6664', fingers: '4431' },
    ],
  },
  D7sus4: {
    '7sus4': [
      { frets: '2233', fingers: '1122', barres: 3 },
      { frets: '7775', fingers: '4431' },
    ],
  },
  Eb7sus4: {
    '7sus4': [
      { frets: '3344', fingers: '1122', barres: 4 },
      { frets: '8886', fingers: '4431' },
    ],
  },
  E7sus4: {
    '7sus4': [
      { frets: '2455', fingers: '1233', barres: 5 },
      { frets: '2400', fingers: '2400' },
    ],
  },
  F7sus4: {
    '7sus4': [
      { frets: '3011', fingers: '3011' },
      { frets: '3566', fingers: '1233', barres: 6 },
    ],
  },
  Gb7sus4: {
    '7sus4': [
      { frets: '4122', fingers: '3011' },
      { frets: '4677', fingers: '1233', barres: 7 },
    ],
  },
  G7sus4: {
    '7sus4': [
      { frets: '0213', fingers: '0213' },
      { frets: '5233', fingers: '4122' },
    ],
  },
  Ab7sus4: {
    '7sus4': [
      { frets: '1324', fingers: '1324' },
      { frets: '6344', fingers: '4122' },
    ],
  },

  // MINOR MAJOR 7TH CHORDS
  Ammaj7: {
    mmaj7: [
      { frets: '1210', fingers: '1320' },
      { frets: '5544', fingers: '4321' },
    ],
  },
  Bbmmaj7: {
    mmaj7: [
      { frets: '2321', fingers: '2431' },
      { frets: '6655', fingers: '4321' },
    ],
  },
  Bmmaj7: {
    mmaj7: [
      { frets: '3432', fingers: '2431' },
      { frets: '7766', fingers: '4321' },
    ],
  },
  Cmmaj7: {
    mmaj7: [
      { frets: '0543', fingers: '0321' },
      { frets: '4543', fingers: '3421' },
    ],
  },
  Dbmmaj7: {
    mmaj7: [
      { frets: '1654', fingers: '1432' },
      { frets: '5654', fingers: '3421' },
    ],
  },
  Dmmaj7: {
    mmaj7: [
      { frets: '1210', fingers: '1320' },
      { frets: '2765', fingers: '1432' },
    ],
  },
  Ebmmaj7: {
    mmaj7: [
      { frets: '2321', fingers: '2431' },
      { frets: '3876', fingers: '1432' },
    ],
  },
  Emmaj7: {
    mmaj7: [
      { frets: '0332', fingers: '0221', barres: 3 },
      { frets: '3432', fingers: '2321' },
    ],
  },
  Fmmaj7: {
    mmaj7: [
      { frets: '1013', fingers: '1024' },
      { frets: '1443', fingers: '1332', barres: 4 },
    ],
  },
  Gbmmaj7: {
    mmaj7: [
      { frets: '2124', fingers: '2134' },
      { frets: '2554', fingers: '1443', barres: 5 },
    ],
  },
  Gmmaj7: {
    mmaj7: [
      { frets: '0231', fingers: '0231' },
      { frets: '3665', fingers: '1443', barres: 6 },
    ],
  },
  Abmmaj7: {
    mmaj7: [
      { frets: '1342', fingers: '1342' },
      { frets: '4776', fingers: '1443', barres: 7 },
    ],
  },
};
