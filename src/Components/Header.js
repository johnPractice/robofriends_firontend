import React from "react";

class Header extends React.Component {
    //doing this for dont rerender twice header just render one time
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
    //with return false in shouldComponentUpdate means never update and no need to render this component in every update

    render() {
        return <h1 className='blue fw9-ns'>Robo Friends</h1>;
    }
}

export default Header;