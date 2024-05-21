import { type } from "@testing-library/user-event/dist/type";
import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type)
            })
    }

    render() {
        return <div>
            <div className="input-field">
                <input
                    className="validate"
                    type="text"
                    placeholder="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKey}
                />
                <button className="btn waves-effect waves-light search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>search</button>
            </div>

            <div className="radio-btn">
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    }
}

export { Search }