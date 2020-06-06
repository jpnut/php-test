import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import queryString from "query-string";

const buildUrl = (parsedQueryString, page) =>
    `${location.origin}${location.pathname}?${queryString.stringify({
        ...parsedQueryString,
        page
    })}`;

function CharacterList() {
    const parsedQueryString = queryString.parse(location.search);

    const { name, species, type, status, gender } = parsedQueryString;

    const prev = buildUrl(parsedQueryString, pagination.prev);
    const next = buildUrl(parsedQueryString, pagination.next);

    return (
        <div className="my-4">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <form id="character-filter-form">
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="character-name-input">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="character-name-input"
                                        name="name"
                                        defaultValue={name}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="character-species-input">
                                        Species
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="character-species-input"
                                        name="species"
                                        defaultValue={species}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="character-type-input">
                                        Type
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="character-type-input"
                                        name="type"
                                        defaultValue={type}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="character-status-input">
                                        Status
                                    </label>
                                    <select
                                        className="form-control"
                                        id="character-status-input"
                                        name="status"
                                        defaultValue={status}
                                    >
                                        <option value="">--</option>
                                        <option value="alive">Alive</option>
                                        <option value="dead">Dead</option>
                                        <option value="unknown">Unknown</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="character-gender-input">
                                        Gender
                                    </label>
                                    <select
                                        className="form-control"
                                        id="character-gender-input"
                                        name="gender"
                                        defaultValue={gender}
                                    >
                                        <option value="">--</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="genderless">
                                            Genderless
                                        </option>
                                        <option value="unknown">Unknown</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Filter
                            </button>
                            <a
                                href="/character"
                                className="btn btn-secondary ml-2"
                            >
                                Reset
                            </a>
                        </form>
                    </div>
                </div>
                <div className="characters mb-5">
                    {characters.map(character => (
                        <div className="card character" key={character.id}>
                            <a href={`/character/${character.id}`}>
                                <img
                                    className="card-img-top img-fluid"
                                    src={character.image}
                                    alt={`An image of the Rick and Morty character ${character.name}`}
                                    height="300px"
                                    width="300px"
                                />
                            </a>
                            <div className="card-body">
                                <a href={`/character/${character.id}`}>
                                    <h5 className="card-title">
                                        {character.name}
                                    </h5>
                                </a>
                                <p className="card-text">
                                    {character.species} ·{" "}
                                    {character.origin.name}
                                </p>
                                <hr />
                                <h6>Episodes</h6>
                                <p>
                                    {character.episode.map((ep, key) => (
                                        <span key={ep}>
                                            <span>{ep}</span>
                                            {key ===
                                            character.episode.length - 1 ? (
                                                ""
                                            ) : (
                                                <span> · </span>
                                            )}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination align-items-center">
                    <div>
                        <p>
                            {pagination.total} results · Page {pagination.page}{" "}
                            of {pagination.pages}
                        </p>
                    </div>
                    <nav className="ml-auto">
                        <ul className="pagination">
                            <li
                                className={classNames(
                                    "page-item",
                                    pagination.page === 1 && "disabled"
                                )}
                            >
                                <a className="page-link" href={prev}>
                                    Previous
                                </a>
                            </li>
                            <li
                                className={classNames(
                                    "page-item",
                                    pagination.page === pagination.pages &&
                                        "disabled"
                                )}
                            >
                                <a className="page-link" href={next}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default CharacterList;

if (document.getElementById("character-list")) {
    ReactDOM.render(
        <CharacterList />,
        document.getElementById("character-list")
    );
}
