import axios from 'axios';

const GOOGLE_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const maxResults = 40;

export const fetchGoogleQuery = async (query, startIndex) => {
  try {
    const res = await axios.get(
      `${GOOGLE_BASE_URL}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&key=${GOOGLE_API_KEY}`
    );
    const data = await res.data.items;

    return data;
  } catch (err) {
    console.log('~ ERROR', err);
  }
};

// const OPENLIBRARY_BASE_URL = 'https://openlibrary.org/search.json?q=';

// const fetchOpenLibrary = async query => {
//   try {
//     const res = await axios.get(`${OPENLIBRARY_BASE_URL}${query}`);

//     return res.data;
//   } catch (err) {
//     console.log('~ ERROR', err);
//   }
// };
