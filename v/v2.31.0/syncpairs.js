export const STEVEN_STOUTLAND = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.31.0/scStevenBG.png",
	"trainer": {
		"name": "Steven (Special Costume)",
		"images": {
			"base": "./v/v2.31.0/scSteven.png",
			"ex": "./v/v2.31.0/scStevenEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "(shiny) Stoutland",
			"formName": "",
			"stats": {
				"hp": "681",
				"atk": "448",
				"def": "176",
				"spa": "336",
				"spd": "176",
				"spe": "290"
			},
			"statsLVL150": {
				"hp": "713",
				"atk": "472",
				"def": "184",
				"spa": "354",
				"spd": "184",
				"spe": "304"
			},
			"image": "./v/v2.31.0/0508.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Rebuff Reducing Hit (Weakness)",
				"description": "Lowers the target’s Type Rebuff of its weakness type by 1 rank the first time the user’s attack move is successful each battle."
			},
			{
				"name": "Team Immunizing Command 9",
				"description": "Applies the Condition Nullification effect to all allied sync pairs when the user’s Trainer uses a move. This effect can activate only once per battle."
			},
			{
				"name": "Team Easy Target Speed Up 9",
				"description": "Raises the Speed of all allied sync pairs by 1 stat rank when the user’s attack move is successful against an opponent with the No Evasion effect applied."
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
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Rock Lover",
				"description": ""
			},
			{
				"name": "Space Cadet",
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
				"user": "Pokemon",
				"name": "(b move) B Leer",
				"type": "Normal",
				"gauge": "1",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)(lb)Never misses. Lowers the target’s Attack, Defense, and Speed by 2 stat ranks. Applies the No Evasion effect to the target. Applies the Restrain effect to the target."
			},
			{
				"user": "Trainer",
				"name": "Mystery Solved!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Speed by 2 stat ranks. Increases the Physical Moves ↑ Next effect of an ally by 3 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Illuminating Normal Impact",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
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

export const STEVEN_CRADILY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Steven",
		"images": {
			"base": "./v/v2.31.0/steven.png",
			"ex": "./v/v2.31.0/steven.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Rock",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Cradily",
			"formName": "",
			"stats": {
				"hp": "584",
				"atk": "312",
				"def": "174",
				"spa": "380",
				"spd": "177",
				"spe": "227"
			},
			"statsLVL150": {
				"hp": "612",
				"atk": "328",
				"def": "182",
				"spa": "400",
				"spd": "185",
				"spe": "239"
			},
			"image": "./v/v2.31.0/0346.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "On a Roll 4",
				"description": "Raises the chance of lowering stat values with the additional effects of moves."
			},
			{
				"name": "Water Guard",
				"description": "Reduces damage when the user is attacked by Water-type moves."
			},
			{
				"name": "Catalytic Infliction",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user’s Pokémon uses a status move each battle."
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
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Rock Lover",
				"description": ""
			},
			{
				"name": "Space Cadet",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Acid",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "19-22",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by 1 stat rank."
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
				"user": "Pokemon",
				"name": "Stealth Rock",
				"type": "Rock",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Opponents’ side",
				"effect": "-",
				"description": "Applies the Rock Damage Field effect to the opponents’ field of play. (Rock Damage Field: The sync pairs will take Rock-type damage whenever they take an action.)"
			},
			{
				"user": "Trainer",
				"name": "Gem Hunt!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk and Sp. Def by 2 stat ranks. Applies the Enduring effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Agent of the Ancient Rock Beam",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the Rock Damage Field is applied to the opponents’ field of play."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SHAUNA_KLEFKI = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.31.0/scShaunaBG.png",
	"trainer": {
		"name": "Shauna (Special Costume)",
		"images": {
			"base": "./v/v2.31.0/scShauna.png",
			"ex": "./v/v2.31.0/scShaunaEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Steel",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Klefki",
			"formName": "",
			"stats": {
				"hp": "585",
				"atk": "200",
				"def": "284",
				"spa": "210",
				"spd": "276",
				"spe": "270"
			},
			"statsLVL150": {
				"hp": "613",
				"atk": "210",
				"def": "298",
				"spa": "220",
				"spd": "290",
				"spe": "284"
			},
			"image": "./v/v2.31.0/0707.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Stat Steal 9",
				"description": "Lowers one of the target’s following stats by 1 stat rank at random when the user’s attack move against it is successful: Attack, Defense, Sp. Atk, Sp. Def, or Speed. Raises this stat for all allied sync pairs by the same amount."
			},
			{
				"name": "Retaliatory Stat Steal 9",
				"description": "Lowers one of the following stats of an opponent that attacked the user by 1 stat rank at random when the user is hit by an attack move: Attack, Defense, Sp. Atk, Sp. Def, or Speed. Raises the user’s stat by the same amount."
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
				"name": "Steel",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Special Costume",
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
				"name": "Mirror Shot",
				"type": "Steel",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "57-68",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s accuracy by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "I Think I’ve Got It!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Status Move Defense effect to the allied field of play. Applies the Stat Reduction Defense effect to the allied field of play. Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Piece It Together Steel Beam",
				"type": "Steel",
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

export const ZINNIA_THIEVUL = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.31.0/scZinniaBG.png",
	"trainer": {
		"name": "Zinnia (Special Costume)",
		"images": {
			"base": "./v/v2.31.0/scZinnia.png",
			"ex": "./v/v2.31.0/scZinniaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Dark",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Thievul",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "424",
				"def": "163",
				"spa": "336",
				"spd": "187",
				"spe": "287"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "446",
				"def": "171",
				"spa": "354",
				"spd": "197",
				"spe": "301"
			},
			"image": "./v/v2.31.0/0828.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Rebuff ↓ Command (Dark)",
				"description": "Lowers the Dark Type Rebuff of all opposing sync pairs by 1 rank the first time the user’s Trainer uses a move each battle."
			},
			{
				"name": "Unbuffed Foe Freebie 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while none of the target’s stats are raised."
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
				"name": "Dark",
				"description": ""
			},
			{
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Cape",
				"description": ""
			},
			{
				"name": "Space Cadet",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Crunch",
				"type": "Dark",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of lowering the target’s Defense by 1 stat rank."
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
				"name": "(b move) B Night Slash",
				"type": "Dark",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Dark Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon with a lowered Dark Type Rebuff on the opponent’s field of play.(lb)(lb)Never misses. Returns the target’s raised stats to normal, then raises the user’s same stats by the same amount. Except in certain circumstances, successful hits with this attack become critical hits. Applies the No Stat Increases effect to the opponents’ field of play."
			},
			{
				"user": "Trainer",
				"name": "Catch Me If You Can!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Stat Reduction Defense effect to the allied field of play. Raises the user’s evasiveness by 1 stat rank. Raises the user’s critical-hit rate by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Steal the Win Dark Impact",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
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

export const LYRA_PHANPY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.31.0/scLyraBG.png",
	"trainer": {
		"name": "Lyra (Special Costume)",
		"images": {
			"base": "./v/v2.31.0/scLyra.png",
			"ex": "./v/v2.31.0/scLyraEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Ground",
	"pokemonWeakness": "Water",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Phanpy",
			"formName": "",
			"stats": {
				"hp": "738",
				"atk": "244",
				"def": "300",
				"spa": "268",
				"spd": "284",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "772",
				"atk": "256",
				"def": "316",
				"spa": "282",
				"spd": "298",
				"spe": "256"
			},
			"image": "./v/v2.31.0/0231.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Rebuff Reducing Hit (Ground)",
				"description": "Lowers the target’s Ground Type Rebuff by 1 rank the first time the user’s attack move is successful each battle."
			},
			{
				"name": "Team Mighty Sync 9",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by 1 rank after using the user’s sync move. This effect can activate only once per battle."
			},
			{
				"name": "Team Beef Up 9",
				"description": "Raises the Attack of all allied sync pairs by 1 stat rank when the user is hit by an attack move."
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
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Pigtails",
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
				"name": "Mud-Slap",
				"type": "Ground",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "13-15",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s accuracy by 1 stat rank."
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
				"name": "Earthquake",
				"type": "Ground",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Initiate Infiltration!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 1 stat rank. Raises the Defense of all allied sync pairs by 3 stat ranks. Applies the Type Resistant effect to the user. The resistant type is the type of the last attack it was hit by."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Darling Deception Ground Impact",
				"type": "Ground",
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

export const LORELEI_CLOYSTER = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Lorelei (Variety)",
		"images": {
			"base": "./v/v2.31.0/lorelei.png",
			"ex": "./v/v2.31.0/lorelei.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Ice",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Cloyster",
			"formName": "",
			"stats": {
				"hp": "572",
				"atk": "200",
				"def": "300",
				"spa": "180",
				"spd": "268",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "598",
				"atk": "210",
				"def": "316",
				"spa": "190",
				"spd": "282",
				"spe": "282"
			},
			"image": "./v/v2.31.0/0091.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "No Quarter",
				"description": "Maximizes the number of times the user hits with a move that has the multistrike effect tag when that move is successful."
			},
			{
				"name": "Recharging Strike 4",
				"description": "Has a chance (50%) of charging the user’s move gauge by one when its attack move hits. If the move has the multistrike effect tag, has a chance (50%) of charging the user’s move gauge by one for each hit."
			},
			{
				"name": "Restoring Strike 2",
				"description": "Has a chance (30%) of restoring the user’s HP when its attack move hits. If the move has the multistrike effect tag, has a chance (30%) of restoring the user’s HP for each hit."
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
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Glasses",
				"description": ""
			},
			{
				"name": "Grown Woman",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Icicle Spear",
				"type": "Ice",
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
				"name": "Protect",
				"type": "Normal",
				"gauge": "2",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Damage Guard Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "Good Answer!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by 4 stat ranks. Raises the critical-hit rate of all allied sync pairs by 2 stat ranks. Applies the Enduring effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Unbreakable Will Ice Impact",
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

export const BRUNO_ONIX = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Bruno (Variety)",
		"images": {
			"base": "./v/v2.31.0/bruno.png",
			"ex": "./v/v2.31.0/bruno.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Rock",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Onix",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "171",
				"def": "287",
				"spa": "127",
				"spd": "271",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "179",
				"def": "301",
				"spa": "133",
				"spd": "285",
				"spe": "282"
			},
			"image": "./v/v2.31.0/0095.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Endurance",
				"description": "When the user enters battle with full HP, applies the Enduring effect to it."
			},
			{
				"name": "Team Swift Reaction 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when the user is hit by an attack move."
			},
			{
				"name": "Sterner Stuff 2",
				"description": "Reduces damage when the user is hit by a physical attack move."
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
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Body Builder",
				"description": ""
			},
			{
				"name": "Sweet Tooth",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Rock Throw",
				"type": "Rock",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "23-27",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
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
				"name": "Screech",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Defense by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Always Getting Stronger!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks. Raises the Defense of all allied sync pairs by 6 stat ranks. Increases the Physical Moves ↑ Next effect of all allied sync pairs by 1 rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Overwhelming Power Rock Impact",
				"type": "Rock",
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