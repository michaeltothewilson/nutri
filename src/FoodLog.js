//storage.json is local storage of foods

import {useState} from "react"

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
      <div className="foodlog">
        {
          data? data.map(
            function(data) {
              return (
                <ul className="foodlog">
                  <li className="title">What you ate today:</li>
                  <li className="items">{data[0].name}</li>
                  <li className="items">{data[1].name}</li>
                </ul>
              )
            }
          ):""
        }
      </div>
    </>
  );
}
