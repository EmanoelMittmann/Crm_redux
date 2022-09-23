import { ImgContainer, NavContainer, NavContainerChildren } from "./style";
import img from '../../../assets/Imgs/img1.png'

const Navbar = ({ setIsOpen, isOpen }) => {
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
        {!isOpen && (
          <span class="material-symbols-outlined" onClick={() => setIsOpen(true)}>arrow_forward</span>
        )}
      </div>
    </NavContainer>
  );
};

export default Navbar;
