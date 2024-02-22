import React from 'react';

const AboutListItem = ({item} ) => {
    return (
        <article>
            <p>{item.title} </p>
        </article>
    );
};

export default AboutListItem;