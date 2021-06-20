import { useDispatch, useSelector } from "react-redux";
import { add,minus } from "../Redux/count/coutSlice";

function Counter() {
  const count = useSelector(state => state.countState.number)
  const dispatch = useDispatch()
  const increase =()=>{
    dispatch(add())
  }
  const decrease =()=>{
    dispatch(minus())
  }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is  {count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
