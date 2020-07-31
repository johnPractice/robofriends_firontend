import React from "react";
import Card from "./Card";

const CardList = (props) => {
    const {robots} = props;
    const cardComponent = robots.map(user => {
        return (
            <Card
                email={user.email}
                id={user.name}
                name={user.name}
                key={user.id}
            />
        );
    });
    return (
        <div>
            {cardComponent}
        </div>
    );

};
export default CardList;