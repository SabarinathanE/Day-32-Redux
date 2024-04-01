import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../Redux/Reducer/Cart.reducer";


export function CartPage({result = []}) {

  const [counts, setCounts] = useState(1);
  const CountDispatcher = useDispatch();
  const {quantity} = useSelector((state) => state.Cart)

function ClockCountChange(type) {

  CountDispatcher(setCount({ type: type,price : result.price, quantity: quantity, counts: counts}));
  if (type == "inc"){
    setCounts(counts + 1)
  } else if (counts > 0) {
    setCounts(counts - 1)
  }
}

    return (
      <div className="row mb-2 Cart-line">
        <div className="col-6">
          {result.title}: 
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <button onClick={() => {ClockCountChange("dec")}}>-</button>
            </div>
            <div className="col-3">
              <h3>{counts}</h3>
            </div>
            <div className="col-3">
              <button onClick={() => {ClockCountChange("inc")}}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
}