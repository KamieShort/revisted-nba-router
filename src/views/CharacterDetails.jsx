import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../services/fetch.js';

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchDetails(id);

      setCharacter(data);
    };

    getDetails();
  }, []);

  return (
    <>
      <h1>{character.name}</h1>
      <img
        src={character.image}
        alt={`Image of ${character.name}`}
        border="2px black solid "
        height="300px"
      />
      <h3>Status: {character.status}</h3>
      <h3>Gender: {character.gender}</h3>
      <h3>Species: {character.species}</h3>
    </>
  );
}
