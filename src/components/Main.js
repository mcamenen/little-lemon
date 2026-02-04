import food from "../assets/food/food1.png";
import greek from "../assets/food/greek-salad.webp";
import bruschetta from "../assets/food/bruschetta.jpeg";
import lemon from "../assets/food/lemon-dessert.webp";

function Main({ setPage }) {
  return (
    <main className="main">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button onClick={() => setPage("reservations")}>
              Reserve a Table
            </button>
          </div>

          <div className="hero-image">
            <img src={food} alt="Little Lemon food" />
          </div>
        </div>
      </section>

      {/* SPECIALS */}
      <section className="specials">
        <div className="specials-header">
          <h2>This Week’s Specials!</h2>
          <button>Online Menu</button>
        </div>

        <div className="specials-cards">
          {/* CARD 1 */}
          <div className="card">
            <img src={greek} alt="Greek Salad" />
            <div className="card-header">
              <h3>Greek Salad</h3>
              <p className="price">$12.99</p>
            </div>
            <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese.</p>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <img src={bruschetta} alt="Bruschetta" />
            <div className="card-header">
              <h3>Bruschetta</h3>
              <p className="price">$5.99</p>
            </div>
            <p>Grilled bread smeared with garlic and seasoned with salt and olive oil.</p>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <img src={lemon} alt="Lemon dessert" />
            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <p className="price">$4.99</p>
            </div>
            <p>A traditional lemon dessert to cleanse your palate and finish your meal.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;