
export type Offers = {
  price: number[],
  name: string[],
  type: string[],
  src: string[],
};

export type Offer = Offers;

export type Rooms = Offer[];
