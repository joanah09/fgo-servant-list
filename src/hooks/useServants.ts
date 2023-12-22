import servantsData from '../data/servants';

interface Costume {
  id: number;
  costumeCollectionNo: number;
  battleCharaId: number;
  shortName: string;
}

export interface Servant {
  id: number;
  collectionNo: number;
  name: string;
  originalName: string;
  type: string;
  flag: string;
  classId: number;
  className: string;
  attribute: string;
  rarity: number;
  atkMax: number;
  hpMax: number;
  face: string;
  costume: Record<string, Costume>;
  overwriteName?: undefined;
  originalOverwriteName?: undefined;
}

const useServants = () => {
  try {
    return servantsData as unknown as Servant[];
  } catch (error) {
    throw new Error(`Failed to fetch servants: ${error.message}`);
  }
};

export default useServants;
