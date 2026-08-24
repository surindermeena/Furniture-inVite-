import { Link } from "react-router-dom";
import Testimonial from "./testimonial";
import HeroSection from "./heroSection";

function About() {
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
  }
  ]

  let personData = [{
    name:"Lawson Arnold",
    position:"CEO, Founder, Atty.",
    paraData:"Separated they live in.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    extraData:"Lean More",
    image:"person_1.jpg",

},
{
    name:"Jeremy Walker",
    position:"CEO, Founder, Atty.",
    paraData:"Separated they live in.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    extraData:"Lean More",
    image:"person_2.jpg",

},
{
    name:"Patrik White",
    position:"CEO, Founder, Atty.",
    paraData:"Separated they live in.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    extraData:"Lean More",
    image:"person_3.jpg",

},
{
    name:"Kathryn Ryan",
    position:"CEO, Founder, Atty.",
    paraData:"Separated they live in.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    extraData:"Lean More",
    image:"person_4.jpg",

},

]

    return (
        <>
      <div>
        {/* Start Hero Section */}
        <HeroSection heroTitle="About Us"/>
        {/* End Hero Section */}
        
        {/* Start Why Choose Us Section */}
        <div className="why-choose-section">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <h2 className="section-title">Why Choose Us</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                
                <div className="row my-5">

                {data1.map((item)=>(
                                    <div className="col-6 col-md-6">
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
              <div className="col-lg-5">
                <div className="img-wrap">
                  <img src="./why-choose-us-img.jpg" alt="Image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Why Choose Us Section */}
        {/* Start Team Section */}
        <div className="untree_co-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-5 mx-auto text-center">
                <h2 className="section-title">Our Team</h2>
              </div>
            </div>
            <div className="row">

              {/* Start Column 4 */}
              {personData.map((item)=>(
                
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src={`./${item.image}`} className="img-fluid mb-5" />
              <h3 clas><Link to="/*" style={{textDecoration:"none"}}>{item.name}</Link></h3>
              <span className="d-block position mb-4">{item.position}</span>
              <p>{item.paraData}</p>
              <p className="mb-0"><a href="#" className="more dark">{item.extraData}<span className="icon-arrow_forward" /></a></p>
            </div> 

              ))}

              {/* End Column 4 */}

            </div>
          </div>
        </div>
        {/* End Team Section */}


        {/* Start Testimonial Slider */}
        <Testimonial/>
        {/* End Testimonial Slider */}


      </div>
        </>

    )
}

export default About;