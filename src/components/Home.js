import React from "react";
import Select from "./Select";
import Loading from "./Loading";

function toOption({ nome, codigo }) {
  return {
    text: nome,
    value: codigo
  };
}

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
      {isLoadingBrands ? (
        <Loading message="Carregando as marcas..." />
      ) : (
        <Select
          value={brand}
          options={brands.map(toOption)}
          onChange={setBrand}
          label="Marcas"
          placeholder="Selecione a marca"
        />
      )}

      {!brand ? (
        undefined
      ) : isLoadingModels ? (
        <Loading message="Carregando os modelos..." />
      ) : (
        <Select
          value={model}
          options={models.map(toOption)}
          onChange={setModel}
          label="Modelo"
          placeholder="Selecione o modelo"
        />
      )}

      {!model ? (
        undefined
      ) : isLoadingYears ? (
        <Loading message="Carregando os anos..." />
      ) : (
        <Select
          value={year}
          options={years.map(toOption)}
          onChange={setYear}
          label="Ano"
          placeholder="Selecione o ano"
        />
      )}

      {!year ? (
        undefined
      ) : isLoadingValue ? (
        <Loading message="Carregando o valor..." />
      ) : (
        <strong>{value.Valor}</strong>
      )}
    </main>
  );
}

export default Home;
