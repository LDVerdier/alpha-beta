type GreekWord = {
  spelling: string;
  pronunciation: string;
  translation: string;
};

const GREEK_WORDS: GreekWord[] = [
  { spelling: 'ἄνθρωπος', pronunciation: 'ánthropos', translation: 'homme' },
  { spelling: 'γυνή', pronunciation: 'gunē', translation: 'femme' },
  { spelling: 'οἶκος', pronunciation: 'oikos', translation: 'maison' },
  { spelling: 'πόλις', pronunciation: 'pólis', translation: 'cité, ville' },
  { spelling: 'βίος', pronunciation: 'bíos', translation: 'vie' },
  { spelling: 'νόμος', pronunciation: 'nómos', translation: 'loi' },
  { spelling: 'γῆ', pronunciation: 'gē', translation: 'terre' },
  { spelling: 'θεός', pronunciation: 'theós', translation: 'dieu' },
  { spelling: 'ἡμέρα', pronunciation: 'hēméra', translation: 'jour' },
  { spelling: 'νύξ', pronunciation: 'nýx', translation: 'nuit' },
  { spelling: 'ἄνθος', pronunciation: 'ánthos', translation: 'fleur' },
  { spelling: 'δένδρον', pronunciation: 'déndron', translation: 'arbre' },
  { spelling: 'ὕδωρ', pronunciation: 'hýdōr', translation: 'eau' },
  { spelling: 'φως', pronunciation: 'phōs', translation: 'lumière' },
  { spelling: 'ἀγορά', pronunciation: 'agorá', translation: 'marché, agora' },
  { spelling: 'παιδίον', pronunciation: 'paidíon', translation: 'enfant' },
  { spelling: 'ὄνομα', pronunciation: 'ónoma', translation: 'nom' },
  { spelling: 'δώρον', pronunciation: 'dṓron', translation: 'cadeau' },
  { spelling: 'ψυχή', pronunciation: 'psukhḗ', translation: 'âme' },
  { spelling: 'τέχνη', pronunciation: 'téchnē', translation: 'art, métier' },
];
