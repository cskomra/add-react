import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='project' src={`https://robohash.org/${props.project.id}?set=set2&size=180x180`} />
        <h3><a href={props.project.html_url} target='_blank' rel='noopener noreferrer'>{props.project.name}</a></h3>
        <p id='description'>{props.project.description}</p>
        <p id='language'>{props.project.language ? props.project.language : "(not code specific)"}</p>
    </div>
)