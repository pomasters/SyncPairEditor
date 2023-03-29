export const MARNIE_MOLTRES = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.30.0/marnieBG.png",
	"trainer": {
		"name": "Marnie (Champion)",
		"images": {
			"base": "./v/v2.30.0/marnie.png",
			"ex": "./v/v2.30.0/marnieEX.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Moltres",
			"formName": "Galarian Form",
			"stats": {
				"hp": "728",
				"atk": "380",
				"def": "137",
				"spa": "502",
				"spd": "137",
				"spe": "271"
			},
			"statsLVL150": {
				"hp": "762",
				"atk": "400",
				"def": "143",
				"spa": "528",
				"spd": "143",
				"spe": "285"
			},
			"image": "./v/v2.30.0/0146.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sinister Aura",
				"description": "Reduces the user’s sync move countdown by 1 the first time it enters a battle each battle. Raises the user’s critical-hit rate by 3 stat ranks the first time it enters a battle each battle."
			},
			{
				"name": "Spikemuth Grit",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time its HP drops to half or below each battle. Increases the user’s Special Moves ↑ Next effect by 3 ranks the first time its HP drops to half or below each battle."
			},
			{
				"name": "Mind over Matter 4",
				"description": "The user’s Sp. Atk increases 40% when its HP is reduced."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Galar Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Galar theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Dark",
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
				"name": "Pigtails",
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
				"name": "Fiery Wrath",
				"type": "Dark",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "155-186",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
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
				"name": "(b move) B Fiery Wrath",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "Quick Move",
				"description": "Activation Condition: When your team’s sync pair uses a sync move 1 time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Has a chance (50%) of making the target flinch. Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. The power and chance of applying additional effects of this move are not lowered even if there are multiple targets. This attack’s power increases 20% when the user is in a pinch."
			},
			{
				"user": "Trainer",
				"name": "Triumphant Spirit!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Recoil",
				"description": "Raises the user’s Sp. Atk by 6 stat ranks. Raises the user’s Speed by 4 stat ranks. Raises the user’s evasiveness by 2 stat ranks. Applies the Enduring effect to the user. The user takes damage equal to 10% of its remaining HP."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Distaste for Defeat Fiery Wrath",
				"type": "Dark",
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

export const GLORIA_THWACKEY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Gloria",
		"images": {
			"base": "./v/v2.30.0/gloria.png",
			"ex": "./v/v2.30.0/gloria.png"
		}
	},
	"rarity": "4+ex",
	"role": "Physical Strike",
	"pokemonType": "Grass",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Thwackey",
			"formName": "",
			"stats": {
				"hp": "572",
				"atk": "356",
				"def": "117",
				"spa": "224",
				"spd": "117",
				"spe": "224"
			},
			"statsLVL150": {
				"hp": "598",
				"atk": "374",
				"def": "123",
				"spa": "236",
				"spd": "123",
				"spe": "236"
			},
			"image": "./v/v2.30.0/0811.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Standfast 9",
				"description": "Reduces recoil damage received from using moves that have the recoil effect tag."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Super Preparation 4",
				"description": "Has a chance (50%) of applying the Supereffective ↑ Next effect to the user when its move is successful."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Cook",
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
				"name": "Wood Hammer",
				"type": "Grass",
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
				"name": "Glorious Advantage!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s Speed by 2 stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Spice It Up Grass Impact",
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

export const HOP_ZAPDOS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.30.0/hopBG.png",
	"trainer": {
		"name": "Hop (Champion)",
		"images": {
			"base": "./v/v2.30.0/hop.png",
			"ex": "./v/v2.30.0/hopEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Zapdos",
			"formName": "Galarian Form",
			"stats": {
				"hp": "582",
				"atk": "356",
				"def": "202",
				"spa": "333",
				"spd": "202",
				"spe": "317"
			},
			"statsLVL150": {
				"hp": "608",
				"atk": "374",
				"def": "212",
				"spa": "351",
				"spd": "212",
				"spe": "333"
			},
			"image": "./v/v2.30.0/0145.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Lightning Legs",
				"description": "Reduces the user’s sync move countdown by 1 the first time it enters a battle each battle. Raises the user’s Attack by 6 stat ranks the first time it enters a battle each battle."
			},
			{
				"name": "Postwick Perseverance",
				"description": "When an opponent’s Defense is lowered by the additional effects of the user’s moves, lowers the opponent’s Sp. Def by the same amount."
			},
			{
				"name": "Down for a Freebie 9",
				"description": "Applies the Free Move Next effect to the user when any of its stats are lowered."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Galar Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Galar theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Fighting",
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
				"name": "Cape",
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
				"name": "Thunderous Kick",
				"type": "Fighting",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "140-168",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Defense by 1 stat rank."
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
				"name": "(b move) B Thunderous Kick",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync move countdown is reduced by 6 while this move is deactivated.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. Lowers the target’s Defense and Speed by 3 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Triumphant Research!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Fighting Zone. (A Fighting Zone powers up Fighting-type attacks.) Raises the user’s Speed by 3 stat ranks. Lowers the user’s Sp. Def by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Strongest Professor Thunderous Kick",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
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

export const BEDE_ARTICUNO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.30.0/bedeBG.png",
	"trainer": {
		"name": "Bede (Champion)",
		"images": {
			"base": "./v/v2.30.0/bede.png",
			"ex": "./v/v2.30.0/bedeEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Articuno",
			"formName": "Galarian Form",
			"stats": {
				"hp": "779",
				"atk": "224",
				"def": "307",
				"spa": "244",
				"spd": "317",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "815",
				"atk": "236",
				"def": "323",
				"spa": "256",
				"spd": "333",
				"spe": "256"
			},
			"image": "./v/v2.30.0/0144.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Conniving Wings",
				"description": "Reduces the user’s sync move countdown by 1 the first time it enters a battle each battle. Raises the Speed of all allied sync pairs by 2 stat ranks the first time the user enters a battle each battle."
			},
			{
				"name": "Ballonlea Teachings",
				"description": "Restores 1 MP of the user’s moves after your team’s sync pair uses their sync move."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Galar Flag Bearer",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Galar theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],
		"themes": [
			{
				"name": "Psychic",
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
				"name": "Scarf",
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
				"name": "Freezing Glare",
				"type": "Psychic",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "156-187",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target frozen."
			},
			{
				"user": "Pokemon",
				"name": "Confusion",
				"type": "Psychic",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "18-21",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target confused."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Freezing Glare",
				"type": "Psychic",
				"gauge": "-",
				"uses": "1",
				"category": "Special",
				"power": "170-204",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync move countdown is reduced by 3 while this move is deactivated. (The activation countdown is not reduced when the remaining MP for this move is 0.)(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Has a chance (10%) of leaving the target frozen. Raises the Defense and Sp. Def of all allied sync pairs by 1 stat rank. Applies the Free Move Next effect to all allied sync pairs."
			},
			{
				"user": "Trainer",
				"name": "Triumphant Tenacity!",
				"type": "Trainer",
				"gauge": "4",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Sp. Atk, and critical-hit rate of all allied sync pairs by 2 stat ranks. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by 1 rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Always Winning Freezing Glare",
				"type": "Psychic",
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

export const BALLGUY_AMOONGUSS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.30.0/ballguyBG.png",
	"trainer": {
		"name": "Ball Guy",
		"images": {
			"base": "./v/v2.30.0/ballguy.png",
			"ex": "./v/v2.30.0/ballguyEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Amoonguss",
			"formName": "",
			"stats": {
				"hp": "718",
				"atk": "200",
				"def": "269",
				"spa": "200",
				"spd": "278",
				"spe": "181"
			},
			"statsLVL150": {
				"hp": "752",
				"atk": "210",
				"def": "283",
				"spa": "210",
				"spd": "292",
				"spe": "191"
			},
			"image": "./v/v2.30.0/0591.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Destructive Touch 9",
				"description": "Leaves an opponent that attacked the user poisoned, paralyzed, or asleep when the user is hit by an attack move."
			},
			{
				"name": "Underhanded Refresh 9",
				"description": "Restores 1 MP for the user’s moves when its attack move is successful against targets that are affected by a status condition."
			},
			{
				"name": "Team Hit Me Up 9",
				"description": "Raises one of the following stats of all allied sync pairs by 1 stat rank at random when the user is hit by an attack move: Attack, Defense, Sp. Atk, Sp. Def, or Speed."
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
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Absorb",
				"type": "Grass",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "19-22",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
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
				"name": "Clear Smog",
				"type": "Poison",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "63-75",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Never misses. Returns the target’s raised stats to normal. "
			},
			{
				"user": "Trainer",
				"name": "On the Ball!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "Heals",
				"description": "Activates one of several additional effects at random. Restores the user’s HP by approximately 10% of its maximum HP. Removes all status conditions from all allied sync pairs. Raises the critical-hit rate of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Full of Surprises Poison Beam",
				"type": "Poison",
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