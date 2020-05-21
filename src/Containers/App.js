import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox/SearchBox';
import Scroll from '../Components/Scroll/Scroll';
import CardList from '../Components/CardList/CardList';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
        })
        return (!robots.length) ? <h1>Loading</h1> : (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundary>n
                </Scroll>
            </div>  
        );
    }
}

export default App;