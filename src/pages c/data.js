import React from "react";
import Content from "../components/layout";
import { useTranslation, Trans } from "react-i18next";

function Data() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="data" className="flex-container">
          <h1>{t("data.title")}</h1>
          <p>
            <Trans i18nKey="data.text"></Trans>
          </p>
          <p>{t("data.phases.text")}</p>
          <ul className="flex-list">
            <li>
              <h3>{t("data.phases.phase01.title")}</h3>
              <Trans i18nKey="data.phases.phase01.text"></Trans>
            </li>
            <li>
              <h3>{t("data.phases.phase02.title")}</h3>
              <Trans i18nKey="data.phases.phase02.text"></Trans>
            </li>
            <li>
              <h3>{t("data.phases.phase03.title")}</h3>
              <Trans i18nKey="data.phases.phase03.text"></Trans>
            </li>
          </ul>
        </section>
      </Content>
    </>
  );
}

export default Data;
