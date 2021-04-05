import { Component } from 'react';
import axios from 'axios';
import SearchNews from '../SearchNews/SerchNews';

axios.defaults.headers.common['Authorization'] =
  'Bearer e4819cc6c6aa44caa2653b01f97e1426';

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
  };

  componentDidMount() {}

  onChangeQuery = query => {
    this.fetchArticles(query);
  };

  fetchArticles = query => {
    const { currentPage } = this.state;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=5&page=${currentPage}`,
      )
      .then(response => {
        this.setState(prevState => ({
          articles: response.data.articles,
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  render() {
    const { articles } = this.state;

    return (
      <div>
        <h1>Статьи</h1>
        <SearchNews onSubmit={this.onChangeQuery} />
        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.fetchArticles}>
          Загурзить еще
        </button>
      </div>
    );
  }
}

export default ArticlesView;

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

//e4819cc6c6aa44caa2653b01f97e1426

//axios.defaults.headers.common['Authorization'] =
//   'Bearer 4330ebfabc654a6992c2aa792f3173a3';

// const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
//   return axios
//     .get(
//       `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
//     )
//     .then(response => response.data.articles);
// };
