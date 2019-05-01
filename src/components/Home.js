import React, { useState, useEffect } from "react";
import Select from "./Select";

const baseURL = "https://parallelum.com.br/fipe/api/v1/carros";

async function fetchJSON(url) {
  const response = await fetch(baseURL + url);
  return response.json();
}

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
      const brands = await fetchJSON("/marcas");
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
      const { modelos: models } = await fetchJSON(`/marcas/${brand}/modelos`);
      setModels(models);
    })();
  }, [brand]);

  const [year, setYear] = useState(undefined);
  const [years, setYears] = useState([]);

  useEffect(() => {
    if (!model) {
      return;
    }

    (async () => {
      const years = await fetchJSON(`/marcas/${brand}/modelos/${model}/anos`);
      setYears(years);
    })();
  }, [model]);

  const [value, setValue] = useState(undefined);

  useEffect(() => {
    if (!year) {
      return;
    }

    (async () => {
      const value = await fetchJSON(
        `/marcas/${brand}/modelos/${model}/anos/${year}`
      );
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
