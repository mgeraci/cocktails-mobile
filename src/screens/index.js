import { Navigation } from "react-native-navigation";

import Recipes from "./Recipes";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";
import Login from "./Login";

export default function() {
	// tabs
	Navigation.registerComponent("cocktails.Recipes", () => Recipes);
	Navigation.registerComponent("cocktails.Ingredients", () => Ingredients);

	// subpages
	Navigation.registerComponent("cocktails.Recipe", () => Recipe);
	Navigation.registerComponent("cocktails.Login", () => Login);
}
