function FooterSection() {
  return (
    <section className="footer">
      <hr />
      <h3>About Us</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        error a cum tempore.
      </p>

      <div className="social-icons">
        <a href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa fa-github"></i>
        </a>
      </div>

      <p className="author">
        Made With <i className="fa fa-heart"></i> By Lucas Glonti!
      </p>
    </section>
  );
}

export default FooterSection;
