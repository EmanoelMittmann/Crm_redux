import { ImgContainer, NavContainer, NavContainerChildren } from "./style";
import img from '../../../assets/Imgs/img1.png'
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

  const dispatch = useDispatch()
  const Modal = useSelector(state => state.Modal)

  return (
    <NavContainer>
      <NavContainerChildren>
        <ImgContainer src={img}/>
        <span className="material-symbols-outlined Payment">payments</span>
        <span className="material-symbols-outlined Notification">
          notifications
        </span>
        <span className="material-symbols-outlined Mail">mail</span>
      </NavContainerChildren>
      <div className="position_arrow">
        {!Modal && (
          <span class="material-symbols-outlined" onClick={() => dispatch({type: 'OPEN'})}>arrow_forward</span>
        )}
      </div>
    </NavContainer>
  );
};

export default Navbar;
