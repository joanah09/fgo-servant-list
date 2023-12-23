import servantsData from '../data/servants';

export interface ServantSort {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
}

export const useServants = () => {
  try {
    return servantsData as unknown as ServantSort[];
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};
