import { useQuery } from '@tanstack/react-query';
import servantsData from '../data';
import { apiBaseUrl } from '../services/api-client';
import {
  ServantData,
  ServantDataDetailed,
} from './index'; 

export const useServants = (servantId?: number | string) => {
  return useQuery<ServantDataDetailed[]>(
    ['servant', servantId], // Use a dynamic cache key
    async () => {
      if (!servantId) {
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
      enabled: !!servantId, 
      staleTime: 10 * 1000,
      cacheTime: 5 * 60 * 1000,
    }
  );
};
