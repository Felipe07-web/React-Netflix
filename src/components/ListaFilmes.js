import React from "react";
import './ListaFilmes.css';

const ListaFilmes = ({ title, items }) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="ListaFilmes--listarea">
                <div className="movieRow--list">
                    {/* Verifica se há resultados antes de mapear */}
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />       
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaFilmes;
