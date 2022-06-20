import React from "react";
import Content from "../components/layout";
import { useTranslation, Trans } from "react-i18next";

function API() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="api" className="flex-container">
          <h1>{t("api.title")}</h1>
          <p>
            <Trans i18nKey="api.text"></Trans>{" "}
            <a href="https://github.com/AddressForAll" rel="external">
              {t("api.link")}
            </a>
          </p>
        </section>
      </Content>
    </>
  );
}

export default API;
