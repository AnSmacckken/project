import React from "react";
import Head from "next/head";
import MainSlider from "../MainSlider/MainSlider";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import Products from "./../Products/Products";
import ProductsSlider from "../ProductsSlider/ProductsSlider";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FreshCart-Home</title>
        <meta name="keywords" content="FreshCart-App-Ecommerce" />
      </Head>
      <MainSlider />
      {/* <ProductsSlider
        categoryId={"6439d58a0049ad0b52b9003f"}
        title={"products for women's"}
      />
      <ProductsSlider
        categoryId={"6439d5b90049ad0b52b90048"}
        title={"products for men's"}
      /> */}
      <CategoriesSlider />
      <Products />
    </>
  );
}
