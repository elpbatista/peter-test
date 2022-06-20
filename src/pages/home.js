import React from "react";
import Test from "../components/test";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Test />
      <h2>{t("title")}</h2>
    </>
  );
}

export default Home;
