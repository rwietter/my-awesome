import type { NextPage } from "next";
import { useEffect } from "react";
import Background from "../components/background";
import GlobalStyles from "../styles/globals";
import Crypto from "./crypto";

const Home: NextPage = () => {
  useEffect(() => {
    GlobalStyles();
  }, []);

  return (
    <Background>
    <Crypto />
    </Background>
  );
};

export default Home;
