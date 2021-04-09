import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer e4819cc6c6aa44caa2653b01f97e1426';

const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(response => response.data.articles);
};

export default { fetchArticles };
