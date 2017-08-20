import { Navigation } from "react-native-navigation";

import Recipes from "./Recipes";
import Recipe from "./Recipe";

import Ingredients from "./Ingredients";
import Ingredient from "./Ingredient";

import Sources from "./Sources";
import Source from "./Source";

import Search from "./Search";

export default function() {
	Navigation.registerComponent("cocktails.Recipes", () => Recipes);
	Navigation.registerComponent("cocktails.Recipe", () => Recipe);

	Navigation.registerComponent("cocktails.Ingredients", () => Ingredients);
	Navigation.registerComponent("cocktails.Ingredient", () => Ingredient);

	Navigation.registerComponent("cocktails.Sources", () => Sources);
	Navigation.registerComponent("cocktails.Source", () => Source);

	Navigation.registerComponent("cocktails.Search", () => Search);
}
