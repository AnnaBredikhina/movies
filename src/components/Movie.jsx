import React from "react"

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="movie card">
        <div className="card-image">
            {
                poster === 'N/A' ?
                    <img src={`https://placehold.co/300x500?text=${title}`} />
                    : <img src={poster} />
            }
        </div>
        <div className="card-content">
            <span class="card-title">{title}</span>
            <p>{year}
                <span className="right">{type}</span>
            </p>
        </div>
    </div>
}

export { Movie }