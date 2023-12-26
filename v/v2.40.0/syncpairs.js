export const CLAIR_DRAMPA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.40.0/clair_BG.png",
	"trainer": {
		"name": "Clair (New Year's 2024)",
		"images": {
			"base": "./v/v2.40.0/clair.png",
			"ex": "./v/v2.40.0/clair_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Drampa",
			"formName": "",
			"stats": {
				"hp": "674",
				"atk": "156",
				"def": "288",
				"spa": "200",
				"spd": "300",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "706",
				"atk": "164",
				"def": "302",
				"spa": "210",
				"spd": "316",
				"spe": "282"
			},
			"image": "./v/v2.40.0/0780.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "T-Move: Team Free Move Next 9",
				"description": "Applies the Free Move Next effect to all allied sync pairs when the user’s Trainer uses a move."
			},
			{
				"name": "Initial Synchro Healing 2",
				"description": "Restores the HP of all allied sync pairs by approximately 40% of their maximum HP the first time the user’s sync move is used each battle."
			},
			{
				"name": "Team Takes Hit From P-/S-/Max Move: Ignore WTZ Power ↑",
				"description": "Ignores the power-up effects of weather conditions, terrains, and zones when an ally is hit by an attack move, sync move, or max move."
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
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Twister",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "45-54",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
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
				"name": "Dragon Breath",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "You’re Good!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "New Year’s Dance Dragon Beam",
				"type": "Dragon",
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

export const WALLACE_BLACEPHALON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.40.0/wallace_BG.png",
	"trainer": {
		"name": "Wallace (New Year's 2024)",
		"images": {
			"base": "./v/v2.40.0/wallace.png",
			"ex": "./v/v2.40.0/wallace_EX.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Special Strike",
	"pokemonType": "Fire",
	"pokemonWeakness": "Dark",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Blacephalon",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "331",
				"def": "156",
				"spa": "356",
				"spd": "158",
				"spe": "346"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "349",
				"def": "164",
				"spa": "374",
				"spd": "166",
				"spe": "364"
			},
			"image": "./v/v2.40.0/0806.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Mind-Blowing Illusion!",
				"description": "Activates one of several additional effects at random after using the user’s max move."
			},
			{
				"name": "KO Opp: Special Boost ↑2 9",
				"description": "Increases the user’s Special Moves ↑ Next effect by 2 ranks when it knocks out an opponent with a move."
			},
			{
				"name": "MAX Countdown 2",
				"description": "Reduces the user’s sync move countdown by 2 after using its max move."
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
				"name": "Hoenn",
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
				"name": "Contest",
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
				"user": "Trainer",
				"name": "Hoenn Analysis",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by 1 rank. Applies Hoenn Circle (Special) to the allied field of play. Hoenn Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Hoenn theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Strange Flames Mind Blown",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Increases the user’s Special Moves ↑ Next effect by zero to ten ranks at random. (The higher the rank of the effect increased, the lower the chance it will activate.)"
			},
			{
				"user": "Trainer",
				"name": "It’s Showtime!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp. Atk by 4 stat ranks. Raises an ally’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Burning Elegant Fire Beam",
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
			},
			{
				"user": "Pokemon",
				"name": "Max Flare",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Makes the weather sunny."
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

export const VOLKNER_RAICHU = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Volkner",
		"images": {
			"base": "./v/v2.40.0/volkner.png",
			"ex": "./v/v2.40.0/volkner.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Raichu",
			"formName": "",
			"stats": {
				"hp": "591",
				"atk": "268",
				"def": "161",
				"spa": "356",
				"spd": "161",
				"spe": "331"
			},
			"statsLVL150": {
				"hp": "619",
				"atk": "282",
				"def": "169",
				"spa": "374",
				"spd": "169",
				"spe": "349"
			},
			"image": "./v/v2.40.0/0026.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hem In 9",
				"description": "Lowers the target’s evasiveness by 1 stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Slippery 1",
				"description": "Raises the user’s evasiveness by 1 stat rank when its move is successful."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "Discharge",
				"type": "Electric",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "92-110",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target paralyzed."
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
				"name": "Surf",
				"type": "Water",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Fully Charged!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 4 stat ranks. Applies the Free Move Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Thrilling Battles Electric Beam",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s evasiveness is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const KATHERINE_SLURPUFF = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.40.0/katherine_BG.png",
	"trainer": {
		"name": "Katherine (Furisode Girl)",
		"images": {
			"base": "./v/v2.40.0/katherine.png",
			"ex": "./v/v2.40.0/katherine.png"
		}
	},
	"rarity": 3,
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Slurpuff",
			"formName": "",
			"stats": {
				"hp": "534",
				"atk": "288",
				"def": "132",
				"spa": "346",
				"spd": "132",
				"spe": "211"
			},
			"statsLVL150": {
				"hp": "556",
				"atk": "302",
				"def": "138",
				"spa": "362",
				"spd": "138",
				"spe": "221"
			},
			"image": "./v/v2.40.0/0685.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Pecking Order",
				"description": "The more the target’s Attack is lowered, the more it powers up the user’s sync move."
			},
			{
				"name": "Catalytic Infliction",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name": "Wide Awake",
				"description": "Prevents the user from falling asleep."
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
				"name": "Dazzling Gleam",
				"type": "Fairy",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "50-60",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "Sweet Scent",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s evasiveness by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Charm",
				"type": "Fairy",
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
				"user": "Trainer",
				"name": "Time to Attack!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks. Raises the user’s critical-hit rate by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Beautiful Determination Fairy Beam",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s evasiveness is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const IONO_BELLIBOLT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.40.0/iono_BG.png",
	"trainer": {
		"name": "Iono",
		"images": {
			"base": "./v/v2.40.0/iono.png",
			"ex": "./v/v2.40.0/iono_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Special Strike",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Bellibolt",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "176",
				"def": "302",
				"spa": "336",
				"spd": "302",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "184",
				"def": "318",
				"spa": "354",
				"spd": "318",
				"spe": "297"
			},
			"image": "./v/v2.40.0/0939.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Gimme All You Got!",
				"description": "Applies the Free Move Next effect to all allied sync pairs when the user is hit by an attack move. Increases the Special Moves ↑ Next effect of all allied sync pairs by 1 rank when the user is hit by an attack move."
			},
			{
				"name": "1st T-Move: Team Sp. Atk ↑ 4",
				"description": "Raises the Sp. Atk of all allied sync pairs by 4 stat ranks the first time the user’s Trainer uses a move each battle."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
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
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Artistic",
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
				"name": "Eerie Impulse",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Sp. Atk. by 2 stat ranks."
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
				"user": "Pokemon",
				"name": "(b move) Ultra-Bright Zap Cannon",
				"type": "Electric",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Special Moves ↑ Next effect is rank 3 or higher.(lb)Deactivation Condition: When the user’s Special Moves ↑ Next effect is rank 2 or lower.(lb)(lb)Lowers the target’s Sp. Def by 2 stat ranks. Has a chance (50%) of making the target flinch. Leaves the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "On the Rise!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by 3 stat ranks. Increases the Special Moves ↑ Next effect of all allied sync pairs by 2 ranks. Applies the Enduring effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Supercharged Streamer Zap Cannon",
				"type": "Electric",
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

export const GRUSHA_CETITAN = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.40.0/grusha_BG.png",
	"trainer": {
		"name": "Grusha",
		"images": {
			"base": "./v/v2.40.0/grusha.png",
			"ex": "./v/v2.40.0/grusha_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Ice",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Cetitan",
			"formName": "",
			"stats": {
				"hp": "694",
				"atk": "244",
				"def": "297",
				"spa": "112",
				"spd": "297",
				"spe": "295"
			},
			"statsLVL150": {
				"hp": "726",
				"atk": "256",
				"def": "313",
				"spa": "118",
				"spd": "313",
				"spe": "311"
			},
			"image": "./v/v2.40.0/0975.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Fear the Snowy Mountain",
				"description": "Reduces physical attack move damage taken by allies when the zone is an Ice Zone. Quickly charges the move gauge when the zone is an Ice Zone."
			},
			{
				"name": "Super Interference 2",
				"description": "Raises the chance of inflicting status conditions—as well as inflicting the flinching, confused, or trapped condition—with the additional effects of the user’s moves."
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
				"name": "Ice",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Scarf",
				"description": ""
			},
			{
				"name": "Nature Lover",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Ice Fang",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "46-55",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of making the target flinch. Has a chance (10%) of leaving the target frozen."
			},
			{
				"user": "Trainer",
				"name": "Dire Hit All +",
				"type": "Trainer",
				"gauge": "-",
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
				"name": "(b move) Absolute Zero Ice Avalanche",
				"type": "Ice",
				"gauge": "-",
				"uses": "2",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "Self",
				"effect": "-",
				"description": "Activation Condition: When the user’s Defense is raised.(lb)Deactivation Condition: When the user’s Defense is not raised.(lb)(lb)The user takes up a defensive posture. Using this move again will make the user leave this defensive posture, then attack. No other actions can be taken when in this defensive posture. Nullifies an attack move that targets the user or all allies while in this defensive posture, then the user leaves the defensive posture and attacks the target with double the power of this attack. Lowers the Attack and Sp. Atk of this attack’s target by 3 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Let’s Cool Down!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into an Ice Zone. (An Ice Zone powers up Ice-type attacks.) Raises the Defense and Sp. Def of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Sub-zero Shredder Avalanche",
				"type": "Ice",
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