const EXAMENS_DATA = [
  {
    key: 1,
    name: 'ACE',
    price: 0,
    amo: 10000,
  },
  {
    key: 2,
    name: 'Acétonurie',
    price: 0,
    amo: 2000,
  },
  {
    key: 3,
    name: 'Acide urique',
    price: 0,
    amo: 2500,
  },
  {
    key: 4,
    name: 'Acide urique urinaire',
    price: 0,
    amo: 2500,
  },
  {
    key: 5,
    name: 'Ag HBS',
    price: 0,
    amo: 8000,
  },
  {
    key: 6,
    name: 'ALAT (GPT)',
    price: 0,
    amo: 2000,
  },
  {
    key: 7,
    name: 'Albumine',
    price: 0,
    amo: 3000,
  },
  {
    key: 8,
    name: 'AFP',
    price: 0,
    amo: 10000,
  },
  {
    key: 9,
    name: 'AMYLASE (sang)',
    price: 0,
    amo: 8000,
  },
  {
    key: 10,
    name: 'AMYLASE (urine et autres)',
    price: 0,
    amo: 8000,
  },
  {
    key: 11,
    name: 'Anticorps anti HBE',
    price: 0,
    amo: 8000,
  },
  {
    key: 12,
    name: 'Anticorps anti HBS',
    price: 0,
    amo: 8000,
  },
  {
    key: 13,
    name: 'Anticorps anti VHC',
    price: 0,
    amo: 10000,
  },
  {
    key: 14,
    name: 'Anticorps anti HBC IgG',
    price: 0,
    amo: 8000,
  },
  {
    key: 15,
    name: 'Ag HBE',
    price: 0,
    amo: 8000,
  },
  {
    key: 16,
    name: 'Anti SM',
    price: 0,
    amo: 10_000,
  },
  {
    key: 17,
    name: 'Anti DNA',
    price: 0,
    amo: 10_000,
  },
  {
    key: 18,
    name: 'Anti CCP',
    price: 0,
    amo: 10_000,
  },
  {
    key: 19,
    name: 'ASAT (GOT)',
    price: 0,
    amo: 2_000,
  },
  {
    key: 20,
    name: 'ASLO',
    price: 0,
    amo: 5_000,
  },
  {
    key: 21,
    name: 'Aspiration gastrique (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 22,
    name: 'Bilan lipidique complet',
    price: 0,
    amo: 16_000,
  },
  {
    key: 23,
    name: 'Bilirubine',
    price: 0,
    amo: 5_000,
  },
  {
    key: 24,
    name: 'BW-RPR VDRL',
    price: 0,
    amo: 3_000,
  },
  {
    key: 25,
    name: 'Brucelose (sérologie)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 26,
    name: 'CA 125',
    price: 0,
    amo: 10_000,
  },
  {
    key: 27,
    name: 'CA 15-3',
    price: 0,
    amo: 10_000,
  },
  {
    key: 28,
    name: 'CA 19-9',
    price: 0,
    amo: 10_000,
  },
  {
    key: 29,
    name: 'Calcium',
    price: 0,
    amo: 2500,
  },
  {
    key: 30,
    name: 'Calcium urinaire',
    price: 0,
    amo: 2500,
  },
  {
    key: 31,
    name: 'Cathéter (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 32,
    name: 'CD4',
    price: 0,
    amo: 10_000,
  },
  {
    key: 33,
    name: 'Cholestérol total',
    price: 0,
    amo: 4_000,
  },
  {
    key: 34,
    name: 'CKMB',
    price: 0,
    amo: 20_000,
  },
  {
    key: 35,
    name: 'Clairance de la créatinine',
    price: 0,
    amo: 5_000,
  },
  {
    key: 36,
    name: 'CMV IgG',
    price: 0,
    amo: 14_000,
  },
  {
    key: 37,
    name: 'CMV IgG et IgM',
    price: 0,
    amo: 14_000,
  },
  {
    key: 38,
    name: 'Coproculture',
    price: 0,
    amo: 8_000,
  },
  {
    key: 39,
    name: 'Cortisol',
    price: 0,
    amo: 10_000,
  },
  {
    key: 40,
    name: 'Creatine phosphate kinase',
    price: 0,
    amo: 5_000,
  },
  {
    key: 41,
    name: 'Créatinine',
    price: 0,
    amo: 2500,
  },
  {
    key: 42,
    name: 'Créatinine urinaire',
    price: 0,
    amo: 2_500,
  },
  {
    key: 420,
    name: 'CRP',
    price: 0,
    amo: 5_000,
  },
  {
    key: 43,
    name: 'ECBU',
    price: 0,
    amo: 8_000,
  },
  {
    key: 44,
    name: 'Electrophorèse des protides',
    price: 0,
    amo: 6_000,
  },
  {
    key: 45,
    name: "Electrophorèse de l'hémoglobine",
    price: 0,
    amo: 6_500,
  },
  {
    key: 46,
    name: 'Estradiol',
    price: 0,
    amo: 8_000,
  },
  {
    key: 47,
    name: 'Examen bactériologique de la spère',
    price: 0,
    amo: 8_000,
  },
  {
    key: 48,
    name: 'Examen des sécrétions broncho-pulmonaires et expectorations',
    price: 0,
    amo: 8_000,
  },
  {
    key: 49,
    name: 'Facteurs rhumatoïdes',
    price: 0,
    amo: 8_000,
  },
  {
    key: 50,
    name: 'Falciformation',
    price: 0,
    amo: 1_000,
  },
  {
    key: 51,
    name: 'Fer',
    price: 0,
    amo: 5_000,
  },
  {
    key: 52,
    name: 'Ferritine',
    price: 0,
    amo: 8_000,
  },
  {
    key: 53,
    name: 'Fibrinogène',
    price: 0,
    amo: 3_000,
  },
  {
    key: 54,
    name: 'FSH',
    price: 0,
    amo: 8_000,
  },
  {
    key: 55,
    name: 'FT3',
    price: 0,
    amo: 8_000,
  },
  {
    key: 56,
    name: 'FT4',
    price: 0,
    amo: 8_000,
  },
  {
    key: 57,
    name: 'Gamma gluatamyl transferase',
    price: 0,
    amo: 4_000,
  },
  {
    key: 58,
    name: 'Glycémie',
    price: 0,
    amo: 1_000,
  },
  {
    key: 59,
    name: 'Glycémie post prandial',
    price: 0,
    amo: 2_000,
  },
  {
    key: 60,
    name: 'Glucosurie',
    price: 0,
    amo: 2_000,
  },
  {
    key: 61,
    name: 'GE',
    price: 0,
    amo: 2_500,
  },
  {
    key: 62,
    name: 'Groupage sanguin ABO-Rhésus',
    price: 0,
    amo: 2_000,
  },
  {
    key: 63,
    name: 'Anticorps anti HBC IgG',
    price: 0,
    amo: 8_000,
  },
  {
    key: 64,
    name: 'Anticorps anti HBC IgM (BCM)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 65,
    name: 'HCG',
    price: 0,
    amo: 7_000,
  },
  {
    key: 66,
    name: 'HDL',
    price: 0,
    amo: 4_000,
  },
  {
    key: 67,
    name: 'Hélicobacter pylori',
    price: 0,
    amo: 10_000,
  },
  {
    key: 68,
    name: 'Hématocrite',
    price: 0,
    amo: 1_000,
  },
  {
    key: 69,
    name: 'Hémoculture',
    price: 0,
    amo: 8_000,
  },
  {
    key: 70,
    name: 'HbA1c',
    price: 0,
    amo: 10_000,
  },
  {
    key: 71,
    name: 'Hépatite A IgG',
    price: 0,
    amo: 8_000,
  },
  {
    key: 72,
    name: 'Hépatite A IgM',
    price: 0,
    amo: 8_000,
  },
  {
    key: 73,
    name: 'Hépatite C (VHC)',
    price: 0,
    amo: 10_000,
  },
  {
    key: 74,
    name: 'IgE total',
    price: 0,
    amo: 10_000,
  },
  {
    key: 75,
    name: 'Implants (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 76,
    name: 'Ionogrammer urinaire',
    price: 0,
    amo: 13_000,
  },
  {
    key: 77,
    name: 'Ionogramme (Na,K,cl)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 78,
    name: 'KOP',
    price: 0,
    amo: 2_500,
  },
  {
    key: 79,
    name: 'Lactate deshydrogenase',
    price: 0,
    amo: 5_000,
  },
  {
    key: 80,
    name: 'Lait maternel (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 81,
    name: 'LH',
    price: 0,
    amo: 8_000,
  },
  {
    key: 82,
    name: 'Lipase',
    price: 0,
    amo: 12_000,
  },
  {
    key: 830,
    name: 'Liquide pleural',
    price: 0,
    amo: 8_000,
  },
  {
    key: 840,
    name: "Liquide d'ascite",
    price: 0,
    amo: 8_000,
  },
  {
    key: 850,
    name: 'Liquide articulaire',
    price: 0,
    amo: 8_000,
  },
  {
    key: 860,
    name: 'Liquide peritoneal',
    price: 0,
    amo: 8_000,
  },
  {
    key: 870,
    name: 'Liquide pericardique',
    price: 0,
    amo: 8_000,
  },
  {
    key: 83,
    name: 'Liquide kystique',
    price: 0,
    amo: 8_000,
  },
  {
    key: 84,
    name: 'Lochies (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 85,
    name: 'Magnesium',
    price: 0,
    amo: 2_500,
  },
  {
    key: 86,
    name: 'Matériel de prothèse (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 87,
    name: 'Méconium (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 88,
    name: 'Micro-albumine',
    price: 0,
    amo: 6_000,
  },
  {
    key: 89,
    name: 'Mycologie (peau,phaneres)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 90,
    name: 'Mycoplasme (PV, PU)',
    price: 0,
    amo: 7_000,
  },
  {
    key: 91,
    name: 'NFS',
    price: 0,
    amo: 4_000,
  },
  {
    key: 92,
    name: 'Phosphatase alcaline',
    price: 0,
    amo: 4_000,
  },
  {
    key: 93,
    name: 'Phosphore',
    price: 0,
    amo: 2_500,
  },
  {
    key: 94,
    name: 'Phosphore urinaire',
    price: 0,
    amo: 2_500,
  },
  {
    key: 95,
    name: 'Pigments et sels biliaires',
    price: 0,
    amo: 1000,
  },
  {
    key: 96,
    name: 'Placenta (Ex Bact)',
    price: 0,
    amo: 8000,
  },
  {
    key: 97,
    name: 'Plai (ECB)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 98,
    name: 'Plaquette',
    price: 0,
    amo: 3_000,
  },
  {
    key: 99,
    name: 'Potassium',
    price: 0,
    amo: 2_500,
  },
  {
    key: 100,
    name: 'Prélèvement urétral',
    price: 0,
    amo: 8_000,
  },
  {
    key: 101,
    name: 'Pélèvement vaginal',
    price: 0,
    amo: 8_000,
  },
  {
    key: 102,
    name: 'Prélèment oculaire (ECB)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 103,
    name: 'Procalcitonine',
    price: 0,
    amo: 8_000,
  },
  {
    key: 104,
    name: 'Progesterone',
    price: 0,
    amo: 10_000,
  },
  {
    key: 105,
    name: 'Protéine total',
    price: 0,
    amo: 3_000,
  },
  {
    key: 106,
    name: 'Protidogramme',
    price: 0,
    amo: 6_000,
  },
  {
    key: 107,
    name: 'PSA total et libre avec rapport',
    price: 0,
    amo: 20_000,
  },
  {
    key: 108,
    name: 'Pus ECB',
    price: 0,
    amo: 8_000,
  },
  {
    key: 109,
    name: 'Redon (Ext Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 110,
    name: 'Réticulocytes',
    price: 0,
    amo: 7_000,
  },
  {
    key: 111,
    name: 'Rubeole IgG',
    price: 0,
    amo: 7_000,
  },
  {
    key: 112,
    name: 'Scoth test anal',
    price: 0,
    amo: 2_500,
  },
  {
    key: 113,
    name: 'Spermoculture',
    price: 0,
    amo: 10_000,
  },
  {
    key: 114,
    name: 'Stérile (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 115,
    name: 'TCA',
    price: 0,
    amo: 3_000,
  },
  {
    key: 116,
    name: 'TQ',
    price: 0,
    amo: 3_000,
  },
  {
    key: 117,
    name: 'TS',
    price: 0,
    amo: 1_000,
  },
  {
    key: 118,
    name: 'Testosterone',
    price: 0,
    amo: 10_000,
  },
  {
    key: 119,
    name: 'Tissus (ECB)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 120,
    name: 'Toxo IgG',
    price: 0,
    amo: 7_000,
  },
  {
    key: 121,
    name: 'Toxo IgG et IgM',
    price: 0,
    amo: 14_000,
  },
  {
    key: 122,
    name: 'TPHA et VDRL',
    price: 0,
    amo: 6_000,
  },
  {
    key: 123,
    name: 'Triglycérides',
    price: 0,
    amo: 4_000,
  },
  {
    key: 124,
    name: 'Troponine',
    price: 0,
    amo: 10_000,
  },
  {
    key: 125,
    name: 'Transaminases (GOT,GPT)',
    price: 0,
    amo: 4_000,
  },
  {
    key: 126,
    name: 'TSH',
    price: 0,
    amo: 8_000,
  },
  {
    key: 127,
    name: 'Urée',
    price: 0,
    amo: 2_500,
  },
  {
    key: 128,
    name: 'Urée urinaire',
    price: 0,
    amo: 2_500,
  },
  {
    key: 129,
    name: 'Urobiline',
    price: 0,
    amo: 1_000,
  },
  {
    key: 130,
    name: 'Urobilinogene',
    price: 0,
    amo: 1_000,
  },
  {
    key: 131,
    name: 'Valves (Ex Bact)',
    price: 0,
    amo: 8_000,
  },
  {
    key: 132,
    name: 'Vitamine D',
    price: 0,
    amo: 14_000,
  },
  {
    key: 133,
    name: 'VS',
    price: 0,
    amo: 1_000,
  },
  {
    key: 134,
    name: 'Widal et Felix',
    price: 0,
    amo: 5_000,
  },
];

export default EXAMENS_DATA;
