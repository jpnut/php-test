import React from "react";
import ReactDOM from "react-dom";

function Character() {
    return (
        <div className="my-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            className="card-img-top img-fluid"
                            src={character.image}
                            alt={`An image of the Rick and Morty character ${character.name}`}
                            height="300px"
                            width="300px"
                        />
                    </div>
                    <div className="col-md-8">
                        <h3>{character.name}</h3>
                        <dl>
                            <dt>Species</dt>
                            <dd>{character.species}</dd>
                            <dt>Origin</dt>
                            <dd>{character.origin.name}</dd>
                            <dt>Status</dt>
                            <dd>{character.status}</dd>
                            <dt>Location</dt>
                            <dd>{character.location.name}</dd>
                            <dt>Type</dt>
                            <dd>{character.type || "N/A"}</dd>
                            <dt>Gender</dt>
                            <dd>{character.gender}</dd>
                        </dl>
                        <hr />
                        <h6>Episodes</h6>
                        <p>
                            {character.episode.map((ep, key) => (
                                <span key={ep}>
                                    <span>{ep}</span>
                                    {key === character.episode.length - 1 ? (
                                        ""
                                    ) : (
                                        <span> · </span>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Character;

if (document.getElementById("character")) {
    ReactDOM.render(<Character />, document.getElementById("character"));
}
