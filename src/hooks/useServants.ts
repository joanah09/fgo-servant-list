import servantsData from '../data';
import { apiSearchUrl, apiBaseUrl } from '../services/api-client';

export interface ServantData {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
  collectionNo: number;
}

interface Trait {
  id: number;
  name: string;
}

interface Skill {
  id: number;
  name: string;
  icon: string;
  detail: string;
  num: number
}

interface NP {
  card: string;
  name: string;
  rank: string;
  type: string;
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
  profile: {
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
  };
  extraAssets: {
    faces: {
      ascension: string[]
    },
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

export const useServants = async (
  searchName?: string,
  servantId?: number
): Promise<ServantData[] | ServantDataDetailed[]> => {
  try {
    if (searchName) {
      //this search should be in a different hook 
      const response = await fetch(apiSearchUrl(searchName));
      const searchData = await response.json();

      if (searchData.length === 0) {
        throw new Error(`No servants found.`);
      }
      return searchData as ServantData[] | ServantDataDetailed[];
    } else if (servantId) {
      // const servantData = servantsData as ServantData[];
      const servantData = servantsData as unknown as ServantData[];

      const detailedServant = servantData.find(data => data.id === servantId) as ServantDataDetailed;
      return detailedServant ? [detailedServant] : [];
    } else {
      // return servantsData as ServantData[];
      return servantsData as unknown as ServantData[];
    }
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};
