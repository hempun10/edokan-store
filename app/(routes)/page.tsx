import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("75c73606-f10d-48eb-9d57-440b98c484f6");
  const product = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-20 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Product" items={product} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
