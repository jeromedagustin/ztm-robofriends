import React from 'react';

const Card = ({ name, email , username}) => {
    // const { name, email , username}  = props;

    return (
        <div className='bg-light-green 
                        dib
                        pa3
                        ma2
                        grow
                        bw
                        shadow-5
                        tc
                        '>
            <img src={`https://robohash.org/${username}?200x200`} 
                 alt='RobotHash Robot'
            />
            <div> 
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card
