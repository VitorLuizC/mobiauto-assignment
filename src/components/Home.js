import React from "react";
import FipeFilter from "./Fipe/FipeFilter";
import FipeValue from "./Fipe/FipeValue";

function Home({
  brand,
  brands,
  setBrand,
  isLoadingBrands,
  model,
  models,
  setModel,
  isLoadingModels,
  year,
  years,
  setYear,
  isLoadingYears,
  value,
  isLoadingValue
}) {
  return (
    <main className="">
      <FipeFilter
        value={brand}
        options={brands}
        onChange={setBrand}
        label="Marcas"
        placeholder="Selecione a marca"
        loadingMessage="Carregando as marcas..."
        isLoading={isLoadingBrands}
      />
      <FipeFilter
        isLoading={isLoadingModels}
        isVisible={!!brand}
        value={model}
        options={models}
        onChange={setModel}
        label="Modelo"
        placeholder="Selecione o modelo"
        loadingMessage="Carregando as modelos..."
      />
      <FipeFilter
        isLoading={isLoadingYears}
        isVisible={!!model}
        value={year}
        options={years}
        onChange={setYear}
        label="Ano"
        placeholder="Selecione o ano"
        loadingMessage="Carregando os anos..."
      />
      <FipeValue
        isLoading={isLoadingValue}
        isVisible={!!year}
        value={value && value.Valor}
        loadingMessage=""
      />
    </main>
  );
}

export default Home;
