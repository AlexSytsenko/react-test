import { Component } from 'react';
import SearchNews from '../SearchNews/SerchNews';
import newsApi from '../../servises/news-api';

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    newsApi
      .fetchArticles(options)
      .then(articles => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

    return (
      <div>
        {error && <h1>Ой ошибка, что то пошло не так!</h1>}
        <h1>Статьи</h1>
        <SearchNews onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>

        {isLoading && <h1>Загружаем...</h1>}

        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchArticles}>
            Загурзить еще
          </button>
        )}
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
