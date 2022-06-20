import React from "react";
import Content from "../components/layout";
import { useTranslation } from "react-i18next";

function Visualization() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="visualization" className="flex-container">
          <h1>{t("visualization.title")}</h1>
          <p>{t("visualization.text")}</p>
        </section>
      </Content>
    </>
  );
}

export default Visualization;
