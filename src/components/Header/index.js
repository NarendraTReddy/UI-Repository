import "./header.css";

export default Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-content">Ten Pin Bowling</div>
      <div className="user">
        <span className="welcoome-user">welcome User </span>
        <img className="img" src={menu} alt={"menu"} />
      </div>
    </div>
  );
};
