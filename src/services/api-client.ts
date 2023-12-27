export const apiUrl = (searchName: string): string =>
  `https://api.atlasacademy.io/basic/NA/servant/search?name=${encodeURIComponent(searchName)}`;
