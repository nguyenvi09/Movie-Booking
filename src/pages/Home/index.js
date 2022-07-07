import React from "react";
import Carousel from "../../components/Layout/Carousel/Carousel";
import Header from "../../components/Layout/Header/Header";
import ListMovie from "./_components/ListMovie";

function Home(props) {
  return (
    <>
      <Header />
      <Carousel />
      <ListMovie />
    </>
  );
}

export default Home;
