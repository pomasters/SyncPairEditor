export const PLAYER_REGISTEEL = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Player",
		"images": {
			"base": "./images/trainer_scottie.png",
			"ex": "./images/trainer_bettie.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Steel",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Registeel",
			"formName": "",
			"stats": {
				"hp": "697",
				"atk": "156",
				"def": "249",
				"spa": "156",
				"spd": "249",
				"spe": "240"
			},
			"statsLVL150": {
				"hp": "729",
				"atk": "164",
				"def": "261",
				"spa": "164",
				"spd": "261",
				"spe": "252"
			},
			"image": "./v/v2.36.0/0379.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Last Word",
				"description": "The user uses Explosion immediately before fainting."
			},
			{
				"name": "Status Immunity",
				"description": "Status conditions cannot be inflicted on the user."
			},
			{
				"name": "Dashing Team 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when the user’s attack move is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Steel Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Steel theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"themes": [
			{
				"name": "Steel",
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
				"name": "Metal Claw",
				"type": "Steel",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "21-25",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of raising the user’s Attack by 1 stat rank."
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
				"user": "Trainer",
				"name": "Iron Armor!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Defense and Sp. Def by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ancient Iron Steel Impact",
				"type": "Steel",
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

export const BARRY_ROSERADE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Barry",
		"images": {
			"base": "./v/v2.36.0/barry.png",
			"ex": "./v/v2.36.0/barry.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Grass",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Roserade",
			"formName": "",
			"stats": {
				"hp": "606",
				"atk": "122",
				"def": "202",
				"spa": "176",
				"spd": "229",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "634",
				"atk": "128",
				"def": "212",
				"spa": "184",
				"spd": "241",
				"spe": "282"
			},
			"image": "./v/v2.36.0/0407.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Critical Shock 9",
				"description": "Raises the critical-hit rate of all allied sync pairs by 1 stat rank when the user’s attack move is successful against a paralyzed opponent."
			},
			{
				"name": "Attack Trap 4",
				"description": "Has a chance (50%) of leaving the target trapped when the user’s attack move against it is successful."
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
				"name": "Grass",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Scarf",
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
				"name": "Absorb",
				"type": "Grass",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "19-22",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Absorbs",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
			},
			{
				"user": "Pokemon",
				"name": "Synthesis",
				"type": "Grass",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "Stun Spore",
				"type": "Grass",
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
				"name": "THUD!!!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Critical-Hit Defense effect to the allied field of play. Raises the user’s Defense and Sp. Def by 1 stat rank. Raises the Sp. Atk of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Grow Up Right Grass Beam",
				"type": "Grass",
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

export const OLIVIA_CARBINK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Olivia",
		"images": {
			"base": "./v/v2.36.0/olivia.png",
			"ex": "./v/v2.36.0/olivia.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Rock",
	"pokemonWeakness": "Steel",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Carbink",
			"formName": "",
			"stats": {
				"hp": "518",
				"atk": "112",
				"def": "244",
				"spa": "112",
				"spd": "244",
				"spe": "224"
			},
			"statsLVL150": {
				"hp": "542",
				"atk": "118",
				"def": "256",
				"spa": "118",
				"spd": "256",
				"spe": "236"
			},
			"image": "./v/v2.36.0/0703.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Endurance",
				"description": "When the user enters battle with full HP, applies the Enduring effect to it."
			},
			{
				"name": "Unyielding 2",
				"description": "Except in certain circumstances, when the user’s Enduring effect activates and the user has 1 HP remaining, has a chance (30%) of applying the Enduring effect to the user again."
			},
			{
				"name": "Stat’s Quo 2",
				"description": "Has a chance (30%) of returning the user’s lowered stats to normal when its move is successful."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Rock Lover",
				"description": ""
			},
			{
				"name": "Trial Giver",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Smack Down",
				"type": "Rock",
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
				"name": "X Regen All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Gradual Healing effect to all allied sync pairs."
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
				"name": "No Introduction Needed!",
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
				"name": "Rugged and Adorable Rock Impact",
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

export const VALERIE_MAWILE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Valerie",
		"images": {
			"base": "./v/v2.36.0/valerie.png",
			"ex": "./v/v2.36.0/valerie.png"
		}
	},
	"rarity": "4+ex",
	"role": "Physical Strike",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Mawile",
			"formName": "",
			"stats": {
				"hp": "562",
				"atk": "419",
				"def": "146",
				"spa": "268",
				"spd": "137",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "588",
				"atk": "441",
				"def": "154",
				"spa": "282",
				"spd": "143",
				"spe": "256"
			},
			"image": "./v/v2.36.0/0303.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Super Infliction 9",
				"description": "Applies the Supereffective ↑ Next effect to the user when its Pokémon uses a status move."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			},
			{
				"name": "Headstrong",
				"description": "Attack cannot be lowered."
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
				"name": "Play Rough",
				"type": "Fairy",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "111-133",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Attack by 1 stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Swords Dance",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Iron Head",
				"type": "Steel",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "92-110",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Might You Forgive Me?",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s accuracy by 1 stat rank. Raises the user’s critical-hit rate by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "So Enchanting Fairy Impact",
				"type": "Fairy",
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

export const RED_ARTICUNO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/red_BG.png",
	"trainer": {
		"name": "Red (Champion)",
		"images": {
			"base": "./v/v2.36.0/red.png",
			"ex": "./v/v2.36.0/red_EX.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"pokemonType": "Ice",
	"pokemonWeakness": "Rock",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Articuno",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "336",
				"def": "158",
				"spa": "336",
				"spd": "161",
				"spe": "308"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "354",
				"def": "166",
				"spa": "354",
				"spd": "169",
				"spe": "324"
			},
			"image": "./v/v2.36.0/0144.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Journey from Pallet",
				"description": "The user’s moves never miss. Increases the user’s Special Moves ↑ Next effect by 1 rank when its attack move hits. The more the user’s Special Moves ↑ Next effect is increased, the more it powers up the user’s sync move."
			},
			{
				"name": "Shimmering White Snow",
				"description": "Lowers the target’s Ice Type Rebuff by 1 rank the first time the user’s attack move is successful each battle. Lowers the target’s Ice Type Rebuff by 1 rank the first time the user’s sync move targeting the opponent is successful each battle. This effect can activate only once per battle."
			},
			{
				"name": "P-Moves & S-Moves Crit",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
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
				"name": "Ice",
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
				"name": "Champion",
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
				"name": "Blizzard",
				"type": "Ice",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "126-151",
				"accuracy": "70",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses during a hailstorm. Has a chance (10%) of leaving the target frozen."
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
				"name": "(b move) Frozen Wings Ice Beam",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)(lb)Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. Leaves the target frozen."
			},
			{
				"user": "Trainer",
				"name": "Glory of the Winning Path!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. Raises the user’s Sp. Atk by 6 stat ranks. Increases the user’s Special Moves ↑ Next effect by 2 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Silence of the Raging Blizzard",
				"type": "Ice",
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

export const FALKNER_PIGEOT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Falkner",
		"images": {
			"base": "./v/v2.36.0/falkner.png",
			"ex": "./v/v2.36.0/falkner.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Flying",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pidgeot",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "360",
				"def": "158",
				"spa": "360",
				"spd": "158",
				"spe": "326"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "380",
				"def": "166",
				"spa": "380",
				"spd": "166",
				"spe": "344"
			},
			"image": "./v/v2.36.0/0018.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Trip Up 9",
				"description": "Lowers the target’s Speed by 1 stat rank when the user’s attack move against the target is successful."
			},
			{
				"name": "Pinpoint Entry 1",
				"description": "Raises the user’s accuracy by 1 stat rank when it enters a battle."
			},
			{
				"name": "Acuity",
				"description": "Accuracy cannot be lowered."
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
				"user": "Pokemon",
				"name": "Defog",
				"type": "Flying",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Clears the entire terrain and zone effects. Clears all field effects from the opponents’ field of play. Lowers the target’s evasiveness by 1 stat rank."
			},
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
				"name": "Real Power!",
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
				"name": "Cherished Memories Flying Beam",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Speed is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const DANA_REGICE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/dana_BG.png",
	"trainer": {
		"name": "Dana",
		"images": {
			"base": "./v/v2.36.0/dana.png",
			"ex": "./v/v2.36.0/dana.png"
		}
	},
	"rarity": 5,
	"role": "Support",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fire",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Regice",
			"formName": "",
			"stats": {
				"hp": "697",
				"atk": "132",
				"def": "234",
				"spa": "176",
				"spd": "263",
				"spe": "240"
			},
			"statsLVL150": {
				"hp": "729",
				"atk": "138",
				"def": "246",
				"spa": "184",
				"spd": "277",
				"spe": "252"
			},
			"image": "./v/v2.36.0/0378.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Last Word",
				"description": "The user uses Explosion immediately before fainting."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			},
			{
				"name": "Team Toughen Up 9",
				"description": "Raises the Defense of all allied sync pairs by 1 stat rank when the user is hit by an attack move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Ice Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Ice theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"themes": [
			{
				"name": "Ice",
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
				"name": "Frost Breath",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "38-45",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Except in certain circumstances, successful hits with this attack become critical hits."
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
				"name": "X Sp. Def All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Delighted and Excited!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Heals",
				"description": "Fully restores an ally’s HP. Applies the Damage Guard Next effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Competitive Sister Frost Beam",
				"type": "Ice",
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

export const LEAF_MOLTRES = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/ncleaf_BG.png",
	"trainer": {
		"name": "Leaf (Champion)",
		"images": {
			"base": "./v/v2.36.0/ncleaf.png",
			"ex": "./v/v2.36.0/ncleaf_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Water",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Moltres",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "370",
				"def": "185",
				"spa": "370",
				"spd": "176",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "390",
				"def": "195",
				"spa": "390",
				"spd": "184",
				"spe": "354"
			},
			"image": "./v/v2.36.0/0146.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Love of Pallet",
				"description": "Lowers the target’s Attack, Sp. Atk, and Sp. Def by 1 stat rank when the user’s Pokémon uses a status move targeting that opponent."
			},
			{
				"name": "Sky-Illuminating White Blaze",
				"description": "Lowers the target’s Fire Type Rebuff by 1 rank the first time the user’s Pokémon uses a status move targeting the opponent each battle. This effect can activate only once per battle. Lowers the target’s Fire Type Rebuff by 1 rank the first time the user’s sync move targeting the opponent is successful each battle. This effect can activate only once per battle."
			},
			{
				"name": "Team Solar Immunity",
				"description": "When the weather is sunny, status conditions cannot be inflicted on any allied sync pairs and prevents all allies from flinching, becoming confused, or becoming trapped."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Kanto Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kanto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Fire",
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
				"name": "Champion",
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
				"name": "(b move) Fiery Wings Flare Blitz",
				"type": "Fire",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Ok While Frozen",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)(lb)Removes the frozen condition from the user. If the target's stats are lowered, the amount of decrease is doubled. Makes the weather sunny the first time this attack move is successful each battle. Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Trainer",
				"name": "Glory of the Flame!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by 6 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Burning Love Fire Blast",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s stats are lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BLUE_ZAPDOS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/blue_BG.png",
	"trainer": {
		"name": "Blue (Champion)",
		"images": {
			"base": "./v/v2.36.0/blue.png",
			"ex": "./v/v2.36.0/blue_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ice",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Zapdos",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "156",
				"def": "302",
				"spa": "156",
				"spd": "302",
				"spe": "356"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "164",
				"def": "318",
				"spa": "164",
				"spd": "318",
				"spe": "374"
			},
			"image": "./v/v2.36.0/0145.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Pride of Pallet",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 1 stat rank when the user’s attack move is successful. Applies the Free Move Next effect to the user when its attack move is successful. Has a chance (30%) of making the target flinch when the user’s attack move against it is successful."
			},
			{
				"name": "Roaring White Lightning",
				"description": "Lowers the target’s Electric Type Rebuff by 1 rank the first time the user’s attack move is successful each battle. Lowers the target’s Electric Type Rebuff by 1 rank the first time the user’s sync move targeting the opponent is successful each battle. This effect can activate only once per battle."
			},
			{
				"name": "Team S-Moves Power ↑ 2",
				"description": "Powers up the sync moves of all allied sync pairs."
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Champion",
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
				"name": "X Speed All +",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by 3 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Thundering Wings Roost",
				"type": "Flying",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)(lb)Restores the HP of all allied sync pairs by approximately 30% of their maximum HP. In addition, restores the user’s HP by approximately 30% of its maximum HP. Removes all status conditions from all allied sync pairs. Applies the Gradual Healing effect to all allied sync pairs."
			},
			{
				"user": "Trainer",
				"name": "Glory of Leadership!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by 3 stat ranks. Uses a maximum of 3 slots of the user’s move gauge. The more amount used, the more it raises the Sp. Atk of all allied sync pairs (can be raised by up to 6 stat ranks maximum). Increases the Special Moves ↑ Next effect of all allied sync pairs by 2 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Name-Echoing Thunder",
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

export const LEAF_CLEFABLE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Leaf",
		"images": {
			"base": "./v/v2.36.0/leaf.png",
			"ex": "./v/v2.36.0/leaf.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Clefable",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "176",
				"def": "210",
				"spa": "176",
				"spd": "210",
				"spe": "224"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "184",
				"def": "220",
				"spa": "184",
				"spd": "220",
				"spe": "236"
			},
			"image": "./v/v2.36.0/0036.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Healthy Healing",
				"description": "Applies the Gradual Healing effect to the user when its HP is full when it enters a battle."
			},
			{
				"name": "Charging Infliction 1",
				"description": "Charges the user’s move gauge by 1 when its Pokémon uses a status move."
			},
			{
				"name": "Escape Artist",
				"description": "Prevents the user from becoming trapped."
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
				"name": "Metronome",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Uses one of several moves at random."
			},
			{
				"user": "Pokemon",
				"name": "Moonlight",
				"type": "Fairy",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "Disarming Voice",
				"type": "Fairy",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "45-54",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "Hit ’Em with Love!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Rarely Seen Fairy Beam",
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

export const PAULO_LYCANROC = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/paulo_BG.png",
	"trainer": {
		"name": "Paulo",
		"images": {
			"base": "./v/v2.36.0/paulo.png",
			"ex": "./v/v2.36.0/paulo_EX.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"pokemonType": "Rock",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Lycanroc",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "424",
				"def": "190",
				"spa": "268",
				"spd": "190",
				"spe": "463"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "446",
				"def": "200",
				"spa": "282",
				"spd": "200",
				"spe": "487"
			},
			"image": "./v/v2.36.0/0745.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Paulo’s Resolve",
				"description": "Reduces the user’s sync move countdown by 1 after using its max move. Extends the duration of a sandstorm when a sandstorm is caused while the user is on the field. Protects all allied sync pairs from damage from a sandstorm."
			},
			{
				"name": "“Quick Move”: Sync CD ↓ 9",
				"description": "Reduces the user’s sync move countdown by 1 when it uses a move that has the quick move effect tag."
			},
			{
				"name": "“Quick Move”: Physical Boost ↑1 9",
				"description": "Increases the user’s Physical Moves ↑ Next effect by 1 rank when it uses a move that has the quick move effect tag."
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Knowledgeable",
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
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "80",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
			},
			{
				"user": "Pokemon",
				"name": "Accelerock",
				"type": "Rock",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "75-90",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Quick Move",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Willful Howl",
				"type": "Normal",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When the user uses a sync move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Uses a maximum of 3 slots of the user’s move gauge. The more amount used, the more it raises the Attack, Defense, Sp. Def, and Speed of all allied sync pairs (can be raised by up to 4 stat ranks maximum). Increases the Physical Moves ↑ Next effect of all allied sync pairs by 2 ranks."
			},
			{
				"user": "Trainer",
				"name": "Gotta Think!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. Raises the user’s Attack by 4 stat ranks. Raises the user’s critical-hit rate by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "On the Path Together Rock Impact",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases during a sandstorm."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Rockfall",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Causes a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "Max Rockfall",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Causes a sandstorm."
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

export const TINA_FLAREON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/tina_BG.png",
	"trainer": {
		"name": "Tina",
		"images": {
			"base": "./v/v2.36.0/tina.png",
			"ex": "./v/v2.36.0/tina_EX.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Fire",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Flareon",
			"formName": "",
			"stats": {
				"hp": "606",
				"atk": "132",
				"def": "200",
				"spa": "112",
				"spd": "229",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "634",
				"atk": "138",
				"def": "210",
				"spa": "118",
				"spd": "241",
				"spe": "256"
			},
			"image": "./v/v2.36.0/0136.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Catalytic Infliction",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name": "Team Mind-Bracing Infliction 2",
				"description": "Raises the Sp. Def of all allied sync pairs by 2 stat ranks the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name": "Endurance",
				"description": "When the user enters battle with full HP, applies the Enduring effect to it."
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
				"name": "We’re Going Too!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Defense, Sp. Def, and Speed of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Warm Feelings Fire Impact",
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
		"movesMAX": []
	}
}

export const GIOVANNI_RHYDON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Giovanni",
		"images": {
			"base": "./v/v2.36.0/giovanni.png",
			"ex": "./v/v2.36.0/giovanni.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"pokemonType": "Ground",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Rhydon",
			"formName": "",
			"stats": {
				"hp": "684",
				"atk": "351",
				"def": "174",
				"spa": "351",
				"spd": "154",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "716",
				"atk": "369",
				"def": "182",
				"spa": "369",
				"spd": "162",
				"spe": "256"
			},
			"image": "./v/v2.36.0/0112.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Giovanni’s Experience",
				"description": "Powers up the user’s moves during a sandstorm. Extends the duration of a sandstorm when a sandstorm is caused while the user is on the field. Protects all allied sync pairs from damage from a sandstorm."
			},
			{
				"name": "Hit the Gas 5",
				"description": "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves."
			},
			{
				"name": "Ferocious Entry 6",
				"description": "Raises the user’s Attack and Sp. Atk by 6 stat ranks when it enters a battle."
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
				"name": "Kanto",
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
				"name": "(b move) Crushing Earthquake",
				"type": "Ground",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "120-144",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)The more the user’s Sp. Atk is raised, the greater the power of this attack. Causes a sandstorm the first time this attack move is successful each battle. Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Icy Wind",
				"type": "Ice",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "92-110",
				"accuracy": "95",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
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
				"name": "Do Not Defy Me!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Critical Hit Next effect to an ally. Applies the Supereffective ↑ Next effect to an ally. Applies the Free Move Next effect to an ally. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of an ally by 1 rank during a sandstorm."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Remembering the Past Ground Impact",
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

export const ARCHER_HOUNDOOM = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/archer_BG.png",
	"trainer": {
		"name": "Archer",
		"images": {
			"base": "./v/v2.36.0/archer.png",
			"ex": "./v/v2.36.0/archer_EX.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Houndoom",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "424",
				"def": "161",
				"spa": "424",
				"spd": "176",
				"spe": "395"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "446",
				"def": "169",
				"spa": "446",
				"spd": "184",
				"spe": "415"
			},
			"image": "./v/v2.36.0/0229.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Archer’s Proposal",
				"description": "Lowers the Speed of all opposing sync pairs by 1 stat rank when the user’s attack move is successful. Lowers the Speed of all opposing sync pairs by 2 stat ranks after using the user’s sync move."
			},
			{
				"name": "Head Start 1",
				"description": "Reduces the user’s sync move countdown by 1 the first time it enters a battle each battle."
			},
			{
				"name": "Hunter’s Instinct",
				"description": "The more the target’s Speed is lowered, the more it powers up the user’s moves."
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
				"name": "Johto",
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
				"name": "Bite",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "X Attack",
				"type": "Trainer",
				"gauge": "-",
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
				"name": "Don’t Care for That!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. Raises the Speed and evasiveness of all allied sync pairs by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Regaining Evil Glory Dark Impact",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Speed is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ARIANA_ARBOK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/ariana_BG.png",
	"trainer": {
		"name": "Ariana",
		"images": {
			"base": "./v/v2.36.0/ariana.png",
			"ex": "./v/v2.36.0/ariana_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Arbok",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "390",
				"def": "176",
				"spa": "370",
				"spd": "176",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "410",
				"def": "184",
				"spa": "390",
				"spd": "184",
				"spe": "297"
			},
			"image": "./v/v2.36.0/0024.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ariana’s Coercion",
				"description": "Lowers the Attack and Sp. Atk of all opposing sync pairs by 2 stat ranks the first time the user enters a battle each battle."
			},
			{
				"name": "On a Roll 9",
				"description": "Raises the chance of lowering stat values with the additional effects of moves."
			},
			{
				"name": "Attack Trap 4",
				"description": "Has a chance (50%) of leaving the target trapped when the user’s attack move against it is successful."
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
				"name": "Johto",
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
				"user": "Pokemon",
				"name": "Poison Fang",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "34-40",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (50%) of leaving the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "How Dare...!",
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
				"name": "Punish the Meddlers Poison Impact",
				"type": "Poison",
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
		"movesMAX": []
	}
}

export const PETREL_WEEZING = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/petrel_BG.png",
	"trainer": {
		"name": "Petrel",
		"images": {
			"base": "./v/v2.36.0/petrel.png",
			"ex": "./v/v2.36.0/petrel_EX.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"pokemonType": "Poison",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Weezing",
			"formName": "",
			"stats": {
				"hp": "632",
				"atk": "448",
				"def": "137",
				"spa": "448",
				"spd": "132",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "662",
				"atk": "472",
				"def": "143",
				"spa": "472",
				"spd": "138",
				"spe": "282"
			},
			"image": "./v/v2.36.0/0110.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Petrel’s Ploy",
				"description": "Has a chance (30%) of lowering the target’s Sp. Def by 1 stat rank when the user’s attack move against the target is successful. Has a chance (30%) of making the target flinch when the user’s attack move against it is successful."
			},
			{
				"name": "Piercing Blows",
				"description": "Grants all of the following effects when the user is attacking:"
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
				"name": "Poison",
				"description": ""
			},
			{
				"name": "Johto",
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
				"user": "Trainer",
				"name": "Mwahahaha!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense by 2 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Applies the Supereffective ↑ Next effect to the user. Applies the Enduring effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Deceiving Disguise Poison Beam",
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

export const PROTON_GOLBAT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/proton_BG.png",
	"trainer": {
		"name": "Proton",
		"images": {
			"base": "./v/v2.36.0/proton.png",
			"ex": "./v/v2.36.0/proton_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Flying",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Golbat",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "200",
				"def": "273",
				"spa": "200",
				"spd": "288",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "210",
				"def": "287",
				"spa": "210",
				"spd": "302",
				"spe": "302"
			},
			"image": "./v/v2.36.0/0042.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Proton’s Plan",
				"description": "Charges the user’s move gauge by 1 when its move is successful. Charges the user’s move gauge by 1 when it is hit by an attack move."
			},
			{
				"name": "All Ramped Up 1",
				"description": "Raises the Sp. Atk of all allied sync pairs by 1 stat rank when the user’s move is successful."
			},
			{
				"name": "Stop Hitting Yourself 5",
				"description": "Raises the chance that an opponent will attack themselves due to being confused."
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
				"name": "X Sp. Def All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Air Slash",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "45-54",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "I’ll Show You Wrath!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Speed, accuracy, and critical-hit rate of all allied sync pairs by 1 stat rank. Increases the Special Moves ↑ Next effect of all allied sync pairs by 1 rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Scariest and Cruelest Flying Beam",
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

export const PALMER_REGIGIGAS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/palmer_BG.png",
	"trainer": {
		"name": "Palmer",
		"images": {
			"base": "./v/v2.36.0/palmer.png",
			"ex": "./v/v2.36.0/palmer_EX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Regigigas",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "336",
				"def": "161",
				"spa": "224",
				"spd": "161",
				"spe": "297"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "354",
				"def": "169",
				"spa": "236",
				"spd": "169",
				"spe": "313"
			},
			"image": "./v/v2.36.0/0486.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sync Buff & Hit: Physical Boost ↑3 9",
				"description": "Increases the user’s Physical Moves ↑ Next effect by 3 ranks when its attack move is successful while its team has a sync buff."
			},
			{
				"name": "Sync Freebie",
				"description": "Applies the Free Move Next effect to the user after using its sync move."
			},
			{
				"name": "Max Move: Free Move Next",
				"description": "Applies the Free Move Next effect to the user after using its max move."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
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
				"name": "Crush Grip",
				"type": "Normal",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "260-312",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The smaller the target’s percentage of remaining HP, the lower the power of this attack becomes."
			},
			{
				"user": "Trainer",
				"name": "Normal Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Normal Zone. (A Normal Zone powers up Normal-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) G Giga Impact",
				"type": "Normal",
				"gauge": "4",
				"uses": "1",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Heals",
				"description": "Activation Condition: When the user uses any moves, sync move, or max move a total of five times.(lb)Deactivation Condition: When this move is used.(lb)(lb)Lowers the target’s Defense by 6 stat ranks. Restores the user’s HP by approximately 50% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "You’ve Come This Far!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 3 stat ranks. Raises the user’s critical-hit rate by 2 stat ranks. Increases the user’s Physical Moves ↑ Next effect by 1 rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Towering Tower Tycoon Normal Impact",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Strike",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "450-540",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the Speed of all opposing sync pairs by 2 stat ranks."
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
				"name": "Max Strike",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "450-540",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the Speed of all opposing sync pairs by 2 stat ranks."
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

export const ARGENTA_SKARMORY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.36.0/argenta_BG.png",
	"trainer": {
		"name": "Argenta",
		"images": {
			"base": "./v/v2.36.0/argenta.png",
			"ex": "./v/v2.36.0/argenta_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Steel",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Skarmory",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "200",
				"def": "317",
				"spa": "132",
				"spd": "297",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "210",
				"def": "333",
				"spa": "138",
				"spd": "313",
				"spe": "297"
			},
			"image": "./v/v2.36.0/0227.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Stat Share 9",
				"description": "When a status move used by the user’s Pokémon raises its stats only, raises the same stats by the same amount for all allied sync pairs instead."
			},
			{
				"name": "Use Status P-Move: Team Physical Boost ↑1 9",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by 1 rank when the user’s Pokémon uses a status move."
			},
			{
				"name": "Use Status P-Move: Team Accuracy ↑2 9",
				"description": "Raises the accuracy of all allied sync pairs by 2 stat ranks when the user’s Pokémon uses a status move."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
				"description": ""
			},
			{
				"name": "Grown Woman",
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
				"name": "Metal Claw",
				"type": "Steel",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "21-25",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of raising the user’s Attack by 1 stat rank."
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
				"name": "Swords Dance",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Keep with It!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Speed of all allied sync pairs by 4 stat ranks. Applies the Enduring effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shining Favorite Steel Impact",
				"type": "Steel",
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