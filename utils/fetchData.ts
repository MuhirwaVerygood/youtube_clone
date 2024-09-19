import axios from 'axios';


export const fetchAllData= async(searchString: string)=>{
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: searchString,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '150',
      order: 'date'
    },
    headers: {
      'x-rapidapi-key': 'c5c43b4fe5msh43564e3e3ffb3b3p1b65f6jsnf5a111d8307c',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}