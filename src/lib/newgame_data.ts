export type Colour =
  | "brown"
  | "lightblue"
  | "magenta"
  | "orange"
  | "red"
  | "yellow"
  | "green"
  | "darkblue"
  | "black"
  | "mint";

export interface MoneyCard {
  type: "money";
  value: number;
}

export interface ActionCard {
  type: "action";
  name: string;
  value: number;
}

export interface RentCard {
  type: "rent";
  colours: Colour[];
  value: number;
}

export interface RentRainbowCard {
  type: "rent_rainbow";
  value: number;
}

export interface PropertyWildCard {
  type: "property_wild";
  colours: Colour[];
  value: number;
}

export interface PropertyRainbowCard {
  type: "property_rainbow";
}

export interface PropertyCard {
  type: "property";
  colour: Colour;
  name: string;
}

export type Card =
  | MoneyCard
  | ActionCard
  | RentCard
  | RentRainbowCard
  | PropertyWildCard
  | PropertyRainbowCard
  | PropertyCard;

type CardQuantity =
  | {
      card: Exclude<Card, PropertyCard>;
      quantity: number;
    }
  | PropertyCard;

export type RentData =
  | {
      1: number;
      2: number;
      3?: number;
      house: number;
      tower: number;
    }
  | {
      1: number;
      2: number;
    }
  | {
      1: number;
      2: number;
      3: number;
      4: number;
    };

// Deck with one copy of each card, and quantity that each card should have.
const deckQuantities: CardQuantity[] = [
  {
    card: {
      type: "money",
      value: 1,
    },
    quantity: 6,
  },
  {
    card: {
      type: "money",
      value: 2,
    },
    quantity: 5,
  },
  {
    card: {
      type: "money",
      value: 3,
    },
    quantity: 3,
  },
  {
    card: {
      type: "money",
      value: 4,
    },
    quantity: 3,
  },
  {
    card: {
      type: "money",
      value: 5,
    },
    quantity: 2,
  },
  {
    card: {
      type: "money",
      value: 10,
    },
    quantity: 1,
  },
  {
    card: {
      type: "action",
      name: "pass_go",
      value: 1,
    },
    quantity: 10,
  },
  {
    card: {
      type: "action",
      name: "rent_increase",
      value: 1,
    },
    quantity: 2,
  },
  {
    card: {
      type: "action",
      name: "convenience_fee",
      value: 2,
    },
    quantity: 3,
  },
  {
    card: {
      type: "action",
      name: "security_deposit",
      value: 3,
    },
    quantity: 3,
  },
  {
    card: {
      type: "action",
      name: "new_landlord",
      value: 3,
    },
    quantity: 3,
  },
  {
    card: {
      type: "action",
      name: "property_repod",
      value: 3,
    },
    quantity: 3,
  },
  {
    card: {
      type: "action",
      name: "laneway_house",
      value: 3,
    },
    quantity: 3,
  },
  {
    card: {
      type: "action",
      name: "condo_tower",
      value: 4,
    },
    quantity: 2,
  },
  {
    card: {
      type: "action",
      name: "tax_evasion",
      value: 4,
    },
    quantity: 3,
  },
  {
    card: {
      type: "action",
      name: "mass_eviction",
      value: 5,
    },
    quantity: 2,
  },
  {
    card: {
      type: "rent",
      colours: ["brown", "lightblue"],
      value: 1,
    },
    quantity: 2,
  },
  {
    card: {
      type: "rent",
      colours: ["mint", "black"],
      value: 1,
    },
    quantity: 2,
  },
  {
    card: {
      type: "rent",
      colours: ["magenta", "orange"],
      value: 1,
    },
    quantity: 2,
  },
  {
    card: {
      type: "rent",
      colours: ["red", "yellow"],
      value: 1,
    },
    quantity: 2,
  },
  {
    card: {
      type: "rent",
      colours: ["darkblue", "green"],
      value: 1,
    },
    quantity: 2,
  },
  {
    card: {
      type: "rent_rainbow",
      value: 3,
    },
    quantity: 3,
  },
  {
    card: {
      type: "property_wild",
      colours: ["lightblue", "brown"],
      value: 1,
    },
    quantity: 1,
  },
  {
    card: {
      type: "property_wild",
      colours: ["black", "mint"],
      value: 2,
    },
    quantity: 1,
  },
  {
    card: {
      type: "property_wild",
      colours: ["magenta", "orange"],
      value: 2,
    },
    quantity: 2,
  },
  {
    card: {
      type: "property_wild",
      colours: ["red", "yellow"],
      value: 3,
    },
    quantity: 2,
  },
  {
    card: {
      type: "property_wild",
      colours: ["darkblue", "green"],
      value: 4,
    },
    quantity: 1,
  },
  {
    card: {
      type: "property_wild",
      colours: ["green", "black"],
      value: 4,
    },
    quantity: 1,
  },
  {
    card: {
      type: "property_wild",
      colours: ["lightblue", "black"],
      value: 4,
    },
    quantity: 1,
  },
  {
    card: {
      type: "property_rainbow",
    },
    quantity: 2,
  },
  {
    type: "property",
    colour: "brown",
    name: "east_hastings",
  },
  {
    type: "property",
    colour: "brown",
    name: "chinatown",
  },
  {
    type: "property",
    colour: "black",
    name: "expo_line",
  },
  {
    type: "property",
    name: "renfrew-collingwood",
    colour: "lightblue",
  },
  {
    type: "property",
    name: "hastings-sunrise",
    colour: "lightblue",
  },
  {
    type: "property",
    name: "kensington-cedar_cottage",
    colour: "lightblue",
  },
  {
    type: "property",
    name: "fairview",
    colour: "magenta",
  },
  {
    type: "property",
    name: "fortis_bc",
    colour: "mint",
  },
  {
    type: "property",
    name: "oakridge",
    colour: "magenta",
  },
  {
    type: "property",
    name: "marpole",
    colour: "magenta",
  },
  {
    type: "property",
    colour: "black",
    name: "millennium_line",
  },
  {
    type: "property",
    colour: "orange",
    name: "mount_pleasant",
  },
  {
    type: "property",
    colour: "orange",
    name: "coal_harbour",
  },
  {
    type: "property",
    colour: "orange",
    name: "killarney",
  },
  {
    type: "property",
    colour: "red",
    name: "kitsilano",
  },
  {
    type: "property",
    colour: "red",
    name: "quilchena",
  },
  {
    type: "property",
    colour: "red",
    name: "cambie",
  },
  {
    type: "property",
    colour: "black",
    name: "canada_line",
  },
  {
    type: "property",
    colour: "yellow",
    name: "kerrisdale",
  },
  {
    type: "property",
    colour: "yellow",
    name: "victoria-fraserview",
  },
  {
    type: "property",
    colour: "mint",
    name: "bc_hydro",
  },
  {
    type: "property",
    colour: "yellow",
    name: "dunbar",
  },
  {
    type: "property",
    colour: "green",
    name: "arbutus_ridge",
  },
  {
    type: "property",
    colour: "green",
    name: "south_granville",
  },
  {
    type: "property",
    colour: "green",
    name: "point_grey",
  },
  {
    type: "property",
    colour: "black",
    name: "west_coast_express",
  },
  {
    type: "property",
    colour: "darkblue",
    name: "shaughnessy_heights",
  },
  {
    type: "property",
    colour: "darkblue",
    name: "southlands",
  },
];

