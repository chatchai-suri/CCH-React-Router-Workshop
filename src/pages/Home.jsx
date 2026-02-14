import { useParams } from "react-router-dom";
import Card from "../components/Card";
import {langs} from "../i18n/langs"

function Home() {
  const {lang} = useParams()
  const currentLang = langs[lang] || langs.en
  return (
    <Card>
      <div>

      <img
        src="https://feelman.info/html/anri/img/img1.jpg"
        alt="coffee_Late"
        className="w-full"
        />
      <p className="text-2xl font-light text-center">Cup of Late-Coffee beside the window</p>
      <p className="text-sm font-thin text-center pt-2">from Home</p>
        </div>
        <div className="text-center">
          <p>{lang}</p>
          <p>{currentLang.welcome}</p>
          <p>{currentLang.login}</p>
          <p>{currentLang.logout}</p>
        </div>
    </Card>
  );
}

export default Home;
