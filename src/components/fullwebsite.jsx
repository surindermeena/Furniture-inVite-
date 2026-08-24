import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import Blog from "./blog";
import Cart from "./cart";
import Checkout from "./checkout";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import Services from "./services";
import Shop from "./shop";
import Thankyou from "./thankyou";
import Home from "./home";
import Error404 from "./Error404";
import Login from "./login";
import Signup from "./signup";

function FullWebsite(){
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/thankyou" element={<Thankyou/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            



        
            <Route path="/*" element={<Error404/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>  

        </>
    )
}

export default FullWebsite;