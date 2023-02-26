import iconImage from "./images/icon.png";
import logoImage from "./images/logo.png";

function HeaderSection() {
  function ChangeBackground() {
    document.body.classList.toggle("dark-body");
  }

  return (
    <header id="header">
      <ul className="sidebar">
        <li>
          <img src={iconImage} alt="sidebar image" className="sidebar-img" />
        </li>
        <li>
          <a href="#header" title="Home">
            <i className="fa fa-home"></i>
          </a>
        </li>
        <li>
          <a href="#offers" title="Offers">
            <i className="fa fa-sitemap"></i>
          </a>
        </li>
        <li>
          <a href="#places" title="Places">
            <i className="fa fa-building-o"></i>
          </a>
        </li>
        <li>
          <a href="#testimonials" title="Testimonials">
            <i className="fa fa-user"></i>
          </a>
        </li>
        <li>
          <a href="#contact" title="Contact">
            <i className="fa fa-phone"></i>
          </a>
        </li>
        <li>
          <i
            className="fa fa-adjust"
            onClick={ChangeBackground}
            title="Adjust"
          ></i>
        </li>
      </ul>

      <img src={logoImage} alt="logo" className="logo" />

      <div className="content">
        <h1 className="title">
          New <span>Technologies</span> Are Here!
        </h1>
        <p className="sub-title">
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <br /> elit quas fuga eaque alias unde est incidunt explicabo
          reiciendis officiis minus!
        </p>
        <a href="#offers" className="btn">
          Read More!
        </a>
      </div>
    </header>
  );
}

export default HeaderSection;
