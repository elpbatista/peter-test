import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="col">
        <div className="brand">
          <svg>
            <use xlinkHref="#logosvg"></use>
          </svg>
        </div>
      </div>
      <div className="col">
        <ul className="nav" role="menu">
          <li>
            <Link to="/about">{t("menu.whoweare")}</Link>
          </li>
          <li>
            <Link to="/statute">{t("menu.statute")}</Link>
          </li>
          <li>
            <Link to="/projects">{t("menu.projects")}</Link>
          </li>
          <li>
            <Link to="/partners">{t("menu.partners")}</Link>
          </li>
        </ul>
      </div>
      <div className="col">
        <ul className="nav" role="menu">
          <li>
            <Link to="/downloads">{t("menu.downloads")}</Link>
          </li>
          <li>
            <Link to="/services">{t("menu.ourservices")}</Link>
          </li>
          <li>
            <Link to="/api">{t("menu.api")}</Link>
          </li>
          <li>
            <Link to="/faq">{t("menu.faq")}</Link>
          </li>
        </ul>
      </div>
      <div className="col">
        <h3 id="contactus">{t("contact")}</h3>
        <address itemScope itemType="http://schema.org/Organization">
          <ul
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            <li className="hidden" itemProp="name">
              Instituto AddressForAll
            </li>
            <li itemProp="streetAddress">Av. Paulista, 171 4º andar</li>
            <li itemProp="addressLocality"> Bela Vista</li>
            <li itemProp="addressRegion"> São Paulo - SP</li>
            <li itemProp="postalCode"> 01311-904</li>
            <li itemProp="addressCountry"> Brasil</li>
          </ul>
        </address>
        <span itemProp="telephone">+55 11 4063-6401</span>
        <a href="mailto:contato@addressforall.org" itemProp="email">
          contato@addressforall.org
        </a>
      </div>
    </footer>
  );
}

export default Footer;
