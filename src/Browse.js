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
    let foodEntry = {
      'name': food.food_name,      
      'photo': food.photo.thumb,
      'calories': food.nf_calories,
      'fat': food.nf_total_fat,
      'sodium': food.nf_sodium,
      'carbs': food.nf_total_carbohydrate,
      'fiber': food.nf_dietary_fiber,
      'protein': food.nf_protein,
      'sugar':food.nf_sugars,
      'servings': food.serving_qty, 
    }
    
    console.log(foodEntry)
    // Get the the local storage item into an array or create an empty array
    let foodJournal = localStorage.getItem("journal") === null ? [] : JSON.parse(localStorage.getItem("journal"))

    // Put the food entry into the food log array
    foodJournal.push(foodEntry)

    // Store the information locally
    localStorage.setItem("journal",JSON.stringify(foodJournal))
  }

  render() {

    return (
    <div>
      <li class="list-group-item" className="page-title pt-5">Browse Food</li>
      <div>
        <div>
          <input type="text" 
                 name="food" 
                 id="food_input" 
                 placeholder="example: 1 pizzadilla" 
                 onChange={event => this.handleOnChange(event)} 
                 value={this.state.searchValue}
          />
          <button type="button" class="btn btn-outline-success" onClick={this.handleSearch}>Search</button>

          {this.state.foodList? (
          <div>
            {this.state.foodList.map((food, index) => (
              <div key={index}>
                <div class="card">
                  <div class="card-block">
                    <h4 class="card-title">{food.food_name}</h4>
                    <h6 class="card-subtitle text-muted">{food.nf_calories} calories</h6>
                    <h6 class="card-subtitle text-muted">{food.serving_qty} servings</h6>
                  </div>
                  <img src={food.photo.highres} alt={food.food_name}/>
                  <div class="card-block">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Fat(g): {food.nf_total_fat}</li>
                      <li class="list-group-item">Sodium(mg): {food.nf_sodium}</li>
                      <li class="list-group-item">Carbs(g): {food.nf_total_carbohydrate}</li>
                      <li class="list-group-item">Fiber(g): {food.nf_dietary_fiber}</li>
                      <li class="list-group-item">Protein(g): {food.nf_protein}</li>
                      <li class="list-group-item">Sugar(g): {food.nf_sugars}</li>
                    </ul>
                    <button type="button" class="btn btn-outline-success" size="lg" onClick={this.selectFood.bind(this, food)}>Add {food.food_name} to food log</button>
                  </div>
                </div>
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