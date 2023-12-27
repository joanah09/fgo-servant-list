export const apiSearchUrl = (searchName: string): string =>
  `https://api.atlasacademy.io/basic/NA/servant/search?name=${encodeURIComponent(searchName)}`;


  export const apiBaseUrl = `https://api.atlasacademy.io/nice/NA/servant/`