import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br1 pa1 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?50x50`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;