import { render } from "@testing-library/react";
import axios from "axios";

import React, { Component } from "react" 

const api_id = process.REACT_API_ID
const api_key = process.REACT_API_KEY
const api_url = 'https://trackapi.nutritionix.com/v2/search/instant?'
const api_query = 'query='

class Browse extends Component {

  state = {

    searchValue: '',
    foods: []
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value})
  }

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue)
  }

  makeApiCall = searchInput => {
    axios.get(api_url+api_query+searchInput, {
      headers: {
        'x-app-id': api_id,
        'x-app-key': api_key,
      }
    })
    .then(response => {
      this.setState({foods: response.data})
      console.log(response.data)
    })
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

          {this.state.foods.common ? (
          <div>
            {this.state.foods.common.map((food, index) => (
              <div key={index}>
                <img src={food.photo.thumb}/><h1>{food.food_name}</h1>
                <button>Select</button>
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


/*
export default function Browse() {
  

  function getFood(){
    var search = document.getElementById("food_input").value
    console.log(search)

    axios.get(api_url+api_query+search, {
      headers: {
        'x-app-id': api_id,
        'x-app-key': api_key,
      }
    })
    .then(response =>{
      const food_array = response.data
      console.log(food_array)
    })
  }

  return (
    <>
      <h2 className="page-title pt-5">Browse Food</h2>
      <div>
        <h4>What did you eat?</h4>

        <div>
          <input type="text" name="ingredient" id="food_input"></input>
        </div>

        <div>
          <button onClick={() => getFood()}>Search</button>
        </div>

      </div>
    </>
  );
}

*/

