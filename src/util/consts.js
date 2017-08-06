export const NAVIGATOR_SETTINGS = {
	navBarHidden: true,
	statusBarHidden: true,
};

export const STORAGE_KEY = "COCKTAILS_LOCALSTORAGE";

export const FONT_ICON_MAP = {
	recipes: "a",
	ingredients: "b",
	sources: "c",
	search: "d",
};

export const SEARCH_SECTIONS = {
	recipe_titles_res: "recipe_titles_res",
	recipe_ingredients_res: "recipe_ingredients_res",
	ingredient_res: "ingredient_res",
};

export const SEARCH_SECTION_TITLES = {
	[SEARCH_SECTIONS.recipe_titles_res]: "Recipes",
	[SEARCH_SECTIONS.recipe_ingredients_res]: "Recipes with matching ingredients",
	[SEARCH_SECTIONS.ingredient_res]: "Ingredients",
};

export const FRACTIONS = {
	1: {
		2: "½",
		3: "⅓",
		4: "¼",
		5: "⅕",
		6: "⅙",
		7: "⅐",
		8: "⅛",
		9: "⅑",
		10: "⅒",
	},
	2: {
		3: "⅔",
		5: "⅖",
	},
	3: {
		4: "¾",
		5: "⅗",
		8: "⅜",
	},
	4: {
		5: "⅘",
	},
	5: {
		6: "⅚",
		8: "⅝",
	},
	7: {
		8: "⅞",
	},
};
