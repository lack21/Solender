import user1 from "./images/user_1.jpg";
import user2 from "./images/user_2.jpg";
import user3 from "./images/user_3.jpg";

function TestimonialsSection() {
  return (
    <section id="testimonials">
      <h2 className="sub-heading">
        Our <span>Testimonials</span>
      </h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="testimonials-row">
        <div className="testimonial">
          <img src={user1} alt="user" />
          <h3>Lorem Ipsum</h3>
          <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            corrupti inventore corporis soluta laudantium illo autem nisi
            maiores voluptas numquam officia omnis!"
          </p>
        </div>
        <div className="testimonial">
          <img src={user2} alt="user" />
          <h3>Lorem Ipsum</h3>
          <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            corrupti inventore corporis soluta laudantium illo autem nisi
            maiores voluptas numquam officia omni!"
          </p>
        </div>
        <div className="testimonial">
          <img src={user3} alt="user" />
          <h3>Lorem Ipsum</h3>
          <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            corrupti inventore corporis soluta laudantium illo autem nisi
            maiores voluptas numquam officia omnis!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
