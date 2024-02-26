export const GEETA_GLIMMORA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.42.0/geeta_BG.png",
	"trainer": {
		"name": "Geeta",
		"images": {
			"base": "./v/v2.42.0/geeta.png",
			"ex": "./v/v2.42.0/geeta_EX.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Physical Strike",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Glimmora",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "472",
				"def": "176",
				"spa": "472",
				"spd": "174",
				"spe": "295"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "498",
				"def": "184",
				"spa": "498",
				"spd": "182",
				"spe": "311"
			},
			"image": "./v/v2.42.0/0970.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Top Champion’s Pressure",
				"description": "Turns the field of play’s zone into a Poison Zone the first time the user enters a battle each battle. (A Poison Zone powers up Poison-type attacks.) Raises the user’s Attack by six stat ranks the first time it enters a battle each battle."
			},
			{
				"name": "Top Champion’s Radiance",
				"description": "Charges the user’s move gauge by one when its attack move hits. Increases the user’s Physical Moves ↑ Next effect by one rank when its attack move hits."
			},
			{
				"name": "Top Champion’s Talent",
				"description": "Increases the amount of move gauge slots needed to use Mortal Spin and Blooming Mortal Spin by two and powers up both moves. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Paldea Flag Bearer",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Paldea theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],
		"themes": [
			{
				"name": "Poison",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Passionate Spirit",
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
				"name": "Mortal Spin",
				"type": "Poison",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "120-144",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Leaves the target poisoned. Removes a damage field from the allied field of play. Removes the trapped condition from the user."
			},
			{
				"user": "Pokemon",
				"name": "Rock Slide",
				"type": "Rock",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "105-126",
				"accuracy": "90",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Blooming Mortal Spin",
				"type": "Poison",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "220-264",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Quick Move, Sure Hit",
				"description": "Activation Condition: When there is at least one poisoned or badly poisoned Pokémon on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any poisoned or badly poisoned Pokémon on the opponent’s field of play.(lb)(lb)Never misses. Lowers the target’s Defense by three stat ranks. Leaves the target poisoned. Turns the field of play’s zone into a Poison Zone. (A Poison Zone powers up Poison-type attacks.) Removes a damage field from the allied field of play. Removes the trapped condition from the user."
			},
			{
				"user": "Trainer",
				"name": "I’ll Guide You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Supereffective ↑ Next effect to an ally. Increases the Physical Moves ↑ Next effect of an ally by three ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Top Champion’s Guidance Mortal Spin",
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

export const SKYLA_UNFEZANT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Skyla",
		"images": {
			"base": "./v/v2.42.0/skyla.png",
			"ex": "./v/v2.42.0/skyla.png"
		}
	},
	"rarity": "4+ex",
	"role": "Physical Strike",
	"exRole": "",
	"pokemonType": "Flying",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Unfezant",
			"formName": "",
			"stats": {
				"hp": "615",
				"atk": "370",
				"def": "117",
				"spa": "312",
				"spd": "114",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "643",
				"atk": "390",
				"def": "123",
				"spa": "328",
				"spd": "120",
				"spe": "297"
			},
			"image": "./v/v2.42.0/0521.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Recoil Removal 9",
				"description": "Negates recoil damage when using moves that have the recoil effect tag."
			},
			{
				"name": "Haymaker",
				"description": "The more the user’s Attack is raised, the more it powers up the user’s sync move."
			},
			{
				"name": "S-Move: Physical Boost ↑2 9",
				"description": "Increases the user’s Physical Moves ↑ Next effect by two ranks after using its sync move."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Undella Town",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Aerial Ace",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "45-54",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Never misses."
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
				"description": "Raises the user’s critical-hit rate by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Brave Bird",
				"type": "Flying",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "134-160",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Recoil",
				"description": "The user also takes 25% of the damage it dealt to the target."
			},
			{
				"user": "Trainer",
				"name": "Takeoff Time!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Sky-High Joy Flying Impact",
				"type": "Flying",
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

export const SILVER_TYRANITAR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.42.0/silver_BG.png",
	"trainer": {
		"name": "Silver (Champion)",
		"images": {
			"base": "./v/v2.42.0/silver.png",
			"ex": "./v/v2.42.0/silver_EX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Rock",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "(shiny) Tyranitar",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "390",
				"def": "153",
				"spa": "346",
				"spd": "132",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "410",
				"def": "161",
				"spa": "364",
				"spd": "138",
				"spe": "298"
			},
			"image": "./v/v2.42.0/0248.png"
		},
		{
			"name": "Mega Tyranitar",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "468",
				"def": "183",
				"spa": "346",
				"spd": "132",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "492",
				"def": "193",
				"spa": "364",
				"spd": "138",
				"spe": "298"
			},
			"image": "./v/v2.42.0/0248m.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Destructive Instinct",
				"description": "Causes a sandstorm when the user enters a battle. Extends the duration of a sandstorm when a sandstorm is caused while the user is on the field. Powers up the user’s moves and sync move during a sandstorm."
			},
			{
				"name": "Silver’s Rebellious Spirit",
				"description": "Powers up the moves of all allied sync pairs during a sandstorm. Protects all allied sync pairs from damage from a sandstorm."
			},
			{
				"name": "Fuel Economy 1",
				"description": "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by one."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Johto Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Johto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Rock",
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
				"name": "Champion",
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
				"name": "Stone Edge",
				"type": "Rock",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "80",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
			},
			{
				"user": "Trainer",
				"name": "Johto Passion",
				"type": "Trainer",
				"gauge": "1",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank. Applies Johto Circle (Physical) to the allied field of play. Johto Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Johto theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Massive Rock Slide",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move one time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Makes the target flinch. Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Eyes on Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. In addition, grants all of the following effects during a sandstorm: Reduces the user’s sync move countdown by one. Raises the user’s accuracy by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Emotional Resolve Rock Slide",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Tyranitar until the end of battle."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ADAMAN_URSALUNA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.42.0/adaman_BG.png",
	"trainer": {
		"name": "Adaman (Special Costume)",
		"images": {
			"base": "./v/v2.42.0/adaman.png",
			"ex": "./v/v2.42.0/adaman_EX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"exRole": "Support",
	"pokemonType": "Ground",
	"pokemonWeakness": "Water",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Ursaluna",
			"formName": "",
			"stats": {
				"hp": "738",
				"atk": "297",
				"def": "137",
				"spa": "219",
				"spd": "137",
				"spe": "263"
			},
			"statsLVL150": {
				"hp": "772",
				"atk": "313",
				"def": "143",
				"spa": "231",
				"spd": "143",
				"spe": "277"
			},
			"image": "./v/v2.42.0/0901.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Burning Dance",
				"description": "Powers up the user’s moves when it is affected by a status condition. Ignores the reduction of the user’s Attack due to being burned."
			},
			{
				"name": "Outrun 3",
				"description": "Quickly charges the move gauge when the user is affected by a status condition."
			},
			{
				"name": "Status Cond: S-Moves ↑ 9",
				"description": "Powers up the user’s sync move when it is affected by a status condition."
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
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Nature Lover",
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
				"name": "Facade",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "47-56",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power is doubled when the user is poisoned, badly poisoned, paralyzed, or burned. Ignores lowered Attack from burns."
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
				"name": "(b move) Hazy Headlong Rush",
				"type": "Ground",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user is burned.(lb)Deactivation Condition: When the user is not burned.(lb)(lb)Never misses. The smaller the user’s percentage of remaining HP, the greater the power of this attack."
			},
			{
				"user": "Trainer",
				"name": "Times Are Changing!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. Leaves the user burned."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Moonlit Moves Ground Impact",
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

export const IRIDA_ZOROARK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.42.0/irida_BG.png",
	"trainer": {
		"name": "Irida (Special Costume)",
		"images": {
			"base": "./v/v2.42.0/irida.png",
			"ex": "./v/v2.42.0/irida_EX.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"exRole": "Tech",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Zoroark",
			"formName": "Hisuian Form ",
			"stats": {
				"hp": "648",
				"atk": "419",
				"def": "156",
				"spa": "463",
				"spd": "156",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "678",
				"atk": "441",
				"def": "164",
				"spa": "487",
				"spd": "164",
				"spe": "354"
			},
			"image": "./v/v2.42.0/0571.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit: Free Move Next/Special Boost ↑1",
				"description": "Applies the Free Move Next effect to the user or increases its Special Moves ↑ Next effect by one rank when its attack move is successful."
			},
			{
				"name": "Attack Trap 9",
				"description": "Leaves the target trapped when the user’s attack move against it is successful."
			},
			{
				"name": "Blind Spot",
				"description": "The more the user’s evasiveness is raised, the more it powers up the user’s sync move."
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
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Nature Lover",
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
				"name": "Bitter Malice",
				"type": "Ghost",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "170-204",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Attack by one stat rank."
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
				"description": "Raises the critical-hit rate of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Mystifying Bitter Malice",
				"type": "Ghost",
				"gauge": "-",
				"uses": "2",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Quick Move",
				"description": "Activation Condition: When any allies use moves a total of three times.(lb)Deactivation Condition: When this move is used.(lb)(lb)This attack’s power is doubled against targets that are affected by a status condition, flinching, confused, or trapped. Lowers the target’s Attack by four stat ranks. Makes the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Battle from the Heart!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk and evasiveness by four stat ranks. Applies the Free Move Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dancing to the Flute Ghost Beam",
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
		"movesMAX": []
	}
}

export const TIERNO_CRAWDAUNT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.42.0/tierno_BG.png",
	"trainer": {
		"name": "Tierno",
		"images": {
			"base": "./v/v2.42.0/tierno.png",
			"ex": "./v/v2.42.0/tierno_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Dark",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Crawdaunt",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "171",
				"def": "284",
				"spa": "132",
				"spd": "282",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "179",
				"def": "298",
				"spa": "138",
				"spd": "296",
				"spe": "282"
			},
			"image": "./v/v2.42.0/0342.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit: HP Recovery 9",
				"description": "Restores the user’s HP when its attack move is successful."
			},
			{
				"name": "Team Attack ↓ Immunity",
				"description": "Attack cannot be lowered for all allied sync pairs."
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
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Rival",
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
				"name": "Night Slash",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "40-48",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
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
				"description": "Raises the Defense of all allied sync pairs by two stat ranks."
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
				"description": "Lowers the target’s Defense by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "All Right!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by four stat ranks. Raises the critical-hit rate of all allied sync pairs by two stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Best Dance Team Dark Impact",
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
		"syncMove2": [],
		"movesMAX": []
	}
}

export const DAHLIA_LUDICOLO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.42.0/dahlia_BG.png",
	"trainer": {
		"name": "Dahlia",
		"images": {
			"base": "./v/v2.42.0/dahlia.png",
			"ex": "./v/v2.42.0/dahlia_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Special Strike",
	"pokemonType": "Water",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Ludicolo",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "424",
				"def": "176",
				"spa": "424",
				"spd": "176",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "446",
				"def": "184",
				"spa": "446",
				"spd": "184",
				"spe": "297"
			},
			"image": "./v/v2.42.0/0272.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Max Move Hit: Team Same-Type Rebuff ↓ 1",
				"description": "Lowers the Type Rebuff of all opposing sync pairs by one rank when the user’s max move targeting an opponent is successful. The Type Rebuff lowered is the same type as the max move used."
			},
			{
				"name": "Phys Hit: Defense ↓2 9",
				"description": "Lowers the target’s Defense by two stat ranks when the user’s physical attack move against it is successful."
			},
			{
				"name": "Spec Hit: Sp. Def ↓2 9",
				"description": "Lowers the target’s Sp. Def by two stat ranks when the user’s special attack move against it is successful."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
				"description": ""
			},
			{
				"name": "Artistic",
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
				"name": "Muddy Water",
				"type": "Water",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "116-139",
				"accuracy": "85",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s accuracy by one stat rank."
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
				"user": "Pokemon",
				"name": "Razor Leaf",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "43-51",
				"accuracy": "95",
				"target": "All opponents",
				"effect": "-",
				"description": "Critical hits land more easily."
			},
			{
				"user": "Trainer",
				"name": "No Need to Worry ♪",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by two stat ranks. Raises the user’s accuracy and critical-hit rate by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Smiling Arcade Star Water Beam",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when weather conditions, a terrain, or a zone are in effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Geyser",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Makes the weather rainy."
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
				"name": "Max Overgrowth",
				"type": "Grass",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Grassy Terrain."
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