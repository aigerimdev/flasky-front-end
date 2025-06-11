import PropTypes from 'prop-types';
import { useState } from 'react';


const Cat = ({ name, color, personality, caretaker }) => {
    const [petCount, setPetCount ]= useState(0);
    const incrieasePets = () => {
        setPetCount(prevPetCount => prevPetCount + 1);
    };
const handlePetCat = () => {
    incrieasePets();
}
return (
    <li className='cat'>
        <h2>Name: {name}</h2>
        <h2>Color: {color}</h2>
        <h2>Personality: {personality}</h2>
        <h2>Caretaker: {caretaker}</h2>
        <h2># of Pets {petCount}</h2>
        <button onClick={event => handlePetCat()}>Pet</button>
    </li>
);
};

Cat.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired
};

export default Cat;