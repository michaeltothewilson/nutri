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
    if (numFiberEmojis > RDI)
      numFiberEmojis = RDI;
    if (numProteinEmojis > RDI)
      numProteinEmojis = RDI;
    if (numCarbEmojis > RDI)
      numCarbEmojis = RDI;
    if (numWaterEmojis > RDI)
      numWaterEmojis = RDI;
    if (numSugarEmojis > RDI)
      numSugarEmojis = RDI;

    // Build emoji strings
    poophoria = "💩".repeat(numFiberEmojis);
    flex = "💪".repeat(numProteinEmojis);
    carbs = "🥖".repeat(numCarbEmojis);
    drip = "💧".repeat(numWaterEmojis);
    sugarTooth = "🍭".repeat(numSugarEmojis);
  }

  return (
    <>
      <h2 className="page-title pt-5">Dashboard</h2>
      <div className="container">
        <section className="dashboard-grid-container">
          <div className="grid-item item1">
            <div className="card">
              <div className="card-header">
                Nutrients
              </div>
              <div className="card-body">
                <div className="card nutrient-card">
                  <div className="card-body">
                    <span className="nutrient-header">Poophoria</span>
                    <span className="nutrient-desc fiber">fiber</span>
                    <span className="nutrient-emojis">{poophoria}</span>
                  </div>
                </div>
                <div className="card nutrient-card">
                  <div className="card-body">
                    <span className="nutrient-header">Flex</span>
                    <span className="nutrient-desc protein">protein</span>
                    <span className="nutrient-emojis">{flex}</span>
                  </div>
                </div>
                <div className="card nutrient-card">
                  <div className="card-body">
                    <span className="nutrient-header">Carbs</span>
                    <span className="nutrient-desc carb">carbohydrates</span>
                    <span className="nutrient-emojis">{carbs}</span>
                  </div>
                </div>
                <div className="card nutrient-card">
                  <div className="card-body">
                    <span className="nutrient-header">Drip</span>
                    <span className="nutrient-desc water">water</span>
                    <span className="nutrient-emojis">{drip}</span>
                  </div>
                </div>
                <div className="card nutrient-card">
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