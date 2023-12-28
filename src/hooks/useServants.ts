import servantsData from '../data/servants';
import { apiSearchUrl, apiBaseUrl } from '../services/api-client';

export interface ServantData {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
  collectionNo: number;
}

export const useServants = async (searchName?: string, servantId?: number): Promise<ServantData[]> => {
  try {
    if (searchName) {
      const response = await fetch(apiSearchUrl(searchName));
      const searchData = await response.json();
      
      return searchData as ServantData[];
    } else if (servantId) {
      // Fetch individual servant data using apiBaseUrl
      servantId = 1
      const response = await fetch(`${apiBaseUrl}${servantId}`);
      const servantData = await response.json();
      
      return [servantData] as ServantData[];
    } else {
      // Static data, used for initial display
      return servantsData as unknown as ServantData[];
    }
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};
