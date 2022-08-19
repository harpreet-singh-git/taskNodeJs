import axios from 'axios';

export const getEpisode = async (req: any, res: any) => {

  const response = await axios.get('https://rickandmortyapi.com/api/episode');
  // console.log("Get all episodes", response.data.results)
  const episodes = response.data.results
  for (const i in episodes) {
    // console.log("Get all episodes character array", episodes[i].characters)
    const characters = await episodes[i].characters
    episodes[i].characters = [];
    for (const url in characters) {
      console.log("Charcter url==>", characters[url]);
      const characterObj = await axios.get(characters[url]);
      // console.log(characterObj.data);
      episodes[i].characters.push(characterObj.data);
    }

    console.log("===========Episode object is coming pls be attentive =============");
    console.log("Updated episodes with url data=>", episodes[i]);
  }
};