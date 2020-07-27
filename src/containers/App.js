import React from 'react';
import './App.css';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
//App class Component
class App extends React.Component {
    constructor(props) {
        console.log('in constructor');
        super(props);
        //define state for App Component
        this.state={
            robots:[],
            searchField:''
        }
    }
    //search field event declare
    //after change to arrow function solve the this refer
    onSearchChange=(e)=>{
        const value = e.target.value.toLowerCase();

        this.setState({...this.state,searchField:value});
    };
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

        //after changing the searchField re-render the DOM and page
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField);
        });
        return (
        this.state.robots.length === 0?
            <h1>Loading :)</h1>
       :
            <div className="tc">
                <h1 className='blue fw9-ns'>Robo Friends</h1>
                <SearchBox onSearchChange={this.onSearchChange} value={this.state.seagreen}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}
export default App;
