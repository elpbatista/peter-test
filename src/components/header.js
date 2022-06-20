// import React from "react";
import { useState, React } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const currentLocale = Cookies.get("i18next") || "pt";

function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(currentLocale);
  const handleChangeLocale = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <header>
      <div className="brand">
        <a href="/">
          <svg>
            <use xlinkHref="#logosvg"></use>
          </svg>
        </a>
      </div>

      <nav>
        <ul className="nav">
          <li className="dropdown">
            <span className="dropdown-toggle" href="!#" role="button">
              {t("menu.whoweare")}
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/about">{t("menu.whoweare")}</Link>
              </li>
              <li>
                <Link to="/statutes">{t("menu.statute")}</Link>
              </li>
              <li>
                <Link to="/projects">{t("menu.projects")}</Link>
              </li>
              <li>
                <Link to="/partners">{t("menu.partners")}</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle" href="!#" role="button">
              {t("menu.data")}
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/data">{t("menu.data")}</Link>
              </li>
              <li>
                <Link to="/documentation">{t("menu.documentation")}</Link>
              </li>
              <li>
                <Link to="/visualization">{t("menu.visualization")}</Link>
              </li>
              <li>
                <Link to="/downloads">{t("menu.downloads")}</Link>
              </li>
              <li>
                <Link to="/api">{t("menu.api")}</Link>
              </li>
              <li>
                <Link to="/faq">{t("menu.faq")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/services">{t("menu.ourservices")}</Link>
          </li>
          <li>
            <Link to="/contribute">{t("menu.contribute")}</Link>
          </li>
          <li>
            <a href="https://medium.com/@presidencia_82067" rel="external">
              {t("menu.blog")}
            </a>
          </li>
        </ul>
      </nav>
      <div className="icons-menu">
        <ul className="nav">
          <li>
            <a href="https://github.com/AddressForAll">
              <svg>
                <use xlinkHref="#git"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://dadosabertos.social/c/dados-espaciais/12">
              <svg>
                <use xlinkHref="#dadosAbertos"></use>
              </svg>
            </a>
          </li>
        </ul>
        <form className="switcher">
          <select onChange={handleChangeLocale} value={language}>
            <option key="pt" value="pt" defaultValue>
              BR
            </option>
            <option key="es" value="es">
              ES
            </option>
            <option key="en" value="en">
              EN
            </option>
            <option key="fr" value="fr">
              FR
            </option>
          </select>
        </form>
      </div>
    </header>
  );
}

export default Header;
