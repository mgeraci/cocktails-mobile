import { Navigation } from "react-native-navigation";

import Recipes from "./Recipes";
import Recipe from "./Recipe";
import Login from "./Login";

export default function() {
	// tabs
	Navigation.registerComponent("cocktails.Recipes", () => Recipes);

	// subpages
	Navigation.registerComponent("cocktails.Recipe", () => Recipe);
	Navigation.registerComponent("cocktails.Login", () => Login);
}
