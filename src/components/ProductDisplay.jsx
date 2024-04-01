import { ProductsCard } from "./Products";
import { CartPage } from "./CartPage";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../Redux/Reducer/Cart.reducer";

export default function ProductDisplay() {

  const { Product = {},Cart = {}  } = useSelector((state) => state);
  const {data = []} = Product;
  const {item = [], price = 0, quantity = 0} = Cart;
  const cartDispatcher = useDispatch();

  function CountChange(data, setIsCarts) {
    cartDispatcher(setItem({item : data,price : data.price + price, quantity: quantity + 1 }))
    setIsCarts(true);
}

  return (
    <div className="container mt-5">
        <div className="row">
          <div className="col-8">
          {
            data.map((datas, index) => 
            <ProductsCard key={index} datas={datas} CountChange={CountChange} />
            )
          }
          </div>
          <div className="col-4">
            <div className="CartPage">
              <div className="Cart-value"><b>CART</b></div>
                <div className="Cart-item"> 
          {
            item.length > 0 ?
            item.map((result, index) => 
            <CartPage key={index} result={result}/>
            ): <b>Cart is  Empty</b>
          }
                </div>
          <div className="Total-amnt">
            <div className="row">
              <div className="col-6">
              <div style={{marginBottom: 5}}>Total Quantity:</div>
              </div>
              <div className="col-6">
              <div style={{marginBottom: 5}}><h6>{quantity}</h6></div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
              <div style={{marginBottom: 5}}>Total Amount:</div>
              </div>
              <div className="col-6">
              <div style={{marginBottom: 5}}><h6>{price} Rs</h6></div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
    </div>
  );
}