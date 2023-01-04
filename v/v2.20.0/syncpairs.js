export const MORTY_HOOH = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.20.0/ssmortybg.png",

	"trainer" : {
		"name" : "Sygna Suit Morty",
		"images" : {
			"base" : "./v/v2.20.0/ssmorty.png",
			"ex" : "./v/v2.20.0/ssmortyex.png"
		},
	},

	"rarity" : 6,
	"role" : "Support",

	"pokemonType" : "Fire",
	"pokemonWeakness" : "Electric",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "(shiny) Ho-Oh",
			"formName" : "",
			"stats" : {
				"hp" : 689,
				"atk" : 200,
				"def" : 322,
				"spa" : 156,
				"spd" : 322,
				"spe" : 227
			},
			"image" : "./v/v2.20.0/250.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Group Afflicter’s Advantage 1",
				"description" : "Raises the Attack, Defense, Sp. Atk, Sp. Def, and Speed of all allied sync pairs by 1 stat rank the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name" : "Team Sunbathe 9",
				"description" : "Restores the HP of all allied sync pairs when the user uses a move while the weather is sunny."
			},
			{
				"name" : "Sync Damage Guard",
				"description" : "Applies the Damage Guard Next effect to the user the first time its sync move is used each battle."
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
				"name" : "Johto",
				"description" : ""
			},
			{
				"name" : "Gym Leader",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Supernatural",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Flame Charge",
				"type" : "Fire",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Physical",
				"power" : "30",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Raises the user’s Speed by 1 stat rank."
			},
			{
				"user" : "Trainer",
				"name" : "Potion",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "An ally",
				"effect" : "-",
				"description" : "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user" : "Pokemon",
				"name" : "Sunny Day",
				"type" : "Fire",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Entire field",
				"effect" : "-",
				"description" : "Makes the weather sunny."
			},
			{
				"user" : "Trainer",
				"name" : "Believe!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Allied side",
				"effect" : "-",
				"description" : "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the Defense, Sp. Def, and Speed of all allied sync pairs by 1 stat rank. In addition, raises the critical-hit rate of all allied sync pairs by 1 stat rank when the weather is sunny."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Rainbow-Hued Sacred Fire",
				"type" : "Fire",
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

export const AARON_VESPIQUEN = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.20.0/aaronbg.png",

	"trainer" : {
		"name" : "Aaron",
		"images" : {
			"base" : "./v/v2.20.0/aaron.png",
			"ex" : "./v/v2.20.0/aaronex.png"
		},
	},

	"rarity" : 6,
	"role" : "Support",

	"pokemonType" : "Bug",
	"pokemonWeakness" : "Ice",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Vespiquen",
			"formName" : "",
			"stats" : {
				"hp" : 666,
				"atk" : 210,
				"def" : 269,
				"spa" : 210,
				"spd" : 269,
				"spe" : 271
			},
			"image" : "./v/v2.20.0/416.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Stat Share 9",
				"description" : "When a status move used by the user’s Pokémon raises its stats only, raises the same stats by the same amount for all allied sync pairs instead."
			},
			{
				"name" : "Group Shared Healing 1",
				"description" : "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP when the user uses a move that has the heal effect tag."
			},
			{
				"name" : "Move Gauge Refresh 4",
				"description" : "Has a chance (50%) of charging the user’s move gauge by one when a move is successful."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Bug",
				"description" : ""
			},
			{
				"name" : "Sinnoh",
				"description" : ""
			},
			{
				"name" : "Elite Four",
				"description" : ""
			},
			{
				"name" : "Nature Lover",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user" : "Pokemon",
				"name" : "Attack Order",
				"type" : "Bug",
				"gauge" : 3,
				"uses" : 0,
				"category" : "Physical",
				"power" : "80",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Critical hits land more easily."
			},
			{
				"user" : "Pokemon",
				"name" : "Heal Order",
				"type" : "Bug",
				"gauge" : 1,
				"uses" : 1,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Restores the user’s HP by approximately 50% of its maximum HP."
			},
			{
				"user" : "Pokemon",
				"name" : "Defend Order",
				"type" : "Bug",
				"gauge" : 1,
				"uses" : 0,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Raises the user’s Defense and Sp. Def by 1 stat rank."
			},
			{
				"user" : "Trainer",
				"name" : "Cool, Right?!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "All allies",
				"effect" : "-",
				"description" : "Raises the Attack of all allied sync pairs by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 1 stat rank. Applies the Gradual Healing effect to the user."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Perfect Swarm Attack Order",
				"type" : "Bug",
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

export const BERTHA_HIPPOWDON = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.20.0/berthabg.png",

	"trainer" : {
		"name" : "Bertha",
		"images" : {
			"base" : "./v/v2.20.0/bertha.png",
			"ex" : "./v/v2.20.0/berthaex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Ground",
	"pokemonWeakness" : "Grass",
	"pokemonGender" : "Female",

	"pokemon" : [
		{
			"name" : "Hippowdon",
			"formName" : "",
			"stats" : {
				"hp" : 681,
				"atk" : 351,
				"def" : 202,
				"spa" : 240,
				"spd" : 202,
				"spe" : 241
			},
			"image" : "./v/v2.20.0/450.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Sand Summoner",
				"description" : "Causes a sandstorm the first time the user enters a battle each battle. Protects the user from damage from a sandstorm."
			},
			{
				"name" : "Sand Slinger 9",
				"description" : "Lowers the target’s Attack by one stat rank when the user’s attack move against it is successful during a sandstorm."
			},
			{
				"name" : "Pokey Trap 5",
				"description" : "Increases the amount of damage an opponent takes from being trapped."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Ground",
				"description" : ""
			},
			{
				"name" : "Sinnoh",
				"description" : ""
			},
			{
				"name" : "Elite Four",
				"description" : ""
			},
			{
				"name" : "Scarf",
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
				"user" : "Pokemon",
				"name" : "Sand Tomb",
				"type" : "Ground",
				"gauge" : 2,
				"uses" : 0,
				"category" : "Physical",
				"power" : "38",
				"accuracy" : "85",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Leaves the target trapped."
			},
			{
				"user" : "Pokemon",
				"name" : "Stealth Rock",
				"type" : "Rock",
				"gauge" : 2,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Opponents’ side",
				"effect" : "-",
				"description" : "Applies the Rock Damage Field effect to the opponents’ field of play. (Rock Damage Field: The sync pairs will take Rock-type damage whenever they take an action.)"
			},
			{
				"user" : "Pokemon",
				"name" : "Sandstorm",
				"type" : "Rock",
				"gauge" : 2,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Entire field",
				"effect" : "-",
				"description" : "Causes a sandstorm."
			},
			{
				"user" : "Trainer",
				"name" : "Quite Something!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "All allies",
				"effect" : "-",
				"description" : "Raises the user’s Defense and Sp. Def by 1 stat rank. Raises the critical-hit rate of all allied sync pairs by 1 stat rank. In addition, raises the Defense and Sp. Def of all allied sync pairs by 1 stat rank during a sandstorm."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Team Effort Earthquake",
				"type" : "Ground",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "This attack’s power increases during a sandstorm."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const LUCIAN_GIRAFARIG = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.20.0/lucianbg.png",

	"trainer" : {
		"name" : "Lucian",
		"images" : {
			"base" : "./v/v2.20.0/lucian.png",
			"ex" : "./v/v2.20.0/lucianex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Psychic",
	"pokemonWeakness" : "Dark",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Girafarig",
			"formName" : "",
			"stats" : {
				"hp" : 599,
				"atk" : 273,
				"def" : 181,
				"spa" : 380,
				"spd" : 181,
				"spe" : 300
			},
			"image" : "./v/v2.20.0/203.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Stupefy 9",
				"description" : "Lowers the target’s Sp. Def by one stat rank when a move targeting that opponent is successful."
			},
			{
				"name" : "Team Viral Hustle 9",
				"description" : "Raises the Speed of all allied sync pairs by one stat rank when the user’s Pokémon uses a status move."
			},
			{
				"name" : "Pecking Order",
				"description" : "The more the target’s Attack is lowered, the more it powers up the user’s sync moves."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Psychic",
				"description" : ""
			},
			{
				"name" : "Sinnoh",
				"description" : ""
			},
			{
				"name" : "Elite Four",
				"description" : ""
			},
			{
				"name" : "Glasses",
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
				"name" : "Confusion",
				"type" : "Psychic",
				"gauge" : 1,
				"uses" : 0,
				"category" : "Special",
				"power" : "18",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Has a chance (10%) of leaving the target confused."
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
				"target" : "Sef",
				"effect" : "-",
				"description" : "Raises the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user" : "Pokemon",
				"name" : "Growl",
				"type" : "Normal",
				"gauge" : 1,
				"uses" : 0,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "100",
				"target" : "All opponents",
				"effect" : "-",
				"description" : "Lowers the target’s Attack by 1 stat rank."
			},
			{
				"user" : "Trainer",
				"name" : "Read It and Weep!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 2,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Raises the user’s Defense and Sp. Def by 1 stat rank. Raises the user’s critical-hit rate by 2 stat ranks. Applies the Gradual Healing effect to the user."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Psychic Epilogue",
				"type" : "Psychic",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "The more the target’s Sp. Def is lowered, the greater the power of this attack."
			}
		],

		"moves2" : [],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const GIOVANNI_NIDOKING = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.20.0/ssgiovannibg.png",

	"trainer" : {
		"name" : "Sygna Suit Giovanni",
		"images" : {
			"base" : "./v/v2.20.0/ssgiovanni.png",
			"ex" : "./v/v2.20.0/ssgiovanniex.png"
		},
	},

	"rarity" : 6,
	"role" : "Physical Strike",

	"pokemonType" : "Ground",
	"pokemonWeakness" : "Psychic",
	"pokemonGender" : "Male",

	"pokemon" : [
		{
			"name" : "Nidoking",
			"formName" : "",
			"stats" : {
				"hp" : 633,
				"atk" : 375,
				"def" : 133,
				"spa" : 224,
				"spd" : 133,
				"spe" : 295
			},
			"image" : "./v/v2.20.0/034.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Giovanni’s Cunning",
				"description" : "Normal-type moves become Ground-type moves. Moves never miss."
			},
			{
				"name" : "MAX Double Down 5",
				"description" : "Powers up the user’s max moves that are super effective."
			},
			{
				"name" : "Hit the Gas 5",
				"description" : "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves."
			}
		],
		"passives2" : [],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Ground",
				"description" : ""
			},
			{
				"name" : "Johto",
				"description" : ""
			},
			{
				"name" : "Villain",
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
				"name" : "Mega Kick",
				"type" : "Ground",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Physical",
				"power" : "250",
				"accuracy" : "75",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "No additional effect."
			},
			{
				"user" : "Pokemon",
				"name" : "Iron Tail",
				"type" : "Steel",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Physical",
				"power" : "198",
				"accuracy" : "75",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Has a chance (30%) of lowering the target’s Defense by 1 stat rank."
			},
			{
				"user" : "Pokemon",
				"name" : "Poison Jab",
				"type" : "Poison",
				"gauge" : 4,
				"uses" : 0,
				"category" : "Physical",
				"power" : "138",
				"accuracy" : "100",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user" : "Trainer",
				"name" : "World of Pain!",
				"type" : "Trainer",
				"gauge" : 0,
				"uses" : 1,
				"category" : "Status",
				"power" : "-",
				"accuracy" : "-",
				"target" : "Self",
				"effect" : "-",
				"description" : "Raises the user’s Attack by 6 stat ranks. Applies the Critical Hit Next effect to the user. Applies the Supereffective ↑ Next effect to the user."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Unstoppable Ambition Ground Impact",
				"type" : "Ground",
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

		"movesMAX" : [
			{
				"user" : "Pokemon",
				"name" : "Max Quake",
				"type" : "Ground",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "400",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
			},
			{
				"user" : "Pokemon",
				"name" : "Max Steelspike",
				"type" : "Steel",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "400",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Raises the Defense of all allied sync pairs by 2 stat ranks."
			},
			{
				"user" : "Pokemon",
				"name" : "Max Ooze",
				"type" : "Poison",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Physical",
				"power" : "400",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "Raises the Sp. Atk of all allied sync pairs by 2 stat ranks."
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
			}]
	}
}