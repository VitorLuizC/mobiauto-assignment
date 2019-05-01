import React from "react";
import Select from "./Select";

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
    <main>
      {isLoadingBrands ? (
        "Carregando as marcas..."
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
        "Carregando os modelos..."
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
        "Carregando os anos..."
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
        "Carregando o valor..."
      ) : (
        <pre>{JSON.stringify(value, null, 2)}</pre>
      )}
    </main>
  );
}

export default Home;
