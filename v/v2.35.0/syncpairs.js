export const LEON_DRAGAPULT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.35.0/leonBG.png",
	"trainer": {
		"name": "Leon (Alt.)",
		"images": {
			"base": "./v/v2.35.0/leon.png",
			"ex": "./v/v2.35.0/leonEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Dragapult",
			"formName": "",
			"stats": {
				"hp": "681",
				"atk": "424",
				"def": "174",
				"spa": "336",
				"spd": "174",
				"spe": "492"
			},
			"statsLVL150": {
				"hp": "713",
				"atk": "446",
				"def": "182",
				"spa": "354",
				"spd": "182",
				"spe": "518"
			},
			"image": "./v/v2.35.0/0887.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Piercing Blows",
				"description": "Grants all of the following effects when the user is attacking: Ignores the target’s passive skills that would reduce the damage of attacks. Ignores the target’s passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
			},
			{
				"name": "Unfortunate Strike 9",
				"description": "Lowers one of the target’s following stats by one stat rank at random when the user’s attack move against it hits: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. If the move has the multistrike effect tag, lowers one of the target’s following stats by one stat rank at random for each hit: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"name": "Impervious",
				"description": "The user’s stats cannot be lowered."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Dragon",
				"description": ""
			},
			{
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
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
				"name": "Dragon Darts",
				"type": "Dragon",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Attacks twice in a row."
			},
			{
				"user": "Pokemon",
				"name": "Will-O-Wisp",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target burned."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Breaking Swipe",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "120-144",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Attack, Defense, and Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Let’s Have a Blast!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s Speed by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Rise to the Peak Dragon Impact",
				"type": "Dragon",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s stats are lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Wyrmwind",
				"type": "Dragon",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the Attack of all opposing sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Max Guard",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Damage Guard Next effect to an ally."
			},
			{
				"user": "Pokemon",
				"name": "Max Wyrmwind",
				"type": "Dragon",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the Attack of all opposing sync pairs by 2 stat ranks."
			},
			{
				"user": "",
				"name": "",
				"type": "",
				"gauge": "",
				"uses": "",
				"category": "",
				"power": "",
				"accuracy": "-",
				"target": "",
				"effect": "",
				"description": ""
			}
		]
	}
}

