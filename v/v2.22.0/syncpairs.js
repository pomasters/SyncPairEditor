export const N_ZOROARK = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.22.0/n2022bg.png",

	"trainer" : {
		"name" : "N (Summer 2022)",
		"images" : {
			"base" : "./v/v2.22.0/n2022.png",
			"ex" : "./v/v2.22.0/n2022ex.png"
		},
	},

	"rarity" : 6,
	"role" : "Special Strike",

	"pokemonType" : "Dark",
	"pokemonWeakness" : "Fighting",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Zoroark",
			"formName" : "",
			"stats" : {
				"hp" : 581,
				"atk" : 375,
				"def" : 137,
				"spa" : 448,
				"spd" : 137,
				"spe" : 358
			},
			"image" : "./v/v2.22.0/571.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Healthy Superhit",
				"description" : "Applies the Supereffective ↑ Next effect to the user if its HP is full when it enters a battle."
			},
			{
				"name" : "Super Sync 9",
				"description" : "Applies the Super Effective ↑ Next to the user after using its sync move."
			},
			{
				"name" : "Sync Freebie",
				"description" : "Applies the Free Move Next effect to the user after using its sync move."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Dark",
				"description" : ""
			},
			{
				"name" : "Unova",
				"description" : ""
			},
			{
				"name" : "Seasonal Outfit",
				"description" : ""
			},
			{
				"name" : "Supernatural",
				"description" : ""
			},
			{
				"name" : "Unova Adventurer",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Pokemon",
				"name": "Night Daze",
				"type": "Dark",
				"gauge": 4,
				"uses": 0,
				"category": "Special",
				"power": "166",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (40%) of lowering the target's accuracy by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Dire Hit +",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Snarl",
				"type": "Dark",
				"gauge": 2,
				"uses": 0,
				"category": "Special",
				"power": "39",
				"accuracy": "95",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Sp. Atk. by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Vivid Illusion!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 1,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user's Sp. Atk by 6 stat ranks. Raises the user's evasiveness by 2 stat ranks."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Defender of Dreams Dark Beam",
				"type" : "Dark",
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

export const HILDA_GRAPPLOCT = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.22.0/hilda2022bg.png",

	"trainer" : {
		"name" : "Hilda (Summer 2022)",
		"images" : {
			"base" : "./v/v2.22.0/hilda2022.png",
			"ex" : "./v/v2.22.0/hilda2022ex.png"
		},
	},

	"rarity" : 6,
	"role" : "Support",

	"pokemonType" : "Fighting",
	"pokemonWeakness" : "Psychic",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Grapploct",
			"formName" : "",
			"stats" : {
				"hp" : 648,
				"atk" : 244,
				"def" : 289,
				"spa" : 156,
				"spd" : 270,
				"spe" : 223
			},
			"image" : "./v/v2.22.0/853.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Team Beef Up 9",
				"description" : "Raises the Attack of all allied sync pairs by 1 stat rank when the user is hit by an attack move."
			},
			{
				"name" : "Natural Remedy",
				"description" : "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
			},
			{
				"name" : "Catalytic Infliction",
				"description" : "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user’s Pokémon uses a status move each battle."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Fighting",
				"description" : ""
			},
			{
				"name" : "Unova",
				"description" : ""
			},
			{
				"name" : "Seasonal Outfit",
				"description" : ""
			},
			{
				"name" : "Passionate Spirit",
				"description" : ""
			},
			{
				"name" : "Unova Adventurer",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Pokemon",
				"name": "Brick Break",
				"type": "Fighting",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "35",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Removes the Physical and Special Damage Reduction effects from the opponents’ field of play."
			},
			{
				"user": "Pokemon",
				"name": "Protect",
				"type": "Normal",
				"gauge": 2,
				"uses": 1,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Damage Guard Next effect to the user."
			},
			{
				"user": "Pokemon",
				"name": "Topsy-Turvy",
				"type": "Dark",
				"gauge": 2,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Returns the target’s raised stats to normal (except critical-hit rate) and lowers the target’s stats by the same amount."
			},
			{
				"user": "Trainer",
				"name": "Get Gutsy!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 2 stat ranks. Applies the Gradual Healing effect to the user."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Never Give Up Fighting Impact",
				"type" : "Fighting",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
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

export const GLORIA_URSHIFU = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.22.0/gloriadojobg.png",

	"trainer" : {
		"name" : "Gloria (Dojo Uniform)",
		"images" : {
			"base" : "./v/v2.22.0/gloriadojo.png",
			"ex" : "./v/v2.22.0/gloriadojoex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Water",
	"pokemonWeakness" : "Electric",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Urshifu",
			"formName" : "Rapid Strike Style",
			"stats" : {
				"hp" : 704,
				"atk" : 487,
				"def" : 179,
				"spa" : 273,
				"spd" : 160,
				"spe" : 336
			},
			"image" : "./v/v2.22.0/892.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Punishing Strike 9",
				"description" : "Lowers the target’s Defense by 1 stat rank when the user’s attack move against it hits. If the move has the multistrike effect tag, lowers the target’s Defense by 1 stat rank for each hit."
			},
			{
				"name" : "Recharging Strike 4",
				"description" : "Has a chance (50%) of charging the user’s move gauge by one when its attack move hits. If the move has the multistrike effect tag, has a chance (50%) of charging the user’s move gauge by one for each hit."
			},
			{
				"name" : "Critical Sync",
				"description" : "Except in certain circumstances, the user’s sync move lands as a critical hit."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Water",
				"description" : ""
			},
			{
				"name" : "Galar",
				"description" : ""
			},
			{
				"name" : "Main Character",
				"description" : ""
			},
			{
				"name" : "Passionate Spirit",
				"description" : ""
			},
			{
				"name" : "Galar Adventurer",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Pokemon",
				"name": "Surging Strikes",
				"type": "Water",
				"gauge": 3,
				"uses": 0,
				"category": "Physical",
				"power": "40",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Continues",
				"description": "Attacks three times in a row. Except in certain circumstances, successful hits with this attack become critical hits."
			},
			{
				"user": "Pokemon",
				"name": "Iron Head",
				"type": "Steel",
				"gauge": 3,
				"uses": 0,
				"category": "Physical",
				"power": "92",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Pokemon",
				"name": "Close Combat",
				"type": "Fighting",
				"gauge": 3,
				"uses": 0,
				"category": "Physical",
				"power": "124",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Defense and Sp. Def by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Flow Like Water!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. Raises the user’s Attack by 3 stat ranks."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Rapid Mastery Water Impact",
				"type" : "Water",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "The more the target’s Defense is lowered, the greater the power of this attack."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : [
			{
				"user": "Pokemon",
				"name": "G-Max Rapid Flow",
				"type": "Water",
				"gauge": 0,
				"uses": 0,
				"category": "Physical",
				"power": "400",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Except in certain circumstances, successful hits with this attack become critical hits. Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Damage Guard Next effect."
			},
			{
				"user": "Pokemon",
				"name": "Max Steelspike",
				"type": "Steel",
				"gauge": 0,
				"uses": 0,
				"category": "Physical",
				"power": "400",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Max Knuckle",
				"type": "Fighting",
				"gauge": 0,
				"uses": 0,
				"category": "Physical",
				"power": "400",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "",
				"name": "",
				"type": "",
				"gauge": 0,
				"uses": 0,
				"category": "",
				"power": "",
				"accuracy": "",
				"target": "",
				"effect": "",
				"description": ""
			}
		]
	}
}

export const KORRINA_MARSHADOW = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.22.0/sskorrinabg.png",

	"trainer" : {
		"name" : "Sygna Suit Korrina",
		"images" : {
			"base" : "./v/v2.22.0/sskorrina.png",
			"ex" : "./v/v2.22.0/sskorrinaex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Ghost",
	"pokemonWeakness" : "Fairy",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Marshadow",
			"formName" : "",
			"stats" : {
				"hp" : 651,
				"atk" : 448,
				"def" : 202,
				"spa" : 337,
				"spd" : 202,
				"spe" : 390
			},
			"image" : "./v/v2.22.0/802.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Good Form",
				"description" : "The more the user’s stats are raised, the more it powers up the user’s moves."
			},
			{
				"name" : "Better Prepared 9",
				"description" : "Powers up the user’s moves when none of the target’s stats are raised."
			},
			{
				"name" : "Fortuitous 9",
				"description" : "Raises one of the user’s following stats by one stat rank at random when its attack move is successful: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Ghost",
				"description" : ""
			},
			{
				"name" : "Kalos",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Passionate Spirit",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Pokemon",
				"name": "Spectral Thief",
				"type": "Ghost",
				"gauge": 2,
				"uses": 3,
				"category": "Physical",
				"power": "85",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Returns the target’s raised stats to normal and raises the user’s stats by the same amount."
			},
			{
				"user": "Trainer",
				"name": "Dire Hit All +",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Shadow Punch",
				"type": "Ghost",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "45",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "Greater Heights!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 1,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s Speed and evasiveness by 3 stat ranks."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Shadow-Shrouded Spectral Thief",
				"type" : "Ghost",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "This attack’s power increases when none of the target’s stats are raised."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}