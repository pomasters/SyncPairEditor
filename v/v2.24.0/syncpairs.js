export const ASH_PIKACHU = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.24.0/ashbg.png",
	"trainer": {
		"name": "Ash",
		"images": {
			"base": "./v/v2.24.0/ash.png",
			"ex": "./v/v2.24.0/ashex.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pikachu",
			"formName": "",
			"stats": {
				"hp": "719",
				"atk": "288",
				"def": "155",
				"spa": "487",
				"spd": "155",
				"spe": "271"
			},
			"statsLVL150": {
				"hp": "753",
				"atk": "302",
				"def": "163",
				"spa": "513",
				"spd": "163",
				"spe": "285"
			},
			"image": "./v/v2.24.0/025.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ash’s Passion",
				"description": "Powers up the user’s Thunder. Decreases the amount of move gauge slots the user needs to use Thunder by 1. The user’s Thunder never misses."
			},
			{
				"name": "Ash’s Tenacity",
				"description": "When the user enters battle with full HP, applies the Enduring effect to it. When the user’s Enduring effect activates for the first time and the user has 1 HP remaining, applies the Enduring effect to the user again."
			},
			{
				"name": "Initial Pinch Special Boost 2",
				"description": "Increases the user’s Special Moves ↑ Next effect by 2 ranks the first time it is in a pinch each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Kanto Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kanto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Electric",
				"description": ""
			},
			{
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Pallet Town",
				"description": ""
			},
			{
				"name": "Passionate Spirit",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Thunder",
				"type": "Electric",
				"gauge": "2",
				"uses": "--",
				"category": "Special",
				"power": "161-192",
				"accuracy": "70",
				"target": "An opponent",
				"effect": "-",
				"description": "Never misses when the weather is rainy. Has a chance (30%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "Not Gonna Lose!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 20% of its maximum HP. Charges the user’s move gauge by 6. Applies the Gradual Healing effect to the user. Applies the Supereffective ↑ Next effect to the user. Applies the Damage Guard Next effect to the user."
			},
			{
				"user": "Pokemon",
				"name": "(B move) B Thunderbolt",
				"type": "Electric",
				"gauge": "--",
				"uses": "1",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Quick Move(lb)Sure Hit",
				"description": "Activation Condition: When the user uses any moves three times.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Uses a maximum of 6 slots of the user’s move gauge. The more amount used, the greater the power of this attack."
			},
			{
				"user": "Trainer",
				"name": "Going All Out!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. In addition, raises the user’s Sp. Atk and Speed by 2 stat ranks when the user’s remaining HP is at half or more."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Best Buds 10,000,000 Volt Thunderbolt",
				"type": "Electric",
				"gauge": "--",
				"uses": "--",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Except in certain circumstances, successful hits with this attack become critical hits."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const CYNTHIA_LUCARIO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.24.0/sscynthia3bg.png",
	"trainer": {
		"name": "Sygna Suit Cynthia (Aura)",
		"images": {
			"base": "./v/v2.24.0/sscynthia3.png",
			"ex": "./v/v2.24.0/sscynthia3ex.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Lucario",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "237",
				"def": "307",
				"spa": "326",
				"spd": "307",
				"spe": "286"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "249",
				"def": "323",
				"spa": "344",
				"spd": "323",
				"spe": "300"
			},
			"image": "./v/v2.24.0/448.png"
		},
		{
			"name": "Mega Lucario",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "237",
				"def": "368",
				"spa": "326",
				"spd": "368",
				"spe": "286"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "249",
				"def": "387",
				"spa": "344",
				"spd": "387",
				"spe": "300"
			},
			"image": "./v/v2.24.0/448-m.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Cynthia’s Aura",
				"description": "Turns the field of play’s zone into a Fighting Zone the first time the user enters a battle each battle. Turns the field of play’s zone into a Fighting Zone after using the user’s sync move. (A Fighting Zone powers up Fighting-type attacks.)"
			},
			{
				"name": "Team Fist Bump 3",
				"description": "Has a chance (40%) of restoring the HP of all allied sync pairs when the user’s attack move is successful."
			},
			{
				"name": "Initial Guard",
				"description": "Applies the Damage Guard Next effect to the user when it enters a battle."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Sinnoh Flag Bearer",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Sinnoh theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],
		"themes": [
			{
				"name": "Fighting",
				"description": ""
			},
			{
				"name": "Sinnoh",
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
				"name": "Passionate Spirit",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Vacuum Wave",
				"type": "Fighting",
				"gauge": "1",
				"uses": "--",
				"category": "Special",
				"power": "20-24",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Potion",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Heals",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "(B move) B Aura Sphere",
				"type": "Fighting",
				"gauge": "--",
				"uses": "2",
				"category": "Special",
				"power": "70-84",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user is hit by an attack move twice.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Applies the Move Gauge Acceleration effect to the allied field of play. Increases the Physical Moves ↑ Next effect of all allied sync pairs by 2 ranks. Increases the Special Moves ↑ Next effect of all allied sync pairs by 2 ranks."
			},
			{
				"user": "Trainer",
				"name": "It Won’t End Here!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 4 stat ranks. These stats are raised by 6 stat ranks instead when the zone is a Fighting Zone."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Learn by Battle Aura Sphere",
				"type": "Fighting",
				"gauge": "--",
				"uses": "--",
				"category": "Special",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Lucario until the end of battle."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const RED_PIKACHU = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.24.0/ssred2bg.png",
	"trainer": {
		"name": "Sygna Suit Red (Thunderbolt)",
		"images": {
			"base": "./v/v2.24.0/ssred2.png",
			"ex": "./v/v2.24.0/ssred2ex.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pikachu",
			"formName": "",
			"stats": {
				"hp": "694",
				"atk": "336",
				"def": "190",
				"spa": "336",
				"spd": "190",
				"spe": "402"
			},
			"statsLVL150": {
				"hp": "726",
				"atk": "354",
				"def": "200",
				"spa": "354",
				"spd": "200",
				"spe": "422"
			},
			"image": "./v/v2.24.0/025.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Red’s Fighting Spirit",
				"description": "Extends the duration of Electric Terrain when the terrain turns into Electric Terrain while the user is on the field. Quickly charges the move gauge when the terrain is Electric Terrain. Restores the user’s HP whenever its Pokémon takes an action when the terrain is Electric Terrain."
			},
			{
				"name": "Clutch Critical",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves, sync move, or max moves."
			},
			{
				"name": "MAX Countdown 3",
				"description": "Reduces the user’s sync move countdown by 3 after using its max move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Kanto Flag Bearer",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Kanto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],
		"themes": [
			{
				"name": "Electric",
				"description": ""
			},
			{
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Sygna Suit",
				"description": ""
			},
			{
				"name": "Pallet Town",
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
				"uses": "--",
				"category": "Special",
				"power": "17-20",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target paralyzed."
			},
			{
				"user": "Pokemon",
				"name": "Electric Terrain",
				"type": "Electric",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Electric Terrain."
			},
			{
				"user": "Pokemon",
				"name": "(B move) B Volt Tackle",
				"type": "Electric",
				"gauge": "2",
				"uses": "--",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the field of play’s terrain turns into Electric Terrain.(lb)Deactivation Condition: When the field of play’s terrain is no longer Electric Terrain.(lb)(lb)Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. The power of this move is not lowered even if there are multiple targets. Lowers the target’s Defense and Sp. Def by 1 stat rank when the target is paralyzed."
			},
			{
				"user": "Trainer",
				"name": "Spark of Victory!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s Attack by 6 stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Lightning-Fast Volt Tackle",
				"type": "Electric",
				"gauge": "--",
				"uses": "--",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the terrain is Electric Terrain."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "G-Max Volt Crash",
				"type": "Electric",
				"gauge": "--",
				"uses": "--",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves all opposing sync pairs paralyzed."
			},
			{
				"user": "Pokemon",
				"name": "Max Guard",
				"type": "Normal",
				"gauge": "--",
				"uses": "--",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Damage Guard Next effect to an ally."
			},
			{
				"user": "Pokemon",
				"name": "G-Max Volt Crash",
				"type": "Electric",
				"gauge": "--",
				"uses": "--",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves all opposing sync pairs paralyzed."
			},
			{
				"user": "",
				"name": "",
				"type": "",
				"gauge": "",
				"uses": "",
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


export const BLUE_EXEGGUTOR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Blue",
		"images": {
			"base": "./v/v2.24.0/blue.png",
			"ex": "./v/v2.24.0/blue.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Grass",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Exeggutor",
			"formName": "",
			"stats": {
				"hp": "576",
				"atk": "127",
				"def": "229",
				"spa": "119",
				"spd": "200",
				"spe": "294"
			},
			"statsLVL150": {
				"hp": "602",
				"atk": "133",
				"def": "241",
				"spa": "125",
				"spd": "210",
				"spe": "310"
			},
			"image": "./v/v2.24.0/103.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Posthaste 4",
				"description": "Has a chance (50%) of raising the user’s Speed by two stat ranks when it is hit by an attack move."
			},
			{
				"name": "Speeding Sun 2",
				"description": "Quickly charges the move gauge when the weather is sunny."
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
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Pallet Town",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Seed Bomb",
				"type": "Grass",
				"gauge": "3",
				"uses": "--",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "X Attack All",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Stomp",
				"type": "Normal",
				"gauge": "2",
				"uses": "--",
				"category": "Physical",
				"power": "53-63",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Know What That Means?!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 1 stat rank. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Knock Ya Down Grass Impact",
				"type": "Grass",
				"gauge": "--",
				"uses": "--",
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

export const SILVER_FERALIGATR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Silver",
		"images": {
			"base": "./v/v2.24.0/silver.png",
			"ex": "./v/v2.24.0/silver.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Feraligatr",
			"formName": "",
			"stats": {
				"hp": "588",
				"atk": "312",
				"def": "158",
				"spa": "239",
				"spd": "160",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "614",
				"atk": "328",
				"def": "166",
				"spa": "251",
				"spd": "168",
				"spe": "298"
			},
			"image": "./v/v2.24.0/160.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Aggravation 1",
				"description": "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
			},
			{
				"name": "Hostile Environment 2",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
			},
			{
				"name": "On a Roll 3",
				"description": "Raises the chance of lowering stat values with the additional effects of moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Water",
				"description": ""
			},
			{
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Battle Partner",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Waterfall",
				"type": "Water",
				"gauge": "2",
				"uses": "--",
				"category": "Physical",
				"power": "45-54",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Pokemon",
				"name": "Ice Punch",
				"type": "Ice",
				"gauge": "2",
				"uses": "--",
				"category": "Physical",
				"power": "46-55",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target frozen."
			},
			{
				"user": "Pokemon",
				"name": "Liquidation",
				"type": "Water",
				"gauge": "3",
				"uses": "--",
				"category": "Physical",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of lowering the target’s Defense by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "You’ll See!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s Speed by 2 stat ranks. Raises the user’s critical-hit rate by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Whirls of Solitude Water Impact",
				"type": "Water",
				"gauge": "--",
				"uses": "--",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Defense is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MAY_WAILMER = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "May",
		"images": {
			"base": "./v/v2.24.0/may.png",
			"ex": "./v/v2.24.0/may.png"
		}
	},
	"rarity": "4+ex",
	"role": "Special Strike",
	"pokemonType": "Water",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Wailmer",
			"formName": "",
			"stats": {
				"hp": "668",
				"atk": "224",
				"def": "99",
				"spa": "312",
				"spd": "120",
				"spe": "241"
			},
			"statsLVL150": {
				"hp": "698",
				"atk": "236",
				"def": "103",
				"spa": "328",
				"spd": "126",
				"spe": "253"
			},
			"image": "./v/v2.24.0/320.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Healthy Healing",
				"description": "Applies the Gradual Healing effect to the user when its HP is full when it enters a battle."
			},
			{
				"name": "Superduper Effective 5",
				"description": "Powers up moves that are super effective."
			},
			{
				"name": "Flameproof",
				"description": "Prevents the user from getting burned."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Water",
				"description": ""
			},
			{
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Space Cadet",
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
				"name": "Brine",
				"type": "Water",
				"gauge": "2",
				"uses": "--",
				"category": "Special",
				"power": "38-45",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power is doubled when the target’s remaining HP is at half or below."
			},
			{
				"user": "Trainer",
				"name": "X Sp. Atk",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Surf",
				"type": "Water",
				"gauge": "3",
				"uses": "--",
				"category": "Special",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Bouncy Feelings!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by 2 stat ranks. Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Big Ol’ Splash Water Beam",
				"type": "Water",
				"gauge": "--",
				"uses": "--",
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

export const CYNTHIA_GASTRODON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Cynthia",
		"images": {
			"base": "./v/v2.24.0/cynthia.png",
			"ex": "./v/v2.24.0/cynthia.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Ground",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Gastrodon",
			"formName": "West Sea",
			"stats": {
				"hp": "576",
				"atk": "176",
				"def": "224",
				"spa": "166",
				"spd": "234",
				"spe": "242"
			},
			"statsLVL150": {
				"hp": "602",
				"atk": "184",
				"def": "236",
				"spa": "174",
				"spd": "246",
				"spe": "254"
			},
			"image": "./v/v2.24.0/423.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Healthy Healing",
				"description": "Applies the Gradual Healing effect to the user when its HP is full when it enters a battle."
			},
			{
				"name": "Group Water Guard",
				"description": "Reduces the damage all allied sync pairs take when attacked by Water-type moves."
			},
			{
				"name": "Move Gauge Refresh 2",
				"description": "Has a chance (30%) of charging the user’s move gauge by one when a move is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Ground",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Undella Town",
				"description": ""
			},
			{
				"name": "Researcher",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Earthquake",
				"type": "Ground",
				"gauge": "3",
				"uses": "--",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Dire Hit All +",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Rock Tomb",
				"type": "Rock",
				"gauge": "2",
				"uses": "--",
				"category": "Physical",
				"power": "39-46",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Don’t Worry!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the Sp. Def of all allied sync pairs by 2 stat ranks. Raises the accuracy of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Living Relic Ground Impact",
				"type": "Ground",
				"gauge": "--",
				"uses": "--",
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

export const N_SIGILYPH = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "N",
		"images": {
			"base": "./v/v2.24.0/n.png",
			"ex": "./v/v2.24.0/n.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Sigilyph",
			"formName": "",
			"stats": {
				"hp": "609",
				"atk": "312",
				"def": "142",
				"spa": "370",
				"spd": "142",
				"spe": "269"
			},
			"statsLVL150": {
				"hp": "637",
				"atk": "328",
				"def": "148",
				"spa": "390",
				"spd": "148",
				"spe": "283"
			},
			"image": "./v/v2.24.0/561.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "On a Roll 4",
				"description": "Raises the chance of lowering stat values with the additional effects of moves."
			},
			{
				"name": "Charging Infliction 1",
				"description": "Charges the user’s move gauge by 1 when its Pokémon uses a status move."
			},
			{
				"name": "Ramming Speed",
				"description": "The more the user’s Speed is raised, the more it powers up the user’s moves."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Villain",
				"description": ""
			},
			{
				"name": "Unova Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Psychic",
				"type": "Psychic",
				"gauge": "3",
				"uses": "--",
				"category": "Special",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by 1 stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Hypnosis",
				"type": "Psychic",
				"gauge": "2",
				"uses": "--",
				"category": "Status",
				"power": "-",
				"accuracy": "75",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
			},
			{
				"user": "Pokemon",
				"name": "Calm Mind",
				"type": "Psychic",
				"gauge": "2",
				"uses": "--",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk and Sp. Def by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Power of the Ages!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Speed by 4 stat ranks. Raises the user’s critical-hit rate by 2 stat ranks. Applies the Enduring effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Steadfast Memories Psychic Beam",
				"type": "Psychic",
				"gauge": "--",
				"uses": "--",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Sp. Def is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ROSA_DEWOTT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Rosa",
		"images": {
			"base": "./v/v2.24.0/rosa.png",
			"ex": "./v/v2.24.0/rosa.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Dewott",
			"formName": "",
			"stats": {
				"hp": "549",
				"atk": "356",
				"def": "147",
				"spa": "307",
				"spd": "149",
				"spe": "300"
			},
			"statsLVL150": {
				"hp": "753",
				"atk": "99",
				"def": "220",
				"spa": "124",
				"spd": "292",
				"spe": "206"
			},
			"image": "./v/v2.24.0/502.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			},
			{
				"name": "On a Roll 1",
				"description": "Raises the chance of lowering stat values with the additional effects of moves."
			},
			{
				"name": "Power Reserves 4",
				"description": "Powers up the user’s moves when in a pinch."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Water",
				"description": ""
			},
			{
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Pigtails",
				"description": ""
			},
			{
				"name": "Unova Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Aqua Jet",
				"type": "Water",
				"gauge": "--",
				"uses": "3",
				"category": "Physical",
				"power": "75-90",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Quick Move",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "X Attack",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Razor Shell",
				"type": "Water",
				"gauge": "3",
				"uses": "--",
				"category": "Physical",
				"power": "103-123",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (50%) of lowering the target’s Defense by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Let It Flow!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s accuracy by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Entirely Exuberant Water Impact",
				"type": "Water",
				"gauge": "--",
				"uses": "--",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Defense is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const PROFESSOR_SYCAMORE_BULBASAUR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Professor Sycamore",
		"images": {
			"base": "./v/v2.24.0/profsycamore.png",
			"ex": "./v/v2.24.0/profsycamore.png"
		}
	},
	"rarity": "4+ex",
	"role": "Special Strike",
	"pokemonType": "Grass",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Bulbasaur",
			"formName": "",
			"stats": {
				"hp": "568",
				"atk": "200",
				"def": "117",
				"spa": "268",
				"spd": "117",
				"spe": "270"
			},
			"statsLVL150": {
				"hp": "594",
				"atk": "210",
				"def": "123",
				"spa": "282",
				"spd": "123",
				"spe": "284"
			},
			"image": "./v/v2.24.0/001.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Impervious",
				"description": "Stats cannot be lowered."
			},
			{
				"name": "Toxic Power 3",
				"description": "Powers up the user’s moves when the target is poisoned or badly poisoned."
			},
			{
				"name": "Ramming Speed",
				"description": "The more the user’s Speed is raised, the more it powers up the user’s moves."
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
				"name": "Knowledgeable",
				"description": ""
			},
			{
				"name": "Researcher",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Leaf Storm",
				"type": "Grass",
				"gauge": "3",
				"uses": "--",
				"category": "Special",
				"power": "136-163",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "X Sp. Atk",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Sludge Bomb",
				"type": "Poison",
				"gauge": "3",
				"uses": "--",
				"category": "Special",
				"power": "92-110",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user": "Trainer",
				"name": "Shall We Start?",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Def, Speed, and critical-hit rate by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Bon Voyage Grass Beam",
				"type": "Grass",
				"gauge": "--",
				"uses": "--",
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

export const LILLIE_COMFEY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Lillie",
		"images": {
			"base": "./v/v2.24.0/lilie.png",
			"ex": "./v/v2.24.0/lilie.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Comfey",
			"formName": "",
			"stats": {
				"hp": "581",
				"atk": "336",
				"def": "167",
				"spa": "336",
				"spd": "167",
				"spe": "240"
			},
			"statsLVL150": {
				"hp": "607",
				"atk": "354",
				"def": "175",
				"spa": "354",
				"spd": "175",
				"spe": "252"
			},
			"image": "./v/v2.24.0/863.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Overwhelm 9",
				"description": "Lowers the target’s Attack by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Synchro Healing 1",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP after using the user’s sync move."
			},
			{
				"name": "Natural Remedy",
				"description": "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Fancy Lady",
				"description": ""
			},
			{
				"name": "Alola Adventurer",
				"description": ""
			},
			{
				"name": "Battle Partner",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Dazzling Gleam",
				"type": "Fairy",
				"gauge": "2",
				"uses": "--",
				"category": "Special",
				"power": "50-60",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "Wrap",
				"type": "Normal",
				"gauge": "2",
				"uses": "--",
				"category": "Physical",
				"power": "39-46",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target trapped."
			},
			{
				"user": "Pokemon",
				"name": "Petal Blizzard",
				"type": "Grass",
				"gauge": "3",
				"uses": "--",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Get Comfy!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by 2 stat ranks. Applies the Free Move Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Vibrant Fairy Beam",
				"type": "Fairy",
				"gauge": "--",
				"uses": "--",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Attack is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MARNIE_TOXICROAK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Marnie",
		"images": {
			"base": "./v/v2.24.0/marnie.png",
			"ex": "./v/v2.24.0/marnie.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Poison",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Toxicroak",
			"formName": "",
			"stats": {
				"hp": "583",
				"atk": "292",
				"def": "150",
				"spa": "370",
				"spd": "140",
				"spe": "287"
			},
			"statsLVL150": {
				"hp": "611",
				"atk": "308",
				"def": "158",
				"spa": "390",
				"spd": "146",
				"spe": "301"
			},
			"image": "./v/v2.24.0/454-f.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hostile Environment 4",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
			},
			{
				"name": "Obscuring Power 3",
				"description": "Powers up the user’s moves when the target’s accuracy is lowered."
			},
			{
				"name": "Antitoxin",
				"description": "Prevents the user from getting poisoned or badly poisoned."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Poison",
				"description": ""
			},
			{
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Pigtails",
				"description": ""
			},
			{
				"name": "Fancy Lady",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Mud-Slap",
				"type": "Ground",
				"gauge": "1",
				"uses": "--",
				"category": "Special",
				"power": "13-15",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s accuracy by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Sp. Atk",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Sludge Wave",
				"type": "Poison",
				"gauge": "3",
				"uses": "--",
				"category": "Special",
				"power": "97-116",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target poisoned."
			},
			{
				"user": "Trainer",
				"name": "Shut Your Gob!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by 3 stat ranks. Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Get You Goin’ Poison Beam",
				"type": "Poison",
				"gauge": "--",
				"uses": "--",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s accuracy is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}


export const PLAYER_MESPRIT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Player",
		"images": {
			"base": "./images/trainer_bettie.png",
			"ex": "./images/trainer_scottie.png"
		}
	},
	"rarity": 5,
	"role": "Support",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Dark",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Mesprit",
			"formName": "",
			"stats": {
				"hp": "646",
				"atk": "166",
				"def": "231",
				"spa": "210",
				"spd": "231",
				"spe": "290"
			},
			"statsLVL150": {
				"hp": "676",
				"atk": "174",
				"def": "243",
				"spa": "220",
				"spd": "243",
				"spe": "304"
			},
			"image": "./v/v2.24.0/481.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Freevenge 9",
				"description": "Applies the Free Move Next effect to the user when it is hit by an attack move."
			},
			{
				"name": "Entry Freebie",
				"description": "Applies the Free Move Next effect to the user when it enters a battle."
			},
			{
				"name": "Synchro Healing 1",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP after using the user’s sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Psychic Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Psychic theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"themes": [
			{
				"name": "Psychic",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
			  "user":  "Pokemon",
			  "name":  "Confusion",
			  "type":  "Psychic",
			  "gauge":  1,
			  "uses":  0,
			  "category":  "Special",
			  "power":  "18-21",
			  "accuracy":  "100",
			  "target":  "An opponent",
			  "effect":  "-",
			  "description":  "Has a chance (10%) of leaving the target confused."
			},
			{
			  "user":  "Pokemon",
			  "name":  "Reflect",
			  "type":  "Psychic",
			  "gauge":  3,
			  "uses":  2,
			  "category":  "Status",
			  "power":  "-",
			  "accuracy":  "-",
			  "target":  "Allied side",
			  "effect":  "-",
			  "description":  "Applies the Physical Damage Reduction effect to the allied field of play."
			},
			{
			  "user":  "Pokemon",
			  "name":  "Light Screen",
			  "type":  "Psychic",
			  "gauge":  3,
			  "uses":  2,
			  "category":  "Status",
			  "power":  "-",
			  "accuracy":  "-",
			  "target":  "Allied side",
			  "effect":  "-",
			  "description":  "Applies the Special Damage Reduction effect to the allied field of play."
			},
			{
			  "user":  "Trainer",
			  "name":  "Curious Empathy!",
			  "type":  "Trainer",
			  "gauge":  0,
			  "uses":  2,
			  "category":  "Status",
			  "power":  "-",
			  "accuracy":  "-",
			  "target":  "All allies",
			  "effect":  "-",
			  "description":  "Raises the Sp. Atk of all allied sync pairs by 2 stat ranks. Raises the Speed of all allied sync pairs by 1 stat rank. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Every Emotion Psychic Beam",
				"type": "Psychic",
				"gauge": "--",
				"uses": "--",
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

export const NITA_LANDORUS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.24.0/nitabg.png",
	"trainer": {
		"name": "Nita",
		"images": {
			"base": "./v/v2.24.0/nita.png",
			"ex": "./v/v2.24.0/nita.png"
		}
	},
	"rarity": 5,
	"role": "Support",
	"pokemonType": "Ground",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Landorus",
			"formName": "Incarnate Forme",
			"stats": {
				"hp": "683",
				"atk": "151",
				"def": "251",
				"spa": "151",
				"spd": "230",
				"spe": "271"
			},
			"statsLVL150": {
				"hp": "715",
				"atk": "159",
				"def": "263",
				"spa": "159",
				"spd": "242",
				"spe": "285"
			},
			"image": "./v/v2.24.0/645-i.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ridicure 1",
				"description": "Has a chance (20%) of restoring the user’s HP by approximately 20% of its maximum HP when an opponent’s attack move targeting the user misses."
			},
			{
				"name": "Quick Combo 3",
				"description": "Has a chance (40%) of restoring one MP for the user’s moves with a quick move effect tag when its attack move is successful."
			},
			{
				"name": "Natural Remedy",
				"description": "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Ground Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Ground theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"themes": [
			{
				"name": "Ground",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
				"description": ""
			},
			{
				"name": "Battle Partner",
				"description": ""
			},
			{
				"name": "Free Spirit",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Fly",
				"type": "Flying",
				"gauge": "--",
				"uses": "3",
				"category": "Physical",
				"power": "169-202",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "The user begins flying. After a set time, the user stops flying and attacks. No other actions can be taken while flying. Most moves used by opponents will not hit the user while it is flying. If the user is hit by a sync move or max move while flying, it will stop flying."
			},
			{
				"user": "Trainer",
				"name": "Mini Potion All",
				"type": "Trainer",
				"gauge": "--",
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
				"name": "Bulldoze",
				"type": "Ground",
				"gauge": "3",
				"uses": "--",
				"category": "Physical",
				"power": "80-96",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "How Are Ya?",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Speed of all allied sync pairs by 4 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Spunky Sis Ground Impact",
				"type": "Ground",
				"gauge": "--",
				"uses": "--",
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

export const JANINE_CROBAT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Janine",
		"images": {
			"base": "./v/v2.24.0/janine.png",
			"ex": "./v/v2.24.0/janine.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Poison",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Crobat",
			"formName": "",
			"stats": {
				"hp": "587",
				"atk": "190",
				"def": "208",
				"spa": "190",
				"spd": "212",
				"spe": "346"
			},
			"statsLVL150": {
				"hp": "613",
				"atk": "200",
				"def": "218",
				"spa": "200",
				"spd": "222",
				"spe": "364"
			},
			"image": "./v/v2.24.0/169.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Fast-Track 4",
				"description": "Has a chance (50%) of raising the user’s Speed by one stat rank after its Pokémon uses a move."
			},
			{
				"name": "Recuperation 1",
				"description": "Restores the user’s HP by approximately 20% of its maximum HP after using its sync move."
			},
			{
				"name": "Unflappable",
				"description": "Prevents the user from flinching."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Poison",
				"description": ""
			},
			{
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "Poison Fang",
				"type": "Poison",
				"gauge": "2",
				"uses": "--",
				"category": "Physical",
				"power": "34-40",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (50%) of leaving the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "X Attack All",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Venoshock",
				"type": "Poison",
				"gauge": "2",
				"uses": "--",
				"category": "Special",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power is doubled when the target is poisoned or badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "See Through THIS!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Atk of all allied sync pairs by 2 stat ranks. Raises the Speed and evasiveness of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shadow-Slinking Poison Beam",
				"type": "Poison",
				"gauge": "--",
				"uses": "--",
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

export const CANDICE_FROSLASS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Candice",
		"images": {
			"base": "./v/v2.24.0/candice.png",
			"ex": "./v/v2.24.0/candice.png"
		}
	},
	"rarity": "4+ex",
	"role": "Special Strike",
	"pokemonType": "Ice",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Froslass",
			"formName": "",
			"stats": {
				"hp": "550",
				"atk": "229",
				"def": "116",
				"spa": "268",
				"spd": "119",
				"spe": "275"
			},
			"statsLVL150": {
				"hp": "574",
				"atk": "241",
				"def": "122",
				"spa": "282",
				"spd": "125",
				"spe": "289"
			},
			"image": "./v/v2.24.0/478.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Invigorating Hail 5",
				"description": "Powers up the user’s moves during a hailstorm."
			},
			{
				"name": "Hasty Hail 2",
				"description": "Quickly charges the move gauge during a hailstorm."
			},
			{
				"name": "Snow Shelter",
				"description": "Protects the user from damage from a hailstorm."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Ice",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Pigtails",
				"description": ""
			},
			{
				"name": "Battleground Foe",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Blizzard",
				"type": "Ice",
				"gauge": "3",
				"uses": "--",
				"category": "Special",
				"power": "126-151",
				"accuracy": "70",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses during a hailstorm. Has a chance (10%) of leaving the target frozen."
			},
			{
				"user": "Trainer",
				"name": "Dire Hit +",
				"type": "Trainer",
				"gauge": "--",
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
				"name": "Hail",
				"type": "Ice",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Causes a hailstorm."
			},
			{
				"user": "Trainer",
				"name": "Get Ready!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks. Raises the user’s accuracy by 1 stat rank. Raises the user’s evasiveness by 2 stat ranks during a hailstorm."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Spine-Chilling Frost Beam",
				"type": "Ice",
				"gauge": "--",
				"uses": "--",
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

export const CLEMONT_MAGNETON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Clemont",
		"images": {
			"base": "./v/v2.24.0/clemont.png",
			"ex": "./v/v2.24.0/clemont.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Magneton",
			"formName": "",
			"stats": {
				"hp": "557",
				"atk": "176",
				"def": "228",
				"spa": "171",
				"spd": "228",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "583",
				"atk": "184",
				"def": "240",
				"spa": "179",
				"spd": "240",
				"spe": "354"
			},
			"image": "./v/v2.24.0/082.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Endurance",
				"description": "When the user enters battle with full HP, applies the Enduring effect to it."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			},
			{
				"name": "Lithe",
				"description": "Prevents the user from getting paralyzed."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Electric",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Glasses",
				"description": ""
			},
			{
				"name": "Gadgeteer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Spark",
				"type": "Electric",
				"gauge": "2",
				"uses": "--",
				"category": "Physical",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "X Accuracy All",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the accuracy of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Screech",
				"type": "Normal",
				"gauge": "2",
				"uses": "--",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Defense by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Eureka!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Thanks to Science Electric Impact",
				"type": "Electric",
				"gauge": "--",
				"uses": "--",
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

export const SOPHOCLES_ALOLANGOLEM = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Sophocles",
		"images": {
			"base": "./v/v2.24.0/sophocles.png",
			"ex": "./v/v2.24.0/sophocles.png"
		}
	},
	"rarity": "4+ex",
	"role": "Physical Strike",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Golem",
			"formName": "Alolan Form",
			"stats": {
				"hp": "762",
				"atk": "414",
				"def": "112",
				"spa": "229",
				"spd": "112",
				"spe": "243"
			},
			"statsLVL150": {
				"hp": "798",
				"atk": "436",
				"def": "118",
				"spa": "241",
				"spd": "118",
				"spe": "255"
			},
			"image": "./v/v2.24.0/076-a.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Lithe",
				"description": "Prevents the user from getting paralyzed."
			},
			{
				"name": "Standfast 9",
				"description": "Reduces recoil damage received from using moves that have recoil in the effect tag."
			},
			{
				"name": "Last Word",
				"description": "The user uses Explosion immediately before fainting."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Electric",
				"description": ""
			},
			{
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Trial Giver",
				"description": ""
			},
			{
				"name": "Gadgeteer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Wild Charge",
				"type": "Electric",
				"gauge": "3",
				"uses": "--",
				"category": "Physical",
				"power": "125-150",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Recoil",
				"description": "The user also takes 20% of the damage it dealt to the target."
			},
			{
				"user": "Trainer",
				"name": "Dire Hit +",
				"type": "Trainer",
				"gauge": "--",
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
				"name": "Iron Defense",
				"type": "Steel",
				"gauge": "2",
				"uses": "--",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Power...On!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Full-Throttle Electric Impact",
				"type": "Electric",
				"gauge": "--",
				"uses": "--",
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


export const ROSA_SHAYMIN = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.24.0/scrosabg.png",
	"trainer": {
		"name": "Rosa  (Special Costume)",
		"images": {
			"base": "./v/v2.24.0/scrosa.png",
			"ex": "./v/v2.24.0/scrosaex.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Grass",
	"pokemonWeakness": "Poison",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Shaymin",
			"formName": "Sky Forme",
			"stats": {
				"hp": "674",
				"atk": "224",
				"def": "191",
				"spa": "312",
				"spd": "191",
				"spe": "476"
			},
			"statsLVL150": {
				"hp": "706",
				"atk": "236",
				"def": "201",
				"spa": "328",
				"spd": "201",
				"spe": "500"
			},
			"image": "./v/v2.24.0/492-s.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "On a Roll 1",
				"description": "Raises the chance of lowering stat values with the additional effects of moves."
			},
			{
				"name": "Shuddering Snarl 9",
				"description": "Lowers the target’s Sp. Atk by 2 stat ranks when the user’s Pokémon uses a move targeting that opponent."
			},
			{
				"name": "Power Loving",
				"description": "The more the target’s stats are lowered, the more it powers up the user’s moves."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Special Costume",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Sweet Scent",
				"type": "Normal",
				"gauge": "2",
				"uses": "--",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s evasiveness by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Potion",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Heals",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "Seed Flare",
				"type": "Grass",
				"gauge": "4",
				"uses": "--",
				"category": "Special",
				"power": "185-222",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (40%) of lowering the target’s Sp. Def by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Gift of Gratitude!",
				"type": "Trainer",
				"gauge": "2",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s accuracy and critical-hit rate by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Grass Beam of Gratitude",
				"type": "Grass",
				"gauge": "--",
				"uses": "--",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Sp. Def is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const NAOMI_SANDSLASH = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.24.0/naomibg.png",
	"trainer": {
		"name": "Naomi (Sightseer)",
		"images": {
			"base": "./v/v2.24.0/naomi.png",
			"ex": "./v/v2.24.0/naomi.png"
		}
	},
	"rarity": 3,
	"role": "Special Strike",
	"pokemonType": "Ground",
	"pokemonWeakness": "Water",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Sandslash",
			"formName": "",
			"stats": {
				"hp": "489",
				"atk": "182",
				"def": "93",
				"spa": "337",
				"spd": "93",
				"spe": "295"
			},
			"statsLVL150": {
				"hp": "509",
				"atk": "190",
				"def": "97",
				"spa": "353",
				"spd": "97",
				"spe": "309"
			},
			"image": "./v/v2.24.0/028.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sand Shelter",
				"description": "Protects the user from damage from a sandstorm."
			},
			{
				"name": "Surging Sand 5",
				"description": "Powers up the user’s moves during a sandstorm."
			},
			{
				"name": "Sand Blaster 5",
				"description": "Powers up the user’s sync move during a sandstorm."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Ground",
				"description": ""
			},
			{
				"name": "Alola",
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
				"name": "Mud Shot",
				"type": "Ground",
				"gauge": "2",
				"uses": "--",
				"category": "Special",
				"power": "39-46",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Sp. Atk",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Earth Power",
				"type": "Ground",
				"gauge": "3",
				"uses": "--",
				"category": "Special",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Vacation Vibes!",
				"type": "Trainer",
				"gauge": "--",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Speed by 2 stat ranks. Raises the user’s critical-hit rate by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Must-See Ground Beam",
				"type": "Ground",
				"gauge": "--",
				"uses": "--",
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