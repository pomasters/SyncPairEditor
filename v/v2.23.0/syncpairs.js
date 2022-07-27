export const MAY_BLAZIKEN = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.23.0/ssmaybg.png",

	"trainer" : {
		"name" : "Sygna Suit May",
		"images" : {
			"base" : "./v/v2.23.0/ssmay.png",
			"ex" : "./v/v2.23.0/ssmayex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Fire",
	"pokemonWeakness" : "Flying",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Blaziken",
			"formName" : "",
			"stats" : {
				"hp" : 648,
				"atk" : 424,
				"def" : 176,
				"spa" : 336,
				"spd" : 176,
				"spe" : 358
			},
			"image" : "./v/v2.23.0/257.png"
		},
		{
			"name" : "Mega Blaziken",
			"formName" : "",
			"stats" : {
				"hp" : 648,
				"atk" : 508,
				"def" : 176,
				"spa" : 336,
				"spd" : 176,
				"spe" : 429
			},
			"image" : "./v/v2.23.0/257-m.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Head Start 2",
				"description" : "Reduces the user’s sync move countdown by 2 the first time it enters a battle each battle."
			},
			{
				"name" : "Team Debut Dash 2",
				"description" : "Raises the Speed of all allied sync pairs by 2 stat ranks the first time the user enters a battle each battle."
			},
			{
				"name" : "Defense Crush 9",
				"description" : "Lowers the target’s Defense by one stat rank when the user’s attack move against it is successful."
			}
		],
		"passives2" : [
			{
				"name" : "Fuel Economy 1",
				"description" : "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by 1."
			},
			{
				"name" : "Propulsion 1",
				"description" : "Has a chance (20%) of reducing the user’s sync move countdown by one when the user’s move is successful."
			},
			{
				"name" : "Defense Destroyer 9",
				"description" : "Lowers the target’s Defense by 2 stat ranks when the user’s attack move against the target is successful."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Fire",
				"description" : ""
			},
			{
				"name" : "Hoenn",
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
				"user": "Pokemon",
				"name": "Blaze Kick",
				"type": "Fire",
				"gauge": 4,
				"uses": 0,
				"category": "Physical",
				"power": "140",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily. Has a chance (10%) of leaving the target burned."
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
				"name": "Low Sweep",
				"type": "Fighting",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "30",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Fired Up!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 1,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Reduces the user’s sync move countdown by 1. Raises the user’s Attack by 4 stat ranks. Raises the user’s accuracy by 1 stat rank."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "All About Us Blaze Kick",
				"type" : "Fire",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "160",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Become Mega Blaziken until the end of battle. The more the target’s Defense is lowered, the greater the power of this attack."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const BRENDAN_LATIOS = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.23.0/ssbrendanbg.png",

	"trainer" : {
		"name" : "Sygna Suit Brendan",
		"images" : {
			"base" : "./v/v2.23.0/ssbrendan.png",
			"ex" : "./v/v2.23.0/ssbrendanex.png"
		},
	},

	"rarity" : 6,
	"role" : "Support",

	"pokemonType" : "Dragon",
	"pokemonWeakness" : "Fairy",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Latios",
			"formName" : "",
			"stats" : {
				"hp" : 660,
				"atk" : 156,
				"def" : 277,
				"spa" : 253,
				"spd" : 288,
				"spe" : 270
			},
			"image" : "./v/v2.23.0/381.png"
		},
		{
			"name" : "Mega Latios",
			"formName" : "",
			"stats" : {
				"hp" : 660,
				"atk" : 156,
				"def" : 304,
				"spa" : 253,
				"spd" : 374,
				"spe" : 270
			},
			"image" : "./v/v2.23.0/381-m.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Team Smart Start 1",
				"description" : "Increases the Special Moves ↑ Next effect of all allied sync pairs by 1 rank when the user enters a battle."
			},
			{
				"name" : "Freevenge 4",
				"description" : "Has a chance (50%) of applying the Free Move Next effect to the user when it is hit by an attack move."
			},
			{
				"name" : "Unexpected Benefit ×2",
				"description" : "Raises the chance of lowering stat values with the additional effects of moves. When an opponent’s stat is lowered by the additional effects of the user’s moves, it is lowered by double the stat ranks."
			}
		],
		"passives2" : [
			{
				"name" : "Team Smart Start 1",
				"description" : "Increases the Special Moves ↑ Next effect of all allied sync pairs by 1 rank when the user enters a battle."
			},
			{
				"name" : "Freevenge 9",
				"description" : "Applies the Free Move Next effect to the user when it is hit by an attack move."
			},
			{
				"name" : "Unexpected Benefit ×2",
				"description" : "Raises the chance of lowering stat values with the additional effects of moves. When an opponent’s stat is lowered by the additional effects of the user’s moves, it is lowered by double the stat ranks."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Dragon",
				"description" : ""
			},
			{
				"name" : "Hoenn",
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
				"name" : "Space Cadet",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Pokemon",
				"name": "Dragon Breath",
				"type": "Dragon",
				"gauge": 2,
				"uses": 0,
				"category": "Special",
				"power": "42",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "Potion",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Heals",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "Luster Purge",
				"type": "Psychic",
				"gauge": 3,
				"uses": 0,
				"category": "Special",
				"power": "100",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (50%) of lowering the target’s Sp. Def by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Flying Free!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 1,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by 1 stat rank. Uses a maximum of 3 slots of the user’s move gauge. The more amount used, the more it raises the Sp. Atk and Sp. Def of all allied sync pairs (can be raised by up to 4 stat ranks maximum). If 3 slots are used, also applies the Free Move Next effect to all allied sync pairs."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Good Times Draco Meteor",
				"type" : "Dragon",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "160",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Become Mega Latios until the end of battle."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const LOOKER_CROAGUNK = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.23.0/lookerbg.png",

	"trainer" : {
		"name" : "Looker",
		"images" : {
			"base" : "./v/v2.23.0/looker.png",
			"ex" : "./v/v2.23.0/lookerex.png"
		},
	},

	"rarity" : 6,
	"role" : "Physical Strike",

	"pokemonType" : "Poison",
	"pokemonWeakness" : "Psychic",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Croagunk",
			"formName" : "",
			"stats" : {
				"hp" : 586,
				"atk" : 370,
				"def" : 141,
				"spa" : 370,
				"spd" : 141,
				"spe" : 240
			},
			"image" : "./v/v2.23.0/453.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Refreshing Water Guard",
				"description" : "Reduces damage when the user is attacked by Water-type moves. Restores the user’s HP whenever its Pokémon takes an action while the weather is rainy."
			},
			{
				"name" : "Superduper Effective 9",
				"description" : "Powers up moves that are super effective."
			},
			{
				"name" : "Toxic Chance 2",
				"description" : "Has a chance (30%) of leaving the target poisoned when a move targeting that opponent is successful."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Poison",
				"description" : ""
			},
			{
				"name" : "Sinnoh",
				"description" : ""
			},
			{
				"name" : "Veteran Trainer",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Pokemon",
				"name": "Poison Sting",
				"type": "Poison",
				"gauge": 1,
				"uses": 0,
				"category": "Physical",
				"power": "12",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
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
				"name": "Poison Jab",
				"type": "Poison",
				"gauge": 3,
				"uses": 0,
				"category": "Physical",
				"power": "92",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user": "Trainer",
				"name": "On the Case!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 1,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s Speed by 2 stat ranks. Applies the Supereffective ↑ Next effect to the user."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Hard-Boiled Poison Jab",
				"type" : "Poison",
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

export const COURTNEY_CAMERUPT = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.23.0/courtneybg.png",

	"trainer" : {
		"name" : "Courtney",
		"images" : {
			"base" : "./v/v2.23.0/courtney.png",
			"ex" : "./v/v2.23.0/courtneyex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Ground",
	"pokemonWeakness" : "Water",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Camerupt",
			"formName" : "",
			"stats" : {
				"hp" : 601,
				"atk" : 336,
				"def" : 182,
				"spa" : 336,
				"spd" : 182,
				"spe" : 196
			},
			"image" : "./v/v2.23.0/323.png"
		},
		{
			"name" : "Mega Camerupt",
			"formName" : "",
			"stats" : {
				"hp" : 601,
				"atk" : 403,
				"def" : 218,
				"spa" : 336,
				"spd" : 182,
				"spe" : 196
			},
			"image" : "./v/v2.23.0/323-m.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Defense Crush 2",
				"description" : "Has a chance (30%) of lowering the target’s Defense by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name" : "Chase Down 2",
				"description" : "Powers up the user’s moves when the target’s Speed is lowered."
			},
			{
				"name" : "Antifreeze",
				"description" : "Prevents the user from becoming frozen."
			}
		],
		"passives2" : [
			{
				"name" : "Defense Crush 9",
				"description" : "Lowers the target’s Defense by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name" : "Chase Down 5",
				"description" : "Powers up the user’s moves when the target’s Speed is lowered."
			},
			{
				"name" : "Antifreeze",
				"description" : "Prevents the user from becoming frozen."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Ground",
				"description" : ""
			},
			{
				"name" : "Hoenn",
				"description" : ""
			},
			{
				"name" : "Villain",
				"description" : ""
			},
			{
				"name" : "Battle Partner",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Pokemon",
				"name": "Bulldoze",
				"type": "Ground",
				"gauge": 3,
				"uses": 0,
				"category": "Physical",
				"power": "80",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Defense",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Ground Wish",
				"type": "Trainer",
				"gauge": 2,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Ground Zone. (A Ground Zone powers up Ground-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "Delete...",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 2 stat ranks. Raises the user’s Defense and critical-hit rate by 1 stat rank."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Analysis Complete Earthquake",
				"type" : "Ground",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "160",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Become Mega Camerupt until the end of battle. The more the user’s Defense is raised, the greater the power of this attack."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}