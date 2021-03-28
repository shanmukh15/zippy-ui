export const PROJECT_STATUS = {
  PROSPECT: "PROSPECT",
  CONTRACT: "CONTRACT",
};

export const USER_TYPE = {
  EMLOYEE: "EMPLOYEE",
  BUYER: "BUYER",
  BUILDER: "BUILDER",
};

/* TEMP DATA for DEMO */
export const USERS = [
  {
    name: "Sundaram Selvan",
    user: {
      firstName: "sundaram",
      lastName: "sder",
      middleName: "",
      email: "sert.test@fertzip.com",
      phone: "7215403485",
    },
    type: USER_TYPE.BUYER,
    projects: [
      {
        type: PROJECT_STATUS.CONTRACT,
        id: 2345,
        community: "Slyvn County",
        lot: "l3",
        status: "sold",
        buyer1FN: "sundaram",
        buyer1LN: "sder",
        buyer1MN: "",
      },
      {
        id: 234325,
        type: PROJECT_STATUS.PROSPECT,
        community: "sarada enclave",
        status: "open",
      },
    ],
  },
  {
    name: "ganeshan swer",
    user: {
      firstName: "ganeshan",
      lastName: "swer",
      middleName: "",
      email: "erfnbert.sffd@fertzip.com",
      phone: "5735685367",
      communities: ["cert"],
      lots: ["l1"],
    },
    type: USER_TYPE.BUILDER,
  },
  { name: "Santroz ganeshan", type: USER_TYPE.EMLOYEE },
];

export const COMMUNITY_LIST = [
  "salty lake",
  "Slyvn County",
  "Raintree",
  "Meadows land",
  "Radio springs",
];
export const LOT_LIST = ["l1", "l2", "l3", "l4"];
export const COUNTRY_LIST = ["India", "USA", "UK", " Netherlands"];
export const STATE_LIST = ["Arizona", "Seattle", " Telangana", "Tamilnadu"];
export const CITY_LIST = ["Jaipur", "Newyork", "Chennai", "Hyderabad"];
export const REALTOR_LIST = [
  "Saert Builder",
  "TWery HEights",
  "MAdsr Ploght",
  "Hicky Merg",
];
export const STATUS = ["Available", "Expired", "Closed", "Sold"];
export const HOME_PLAN = [
  "Brick Wall Terrace",
  "Sandstone Bridge",
  "Center Fender Ceils",
];
export const DOC_LIST = {
  buyer: [
    "Contractual Agreement",
    "Home Design Options",
    "Plot Map",
    "Home Plan",
    "Change Order",
    "Appliances Warranty Info",
  ],
  builder: [
    "Preferred Lenders",
    "Community Amenities",
    "utilities Contact Info",
  ],
};
