export const CHASE_PIKACHU = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.41.0/chase_BG.png",
	"trainer": {
		"name": "Chase",
		"images": {
			"base": "./v/v2.41.0/chase.png",
			"ex": "./v/v2.41.0/chase_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pikachu",
			"formName": "",
			"stats": {
				"hp": "686",
				"atk": "200",
				"def": "307",
				"spa": "258",
				"spd": "312",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "718",
				"atk": "210",
				"def": "323",
				"spa": "272",
				"spd": "328",
				"spe": "355"
			},
			"image": "./v/v2.41.0/0025.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Electrifying Chase",
				"description": "Leaves an opponent that attacked the user paralyzed when the user is hit by an attack move. Restores the HP of all allied sync pairs when the user is hit by an attack move."
			},
			{
				"name": "T-Move: Team Speed ↑ & Evasiveness ↑ 9",
				"description": "Raises the Speed and evasiveness of all allied sync pairs by 1 stat rank when the user’s Trainer uses a move."
			},
			{
				"name": "Full-Bracing Command 9",
				"description": "Raises the user’s Defense and Sp. Def by 1 stat rank when its Trainer uses a move."
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
				"name": "Kanto Analysis",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by 1 rank. Applies Kanto Circle (Special) to the allied field of play. Kanto Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kanto theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
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
				"user": "Trainer",
				"name": "Let’s Go, Everyone!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Reduces the user’s sync move countdown by 1. Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Running With My Partner Pika Papow",
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

export const WALLY_DELCATTY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Wally",
		"images": {
			"base": "./v/v2.41.0/wally.png",
			"ex": "./v/v2.41.0/wally.png"
		}
	},
	"rarity": 4,
	"role": "Support",
	"exRole": "",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Delcatty",
			"formName": "",
			"stats": {
				"hp": "615",
				"atk": "142",
				"def": "229",
				"spa": "132",
				"spd": "229",
				"spe": "280"
			},
			"statsLVL150": {
				"hp": "643",
				"atk": "148",
				"def": "241",
				"spa": "138",
				"spd": "241",
				"spe": "294"
			},
			"image": "./v/v2.41.0/0301.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Look Alive 4",
				"description": "Has a chance (50%) of raising the user’s evasiveness by one stat rank when it is hit by an attack move."
			},
			{
				"name": "Natural Remedy",
				"description": "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
			},
			{
				"name": "Healthy Buffer 5",
				"description": "Reduces damage when the user is hit by an attack move when its HP is full."
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
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Rival",
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
				"name": "Tackle",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "25-30",
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
				"name": "Growl",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Attack by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Let’s Win For Sure!",
				"type": "Trainer",
				"gauge": "-",
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
				"name": "Becoming Stronger Normal Impact",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
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

export const PETEY_PIKACHU = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.41.0/petey_BG.png",
	"trainer": {
		"name": "Petey",
		"images": {
			"base": "./v/v2.41.0/petey.png",
			"ex": "./v/v2.41.0/petey.png"
		}
	},
	"rarity": 3,
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Pikachu",
			"formName": "",
			"stats": {
				"hp": "555",
				"atk": "244",
				"def": "119",
				"spa": "312",
				"spd": "122",
				"spe": "248"
			},
			"statsLVL150": {
				"hp": "577",
				"atk": "256",
				"def": "125",
				"spa": "326",
				"spd": "128",
				"spe": "260"
			},
			"image": "./v/v2.41.0/0025-2.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Lithe",
				"description": "Prevents the user from getting paralyzed."
			},
			{
				"name": "Hostile Environment 1",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
			},
			{
				"name": "Quick Cure",
				"description": "Removes the confused, flinching, and trapped conditions from the user the first time they are inflicted each battle."
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
				"name": "Galar",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Electroweb",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "39-46",
				"accuracy": "95",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Speed",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Speed by 2 stat ranks."
			},
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
				"name": "Pika! Piiika!",
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
				"name": "Double Pikachu Electric Beam",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
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

