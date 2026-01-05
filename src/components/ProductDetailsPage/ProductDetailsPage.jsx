'use client'

import React, { useState } from "react";
import ProductsSlider from "../ProductsSlider/ProductsSlider";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params?.id;
  const [categoryId, setCategoryId] = useState(null);
  return (
    <>
      <ProductDetails setCategoryId={setCategoryId} productId={id} />
      <ProductsSlider
        categoryId={categoryId}
        title={"Other products you may like"}
      />
    </>
  );
}
