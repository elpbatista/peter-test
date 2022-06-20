import React from "react";
import Content from "../components/layout";
import { useTranslation, Trans } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="services" className="flex-container">
          <h1>{t("services.title")}</h1>
          <h2>{t("services.service01.title")}</h2>
          <Trans i18nKey="services.service01.text"></Trans>
          <h2>{t("services.service02.title")}</h2>
          <Trans i18nKey="services.service02.text"></Trans>
        </section>
      </Content>
    </>
  );
}

export default Services;
