//storage.json is temporary local storage of foods
//daily intake that I'm going off of: 
//fiber: 30g
//protein: 50g
//carbs: 275g
//water: 3 liters
//sugar: 30g
import {useState} from "react"
const Emoji = require('./getEmojiCount.js');

export default function FoodLog() {

  const [data, setData]=useState(null)

  fetch("./storage.json").then(
    function(res){
      return res.json()
    }).then(function(data){
      setData(data)
    }).catch(
      function(err) {
        console.log(err, ' error')
      }
    )

  return (
    <>
      <h2 className="page-title pt-5">Food Log</h2>
      <div className="grid-container">
        <ul className="foodlog">
          <li className="title">What you ate today:</li>  
          {
            data? data.map(
              function(data) {
                let emojiCart = []
                let emojiString = ""
                let emoji = ""
                let fiberNum = Emoji.getEmojiCount("fiber", data.fiber)
                let proteinNum = Emoji.getEmojiCount("protein", data.protein)
                let carbsNum = Emoji.getEmojiCount("carbs", data.carbs)
                let waterNum = Emoji.getEmojiCount("water", data.water)
                let sugarNum = Emoji.getEmojiCount("sugar", data.sugar)
                emojiCart.push(fiberNum)
                emojiCart.push(proteinNum)
                emojiCart.push(carbsNum)
                emojiCart.push(waterNum)
                emojiCart.push(sugarNum)
                for(let i = 0; i < emojiCart.length; ++i) {
                  switch(i) {
                    case 0:
                      emoji = '<Emoji symbol="💩" />'
                      break
                    case 1:
                      emoji = "&#128170;"
                      break
                    case 2: 
                      emoji = "&#129366;"
                      break
                    case 3:
                      emoji = "&#128167;"
                      break
                    case 4:
                      emoji = "&#127853;"
                      break
                    default:
                      emoji = "&#127774;"
                      break
                  }
                  for(let j = 0; j < emojiCart[i]; ++j) {
                    emojiString += emoji
                  } 
                }
                return (
                  <li className="item">{data.name} emojis: {emojiString}</li>
                )
              }
            ):""
          }
        </ul>
      </div>
    </>
  );
}
