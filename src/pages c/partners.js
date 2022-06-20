import React from "react";
import Content from "../components/layout";
import { useTranslation } from "react-i18next";

function Partners() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="partners" className="flex-container">
          <h1>{t("partners.title")}</h1>
          <p>{t("partners.text")}</p>
        </section>
      </Content>
    </>
  );
}

export default Partners;
