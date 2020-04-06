import React, {Component} from 'react';
import {SearchBox} from './components/search-box/search-box.component';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      projects: [],
      searchField: ''
    }
  }
  
  componentDidMount(){
    fetch('https://api.github.com/users/cskomra/repos')
    .then(response =>response.json())
    .then(projects => this.setState({ projects: projects}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render(){
    //const { monsters, searchField} = this.state;
    const projects = this.state.projects;
    const searchField = this.state.searchField;
    const filteredprojects = projects.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster Projects</h1>
        <SearchBox 
          placeholder='search project names'
          handleChange={this.handleChange}
        />
        <CardList projects={filteredprojects}/>
      </div>
    );
  }
}

export default App;
