import React from "react";
import Content from "../components/layout";
import { useTranslation } from "react-i18next";

function Downloads() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="downloads" className="flex-container">
          <h1>{t("downloads.title")}</h1>
          <p>{t("downloads.text")}</p>
        </section>
      </Content>
    </>
  );
}

export default Downloads;
