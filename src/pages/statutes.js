import React from "react";
import Content from "../components/layout";
import { useTranslation } from "react-i18next";

function Statutes() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="statutes" className="flex-container">
          <h1>{t("statutes.title")}</h1>
          <p>{t("statutes.text")}</p>
        </section>
      </Content>
    </>
  );
}

export default Statutes;
