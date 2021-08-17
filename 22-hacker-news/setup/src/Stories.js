import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
    const { isLoading, hits, removeStorie } = useGlobalContext();

    if (isLoading) {
        return <div className='loading'></div>;
    }
    return (
        <section className='stories'>
            {hits.map((h) => {
                const { objectID, title, num_comments, url, author, points } =
                    h;
                return (
                    <article className='story' key={objectID}>
                        <h4 className='title'>{title}</h4>
                        <p className='info'>
                            {points} points by <span>{author} | </span>
                            {num_comments}
                        </p>
                        <div>
                            <a
                                href={url}
                                target='_blank'
                                className='read-link'
                                rel='noopener noreferrer'
                            >
                                read more
                            </a>
                            <button
                                className='remove-btn'
                                onClick={() => removeStorie(objectID)}
                            >
                                remove
                            </button>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default Stories;
