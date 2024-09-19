import axios from 'axios';
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'x-rapidapi-key': 'c5c43b4fe5msh43564e3e3ffb3b3p1b65f6jsnf5a111d8307c',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAllData= async()=>{
  try {
    const response = await axios.request(options);
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}