import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      hero_name: '',
      favorite_food: '',
      users: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSortByLastName = this.handleSortByLastName.bind(this);
    this.handleSortByFirstName = this.handleSortByFirstName.bind(this);
  }

  componentDidMount() {
    axios.get('/users/foods')
      .then((response) => {
        this.setState({
          users: response.data
        })
      })
  }

  handleSortByLastName() {
    let sorted = this.state.users.sort((a, b) => {
      if (a.last_name < b.last_name) return -1
      else return 1
    })
    this.setState({
      users: sorted
    })
  }

  handleSortByFirstName() {
    let sorted = this.state.users.sort((a, b) => {
      if (a.first_name < b.first_name) return -1
      else return 1
    })
    this.setState({
      users: sorted
    })
  }

  handleInputChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit() {
    let data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      hero_name: this.state.hero_name,
      favorite_food: this.state.favorite_food
    }

    axios.post('/users/food', data)
      .then((response) => {
        console.log(response)
        this.state.users.unshift(data)
        this.setState({
          users: this.state.users,
          first_name: '',
          last_name: '',
          hero_name: '',
          favorite_food: ''
        })
      })
  }

  render() {
    return (
      <div className='app-row'>
        <div className='create-user-container'>
          <h2>Create a User</h2>
          <form>
            <div className='form-item'>
              <label>
                First Name:
              </label>
              <input className='create-user-input' type='text' name='first_name'
                value={this.state.first_name}
                onChange={this.handleInputChange}
              /><br/>
            </div>
            <div className='form-item'>
              <label>
                Last Name:
              </label>
              <input className='create-user-input' type='text' name='last_name'
                value={this.state.last_name}
                onChange={this.handleInputChange}
              /><br/>
            </div>
            <div className='form-item'>
              <label>
                Hero Name:
              </label>
              <input className='create-user-input' type='text' name='hero_name'
                value={this.state.hero_name}
                onChange={this.handleInputChange}
              /><br/>
            </div>
            <div className='form-item'>
              <label>
                Favorite Food:
              </label>
              <input className='create-user-input' type='text' name='favorite_food'
                value={this.state.favorite_food}
                onChange={this.handleInputChange}
              /><br/>
            </div>
          </form>
          <input onClick={this.handleSubmit} className='submit-button' type='submit' value='Submit'/>
        </div>
        <div className='users-container'>
          <h2>Users</h2>
          <input onClick={this.handleSortByLastName} className='sort-button' type='submit' value='Sort last name'/>
          <input onClick={this.handleSortByFirstName} className='sort-button' type='submit' value='Sort first name'/>
          <div className='user-list'>
            {
              this.state.users.length ? this.state.users.map(user => (
                <div className='user-card' key={user.id}>
                  <h4>{user.first_name} {user.last_name}</h4>
                  <p>Hero: {user.hero_name}</p>
                  <p>Favorite Food: {user.favorite_food}</p>
                </div>
              ))
               : ''
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
