import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src="/logos.svg" alt="" className="logo" />
        <div className="socials">
          <img src="/dribbble.png" alt="" />
          <img src="facebook.png" alt="" />
          <img src="instagram.png" alt="" />
          <img src="youtube.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
