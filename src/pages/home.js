import React from "react";
import Content from "../components/layout";
import RegionalMap from "../assets/img/regioes_atendidas.svg";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Content>
        <section id="advertisment">
          <p className="message">
            {t("home.advertisment.message")}{" "}
            <span className="underlined">{t("home.advertisment.remark")}</span>
          </p>
          <div className="youtube-video-container">
            <iframe
              src="https://www.youtube.com/embed/WglOrCDKjeo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section id="regionalmap">
          <p className="message">
            {t("home.regionalmap.message")}{" "}
            <span className="underlined">{t("home.regionalmap.remark")}</span>
          </p>
          <img alt="regional map" src={RegionalMap} />
        </section>
        <section id="aboutus">
          <p className="message">{t("home.aboutus.message")}</p>
          <a href="/about" className="btn btn-blue">
            {t("menu.whoweare")}
          </a>
        </section>
        <section id="downloadsbnr">
          <div className="col">
            <p className="message">{t("home.downloads.message")}</p>
            <a href="/downloads" className="btn btn-blue">
              {t("menu.downloads")}
            </a>
          </div>
        </section>
      </Content>
    </>
  );
}

export default Home;
