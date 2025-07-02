import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/Hero/Hero";
import TeamIntro from "../../components/TeamIntro/TeamIntro";
import Partners from "../../components/Partners/Partners";
import "./Home.css";

const Home = () => {
  return (
    <DefaultLayout header={true}>
      <Hero />
      <TeamIntro />
      <Partners />
    </DefaultLayout>
  );
};

export default Home;
