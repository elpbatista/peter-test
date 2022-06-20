import React from "react";
import Content from "../components/layout";
import { useTranslation, Trans } from "react-i18next";

function Contribute() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="contribute" className="flex-container">
          <h1>{t("contribute.title")}</h1>
          <Trans i18nKey="contribute.text"></Trans>
          <h2>{t("contribute.subtitle")}</h2>
          <Trans i18nKey="contribute.subtext"></Trans>
        </section>
      </Content>
    </>
  );
}

export default Contribute;