// Deck with quantities of each card as specified in deckQuantities.
const deck: Card[] = deckQuantities.flatMap((card) =>
  Array.from({ length: "quantity" in card ? card.quantity : 1 }, () =>
    structuredClone("card" in card ? card.card : card),
  ),
);

// The rent costs associated with each property colour.
export const rent: Record<Colour, RentData> = {
  brown: {
    1: 1,
    2: 2,
    house: 5,
    tower: 9,
  },
  lightblue: {
    1: 1,
    2: 2,
    3: 3,
    house: 6,
    tower: 10,
  },
  magenta: {
    1: 1,
    2: 2,
    3: 4,
    house: 7,
    tower: 11,
  },
  orange: {
    1: 1,
    2: 3,
    3: 5,
    house: 8,
    tower: 12,
  },
  red: {
    1: 2,
    2: 3,
    3: 6,
    house: 9,
    tower: 13,
  },
  yellow: {
    1: 2,
    2: 4,
    3: 6,
    house: 9,
    tower: 13,
  },
  green: {
    1: 2,
    2: 4,
    3: 7,
    house: 10,
    tower: 14,
  },
  darkblue: {
    1: 3,
    2: 8,
    house: 11,
    tower: 15,
  },
  black: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
  mint: {
    1: 1,
    2: 2,
  },
};

// The value associated with each property colour.
export const value: Record<Colour, Number> = {
  brown: 1,
  lightblue: 1,
  magenta: 2,
  orange: 2,
  red: 3,
  yellow: 3,
  green: 4,
  darkblue: 4,
  black: 2,
  mint: 2,
};

/**
 * Create a new deck, shuffled using the Fisher-Yates algorithm.
 * @returns the shuffled deck
 */
export function newDeck() {
  const shuffledDeck = structuredClone(deck);
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j]!, shuffledDeck[i]!];
  }
  return shuffledDeck;
}

/**
 * Get the path to image associated with a card.
 * @param card the card whose image to get
 * @returns the path to the card's image
 */
export function getImage(card: Card) {
  switch (card.type) {
    case "money":
      return `assets/money/${card.value}.png`;
    case "action":
      return `assets/action/${card.name}.png`;
    case "rent":
      return `assets/action/rent/${card.colours.join("_")}.png`;
    case "rent_rainbow":
      return "assets/action/rent/rainbow.png";
    case "property_wild":
      return `assets/property/wild/${card.colours.join("_")}.png`;
    case "property_rainbow":
      return "assets/property/wild/rainbow.png";
    case "property":
      return `assets/property/${card.colour}/${card.name}.png`;
  }
}
