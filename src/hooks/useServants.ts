import servantsData from '../data/servants';
import { apiUrl } from '../services/api-client';

export interface ServantSort {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
}

export const useServants = async (searchName?: string): Promise<ServantSort[]> => {
  try {
    if (searchName) {
      const response = await fetch(apiUrl(searchName));
      const searchData = await response.json();
      
      return searchData as ServantSort[];
    } else {
      // Static data, used for initial display
      return servantsData as unknown as ServantSort[];
    }
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};