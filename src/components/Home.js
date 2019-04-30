import React, { useState, useEffect } from "react";
import Select from "./Select";

const baseURL = "https://parallelum.com.br/fipe/api/v1/carros";

function toOption({ nome, codigo }) {
  return {
    text: nome,
    value: codigo
  };
}

function Home() {
  const [brand, setBrand] = useState(undefined);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(baseURL + "/marcas");
      const brands = await response.json();
      setBrands(brands);
    })();
  }, []);

  const [model, setModel] = useState(undefined);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (!brand) {
      return;
    }

    (async () => {
      const response = await fetch(baseURL + "/marcas/" + brand + "/modelos");
      const models = await response.json();
      setModels(models.modelos);
    })();
  }, [brand]);

  const [year, setYear] = useState(undefined);
  const [years, setYears] = useState([]);

  useEffect(() => {
    if (!model) {
      return;
    }

    (async () => {
      const response = await fetch(
        baseURL + "/marcas/" + brand + "/modelos/" + model + "/anos"
      );
      const years = await response.json();
      setYears(years);
    })();
  }, [model]);

  const [value, setValue] = useState(undefined);

  useEffect(() => {
    if (!year) {
      return;
    }

    (async () => {
      const response = await fetch(
        baseURL + "/marcas/" + brand + "/modelos/" + model + "/anos/" + year
      );
      const value = await response.json();
      setValue(value);
    })();
  }, [year]);

  return (
    <main>
      <Select
        value={brand}
        options={brands.map(toOption)}
        onChange={setBrand}
        label="Marcas"
        placeholder="Selecione a marca"
      />

      <Select
        value={model}
        options={models.map(toOption)}
        onChange={setModel}
        label="Modelo"
        placeholder="Selecione o modelo"
      />

      <Select
        value={year}
        options={years.map(toOption)}
        onChange={setYear}
        label="Ano"
        placeholder="Selecione o ano"
      />

      <pre>{JSON.stringify(value, null, 2)}</pre>
    </main>
  );
}

export default Home;
