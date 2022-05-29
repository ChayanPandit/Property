import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '05a060621dmshc188a8f7a66ad5dp14c16cjsn25ddcc54ce7a'
      }
  });
    
  return data;
}