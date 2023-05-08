export const SERENA_GRENINJA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.27.0/cserenaBG.png",
	"trainer": {
		"name": "Serena (Champion)",
		"images": {
			"base": "./v/v2.27.0/cserena.png",
			"ex": "./v/v2.27.0/cserenaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Greninja",
			"formName": "Sync Move: Water",
			"stats": {
				"hp": "648",
				"atk": "468",
				"def": "185",
				"spa": "468",
				"spd": "185",
				"spe": "409"
			},
			"statsLVL150": {
				"hp": "678",
				"atk": "492",
				"def": "195",
				"spa": "492",
				"spd": "195",
				"spe": "431"
			},
			"image": "./v/v2.27.0/658.png"
		},
		{
			"name": "Greninja",
			"formName": "Sync Move: Dark",
			"stats": {
				"hp": "648",
				"atk": "468",
				"def": "185",
				"spa": "468",
				"spd": "185",
				"spe": "409"
			},
			"image": "./v/v2.27.0/658.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Dashing Dark Transformation",
				"description": "Replaces some of the user’s passive skills and sync move with different passive skills and a sync move just before using its Dark-type moves."
			},
			{
				"name": "No Quarter",
				"description": "Maximizes the number of times the user hits with a move that has the multistrike effect tag when that move is successful."
			},
			{
				"name": "Unfortunate Strike 9",
				"description": "Lowers one of the target’s following stats by one stat rank at random when the user’s attack move against it hits: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. If the move has the multistrike effect tag, lowers one of the target’s following stats by one stat rank at random for each hit: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			}
		],
		"passives2": [
			{
				"name": "Wondrous Water Transformation",
				"description": "Replaces some of the user’s passive skills and sync move with different passive skills and a sync move just before using its Water-type moves."
			},
			{
				"name": "Staggering 2",
				"description": "Has a chance (30%) of making the target flinch when the user’s attack move against it is successful."
			},
			{
				"name": "Discombobulate 9",
				"description": "Lowers the target’s accuracy by one stat rank when the user’s attack move against it is successful."
			}
		],
		"passivesMaster": [
			{
				"name": "Kalos Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kalos theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Water",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Water Shuriken",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "25-30",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Attacks the target two to five times in a row."
			},
			{
				"user": "Pokemon",
				"name": "Brutal Swing",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "50-60",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "(B Move) B Quick Attack",
				"type": "Normal",
				"gauge": "-",
				"uses": "2",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When any allies’ attack moves hit a total of 10 times while this move is deactivated.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the target’s Defense and Sp. Def by 2 stat ranks. Lowers the target’s Water Type Rebuff by 1 rank when the user’s sync move is Water type. Lowers the target’s Dark Type Rebuff by 1 rank when the user’s sync move is Dark type. Reduces the user’s sync move countdown by 1. Raises the Speed of all allied sync pairs by 3 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Glory of Tomorrow!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 2 stat ranks. Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Vivid Water Shuriken",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s stats have been lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [
			{
				"user": "Pokemon",
				"name": "Serious Night Slash",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s stats have been lowered, the greater the power of this attack."
			}
		],
		"movesMAX": []
	}
}

