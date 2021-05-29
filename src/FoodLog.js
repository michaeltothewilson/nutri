//storage.json is temporary local storage of foods
//daily intake that I'm going off of: 
//fiber: 30g
//protein: 50g
//carbs: 275g
//water: 3 liters
//sugar: 30g
//import {useState} from "react"
import './FoodLog.css'
const Emoji = require('./getEmojiCount.js');

export default function FoodLog() {

  var food_log = JSON.parse(localStorage.getItem('journal'))
  console.log(food_log)

  return (
    <>
      <h2 className="page-title pt-5">Food Log</h2>
      <div className="grid-container">
        <ul className="foodlog">
          <li className="title">What you ate today:</li>  
          {
            food_log? food_log.map(
              function(food_log) {
                let emojiCart = []
                let emojiString = ""
                let emoji = ""
                let fiberNum = Emoji.getEmojiCount("fiber", food_log.fiber)
                let proteinNum = Emoji.getEmojiCount("protein", food_log.protein)
                let carbsNum = Emoji.getEmojiCount("carbs", food_log.carbs)
                let waterNum = Emoji.getEmojiCount("water", food_log.water)
                let sugarNum = Emoji.getEmojiCount("sugar", food_log.sugar)
                emojiCart.push(fiberNum)
                emojiCart.push(proteinNum)
                emojiCart.push(carbsNum)
                emojiCart.push(waterNum)
                emojiCart.push(sugarNum)
                for(let i = 0; i < emojiCart.length; ++i) {
                  switch(i) {
                    case 0:
                      emoji = '💩'
                      break
                    case 1:
                      emoji = "💪"
                      break
                    case 2: 
                      emoji = "🥖"
                      break
                    case 3:
                      emoji = "💧"
                      break
                    case 4:
                      emoji = "🍭"
                      break
                    default:
                      emoji = "🌞"
                      break
                  }
                  for(let j = 0; j < emojiCart[i]; ++j) {
                    emojiString += emoji
                  } 
                }
                return (
                  <li className="item">{food_log.name}  <span className="emojis"> emojis: {emojiString}</span></li>
                )
              }
            ):""
          }
        </ul>
      </div>
    </>
  );
}
