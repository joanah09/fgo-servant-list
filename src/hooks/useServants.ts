import { useQuery } from '@tanstack/react-query';
import servantsData from '../data';
import {
  ServantData,
  ServantDataDetailed,
} from './index'; 

export const useServants = (servantId?: number | string) => {
  return useQuery<ServantDataDetailed[]>(
    ['servants', servantId],
    async () => {
      if (!servantId) {
        // throw new Error(`Servant ID not found.`);
        return [];
      }
      const servantData = servantsData as ServantData[];
      const detailedServant = servantData.find((data) => data.id == servantId) as ServantDataDetailed;

      return detailedServant ? [detailedServant] : [];
    },
    {
      staleTime: 10 * 1000,
      cacheTime: 5 * 60 * 1000,
    }
  );
};