import { Link } from "react-router-dom";

function HeroSection(props) {
  return (
    <>
              <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>{props.heroTitle}</h1>
                  <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                  <p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link><a href="#" className="btn btn-white-outline">Explore</a></p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img src="./couch.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default HeroSection;