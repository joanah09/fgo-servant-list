export interface ServantData {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
  collectionNo: number;
}

export interface Trait {
  id: number;
  name: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  detail: string;
  num: number;
}

export interface NP {
  card: string;
  name: string;
  rank: string;
  type: string;
  detail: string;
}

export interface CP {
  icon: string;
  card: string;
  name: string;
  detail: string;
}

export interface ServantDataDetailed extends ServantData {
  lvMax: number;
  flag: string;
  cost: number;
  originalBattleName: string;
  ruby: string;
  battleName: string;
  gender: string;
  attribute: string;
  cards: [];
  traits: Trait[];
  atkBase: string;
  atkMax: string;
  hpBase: string;
  hpMax: string;
  skills: Skill[];
  noblePhantasms: NP[];
  classPassive: CP[];
  coin: {
    item: {
      icon: string;
      name: string;
      detail: string;
    };
    comments: Record<string, any>[];
  };
  profile: {
    cv: string;
    illustrator: string;
    stats: {
      agility: string;
      deity: string;
      endurance: string;
      luck: string;
      magic: string;
      np: string;
      personality: string;
      policy: string;
      strength: string;
    };
    comments: Record<string, any>[];
  };
  extraAssets: {
    faces: {
      ascension: string[];
    };
    charaGraph: {
      ascension: {
        [key: string]: string;
      };
      costume: {
        [key: string]: string;
      };
    };
  };
}
