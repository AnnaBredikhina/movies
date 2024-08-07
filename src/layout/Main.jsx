import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        results: 0,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Avengers`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false, results: data.totalResults })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false })
            })
    }

    searchMovies = (str, type) => {
        this.setState({ loading: true })
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false, results: data.totalResults })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false })
            })
    }

    render() {
        const { movies, loading, results } = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                // была проверка: пришёл ли массив, стала - проверка загрузки
                // movies.length ? (
                loading ? (<Preloader />
                ) : (
                        <Movies movies={movies} results={results} />
                )
            }
        </main>
    }
}

export {Main}