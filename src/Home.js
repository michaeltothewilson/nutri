import './Home.css';
import { Link } from "react-router-dom";
import breakfast from './assets/images/undraw_breakfast_psiw.svg';
import hamburger from './assets/images/undraw_Hamburger_8ge6.svg';
const Emoji = require('./getEmojiCount.js');

export default function Home() {
  const RDI = 5;
  let foodLog = JSON.parse(localStorage.getItem('journal'));
  console.log(foodLog);

  // Initialize nutrients
  let poophoria = "";
  let flex = "";
  let carbs = "";
  let drip = "";
  let sugarTooth = "";
  
  // Keep track of which nutrients are filled
  let fiberIsFilled = false;
  let proteinIsFilled = false;
  let carbIsFilled = false;
  let waterIsFilled = false;
  let sugarIsFilled = false;

  if(foodLog) {
    // Calculate total amounts of each nutrient
    const totalFiber = foodLog.reduce((acc, curr) => acc + curr.fiber, 0);
    const totalProtein = foodLog.reduce((acc, curr) => acc + curr.protein, 0);
    const totalCarbs = foodLog.reduce((acc, curr) => acc + curr.carbs, 0);
    const totalWater = foodLog.reduce((acc, curr) => acc + curr.water, 0);
    const totalSugar = foodLog.reduce((acc, curr) => acc + curr.sugar, 0);

    // TESTING nutrient count
    console.log("fiber: " + totalFiber);
    console.log("protein: " + totalProtein);
    console.log("carbs: " + totalCarbs);
    console.log("water: " + totalWater);
    console.log("sugar: " + totalSugar);

    // Convert to number of emojis
    let numFiberEmojis =  Emoji.getEmojiCount("fiber", totalFiber);
    let numProteinEmojis =  Emoji.getEmojiCount("protein", totalProtein);
    let numCarbEmojis =  Emoji.getEmojiCount("carbs", totalCarbs);
    let numWaterEmojis =  Emoji.getEmojiCount("water", totalWater);
    let numSugarEmojis =  Emoji.getEmojiCount("sugar", totalSugar);
    
    // TESTING emoji count
    console.log("fiber emojis: " + numFiberEmojis);
    console.log("protein emojis: " + numProteinEmojis);
    console.log("carb emojis: " + numCarbEmojis);
    console.log("water emojis: " + numWaterEmojis);
    console.log("sugar emojis: " + numSugarEmojis);

    // Ensure emojis cap at RDI
    if (numFiberEmojis >= RDI) {
      numFiberEmojis = RDI;
      fiberIsFilled = true;
    }
    if (numProteinEmojis > RDI) {
      numProteinEmojis = RDI;
      proteinIsFilled = true;
    }
    if (numCarbEmojis > RDI) {
      numCarbEmojis = RDI;
      carbIsFilled = true;
    }
    if (numWaterEmojis > RDI) {
      numWaterEmojis = RDI;
      waterIsFilled = true;
    }
    if (numSugarEmojis > RDI) {
      numSugarEmojis = RDI;
      sugarIsFilled = true;
    }

    // Build emoji strings
    poophoria = "💩".repeat(numFiberEmojis);
    flex = "💪".repeat(numProteinEmojis);
    carbs = "🥖".repeat(numCarbEmojis);
    drip = "💧".repeat(numWaterEmojis);
    sugarTooth = "🍭".repeat(numSugarEmojis);
  }

  // When DOM has loaded, check if each nutrient is filled
  document.addEventListener("DOMContentLoaded", function() { 
    let fiberCard = document.querySelector(".nutrient-card-fiber");
    let proteinCard = document.querySelector(".nutrient-card-protein");
    let carbCard = document.querySelector(".nutrient-card-carbs");
    let waterCard = document.querySelector(".nutrient-card-water");
    let sugarCard = document.querySelector(".nutrient-card-sugar");
    
    // TESTING
    console.log(fiberCard);
    console.log(proteinCard);
    console.log(carbCard);
    console.log(waterCard);
    console.log(sugarCard);

    // If nutrient is filled, add the associated class required for hover styling
    if(fiberIsFilled) {
      if(fiberCard.classList.contains('nutrient-not-filled')){
        fiberCard.classList.remove('nutrient-not-filled');
        fiberCard.classList.add('nutrient-filled');
      }
    }
    if(proteinIsFilled) {
      if(proteinCard.classList.contains('nutrient-not-filled')){
        proteinCard.classList.remove('nutrient-not-filled');
        proteinCard.classList.add('nutrient-filled');
      }
    }
    if(carbIsFilled) {
      if(carbCard.classList.contains('nutrient-not-filled')){
        carbCard.classList.remove('nutrient-not-filled');
        carbCard.classList.add('nutrient-filled');
      }
    }
    if(waterIsFilled) {
      if(waterCard.classList.contains('nutrient-not-filled')){
        waterCard.classList.remove('nutrient-not-filled');
        waterCard.classList.add('nutrient-filled');
      }
    }
    if(sugarIsFilled) {
      if(sugarCard.classList.contains('nutrient-filled')){
        sugarCard.classList.remove('nutrient-filled');
        sugarCard.classList.add('nutrient-not-filled');
      }
    }
  });

  return (
    <>
      <h2 className="page-title pt-5">Dashboard</h2>
      <div className="container">
        <section className="dashboard-grid-container">
          <div className="grid-item item1">
            <div className="card">
              <div className="card-header nutrients-header">
                Nutrients
              </div>
              <div className="card-body">
                <div className="card nutrient-card nutrient-card-fiber nutrient-not-filled">
                  <div className="card-body">
                    <span className="nutrient-header">Poophoria</span>
                    <span className="nutrient-desc fiber">fiber</span>
                    <span className="nutrient-emojis">{poophoria}</span>
                  </div>
                </div>
                <div className="card nutrient-card nutrient-card-protein nutrient-not-filled">
                  <div className="card-body">
                    <span className="nutrient-header">Flex</span>
                    <span className="nutrient-desc protein">protein</span>
                    <span className="nutrient-emojis">{flex}</span>
                  </div>
                </div>
                <div className="card nutrient-card nutrient-card-carbs nutrient-not-filled">
                  <div className="card-body">
                    <span className="nutrient-header">Carbs</span>
                    <span className="nutrient-desc carb">carbohydrates</span>
                    <span className="nutrient-emojis">{carbs}</span>
                  </div>
                </div>
                <div className="card nutrient-card nutrient-card-water nutrient-not-filled">
                  <div className="card-body">
                    <span className="nutrient-header">Drip</span>
                    <span className="nutrient-desc water">water</span>
                    <span className="nutrient-emojis">{drip}</span>
                  </div>
                </div>
                <div className="card nutrient-card nutrient-card-sugar nutrient-filled">
                  <div className="card-body">
                    <span className="nutrient-header">Sweet-tooth</span>
                    <span className="nutrient-desc sugar">sugar</span>
                    <span className="nutrient-emojis">{sugarTooth}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item item2">
            <div className="card">
              <div className="card-body">
                <img className="img-fluid" src={breakfast} alt="A graphic of an English Breakfast plate in between a bottle of ketchup and a glass of iced soda" />
                <div className="mt-3 text-center">
                  <Link to="/browse">
                    <button type="button" class="btn btn-outline-success">Add to your food log</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item item3">
            <div className="card">
              <div className="card-body">
                <img className="img-fluid" src={hamburger} alt="A graphic of a man next to an unusually large hamburger" />
                <div className="mt-3">
                  <h4>Your food log is looking sparse!</h4>
                  <p>Add food to your log to see your dashboard fill up</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}