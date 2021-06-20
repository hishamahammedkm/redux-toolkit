import randomColor from "randomcolor";
import { useSelector,useDispatch } from "react-redux";
import { change_color } from "../Redux/color/colorSlice";

function Aside() {
  const dispatch = useDispatch()
  const color = useSelector(state => state.color.value)
  const changeColor = ()=>{
    dispatch(change_color({color:randomColor()}))

  }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;
