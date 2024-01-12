import servantsData from "../data";
import { ServantData } from "./index";

export const useServantAvatar = (): ServantData[] => {
  return servantsData as unknown as ServantData[];
};
