import React from 'react';
import './App.css';
import {requestRobots, setSearchField} from '../actions';
import {connect} from 'react-redux';

import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
import Header from "../Components/Header";

//App class Component
class App extends React.Component {

    //search field event declare
    //after change to arrow function solve the this refer
    // onSearchChange=(e)=>{
    //     const value = e.target.value.toLowerCase();
    //
    //     this.setState({...this.state,searchField:value});
    // };
    //component will mount
    componentWillMount() {
        console.log('in component will mount');
    }

    //component did mount
    componentDidMount() {
        // console.log('in component did mount');
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res=>res.json())
        //     .then(users=>
        //     {
        //         console.log(users);
        //         this.setState({...this.state,robots:users});
        //     })
        //     .catch(e=>console.error(e));
        this.props.onRequestRobots()
    }

    render() {
        console.log('in render');
        const {searchField, onSearchChange, robots, isPending} = this.props;
        //after changing the searchField re-render the DOM and page
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            isPending ?
                <h1>Loading :)</h1>
                :
                <div className="tc">
                    <Header/>
                    <SearchBox onSearchChange={onSearchChange} value={searchField}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
        );
    }
}

//define map state to props
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,

    }
};
//define mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
