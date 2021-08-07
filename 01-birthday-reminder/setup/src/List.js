import React from 'react';

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, image, age } = person;
                return (
                    <article className='person'>
                        <img src={image} alt={id} />
                        <div>
                            <h4 key={id}>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;