export const CALEM_GRENINJA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.27.0/ccalemBG.png",
	"trainer": {
		"name": "Calem (Champion)",
		"images": {
			"base": "./v/v2.27.0/ccalem.png",
			"ex": "./v/v2.27.0/ccalemEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Dark",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "(shiny) Greninja",
			"formName": "Sync Move: Dark",
			"stats": {
				"hp": "648",
				"atk": "137",
				"def": "307",
				"spa": "137",
				"spd": "293",
				"spe": "409"
			},
			"statsLVL150": {
				"hp": "678",
				"atk": "143",
				"def": "323",
				"spa": "143",
				"spd": "307",
				"spe": "431"
			},
			"image": "./v/v2.27.0/658-s.png"
		},
		{
			"name": "Greninja",
			"formName": "Sync Move: Water",
			"stats": {
				"hp": "648",
				"atk": "137",
				"def": "307",
				"spa": "137",
				"spd": "293",
				"spe": "409"
			},
			"image": "./v/v2.27.0/658-s.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Calm Fighter Water Transformation",
				"description": "Replaces some of the user’s passive skills and sync move with different passive skills and a sync move just before using its Water-type moves."
			},
			{
				"name": "Recharging Strike 9",
				"description": "Charges the user’s move gauge by one when its attack move hits. If the move has the multistrike effect tag, charges the user’s move gauge by one for each hit."
			},
			{
				"name": "Impervious",
				"description": "The user’s stats cannot be lowered."
			}
		],
		"passives2": [
			{
				"name": "Stoic Dark Transformation",
				"description": "Replaces some of the user’s passive skills and sync move with different passive skills and a sync move just before using its Dark-type moves."
			},
			{
				"name": "Restoring Strike 2",
				"description": "Has a chance (30%) of restoring the user’s HP when its attack move hits. If the move has the multistrike effect tag, has a chance (30%) of restoring the user’s HP for each hit."
			},
			{
				"name": "Status Immunity",
				"description": "Status conditions cannot be inflicted on the user."
			}
		],
		"passivesMaster": [
			{
				"name": "Kalos Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kalos theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Dark",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Scarf",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Brutal Swing",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "50-60",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "Water Shuriken",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "25-30",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Attacks the target two to five times in a row."
			},
			{
				"user": "Pokemon",
				"name": "(B Move) B Double Team",
				"type": "Normal",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When any allies’ attack moves hit a total of 10 times while this move is deactivated.(lb)Deactivation Condition: When this move is used.(lb)(lb)Raises the evasiveness of all allied sync pairs by 2 stat ranks. Increases the Physical Moves ↑ Next effect of all allied sync pairs by 2 ranks when the user’s sync move is Dark type. Turns the field of play’s zone into a Dark Zone when the user’s sync move is Dark type. (A Dark Zone powers up Dark-type attacks.) Increases the Special Moves ↑ Next effect of all allied sync pairs by 2 ranks when the user’s sync move is Water type. Makes the weather rainy when the user’s sync move is Water type."
			},
			{
				"user": "Trainer",
				"name": "Glory of Understanding!",
				"type": "Trainer",
				"gauge": "2",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the Attack of all allied sync pairs by 4 stat ranks. Raises the Sp. Atk and critical-hit rate of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shrouded Night Slash",
				"type": "Dark",
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
		"syncMove2": [
			{
				"user": "Pokemon",
				"name": "Unseen Water Shuriken",
				"type": "Water",
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
		"movesMAX": []
	}
}

export const SERENA_FLETCHLING = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Serena",
		"images": {
			"base": "./v/v2.27.0/serena.png",
			"ex": "./v/v2.27.0/serena.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Flying",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Fletchling",
			"formName": "",
			"stats": {
				"hp": "584",
				"atk": "351",
				"def": "164",
				"spa": "307",
				"spd": "156",
				"spe": "297"
			},
			"statsLVL150": {
				"hp": "610",
				"atk": "369",
				"def": "172",
				"spa": "323",
				"spd": "164",
				"spe": "313"
			},
			"image": "./v/v2.27.0/661.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Overwhelm 9",
				"description": "Lowers the target’s Attack by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Trip Up 9",
				"description": "Lowers the target’s Speed by 1 stat rank when the user’s attack move against the target is successful."
			},
			{
				"name": "Staggering 2",
				"description": "Has a chance (30%) of making the target flinch when the user’s attack move against it is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Flying",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Sunglasses",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Peck",
				"type": "Flying",
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
				"name": "Flame Charge",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "30-36",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the user’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Let’s Begin!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Physical Damage Reduction effect to the allied field of play. Raises the user’s Attack by 2 stat ranks. Raises the user’s evasiveness by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "First Flight Flying Impact",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Speed has been raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const JASMINE_AMHPAROS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.27.0/jasmineBG.png",
	"trainer": {
		"name": "Jasmine (Holiday 2022)",
		"images": {
			"base": "./v/v2.27.0/jasmine.png",
			"ex": "./v/v2.27.0/jasmineEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Ampharos",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "132",
				"def": "278",
				"spa": "171",
				"spd": "278",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "138",
				"def": "292",
				"spa": "179",
				"spd": "292",
				"spe": "297"
			},
			"image": "./v/v2.27.0/181.png"
		},
		{
			"name": "Mega Ampharos",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "132",
				"def": "333",
				"spa": "171",
				"spd": "333",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "138",
				"def": "350",
				"spa": "179",
				"spd": "350",
				"spe": "297"
			},
			"image": "./v/v2.27.0/181-m.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Endurance",
				"description": "When the user enters battle with full HP, applies the Enduring effect to it."
			},
			{
				"name": "Full-Bracing Command 9",
				"description": "Raises the user’s Defense and Sp. Def by 1 stat rank when its Trainer uses a move."
			},
			{
				"name": "Team Critical Command 9",
				"description": "Raises the critical-hit rate of all allied sync pairs by 1 stat rank when the user’s Trainer uses a move."
			}
		],
		"passives2": [
			{
				"name": "Debut Regen",
				"description": "Applies the Gradual Healing effect to the user the first time the user enters a battle each battle."
			},
			{
				"name": "Full-Bracing Command+ 9",
				"description": "Raises the user’s Defense and Sp. Def by 2 stat ranks when its Trainer uses a move."
			},
			{
				"name": "Team Critical Command 9",
				"description": "Raises the critical-hit rate of all allied sync pairs by 1 stat rank when the user’s Trainer uses a move."
			}
		],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Electric",
				"description": ""
			},
			{
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Pokéathlete",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Thunder Shock",
				"type": "Electric",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "17-20",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "Super Effective ↑",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Supereffective ↑ Next effect to an ally."
			},
			{
				"user": "Trainer",
				"name": "Potion",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Heals",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Comforting Light!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Defense and Sp. Def by 3 stat ranks. Applies the Gradual Healing effect to an ally. Applies the Enduring effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Snowy Night’s Guide Electric Beam",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Ampharos until the end of battle."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const WHITNEY_SAWSBUCK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.27.0/whitneyBG.png",
	"trainer": {
		"name": "Whitney (Holiday 2022)",
		"images": {
			"base": "./v/v2.27.0/whitney.png",
			"ex": "./v/v2.27.0/whitneyEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Sawsbuck",
			"formName": "Winter Form",
			"stats": {
				"hp": "654",
				"atk": "404",
				"def": "161",
				"spa": "224",
				"spd": "161",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "684",
				"atk": "426",
				"def": "169",
				"spa": "236",
				"spd": "169",
				"spe": "369"
			},
			"image": "./v/v2.27.0/586.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Verdant Defense Drain 9",
				"description": "Grants all of the following effects if the user’s attack move against the target is successful when the terrain is Grassy Terrain: Raises the Defense of all allied sync pairs by 1 stat rank. Lowers the Defense of all opposing sync pairs by 1 stat rank."
			},
			{
				"name": "Team Weird Sp. Def Drain 9",
				"description": "Grants all of the following effects if the user’s attack move against the target is successful when the terrain is Psychic Terrain: Raises the Sp. Def of all allied sync pairs by 1 stat rank. Lowers the Sp. Def of all opposing sync pairs by 1 stat rank."
			},
			{
				"name": "Team Charged Speed Drain 9",
				"description": "Grants all of the following effects if the user’s attack move against the target is successful when the terrain is Electric Terrain: Raises the Speed of all allied sync pairs by 1 stat rank. Lowers the Speed of all opposing sync pairs by 1 stat rank."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Normal",
				"description": ""
			},
			{
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Pokéathlete",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Headbutt",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "53-63",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Move Gauge Boost",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Charges the user’s move gauge by 3."
			},
			{
				"user": "Pokemon",
				"name": "Horn Leech",
				"type": "Grass",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "91-109",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
			},
			{
				"user": "Trainer",
				"name": "Fun Times!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Applies the Critical-Hit Defense effect to the allied field of play. Applies the Move Gauge Acceleration effect to the allied field of play. Turns the field of play’s terrain into Grassy Terrain if the remaining MP for the user’s Move Gauge Boost is 2 when this move is selected. Turns the field of play’s terrain into Psychic Terrain if the remaining MP for the user’s Move Gauge Boost is 1 when this move is selected. Turns the field of play’s terrain into Electric Terrain if the remaining MP for the user’s Move Gauge Boost is 0 when this move is selected."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Indomitable Happiness Normal Impact",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when a terrain is in effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}