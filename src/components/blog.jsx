import { Link } from "react-router-dom";
import Testimonial from "./testimonial";
import HeroSection from "./heroSection";

function Blog(){
  let blogData = [
    {
title:"First Time Home Owner Ideas",
user:"Kristin Watson",
date:"Dec 19, 2021",
image:"post-1.jpg"
},
{
title:"How To Keep Your Furniture Clean",
    user:"Robert Fox",
    date:"Dec 15, 2021",
    image:"post-2.jpg"
},
{
    title:"Small Space Furniture Apartment Ideas",
    user:"Kristin Watson",
    date:"Dec 12, 2021",
    image:"post-3.jpg"
    },
    {
      title:"First Time Home Owner Ideas",
      user:"Kristin Watson",
      date:"Dec 19, 2021",
      image:"post-1.jpg"
      },
      {
      title:"How To Keep Your Furniture Clean",
          user:"Robert Fox",
          date:"Dec 15, 2021",
          image:"post-2.jpg"
      },
      {
          title:"Small Space Furniture Apartment Ideas",
          user:"Kristin Watson",
          date:"Dec 12, 2021",
          image:"post-3.jpg"
          },

          {
            title:"First Time Home Owner Ideas",
            user:"Kristin Watson",
            date:"Dec 19, 2021",
            image:"post-1.jpg"
            },
            {
            title:"How To Keep Your Furniture Clean",
                user:"Robert Fox",
                date:"Dec 15, 2021",
                image:"post-2.jpg"
            },
            {
                title:"Small Space Furniture Apartment Ideas",
                user:"Kristin Watson",
                date:"Dec 12, 2021",
                image:"post-3.jpg"
                },
            
]


    return (
        <>
<div>
        {/* Start Hero Section */}
        <HeroSection heroTitle="Blog"/>
        {/* End Hero Section */}
        {/* Start Blog Section */}
        <div className="blog-section">
          <div className="container">
            <div className="row">
              
              {blogData.map((blog)=>(
                              <div className="col-12 col-sm-6 col-md-4 mb-5">
                              <div className="post-entry">
                                <Link to="/*" className="post-thumbnail"><img src={`${blog.image}`} alt="Image" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                  <h3><Link to="/*">{blog.title}</Link></h3>
                                  <div className="meta">
                                    <span>by <Link to="/*">{blog.user}</Link></span> <span>on <Link to="/*">{blog.date}</Link></span>
                                  </div>
                                </div>
                              </div>
                            </div>

              ))
              }

            </div>
          </div>
        </div>
        {/* End Blog Section */}	


        {/* Start Testimonial Slider */}
        <Testimonial/>
        {/* End Testimonial Slider */}


      </div>
</>

    )
}

export default Blog;