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

export interface ServantDataDetailed {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
  collectionNo: number;
  lvMax: number;
  flag: string
}

export const useServants = async (searchName?: string, servantId?: number): Promise<ServantData[]> => {
  try {
    if (searchName) {
      const response = await fetch(apiSearchUrl(searchName));
      const searchData = await response.json();

      return searchData as ServantData[];
    } else if (servantId) {
      // Fetch individual servant data using apiBaseUrl and servantId
      const response = await fetch(`${apiBaseUrl}/${servantId}`);
      const servantData = await response.json();

      // console.log("nice data", servantData)
      return [servantData] as ServantDataDetailed[];
    } else {
      // Static data, used for initial display
      return servantsData as unknown as ServantData[];
    }
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};
