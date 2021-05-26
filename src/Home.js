import './Home.css';

export default function Home() {
  return (
    <>
      <h2 className="page-title pt-5">Dashboard</h2>
      <div className="container">
        <section class="grid-container mt-4">
          <div class="grid-item item1">
            <div class="card">
              <div class="card-header">
                Nutrients
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="grid-item item2">

          </div>
          <div class="grid-item item3">

          </div>
        </section>
      </div>
    </>
  );
}