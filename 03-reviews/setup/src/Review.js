import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    //Con esta funcion lo que hago es fijarme que si llego al ultimo pueda volver al primero y viceversa.

    const checkNumber = (number) => {
        if (number > people.length - 1) return 0;
        if (number < 0) return people.length - 1;
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;

            return checkNumber(newIndex);
        });
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);

        if (randomNumber === index) {
            randomNumber++;
        }
        console.log(randomNumber);
        setIndex(checkNumber(randomNumber));
    };

    //Con esta funcion lo que hago es pickear un elemento al azar de mi array y si me toca 2 veces el mismo elemento lo que hago es que lo modifique por el siguiente elemento del array.

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson} type='button'>
                surprise me
            </button>
        </article>
    );
};

export default Review;