export const CALEM_FENNEKIN = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Calem",
		"images": {
			"base": "./v/v2.35.0/calem.png",
			"ex": "./v/v2.35.0/calem.png"
		}
	},
	"rarity": "4+ex",
	"role": "Special Strike",
	"pokemonType": "Fire",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Fennekin",
			"formName": "",
			"stats": {
				"hp": "603",
				"atk": "224",
				"def": "111",
				"spa": "312",
				"spd": "119",
				"spe": "267"
			},
			"statsLVL150": {
				"hp": "631",
				"atk": "236",
				"def": "117",
				"spa": "328",
				"spd": "125",
				"spe": "281"
			},
			"image": "./v/v2.35.0/0653.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Superduper Effective 5",
				"description": "Powers up moves that are super effective."
			},
			{
				"name": "Super Interference 4",
				"description": "Raises the chance of inflicting status conditions—as well as inflicting the flinching, confused, or trapped condition—with the additional effects of the user’s moves."
			},
			{
				"name": "Healthy Superhit",
				"description": "Applies the Supereffective ↑ Next effect to the user if its HP is full when it enters a battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Fire",
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
				"name": "Heat Wave",
				"type": "Fire",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "109-130",
				"accuracy": "90",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Trainer",
				"name": "X Sp. Atk",
				"type": "Trainer",
				"gauge": "-",
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
				"name": "Psybeam",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "48-57",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target confused."
			},
			{
				"user": "Trainer",
				"name": "Battle Beside You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s accuracy by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks. Applies the Free Move Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Friendly Rivalry Fire Beam",
				"type": "Fire",
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

export const GLORIA_CINDERACE_FIRE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.35.0/gloriaBG.png",
	"trainer": {
		"name": "Gloria (Alt. 2)",
		"images": {
			"base": "./v/v2.35.0/gloria.png",
			"ex": "./v/v2.35.0/gloriaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Cinderace",
			"formName": "Sync Move: Fire",
			"stats": {
				"hp": "650",
				"atk": "370",
				"def": "185",
				"spa": "200",
				"spd": "185",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "390",
				"def": "195",
				"spa": "210",
				"spd": "195",
				"spe": "351"
			},
			"image": "./v/v2.35.0/0815.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Pasio’s Ace",
				"description": "Lowers the opponent’s Type Rebuff by 2 ranks after the user uses its max move. The Type Rebuff lowered is the same type as the max move used. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Airstream. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Knuckle."
			},
			{
				"name": "Fuel Economy 2",
				"description": "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by 2."
			},
			{
				"name": "Brawn Sync 5",
				"description": "Powers up the user’s sync move when its Attack is raised."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Fire",
				"description": ""
			},
			{
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Passionate Spirit",
				"description": ""
			},
			{
				"name": "Galar Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Pyro Ball",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "172-206",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Ok While Frozen",
				"description": "Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Pokemon",
				"name": "Bounce",
				"type": "Flying",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "182-218",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "The user begins bouncing. After a set time, the user stops bouncing and attacks. Has a chance (30%) of leaving the target paralyzed. No other actions can be taken while bouncing. Most moves used by opponents will not hit the user while it is bouncing. If the user is attacked by a sync move or max move while bouncing, it will stop bouncing."
			},
			{
				"user": "Pokemon",
				"name": "High Jump Kick",
				"type": "Fighting",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "135-162",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Recoil",
				"description": "When it fails, the user takes damage equal to 50% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Kickoff!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s evasiveness by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ace of the Team Fire Impact",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target’s Type Rebuff is lowered."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max G-Max Fireball",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "450-540",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit."
			},
			{
				"user": "Pokemon",
				"name": "Max Airstream",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Max Knuckle",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks."
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

export const GLORIA_CINDERACE_FLYING = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.35.0/gloriaBG.png",
	"trainer": {
		"name": "Gloria (Alt. 2)",
		"images": {
			"base": "./v/v2.35.0/gloria.png",
			"ex": "./v/v2.35.0/gloriaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Cinderace",
			"formName": "Sync Move: Fire",
			"stats": {
				"hp": "650",
				"atk": "370",
				"def": "185",
				"spa": "200",
				"spd": "185",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "390",
				"def": "195",
				"spa": "210",
				"spd": "195",
				"spe": "351"
			},
			"image": "./v/v2.35.0/0815.png"
		},
		{
			"name": "Cinderace",
			"formName": "Sync Move: Flying",
			"stats": {
				"hp": "650",
				"atk": "370",
				"def": "185",
				"spa": "200",
				"spd": "185",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "390",
				"def": "195",
				"spa": "210",
				"spd": "195",
				"spe": "351"
			},
			"image": "./v/v2.35.0/0815.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Pasio’s Ace",
				"description": "Lowers the opponent’s Type Rebuff by 2 ranks after the user uses its max move. The Type Rebuff lowered is the same type as the max move used. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Airstream. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Knuckle."
			},
			{
				"name": "Fuel Economy 2",
				"description": "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by 2."
			},
			{
				"name": "Brawn Sync 5",
				"description": "Powers up the user’s sync move when its Attack is raised."
			}
		],
		"passives2": [
			{
				"name": "Pasio’s Ace",
				"description": "Lowers the opponent’s Type Rebuff by 2 ranks after the user uses its max move. The Type Rebuff lowered is the same type as the max move used. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Airstream. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Knuckle."
			},
			{
				"name": "Piercing Blows",
				"description": "Grants all of the following effects when the user is attacking: Ignores the target’s passive skills that would reduce the damage of attacks. Ignores the target’s passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
			},
			{
				"name": "“Quick Move”: Sync CD ↓2 9",
				"description": "Reduces the user’s sync move countdown by 2 when it uses a move that has the quick move effect tag."
			}
		],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Fire",
				"description": ""
			},
			{
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Passionate Spirit",
				"description": ""
			},
			{
				"name": "Galar Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Pyro Ball",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "172-206",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Ok While Frozen",
				"description": "Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Pokemon",
				"name": "Bounce",
				"type": "Flying",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "182-218",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "The user begins bouncing. After a set time, the user stops bouncing and attacks. Has a chance (30%) of leaving the target paralyzed. No other actions can be taken while bouncing. Most moves used by opponents will not hit the user while it is bouncing. If the user is attacked by a sync move or max move while bouncing, it will stop bouncing."
			},
			{
				"user": "Pokemon",
				"name": "High Jump Kick",
				"type": "Fighting",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "135-162",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Recoil",
				"description": "When it fails, the user takes damage equal to 50% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Kickoff!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s evasiveness by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ace of the Team Fire Impact",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target’s Type Rebuff is lowered."
			}
		],
		"moves2": [
			{
				"user": "Pokemon",
				"name": "Pyro Ball",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "172-206",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Ok While Frozen",
				"description": "Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Pokemon",
				"name": "Bounce",
				"type": "Flying",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "182-218",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "The user begins bouncing. After a set time, the user stops bouncing and attacks. Has a chance (30%) of leaving the target paralyzed. No other actions can be taken while bouncing. Most moves used by opponents will not hit the user while it is bouncing. If the user is attacked by a sync move or max move while bouncing, it will stop bouncing."
			},
			{
				"user": "Pokemon",
				"name": "High Jump Kick",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "135-162",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Recoil",
				"description": "When it fails, the user takes damage equal to 50% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Kickoff!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s evasiveness by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove2": [
				{
					"user": "Pokemon",
					"name": "A Taste of My Skill Flying Impact",
					"type": "Flying",
					"gauge": "-",
					"uses": "-",
					"category": "Physical",
					"power": "200-240",
					"accuracy": "-",
					"target": "An opponent",
					"effect": "-",
					"description": "This attack’s power increases when the target’s Type Rebuff is lowered."
				}
			],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max G-Max Fireball",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "450-540",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit."
			},
			{
				"user": "Pokemon",
				"name": "Max Airstream",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Max Knuckle",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks."
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

export const GLORIA_CINDERACE_FIGHTING = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.35.0/gloriaBG.png",
	"trainer": {
		"name": "Gloria (Alt. 2)",
		"images": {
			"base": "./v/v2.35.0/gloria.png",
			"ex": "./v/v2.35.0/gloriaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Cinderace",
			"formName": "Sync Move: Fire",
			"stats": {
				"hp": "650",
				"atk": "370",
				"def": "185",
				"spa": "200",
				"spd": "185",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "390",
				"def": "195",
				"spa": "210",
				"spd": "195",
				"spe": "351"
			},
			"image": "./v/v2.35.0/0815.png"
		},
		{
			"name": "Cinderace",
			"formName": "Sync Move: Fighting",
			"stats": {
				"hp": "650",
				"atk": "370",
				"def": "185",
				"spa": "200",
				"spd": "185",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "390",
				"def": "195",
				"spa": "210",
				"spd": "195",
				"spe": "351"
			},
			"image": "./v/v2.35.0/0815.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Pasio’s Ace",
				"description": "Lowers the opponent’s Type Rebuff by 2 ranks after the user uses its max move. The Type Rebuff lowered is the same type as the max move used. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Airstream. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Knuckle."
			},
			{
				"name": "Fuel Economy 2",
				"description": "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by 2."
			},
			{
				"name": "Brawn Sync 5",
				"description": "Powers up the user’s sync move when its Attack is raised."
			}
		],
		"passives2": [
			{
				"name": "Pasio’s Ace",
				"description": "Lowers the opponent’s Type Rebuff by 2 ranks after the user uses its max move. The Type Rebuff lowered is the same type as the max move used. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Airstream. Replaces some of the user’s passive skills and sync move with different passive skills and a sync move after using its Max Knuckle."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
			},
			{
				"name": "HP Recovery (M) 9",
				"description": "Restores the user’s HP when its attack move is successful."
			}
		],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Fire",
				"description": ""
			},
			{
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Passionate Spirit",
				"description": ""
			},
			{
				"name": "Galar Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Pyro Ball",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "172-206",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Ok While Frozen",
				"description": "Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Pokemon",
				"name": "Bounce",
				"type": "Flying",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "182-218",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "The user begins bouncing. After a set time, the user stops bouncing and attacks. Has a chance (30%) of leaving the target paralyzed. No other actions can be taken while bouncing. Most moves used by opponents will not hit the user while it is bouncing. If the user is attacked by a sync move or max move while bouncing, it will stop bouncing."
			},
			{
				"user": "Pokemon",
				"name": "High Jump Kick",
				"type": "Fighting",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "135-162",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Recoil",
				"description": "When it fails, the user takes damage equal to 50% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Kickoff!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s evasiveness by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ace of the Team Fire Impact",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target’s Type Rebuff is lowered."
			}
		],
		"moves2": [
			{
				"user": "Pokemon",
				"name": "Pyro Ball",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "172-206",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Ok While Frozen",
				"description": "Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Pokemon",
				"name": "Bounce",
				"type": "Flying",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "182-218",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "The user begins bouncing. After a set time, the user stops bouncing and attacks. Has a chance (30%) of leaving the target paralyzed. No other actions can be taken while bouncing. Most moves used by opponents will not hit the user while it is bouncing. If the user is attacked by a sync move or max move while bouncing, it will stop bouncing."
			},
			{
				"user": "Pokemon",
				"name": "High Jump Kick",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "135-162",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Recoil",
				"description": "When it fails, the user takes damage equal to 50% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Kickoff!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s evasiveness by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove2": [
				{
					"user": "Pokemon",
					"name": "Score a Victory Fighting Impact",
					"type": "Fighting",
					"gauge": "-",
					"uses": "-",
					"category": "Physical",
					"power": "200-240",
					"accuracy": "-",
					"target": "An opponent",
					"effect": "-",
					"description": "This attack’s power increases when the target’s Type Rebuff is lowered."
				}
			],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max G-Max Fireball",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "450-540",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit."
			},
			{
				"user": "Pokemon",
				"name": "Max Airstream",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Max Knuckle",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks."
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

export const OLYMPIA_SIGILYPH = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.35.0/olympiaBG.png",
	"trainer": {
		"name": "Olympia",
		"images": {
			"base": "./v/v2.35.0/olympia.png",
			"ex": "./v/v2.35.0/olympiaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Sigilyph",
			"formName": "",
			"stats": {
				"hp": "653",
				"atk": "224",
				"def": "155",
				"spa": "390",
				"spd": "155",
				"spe": "310"
			},
			"statsLVL150": {
				"hp": "683",
				"atk": "236",
				"def": "163",
				"spa": "410",
				"spd": "163",
				"spe": "326"
			},
			"image": "./v/v2.35.0/0561.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Agile Entry 6",
				"description": "Raises the user’s evasiveness by 6 stat ranks when it enters a battle."
			},
			{
				"name": "Swag Bag 2",
				"description": "Raises the chance of raising stat values with the additional effects of moves."
			},
			{
				"name": "P-Move Stat Raises ×2",
				"description": "When an ally’s stat is raised by a move used by the user’s Pokémon, it is raised by double the stat ranks."
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
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Supernatural",
				"description": ""
			},
			{
				"name": "Cape",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Stored Power",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "13-15",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s stats are raised, the greater the power of this attack."
			},
			{
				"user": "Pokemon",
				"name": "Calm Mind",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk and Sp. Def by 1 stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Ancient Power",
				"type": "Rock",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "47-56",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of raising the user’s Attack, Defense, Sp. Atk, Sp. Def, and Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "An Opportunity!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Stat Reduction Defense effect to the allied field of play. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Starlight Path Psychic",
				"type": "Psychic",
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

export const DRASNA_DRAGALGE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.35.0/drasnaBG.png",
	"trainer": {
		"name": "Drasna",
		"images": {
			"base": "./v/v2.35.0/drasna.png",
			"ex": "./v/v2.35.0/drasnaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Dragalge",
			"formName": "",
			"stats": {
				"hp": "637",
				"atk": "224",
				"def": "157",
				"spa": "414",
				"spd": "212",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "667",
				"atk": "236",
				"def": "165",
				"spa": "436",
				"spd": "222",
				"spe": "351"
			},
			"image": "./v/v2.35.0/0691.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Superduper Effective 5",
				"description": "Powers up moves that are super effective."
			},
			{
				"name": "Super Freebie 9",
				"description": "Applies the Free Move Next effect to the user when its move is super effective."
			},
			{
				"name": "Team Sp. Atk ↓ Immunity",
				"description": "The Sp. Atk cannot be lowered for all allied sync pairs."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Dragon",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Elite Four",
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
				"name": "Draco Meteor",
				"type": "Dragon",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "136-163",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Sludge Bomb",
				"type": "Poison",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "92-110",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user": "Pokemon",
				"name": "Toxic",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "Simply Charming!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s critical-hit rate by 2 stat ranks. Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Infinite Smile Dragon Pulse",
				"type": "Dragon",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is poisoned or badly poisoned."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const NEMONA_PAWMOT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.35.0/nemonaBG.png",
	"trainer": {
		"name": "Nemona",
		"images": {
			"base": "./v/v2.35.0/nemona.png",
			"ex": "./v/v2.35.0/nemonaEX.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"pokemonType": "Electric",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pawmot",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "468",
				"def": "176",
				"spa": "200",
				"spd": "157",
				"spe": "448"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "492",
				"def": "184",
				"spa": "210",
				"spd": "165",
				"spe": "472"
			},
			"image": "./v/v2.35.0/0923.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Honing Hit 9",
				"description": "Grants all of the following effects when the user’s move is successful: Raises the user’s Attack by 2 stat ranks. Raises the user’s critical-hit rate by 1 stat rank."
			},
			{
				"name": "Soften Up 1",
				"description": "Critical hits land more easily when the user attacks with a sync move."
			},
			{
				"name": "1st S-Move: Restore B-Move MP 1",
				"description": "Restores 1 MP of the user’s buddy move the first time its sync move is used each battle."
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
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Champion",
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
				"name": "Thunder Punch",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "47-56",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "EX Speed",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Speed by 6 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Double Shock",
				"type": "Electric",
				"gauge": "-",
				"uses": "1",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Quick Move",
				"description": "Activation Condition: When the user’s Speed is raised.(lb)Deactivation Condition: When the user’s Speed is not raised.(lb)(lb)The more the user’s Speed is raised, the greater the power of this attack. Applies the Free Move Next effect to all allied sync pairs."
			},
			{
				"user": "Trainer",
				"name": "Let’s Battle All Out!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an allied sync pair by 2. Raises an ally’s Attack by 2 stat ranks. Applies the Gradual Healing effect to an ally. Applies the Damage Guard Next effect to an ally. Applies the Enduring effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Coming to Fruition Double Shock",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Speed is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const VICTOR_SPECTRIER = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Victor (Event)",
		"images": {
			"base": "./v/v2.35.0/victor.png",
			"ex": "./v/v2.35.0/victor.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Spectrier",
			"formName": "",
			"stats": {
				"hp": "651",
				"atk": "200",
				"def": "170",
				"spa": "390",
				"spd": "181",
				"spe": "422"
			},
			"statsLVL150": {
				"hp": "681",
				"atk": "210",
				"def": "178",
				"spa": "410",
				"spd": "191",
				"spe": "444"
			},
			"image": "./v/v2.35.0/0897.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Debut: Ghost Zone",
				"description": "Turns the field of play’s zone into a Ghost Zone the first time the user enters a battle each battle. (A Ghost Zone powers up Ghost-type attacks.)"
			},
			{
				"name": "Haunted Acceleration 3",
				"description": "Quickly charges the move gauge when the zone is a Ghost Zone."
			},
			{
				"name": "MAX Regen",
				"description": "Applies the Gradual Healing effect to the user after using its max move."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Galar Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Shadow Ball",
				"type": "Ghost",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of lowering the target’s Sp. Def by 1 stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Mud Shot",
				"type": "Ground",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "39-46",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Haze",
				"type": "Ice",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Returns the target’s raised stats to normal."
			},
			{
				"user": "Trainer",
				"name": "Taking the Lead!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp. Atk by 2 stat ranks. Raises an ally’s critical-hit rate by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Night Dash Ghost Beam",
				"type": "Ghost",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Phantasm",
				"type": "Ghost",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the Defense of all opposing sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Max Quake",
				"type": "Ground",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Max Guard",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Damage Guard Next effect to an ally."
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