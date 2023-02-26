import item1 from "./images/box-item-1.jpg";
import item2 from "./images/box-item-2.jpg";
import item3 from "./images/box-item-3.jpg";
import item4 from "./images/box-item-4.jpg";

function ProvideSection() {
  return (
    <section className="provide">
      <h2 className="sub-heading">
        We <span>Provide</span>
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

      <div className="provide-row">
        <div className="item">
          <img src={item1} alt="item" />
          <div className="layer">
            <h3>Algorithms</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magni quos provident perferendis, sed soluta!
            </p>
          </div>
        </div>
        <div className="item">
          <img src={item2} alt="item" />
          <div className="layer">
            <h3>Network</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magni quos provident perferendis, sed soluta!
            </p>
          </div>
        </div>
        <div className="item">
          <img src={item3} alt="item" />
          <div className="layer">
            <h3>Healthcare</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magni quos provident perferendis, sed soluta!
            </p>
          </div>
        </div>
        <div className="item">
          <img src={item4} alt="item" />
          <div className="layer">
            <h3>Gadgets</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magni quos provident perferendis, sed soluta!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProvideSection;
