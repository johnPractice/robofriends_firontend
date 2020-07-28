import React from 'react';
import './App.css';
import {setSearchField} from '../actions';
import {connect} from 'react-redux';

import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
//App class Component
class App extends React.Component {
    constructor(props) {
        console.log('in constructor');
        super(props);
        //define state for App Component
        this.state={
            robots:[],
        }
    }
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
        console.log('in component did mount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(users=>
            {
                console.log(users);
                this.setState({...this.state,robots:users});
            })
            .catch(e=>console.error(e));
    }

    render() {
        console.log('in render');
        const {searchField,onSearchChange} = this.props;
        //after changing the searchField re-render the DOM and page
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
        this.state.robots.length === 0?
            <h1>Loading :)</h1>
       :
            <div className="tc">
                <h1 className='blue fw9-ns'>Robo Friends</h1>
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
const mapStateToProps =(state)=>{
    return {
        searchField: state.searchField
    }
};
//define mapDispatchToProps
const  mapDispatchToProps=(dispatch)=>{
    return{
        onSearchChange : (e)=>dispatch(setSearchField(e.target.value))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
