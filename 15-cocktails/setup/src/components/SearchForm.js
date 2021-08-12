import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('');
    return (
        <section className='seaction search'>
            <form className='search-form'>
                <div className='form-control'>
                    <label htmlFor='name'>Search your cocktail</label>
                    <input type='text' id='name' fer={searchValue} />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
