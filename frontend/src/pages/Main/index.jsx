import React from "react";
import Announcement from "../../components/Home/annoucement";
import Navbar from "../../components/Home/navbar";
import Categories from "../../components/Home/categories";
import Slider from "../../components/Home/slider";
import Newsletter from "../../components/Home/newsletter";
import Footer from "../../components/Home/footer";

const Home = () => {
  return (
    <div>
      <Announcement /> 
      <Navbar />
       
      <Slider /> 
      <Newsletter />
      <Footer /> 
    </div>
  );
};

export default Home;
