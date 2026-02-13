import { NavLink } from "react-router";

function Navbar() {
  const style = {
    liLink: "hover:font-medium hover:text-[#826047]"
  }
  return (
    <nav className="py-4">
      <ul className="flex gap-1 text-xs font-normal">
        <li className={style.liLink}><NavLink to="/">HOME /</NavLink></li>
        <li className={style.liLink}><NavLink to="/lifestyle">LIFESTYLE /</NavLink></li>
        <li className={style.liLink}><NavLink to="/journey">JOURNEY /</NavLink></li>
        <li className={style.liLink}><NavLink to="/inspiration">INSPIRATION /</NavLink></li>
        <li className={style.liLink}><NavLink to="/about">ABOUT /</NavLink></li>
        <li className={style.liLink}><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
