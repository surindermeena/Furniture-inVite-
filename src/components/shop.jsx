import { Link } from "react-router-dom";

function Shop() {
  let productsData = [
    {
      title: "Chair 1",
      price: 50.78,
      image: "product-1.png",
    },
    {
      title: "Chair 2",
      price: 50.08,
      image: "product-2.png",
    },
    {
      title: "Chair 3",
      price: 78.27,
      image: "product-3.png",
    },
    {
      title: "Chair 4",
      price: 43.43,
      image: "product-1.png",
    },
    {
      title: "Chair 5",
      price: 50.89,
      image: "product-2.png",
    },
    {
      title: "Chair 6",
      price: 50.75,
      image: "product-3.png",
    },
    {
      title: "Chair 7",
      price: 78.45,
      image: "product-1.png",
    },
    {
      title: "Chair 8",
      price: 43.98,
      image: "product-2.png",
    },
  ];

  return (
    <>
      <div>
        {/* Start Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                <h1>Shop</h1>
                  <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                  <p><a href className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
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
        {/* End Hero Section */}





        <div className="untree_co-section product-section before-footer-section">
          <div className="container">
            <div className="row">
              
              {/* products */}

              {productsData.map((product) => (
                <div className="col-12 col-md-4 col-lg-3 mb-5">
                  <Link className="product-item" to="/*">
                    <img
                      src={`${product.image}`}
                      className="img-fluid product-thumbnail"
                    />
                    <h3 className="product-title">{product.title}</h3>
                    <strong className="product-price">{product.price}</strong>
                    <span className="icon-cross">
                      <img src="./cross.svg" className="img-fluid" />
                    </span>
                  </Link>
                </div>
              ))}

              {/* products*/}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
