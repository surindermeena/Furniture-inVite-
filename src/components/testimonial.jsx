import '../App.css';
import {Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Testimonial() {
    let testimonialData = [
        {
         author:"Maria Jones",
         position:"CEO, Co-Founder, XYZ Inc.",
         photo:"person-1.png",
         blockquote:"“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
        },
        {
            author:"Maria Jones",
            position:"CEO, Co-Founder, XYZ Inc.",
            photo:"person-1.png",
            blockquote:"“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
           },
           {
            author:"Maria Jones",
            position:"CEO, Co-Founder, XYZ Inc.",
            photo:"person-1.png",
            blockquote:"“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
           },
           {
            author:"Maria Jones",
            position:"CEO, Co-Founder, XYZ Inc.",
            photo:"person-1.png",
            blockquote:"“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
           },
           {
            author:"Maria Jones",
            position:"CEO, Co-Founder, XYZ Inc.",
            photo:"person-1.png",
            blockquote:"“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
           },
           {
            author:"Maria Jones",
            position:"CEO, Co-Founder, XYZ Inc.",
            photo:"person-1.png",
            blockquote:"“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
           },
    ]

  return (
    <>
              <div className="testimonial-section mb-5">
<div className="container">
  <div className="row">
    <div className="col-lg-7 mx-auto text-center">
      <h2 className="section-title">Testimonials</h2>
    </div>
  </div>

  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="testimonial-slider-wrap text-center">
        <div className="testimonial-slider">

      <Swiper  modules={[Pagination, A11y]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
      
      {testimonialData.map((item)=>(

<SwiperSlide>
<div className="item" style={{textAlign:"center", backgroundColor:"#eff2f1"}}>
      <div className="row justify-content-center">
        <div className="col-lg-8 mx-auto">
          <div className="testimonial-block text-center">
            <blockquote className="mb-5 mt-4">
              <p>{item.blockquote}</p>
            </blockquote>
            <div className="author-info">
              <div className="author-pic" >
                <img src={`${item.photo}`} alt="Maria Jones" className="img-fluid" style={{margin:"auto"}} />
              </div>
              <h3 className="font-weight-bold">{item.photo}</h3>
              <span className="position d-block mb-5" style={{fontSize:"14px"}}>{item.position}.</span>
            </div>
          </div>
        </div>
      </div>
    </div> 
</SwiperSlide>

      ))}




    </Swiper>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default Testimonial;