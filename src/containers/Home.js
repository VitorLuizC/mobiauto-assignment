import Home from "../components/Home";
import { connect } from "../store";

function toProps({ fipeStore: fipe }) {
  return {
    brand: fipe.brand,
    brands: fipe.brands,
    isLoadingBrands: fipe.isLoadingBrands,
    model: fipe.model,
    models: fipe.models,
    isLoadingModels: fipe.isLoadingModels,
    year: fipe.year,
    years: fipe.years,
    isLoadingYears: fipe.isLoadingYears,
    value: fipe.value,
    isLoadingValue: fipe.isLoadingValue,
    setBrand: fipe.SET_BRAND.bind(fipe),
    setModel: fipe.SET_MODEL.bind(fipe),
    setYear: fipe.SET_YEAR.bind(fipe)
  };
}

export default connect(
  Home,
  toProps
);
