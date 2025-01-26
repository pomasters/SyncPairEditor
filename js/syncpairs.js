const TEMPLATE1 = {
	"bg" : "./images/bg/bronze.png",

	"trainer" : {
		"name" : "TEMPLATE (SIMPLE)",
		"images" : {
			"base" : "./images/trainer_bettie.png",
			"ex" : "./images/trainer_scottie.png"
		},
	},

	"rarity" : 1,
	"role" : "Support",
	"pokemonType" : "Electric",
	"pokemonWeakness" : "Ground",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Pikachu",
			"formName" : "Name",
			"stats" : {
				"hp" : 100,
				"atk" : 100,
				"def" : 100,
				"spa" : 100,
				"spd" : 100,
				"spe" : 100
			},
			"image" : "./images/pikachu.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Passive 1",
				"description" : "Description 1"
			},
			{
				"name" : "Passive 2 (No description)",
				"description" : ""
			},
			{
				"name" : "",
				"description" : "Passive 3 (No name)"
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Electric",
				"description" : "Description"
			},
			{
				"name" : "Theme",
				"description" : ""
			},
			{
				"name" : "Normal",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Move 1",
				"type" : "Electric",
				"gauge" : 6,
				"uses" : 0,
				"category" : "Special",
				"power" : "999",
				"accuracy" : "Never miss",
				"target" : "All opponents",
				"effect" : "",
				"description" : "6 !?"
			},
			{
				"user" : "Pokemon",
				"name" : "Move 2",
				"type" : "Electric",
				"gauge" : 2,
				"uses" : 1,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "",
				"description" : "Description"
			},
			{
				"user" : "Trainer",
				"name" : "Move",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "-",
				"effect" : "",
				"description" : "No move -->"
			},
			{
				"user" : "",
				"name" : "",
				"type" : "",
				"gauge" : 1,
				"uses" : 1,
				"category" : "",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : ""
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Sync move 1",
				"type" : "Electric",
				"gauge" : 0,
				"uses" : 0,
				"category" : "",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "Description"
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

const TEMPLATE2 = {
	"bg" : "./images/bg/gold.png",

	"trainer" : {
		"name" : "TEMPLATE (FULL)",
		"images" : {
			"base" : "./images/trainer_bettie.png",
			"ex" : "./images/trainer_scottie.png"
		},
	},

	"rarity" : 7,
	"role" : "Support",
	"exRole": "Tech",
	"pokemonType" : "Electric",
	"pokemonWeakness" : "Ground",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Pikachu",
			"formName" : "Name",
			"stats" : {
				"hp" : 100,
				"atk" : 100,
				"def" : 100,
				"spa" : 100,
				"spd" : 100,
				"spe" : 100
			},
			"image" : "./images/pikachu.png"
		},
		{
			"name" : "Pikachu",
			"formName" : "Shiny",
			"stats" : {
				"hp" : 100,
				"atk" : 200,
				"def" : 50,
				"spa" : 200,
				"spd" : 50,
				"spe" : 200
			},
			"image" : "./images/pikachu_shiny.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Passive 1",
				"description" : "Description 1"
			},
			{
				"name" : "Passive 2 (No description)",
				"description" : ""
			},
			{
				"name" : "",
				"description" : "Passive 3 (No name)"
			}
		],
		"passives2" : [
			{
				"name" : "Passive 1 (2)",
				"description" : "Description 1 (2)"
			},
			{
				"name" : "Passive 2 (No description) (2)",
				"description" : ""
			},
			{
				"name" : "",
				"description" : "Description 3 (No name) (2)"
			}
		],
		"passivesMaster" : [
			{
				"name" : "Master Passive",
				"description" : ""
			},
			{
				"name" : "Master Passive 2",
				"description" : "A second master passive"
			}
		],

		"themes" : [
			{
				"name" : "Electric",
				"description" : "Description"
			},
			{
				"name" : "Theme",
				"description" : ""
			},
			{
				"name" : "Normal",
				"description" : ""
			}
		],

		"lucky" : [
			{   "name" : "Lucky 1",
				"description" : ""
			},
			{   "name" : "Lucky 2",
				"description" : "Multiple lucky skill when"
			}
		]
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Move 1",
				"type" : "Electric",
				"gauge" : 6,
				"uses" : 0,
				"category" : "Special",
				"power" : "999",
				"accuracy" : "Never miss",
				"target" : "All opponents",
				"effect" : "",
				"description" : "6 !?"
			},
			{
				"user" : "Pokemon",
				"name" : "Move 2",
				"type" : "Electric",
				"gauge" : 2,
				"uses" : 1,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "",
				"description" : "Description"
			},
			{
				"user" : "Trainer",
				"name" : "Move",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "-",
				"effect" : "",
				"description" : "No move -->"
			},
			{
				"user" : "",
				"name" : "",
				"type" : "",
				"gauge" : 1,
				"uses" : 1,
				"category" : "",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : ""
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Sync move 1",
				"type" : "Electric",
				"gauge" : 0,
				"uses" : 0,
				"category" : "",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "Description"
			}
		],

		"moves2" : [
			{
				"user" : "Pokemon2",
				"name" : "Move 1",
				"type" : "Grass",
				"gauge" : 1,
				"uses" : 0,
				"category" : "Physical",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "1"
			},
			{
				"user" : "Pokemon2",
				"name" : "Move 2",
				"type" : "Fire",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "2"
			},
			{
				"user" : "Pokemon2",
				"name" : "Move 3",
				"type" : "Water",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "3"
			},
			{
				"user" : "Trainer",
				"name" : "Move 4",
				"type" : "Normal",
				"gauge" : 4,
				"uses" : 1,
				"category" : "",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "4"
			}
		],

		"syncMove2" : [
			{
				"user" : "Pokemon2",
				"name" : "Sync move 2",
				"type" : "Dragon",
				"gauge" : 0,
				"uses" : 0,
				"category" : "",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "Description"
			}
		],

		"movesMAX" : [
			{
				"user" : "Pokemon",
				"name" : "Move 1",
				"type" : "Psychic",
				"gauge" : 1,
				"uses" : 0,
				"category" : "Physical",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "1"
			},
			{
				"user" : "Pokemon",
				"name" : "Move 2",
				"type" : "Dark",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "2"
			},
			{
				"user" : "Trainer",
				"name" : "Move 3",
				"type" : "Fighting",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "3"
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


const RED_CHARIZARD = {
	"Informations and images from" : "Serebii",
	"----------------------------" : "-------",

	"bg" : "./demos/ssredbg.png",

	"trainer" : {
		"name" : "Sygna Suit Red",
		"images" : {
			"base" : "./demos/ssred.png",
			"ex" : "./demos/ssredex.png"
		},
	},

	"rarity" : 6,
	"role" : "Special Strike",
	"pokemonType" : "Fire",
	"pokemonWeakness" : "Rock",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Charizard",
			"formName" : "",
			"stats" : {
				"hp" : 732,
				"atk" : 424,
				"def" : 145,
				"spa" : 424,
				"spd" : 145,
				"spe" : 297
			},
			"image" : "./demos/006.png"
		},
		{
			"name" : "Mega Charizard X",
			"formName" : "",
			"stats" : {
				"hp" : 732,
				"atk" : 508,
				"def" : 145,
				"spa" : 508,
				"spd" : 145,
				"spe" : 297
			},
			"image" : "./demos/006-mx.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Propulsion 1",
				"description" : "Has a small chance of reducing the user's sync move countdown by one when the user's move is successful."
			},
			{
				"name" : "Piercing Gaze",
				"description" : "Moves never miss."
			},
			{
				"name" : "Move Gauge Refresh 4",
				"description" : "Has a chance (50%) of charging the user's move gauge by one when a move is successful."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Fire",
				"description" : ""
			},
			{
				"name" : "Kanto",
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
				"name" : "Pallet Town",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Heat Wave",
				"type" : "Fire",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Special",
				"power" : "109-130",
				"accuracy" : "90",
				"target" : "All opponents",
				"effect" : "",
				"description" : "Has a very small chance of leaving the target burned."
			},
			{
				"user" : "Trainer",
				"name" : "Dire Hit +",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Sharply raises the user's critical hit rate."
			},
			{
				"user" : "Pokemon",
				"name" : "Blast Burn",
				"type" : "Fire",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Special",
				"power" : "178-213",
				"accuracy" : "90",
				"target" : "An opponent",
				"effect" : "",
				"description" : "No additional effect."
			},
			{
				"user" : "Trainer",
				"name" : "My Destiny!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Drastically raises the user's Sp. Atk and Speed. Lowers the user's Defense and Sp. Def. If Charizard has Mega Evolved, drastically raises the user's Attack."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon2",
				"name" : "Living Legend Blast Burn",
				"type" : "Fire",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "160-192",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "Become Mega Charizard X until the end of battle. Raises the user's critical-hit rate."
			}
		],

		"moves2" : [
			{
				"user" : "Pokemon2",
				"name" : "Heat Wave",
				"type" : "Fire",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Special",
				"power" : "109-130",
				"accuracy" : "90",
				"target" : "All opponents",
				"effect" : "",
				"description" : "Has a very small chance of leaving the target burned."
			},
			{
				"user" : "Pokemon2",
				"name" : "Flare Blitz",
				"type" : "Fire",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Physical",
				"power" : "123-147",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Unfreezes the user. The user also takes 25% of the damage it dealt to the target. Has a very small chance of leaving the target burned."
			},
			{
				"user" : "Pokemon2",
				"name" : "Blast Burn",
				"type" : "Fire",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Special",
				"power" : "178-213",
				"accuracy" : "90",
				"target" : "An opponent",
				"effect" : "",
				"description" : "No additional effect."
			},
			{
				"user" : "Trainer",
				"name" : "My Destiny!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Drastically raises the user's Sp. Atk and Speed. Lowers the user's Defense and Sp. Def. If Charizard has Mega Evolved, drastically raises the user's Attack."
			}
		],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

const BLUE_BLASTOISE = {
	"Informations and images from" : "Serebii",
	"----------------------------" : "-------",

	"bg" : "./demos/ssbluebg.png",

	"trainer" : {
		"name" : "Sygna Suit Blue",
		"images" : {
			"base" : "./demos/ssblue.png",
			"ex" : "./demos/ssblueex.png"
		},
	},

	"rarity" : 6,
	"role" : "Support",
	"pokemonType" : "Water",
	"pokemonWeakness" : "Electric",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Blastoise",
			"formName" : "",
			"stats" : {
				"hp" : 684,
				"atk" : 166,
				"def" : 298,
				"spa" : 190,
				"spd" : 298,
				"spe" : 166
			},
			"image" : "./demos/009.png"
		},
		{
			"name" : "Mega Blastoise",
			"formName" : "",
			"stats" : {
				"hp" : 684,
				"atk" : 166,
				"def" : 357,
				"spa" : 190,
				"spd" : 357,
				"spe" : 166
			},
			"image" : "./demos/009-m.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Force Field 4",
				"description" : "Has a good chance of raising the Sp. Def of all allied sync pairs when the user's Pokémon uses a move."
			},
			{
				"name" : "Team Shout 9",
				"description" : "Raises the Attack or Sp. Atk—or both—of all allied sync pairs when the user is hit by an attack move."
			},
			{
				"name" : "Safety Net",
				"description" : "Applies the Enduring effect to all allied sync pairs the first time the user's sync move is used each battle."
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
				"name" : "Kanto",
				"description" : ""
			},
			{
				"name" : "Rival",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Pallet Town",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Water Pulse",
				"type" : "Water",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "47-56",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Has a small chance of leaving the target confused."
			},
			{
				"user" : "Trainer",
				"name" : "X Defense All",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "All allies",
				"effect" : "",
				"description" : "Sharply raises the Defense of all allied sync pairs."
			},
			{
				"user" : "Trainer",
				"name" : "To the Top!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Makes move gauges accelerate on the allied field of play. Raises the critical-hit rate of all allied sync pairs."
			},
			{
				"user" : "Pokemon",
				"name" : "Hydro Cannon",
				"type" : "Water",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Special",
				"power" : "178-213",
				"accuracy" : "90",
				"target" : "An opponent",
				"effect" : "",
				"description" : "No additional effect."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon2",
				"name" : "Triumphant Hydro Cannon",
				"type" : "Water",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "160-192",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "Become Mega Blastoise until the end of battle. The more the user's Defense has been raised, the greater the power of this move."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

const LEAF_VENUSAUR = {
	"Informations and images from" : "Serebii",
	"----------------------------" : "-------",

	"bg" : "./demos/ssleafbg.png",

	"trainer" : {
		"name" : "Sygna Suit Leaf",
		"images" : {
			"base" : "./demos/ssleaf.png",
			"ex" : "./demos/ssleafex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",
	"pokemonType" : "Grass",
	"pokemonWeakness" : "Psychic",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Venusaur",
			"formName" : "",
			"stats" : {
				"hp" : 728,
				"atk" : 268,
				"def" : 244,
				"spa" : 268,
				"spd" : 244,
				"spe" : 166
			},
			"image" : "./demos/003-f.png"
		},
		{
			"name" : "Mega Venusaur",
			"formName" : "",
			"stats" : {
				"hp" : 728,
				"atk" : 268,
				"def" : 244,
				"spa" : 321,
				"spd" : 292,
				"spe" : 166
			},
			"image" : "./demos/003-m.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Potent Toxin 2",
				"description" : "Increases the amount of damage the target takes from being poisoned or badly poisoned."
			},
			{
				"name" : "Sundering 9",
				"description" : "Lowers the target's Defense or Sp. Def—or both—when a move targeting an opponent is successful."
			},
			{
				"name" : "Adrenaline 2",
				"description" : "Reduces the sync move countdown by two when a sync move is used for the first time."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Grass",
				"description" : ""
			},
			{
				"name" : "Kanto",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Pallet Town",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Razor Leaf",
				"type" : "Grass",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Physical",
				"power" : "43-51",
				"accuracy" : "95",
				"target" : "All opponents",
				"effect" : "",
				"description" : "Critical hits land more easily."
			},
			{
				"user" : "Trainer",
				"name" : "Potion",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "An ally",
				"effect" : "",
				"description" : "Restores an ally's HP by approximately 40% of its maximum HP."
			},
			{
				"user" : "Trainer",
				"name" : "Mega Healing!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Reduces the user's sync move countdown by one. If used by Mega Venusaur, reduces the user's sync move countdown by two. (If used in a co-op battle, reduces the sync move countdown of all allied sync pairs.) Makes all allied sync pairs gradually heal themselves."
			},
			{
				"user" : "Pokemon",
				"name" : "Frenzy Plant",
				"type" : "Grass",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Special",
				"power" : "178-213",
				"accuracy" : "90",
				"target" : "An opponent",
				"effect" : "",
				"description" : "No additional effect."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon2",
				"name" : "Tenacious Frenzy Plant",
				"type" : "Grass",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "160-192",
				"accuracy" : "",
				"target" : "",
				"effect" : "",
				"description" : "Become Mega Venusaur until the end of battle. Its power increases if the target is poisoned or badly poisoned."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

const SERENA_ZYGARDE = {
	"Informations from" : "Absol-utely",
	"Trainer image from" : "Pokekalos",
	"Pokémon image from" : "Serebii",
	"------------------" : "-------",
	
	"bg" : "./demos/ssserenabg.png",

	"trainer" : {
		"name" : "Sygna Suit Serena",
		"images" : {
			"base" : "./demos/ssserena.png",
			"ex" : "./demos/ssserenaex.png"
		},
	},

	"rarity" : 6,
	"role" : "Special Strike",
	"exRole": "Support",
	"pokemonType" : "Dragon",
	"pokemonWeakness" : "Ice",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Zygarde",
			"formName" : "50% Forme",
			"stats" : {
				"hp" : 626,
				"atk" : 424,
				"def" : 122,
				"spa" : 424,
				"spd" : 120,
				"spe" : 332
			},
			"image" : "./demos/718.png"
		},
		{
			"name" : "Zygarde",
			"formName" : "Complete Forme",
			"stats" : {
				"hp" : 626,
				"atk" : 508,
				"def" : 146,
				"spa" : 508,
				"spd" : 146,
				"spe" : 398
			},
			"image" : "./demos/718-c.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Strong Start 1",
				"description" : "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by 1 rank the first time the user enters a battle each battle."
			},
			{
				"name" : "Head Start 1",
				"description" : "Reduces the user’s sync move countdown by 1 the first time it enters a battle each battle."
			},
			{
				"name" : "Restraining Sync-Up 5",
				"description" : "Powers up the user’s sync moves when the target is restrained."
			}
		],
		"passives2" : [
			{
				"name" : "Piercing Gaze",
				"description" : "Moves never miss."
			},
			{
				"name" : "Impervious",
				"description" : "Stats cannot be lowered."
			},
			{
				"name" : "Power Hold 5",
				"description" : "Powers up the user’s moves when the target is restrained. Powers up the user’s sync move when the target is restrained."
			}
		],
		"passivesMaster" : [
			{
				"name" : "Kalos Flag Bearer",
				"description" : "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Kalos theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 0%.)"
			}
		],

		"themes" : [
			{
				"name" : "Dragon",
				"description" : ""
			},
			{
				"name" : "Kalos",
				"description" : ""
			},
			{
				"name" : "Main Character",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Thousand Waves",
				"type" : "Ground",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Physical",
				"power" : "140",
				"accuracy" : "100",
				"target" : "All opponents",
				"effect" : "-",
				"description" : "Applies the Restrain effect to the target."
			},
			{
				"user" : "Trainer",
				"name" : "Dire Hit +",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Raises the user’s critical-hit rate by 2 stat ranks."
			},
			{
				"user" : "Pokemon",
				"name" : "Core Enforcer",
				"type" : "Dragon",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Special",
				"power" : "160",
				"accuracy" : "100",
				"target" : "All opponents",
				"effect" : "-",
				"description" : "No additional effect."
			},
			{
				"user" : "Trainer",
				"name" : "Feel Our Feelings!",
				"type" : "Trainer",
				"gauge" : 2,
				"uses" : 1,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Raises the user’s Attack and Sp. Atk by 6 stat ranks. Applies the Gradual Healing effect to the user."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon2",
				"name" : "Ecosystem Core Enforcer",
				"type" : "Dragon",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "250",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Transform into Complete Forme until the end of battle."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

const CYNTHIA_GARCHOMP = {
	"Informations and images from" : "Serebii",
	"----------------------------" : "-------",
	"bg" : "./demos/cynthiabg.png",

	"trainer" : {
		"name" : "Cynthia",
		"images" : {
			"base" : "./demos/cynthia.png",
			"ex" : "./demos/cynthiaex.png"
		},
	},

	"rarity" : 6,
	"role" : "Physical Strike",
	"pokemonType" : "Ground",
	"pokemonWeakness" : "Ice",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Garchomp",
			"formName" : "",
			"stats" : {
				"hp" : 603,
				"atk" : 371,
				"def" : 160,
				"spa" : 140,
				"spd" : 157,
				"spe" : 361
			},
			"image" : "./demos/445.png"
		},
		{
			"name" : "Mega Garchomp",
			"formName" : "",
			"stats" : {
				"hp" : 603,
				"atk" : 445,
				"def" : 191,
				"spa" : 140,
				"spd" : 157,
				"spe" : 361
			},
			"image" : "./demos/445-m.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Fast-Track 2",
				"description" : "Has a moderate chance of raising the Pokémon's Speed after it uses a move."
			},
			{
				"name" : "Surging Sand 5",
				"description" : "Powers up moves in a sandstorm."
			}
		],
		"passives2" : [
			{
				"name" : "Fast-Track 2",
				"description" : "Has a moderate chance of raising the Pokémon's Speed after it uses a move."
			},
			{
				"name" : "Surging Sand 5",
				"description" : "Powers up moves in a sandstorm."
			},
			{
				"name" : "Ground Shift",
				"description" : "Normal-type moves become Ground-type moves."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{   "name" : "Ground",
				"description" : ""
			},
			{   "name" : "Sinnoh",
				"description" : ""
			},
			{   "name" : "Champion",
				"description" : ""
			},
			{   "name" : "Undella Town",
				"description" : ""
			},
			{   "name" : "Researcher",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Stomping Tantrum",
				"type" : "Ground",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Physical",
				"power" : "44-52",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Its power is doubled if the user's previous move failed."
			},
			{
				"user" : "Trainer",
				"name" : "X Attack",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Sharply raises the user's Attack."
			},
			{
				"user" : "Pokemon",
				"name" : "Earthquake",
				"type" : "Ground",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Physical",
				"power" : "100-120",
				"accuracy" : "100",
				"target" : "All opponents",
				"effect" : "",
				"description" : "No additional effect."
			},
			{
				"user" : "Trainer",
				"name" : "This Match is Too Fun!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Raises the user's Speed and accuracy. These stats are sharply raised when the user is in a sandstorm."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon2",
				"name" : "Earthquake of Ancient Lore",
				"type" : "Ground",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "160-192",
				"accuracy" : "",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Become Mega Garchomp until the end of battle."
			}
		],

		"moves2" : [
			{
				"user" : "Pokemon2",
				"name" : "Earthquake",
				"type" : "Ground",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Physical",
				"power" : "100-120",
				"accuracy" : "100",
				"target" : "All opponents",
				"effect" : "",
				"description" : "No additional effect."
			},
			{
				"user" : "Trainer",
				"name" : "X Attack",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Sharply raises the user's Attack."
			},
			{
				"user" : "Pokemon2",
				"name" : "Slash",
				"type" : "Ground",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Physical",
				"power" : "50-60",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Critical hits land more easily."
			},
			{
				"user" : "Trainer",
				"name" : "This Match is Too Fun!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Raises the user's Speed and accuracy. These stats are sharply raised when the user is in a sandstorm."
			}
		],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

const CYNTHIA_KOMMOO = {
	"Informations and images from" : "Serebii",
	"----------------------------" : "-------",
	"bg" : "./demos/sscynthiabg.png",

	"trainer" : {
		"name" : "Sygna Suit Cynthia",
		"images" : {
			"base" : "./demos/sscynthia.png",
			"ex" : "./demos/sscynthiaex.png"
		},
	},

	"rarity" : 6,
	"role" : "Special Strike",
	"pokemonType" : "Dragon",
	"pokemonWeakness" : "Fairy",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Kommo-o",
			"formName" : "",
			"stats" : {
				"hp" : 528,
				"atk" : 400,
				"def" : 164,
				"spa" : 414,
				"spd" : 164,
				"spe" : 205
			},
			"image" : "./demos/784.png"
		}
	],


	"skills" : {
		"passives" : [
			{   "name" : "High Five 1",
				"description" : "Raises the user's Attack, Defense, Sp. Atk, Sp. Def, and Speed after a sync move."
			},
			{   "name" : "Head Start 1",
				"description" : "Reduces the sync move countdown by 1 when the Pokémon enters a battle for the first time."
			},
			{   "name" : "Stamina Reserves 6",
				"description" : "Once per battle, charges the user's move gauge by six when the user is in a pinch."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{   "name" : "Dragon",
				"description" : ""
			},
			{   "name" : "Sinnoh",
				"description" : ""
			},
			{   "name" : "Battle Facility Foe",
				"description" : ""
			},
			{   "name" : "Sygna Suit",
				"description" : ""
			},
			{   "name" : "Researcher",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Dragon Breath",
				"type" : "Dragon",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Special",
				"power" : "42-50",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Has a moderate chance of leaving the target paralyzed."
			},
			{
				"user" : "Trainer",
				"name" : "X Sp. Atk",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Sharply raises the user's Sp. Atk."
			},
			{
				"user" : "Pokemon",
				"name" : "Clanging Scales",
				"type" : "Dragon",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Special",
				"power" : "176-211",
				"accuracy" : "100",
				"target" : "All opponents",
				"effect" : "",
				"description" : "Lowers the user's Defense."
			},
			{
				"user" : "Trainer",
				"name" : "Eyes on the Prize!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 1,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Reduces the user's sync move countdown by up to three based on how low their HP is. Raises the user's critical-hit rate by up to three stat ranks based on how low their HP is."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Historymaker Clanging Scales",
				"type" : "Dragon",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "250-300",
				"accuracy" : "",
				"target" : "An opponent",
				"effect" : "",
				"description" : "No additional effect."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

const CYNTHIA_GIRATINA = {
	"Informations from" : "Absol-utely",
	"Trainer image from" : "Pokekalos",
	"Pokémon image from" : "Serebii",
	"------------------" : "-------",

	"bg" : "./demos/sscynthia2bg.png",

	"trainer" : {
		"name" : "Sygna Suit Cynthia (Renegade)",
		"images" : {
			"base" : "./demos/sscynthia2.png",
			"ex" : "./demos/sscynthia2ex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",
	"pokemonType" : "Ghost",
	"pokemonWeakness" : "Fairy",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Giratina",
			"formName" : "Altered Forme",
			"stats" : {
				"hp" : 609,
				"atk" : 380,
				"def" : 179,
				"spa" : 434,
				"spd" : 179,
				"spe" : 339
			},
			"image" : "./demos/487.png"
		}
	],


	"skills" : {
		"passives" : [
			{   "name" : "Sundering 9",
				"description" : "Lowers the target’s Defense or Sp. Def—or both—by one stat rank when the user’s move targeting that opponent is successful."
			},
			{   "name" : "Invigorating Shadow 2",
				"description" : "Charges the user’s move gauge by 2 when it takes on a shadow presence."
			},
			{   "name" : "Super Shadow",
				"description" : "Applies the Supereffective ↑ Next effect to the user when it takes on a shadow presence."
			}
		],
		"passives2" : [],
		"passivesMaster" : [    
			{   "name" : "Sinnoh Flag Bearer",
				"description" : "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Sinnoh theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],

		"themes" : [
			{   "name" : "Ghost",
				"description" : ""
			},
			{   "name" : "Sinnoh",
				"description" : ""
			},
			{   "name" : "Sygna Suit",
				"description" : ""
			},
			{   "name" : "Battle Facility Foe",
				"description" : ""
			},
			{   "name" : "Passionate Spirit",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Shadow Ball",
				"type" : "Ghost",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Special",
				"power" : "99",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Has a chance (20%) of lowering the target’s Sp. Def by 1 stat rank."
			},
			{
				"user" : "Trainer",
				"name" : "Ghost Wish",
				"type" : "Trainer",
				"gauge" : 2,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Entire field",
				"effect" : "-",
				"description" : "Changes a zone to a Ghost Zone. (A Ghost Zone powers up Ghost-type attacks.)"
			},
			{
				"user" : "Pokemon",
				"name" : "Shadow Force",
				"type" : "Ghost",
				"gauge" : 0,
				"uses" : 3,
				"category" : "Physical",
				"power" : "200",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "The user takes on a shadow presence. After a set time, this presence fades and the user attacks. No other actions can be taken while in shadow presence. Opponents’ moves will not hit the user while it is in this presence. If the user is hit by a sync move or max move while in shadow presence, the presence will fade."
			},
			{
				"user" : "Trainer",
				"name" : "Show Me Your Secrets!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 1,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Raises the user’s Attack and Sp. Atk by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Lowers the user’s Defense and Sp. Def by 1 stat rank."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Renegade Shadow Force",
				"type" : "Ghost",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "This move’s power increases when the zone is Ghost Zone."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

const LEON_ETERNATUS = {
	"Informations and images from" : "Serebii",
	"----------------------------" : "-------",
	"bg" : "./demos/ssleonbg.png",

	"trainer" : {
		"name" : "Sygna Suit Leon",
		"images" : {
			"base" : "./demos/ssleon.png",
			"ex" : "./demos/ssleonex.png"
		},
	},

	"rarity" : 6,
	"role" : "Special Strike",
	"pokemonType" : "Dragon",
	"pokemonWeakness" : "Ground",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Eternatus",
			"formName" : "",
			"stats" : {
				"hp" : 737,
				"atk" : 244,
				"def" : 132,
				"spa" : 346,
				"spd" : 132,
				"spe" : 390
			},
			"image" : "./demos/890.png"
		}
	],


	"skills" : {
		"passives" : [
			{   "name" : "Lucky Seven 4",
				"description" : "Has a chance (50%) of lowering the target's Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracty, and evasiveness by one stat rank when the user's attack move against it is successful."
			},
			{   "name" : "MAX Damage Guard",
				"description" : "Applies the Damage Guard Next effect tothe user after using its max move. (If hit by an attackw hile this effect is applied, the attack will inflict no damage on the user, while the damage of some attacks such as sync moves will be halved. The effect is removed after it is activated)"
			},
			{   "name" : "Ramming Speed",
				"description" : "The more the user's Speed has been raised, the more it powers up moves."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{   "name" : "Dragon",
				"description" : ""
			},
			{   "name" : "Galar",
				"description" : ""
			},
			{   "name" : "Sygna Suit",
				"description" : ""
			},
			{   "name" : "Battle Facility Foe",
				"description" : ""
			},
			{   "name" : "Free Spirit",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Dynamax Cannon",
				"type" : "Dragon",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Special",
				"power" : "144-172",
				"accuracy" : "",
				"target" : "An opponent",
				"effect" : "",
				"description" : "This move's power increases by 50% when the target has a Sync buff"
			},
			{
				"user" : "Trainer",
				"name" : "Dire Hit +",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Sharply raises the user's critical hit rate."
			},
			{
				"user" : "Trainer",
				"name" : "X Speed +",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Raises the user's Speed by 3 stat ranks."
			},
			{
				"user" : "Trainer",
				"name" : "Eternal Power!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Reduces the user's sync move countdown by 1. Raises the user's Sp. Atk by 3 stat ranks. Applies the Superreffective Next effect to the user. Lowers the user's Sp. Def by 1 stat rank."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Eternal Champion Dragon Beam",
				"type" : "Dragon",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "250-300",
				"accuracy" : "",
				"target" : "An opponent",
				"effect" : "",
				"description" : "No additional effect."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : [
			{
				"user" : "Pokemon",
				"name" : "Eternabeam",
				"type" : "Dragon",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "400-480",
				"accuracy" : "",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Charges the user's move gauge by 3 for each allied Sync Pair on the field. When used in a co-op battle, charges the move gauges of all allied players by 3 instead."
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

const ELESA_EMOLGA = {
	"Informations from" : "Absol-utely",
	"Trainer image from" : "Pokekalos",
	"Pokémon image from" : "Serebii",
	"------------------" : "-------",
	"bg" : "./demos/elesabg.png",

	"trainer" : {
		"name" : "Elesa (Classic)",
		"images" : {
			"base" : "./demos/elesa.png",
			"ex" : "./demos/elesaex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",
	"pokemonType" : "Electric",
	"pokemonWeakness" : "Ice",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Emolga",
			"formName" : "",
			"stats" : {
				"hp" : 705,
				"atk" : 370,
				"def" : 176,
				"spa" : 370,
				"spd" : 176,
				"spe" : 331
			},
			"image" : "./demos/587.png"
		}
	],


	"skills" : {
		"passives" : [
			{   "name" : "Shock Factor 9",
				"description" : "Lowers the target’s Attack, Defense, Sp. Atk, Sp. Def, and Speed by one stat rank when the user’s attack move is successful against a paralyzed opponent."
			},
			{   "name" : "Entry Freebie",
				"description" : "Applies the Free Move Next effect to the user when it enters a battle."
			},
			{   "name" : "Viral Hit 9",
				"description" : "When the user inflicts a status condition on an opponent with the additional effects of a move, inflicts the same status condition on all opposing sync pairs."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{   "name" : "Electric",
				"description" : ""
			},
			{   "name" : "Unova",
				"description" : ""
			},
			{   "name" : "Gym Leader",
				"description" : ""
			},
			{   "name" : "Passionate Spirit",
				"description" : ""
			},
			{   "name" : "Artistic",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Thunder Shock",
				"type" : "Electric",
				"gauge" : 1,
				"uses" : 0,
				"category" : "Special",
				"power" : "17",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Has a chance (10%) of leaving the target paralyzed."
			},
			{
				"user" : "Pokemon",
				"name" : "Nuzzle",
				"type" : "Electric",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Physical",
				"power" : "20",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Leaves the target paralyzed."
			},
			{
				"user" : "Pokemon",
				"name" : "Light Screen",
				"type" : "Psychic",
				"gauge" : 3,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Allied side",
				"effect" : "-",
				"description" : "Applies the Special Damage Reduction effect to the allied field of play."
			},
			{
				"user" : "Trainer",
				"name" : "Sparkle and Shine!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 1,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "All allies",
				"effect" : "-",
				"description" : "Reduces the user’s sync move countdown by 1. Raises the user’s Sp. Atk by 4 stat ranks. Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Showstopping Electric Beam",
				"type" : "Electric",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "The more the target’s stats have been lowered, the greater the power of this move."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : [
			{
				"user" : "Pokemon",
				"name" : "Max Lightning",
				"type" : "Electric",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "400",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Turns the field into Electric Terrain."
			},
			{
				"user" : "Pokemon",
				"name" : "Max Lightning",
				"type" : "Electric",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "400",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Turns the field into Electric Terrain."
			},
			{
				"user" : "Pokemon",
				"name" : "Max Guard",
				"type" : "Normal",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "An ally",
				"effect" : "-",
				"description" : "Applies the Damage Guard Next effect to an ally."
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

const MAY_LOPUNNY = {
	"Informations and images from" : "Serebii",
	"----------------------------" : "-------",
	"bg" : "./demos/maybg.png",

	"trainer" : {
		"name" : "May (Spring 2021)",
		"images" : {
			"base" : "./demos/may.png",
			"ex" : "./demos/mayex.png"
		},
	},

	"rarity" : 6,
	"role" : "Physical Strike",
	"pokemonType" : "Normal",
	"pokemonWeakness" : "Fighting",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Lopunny",
			"formName" : "",
			"stats" : {
				"hp" : 630,
				"atk" : 356,
				"def" : 155,
				"spa" : 250,
				"spd" : 167,
				"spe" : 292
			},
			"image" : "./demos/428.png"
		},
		{
			"name" : "Mega Lopunny",
			"formName" : "",
			"stats" : {
				"hp" : 630,
				"atk" : 427,
				"def" : 155,
				"spa" : 250,
				"spd" : 167,
				"spe" : 350
			},
			"image" : "./demos/428-m.png"
		}
	],


	"skills" : {
		"passives" : [
			{   "name" : "Sync Morph",
				"description" : "Changes the user's sync move type when a sync move is used for the first time."
			},
			{   "name" : "Revenge Boost 5",
				"description" : "Has a very good chance of charging the user's move gauge by one when the user is hit by an attack move."
			},
			{   "name" : "Solo Fanfare 6",
				"description" : "Radically raises the user's Attack when a sync move is used for the first time."
			}
		],
		"passives2" : [
			{   "name" : "Sync Morph",
				"description" : "Changes the user's sync move type when a sync move is used for the first time."
			},
			{   "name" : "Propelling Strike 5",
				"description" : "Has a very good chance of charging the user's move gauge by one when an attack move is successful."
			},
			{   "name" : "Solo Fanfare 6",
				"description" : "Radically raises the user's Attack when a sync move is used for the first time."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{   "name" : "Normal",
				"description" : ""
			},
			{   "name" : "Hoenn",
				"description" : ""
			},
			{   "name" : "Seasonal Outfit",
				"description" : ""
			},
			{   "name" : "Researcher",
				"description" : ""
			},
			{   "name" : "Battle Partner",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Headbutt",
				"type" : "Normal",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Physical",
				"power" : "53-63",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Has a moderate chance of making the target flinch."
			},
			{
				"user" : "Trainer",
				"name" : "Potion",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "An ally",
				"effect" : "",
				"description" : "Restores an ally's HP by approximately 40% of its maximum HP."
			},
			{
				"user" : "Trainer",
				"name" : "X Defense All",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "All allies",
				"effect" : "",
				"description" : "Sharply raises the Defense of all allied sync pairs."
			},
			{
				"user" : "Trainer",
				"name" : "Hippity Hoppity!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "All allies",
				"effect" : "",
				"description" : "If used by Lopunny, sharply raises the Speed of all allied Sync Pairs. If used by Lopunny, sharply raises the user's evasiveness. If used by Mega Lopunny, raises the user's accuracy. If used by Mega Lopunny, drastically raises the user's evasiveness"
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Heart-Thumping Normal Impact",
				"type" : "Normal",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "200-240",
				"accuracy" : "",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Become Mega Lopunny until the end of battle. After this sync move is used for the first time, it becomes Fighting-type until the end of battle."
			}
		],

		"moves2" : [
			{
				"user" : "Trainer",
				"name" : "Move Gauge Boost",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "Self",
				"effect" : "",
				"description" : "Increases the user's move gauge by three."
			},
			{
				"user" : "Trainer",
				"name" : "Potion",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "An ally",
				"effect" : "",
				"description" : "Restores an ally's HP by approximately 40% of its maximum HP."
			},
			{
				"user" : "Pokemon2",
				"name" : "High Jump Kick",
				"type" : "Fighting",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Physical",
				"power" : "135-162",
				"accuracy" : "90",
				"target" : "An opponent",
				"effect" : "",
				"description" : "If it fails, the user takes damage equal to half its maximum HP."
			},
			{
				"user" : "Trainer",
				"name" : "Hippity Hoppity!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "",
				"accuracy" : "",
				"target" : "All allies",
				"effect" : "",
				"description" : "If used by Lopunny, sharply raises the Speed of all allied Sync Pairs. If used by Lopunny, sharply raises the user's evasiveness. If used by Mega Lopunny, raises the user's accuracy. If used by Mega Lopunny, drastically raises the user's evasiveness"
			}
		],

		"syncMove2" : [
			{
				"user" : "Pokemon2",
				"name" : "Heart-Thumping Fighting Impact",
				"type" : "Fighting",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "200-240",
				"accuracy" : "",
				"target" : "An opponent",
				"effect" : "",
				"description" : "Become Mega Lopunny until the end of battle. After this sync move is used for the first time, it becomes Fighting-type until the end of battle."
			}
		],

		"movesMAX" : []
	}
}

const PROFESSOR_OAK_MEW = {
  "Informations and images from": "Serebii",
  "----------------------------": "-------",
  "bg": "./images/bg/bronze.png",
  "trainer": {
	"name": "Professor Oak",
	"images": {
	  "base": "./demos/professoroak.png",
	  "ex": "./demos/professoroak.png"
	}
  },
  "rarity": 3,
  "role": "Tech",
  "pokemonType": "Psychic",
  "pokemonWeakness": "Bug",
  "pokemonGender": "",
  "pokemon": [
	{
	  "name": "Mew",
	  "formName": "Pre-Sync Move",
	  "stats": {
		"hp": 368,
		"atk": 268,
		"def": 268,
		"spa": 268,
		"spd": 268,
		"spe": 268
	  },
	  "image": "./demos/151.png"
	},
	{
	  "name": "Mew",
	  "formName": "Post-Sync Move",
	  "stats": {
		"hp": 368,
		"atk": 268,
		"def": 268,
		"spa": 268,
		"spd": 268,
		"spe": 268
	  },
	  "image": "./demos/151.png"
	}
  ],
  "skills": {
	"passives": [
	  {
		"name": "Oak's Research",
		"description": "Replaces some of the user's moves with different moves after using a sync move."
	  },
	  {
		"name": "Superduper Effective 1",
		"description": "Powers up moves that are super effective."
	  },
	  {
		"name": "Unfortuitous 9",
		"description": "Lowers the target's Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness at random when an attack is successful."
	  }
	],
	"passives2": [],
	"passivesMaster": [],
	"themes": [
	  {
		"name": "Psychic",
		"description": ""
	  },
	  {
		"name": "Kanto",
		"description": ""
	  },
	  {
		"name": "Researcher",
		"description": ""
	  },
	  {
		"name": "Old-Timer",
		"description": ""
	  }
	],
	"lucky": []
  },
  "actions": {
	"moves": [
	  {
		"user": "Pokemon",
		"name": "Swift",
		"type": "Normal",
		"gauge": 2,
		"uses": 0,
		"category": "Special",
		"power": "57-68",
		"accuracy": "-",
		"target": "All opponents",
		"effect": "-",
		"description": "Never misses."
	  },
	  {
		"user": "Trainer",
		"name": "X Speed",
		"type": "Trainer",
		"gauge": 0,
		"uses": 2,
		"category": "Status",
		"power": "-",
		"accuracy": "-",
		"target": "Self",
		"effect": "-",
		"description": "Sharply raises the user's Speed."
	  },
	  {
		"user": "Pokemon",
		"name": "Psychic",
		"type": "Psychic",
		"gauge": 3,
		"uses": 0,
		"category": "Special",
		"power": "99-118",
		"accuracy": "100",
		"target": "An opponent",
		"effect": "-",
		"description": "Has a very small chance of lowering the target's Sp. Def."
	  },
	  {
		"user": "Trainer",
		"name": "A World of Dreams!",
		"type": "Trainer",
		"gauge": 0,
		"uses": 2,
		"category": "Status",
		"power": "-",
		"accuracy": "-",
		"target": "Self",
		"effect": "-",
		"description": "Sharply raises the user's Sp. Atk. Drastically raises either the user's Attack, Defense, Sp. Def, Speed, accuracy, or evasiveness."
	  }
	],
	"syncMove": [
	  {
		"user": "Pokemon",
		"name": "Pokémon Professor Psychic",
		"type": "Psychic",
		"gauge": 0,
		"uses": 0,
		"category": "Special",
		"power": "250-300",
		"accuracy": "-",
		"target": "An opponent",
		"effect": "-",
		"description": "No additional effect."
	  }
	],
	"moves2": [
	  {
		"user": "Pokemon",
		"name": "Fire Blast",
		"type": "Fire",
		"gauge": 3,
		"uses": 0,
		"category": "Special",
		"power": "116-139",
		"accuracy": "85",
		"target": "An opponent",
		"effect": "-",
		"description": "Has a very small chance of leaving the target burned."
	  },
	  {
		"user": "Pokemon",
		"name": "Thunder",
		"type": "Electric",
		"gauge": 3,
		"uses": 0,
		"category": "Special",
		"power": "124-148",
		"accuracy": "70",
		"target": "An opponent",
		"effect": "-",
		"description": "Never misses when the weather is rainy. Has a moderate chance of leaving the target paralyzed."
	  },
	  {
		"user": "Pokemon",
		"name": "Psychic",
		"type": "Psychic",
		"gauge": 3,
		"uses": 0,
		"category": "Special",
		"power": "99-118",
		"accuracy": "100",
		"target": "An opponent",
		"effect": "-",
		"description": "Has a very small chance of lowering the target's Sp. Def."
	  },
	  {
		"user": "Pokemon",
		"name": "Blizzard",
		"type": "Ice",
		"gauge": 3,
		"uses": 0,
		"category": "Special",
		"power": "126-151",
		"accuracy": "70",
		"target": "All opponents",
		"effect": "-",
		"description": "Never misses during a hailstorm. Has a very small chance of leaving the target frozen."
	  }
	],
	"syncMove2": [],
	"movesMAX": []
  }
}

function DISABLE_OPTION(n) { return {"trainer":{"name":n}, "pokemon":[{"name":"--"}]} }




import * as MAY2022 from '../v/v2.20.0/syncpairs.js';
import * as JUNE2022 from '../v/v2.21.0/syncpairs.js';
import * as JULY2022 from '../v/v2.22.0/syncpairs.js';
import * as AUGUSTpart12022 from '../v/v2.23.0/syncpairs.js';
import * as AUGUSTpart22022 from '../v/v2.23.5/syncpairs.js';
import * as SEPTEMBER2022 from '../v/v2.24.0/syncpairs.js';
import * as OCTOBER2022 from '../v/v2.25.0/syncpairs.js';
import * as NOVEMBER2022 from '../v/v2.26.0/syncpairs.js';
import * as DECEMBER2022 from '../v/v2.27.0/syncpairs.js';
import * as JANUARY2023 from '../v/v2.28.0/syncpairs.js';
import * as FEBRUARY2023 from '../v/v2.29.0/syncpairs.js';
import * as MARCH2023 from '../v/v2.30.0/syncpairs.js';
import * as APRIL2023 from '../v/v2.31.0/syncpairs.js';
import * as MAY2023 from '../v/v2.32.0/syncpairs.js';
import * as JUNE2023 from '../v/v2.33.0/syncpairs.js';
import * as JULY2023 from '../v/v2.34.0/syncpairs.js';
import * as AUGUST2023 from '../v/v2.35.0/syncpairs.js';
import * as SEPTEMBER2023 from '../v/v2.36.0/syncpairs.js';
import * as OCTOBER2023 from '../v/v2.37.0/syncpairs.js';
import * as NOVEMBER2023 from '../v/v2.38.0/syncpairs.js';
import * as DECEMBER2023 from '../v/v2.39.0/syncpairs.js';
import * as JANUARY2024 from '../v/v2.40.0/syncpairs.js';
import * as FEBRUARY2024 from '../v/v2.41.0/syncpairs.js';
import * as MARCH2024 from '../v/v2.42.0/syncpairs.js';
import * as APRIL2024 from '../v/v2.43.0/syncpairs.js';
import * as MAY2024 from '../v/v2.44.0/syncpairs.js';
import * as JUNE2024 from '../v/v2.45.0/syncpairs.js';
import * as JULY2024 from '../v/v2.46.0/syncpairs.js';
import * as AUGUST2024 from '../v/v2.47.0/syncpairs.js';
import * as SEPTEMBER2024 from '../v/v2.48.0/syncpairs.js';
import * as OCTOBER2024 from '../v/v2.49.0/syncpairs.js';
import * as NOVEMBER2024 from '../v/v2.50.0/syncpairs.js';
import * as DECEMBER2024 from '../v/v2.51.0/syncpairs.js';
import * as JANUARY2025 from '../v/v2.52.0/syncpairs.js';


export const SYNCPAIRS = [

	TEMPLATE1, //Always at the
	TEMPLATE2, //top of the array

	DISABLE_OPTION("---------------- v2.52.0 (JANUARY2025) ----------------"),

	JANUARY2025.LANA_LANTURN,
	JANUARY2025.LUCAS_TORTERRA,
	JANUARY2025.HOP_PINCURCHIN,
	JANUARY2025.GIOVANNI_GUZZLORD,
	JANUARY2025.BLOSSOM_KIRLIA,
	JANUARY2025.RAIHAN_SANDACONDA,
	JANUARY2025.POPPY_STEELIX,
	JANUARY2025.MELA_ARMAROUGE,
	JANUARY2025.ATTICUS_REVAVROOM,

	DISABLE_OPTION("---------------- v2.51.0 (DECEMBER2024) ----------------"),

	DECEMBER2024.AS_LEON_CHARIZARD,
	DECEMBER2024.CHEREN_LIEPARD,
	DECEMBER2024.ARVEN_NACLI,
	DECEMBER2024.MILO_ELDEGOSS,
	DECEMBER2024.HOP_RILLABOOM,
	DECEMBER2024.MARNIE_CINDERACE,
	DECEMBER2024.BEDE_INTELEON,
	DECEMBER2024.LILLIE_PRIMARINA,
	DECEMBER2024.BUGSY_KRICKETUNE,

	DISABLE_OPTION("---------------- v2.50.0 (NOVEMBER2024) ----------------"),

	NOVEMBER2024.INGO_CHANDELURE,
	NOVEMBER2024.EMMET_EELEKTROSS,
	NOVEMBER2024.SHAUNA_DELCATTY,
	NOVEMBER2024.TIERNO_TALONFLAME,
	NOVEMBER2024.ERI_ANNIHILAPE,
	NOVEMBER2024.SINA_GLACEON,
	NOVEMBER2024.DEXIO_ESPEON,
	NOVEMBER2024.CALEM_SYLVEON,
	NOVEMBER2024.HILDA_LEAFEON,
	NOVEMBER2024.HILBERT_GLACEON,

	DISABLE_OPTION("---------------- v2.49.0 (OCTOBER2024) ----------------"),

	OCTOBER2024.GIACOMO_KINGAMBIT,
	OCTOBER2024.LEAR_KROOKODILE,
	OCTOBER2024.BARRY_FLOATZEL,
	OCTOBER2024.CLAVELL_QUAQUAVAL,
	OCTOBER2024.IONO_FLUTTERMANE,
	OCTOBER2024.SHAUNTAL_FROSLASS,

	DISABLE_OPTION("---------------- v2.48.0 (SEPTEMBER2024) ----------------"),

	SEPTEMBER2024.TRAINER_RAIKOU,
	SEPTEMBER2024.CHERYL_WAILORD,
	SEPTEMBER2024.LUSAMINE_LILLIGANT,
	SEPTEMBER2024.ROSE_PERRSERKER,
	SEPTEMBER2024.WILL_SLOWBRO,
	SEPTEMBER2024.MORGAN_VIRIZION,
	DISABLE_OPTION("----------------"),
	SEPTEMBER2024.LILLIE_SOLGALEO,
	SEPTEMBER2024.AS_CYNTHIA_GARCHOMP,
	SEPTEMBER2024.AS_STEVEN_METAGROSS,
	SEPTEMBER2024.AS_LANCE_DRAGONITE,
	SEPTEMBER2024.LANCE_KINGDRA,
	SEPTEMBER2024.LEAF_BLASTOISE,
	DISABLE_OPTION("----------------"),
	SEPTEMBER2024.SILVER_CROBAT,
	SEPTEMBER2024.MALVA_TALONFLAME,
	SEPTEMBER2024.CHUCK_POLIWRATH,
	SEPTEMBER2024.TREVOR_FLORGES,
	SEPTEMBER2024.LEAR_GHOLDENGO,
	SEPTEMBER2024.RACHEL_GIMMIGHOUL,
	SEPTEMBER2024.SAWYER_GIMMIGHOUL,

	DISABLE_OPTION("---------------- v2.47.0 (AUGUST2024) ----------------"),

	AUGUST2024.ELIO_STAKATAKA,
	AUGUST2024.IONO_WATTREL,
	AUGUST2024.BLUE_ALAKAZAM,
	AUGUST2024.SELENE_NIHILEGO,
	AUGUST2024.ARVEN_MABOSSTIFF,
	AUGUST2024.OAK_NIDORINO,
	AUGUST2024.NEMONA_SCREAMTAIL,

	DISABLE_OPTION("---------------- v2.46.0 (JULY2024) ----------------"),

	JULY2024.GARDENIA_DHELMISE,
	JULY2024.GLADION_WEAVILE,
	JULY2024.HUGH_UNFEZANT,
	JULY2024.MARNIE_SCRAFTY,
	JULY2024.NEMONA_LYCANROC,
	JULY2024.WALLY_ALTARIA,
	JULY2024.ACEROLA_JELLICENT,
	JULY2024.KABU_TORKOAL,
	JULY2024.KLARA_SLOWBRO,
	JULY2024.AVERY_SLOWKING,
	JULY2024.GRETA_BRELOOM,

	DISABLE_OPTION("---------------- v2.45.0 (JUNE2024) ----------------"),

	JUNE2024.CHEREN_TORNADUS,
	JUNE2024.CHEREN_PURRLOIN,
	JUNE2024.BIANCA_VIRIZION,
	JUNE2024.LARRY_DUDUNSPARCE,
	JUNE2024.KABU_CENTISKORCH,

	DISABLE_OPTION("---------------- v2.44.0 (MAY2024) ----------------"),

	MAY2024.RIKA_CLODSIRE,
	MAY2024.BRYCEN_ZOROARK,
	MAY2024.RIKA_WHISCASH,
	MAY2024.BLUE_CHARIZARD,
	MAY2024.SABRINA_SWOOBAT,
	MAY2024.GUZMA_ARIADOS,
	MAY2024.PLUMERIA_GENGAR,
	MAY2024.POPPY_TINKATON,

	DISABLE_OPTION("---------------- v2.43.0 (APRIL2024) ----------------"),

	APRIL2024.VOLO_TOGEPI,
	APRIL2024.VOLO_GIBLE,
	APRIL2024.JACQ_FARIGIRAF,
	APRIL2024.BARRY_HERACROSS,
	APRIL2024.SELENE_SCIZOR,

	DISABLE_OPTION("---------------- v2.42.0 (MARCH2024) ----------------"),

	MARCH2024.GEETA_GLIMMORA,
	MARCH2024.SKYLA_UNFEZANT,
	MARCH2024.SILVER_TYRANITAR,
	MARCH2024.ADAMAN_URSALUNA,
	MARCH2024.IRIDA_ZOROARK,
	MARCH2024.TIERNO_CRAWDAUNT,
	MARCH2024.DAHLIA_LUDICOLO,

	DISABLE_OPTION("---------------- v2.41.0 (FEBRUARY2024) ----------------"),

	FEBRUARY2024.CHASE_PIKACHU,
	FEBRUARY2024.WALLY_DELCATTY,
	FEBRUARY2024.PETEY_PIKACHU,
	FEBRUARY2024.FALKNER_NOCTOWL,
	FEBRUARY2024.VICTOR_GREEDENT,
	FEBRUARY2024.CANDICE_DARMANITAN,
	FEBRUARY2024.PLAYER_ALCREMIE,
	FEBRUARY2024.GLADION_MAGEARNA,
	FEBRUARY2024.RILEY_LUCARIO,

	DISABLE_OPTION("---------------- v2.40.0 (JANUARY2024) ----------------"),

	JANUARY2024.CLAIR_DRAMPA,
	JANUARY2024.WALLACE_BLACEPHALON,
	JANUARY2024.VOLKNER_RAICHU,
	JANUARY2024.KATHERINE_SLURPUFF,
	JANUARY2024.IONO_BELLIBOLT,
	JANUARY2024.GRUSHA_CETITAN,

	DISABLE_OPTION("---------------- v2.39.0 (DECEMBER2023) ----------------"),

	DECEMBER2023.NATE_HAXORUS,
	DECEMBER2023.JASMINE_MAGNEMITE,
	DECEMBER2023.VIOLA_VIVILLON,
	DECEMBER2023.SYCAMORE_GOGOAT,
	DECEMBER2023.ROSA_MELOETTA,

	DISABLE_OPTION("---------------- v2.38.0 (NOVEMBER2023) ----------------"),

	NOVEMBER2023.ROXIE_TOXTRICITY,
	NOVEMBER2023.RED_VENUASAUR,
	NOVEMBER2023.GLADION_GOLBAT,
	NOVEMBER2023.PIERS_TOXTRICITY,
	NOVEMBER2023.RYUKI_TURTONATOR,
	NOVEMBER2023.PENNY_SYLVEON,
	NOVEMBER2023.ELAINE_EEVEE,
	NOVEMBER2023.EVE_EEVEE,
	NOVEMBER2023.SELENE_UMBREON,
	NOVEMBER2023.ELIO_ESPEON,

	DISABLE_OPTION("---------------- v2.37.0 (OCTOBER2023) ----------------"),

	OCTOBER2023.AKARI_SAMUROTT,
	OCTOBER2023.REI_DECIDUEYE,
	OCTOBER2023.GIOVANNI_NIDORINO,
	OCTOBER2023.THORTON_MAGNEZONE,
	OCTOBER2023.NOLAND_NINJASK,
	OCTOBER2023.PHOEBE_COFAGRIGUS,
	OCTOBER2023.ROXANNE_RUNERIGUS,
	OCTOBER2023.LENORA_WATCHOG,

	DISABLE_OPTION("---------------- v2.36.0 (SEPTEMBER2023) ----------------"),
	
	SEPTEMBER2023.RED_ARTICUNO,
	SEPTEMBER2023.LEAF_MOLTRES,
	SEPTEMBER2023.BLUE_ZAPDOS,
	DISABLE_OPTION("----------------"),
	SEPTEMBER2023.PLAYER_REGISTEEL,
	SEPTEMBER2023.BARRY_ROSERADE,
	SEPTEMBER2023.OLIVIA_CARBINK,
	SEPTEMBER2023.VALERIE_MAWILE,
	SEPTEMBER2023.FALKNER_PIGEOT,
	SEPTEMBER2023.DANA_REGICE,
	DISABLE_OPTION("----------------"),
	SEPTEMBER2023.LEAF_CLEFABLE,
	SEPTEMBER2023.PAULO_LYCANROC,
	SEPTEMBER2023.TINA_FLAREON,
	SEPTEMBER2023.GIOVANNI_RHYDON,
	SEPTEMBER2023.ARCHER_HOUNDOOM,
	SEPTEMBER2023.ARIANA_ARBOK,
	SEPTEMBER2023.PETREL_WEEZING,
	SEPTEMBER2023.PROTON_GOLBAT,
	SEPTEMBER2023.PALMER_REGIGIGAS,
	SEPTEMBER2023.ARGENTA_SKARMORY,

	DISABLE_OPTION("---------------- v2.35.0 (AUGUST2023) ----------------"),

	AUGUST2023.LEON_DRAGAPULT,
	AUGUST2023.CALEM_FENNEKIN,
	AUGUST2023.GLORIA_CINDERACE_FIRE,
	AUGUST2023.GLORIA_CINDERACE_FLYING,
	AUGUST2023.GLORIA_CINDERACE_FIGHTING,
	AUGUST2023.OLYMPIA_SIGILYPH,
	AUGUST2023.DRASNA_DRAGALGE,
	AUGUST2023.NEMONA_PAWMOT,
	AUGUST2023.VICTOR_SPECTRIER,

	DISABLE_OPTION("---------------- v2.34.0 (JULY2023) ----------------"),

	JULY2023.TATE_JIRACHI,
	JULY2023.IRIDA_FLAREON,
	JULY2023.LIZA_CELESTEELA,
	JULY2023.ROSE_COPPERAJAH,
	JULY2023.OLEANA_GARBODOR,
	JULY2023.KIAWE_ARCANINE,
	JULY2023.MALLOW_SHIINOTIC,

	DISABLE_OPTION("---------------- v2.33.0 (JUNE2023) ----------------"),

	JUNE2023.ADAMAN_LEAFEON,
	JUNE2023.ADAMAN_VAPOREON,
	JUNE2023.IRIDA_GLACEON,
	JUNE2023.EUSINE_SUICUNE,
	JUNE2023.SILVER_SNEASEL,

	DISABLE_OPTION("---------------- v2.32.0 (MAY2023) ----------------"),

	MAY2023.HAU_TAPUKOKO,
	MAY2023.MINA_TAPUFINI,
	MAY2023.ACEROLA_BANETTE,
	MAY2023.AGATHA_ARBOK,
	MAY2023.LANCE_DRAGONAIR,
	MAY2023.ACEROLA_TAPUBULU,
	MAY2023.LANA_TAPULELE,

	DISABLE_OPTION("---------------- v2.31.0 (APRIL2023) ----------------"),

	APRIL2023.STEVEN_STOUTLAND,
	APRIL2023.STEVEN_CRADILY,
	APRIL2023.SHAUNA_KLEFKI,
	APRIL2023.ZINNIA_THIEVUL,
	APRIL2023.LYRA_PHANPY,
	APRIL2023.LORELEI_CLOYSTER,
	APRIL2023.BRUNO_ONIX,

	DISABLE_OPTION("---------------- v2.30.0 (MARCH2023) ----------------"),

	MARCH2023.MARNIE_MOLTRES,
	MARCH2023.GLORIA_THWACKEY,
	MARCH2023.HOP_ZAPDOS,
	MARCH2023.BEDE_ARTICUNO,
	MARCH2023.BALLGUY_AMOONGUSS,

	DISABLE_OPTION("---------------- v2.29.0 (FEBRUARY2023) ----------------"),

	FEBRUARY2023.MALLOW_APPLETUN,
	FEBRUARY2023.MORTY_GASTLY,
	FEBRUARY2023.ELESA_TOGETIC,
	FEBRUARY2023.LYSANDRE_VOLCANION,
	FEBRUARY2023.ANABEL_SNORLAX,
	FEBRUARY2023.EMMA_CROBAT,

	DISABLE_OPTION("---------------- v2.28.0 (JANUARY2023) ----------------"),

	JANUARY2023.DAWN_ORICORIO,
	JANUARY2023.LISIA_RAPIDASH,
	JANUARY2023.KALI_AZUMARILL,
	JANUARY2023.DAWN_WORMADAM,
	JANUARY2023.DIANTHA_DIANCIE,
	JANUARY2023.SHAUNA_CHESNAUGHT,

	DISABLE_OPTION("---------------- v2.27.0 (DECEMBER2022) ----------------"),

	DECEMBER2022.SERENA_GRENINJA,
	DECEMBER2022.CALEM_GRENINJA,
	DECEMBER2022.SERENA_FLETCHLING,
	DECEMBER2022.JASMINE_AMHPAROS,
	DECEMBER2022.WHITNEY_SAWSBUCK,

	DISABLE_OPTION("---------------- v2.26.0 (NOVEMBER2022) ----------------"),

	NOVEMBER2022.HILDA_VICTINI,
	NOVEMBER2022.HILBERT_GENESECT,
	NOVEMBER2022.ELESA_JOLTIK,
	NOVEMBER2022.HUGH_BOUFFALANT,
	NOVEMBER2022.N_KYUREMBLACK,
	NOVEMBER2022.COLRESS_KLINKLANG,
	NOVEMBER2022.LYRA_VAPOREON,
	NOVEMBER2022.KRIS_JOLTEON,
	NOVEMBER2022.LUCAS_FLAREON,

	DISABLE_OPTION("---------------- v2.25.0 (OCTOBER2022) ----------------"),
	
	OCTOBER2022.WALLY_GARDEVOIR,
	OCTOBER2022.RAIHAN_GIGALITH,
	OCTOBER2022.GORDIE_COALOSSAL,
	OCTOBER2022.MELONY_LAPRAS,
	OCTOBER2022.VICTOR_RILLABOOM,
	OCTOBER2022.HELENA_HAUNTER,
	OCTOBER2022.IRIS_NAGANADEL,
	OCTOBER2022.ALLISTER_GOURGEIST,

	DISABLE_OPTION("---------------- v2.24.0 (SEPTEMBER2022) ----------------"),

	SEPTEMBER2022.ASH_PIKACHU,
	SEPTEMBER2022.CYNTHIA_LUCARIO,
	SEPTEMBER2022.RED_PIKACHU,
	DISABLE_OPTION("----------------"),
	SEPTEMBER2022.BLUE_EXEGGUTOR,
	SEPTEMBER2022.SILVER_FERALIGATR,
	SEPTEMBER2022.MAY_WAILMER,
	SEPTEMBER2022.CYNTHIA_GASTRODON,
	SEPTEMBER2022.N_SIGILYPH,
	SEPTEMBER2022.ROSA_DEWOTT,
	SEPTEMBER2022.PROFESSOR_SYCAMORE_BULBASAUR,
	SEPTEMBER2022.LILLIE_COMFEY,
	SEPTEMBER2022.MARNIE_TOXICROAK,
	DISABLE_OPTION("----------------"),
	SEPTEMBER2022.PLAYER_MESPRIT,
	SEPTEMBER2022.NITA_LANDORUS,
	SEPTEMBER2022.JANINE_CROBAT,
	SEPTEMBER2022.CANDICE_FROSLASS,
	SEPTEMBER2022.CLEMONT_MAGNETON,
	SEPTEMBER2022.SOPHOCLES_ALOLANGOLEM,
	DISABLE_OPTION("----------------"),
	SEPTEMBER2022.ROSA_SHAYMIN,
	SEPTEMBER2022.NAOMI_SANDSLASH,

	DISABLE_OPTION("---------------- v2.23.5 (AUGUST2022 part2) ----------------"),

	AUGUSTpart22022.ZINNIA_RAYQUAZA,
	AUGUSTpart22022.STEVEN_DEOXYS_ATTACK,
	AUGUSTpart22022.STEVEN_DEOXYS_DEFENSE,
	AUGUSTpart22022.STEVEN_DEOXYS_SPEED,
	AUGUSTpart22022.STEVEN_DEOXYS,
	AUGUSTpart22022.GIOVANNI_PERSIAN,

	DISABLE_OPTION("---------------- v2.23.0 (AUGUST2022 part1) ----------------"),

	AUGUSTpart12022.MAY_BLAZIKEN,
	AUGUSTpart12022.BRENDAN_LATIOS,
	AUGUSTpart12022.LOOKER_CROAGUNK,
	AUGUSTpart12022.COURTNEY_CAMERUPT,

	DISABLE_OPTION("---------------- v2.22.0 (JULY2022) ----------------"),

	JULY2022.N_ZOROARK,
	JULY2022.HILDA_GRAPPLOCT,
	JULY2022.GLORIA_URSHIFU,
	JULY2022.KORRINA_MARSHADOW,

	DISABLE_OPTION("---------------- v2.21.0 (JUNE2022) ----------------"),

	JUNE2022.ETHAN_LUGIA,
	JUNE2022.LYRA_CELEBI,
	JUNE2022.KRIS_SUICUNE,
	JUNE2022.BEDE_HATTERENE,

	DISABLE_OPTION("---------------- v2.20.0 (MAY2022) -----------------"),

	MAY2022.MORTY_HOOH,
	MAY2022.AARON_VESPIQUEN,
	MAY2022.BERTHA_HIPPOWDON,
	MAY2022.LUCIAN_GIRAFARIG,
	MAY2022.GIOVANNI_NIDOKING,

	DISABLE_OPTION("-------- SYNC PAIRS DEMO --------"),

	RED_CHARIZARD,
	BLUE_BLASTOISE,
	LEAF_VENUSAUR,
	SERENA_ZYGARDE,
	CYNTHIA_GARCHOMP,
	CYNTHIA_KOMMOO,
	CYNTHIA_GIRATINA,
	LEON_ETERNATUS,
	ELESA_EMOLGA,
	MAY_LOPUNNY,
	PROFESSOR_OAK_MEW
];

export var CURRENT_SYNCPAIR = [JANUARY2025.GIOVANNI_GUZZLORD, JANUARY2025.MELA_ARMAROUGE, JANUARY2025.ATTICUS_REVAVROOM];