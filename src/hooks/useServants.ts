import { useQuery } from '@tanstack/react-query';
import servantsData from '../data';
import { apiBaseUrl } from '../services/api-client';
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

      try {
        const response = await fetch(apiBaseUrl);
        const servantData = await response.json();
  
        const detailedServant = servantData.find((data: ServantData) => data.id == servantId) as ServantDataDetailed;
  
        return detailedServant ? [detailedServant] : [];
      } catch (error) {
        return []
      }
    },
    {
      staleTime: 10 * 1000,
      cacheTime: 5 * 60 * 1000,
    }
  );
};