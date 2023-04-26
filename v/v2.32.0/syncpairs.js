export const HAU_TAPUKOKO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.32.0/sshauBG.png",
	"trainer": {
		"name": "Sygna Suit Hau",
		"images": {
			"base": "./v/v2.32.0/sshau.png",
			"ex": "./v/v2.32.0/sshauEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Tapu Koko",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "336",
				"def": "188",
				"spa": "336",
				"spd": "183",
				"spe": "403"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "354",
				"def": "198",
				"spa": "354",
				"spd": "193",
				"spe": "423"
			},
			"image": "./v/v2.32.0/0785.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Electric Terrain Debut & Extension 5",
				"description": "Turns the field of play’s terrain into Electric Terrain the first time the user enters a battle each battle. Extends the duration of Electric Terrain when the terrain turns into Electric Terrain while the user is on the field."
			},
			{
				"name": "Team Power Induction 2",
				"description": "Powers up the moves of all allied sync pairs when the terrain is Electric Terrain."
			},
			{
				"name": "Melemele Ocean Breeze",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by 1 rank when an ally activates a weather, terrain, or zone effect."
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
				"name": "Sygna Suit",
				"description": ""
			},
			{
				"name": "Free Spirit",
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
				"name": "Fairy Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Fairy Zone. (A Fairy Zone powers up Fairy-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Electroweb",
				"type": "Electric",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When weather, terrain, or zone effects are activated.(lb)Deactivation Condition: When all weather, terrain, and zone effects are cleared.(lb)(lb)This attack’s power is doubled when the zone is a Fairy Zone. Lowers the target’s Speed by 2 stat ranks. Raises the Speed of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Maximum Power!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s critical-hit rate by 2 stat ranks. Reduces the user’s sync move countdown by 1 when the zone is a Fairy Zone."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Thundering Deity Gigavolt Havoc",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the terrain is Electric Terrain."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MINA_TAPUFINI = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.32.0/ssminaBG.png",
	"trainer": {
		"name": "Sygna Suit Mina",
		"images": {
			"base": "./v/v2.32.0/ssmina.png",
			"ex": "./v/v2.32.0/ssminaEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Poison",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Tapu Fini",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "132",
				"def": "288",
				"spa": "180",
				"spd": "288",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "138",
				"def": "302",
				"spa": "190",
				"spd": "302",
				"spe": "282"
			},
			"image": "./v/v2.32.0/0788.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Fairy Zone Debut & Extension 5",
				"description": "Turns the field of play’s zone into a Fairy Zone the first time the user enters a battle each battle. (A Fairy Zone powers up Fairy-type attacks.) Extends the duration of the Fairy Zone when the zone turns into a Fairy Zone while the user is on the field."
			},
			{
				"name": "Team Whimsical Special DR 3",
				"description": "Reduces special attack move damage taken by allies when the zone is a Fairy Zone."
			},
			{
				"name": "Poni Ocean Breeze",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 1 stat rank when an ally activates a weather, terrain, or zone effect."
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
				"name": "Trial Giver",
				"description": ""
			},
			{
				"name": "Sygna Suit",
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
				"user": "Pokemon",
				"name": "Rain Dance",
				"type": "Water",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Makes the weather rainy."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Protect",
				"type": "Normal",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "Heals",
				"description": "Activation Condition: When weather, terrain, or zone effects are activated.(lb)Deactivation Condition: When all weather, terrain, and zone effects are cleared.(lb)(lb)Applies the Damage Guard Next effect to all allied sync pairs. Restores the HP of all allied sync pairs by approximately 20% of their maximum HP. HP is restored by 30% instead when the zone is a Fairy Zone. Returns lowered stats of all allied sync pairs to normal when the weather is rainy."
			},
			{
				"user": "Trainer",
				"name": "Pretty as a Painting!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Critical-Hit Defense effect to the allied field of play. Raises the Sp. Atk of all allied sync pairs by 4 stat ranks. Applies the Gradual Healing effect to all allied sync pairs. In addition, raises the Sp. Atk of all allied sync pairs by 2 stat ranks when the weather is rainy."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ocean Colors Twinkle Tackle",
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

export const ACEROLA_BANETTE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Acerola",
		"images": {
			"base": "./v/v2.32.0/acerola.png",
			"ex": "./v/v2.32.0/acerola.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Banette",
			"formName": "",
			"stats": {
				"hp": "538",
				"atk": "200",
				"def": "228",
				"spa": "171",
				"spd": "226",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "562",
				"atk": "210",
				"def": "240",
				"spa": "179",
				"spd": "238",
				"spe": "256"
			},
			"image": "./v/v2.32.0/0354.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Group Slapdash 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when an opponent’s attack move targeting the user misses."
			},
			{
				"name": "Fail Forward 1",
				"description": "Charges the user’s move gauge by 1 when an opponent’s attack move targeting the user misses."
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
				"name": "Ghost",
				"description": ""
			},
			{
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Trial Giver",
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
				"name": "Confuse Ray",
				"type": "Ghost",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target confused."
			},
			{
				"user": "Trainer",
				"name": "X Attack All",
				"type": "Trainer",
				"gauge": "-",
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
				"name": "Phantom Force",
				"type": "Ghost",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The user takes on a phantom presence. After a set time, this presence fades and the user attacks. No other actions can be taken while in phantom presence. Opponents’ moves will not hit the user while it is in this presence. If the user is hit by a sync move or max move while in phantom presence, the presence will fade."
			},
			{
				"user": "Trainer",
				"name": "Gonna Win!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s evasiveness by 4 stat ranks. Raises the critical-hit rate of all allied sync pairs by 2 stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Say Cheese Ghost Impact",
				"type": "Ghost",
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

export const AGATHA_ARBOK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Agatha",
		"images": {
			"base": "./v/v2.32.0/agatha.png",
			"ex": "./v/v2.32.0/agatha.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Poison",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Arbok",
			"formName": "",
			"stats": {
				"hp": "606",
				"atk": "200",
				"def": "285",
				"spa": "156",
				"spd": "288",
				"spe": "297"
			},
			"statsLVL150": {
				"hp": "634",
				"atk": "210",
				"def": "299",
				"spa": "164",
				"spd": "302",
				"spe": "313"
			},
			"image": "./v/v2.32.0/0024.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Underhanded Heal 4",
				"description": "Has a chance (50%) of restoring the HP of all allied sync pairs when the user’s attack move is successful against targets that are affected by a status condition."
			},
			{
				"name": "Full-Bracing P-Move 9",
				"description": "Raises the user’s Defense and Sp. Def by 1 stat rank when its Pokémon uses a move."
			},
			{
				"name": "Hostile Environment 1",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
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
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Veteran Trainer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Poison Sting",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "12-14",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user": "Pokemon",
				"name": "Wrap",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "39-46",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target trapped."
			},
			{
				"user": "Pokemon",
				"name": "Leer",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Defense by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Don’t Hold Back!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Sp. Atk, and critical-hit rate of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Elder’s Experience Poison Impact",
				"type": "Poison",
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

export const LANCE_DRAGONAIR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Lance",
		"images": {
			"base": "./v/v2.32.0/lance.png",
			"ex": "./v/v2.32.0/lance.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Dragonair",
			"formName": "",
			"stats": {
				"hp": "616",
				"atk": "297",
				"def": "176",
				"spa": "297",
				"spd": "176",
				"spe": "315"
			},
			"statsLVL150": {
				"hp": "644",
				"atk": "313",
				"def": "184",
				"spa": "313",
				"spd": "184",
				"spe": "331"
			},
			"image": "./v/v2.32.0/0148.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Dragon Shift",
				"description": "Normal-type moves become Dragon-type moves."
			},
			{
				"name": "Shocked Hit Freebie 4",
				"description": "Has a chance (50%) of applying the Free Move Next effect to the user when its attack move is successful against a paralyzed opponent."
			},
			{
				"name": "Afflict Dragon TR ↓",
				"description": "Lowers the target’s Dragon Type Rebuff by 1 rank the first time the user’s Pokémon uses a status move targeting the opponent each battle. This effect can activate only once per battle."
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
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Champion",
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
				"name": "Thunder Wave",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target paralyzed."
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
				"name": "Hyper Beam",
				"type": "Normal",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "223-267",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Heart of Justice!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. Raises the user’s Sp. Atk by 4 stat ranks. Raises the Speed of all allied sync pairs by 2 stat ranks. Raises the accuracy of all allied sync pairs by 1 stat rank. The user takes damage equal to 20% of its remaining HP."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Virtually Unstoppable Dragon Beam",
				"type": "Dragon",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is paralyzed."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LANA_TAPULELE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.32.0/sslanaBG.png",
	"trainer": {
		"name": "Sygna Suit Lana",
		"images": {
			"base": "./v/v2.32.0/sslana.png",
			"ex": "./v/v2.32.0/sslanaEX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Steel",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Tapu Lele",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "278",
				"def": "132",
				"spa": "278",
				"spd": "132",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "292",
				"def": "138",
				"spa": "292",
				"spd": "138",
				"spe": "302"
			},
			"image": "./v/v2.32.0/0786.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Psychic Terrain Debut & Extension 5",
				"description": "Turns the field of play’s terrain into Psychic Terrain the first time the user enters a battle each battle. Extends the duration of Psychic Terrain when the terrain turns into Psychic Terrain while the user is on the field."
			},
			{
				"name": "Team Weird Vibes 2",
				"description": "Powers up the moves of all allied sync pairs when the terrain is Psychic Terrain."
			},
			{
				"name": "Akala Ocean Breeze",
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by 1 rank when an ally activates a weather, terrain, or zone effect."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Trial Giver",
				"description": ""
			},
			{
				"name": "Sygna Suit",
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
				"name": "Moonblast",
				"type": "Fairy",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "98-117",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s Sp. Atk by 1 stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Psychic Terrain",
				"type": "Psychic",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Psychic Terrain."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Psycho Cut",
				"type": "Psychic",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "140-168",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When weather, terrain, or zone effects are activated.(lb)Deactivation Condition: When all weather, terrain, and zone effects are cleared.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. The power of this move is not lowered even if there are multiple targets. Decreases the amount of move gauge slots needed to use this move by 2 when the terrain is Psychic Terrain."
			},
			{
				"user": "Trainer",
				"name": "Cast the Line!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by 6 stat ranks. Applies the Supereffective ↑ Next effect to the user when the terrain is Psychic Terrain."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Guileless Jest Shattered Psyche",
				"type": "Psychic",
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

export const ACEROLA_TAPUBULU = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.32.0/ssacerolaBG.png",
	"trainer": {
		"name": "Sygna Suit Acerola",
		"images": {
			"base": "./v/v2.32.0/ssacerola.png",
			"ex": "./v/v2.32.0/ssacerolaEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Grass",
	"pokemonWeakness": "Flying",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Tapu Bulu",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "200",
				"def": "288",
				"spa": "132",
				"spd": "288",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "210",
				"def": "302",
				"spa": "138",
				"spd": "302",
				"spe": "256"
			},
			"image": "./v/v2.32.0/0787.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Grassy Terrain Debut & Extension 5",
				"description": "Turns the field of play’s terrain into Grassy Terrain the first time the user enters a battle each battle. Extends the duration of Grassy Terrain when the terrain turns into Grassy Terrain while the user is on the field."
			},
			{
				"name": "Team Verdant Physical DR 3",
				"description": "Reduces physical attack move damage taken by allies when the terrain is Grassy Terrain."
			},
			{
				"name": "Ula’ula Ocean Breeze",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by 1 rank when an ally activates a weather, terrain, or zone effect."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Trial Giver",
				"description": ""
			},
			{
				"name": "Sygna Suit",
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
				"name": "Bullet Seed",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "15-18",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Continues",
				"description": "Attacks the target two to five times in a row."
			},
			{
				"user": "Pokemon",
				"name": "Sunny Day",
				"type": "Fire",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Makes the weather sunny."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Swords Dance",
				"type": "Normal",
				"gauge": "-",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When weather, terrain, or zone effects are activated.(lb)Deactivation Condition: When all weather, terrain, and zone effects are cleared.(lb)(lb)Raises the Attack of all allied sync pairs by 2 stat ranks. Increases the Physical Moves ↑ Next effect of all allied sync pairs by 1 rank. Charges the user’s move gauge by 2 when the weather is sunny."
			},
			{
				"user": "Trainer",
				"name": "Now I’m Angry!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 3 stat ranks. Raises the Speed of all allied sync pairs by 2 stat ranks when the weather is sunny."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Gentle Warning Bloom Doom",
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