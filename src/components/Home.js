import React, { useState, useEffect } from "react";

const baseURL = "https://parallelum.com.br/fipe/api/v1/carros";

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
      Marca
      <select value={brand} onChange={event => setBrand(event.target.value)}>
        {brands.map(({ nome: name, codigo: id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      Modelo
      <select value={model} onChange={event => setModel(event.target.value)}>
        {models.map(({ nome: name, codigo: id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      Anos
      <select value={year} onChange={event => setYear(event.target.value)}>
        {years.map(({ nome: name, codigo: id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </main>
  );
}

export default Home;
