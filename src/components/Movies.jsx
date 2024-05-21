import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
    // movies было, стало movies = [] - значение по уолчанию 
    // пустой массив, чтобы не было ошибки
    const { movies = [] } = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
            // () вместо {} либо добавить return <Movie key={movie.imdbID} {...movie} />
        )) : <h4>Nothing found</h4>
        }
    </div>
}

export { Movies }