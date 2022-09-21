import { ImgContainer, NavContainer, NavContainerChildren } from "./style";

const Navbar = ({ setIsOpen, isOpen }) => {
  return (
    <NavContainer>
      <NavContainerChildren>
        <ImgContainer />
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
