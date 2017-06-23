import { Navigation } from "react-native-navigation";

import Recipes from "./Recipes";
import Recipe from "./Recipe";

import Ingredients from "./Ingredients";
import Ingredient from "./Ingredient";

import Login from "./Login";

export default function() {
	Navigation.registerComponent("cocktails.Recipes", () => Recipes);
	Navigation.registerComponent("cocktails.Recipe", () => Recipe);

	Navigation.registerComponent("cocktails.Ingredients", () => Ingredients);
	Navigation.registerComponent("cocktails.Ingredient", () => Ingredient);

	Navigation.registerComponent("cocktails.Login", () => Login);
}
