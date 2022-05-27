export const ETHAN_LUGIA = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.21.0/ssethanbg.png",

	"trainer" : {
		"name" : "Sygna Suit Ethan",
		"images" : {
			"base" : "./v/v2.21.0/ssethan.png",
			"ex" : "./v/v2.21.0/ssethanex.png"
		},
	},

	"rarity" : 6,
	"role" : "Special Strike",

	"pokemonType" : "Flying",
	"pokemonWeakness" : "Ghost",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Lugia",
			"formName" : "",
			"stats" : {
				"hp" : 721,
				"atk" : 224,
				"def" : 136,
				"spa" : 398,
				"spd" : 136,
				"spe" : 336
			},
			"image" : "./v/v2.21.0/249.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Extend Range",
				"description" : "When a move used by the user’s Pokémon that targets itself or an ally is successful, the target becomes all allied sync pairs. When a move used by the user’s Pokémon that targets an opponent is successful, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves affected by this passive skill are not lowered even if there are multiple targets."
			},
			{
				"name" : "MP Regain 9",
				"description" : "Restores one MP for the user when its Pokémon uses a move. Restores one MP for the user after using its sync move."
			},
			{
				"name" : "Brainpower",
				"description" : "The more the user’s Sp. Atk is raised, the more it powers up the user’s sync move."
			}
		],
		"passives2" : [],
		"passivesMaster" : [
			{
				"name" : "Johto Spirit",
				"description" : "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Johto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],

		"themes" : [
			{
				"name" : "Flying",
				"description" : ""
			},
			{
				"name" : "Johto",
				"description" : ""
			},
			{
				"name" : "Main Character",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Scarf",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Aeroblast",
				"type" : "Flying",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Special",
				"power" : "135",
				"accuracy" : "95",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Critical hits land more easily."
			},
			{
				"user" : "Trainer",
				"name" : "X Sp. Atk",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Raises the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user" : "Pokemon",
				"name" : "Whirlpool",
				"type" : "Water",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "38",
				"accuracy" : "85",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Leaves the target trapped."
			},
			{
				"user" : "Trainer",
				"name" : "This Is It!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 1,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Has a chance (50%) of reducing the user’s sync move countdown by one. Raises the user’s accuracy by 1 stat rank. Applies the Critical Hit Next effect to the user. Increases the user’s Special Moves ↑ Next effect by 3 ranks."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Shining Soul Aeroblast",
				"type" : "Flying",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "250",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "No additional effect."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const LYRA_CELEBI = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.21.0/sslyrabg.png",

	"trainer" : {
		"name" : "Sygna Suit Lyra",
		"images" : {
			"base" : "./v/v2.21.0/sslyra.png",
			"ex" : "./v/v2.21.0/sslyraex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Grass",
	"pokemonWeakness" : "Bug",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Celebi",
			"formName" : "",
			"stats" : {
				"hp" : 636,
				"atk" : 332,
				"def" : 190,
				"spa" : 420,
				"spd" : 190,
				"spe" : 336
			},
			"image" : "./v/v2.21.0/251.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Hassling Hit 9",
				"description" : "Leaves the target flinching, confused, and trapped when the user’s attack move against it is successful."
			},
			{
				"name" : "Ruthless 9",
				"description" : "Lowers one of the target’s following stats by two stat ranks at random when the user’s attack move is successful against a flinching, confused, or trapped opponent: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"name" : "Turbo Turf 2",
				"description" : "Quickly charges the move gauge when the terrain is Grassy Terrain."
			}
		],
		"passives2" : [],
		"passivesMaster" : [
			{
				"name" : "Johto Pride",
				"description" : "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Johto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],

		"themes" : [
			{
				"name" : "Grass",
				"description" : ""
			},
			{
				"name" : "Johto",
				"description" : ""
			},
			{
				"name" : "Main Character",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Pigtails",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Grassy Glide",
				"type" : "Grass",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Physical",
				"power" : "100",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Will not consume the move gauge when the terrain is Grassy Terrain."
			},
			{
				"user" : "Trainer",
				"name" : "Dire Hit All +",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "All allies",
				"effect" : "-",
				"description" : "Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			},
			{
				"user" : "Pokemon",
				"name" : "Grassy Terrain",
				"type" : "Grass",
				"gauge" : 2,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Entire field",
				"effect" : "-",
				"description" : "Turns the field of play’s terrain into Grassy Terrain."
			},
			{
				"user" : "Trainer",
				"name" : "Voice of the Forest!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "An ally",
				"effect" : "-",
				"description" : "Raises an ally’s Attack and Sp. Atk by 2 stat ranks. Applies the Gradual Healing effect to an ally."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Time-Transcending Magical Leaf",
				"type" : "Grass",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "This attack’s power increases when the terrain is Grassy Terrain."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const KRIS_SUICUNE = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.21.0/sskrisbg.png",

	"trainer" : {
		"name" : "Sygna Suit Kris",
		"images" : {
			"base" : "./v/v2.21.0/sskris.png",
			"ex" : "./v/v2.21.0/sskrisex.png"
		},
	},

	"rarity" : 6,
	"role" : "Support",

	"pokemonType" : "Water",
	"pokemonWeakness" : "Grass",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Suicune",
			"formName" : "",
			"stats" : {
				"hp" : 705,
				"atk" : 158,
				"def" : 248,
				"spa" : 224,
				"spd" : 273,
				"spe" : 294
			},
			"image" : "./v/v2.21.0/245.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Sync Burst 1",
				"description" : "Restores 1 MP for the user the first time its sync move is used each battle."
			},
			{
				"name" : "Team Mind-Bracing Infliction 4",
				"description" : "Raises the Sp. Def of all allied sync pairs by 4 stat ranks the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name" : "Passive 4: First Aid 4",
				"description" : "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
		],
		"passives2" : [],
		"passivesMaster" : [
			{
				"name" : "Johto Flag Bearer",
				"description" : "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Johto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],

		"themes" : [
			{
				"name" : "Water",
				"description" : ""
			},
			{
				"name" : "Johto",
				"description" : ""
			},
			{
				"name" : "Main Character",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Knowledgeable",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Brine",
				"type" : "Water",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "38",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "This attack’s power is doubled when the target’s remaining HP is at half or below."
			},
			{
				"user" : "Trainer",
				"name" : "Mini Potion All",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "All allies",
				"effect" : "Heals",
				"description" : "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP."
			},
			{
				"user" : "Pokemon",
				"name" : "Rain Dance",
				"type" : "Water",
				"gauge" : 2,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Entire field",
				"effect" : "-",
				"description" : "Makes the weather rainy."
			},
			{
				"user" : "Trainer",
				"name" : "Spring of Knowledge!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "All allies",
				"effect" : "-",
				"description" : "Raises the Sp. Atk of all allied sync pairs by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 1 stat rank. In addition, raises the Special Moves ↑ Next effect of all allied sync pairs by 1 rank when the weather is rainy."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Crystal Clear Surf",
				"type" : "Water",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "250",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "No additional effect."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const BEDE_HATTERENE = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.21.0/bedebg.png",

	"trainer" : {
		"name" : "Bede",
		"images" : {
			"base" : "./v/v2.21.0/bede.png",
			"ex" : "./v/v2.21.0/bedeex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Fairy",
	"pokemonWeakness" : "Poison",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Hatterene",
			"formName" : "",
			"stats" : {
				"hp" : 633,
				"atk" : 224,
				"def" : 186,
				"spa" : 336,
				"spd" : 186,
				"spe" : 280
			},
			"image" : "./v/v2.21.0/858.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Baffle Buff 9",
				"description" : "Powers up the user’s moves when the target is confused. Powers up the user’s sync move when the target is confused."
			},
			{
				"name" : "Stupefication 9",
				"description" : "Lowers the target’s Sp. Atk and Sp. Def by 1 stat rank when a move, sync move, or max move used by the user’s Pokémon targeting that opponent is successful."
			},
			{
				"name" : "Maximum Super Powered 5",
				"description" : "Powers up the user’s moves that are super effective. Powers up the user’s sync move that is super effective. Powers up the user’s max moves that are super effective."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Fairy",
				"description" : ""
			},
			{
				"name" : "Galar",
				"description" : ""
			},
			{
				"name" : "Rival",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Dazzling Gleam",
				"type" : "Fairy",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "50",
				"accuracy" : "100",
				"target" : "All opponents",
				"effect" : "-",
				"description" : "No additional effect."
			},
			{
				"user" : "Pokemon",
				"name" : "Mystical Fire",
				"type" : "Fire",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "30",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Lowers the target’s Sp. Atk. by 1 stat rank."
			},
			{
				"user" : "Pokemon",
				"name" : "Psybeam",
				"type" : "Psychic",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "48",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Has a chance (10%) of leaving the target confused."
			},
			{
				"user" : "Trainer",
				"name" : "Back to You!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Allied side",
				"effect" : "-",
				"description" : "Applies the Status Condition Reflection effect to the allied field of play. Raises the user’s Sp. Atk and critical-hit rate by 2 stat ranks. Lowers the user’s Defense by 1 stat rank."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Most Elite Fairy Beam",
				"type" : "Fairy",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "This attack’s power increases when the target is confused."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : [
			{
				"user" : "Pokemon",
				"name" : "G-Max Smite",
				"type" : "Fairy",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "400",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Leaves all opposing sync pairs confused."
			},
			{
				"user" : "Pokemon",
				"name" : "Max Flare",
				"type" : "Fire",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "400",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Makes the weather sunny."
			},
			{
				"user" : "Pokemon",
				"name" : "Max Mindstorm",
				"type" : "Psychic",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "400",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Turns the field of play’s terrain into Psychic Terrain."
			},
			{
				"user" : "",
				"name" : "",
				"type" : "",
				"gauge" : 0,
				"uses" : 0,
				"category" : "",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : ""
			}
		]
	}
}