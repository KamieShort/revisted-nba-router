import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/fetch';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();

      setCharacters(data);
      setLoading(false);
    };
    getCharacters();
  }, []);

  if (loading) return <div>Loading Characters...</div>;

  return (
    <>
      <h1>Character List</h1>
      {loading ? (
        <p>Loading Characters...</p>
      ) : (
        <div>
          {characters.map((character) => (
            <div key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <h2>{character.name}</h2>
              </Link>
              <p>{character.status}</p>
              <img src={character.image} alt={`Image of ${character.name}`} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
