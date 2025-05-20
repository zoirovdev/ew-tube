import axios from 'axios'


const BASE_URI = 'https://youtube-v31.p.rapidapi.com'


const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'd37d1e7c57msha829c12893473e5p16dfdcjsn1fcc844dada6',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};



export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  },
}
