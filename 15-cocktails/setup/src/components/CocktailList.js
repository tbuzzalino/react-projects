import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

export default function CocktailList() {
    const { cocktails, loading } = useGlobalContext();
    if (loading) {
        return <Loading />;
    }

    return (
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>
            <div className='cocktails-center'>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />;
                })}
            </div>
        </section>
    );
}
