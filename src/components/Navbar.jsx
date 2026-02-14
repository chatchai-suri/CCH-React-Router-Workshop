import { NavLink, useLocation, useNavigate, useParams } from "react-router";

function Navbar() {
  const {lang} = useParams()
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const style = {
    liLink: "hover:font-medium hover:text-[#826047]",
    langBtn: "px-2 py-1 cursor-pointer hover:font-bold border rounded-md text-[10px]"
  }

  // function for toggle language
  const changeLanguage = (newLang) => {
    // pathname e.g. /en/lifestyle --> keep only /lifestyle
    const currentPathname =  pathname.split("/").slice(2).join("/")
    console.log(currentPathname)
    // e.g. redirect to /th/lifestyle
    navigate(`/${newLang}/${currentPathname}`)
  }
  return (
    <nav className="py-4 flex flex-col items-center gap-2">
      <div className="flex gap-2 mb-2">
        <button onClick={()=>changeLanguage("th")} className={`${style.langBtn} ${lang==="th" ? "bg-amber-200" : "bg-white"}`} >TH</button>
        <button onClick={()=>changeLanguage("en")} className={`${style.langBtn} ${lang==="en" ? "bg-amber-200" : "bg-white"}`} >EN</button>
      </div>
      <ul className="flex gap-1 text-xs font-normal">
        <li className={style.liLink}><NavLink to={`/${lang}`}>HOME /</NavLink></li>
        <li className={style.liLink}><NavLink to={`/${lang}/lifestyle`}>LIFESTYLE /</NavLink></li>
        <li className={style.liLink}><NavLink to={`/${lang}/journey`}>JOURNEY /</NavLink></li>
        <li className={style.liLink}><NavLink to={`/${lang}/inspiration`}>INSPIRATION /</NavLink></li>
        <li className={style.liLink}><NavLink to={`/${lang}/about`}>ABOUT /</NavLink></li>
        <li className={style.liLink}><NavLink to={`/${lang}/contact`}>CONTACT /</NavLink></li>
        <li className={style.liLink}><NavLink to={`/${lang}/shop`}>SHOP</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
