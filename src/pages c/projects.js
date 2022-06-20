import React from "react";
import Content from "../components/layout";
import { useTranslation, Trans} from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <Content>
        <section id="projects" className="flex-container">
          <h1>{t("projects.title")}</h1>
          <p>{t("projects.text")}</p>
          <h2>{t("projects.project01.title")}</h2>
          <p>
            <Trans i18nKey="projects.project01.text"></Trans>
          </p>
          <h2>{t("projects.project02.title")}</h2>
          <p>{t("projects.project02.text")}</p>
          <h2>{t("projects.project03.title")}</h2>
          <p>{t("projects.project03.text")}</p>
          <h2>{t("projects.project04.title")}</h2>
          <p>{t("projects.project04.text")}</p>
          <h2>{t("projects.project05.title")}</h2>
          <p>{t("projects.project05.text")}</p>
          <h2>{t("projects.project06.title")}</h2>
          <p>{t("projects.project06.text")}</p>
        </section>
      </Content>
    </>
  );
}

export default Projects;
