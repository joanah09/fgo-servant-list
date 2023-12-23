import servantsData from '../data/servants';

export interface Servant {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
}

const useServants = () => {
  try {
    return servantsData as unknown as Servant[];
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};

export default useServants;
