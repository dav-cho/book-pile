import axios from 'axios';

const GOOGLE_BASE_URL = 'https://www.googleapis.com/books/v1/volumes/?q=';
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const fetchGoogle = async searchTerm => {
  try {
    const res = await axios.get(
      `${GOOGLE_BASE_URL}${searchTerm}&key=${GOOGLE_API_KEY}`
    );
    const data = await res.data.items.slice(0, 12);
    // console.log('~ data', data);

    return data;
  } catch (err) {
    console.log('~ ERROR', err);
  }
};

// const OPENLIBRARY_BASE_URL = 'https://openlibrary.org/search.json?q=';

// const fetchOpenLibrary = async searchVal => {
//   try {
//     const res = await axios.get(`${OPENLIBRARY_BASE_URL}${searchVal}`);

//     return res.data;
//   } catch (err) {
//     console.log('~ ERROR', err);
//   }
// };
