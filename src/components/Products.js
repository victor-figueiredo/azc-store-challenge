"use client";

import { useAppContext } from "@/context";
import Product from "./Product";
import FullScreenDialog from "./Dialog";
import Select from "./Select";
import Skeleton from "@mui/material/Skeleton";
import { verifyFilters } from "@/app/helpers/verifyFilters";

const Products = () => {
  const { shirts, isLoading, filtering, searching } = useAppContext();

  return (
    <div>
      <div className="container py-16">
        <div className="w-full flex flex-col sm:flex-row justify-between pb-5">
          <h2 id="products" className="font-medium text-2xl pb-4">
            Camisetas
          </h2>
          <div className="flex w-full sm:w-[70%] lg:w-[50%] gap-3 justify-end">
            <Select
              label="Preços"
              options={[
                { value: "Todos" },
                { value: "Até 50" },
                { value: "Até 100" },
                { value: "Até 150" },
                { value: "Até 200" },
              ]}
              disabled={verifyFilters({
                type: "Preços",
                filters: {
                  filtering,
                  searching,
                },
              })}
            />
            <Select
              label="Tamanhos"
              options={[
                { value: "Todos" },
                { value: "P" },
                { value: "M" },
                { value: "G" },
                { value: "GG" },
                { value: "XG" },
                { value: "XGG" },
              ]}
              disabled={verifyFilters({
                type: "Tamanhos",
                filters: {
                  filtering,
                  searching,
                },
              })}
            />
            <Select
              label="Cores"
              options={[
                { value: "Todas" },
                { value: "Vermelho" },
                { value: "Verde" },
                { value: "Azul" },
                { value: "Preto" },
                { value: "Branco" },
                { value: "Cinza" },
                { value: "Amarelo" },
                { value: "Roxo" },
                { value: "Rosa" },
                { value: "Marrom" },
              ]}
              disabled={verifyFilters({
                type: "Cores",
                filters: {
                  filtering,
                  searching,
                },
              })}
            />
          </div>
        </div>
        {isLoading ? (
          <div
            className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
     lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
          >
            <Skeleton
              className="rounded-xl"
              variant="rectangular"
              width={250}
              height={400}
            />
            <Skeleton
              className="rounded-xl"
              variant="rectangular"
              width={250}
              height={400}
            />
            <Skeleton
              className="rounded-xl"
              variant="rectangular"
              width={250}
              height={400}
            />
            <Skeleton
              className="rounded-xl"
              variant="rectangular"
              width={250}
              height={400}
            />
          </div>
        ) : (
          <div
            className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
          >
            {shirts.length === 0 ? (
              <div className="w-[full] items-center">
                Nenhuma camiseta foi encontrada.
              </div>
            ) : (
              <>
                {shirts.map((item) => (
                  <Product
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    sizes={item.sizes}
                    colors={item.colors}
                    id={item.id}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
      <FullScreenDialog />
    </div>
  );
};

export default Products;
