export const DAWN_ORICORIO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.28.0/dawnBG.png",
	"trainer": {
		"name": "Dawn (New Year’s 2023)",
		"images": {
			"base": "./v/v2.28.0/dawn.png",
			"ex": "./v/v2.28.0/dawnEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Oricorio",
			"formName": "Sensu Style",
			"stats": {
				"hp": "639",
				"atk": "332",
				"def": "187",
				"spa": "380",
				"spd": "187",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "669",
				"atk": "350",
				"def": "197",
				"spa": "400",
				"spd": "197",
				"spe": "302"
			},
			"image": "./v/v2.28.0/741.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Stat Up ×2",
				"description": "When the user’s stat is raised, it is raised by double the stat ranks."
			},
			{
				"name": "Double Drop",
				"description": "When an opponent’s stat is lowered, it is lowered by double the stat ranks."
			},
			{
				"name": "Extra Special Ghost Damage",
				"description": "Deals additional damage to the target when the user’s Pokémon uses a move targeting that opponent. (Type: Ghost, Category: Special) This additional damage is not affected by some status changes."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Ghost",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Contest Lover",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Revelation Dance",
				"type": "Ghost",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "Feather Dance",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Attack by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Teeter Dance",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Leaves the target confused."
			},
			{
				"user": "Trainer",
				"name": "Perfect Dance!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Stat Reduction Defense effect to the allied field of play. Restores the user’s HP by approximately 40% of its maximum HP. Raises the user’s evasiveness by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Elegant Celebration Ghost Beam",
				"type": "Ghost",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s stats are raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LISIA_RAPIDASH = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.28.0/lisiaBG.png",
	"trainer": {
		"name": "Lisia (New Year’s 2023)",
		"images": {
			"base": "./v/v2.28.0/lisia.png",
			"ex": "./v/v2.28.0/lisiaEX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Rapidash",
			"formName": "Galarian Form",
			"stats": {
				"hp": "622",
				"atk": "404",
				"def": "134",
				"spa": "372",
				"spd": "135",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "652",
				"atk": "426",
				"def": "140",
				"spa": "392",
				"spd": "141",
				"spe": "355"
			},
			"image": "./v/v2.28.0/078-s.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Fairy Shift",
				"description": "Normal-type moves become Fairy-type moves."
			},
			{
				"name": "Super Sync 9",
				"description": "Applies the Supereffective ↑ Next effect to the user after using its sync move."
			},
			{
				"name": "Team Antitoxin",
				"description": "Prevents all allied sync pairs from getting poisoned or badly poisoned."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Fairy",
				"description": ""
			},
			{
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Artistic",
				"description": ""
			},
			{
				"name": "Contest Lover",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Quick Attack",
				"type": "Fairy",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "94-112",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Quick Move",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Dire Hit +",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Giga Impact",
				"type": "Fairy",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "223-267",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "A Battle Spectacular!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Speed by 4 stat ranks. Increases the user’s Physical Moves ↑ Next effect by zero to three ranks at random."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dream It, Be It Fairy Impact",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const KALI_AZUMARILL = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.28.0/kaliBG.png",
	"trainer": {
		"name": "Kali (Furisode Girl)",
		"images": {
			"base": "./v/v2.28.0/kali.png",
			"ex": "./v/v2.28.0/kali.png"
		}
	},
	"rarity": 3,
	"role": "Support",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Azumarill",
			"formName": "",
			"stats": {
				"hp": "549",
				"atk": "134",
				"def": "180",
				"spa": "134",
				"spd": "180",
				"spe": "249"
			},
			"statsLVL150": {
				"hp": "571",
				"atk": "140",
				"def": "188",
				"spa": "140",
				"spd": "188",
				"spe": "261"
			},
			"image": "./v/v2.28.0/184.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Quick Tempo",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user enters a battle each battle."
			},
			{
				"name": "Flameproof",
				"description": "Prevents the user from getting burned."
			},
			{
				"name": "Fire Guard",
				"description": "Reduces damage when the user is attacked by Fire-type moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Fairy",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Pigtails",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Draining Kiss",
				"type": "Fairy",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "46-55",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
			},
			{
				"user": "Trainer",
				"name": "X Defense All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Bubble Beam",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "49-58",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Strong and Stylish!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Atk of all allied sync pairs by 2 stat ranks. Raises the Sp. Def of all allied sync pairs by 1 stat rank. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Beautiful Design Fairy Beam",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const DAWN_WORMADAM = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Dawn",
		"images": {
			"base": "./v/v2.28.0/dawnL.png",
			"ex": "./v/v2.28.0/dawnL.png"
		}
	},
	"rarity": 4,
	"role": "Support",
	"pokemonType": "Bug",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Wormadam",
			"formName": "Plant Cloak",
			"stats": {
				"hp": "591",
				"atk": "157",
				"def": "201",
				"spa": "173",
				"spd": "231",
				"spe": "225"
			},
			"statsLVL150": {
				"hp": "619",
				"atk": "165",
				"def": "211",
				"spa": "181",
				"spd": "243",
				"spe": "237"
			},
			"image": "./v/v2.28.0/413.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Healthy Healing",
				"description": "Applies the Gradual Healing effect to the user when its HP is full when it enters a battle."
			},
			{
				"name": "Natural Remedy",
				"description": "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
			},
			{
				"name": "Move Gauge Refresh 4",
				"description": "Has a chance (50%) of charging the user’s move gauge by one when a move is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Bug",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Scarf",
				"description": ""
			},
			{
				"name": "Contest Lover",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Struggle Bug",
				"type": "Bug",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "30-36",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Sp. Atk. by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Sp. Atk All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Atk of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Giga Drain",
				"type": "Grass",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "91-109",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
			},
			{
				"user": "Trainer",
				"name": "Big Stretch!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Def and Speed of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Plant Power Bug Impact",
				"type": "Bug",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const DIANTHA_DIANCIE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.28.0/dianthaBG.png",
	"trainer": {
		"name": "Sygna Suit Diantha",
		"images": {
			"base": "./v/v2.28.0/diantha.png",
			"ex": "./v/v2.28.0/dianthaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Rock",
	"pokemonWeakness": "Steel",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Diancie",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "356",
				"def": "170",
				"spa": "312",
				"spd": "170",
				"spe": "270"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "374",
				"def": "178",
				"spa": "328",
				"spd": "178",
				"spe": "284"
			},
			"image": "./v/v2.28.0/719-s.png"
		},
		{
			"name": "Mega Diancie",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "427",
				"def": "204",
				"spa": "312",
				"spd": "170",
				"spe": "270"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "448",
				"def": "213",
				"spa": "328",
				"spd": "178",
				"spe": "284"
			},
			"image": "./v/v2.28.0/719-s-m.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Trip Wire 2",
				"description": "Lowers the Speed of all opposing sync pairs by 2 stat ranks when the user enters a battle."
			},
			{
				"name": "Honing Hit 9",
				"description": "Grants all of the following effects when the user’s move is successful: Raises the user’s Attack by 2 stat ranks. Raises the user’s critical-hit rate by 1 stat rank."
			},
			{
				"name": "Team Unbending",
				"description": "The Defense cannot be lowered for all allied sync pairs."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Rock",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Sygna Suit",
				"description": ""
			},
			{
				"name": "Artistic",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Rock Tomb",
				"type": "Rock",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "39-46",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Rock Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Rock Zone. (A Rock Zone powers up Rock-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(B move) B Diamond Storm",
				"type": "Rock",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "163-195",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the field of play’s zone turns into a Rock Zone.(lb)Deactivation Condition: When the field of play’s zone is no longer a Rock Zone.(lb)(lb)Lowers the target’s Defense by 2 stat ranks. Raises the Defense of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "The Curtain Rises!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. When the user’s Defense is raised, raises the user’s Sp. Def by the same amount. Applies the Gradual Healing effect to the user. If the user’s Diancie has Mega Evolved, also grants all of the following effects: Reduces the user’s sync move countdown by 1. Increases the user’s Physical Moves ↑ Next effect by 2 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Noble Beauty Diamond Storm",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Diancie until the end of battle. This attack’s power increases when the zone is a Rock Zone."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SHAUNA_CHESNAUGHT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.28.0/shaunaBG.png",
	"trainer": {
		"name": "Shauna",
		"images": {
			"base": "./v/v2.28.0/shauna.png",
			"ex": "./v/v2.28.0/shaunaEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Grass",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Chesnaught",
			"formName": "",
			"stats": {
				"hp": "733",
				"atk": "226",
				"def": "256",
				"spa": "336",
				"spd": "256",
				"spe": "243"
			},
			"statsLVL150": {
				"hp": "767",
				"atk": "238",
				"def": "268",
				"spa": "354",
				"spd": "268",
				"spe": "255"
			},
			"image": "./v/v2.28.0/652.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Dauntless Defender 9",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 1 stat rank when the user nullifies an opponent’s move while in a defensive posture."
			},
			{
				"name": "Block and Charge 3",
				"description": "Charges the user’s move gauge by 3 when it nullifies an opponent’s move while in a defensive posture."
			},
			{
				"name": "Sync Burst 1",
				"description": "Restores 1 MP for the user the first time its sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Grass",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Pigtails",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Vine Whip",
				"type": "Grass",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "20-24",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Mini Potion All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "Heals",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "Spiky Shield",
				"type": "Grass",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies moves when hit while in this defensive posture, then the user leaves the defensive posture. If the move was a physical attack move, deals damage to the opponent that used it. (Type: Grass, Category: Physical)"
			},
			{
				"user": "Trainer",
				"name": "Off We Go!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Thorny Needle Arm",
				"type": "Grass",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}