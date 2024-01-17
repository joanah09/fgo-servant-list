import { useQuery } from '@tanstack/react-query';
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
        return [];
      }
      
      const servantData = apiBaseUrl as unknown as ServantData[];
      const detailedServant = servantData.find((data) => data.id == servantId) as ServantDataDetailed;

      return detailedServant ? [detailedServant] : [];
    },
    {
      staleTime: 10 * 1000,
      cacheTime: 5 * 60 * 1000,
    }
  );
};