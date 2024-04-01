import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductDisplay from "./components/ProductDisplay";
import { setData } from "./Redux/Reducer/Product.reducer";
import { useDispatch } from "react-redux";

export default function App() {

  const dispatcher = useDispatch();
  useEffect(() => {
    fetch("http://localhost:5173/data.json")
    .then((result) => result.json())
    .then((output) => {
      dispatcher(setData(output.products))
    }
    )
    return () => {};
},)

  return (
    <section>
      <Navbar />
      <ProductDisplay />
    </section>
  );
}
