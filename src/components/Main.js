import food from "../assets/food/food1.png";
import greek from "../assets/food/greek-salad.webp";
import bruschetta from "../assets/food/bruschetta.jpeg";
import lemon from "../assets/food/lemon-dessert.webp";
import pers1 from "../assets/testimonials/pers1.jpg";
import pers2 from "../assets/testimonials/pers2.jpg";
import pers3 from "../assets/testimonials/pers3.jpg";
import pers4 from "../assets/testimonials/pers4.jpg";

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

          {/* TESTIMONIALS */}
<section className="testimonials">
  <h2>Testimonials</h2>
  <div className="testimonial-cards">
    {/* CARD 1 */}
    <div className="testimonial-card">
      <img src={pers1} alt="Customer 1" />
      <div className="testimonial-info">
        <p className="testimonial-name">Maria R.</p>
        <p className="testimonial-rating">★★★★★</p>
        <p className="testimonial-text">
          Amazing food and friendly staff! The Greek salad is my favorite.
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="testimonial-card">
      <img src={pers2} alt="Customer 2" />
      <div className="testimonial-info">
        <p className="testimonial-name">John D.</p>
        <p className="testimonial-rating">★★★★★</p>
        <p className="testimonial-text">
          The ambiance is perfect and the lemon dessert is to die for.
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="testimonial-card">
      <img src={pers3} alt="Customer 3" />
      <div className="testimonial-info">
        <p className="testimonial-name">Sofia L.</p>
        <p className="testimonial-rating">★★★★☆</p>
        <p className="testimonial-text">
          Great experience, I will definitely come back with friends!
        </p>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="testimonial-card">
      <img src={pers4} alt="Customer 4" />
      <div className="testimonial-info">
        <p className="testimonial-name">Alex P.</p>
        <p className="testimonial-rating">★★★★★</p>
        <p className="testimonial-text">
          Delicious meals and excellent service. Highly recommended!
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

export default Main;