export const Products: Product[] = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
  {
    id: '1002',
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image: 'blue-band.jpg',
    price: 79,
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
  },
  {
    id: '1003',
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    description: 'Product Description',
    image: 'blue-t-shirt.jpg',
    price: 29,
    category: 'Clothing',
    quantity: 25,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1004',
    code: 'h456wer53',
    name: 'Bracelet',
    description: 'Product Description',
    image: 'bracelet.jpg',
    price: 15,
    category: 'Accessories',
    quantity: 73,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
  {
    id: '1005',
    code: 'av2231fwg',
    name: 'Brown Purse',
    description: 'Product Description',
    image: 'brown-purse.jpg',
    price: 120,
    category: 'Accessories',
    quantity: 0,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4
  },
  {
    id: '1006',
    code: 'bib36pfvm',
    name: 'Chakra Bracelet',
    description: 'Product Description',
    image: 'chakra-bracelet.jpg',
    price: 32,
    category: 'Accessories',
    quantity: 5,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
  },
  {
    id: '1007',
    code: 'mbvjkgip5',
    name: 'Galaxy Earrings',
    description: 'Product Description',
    image: 'galaxy-earrings.jpg',
    price: 34,
    category: 'Accessories',
    quantity: 23,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1008',
    code: 'vbb124btr',
    name: 'Game Controller',
    description: 'Product Description',
    image: 'game-controller.jpg',
    price: 99,
    category: 'Electronics',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 4
  },
  {
    id: '1009',
    code: 'cm230f032',
    name: 'Gaming Set',
    description: 'Product Description',
    image: 'gaming-set.jpg',
    price: 299,
    category: 'Electronics',
    quantity: 63,
    inventoryStatus: 'INSTOCK',
    rating: 3
  }
];

interface Customer {
  id: number;
  name: string;
  country: { code: string; name: string };
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: { image: string; name: string };
  balance: number;
}

