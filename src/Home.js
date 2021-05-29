import './Home.css';

export default function Home() {
  return (
    <>
      <h2 className="page-title pt-5">Dashboard</h2>
      <div className="container">
        <section className="grid-container mt-4">
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

          </div>
          <div className="grid-item item3">

          </div>
        </section>
      </div>
    </>
  );
}