import { apiSearchUrl, apiBaseUrl } from "../services/api-client";
import { ServantData, ServantDataDetailed } from "./servantInterface";

export const searchServants = async (searchName: string) => {
  const response = await fetch(apiSearchUrl(searchName));
  const searchData = await response.json();

  if (searchData.length === 0) {
    throw new Error(`No servants found.`);
  }

  return searchData as ServantData[];
};
