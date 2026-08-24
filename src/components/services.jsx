import { Link } from "react-router-dom";
import Testimonial from "./testimonial";

function Services(){
let data1 = [
  {
  headingData:"Fast &amp; Free Shipping",
  paraData: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  iconData:"truck.svg"
},
{
  headingData:"Easy to Shop",
  paraData: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  iconData:"bag.svg"
},
{
  headingData:"24/7 Support",
  paraData: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  iconData:"support.svg"
},
{
  headingData:"Hassle Free Returns",
  paraData: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  iconData:"return.svg"
},
{
  headingData:"Fast &amp; Free Shipping",
  paraData: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  iconData:"truck.svg"
},
{
  headingData:"4/7 Support",
  paraData: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  iconData:"support.svg"
},
{
  headingData:"Easy to Shop",
  paraData: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  iconData:"bag.svg"
},
{
  headingData:"Easy to Shop",
  paraData: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  iconData:"bag.svg"
}
]
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
  }
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
                  <h1>Services</h1>
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


        {/* Start Why Choose Us Section */}
        <div className="why-choose-section">
          <div className="container">
            <div className="row my-5">

            {data1.map((item)=>(
                            <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                              <div className="icon">
                                <img src={`${item.iconData}`} alt="Image" className="imf-fluid" />
                              </div>
                              <h3>{item.headingData}</h3>
                              <p>{item.paraData}</p>
                            </div>
                          </div>
            ))}

            </div>
          </div>
        </div>
        {/* End Why Choose Us Section */}




        {/* Start Product Section */}
        <div className="product-section pt-0">
          <div className="container">
            <div className="row">
              {/* Start Column 1 */}
              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                <p><a href="#" className="btn">Explore</a></p>
              </div> 
              {/* End Column 1 */}

              {/* Start Column 2 */}

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
  
              {/* End Column 4 */}
            </div>
          </div>
        </div>
        {/* End Product Section */}


        {/* Start Testimonial Slider */}
        <Testimonial/>
        {/* End Testimonial Slider */}



      </div>
</>

    )
}

export default Services;