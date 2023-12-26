import servantsData from '../data/servants';

export interface ServantSort {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
}

export const useServants = async (searchName?: string): Promise<ServantSort[]> => {
  try {
    if (searchName) {
      // If searchName is provided, make an API call for searching by name
      const apiUrl = `https://api.atlasacademy.io/nice/NA/servant/search?name=${encodeURIComponent(searchName)}`;
      const response = await fetch(apiUrl);
      const searchData = await response.json();
      // Assuming the API response has a structure similar to ServantSort
      return searchData as ServantSort[];
    } else {
      // If searchName is not provided, return the static data
      return servantsData as unknown as ServantSort[];
    }
  } catch (error) {
    throw new Error(`Failed to fetch servants.`);
  }
};
