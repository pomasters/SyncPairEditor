export const CHEREN_TORNADUS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.45.0/nccheren_BG.png",
	"trainer": {
		"name": "Cheren (Champion)",
		"images": {
			"base": "./v/v2.45.0/nccheren.png",
			"ex": "./v/v2.45.0/nccheren_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Special Strike",
	"pokemonType": "Flying",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Tornadus",
			"formName": "Incarnate Forme",
			"stats": {
				"hp": "653",
				"atk": "336",
				"def": "173",
				"spa": "336",
				"spd": "175",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "683",
				"atk": "354",
				"def": "181",
				"spa": "354",
				"spd": "183",
				"spe": "354"
			},
			"image": "./v/v2.45.0/0641.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Season-Turning Power",
				"description": "The user’s moves never miss. Raises the user’s Sp. Atk by 4 stat ranks when it enters a battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "New Teacher’s Quick Wit",
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by 1 rank when its attack move is successful. The more the user’s Physical Moves ↑ Next effect is increased, the more it powers up its moves. The more the user’s Physical Moves ↑ Next effect is increased, the more it powers up its sync move."
			},
			{
				"name": "S-Move: Physical Boost ↑2 & Special Boost ↑2 9",
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by 2 ranks after using its sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Unova Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Unova theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
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
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Cape",
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
				"name": "Bleakwind Storm",
				"type": "Flying",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "179-214",
				"accuracy": "80",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses when the weather is rainy. Has a chance (30%) of lowering the target’s Speed by 1 stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Fly",
				"type": "Flying",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "169-202",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "Quick Move, Flying",
				"description": "The user begins flying. After a set time, the user stops flying and attacks. No other actions can be taken while flying. Most moves used by opponents will not hit the user while it is flying. If the user is hit by a sync move or max move while flying, it will stop flying."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Black Gale Bleakwind Storm",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user uses any moves one time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. The more the user’s Physical Moves ↑ Next effect is increased, the greater the power of this attack. Lowers the target’s Speed by 2 stat ranks. Lowers the target’s Flying Type Rebuff by 1 rank the first time this attack move is successful each battle."
			},
			{
				"user": "Trainer",
				"name": "Thoughts of Glory",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Applies the Supereffective ↑ Next effect to the user. Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by 2 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Wall for Challengers Bleakwind Storm",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target’s Type Rebuff is lowered."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const CHEREN_PURRLOIN = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Cheren",
		"images": {
			"base": "./v/v2.45.0/cheren.png",
			"ex": "./v/v2.45.0/cheren.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Purrloin",
			"formName": "",
			"stats": {
				"hp": "599",
				"atk": "346",
				"def": "156",
				"spa": "346",
				"spd": "156",
				"spe": "263"
			},
			"statsLVL150": {
				"hp": "627",
				"atk": "364",
				"def": "164",
				"spa": "364",
				"spd": "164",
				"spe": "277"
			},
			"image": "./v/v2.45.0/0509.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Aggravation 1",
				"description": "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
			},
			{
				"name": "Move Gauge Refresh 2",
				"description": "Has a chance (30%) of charging the user’s move gauge by one when a move is successful."
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
				"name": "Dark",
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
				"name": "Rival",
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
				"name": "Fake Tears",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Sp. Def by 2 stat ranks."
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
				"name": "Dark Pulse",
				"type": "Dark",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "95-114",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "What to Do...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk and Speed by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Toward My Ideals Dark Beam",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
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

export const BIANCA_VIRIZION = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.45.0/ncbianca_BG.png",
	"trainer": {
		"name": "Bianca (Champion)",
		"images": {
			"base": "./v/v2.45.0/ncbianca.png",
			"ex": "./v/v2.45.0/ncbianca_EX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"exRole": "Support",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Flying",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Virizion",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "482",
				"def": "132",
				"spa": "458",
				"spd": "154",
				"spe": "308"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "508",
				"def": "138",
				"spa": "482",
				"spd": "162",
				"spe": "324"
			},
			"image": "./v/v2.45.0/0640.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Will to Protect",
				"description": "Applies Unova Circle (Defensive) to the allied field of play the first time the user enters a battle each battle. Powers up the moves and sync moves of all allied sync pairs when Unova Circle (Defensive) is applied to the allied field of play. Applies the Free Move Next effect to the user when its attack move is successful while Unova Circle (Defensive) is applied to the allied field of play."
			},
			{
				"name": "Assistant’s Observations",
				"description": "Raises the Speed and evasiveness of all allied sync pairs by 1 stat rank when the user’s attack move is successful."
			},
			{
				"name": "Piercing Blows",
				"description": "Grants all of the following effects when the user is attacking: Ignores the target’s passive skills that would reduce the damage of attacks. Ignores the target’s passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Unova Flag Bearer",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Unova theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],
		"themes": [
			{
				"name": "Fighting",
				"description": ""
			},
			{
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Glasses",
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
				"name": "Sacred Sword",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "90-108",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Ignores the target’s raised stats."
			},
			{
				"user": "Trainer",
				"name": "Unova Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "Sure Hit",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by 1 rank. Applies Unova Circle (Defensive) to the allied field of play. Unova Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Unova theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) White Light Sacred Sword",
				"type": "Fighting",
				"gauge": "3",
				"uses": "1",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Activation Condition: When Unova Circle (Defensive) is applied to the allied field of play.(lb)Deactivation Condition: When Unova Circle (Defensive) is no longer applied to the allied field of play.(lb)(lb)Never misses. Ignores the target’s raised stats. Lowers the target’s Attack and Sp. Atk by 3 stat ranks. Lowers the target’s Fighting Type Rebuff by 2 ranks."
			},
			{
				"user": "Trainer",
				"name": "First Step to Glory",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. Raises the user’s Attack by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Steps to a New Path Sacred Sword",
				"type": "Fighting",
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

export const LARRY_DUDUNSPARCE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.45.0/larry_BG.png",
	"trainer": {
		"name": "Larry",
		"images": {
			"base": "./v/v2.45.0/larry.png",
			"ex": "./v/v2.45.0/larry_EX.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "Tech",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Dudunsparce",
			"formName": "Two-Segment Form",
			"stats": {
				"hp": "748",
				"atk": "336",
				"def": "166",
				"spa": "307",
				"spd": "166",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "782",
				"atk": "354",
				"def": "174",
				"spa": "323",
				"spd": "174",
				"spe": "354"
			},
			"image": "./v/v2.45.0/0982.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Working Man’s Methods",
				"description": "Raises the user’s Attack by 4 stat ranks when it enters a battle. Grants all of the following effects when the user is attacking: Ignores the target’s passive skills that would reduce the damage of attacks. Ignores the target’s passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
			},
			{
				"name": "Opp Rebuff ↓: Team Moves ↑ 2",
				"description": "Powers up the moves of all allied sync pairs when attacking a target with a lowered Type Rebuff."
			},
			{
				"name": "Rebuff Reducing Hit (Weakness)",
				"description": "Lowers the target’s Type Rebuff of its weakness type by one rank the first time the user’s attack move is successful each battle."
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
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "Hyper Drill",
				"type": "Normal",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "100",
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
				"name": "(b move) Bullet Speed Hyper Drill",
				"type": "Normal",
				"gauge": "-",
				"uses": "2",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Quick Move, Sure Hit",
				"description": "Activation Condition: When the user uses any moves one time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the target’s Defense by 2 stat ranks. Lowers the target’s Normal Type Rebuff by 1 rank. Applies the Free Move Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "Plain and Simple",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "Sure Hit",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Reduces the user’s sync move countdown by 1. Raises the Speed of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Exceptional Everyman Hyper Drill",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target’s Type Rebuff is lowered."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const KABU_CENTISKORCH = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.45.0/kabu_BG.png",
	"trainer": {
		"name": "Kabu",
		"images": {
			"base": "./v/v2.45.0/kabu.png",
			"ex": "./v/v2.45.0/kabu_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Physical Strike",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Centiskorch",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "336",
				"def": "300",
				"spa": "336",
				"spd": "300",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "354",
				"def": "316",
				"spa": "354",
				"spd": "316",
				"spe": "297"
			},
			"image": "./v/v2.45.0/0851.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Max Move: Team Attack ↑ & Team Sp. Atk ↑ 4",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by 4 stat ranks after using the user’s max move."
			},
			{
				"name": "1st Use Status P-Move: Team Crit Rate ↑ 3",
				"description": "Raises the critical-hit rate of all allied sync pairs by 3 stat ranks the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name": "Hot to the Touch 9",
				"description": "Leaves an opponent that attacked the user burned when the user is hit by an attack move."
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
				"name": "Gym Leader",
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
				"name": "Ember",
				"type": "Fire",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "17-20",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target burned."
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
				"user": "Pokemon",
				"name": "(b move) Blazing Flame Wheel",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "OK While Frozen, Heals",
				"description": "Activation Condition: When there is at least one trapped Pokémon on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any trapped Pokémon on the opponent’s field of play.(lb)(lb)Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned. Restores the HP of all allied sync pairs when the target is burned. Restores the HP of all allied sync pairs when the target is trapped."
			},
			{
				"user": "Trainer",
				"name": "Get Your Mind Moving!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "Sure Hit",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 2 stat ranks. Raises the user’s Fire Type Rebuff by 1 rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ever-Burning Man Fire Impact",
				"type": "Fire",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "G-Max Centiferno",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves all opposing sync pairs trapped."
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
				"name": "G-Max Centiferno",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves all opposing sync pairs trapped."
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