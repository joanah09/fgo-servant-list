import servantsData from '../data';
import {
  ServantData,
  ServantDataDetailed,
  searchServants
} from './index'; 

export const useServants = async (
  searchName?: string,
  servantId?: number
): Promise<ServantData[] | ServantDataDetailed[]> => {
  try {
    if (searchName) {
      const searchData = await searchServants(searchName);
      return searchData as ServantData[] | ServantDataDetailed[];
    } else if (servantId) {
      const servantData = servantsData as unknown as ServantData[];
      const detailedServant = servantData.find(data => data.id === servantId) as ServantDataDetailed;
      return detailedServant ? [detailedServant] : [];
    } else {
      return servantsData as unknown as ServantData[];
    }
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};