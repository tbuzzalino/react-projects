import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
    const { isLoading, handlePage, page, nbPages } = useGlobalContext();
    return (
        <div className='btn-container'>
            <button disable={isLoading} onClick={() => handlePage('dec')}>
                prev
            </button>
            <p>
                {page + 1} of {nbPages}
            </p>
            <button disable={isLoading} onClick={() => handlePage('asc')}>
                next
            </button>
        </div>
    );
};

export default Buttons;
