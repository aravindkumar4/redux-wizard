import React from 'react';

function Person({person}){
    return (
        <h2 style={{color: 'green'}}>
            <span>{person.firstname.toUpperCase()}</span> {' '}
            <span>{person.lastname.toUpperCase()}</span>
        </h2>

    )
}
export default Person