import { Link } from "react-router-dom";
import HeroSection from "./heroSection";

function Cart() {
  let CartData = [
    {
        image:"product-1.png",
        title:"Product 1",
        price:49.99,
    },
    {
        image:"product-2.png",
        title:"Product 2",
        price:55.56,
    }
]

  return (
    <>
<div>
        {/* Start Hero Section */}
        <HeroSection heroTitle="Cart"/>
        {/* End Hero Section */}


        <div className="untree_co-section before-footer-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>

                    {CartData.map((item)=>(
                                            <tr>
                                            <td className="product-thumbnail">
                                              <img src={`${item.image}`} alt="Image" className="img-fluid" />
                                            </td>
                                            <td className="product-name">
                                              <h2 className="h5 text-black">{item.title}</h2>
                                            </td>
                                            <td>${item.price}</td>
                                            <td>
                                              <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: '120px'}}>
                                                <div className="input-group-prepend">
                                                  <button className="btn btn-outline-black decrease" type="button">−</button>
                                                </div>
                                                <input type="text" className="form-control text-center quantity-amount" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                <div className="input-group-append">
                                                  <button className="btn btn-outline-black increase" type="button">+</button>
                                                </div>
                                              </div>
                                            </td>
                                            <td>-</td>
                                            <td><a href="#" className="btn btn-black btn-sm">X</a></td>
                                          </tr>

                    ))}

                    </tbody>
                  </table>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12">
                    <label className="text-black h4" htmlFor="coupon">Coupon</label>
                    <p>Enter your coupon code if you have one.</p>
                  </div>
                  <div className="col-md-8 mb-3 mb-md-0">
                    <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-black">Apply Coupon</button>
                  </div>
                </div> */}
              </div>
              <div className="col-md-12 pl-5">
                <div className="row">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">$230.00</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">$230.00</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Link to="/checkout" className="btn btn-black btn-sm py-3 btn-block">Proceed To Checkout</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  );
}

export default Cart;