import remotedev from "mobx-remotedev";
import { decorate, observable, action } from "mobx";

const baseURL = "https://parallelum.com.br/fipe/api/v1/carros";

async function fetchJSON(url) {
  const response = await fetch(baseURL + url);
  return response.json();
}

class FipeStore {
  INITIALIZE() {
    this.brand = undefined;
    this.brands = [];
    this.isLoadingBrands = true;

    this.model = undefined;
    this.models = [];
    this.isLoadingModels = false;

    this.year = undefined;
    this.years = [];
    this.isLoadingYears = false;

    this.value = undefined;
    this.isLoadingValue = false;

    fetchJSON("/marcas").then(this.FULFILL_REQUEST_BRANDS.bind(this));
  }

  FULFILL_REQUEST_BRANDS(response) {
    this.isLoadingBrands = false;
    this.brands = response;
  }

  SET_BRAND(brand) {
    this.brand = brand;
    this.model = undefined;
    this.models = [];
    this.year = undefined;
    this.years = [];
    this.value = undefined;
    this.isLoadingModels = true;
    fetchJSON(`/marcas/${brand}/modelos`).then(
      this.FULFILL_REQUEST_MODELS.bind(this)
    );
  }

  FULFILL_REQUEST_MODELS(reponse) {
    this.isLoadingModels = false;
    this.models = reponse.modelos;
  }

  SET_MODEL(model) {
    this.model = model;
    this.year = undefined;
    this.years = [];
    this.value = undefined;
    this.isLoadingYears = true;
    fetchJSON(`/marcas/${this.brand}/modelos/${model}/anos`).then(
      this.FULFILL_REQUEST_YEARS.bind(this)
    );
  }

  FULFILL_REQUEST_YEARS(response) {
    this.isLoadingYears = false;
    this.years = response;
  }

  SET_YEAR(year) {
    this.year = year;
    this.value = undefined;
    this.isLoadingValue = true;
    fetchJSON(`/marcas/${this.brand}/modelos/${this.model}/anos/${year}`).then(
      this.FULFILL_REQUEST_VALUE.bind(this)
    );
  }

  FULFILL_REQUEST_VALUE(response) {
    this.isLoadingValue = false;
    this.value = response;
  }

  constructor() {
    this.INITIALIZE();
  }
}

export default remotedev(
  decorate(FipeStore, {
    brand: observable,
    brands: observable,
    isLoadingBrands: observable,
    model: observable,
    models: observable,
    isLoadingModels: observable,
    year: observable,
    years: observable,
    isLoadingYears: observable,
    value: observable,
    isLoadingValue: observable,
    INITIALIZE: action,
    FULFILL_REQUEST_BRANDS: action,
    SET_BRAND: action,
    FULFILL_REQUEST_MODELS: action,
    SET_MODEL: action,
    FULFILL_REQUEST_YEARS: action,
    SET_YEAR: action,
    FULFILL_REQUEST_VALUE: action
  })
);
