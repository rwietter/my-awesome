import type { NextPage } from "next";
import { useEffect } from "react";
import Background from "../components/background";
import GlobalStyles from "../styles/globals";
const Home: NextPage = () => {
  useEffect(() => {
    GlobalStyles();
  }, []);

  return (
    <Background />
  );
};

export default Home;
