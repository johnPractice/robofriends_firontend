import React from "react";

const Card = (props) => {
    const {id, email, name} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-1 pointer'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='photos'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
export default Card;