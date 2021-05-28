// Import Starter Pack
import { render } from "@testing-library/react";
import axios from "axios";

import React, { Component } from "react" 

// Global API Variable Starter Pack
const api_id = process.env.REACT_APP_API_ID
const api_key = process.env.REACT_APP_API_KEY
const api_instant_url = 'https://trackapi.nutritionix.com/v2/search/instant?query='
const api_item_url = 'https://trackapi.nutritionix.com/v2/search/item?nix_item_id='
const api_natural_url = 'https://trackapi.nutritionix.com/v2/natural/nutrients'
const headers= {'x-app-id': api_id,'x-app-key': api_key,}

// Local Storage
let food_log = []
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

  // Search Nutritionix for a Food Item
  searchFood = food => {
    // Variable Starter Pack
    let params = {query: food}

    // Send a Post Request to the Natural API end point
    axios.post(api_natural_url, params, {headers,})
    .then(response => {
      console.log(response.data)

      // The API will send us an array, let's put it into our Food List State
      this.setState({foodList: response.data.foods})
    })
    .catch(error =>{
      console.log(error)
    })
  }

  // Select a Food Item and store said item into local storage
  selectFood = food => {
    console.log(food)

    // Place all the data into an object
    const foodEntry = {
      'name': food.food_name,      
      'photo': food.photo.thumb,
      'calories': food.nf_calories,
      'fat': food.nf_total_fat,
      'sodium': food.nf_sodium,
      'carbs': food.nf_total_carbohydrate,
      'fiber': food.nf_dietary_fiber,
      'protein': food.nf_protein,
      'sugar':food.nf_sugars,
    }
    
    // Put the food entry into the food log array
    food_log.push(foodEntry)

    // Store the information locally
    localStorage.setItem("journal",JSON.stringify(food_log))
  }
 
    /*axios.get(api_item_url+food_id, {
      headers: {
        'x-app-id': api_id,
        'x-app-key': api_key,
      }
    })
    .catch(error => {
      console.log(error)
    })*/


  render() {

    return (
    <div>
      <h2 className="page-title pt-5">Browse Food</h2>
      <div>
        <div>
          <input type="text" 
                 name="food" 
                 id="food_input" 
                 placeholder="example: 1 pizzadilla" 
                 onChange={event => this.handleOnChange(event)} 
                 value={this.state.searchValue}
          />
          <button onClick={this.handleSearch}>Search</button>

          {this.state.foodList? (
          <div>
            {this.state.foodList.map((food, index) => (
              <div key={index}>
                <img src={food.photo.thumb}/><h2>{food.food_name}</h2>
                <h3>Calories: {food.nf_calories}</h3>
                <h3>Fat(g): {food.nf_total_fat}</h3>
                <h3>Sodium(mg): {food.nf_sodium}</h3>
                <h3>Carbs(g): {food.nf_total_carbohydrate}</h3>
                <h3>Fiber(g): {food.nf_dietary_fiber}</h3>
                <h3>Protein(g): {food.nf_protein}</h3>
                <h3>Sugar(g): {food.nf_sugars}</h3>
                <button onClick={this.selectFood(food)}>Select</button>
              </div>
            ))}
          </div>
          ):
          (<p>What noms did you nom?</p>
          )}
        </div>
      </div>
    </div>
    )}
}

export default Browse