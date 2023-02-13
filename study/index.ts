type Player<E> = {
  name: string;
  extraInfo: E;
};
type JinExtra = {
  favFood: string;
};
type PlayerJin = Player<JinExtra>;
type A = Array<number>;

const jin: PlayerJin = {
  name: "Jin",
  extraInfo: {
    favFood: "beef",
  },
};

const sun: Player<null> = {
  name: "sun",
  extraInfo: {
    favFood: null,
  },
};

let a: A = [1, 2, 3, 4];
