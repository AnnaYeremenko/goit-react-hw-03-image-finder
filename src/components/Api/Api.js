import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchGalleryWithQuery = async (searchQuery, per_page) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${per_page}&key=30878986-dbe096aab184f812986a58540&image_tupe=photo&orientation=horizontal&per_page=12`
  );
  console.log(response.data.hits);
  return response.data;
};