export const Customers: Customer[] = [
  {
    id: 1000,
    name: 'James Butt',
    country: {
      name: 'Algeria',
      code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '13.09.2015',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
    },
    balance: 70663
  },
  {
    id: 1001,
    name: 'Josephine Darakjy',
    country: {
      name: 'Egypt',
      code: 'eg'
    },
    company: 'Chanay, Jeffrey A Esq',
    date: '09.02.2019',
    status: 'proposal',
    verified: true,
    activity: 0,
    representative: {
      name: 'Amy Elsner',
      image: 'amyelsner.png'
    },
    balance: 82429
  },
  {
    id: 1002,
    name: 'Art Venere',
    country: {
      name: 'Panama',
      code: 'pa'
    },
    company: 'Chemel, James L Cpa',
    date: '13.05.2017',
    status: 'qualified',
    verified: false,
    activity: 63,
    representative: {
      name: 'Asiya Javayant',
      image: 'asiyajavayant.png'
    },
    balance: 28334
  },
  {
    id: 1003,
    name: 'Lenna Paprocki',
    country: {
      name: 'Slovenia',
      code: 'si'
    },
    company: 'Feltz Printing Service',
    date: '15.09.2020',
    status: 'new',
    verified: false,
    activity: 37,
    representative: {
      name: 'Xuxue Feng',
      image: 'xuxuefeng.png'
    },
    balance: 88521
  },
  {
    id: 1004,
    name: 'Donette Foller',
    country: {
      name: 'South Africa',
      code: 'za'
    },
    company: 'Printing Dimensions',
    date: '20.05.2016',
    status: 'proposal',
    verified: true,
    activity: 33,
    representative: {
      name: 'Asiya Javayant',
      image: 'asiyajavayant.png'
    },
    balance: 93905
  },
  {
    id: 1005,
    name: 'Simona Morasca',
    country: {
      name: 'Egypt',
      code: 'eg'
    },
    company: 'Chapman, Ross E Esq',
    date: '16.02.2018',
    status: 'qualified',
    verified: false,
    activity: 68,
    representative: {
      name: 'Ivan Magalhaes',
      image: 'ivanmagalhaes.png'
    },
    balance: 50041
  },
  {
    id: 1006,
    name: 'Mitsue Tollner',
    country: {
      name: 'Paraguay',
      code: 'py'
    },
    company: 'Morlong Associates',
    date: '19.02.2018',
    status: 'renewal',
    verified: true,
    activity: 54,
    representative: {
      name: 'Ivan Magalhaes',
      image: 'ivanmagalhaes.png'
    },
    balance: 58706
  },
  {
    id: 1007,
    name: 'Leota Dilliard',
    country: {
      name: 'Serbia',
      code: 'rs'
    },
    company: 'Commercial Press',
    date: '13.08.2019',
    status: 'renewal',
    verified: true,
    activity: 69,
    representative: {
      name: 'Onyama Limba',
      image: 'onyamalimba.png'
    },
    balance: 26640
  },
  {
    id: 1008,
    name: 'Sage Wieser',
    country: {
      name: 'Egypt',
      code: 'eg'
    },
    company: 'Truhlar And Truhlar Attys',
    date: '21.11.2018',
    status: 'unqualified',
    verified: true,
    activity: 76,
    representative: {
      name: 'Ivan Magalhaes',
      image: 'ivanmagalhaes.png'
    },
    balance: 65369
  },
  {
    id: 1009,
    name: 'Kris Marrier',
    country: {
      name: 'Mexico',
      code: 'mx'
    },
    company: 'King, Christopher A Esq',
    date: '07.07.2015',
    status: 'proposal',
    verified: false,
    activity: 3,
    representative: {
      name: 'Onyama Limba',
      image: 'onyamalimba.png'
    },
    balance: 63451
  },
  {
    id: 1010,
    name: 'Minna Amigon',
    country: {
      name: 'Romania',
      code: 'ro'
    },
    company: 'Dorl, James J Esq',
    date: '07.11.2018',
    status: 'qualified',
    verified: false,
    activity: 38,
    representative: {
      name: 'Anna Fali',
      image: 'annafali.png'
    },
    balance: 71169
  },
  {
    id: 1011,
    name: 'Abel Maclead',
    country: {
      name: 'Singapore',
      code: 'sg'
    },
    company: 'Rangoni Of Florence',
    date: '11.03.2017',
    status: 'qualified',
    verified: true,
    activity: 87,
    representative: {
      name: 'Bernardo Dominic',
      image: 'bernardodominic.png'
    },
    balance: 96842
  },
  {
    id: 1012,
    name: 'Kiley Caldarera',
    country: {
      name: 'Serbia',
      code: 'rs'
    },
    company: 'Feiner Bros',
    date: '20.10.2015',
    status: 'unqualified',
    verified: false,
    activity: 80,
    representative: {
      name: 'Onyama Limba',
      image: 'onyamalimba.png'
    },
    balance: 92734
  },
  {
    id: 1013,
    name: 'Graciela Ruta',
    country: {
      name: 'Chile',
      code: 'cl'
    },
    company: 'Buckley Miller & Wright',
    date: '25.07.2016',
    status: 'negotiation',
    verified: false,
    activity: 59,
    representative: {
      name: 'Amy Elsner',
      image: 'amyelsner.png'
    },
    balance: 45250
  },
  {
    id: 1014,
    name: 'Cammy Albares',
    country: {
      name: 'Philippines',
      code: 'ph'
    },
    company: 'Rousseaux, Michael Esq',
    date: '25.06.2019',
    status: 'new',
    verified: true,
    activity: 90,
    representative: {
      name: 'Asiya Javayant',
      image: 'asiyajavayant.png'
    },
    balance: 30236
  },
  {
    id: 1015,
    name: 'Mattie Poquette',
    country: {
      name: 'Venezuela',
      code: 've'
    },
    company: 'Century Communications',
    date: '12.12.2017',
    status: 'negotiation',
    verified: false,
    activity: 52,
    representative: {
      name: 'Anna Fali',
      image: 'annafali.png'
    },
    balance: 64533
  },
  {
    id: 1016,
    name: 'Meaghan Garufi',
    country: {
      name: 'Malaysia',
      code: 'my'
    },
    company: 'Bolton, Wilbur Esq',
    date: '04.07.2018',
    status: 'unqualified',
    verified: false,
    activity: 31,
    representative: {
      name: 'Ivan Magalhaes',
      image: 'ivanmagalhaes.png'
    },
    balance: 37279
  },
  {
    id: 1017,
    name: 'Gladys Rim',
    country: {
      name: 'Netherlands',
      code: 'nl'
    },
    company: 'T M Byxbee Company Pc',
    date: '27.02.2020',
    status: 'renewal',
    verified: true,
    activity: 48,
    representative: {
      name: 'Stephen Shaw',
      image: 'stephenshaw.png'
    },
    balance: 27381
  },
  {
    id: 1018,
    name: 'Yuki Whobrey',
    country: {
      name: 'Israel',
      code: 'il'
    },
    company: 'Farmers Insurance Group',
    date: '21.12.2017',
    status: 'negotiation',
    verified: true,
    activity: 16,
    representative: {
      name: 'Bernardo Dominic',
      image: 'bernardodominic.png'
    },
    balance: 9257
  },
  {
    id: 1019,
    name: 'Fletcher Flosi',
    country: {
      name: 'Argentina',
      code: 'ar'
    },
    company: 'Post Box Services Plus',
    date: '04.01.2016',
    status: 'renewal',
    verified: true,
    activity: 19,
    representative: {
      name: 'Xuxue Feng',
      image: 'xuxuefeng.png'
    },
    balance: 67783
  },
  {
    id: 1020,
    name: 'Bette Nicka',
    country: {
      name: 'Paraguay',
      code: 'py'
    },
    company: 'Sport En Art',
    date: '21.10.2016',
    status: 'renewal',
    verified: false,
    activity: 100,
    representative: {
      name: 'Onyama Limba',
      image: 'onyamalimba.png'
    },
    balance: 4609
  },
  {
    id: 1021,
    name: 'Veronika Inouye',
    country: {
      name: 'Ecuador',
      code: 'ec'
    },
    company: 'C 4 Network Inc',
    date: '24.03.2017',
    status: 'renewal',
    verified: false,
    activity: 72,
    representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
    },
    balance: 26565
  },
  {
    id: 1022,
    name: 'Willard Kolmetz',
    country: {
      name: 'Tunisia',
      code: 'tn'
    },
    company: 'Ingalls, Donald R Esq',
    date: '15.04.2017',
    status: 'renewal',
    verified: true,
    activity: 94,
    representative: {
      name: 'Asiya Javayant',
      image: 'asiyajavayant.png'
    },
    balance: 75876
  },
  {
    id: 1023,
    name: 'Maryann Royster',
    country: {
      name: 'Belarus',
      code: 'by'
    },
    company: 'Franklin, Peter L Esq',
    date: '11.03.2017',
    status: 'qualified',
    verified: false,
    activity: 56,
    representative: {
      name: 'Elwin Sharvill',
      image: 'elwinsharvill.png'
    },
    balance: 41121
  },
  {
    id: 1024,
    name: 'Alisha Slusarski',
    country: {
      name: 'Iceland',
      code: 'is'
    },
    company: 'Wtlz Power 107 Fm',
    date: '27.03.2018',
    status: 'qualified',
    verified: true,
    activity: 7,
    representative: {
      name: 'Stephen Shaw',
      image: 'stephenshaw.png'
    },
    balance: 91691
  },
  {
    id: 1025,
    name: 'Allene Iturbide',
    country: {
      name: 'Italy',
      code: 'it'
    },
    company: 'Ledecky, David Esq',
    date: '20.02.2016',
    status: 'qualified',
    verified: true,
    activity: 1,
    representative: {
      name: 'Ivan Magalhaes',
      image: 'ivanmagalhaes.png'
    },
    balance: 40137
  },
  {
    id: 1026,
    name: 'Chanel Caudy',
    country: {
      name: 'Argentina',
      code: 'ar'
    },
    company: 'Professional Image Inc',
    date: '24.06.2018',
    status: 'new',
    verified: true,
    activity: 26,
    representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
    },
    balance: 21304
  },
  {
    id: 1027,
    name: 'Ezekiel Chui',
    country: {
      name: 'Ireland',
      code: 'ie'
    },
    company: 'Sider, Donald C Esq',
    date: '24.09.2016',
    status: 'new',
    verified: false,
    activity: 76,
    representative: {
      name: 'Amy Elsner',
      image: 'amyelsner.png'
    },
    balance: 60454
  },
  {
    id: 1028,
    name: 'Willow Kusko',
    country: {
      name: 'Romania',
      code: 'ro'
    },
    company: 'U Pull It',
    date: '11.04.2020',
    status: 'qualified',
    verified: true,
    activity: 7,
    representative: {
      name: 'Onyama Limba',
      image: 'onyamalimba.png'
    },
    balance: 17565
  },
  {
    id: 1029,
    name: 'Bernardo Figeroa',
    country: {
      name: 'Israel',
      code: 'il'
    },
    company: 'Clark, Richard Cpa',
    date: '04.11.2018',
    status: 'renewal',
    verified: true,
    activity: 81,
    representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
    },
    balance: 17774
  },
  {
    id: 1030,
    name: 'Ammie Corrio',
    country: {
      name: 'Hungary',
      code: 'hu'
    },
    company: 'Moskowitz, Barry S',
    date: '11.06.2016',
    status: 'negotiation',
    verified: true,
    activity: 56,
    representative: {
      name: 'Asiya Javayant',
      image: 'asiyajavayant.png'
    },
    balance: 49201
  },
  {
    id: 1031,
    name: 'Francine Vocelka',
    country: {
      name: 'Honduras',
      code: 'hn'
    },
    company: 'Cascade Realty Advisors Inc',
    date: '02.08.2017',
    status: 'qualified',
    verified: true,
    activity: 94,
    representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
    },
    balance: 67126
  },
  {
    id: 1032,
    name: 'Ernie Stenseth',
    country: {
      name: 'Australia',
      code: 'au'
    },
    company: 'Knwz Newsradio',
    date: '06.06.2018',
    status: 'renewal',
    verified: true,
    activity: 68,
    representative: {
      name: 'Xuxue Feng',
      image: 'xuxuefeng.png'
    },
    balance: 76017
  },
  {
    id: 1033,
    name: 'Albina Glick',
    country: {
      name: 'Ukraine',
      code: 'ua'
    },
    company: 'Giampetro, Anthony D',
    date: '08.08.2019',
    status: 'proposal',
    verified: true,
    activity: 85,
    representative: {
      name: 'Bernardo Dominic',
      image: 'bernardodominic.png'
    },
    balance: 91201
  },
  {
    id: 1034,
    name: 'Alishia Sergi',
    country: {
      name: 'Qatar',
      code: 'qa'
    },
    company: 'Milford Enterprises Inc',
    date: '19.05.2018',
    status: 'negotiation',
    verified: false,
    activity: 46,
    representative: {
      name: 'Ivan Magalhaes',
      image: 'ivanmagalhaes.png'
    },
    balance: 12237
  },
  {
    id: 1035,
    name: 'Solange Shinko',
    country: {
      name: 'Cameroon',
      code: 'cm'
    },
    company: 'Mosocco, Ronald A',
    date: '12.02.2015',
    status: 'qualified',
    verified: true,
    activity: 32,
    representative: {
      name: 'Onyama Limba',
      image: 'onyamalimba.png'
    },
    balance: 34072
  },
  {
    id: 1036,
    name: 'Jose Stockham',
    country: {
      name: 'Italy',
      code: 'it'
    },
    company: 'Tri State Refueler Co',
    date: '25.04.2018',
    status: 'qualified',
    verified: true,
    activity: 77,
    representative: {
      name: 'Amy Elsner',
      image: 'amyelsner.png'
    },
    balance: 94909
  },
  {
    id: 1037,
    name: 'Rozella Ostrosky',
    country: {
      name: 'Venezuela',
      code: 've'
    },
    company: 'Parkway Company',
    date: '27.02.2016',
    status: 'unqualified',
    verified: true,
    activity: 66,
    representative: {
      name: 'Amy Elsner',
      image: 'amyelsner.png'
    },
    balance: 57245
  },
  {
    id: 1038,
    name: 'Valentine Gillian',
    country: {
      name: 'Paraguay',
      code: 'py'
    },
    company: 'Fbs Business Finance',
    date: '17.09.2019',
    status: 'qualified',
    verified: true,
    activity: 25,
    representative: {
      name: 'Bernardo Dominic',
      image: 'bernardodominic.png'
    },
    balance: 75502
  },
  {
    id: 1039,
    name: 'Kati Rulapaugh',
    country: {
      name: 'Puerto Rico',
      code: 'pr'
    },
    company: 'Eder Assocs Consltng Engrs Pc',
    date: '03.12.2016',
    status: 'renewal',
    verified: false,
    activity: 51,
    representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
    },
    balance: 82075
  },
  {
    id: 1040,
    name: 'Youlanda Schemmer',
    country: {
      name: 'Bolivia',
      code: 'bo'
    },
    company: 'Tri M Tool Inc',
    date: '15.12.2017',
    status: 'negotiation',
    verified: true,
    activity: 49,
    representative: {
      name: 'Xuxue Feng',
      image: 'xuxuefeng.png'
    },
    balance: 19208
  },
  {
    id: 1041,
    name: 'Dyan Oldroyd',
    country: {
      name: 'Argentina',
      code: 'ar'
    },
    company: 'International Eyelets Inc',
    date: '02.02.2017',
    status: 'qualified',
    verified: false,
    activity: 5,
    representative: {
      name: 'Amy Elsner',
      image: 'amyelsner.png'
    },
    balance: 50194
  },
  {
    id: 1042,
    name: 'Roxane Campain',
    country: {
      name: 'France',
      code: 'fr'
    },
    company: 'Rapid Trading Intl',
    date: '25.12.2018',
    status: 'unqualified',
    verified: false,
    activity: 100,
    representative: {
      name: 'Anna Fali',
      image: 'annafali.png'
    },
    balance: 77714
  },
  {
    id: 1043,
    name: 'Lavera Perin',
    country: {
      name: 'Vietnam',
      code: 'vn'
    },
    company: 'Abc Enterprises Inc',
    date: '10.04.2018',
    status: 'qualified',
    verified: false,
    activity: 71,
    representative: {
      name: 'Stephen Shaw',
      image: 'stephenshaw.png'
    },
    balance: 35740
  },
  {
    id: 1044,
    name: 'Erick Ferencz',
    country: {
      name: 'Belgium',
      code: 'be'
    },
    company: 'Cindy Turner Associates',
    date: '06.05.2018',
    status: 'unqualified',
    verified: true,
    activity: 54,
    representative: {
      name: 'Amy Elsner',
      image: 'amyelsner.png'
    },
    balance: 30790
  },
  {
    id: 1045,
    name: 'Fatima Saylors',
    country: {
      name: 'Canada',
      code: 'ca'
    },
    company: 'Stanton, James D Esq',
    date: '10.07.2019',
    status: 'renewal',
    verified: true,
    activity: 93,
    representative: {
      name: 'Onyama Limba',
      image: 'onyamalimba.png'
    },
    balance: 52343
  },
  {
    id: 1046,
    name: 'Jina Briddick',
    country: {
      name: 'Mexico',
      code: 'mx'
    },
    company: 'Grace Pastries Inc',
    date: '19.02.2018',
    status: 'unqualified',
    verified: false,
    activity: 97,
    representative: {
      name: 'Xuxue Feng',
      image: 'xuxuefeng.png'
    },
    balance: 53966
  },
  {
    id: 1047,
    name: 'Kanisha Waycott',
    country: {
      name: 'Ecuador',
      code: 'ec'
    },
    company: 'Schroer, Gene E Esq',
    date: '27.11.2019',
    status: 'new',
    verified: false,
    activity: 80,
    representative: {
      name: 'Xuxue Feng',
      image: 'xuxuefeng.png'
    },
    balance: 9920
  },
  {
    id: 1048,
    name: 'Emerson Bowley',
    country: {
      name: 'Finland',
      code: 'fi'
    },
    company: 'Knights Inn',
    date: '24.11.2018',
    status: 'new',
    verified: false,
    activity: 63,
    representative: {
      name: 'Stephen Shaw',
      image: 'stephenshaw.png'
    },
    balance: 78069
  },
  {
    id: 1049,
    name: 'Blair Malet',
    country: {
      name: 'Finland',
      code: 'fi'
    },
    company: 'Bollinger Mach Shp & Shipyard',
    date: '19.04.2018',
    status: 'new',
    verified: true,
    activity: 92,
    representative: {
      name: 'Asiya Javayant',
      image: 'asiyajavayant.png'
    },
    balance: 65005
  }
];

