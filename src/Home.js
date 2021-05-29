import './Home.css';
import { Link } from "react-router-dom";
import breakfast from './assets/images/undraw_breakfast_psiw.svg';
import hamburger from './assets/images/undraw_Hamburger_8ge6.svg';

export default function Home() {
  return (
    <>
      <h2 className="page-title pt-5">Dashboard</h2>
      <div className="container">
        <section className="dashboard-grid-container mt-4">
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
                  </div>
                </div>
                <div className="card nutrient-card">
                  <div className="card-body">
                    <span className="nutrient-header">Flex</span>
                    <span className="nutrient-desc protein">protein</span>
                  </div>
                </div>
                <div className="card nutrient-card">
                  <div className="card-body">
                    <span className="nutrient-header">Carbs</span>
                    <span className="nutrient-desc carb">carbohydrates</span>
                  </div>
                </div>
                <div className="card nutrient-card">
                  <div className="card-body">
                    <span className="nutrient-header">Drip</span>
                    <span className="nutrient-desc water">water</span>
                  </div>
                </div>
                <div className="card nutrient-card">
                  <div className="card-body">
                    <span className="nutrient-header">Sweet-tooth</span>
                    <span className="nutrient-desc sugar">sugar</span>
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
                  <h4>Your food log is empty!</h4>
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