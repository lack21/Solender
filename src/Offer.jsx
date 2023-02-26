function OfferSection() {
  function ToggleOffers(e) {
    document
      .querySelectorAll(".hidden-offer")
      .forEach(
        (item) =>
          (item.style.display =
            item.style.display == "block" ? "none" : "block")
      );
    e.target.innerHTML =
      e.target.innerHTML == "Show More!" ? "Show Less!" : "Show More!";
  }

  return (
    <section id="offers">
      <h2 className="sub-heading">
        Our <span>Offers</span>
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="offers-row">
        <div className="offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
        <div className="offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
        <div className="offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
        <div className="offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
        <div className="offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
        <div className="offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
        <div className="offer hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
        <div className="offer hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
        <div className="offer hidden-offer">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid accusamus suscipit eum libero iure laborum aliquam
            architecto necessitatibus magnam.
          </p>
        </div>
      </div>

      <button className="btn" onClick={ToggleOffers}>
        Show More!
      </button>
    </section>
  );
}

export default OfferSection;
