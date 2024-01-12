import servantsData from '../data';
import {
  ServantData,
  ServantDataDetailed,
} from './index'; 

export const useServants = async (
  servantId?: number | string
): Promise<ServantDataDetailed[]> => {
  try {
    if (!servantId) {
      throw new Error(`Servant ID not found.`)
    }
      const servantData = servantsData as unknown as ServantData[];
      const detailedServant = servantData.find(data => data.id == servantId) as ServantDataDetailed;
      return detailedServant ? [detailedServant] : [];
  } catch (error) {
    throw error
  }
};