import Product from "./Product";
import { reduxForm } from "redux-form";

let Component = Product;

Component = reduxForm({
  form: "newProduct",
})(Product);

export default Component;
