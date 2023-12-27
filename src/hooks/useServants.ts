import servantsData from '../data/servants';
import { apiSearchUrl } from '../services/api-client';

export interface ServantData {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
}

export const useServants = async (searchName?: string): Promise<ServantData[]> => {
  try {
    if (searchName) {
      const response = await fetch(apiSearchUrl(searchName));
      const searchData = await response.json();
      
      return searchData as ServantData[];
    } else {
      // Static data, used for initial display
      return servantsData as unknown as ServantData[];
    }
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};