export const FALKNER_NOCTOWL = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Falkner",
		"images": {
			"base": "./v/v2.41.0/falkner.png",
			"ex": "./v/v2.41.0/falkner.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Flying",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Noctowl",
			"formName": "",
			"stats": {
				"hp": "697",
				"atk": "156",
				"def": "283",
				"spa": "210",
				"spd": "308",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "729",
				"atk": "164",
				"def": "297",
				"spa": "220",
				"spd": "324",
				"spe": "328"
			},
			"image": "./v/v2.41.0/0164.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Use Status P-Move: Team Attack ↓ 9",
				"description": "Lowers the Attack of all opposing sync pairs by 1 stat rank when the user’s Pokémon uses a status move."
			},
			{
				"name": "Use Status P-Move: Team Sp. Atk ↓ 9",
				"description": "Lowers the Sp. Atk of all opposing sync pairs by 1 stat rank when the user’s Pokémon uses a status move."
			},
			{
				"name": "Team Wide Awake",
				"description": "Prevents all allied sync pairs from falling asleep."
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
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "Air Cutter",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "43-51",
				"accuracy": "95",
				"target": "All opponents",
				"effect": "-",
				"description": "Critical hits land more easily."
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
				"name": "(b move) Dreamlike Hypnosis",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When any allies’ attack moves hit a total of 5 times while this move is deactivated.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Leaves all opposing sync pairs either flinching, confused, or trapped. Puts all opposing sync pairs to sleep. Raises one of the following stats of all allied sync pairs by 1 stat rank at random: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"user": "Trainer",
				"name": "We Can Still Fly!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the Defense and Sp. Def of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Silent Wings Flying Beam",
				"type": "Flying",
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

export const VICTOR_GREEDENT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.41.0/victor_BG.png",
	"trainer": {
		"name": "Victor (Palentine's 2024)",
		"images": {
			"base": "./v/v2.41.0/victor.png",
			"ex": "./v/v2.41.0/victor_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Greedent",
			"formName": "",
			"stats": {
				"hp": "685",
				"atk": "176",
				"def": "287",
				"spa": "278",
				"spd": "284",
				"spe": "240"
			},
			"statsLVL150": {
				"hp": "717",
				"atk": "184",
				"def": "301",
				"spa": "292",
				"spd": "298",
				"spe": "252"
			},
			"image": "./v/v2.41.0/0820.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "A Little Nibble",
				"description": "Reduces MP by 1 for the user’s moves that have the Berry effect tag and grants all of the following effects when the user’s HP is left at half or below after it is hit by an attack move or sync move: Restores the user’s HP by approximately 40% of its maximum HP. Applies the Enduring effect to the user."
			},
			{
				"name": "Have Seconds!",
				"description": "Raises the Attack, Sp. Atk, and critical-hit rate of all allied sync pairs by 1 stat rank when the remaining MP for the user’s moves that have the Berry effect tag is one or higher and its attack move is successful."
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
				"name": "Normal",
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
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Cook",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Tackle",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "25-30",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Sitrus Berry",
				"type": "Trainer",
				"gauge": "-",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Heals + Berry",
				"description": "Restores an ally’s HP by approximately 20% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Hyper Belch",
				"type": "Poison",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the remaining MP for the user’s Sitrus Berry is 2 or lower.(lb)Deactivation Condition: When the remaining MP for the user’s Sitrus Berry is 3.(lb)(lb)Never misses. Lowers the target’s Attack, Defense, Sp. Atk, and Sp. Def by 2 stat ranks. Leaves the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "Cooking Prep!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 2 stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "The Joys of Cooking Normal Impact",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
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

export const CANDICE_DARMANITAN = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.41.0/candice_BG.png",
	"trainer": {
		"name": "Candice (Palentine's 2024)",
		"images": {
			"base": "./v/v2.41.0/candice.png",
			"ex": "./v/v2.41.0/candice_EX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"exRole": "Tech",
	"pokemonType": "Ice",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Darmanitan",
			"formName": "Galarian Standard Mode",
			"stats": {
				"hp": "718",
				"atk": "424",
				"def": "157",
				"spa": "200",
				"spd": "157",
				"spe": "352"
			},
			"statsLVL150": {
				"hp": "752",
				"atk": "446",
				"def": "165",
				"spa": "210",
				"spd": "165",
				"spe": "370"
			},
			"image": "./v/v2.41.0/0555.png"
		},
		{
			"name": "Darmanitan",
			"formName": "Galarian Zen Mode",
			"stats": {
				"hp": "718",
				"atk": "424",
				"def": "157",
				"spa": "200",
				"spd": "157",
				"spe": "352"
			},
			"statsLVL150": {
				"hp": "752",
				"atk": "446",
				"def": "165",
				"spa": "210",
				"spd": "165",
				"spe": "370"
			},
			"image": "./v/v2.41.0/0555-2.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Is This Your Order?",
				"description": "Changes the user to Galarian Form (Zen Mode) when its HP drops to approximately 50% or below, or changes the user to Galarian Form (Standard Mode) when its HP rises to approximately 50% or above. Increases the user’s Physical Moves ↑ Next effect by 2 ranks when it changes forms while it is on the field of play."
			},
			{
				"name": "Hit the Gas 5",
				"description": "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves."
			},
			{
				"name": "Soften Up 1",
				"description": "Critical hits land more easily when the user attacks with a sync move."
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
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Cook",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Icicle Crash",
				"type": "Ice",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "157-189",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
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
				"name": "(b move) Fighting Spirit Icicle Crash",
				"type": "Ice",
				"gauge": "1",
				"uses": "2",
				"category": "Physical",
				"power": "180-216",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Quick Move",
				"description": "Activation Condition: When the user’s Pokémon uses a move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)The more times Icicle Crash is used before this move is used (up to a maximum of four times), the greater the power of this attack. (This attack powers up by 50% every time the user’s Icicle Crash is used. The maximum power-up is 200%.) After using this attack, its power returns to normal. Makes the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Wrap It Up!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Flavor of Memories Ice Impact",
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

export const PLAYER_ALCREMIE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Player",
		"images": {
			"base": "./images/trainer_scottie.png",
			"ex": "./images/trainer_bettie.png"
		}
	},
	"rarity": 4,
	"role": "Support",
	"exRole": "",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Alcremie",
			"formName": "Ruby Cream - Berry Sweet",
			"stats": {
				"hp": "628",
				"atk": "166",
				"def": "201",
				"spa": "166",
				"spd": "247",
				"spe": "263"
			},
			"statsLVL150": {
				"hp": "658",
				"atk": "174",
				"def": "211",
				"spa": "174",
				"spd": "259",
				"spe": "277"
			},
			"image": "./v/v2.41.0/0869-2.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Unfortuitous 9",
				"description": "Lowers one of the target’s following stats by one stat rank at random when the user’s attack move against it is successful: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"name": "Quick Tempo",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user enters a battle each battle."
			},
			{
				"name": "Team Sharp Entry 1",
				"description": "Raises the critical-hit rate of all allied sync pairs by 1 stat rank when the user enters a battle."
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
				"name": "Main Character",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Tackle",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "25-30",
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
				"user": "Trainer",
				"name": "Whip It Up!",
				"type": "Trainer",
				"gauge": "-",
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
				"name": "Favorite Flavor Fairy Beam",
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

export const GLADION_MAGEARNA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.41.0/gladion_BG.png",
	"trainer": {
		"name": "Gladion",
		"images": {
			"base": "./v/v2.41.0/gladion.png",
			"ex": "./v/v2.41.0/gladion_EX.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"exRole": "Sprint",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Fire",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Magearna",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "336",
				"def": "159",
				"spa": "400",
				"spd": "159",
				"spe": "372"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "354",
				"def": "167",
				"spa": "420",
				"spd": "167",
				"spe": "392"
			},
			"image": "./v/v2.41.0/0801.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Just Give It Up Already",
				"description": "The user’s stats cannot be lowered. Lowers the target’s Sp. Atk by 2 stat ranks when the user successfully attacks with Fleur Cannon. When the user’s stat is lowered by an opponent, the amount lowered is reflected back to that opponent instead."
			},
			{
				"name": "Condition Nullification",
				"description": "Prevents the user from being inflicted with status conditions, flinching, becoming confused, or becoming trapped."
			},
			{
				"name": "Soften Up 1",
				"description": "Critical hits land more easily when the user attacks with a sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Alola Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Alola theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Sygna Suit",
				"description": ""
			},
			{
				"name": "Villain",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Fleur Cannon",
				"type": "Fairy",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "X Speed +",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Speed by 3 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Piercing Fleur Cannon",
				"type": "Fairy",
				"gauge": "4",
				"uses": "1",
				"category": "Special",
				"power": "220-264",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user’s Pokémon uses a move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. The more the currently targeted opponent’s Sp. Atk is lowered, the greater the power of this attack. The power of this move is not lowered even if there are multiple targets. The more the currently targeted opponent’s Sp. Atk is lowered, the more it increases the user’s Special Moves ↑ Next effect (can be increased by up to 3 ranks maximum)."
			},
			{
				"user": "Trainer",
				"name": "My Soul Is Shaking!",
				"type": "Trainer",
				"gauge": "4",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 6 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Applies the Free Move Next effect to the user. Increases the user’s Special Moves ↑ Next effect by 1 rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Gentle Souls Fleur Cannon",
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

export const RILEY_LUCARIO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.41.0/riley_BG.png",
	"trainer": {
		"name": "Riley",
		"images": {
			"base": "./v/v2.41.0/riley.png",
			"ex": "./v/v2.41.0/riley_EX.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "Physical Strike",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Lucario",
			"formName": "",
			"stats": {
				"hp": "651",
				"atk": "390",
				"def": "136",
				"spa": "390",
				"spd": "136",
				"spe": "383"
			},
			"statsLVL150": {
				"hp": "681",
				"atk": "410",
				"def": "142",
				"spa": "410",
				"spd": "142",
				"spe": "403"
			},
			"image": "./v/v2.41.0/0448.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "MAX Countdown 3",
				"description": "Reduces the user’s sync move countdown by 3 after using its max move."
			},
			{
				"name": "Dashing Team 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when the user’s attack move is successful."
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
				"name": "Fighting",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Supernatural",
				"description": ""
			},
			{
				"name": "Battle Partner",
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
				"name": "Close Combat",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "124-148",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Defense and Sp. Def by 1 stat rank."
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
				"name": "Iron Tail",
				"type": "Steel",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "132-158",
				"accuracy": "75",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s Defense by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Testing Our Skills!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Attack by 4 stat ranks. Raises the user’s Defense and Sp. Def by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Aura Driven Fighting Impact",
				"type": "Fighting",
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
		"movesMAX": [
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
			},
			{
				"user": "Pokemon",
				"name": "Max Steelspike",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by 2 stat ranks."
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