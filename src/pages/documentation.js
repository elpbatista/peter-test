import React from "react";
import Content from "../components/layout";
import { useTranslation, Trans } from "react-i18next";

function Documentation() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="documentation" className="flex-container">
          <h1>{t("documentation.title")}</h1>
          <p>
            <Trans i18nKey="documentation.text"></Trans>{" "}
            <a href="https://github.com/AddressForAll" rel="external">
              {t("documentation.link")}
            </a>
          </p>
        </section>
      </Content>
    </>
  );
}

export default Documentation;
