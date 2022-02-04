import type { NextPage } from "next";
import { Background } from "../components/background";
import { useEffect } from "react";
import { GlobalStyles } from "../styles/globals";
import { Header } from "../components/header";
const Home: NextPage = () => {
  useEffect(() => {
    GlobalStyles();
  }, []);

  return (
    <Background>
      
    </Background>
  );
};

export default Home;
