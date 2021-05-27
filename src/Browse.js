import { render } from "@testing-library/react";
import axios from "axios";

import React, { Component } from "react" 

const api_id = process.env.REACT_APP_API_ID
const api_key = process.env.REACT_APP_API_KEY
const api_instant_url = 'https://trackapi.nutritionix.com/v2/search/instant?query='
const api_item_url = 'https://trackapi.nutritionix.com/v2/search/item?nix_item_id='

class Browse extends Component {

  state = {
    searchValue: '',
    foodList: [],
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value})
  }

  handleSearch = () => {
    this.searchFood(this.state.searchValue)
  }

  searchFood = searchInput => {
    axios.get(api_instant_url+searchInput, {
      headers: {
        'x-app-id': api_id,
        'x-app-key': api_key,
      }
    })
    .then(response => {
      this.setState({foodList: response.data})
      console.log(response.data)
    })
  }

  selectFood = food_id => {
    console.log(food_id)
  }

  render() {

    return (
    <div>
      <h2 className="page-title pt-5">Browse Food</h2>
      <div>
        <div>
          <input type="text" 
                 name="food" 
                 id="food_input" 
                 palceholder="What did you have to eat?" 
                 onChange={event => this.handleOnChange(event)} 
                 value={this.state.searchValue}
          />
          <button onClick={this.handleSearch}>Search</button>

          {this.state.foodList.branded ? (
          <div>
            {this.state.foodList.branded.map((food, index) => (
              <div key={index}>
                <img src={food.photo.thumb}/><h1>{food.food_name}</h1>
                <button onClick={this.selectFood(food.nix_item_id)}>Select</button>
              </div>
            ))}
          </div>
          ):
          (<p>Where's the food at?</p>
          )}
        </div>
      </div>
    </div>
    )}
}

export default Browse