import { Navigation } from "react-native-navigation";

import Recipes from "./Recipes";
import Recipe from "./Recipe";

export default function() {
	// tabs
	Navigation.registerComponent("cocktails.Recipes", () => Recipes);

	// subpages
	Navigation.registerComponent("cocktails.Recipe", () => Recipe);
}