interface Sale {
  product: string;
  lastYearSale: number;
  thisYearSale: number;
  lastYearProfit: number;
  thisYearProfit: number;
}

export const Sales: Sale[] = [
  { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
  { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
  { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
  { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
  { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
  { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
  { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
  { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
  { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
  { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
];

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

const ProductsSmall: Product[] = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
  {
    id: '1002',
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image: 'blue-band.jpg',
    price: 79,
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
  },
  {
    id: '1003',
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    description: 'Product Description',
    image: 'blue-t-shirt.jpg',
    price: 29,
    category: 'Clothing',
    quantity: 25,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1004',
    code: 'h456wer53',
    name: 'Bracelet',
    description: 'Product Description',
    image: 'bracelet.jpg',
    price: 15,
    category: 'Accessories',
    quantity: 73,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
  {
    id: '1005',
    code: 'av2231fwg',
    name: 'Brown Purse',
    description: 'Product Description',
    image: 'brown-purse.jpg',
    price: 120,
    category: 'Accessories',
    quantity: 0,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4
  },
  {
    id: '1006',
    code: 'bib36pfvm',
    name: 'Chakra Bracelet',
    description: 'Product Description',
    image: 'chakra-bracelet.jpg',
    price: 32,
    category: 'Accessories',
    quantity: 5,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
  },
  {
    id: '1007',
    code: 'mbvjkgip5',
    name: 'Galaxy Earrings',
    description: 'Product Description',
    image: 'galaxy-earrings.jpg',
    price: 34,
    category: 'Accessories',
    quantity: 23,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1008',
    code: 'vbb124btr',
    name: 'Game Controller',
    description: 'Product Description',
    image: 'game-controller.jpg',
    price: 99,
    category: 'Electronics',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 4
  },
  {
    id: '1009',
    code: 'cm230f032',
    name: 'Gaming Set',
    description: 'Product Description',
    image: 'gaming-set.jpg',
    price: 299,
    category: 'Electronics',
    quantity: 63,
    inventoryStatus: 'INSTOCK',
    rating: 3
  }
];

interface ProductOrder {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
  orders: Order[];
}

interface Order {
  id: string;
  productCode: string;
  date: string;
  amount: number;
  quantity: number;
  customer: string;
  status: string;
}

const ProductsOrdersSmall: ProductOrder[] = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    orders: [
      {
        id: '1000',
        productCode: 'f230fh0g3',
        date: '13.08.2020',
        amount: 65,
        quantity: 1,
        customer: 'David James',
        status: 'PENDING'
      },
      {
        id: '1001',
        productCode: 'f230fh0g3',
        date: '14.05.2020',
        amount: 130,
        quantity: 2,
        customer: 'Leon Rodrigues',
        status: 'DELIVERED'
      },
      {
        id: '1002',
        productCode: 'f230fh0g3',
        date: '04.01.2019',
        amount: 65,
        quantity: 1,
        customer: 'Juan Alejandro',
        status: 'RETURNED'
      },
      {
        id: '1003',
        productCode: 'f230fh0g3',
        date: '13.09.2020',
        amount: 195,
        quantity: 3,
        customer: 'Claire Morrow',
        status: 'CANCELLED'
      }
    ]
  },
  {
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4,
    orders: [
      {
        id: '2000',
        productCode: 'nvklal433',
        date: '14.05.2020',
        amount: 72,
        quantity: 1,
        customer: 'Maisha Jefferson',
        status: 'DELIVERED'
      },
      {
        id: '2001',
        productCode: 'nvklal433',
        date: '28.02.2020',
        amount: 144,
        quantity: 2,
        customer: 'Octavia Murillo',
        status: 'PENDING'
      }
    ]
  },
  {
    id: '1002',
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image: 'blue-band.jpg',
    price: 79,
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3,
    orders: [
      {
        id: '3000',
        productCode: 'zz21cz3c1',
        date: '05.07.2020',
        amount: 79,
        quantity: 1,
        customer: 'Stacey Leja',
        status: 'DELIVERED'
      },
      {
        id: '3001',
        productCode: 'zz21cz3c1',
        date: '06.02.2020',
        amount: 79,
        quantity: 1,
        customer: 'Ashley Wickens',
        status: 'DELIVERED'
      }
    ]
  },
  {
    id: '1003',
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    description: 'Product Description',
    image: 'blue-t-shirt.jpg',
    price: 29,
    category: 'Clothing',
    quantity: 25,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    orders: []
  },
  {
    id: '1004',
    code: 'h456wer53',
    name: 'Bracelet',
    description: 'Product Description',
    image: 'bracelet.jpg',
    price: 15,
    category: 'Accessories',
    quantity: 73,
    inventoryStatus: 'INSTOCK',
    rating: 4,
    orders: [
      {
        id: '5000',
        productCode: 'h456wer53',
        date: '05.09.2020',
        amount: 60,
        quantity: 4,
        customer: 'Mayumi Misaki',
        status: 'PENDING'
      },
      {
        id: '5001',
        productCode: 'h456wer53',
        date: '16.04.2019',
        amount: 2,
        quantity: 30,
        customer: 'Francesco Salvatore',
        status: 'DELIVERED'
      }
    ]
  },
  {
    id: '1005',
    code: 'av2231fwg',
    name: 'Brown Purse',
    description: 'Product Description',
    image: 'brown-purse.jpg',
    price: 120,
    category: 'Accessories',
    quantity: 0,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4,
    orders: [
      {
        id: '6000',
        productCode: 'av2231fwg',
        date: '25.01.2020',
        amount: 120,
        quantity: 1,
        customer: 'Isabel Sinclair',
        status: 'RETURNED'
      },
      {
        id: '6001',
        productCode: 'av2231fwg',
        date: '12.03.2019',
        amount: 240,
        quantity: 2,
        customer: 'Lionel Clifford',
        status: 'DELIVERED'
      },
      {
        id: '6002',
        productCode: 'av2231fwg',
        date: '05.05.2019',
        amount: 120,
        quantity: 1,
        customer: 'Cody Chavez',
        status: 'DELIVERED'
      }
    ]
  },
  {
    id: '1006',
    code: 'bib36pfvm',
    name: 'Chakra Bracelet',
    description: 'Product Description',
    image: 'chakra-bracelet.jpg',
    price: 32,
    category: 'Accessories',
    quantity: 5,
    inventoryStatus: 'LOWSTOCK',
    rating: 3,
    orders: [
      {
        id: '7000',
        productCode: 'bib36pfvm',
        date: '24.02.2020',
        amount: 32,
        quantity: 1,
        customer: 'Arvin Darci',
        status: 'DELIVERED'
      },
      {
        id: '7001',
        productCode: 'bib36pfvm',
        date: '14.01.2020',
        amount: 64,
        quantity: 2,
        customer: 'Izzy Jones',
        status: 'PENDING'
      }
    ]
  },
  {
    id: '1007',
    code: 'mbvjkgip5',
    name: 'Galaxy Earrings',
    description: 'Product Description',
    image: 'galaxy-earrings.jpg',
    price: 34,
    category: 'Accessories',
    quantity: 23,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    orders: [
      {
        id: '8000',
        productCode: 'mbvjkgip5',
        date: '19.06.2020',
        amount: 34,
        quantity: 1,
        customer: 'Jennifer Smith',
        status: 'DELIVERED'
      }
    ]
  },
  {
    id: '1008',
    code: 'vbb124btr',
    name: 'Game Controller',
    description: 'Product Description',
    image: 'game-controller.jpg',
    price: 99,
    category: 'Electronics',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 4,
    orders: [
      {
        id: '9000',
        productCode: 'vbb124btr',
        date: '05.01.2020',
        amount: 99,
        quantity: 1,
        customer: 'Jeanfrancois David',
        status: 'DELIVERED'
      },
      {
        id: '9001',
        productCode: 'vbb124btr',
        date: '19.01.2020',
        amount: 198,
        quantity: 2,
        customer: 'Ivar Greenwood',
        status: 'RETURNED'
      }
    ]
  },
  {
    id: '1009',
    code: 'cm230f032',
    name: 'Gaming Set',
    description: 'Product Description',
    image: 'gaming-set.jpg',
    price: 299,
    category: 'Electronics',
    quantity: 63,
    inventoryStatus: 'INSTOCK',
    rating: 3,
    orders: [
      {
        id: '10000',
        productCode: 'cm230f032',
        date: '24.06.2020',
        amount: 299,
        quantity: 1,
        customer: 'Kadeem Mujtaba',
        status: 'PENDING'
      },
      {
        id: '10001',
        productCode: 'cm230f032',
        date: '11.05.2020',
        amount: 299,
        quantity: 1,
        customer: 'Ashley Wickens',
        status: 'DELIVERED'
      },
      {
        id: '10002',
        productCode: 'cm230f032',
        date: '07.02.2019',
        amount: 299,
        quantity: 1,
        customer: 'Julie Johnson',
        status: 'DELIVERED'
      },
      {
        id: '10003',
        productCode: 'cm230f032',
        date: '26.04.2020',
        amount: 299,
        quantity: 1,
        customer: 'Tony Costa',
        status: 'CANCELLED'
      }
    ]
  }
];

function cloneArrayOfObjects<T>(array: T[]): T[] {
  return array.map(item => ({ ...item }));
}

export function getProducts(): Product[] {
  return cloneArrayOfObjects(Products);
}

export function getProductsSmall(): Product[] {
  return cloneArrayOfObjects(ProductsSmall);
}

export function getSalesSmall(): Sale[] {
  return cloneArrayOfObjects(Sales);
}

export function getCustomers(): Customer[] {
  return cloneArrayOfObjects(Customers);
}

export function getProductsOrdersSmall(): ProductOrder[] {
  return cloneArrayOfObjects(ProductsOrdersSmall);
}