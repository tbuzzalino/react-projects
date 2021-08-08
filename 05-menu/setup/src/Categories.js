import React from 'react';

const Categories = ({ filterItems, category }) => {
    return (
        <div className='btn-container'>
            {category.map((category, index) => {
                return (
                    <button
                        type='button'
                        className='filter-btn'
                        onClick={() => filterItems(category)}
                        key={index}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
