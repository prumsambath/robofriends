import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    let { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobot = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField)
    );
    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">ROBOFRIENDS</h1>
        <SearchBox searchChange={onSearchChange} />

        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobot} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProp = state => ({ searchField: state.searchField });

const mapDispathToProp = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
  };
};

export default connect(
  mapStateToProp,
  mapDispathToProp
)(App);
