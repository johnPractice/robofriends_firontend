import React from 'react';
import './App.css';
import CardList from "./Components/CardList";
import {robots} from "./data/robots";
import SearchBox from "./Components/SearchBox";
//App class Component
class App extends React.Component {
    constructor(props) {
        super(props);
        //define state for App Component
        this.state={
            robots:robots,
            searchField:''
        }
    }
    //search field event declare
    //after change to arrow function solve the this refer
    onSearchChange=(e)=>{
        const value = e.target.value.toLowerCase();

        this.setState({...this.state,searchField:value});
    };
    render() {
        //after changing the searchField re-render the DOM and page
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField);
        });
        return (
            <div className="tc">
                <h1 className='blue fw9-ns'>Robo Friends</h1>
                <SearchBox onSearchChange={this.onSearchChange} value={this.state.seagreen}/>
                <CardList robots={filteredRobots}/>

            </div>
        );
    }
}
export default App;
