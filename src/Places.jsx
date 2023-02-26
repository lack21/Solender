import australiaImage from "./images/Australia.jpg";
import canadaImage from "./images/Canada.jpg";
import georgiaImage from "./images/Georgia.jpg";
import switzerlandImage from "./images/switzerland.jpg";

function PlacesSection() {
  return (
    <section id="places">
      <h2 className="sub-heading">
        Our <span>Places</span>
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="places-row">
        <div className="place">
          <img src={australiaImage} alt="australia" />
          <h3>Australia</h3>
        </div>
        <div className="place">
          <img src={canadaImage} alt="canada" />
          <h3>Canada</h3>
        </div>
        <div className="place">
          <img src={georgiaImage} alt="georgia" />
          <h3>Georgia</h3>
        </div>
        <div className="place">
          <img src={switzerlandImage} alt="switzerland" />
          <h3>Switzerland</h3>
        </div>
      </div>
    </section>
  );
}

export default PlacesSection;
