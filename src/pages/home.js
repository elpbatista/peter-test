import React from "react";
import Test from "../components/test";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Test />
      <h2>{t("Welcome to React")}</h2>
    </>
  );
}

export default Home;
