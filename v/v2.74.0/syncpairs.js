export const AS_GLADION_SILVALLY = {
	"bg": "./v/v2.74.0/Tx_ch0119_90_gladion_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Gladion",
		"images": {
			"base": "./v/v2.74.0/ch0119_90_gladion_1024.png",
			"ex": "./v/v2.74.0/ch0119_90_gladion_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Physical Strike",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Silvally",
			"formName": "",
			"stats": {
				"hp": "678",
				"atk": "472",
				"def": "203",
				"spa": "472",
				"spd": "203",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "710",
				"atk": "498",
				"def": "213",
				"spa": "498",
				"spd": "213",
				"spe": "351"
			},
			"statsLVL200": {
				"hp": "870",
				"atk": "628",
				"def": "263",
				"spa": "628",
				"spd": "263",
				"spe": "441"
			},
			"image": "./v/v2.74.0/pm0862_11_gryps2_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Solitary Claws That Safeguard Alola",
				"description": "Applies Alola Circle (Physical) to the allied field of play the first time the user enters a battle each battle. Raises the user’s Attack by six stat ranks the first time it enters a battle each battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "Kindred Bond",
				"description": "Reduces the MP for the user’s AlolaPassion by one and grants all of the following effects after your team’s sync pair uses their sync move: Reduces the user’s sync move countdown by one. Increases the Physical Moves ↑ Next effect of all allied sync pairs by two ranks. Applies Alola Circle (Physical) to the allied field of play."
			},
			{
				"name": "Beast Killer Break",
				"description": "Applies the Physical Move Break effect to all opposing sync pairs the first time the user’s sync move is used each battle. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Blank Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Normal theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Blank Judgment",
				"description": "Raises the Normal Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Normal Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Normal",
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
				"name": "Arc Suit",
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
				"name": "(b move) Almighty Multi-Attack",
				"type": "Normal",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Defense by two stat ranks. The power of this move is not lowered even if there are multiple targets. Increases the user’s Sync Move&nbsp;↑ Next effect by one&nbsp;rank for each hit."
			},
			{
				"user": "Trainer",
				"name": "Alola Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Alola Circle (Physical) to the allied field of play. Alola Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Alola theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Almighty Crush Claw",
				"type": "Normal",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "450-540",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. This attack’s power is doubled against targets that are affected by the Physical Move Break effect. Lowers the target’s Defense by two stat ranks. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "My Resolve!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Removes all status conditions and the flinching, confused, and trapped conditions from the user. Applies the Enduring effect to the user. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks when its remaining HP is at 50% or more. Fully restores the user’s HP when its remaining HP is less than 50%."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "(divine move) Unspoken Understanding Divine Multi-Attack",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "350-420",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Normal Zone the first time the user’s sync move is used each battle. (A Normal Zone powers up Normal-type attacks.)"
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const AS_HAU_RAICHU = {
	"bg": "./v/v2.74.0/Tx_ch0098_90_hau_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Hau",
		"images": {
			"base": "./v/v2.74.0/ch0098_90_hau_1024.png",
			"ex": "./v/v2.74.0/ch0098_90_hau_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Physical Strike",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Raichu",
			"formName": "Alola Form",
			"stats": {
				"hp": "676",
				"atk": "424",
				"def": "189",
				"spa": "423",
				"spd": "206",
				"spe": "355"
			},
			"statsLVL150": {
				"hp": "708",
				"atk": "446",
				"def": "199",
				"spa": "445",
				"spd": "216",
				"spe": "373"
			},
			"statsLVL200": {
				"hp": "868",
				"atk": "556",
				"def": "249",
				"spa": "555",
				"spd": "266",
				"spe": "463"
			},
			"image": "./v/v2.74.0/pm0026_61_araichu_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Soothing Breeze of Southern Lands",
				"description": "Raises the user’s Attack by six stat ranks when it enters a battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Extends the duration of Electric Terrain when the terrain turns into Electric Terrain while the user is on the field."
			},
			{
				"name": "Sweet Smell of Pancakes",
				"description": "Restores one MP of the user’s buddy move after your team’s sync pair uses their sync move. Reduces the MP for the user’s Electric Terrain by one and grants all of the following effects after your team’s sync pair uses their sync move: Reduces the user’s sync move countdown by three. Turns the field of play’s terrain into Electric Terrain."
			},
			{
				"name": "Happy-Go-Lucky Hodad",
				"description": "Raises the Speed and evasiveness of all allied sync pairs by two stat ranks when the user turns the field of play’s terrain into Electric Terrain. Increases the Physical Moves ↑ Next effect of all allied sync pairs by two ranks when the user turns the field of play’s terrain into Electric Terrain."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Zap Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Electric theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Zap Judgment",
				"description": "Raises the Electric Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Electric Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
		"passivesSuperawakening": [],
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Arc Suit",
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
				"name": "(b move) Almighty Thunder Punch",
				"type": "Electric",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "240-288",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Defense by three stat ranks. Leaves the target paralyzed."
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
				"name": "(b move) Almighty Spark",
				"type": "Electric",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Leaves the target paralyzed. The power of this move is not lowered even if there are multiple targets. The more the user’s Speed is raised, the more it increases its Physical Moves&nbsp;↑ Next effect (can be increased by up to three&nbsp;ranks maximum)."
			},
			{
				"user": "Trainer",
				"name": "Feel the Alolan Shine!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Electric Terrain. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "(divine move) Hustle and Bustle Divine Gigavolt Havoc",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Speed is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LANCE_AERODACTYL = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Lance",
		"images": {
			"base": "./v/v2.74.0/ch0111_00_wataru_1024.png",
			"ex": "./v/v2.74.0/ch0111_00_wataru_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Field",
	"pokemonType": "Rock",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Aerodactyl",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "448",
				"def": "167",
				"spa": "448",
				"spd": "167",
				"spe": "380"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "472",
				"def": "175",
				"spa": "472",
				"spd": "175",
				"spe": "400"
			},
			"statsLVL200": {
				"hp": "835",
				"atk": "592",
				"def": "215",
				"spa": "592",
				"spd": "215",
				"spe": "500"
			},
			"image": "./v/v2.74.0/pm0142_00_ptera_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Dragon King of Ancient Skies",
				"description": "Applies Kanto Circle (Special) to the allied field of play the first time the user enters a battle each battle. Applies Kanto Circle (Special) to the allied field of play the first time the user’s sync move is used each battle. Applies the Free Move Next effect to the user when its attack move is successful while a circle applies to the allied field of play."
			},
			{
				"name": "Ally Sets Circle: Team Special Boost ↑1 9",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank when an ally applies a circle to the allied field of play."
			},
			{
				"name": "Rock Shift",
				"description": "Normal-type moves become Rock-type moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Hyper Beam",
				"type": "Rock",
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
				"name": "Kanto Analysis",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Kanto Circle (Special) to the allied field of play. Kanto Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kanto theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Venerable Wings Ancient Power",
				"type": "Rock",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "300-360",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)The power of this move is not lowered even if there are multiple targets. Turns the field of play’s zone into a Rock Zone. (A Rock Zone powers up Rock-type attacks.) Raises the Attack, Defense, Sp.&nbsp;Atk, Sp.&nbsp;Def, and Speed of all allied sync pairs by one stat rank. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by two ranks."
			},
			{
				"user": "Trainer",
				"name": "Good, Good!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Raises the user’s Sp.&nbsp;Atk by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. The user takes damage equal to 20% of its remaining HP."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Amber-Restored King of the Skies Rock Beam",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Sp.&nbsp;Atk is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SELENE_LYCANROC = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Selene",
		"images": {
			"base": "./v/v2.74.0/ch0123_00_mizuki_1024.png",
			"ex": "./v/v2.74.0/ch0123_00_mizuki_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Rock",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Lycanroc",
			"formName": "Midnight Form",
			"stats": {
				"hp": "660",
				"atk": "200",
				"def": "268",
				"spa": "127",
				"spd": "268",
				"spe": "317"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "210",
				"def": "282",
				"spa": "133",
				"spd": "282",
				"spe": "333"
			},
			"statsLVL200": {
				"hp": "840",
				"atk": "260",
				"def": "352",
				"spa": "163",
				"spd": "352",
				"spe": "413"
			},
			"image": "./v/v2.74.0/pm0829_12_okami2night_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit: Attack ↓ & Sp. Atk ↓ 9",
				"description": "Lowers the target’s Attack and Sp. Atk by one stat rank when the user’s attack move is successful."
			},
			{
				"name": "1st Use Status P-Move: Team Crit Rate ↑ 2",
				"description": "Raises the critical-hit rate of all allied sync pairs by two stat ranks the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name": "Team Sandstorm Immunity",
				"description": "Protects all allied sync pairs from damage from a sandstorm."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Rock Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Rock theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Nature Lover",
				"description": ""
			},
			{
				"name": "Alola Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Rock Tomb",
				"type": "Rock",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "39-46",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by one stat rank."
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
				"effect": "-",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "Sandstorm",
				"type": "Rock",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Causes a sandstorm."
			},
			{
				"user": "Trainer",
				"name": "First Move Wins!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Speed of all allied sync pairs by four stat ranks. Raises the evasiveness of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Moonlight Howl Continental Crush",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BEDE_HATTREM = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Bede",
		"images": {
			"base": "./v/v2.74.0/ch0246_00_beet_1024.png",
			"ex": "./v/v2.74.0/ch0246_00_beet_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Field",
	"exRole": "",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Hattrem",
			"formName": "",
			"stats": {
				"hp": "602",
				"atk": "336",
				"def": "137",
				"spa": "404",
				"spd": "147",
				"spe": "265"
			},
			"statsLVL150": {
				"hp": "630",
				"atk": "354",
				"def": "143",
				"spa": "426",
				"spd": "155",
				"spe": "279"
			},
			"statsLVL200": {
				"hp": "770",
				"atk": "444",
				"def": "173",
				"spa": "536",
				"spd": "195",
				"spe": "349"
			},
			"image": "./v/v2.74.0/pm0857_00_00_tebrim_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Aggravation 9",
				"description": "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
			},
			{
				"name": "Weird Charge 9",
				"description": "Charges the user’s move gauge by one when it uses a move while the terrain is Psychic Terrain."
			},
			{
				"name": "Psychic Stasis",
				"description": "The user’s stats cannot be lowered when the terrain is Psychic Terrain."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Rival",
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
				"name": "X Speed",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Speed by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Psychic",
				"type": "Psychic",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "I Should Correct You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Psychic Terrain. Raises an ally’s Defense and Sp.&nbsp;Def by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Silence the Rabble Psychic Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const VICTOR_URSHIFUDARK = {
	"bg": "./v/v2.74.0/Tx_ch0242_41_masaru_mindscape00.png",
	"trainer": {
		"name": "Victor (Academy)",
		"images": {
			"base": "./v/v2.74.0/ch0242_41_masaru_1024.png",
			"ex": "./v/v2.74.0/ch0242_41_masaru_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Support",
	"pokemonType": "Dark",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Urshifu",
			"formName": "Single Strike Style",
			"stats": {
				"hp": "200",
				"atk": "140",
				"def": "40",
				"spa": "140",
				"spd": "40",
				"spe": "300"
			},
			"statsLVL150": {
				"hp": "210",
				"atk": "146",
				"def": "42",
				"spa": "146",
				"spd": "42",
				"spe": "316"
			},
			"statsLVL200": {
				"hp": "260",
				"atk": "176",
				"def": "52",
				"spa": "176",
				"spd": "52",
				"spe": "396"
			},
			"image": "./v/v2.74.0/pm0892_11_00_wulaosu_256.png"
		}
	],
	"skills": {
		"passives": [],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Galar Adventurer",
				"description": ""
			},
			{
				"name": "Pasio Academy",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Wicked Blow",
				"type": "Dark",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "120-144",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Except in certain circumstances, successful hits with this attack become critical hits."
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
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Path of the Single Strike Dark Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const VICTOR_URSHIFUWATER = {
	"bg": "./v/v2.74.0/Tx_ch0242_41_masaru_mindscape00.png",
	"trainer": {
		"name": "Victor (Academy)",
		"images": {
			"base": "./v/v2.74.0/ch0242_41_masaru_1024.png",
			"ex": "./v/v2.74.0/ch0242_41_masaru_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Support",
	"pokemonType": "Water",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Urshifu",
			"formName": "Rapid Strike Style",
			"stats": {
				"hp": "200",
				"atk": "140",
				"def": "40",
				"spa": "140",
				"spd": "40",
				"spe": "300"
			},
			"statsLVL150": {
				"hp": "210",
				"atk": "146",
				"def": "42",
				"spa": "146",
				"spd": "42",
				"spe": "316"
			},
			"statsLVL200": {
				"hp": "260",
				"atk": "176",
				"def": "52",
				"spa": "176",
				"spd": "52",
				"spe": "396"
			},
			"image": "./v/v2.74.0/pm0892_12_00_wulaosu_256.png"
		}
	],
	"skills": {
		"passives": [],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Water",
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
			},
			{
				"name": "Pasio Academy",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Surging Strikes",
				"type": "Water",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "40-48",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Attacks three times in a row. Except in certain circumstances, successful hits with this attack become critical hits."
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
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Path of Rapid Strikes Water Impact",
				"type": "Water",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BEA_MACHAMP = {
	"bg": "./v/v2.74.0/Tx_ch0250_80_saida_mindscape00.png",
	"trainer": {
		"name": "Bea (Alt.)",
		"images": {
			"base": "./v/v2.74.0/ch0250_80_saida_1024.png",
			"ex": "./v/v2.74.0/ch0250_80_saida_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Field",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Machamp",
			"formName": "",
			"stats": {
				"hp": "656",
				"atk": "448",
				"def": "169",
				"spa": "333",
				"spd": "180",
				"spe": "311"
			},
			"statsLVL150": {
				"hp": "686",
				"atk": "472",
				"def": "177",
				"spa": "351",
				"spd": "188",
				"spe": "327"
			},
			"statsLVL200": {
				"hp": "836",
				"atk": "592",
				"def": "217",
				"spa": "441",
				"spd": "228",
				"spe": "407"
			},
			"image": "./v/v2.74.0/pm0068_00_kairiky_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Galar Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Galar theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Soul-Shaking Fists",
				"description": "Reduces the user’s sync move countdown by one when it applies a circle to the allied field of play. Increases the Sync Move ↑ Next effect of all allied sync pairs by five ranks when the user applies a circle to the allied field of play. Extends the duration of Galar Circle (Physical) when Galar Circle (Physical) is applied to the allied field of play."
			},
			{
				"name": "Let’s Just Destroy Everything!",
				"description": "When the user’s max move attacks an opponent, the target becomes all opposing sync pairs. The power of max moves affected by this passive skill is not lowered even if there are multiple targets. Reduces the user’s sync move countdown by two after using its max move. Turns the field of play’s zone into a Fighting Zone after using the user’s max move. (A Fighting Zone powers up Fighting-type attacks.)"
			},
			{
				"name": "1st S-Move: Team Physical Break",
				"description": "Applies the Physical Move Break effect to all opposing sync pairs the first time the user’s sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Galar Karate Prodigy",
				"description": "Powers up the sync moves of all allied sync pairs when a circle applies to the allied field of play. Increases the user’s Physical Moves ↑ Next effect by two ranks when its Trainer uses a move."
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
				"name": "Gym Leader",
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
				"name": "Dynamic Punch",
				"type": "Fighting",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "198-237",
				"accuracy": "50",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target confused."
			},
			{
				"user": "Trainer",
				"name": "Galar Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Galar Circle (Physical) to the allied field of play. Galar Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Galar theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Sturdy Cross Chop",
				"type": "Fighting",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Critical hits land more easily. The power of this move is not lowered even if there are multiple targets. Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank when the user lands a critical hit."
			},
			{
				"user": "Trainer",
				"name": "Worthy of Respect!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Raises the user’s Attack and accuracy by six stat ranks. Applies the Critical Hit Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Punch Through Any Wall Fighting Impact",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is confused."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "G-Max Chi Strike",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by three stat ranks."
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
				"name": "G-Max Chi Strike",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by three stat ranks."
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

export const DENDRA_MEDICHAM = {
	"bg": "./v/v2.74.0/Tx_ch0346_00_kihada_mindscape00.png",
	"trainer": {
		"name": "Dendra",
		"images": {
			"base": "./v/v2.74.0/ch0346_00_kihada_1024.png",
			"ex": "./v/v2.74.0/ch0346_00_kihada_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Field",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Medicham",
			"formName": "Tera Type: Fighting",
			"stats": {
				"hp": "652",
				"atk": "424",
				"def": "142",
				"spa": "424",
				"spd": "142",
				"spe": "313"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "446",
				"def": "148",
				"spa": "446",
				"spd": "148",
				"spe": "329"
			},
			"statsLVL200": {
				"hp": "832",
				"atk": "556",
				"def": "178",
				"spa": "556",
				"spd": "178",
				"spe": "409"
			},
			"image": "./v/v2.74.0/pm0308_01_charem_256.png"
		},
		{
			"name": "Medicham",
			"formName": "Tera Type: Fighting",
			"stats": {
				"hp": "652",
				"atk": "424",
				"def": "142",
				"spa": "424",
				"spd": "142",
				"spe": "313"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "446",
				"def": "148",
				"spa": "446",
				"spd": "148",
				"spe": "329"
			},
			"statsLVL200": {
				"hp": "832",
				"atk": "556",
				"def": "178",
				"spa": "556",
				"spd": "178",
				"spe": "409"
			},
			"image": "./v/v2.74.0/pm0308_72_07_charem_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Debut: Fighting S-Tera",
				"description": "The user Sync Terastallizes into Fighting type the first time it enters a battle each battle."
			},
			{
				"name": "Osu It Up and Smash Your Limits!",
				"description": "Reduces the user’s sync move countdown by one when it turns the field of play’s zone into a Fighting Zone. Increases the user’s Special Moves ↑ Next effect by one rank when it turns the field of play’s zone into a Fighting Zone."
			},
			{
				"name": "Hold Out Against That Lactic Acid!",
				"description": "Extends the duration of the Fighting Zone when the zone turns into a Fighting Zone while the user is on the field. Quickly charges the move gauge when the zone is a Fighting Zone."
			}
		],
		"passives2": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Let’s Get to It!",
				"description": "Increases the user’s Special Moves ↑ Next effect by one rank when an ally turns the field of play’s zone into a Fighting Zone. Restores one MP of the user’s buddy move when an ally turns the field of play’s zone into a Fighting Zone."
			},
			{
				"name": "Osu It Up and Smash Your Limits!",
				"description": "Reduces the user’s sync move countdown by one when it turns the field of play’s zone into a Fighting Zone. Increases the user’s Special Moves ↑ Next effect by one rank when it turns the field of play’s zone into a Fighting Zone."
			},
			{
				"name": "Hold Out Against That Lactic Acid!",
				"description": "Extends the duration of the Fighting Zone when the zone turns into a Fighting Zone while the user is on the field. Quickly charges the move gauge when the zone is a Fighting Zone."
			}
		],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Hot-Blooded Battle Studies",
				"description": "Reduces the user’s sync move countdown by one the first time its sync move is used each battle. Increases the user’s Special Moves ↑ Next effect by two ranks after using its sync move."
			}
		],
		"themes": [
			{
				"name": "Fighting",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Body Builder",
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
				"name": "Zen Headbutt",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "51-61",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Fighting Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Fighting Zone. (A Fighting Zone powers up Fighting-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Searing Spirit Focus Blast",
				"type": "Fighting",
				"gauge": "4",
				"uses": "1",
				"category": "Special",
				"power": "280-336",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: When the user’s Sp.&nbsp;Atk is not raised.(lb)(lb)Never misses. The more the user’s Attack is raised, the greater the power of this attack. Lowers the target’s Sp.&nbsp;Def by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Osu! Osu!!!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Hot-Blooded Muscles Tera Blast",
				"type": "Fighting",
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
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "Zen Headbutt",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "51-61",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Fighting Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Fighting Zone. (A Fighting Zone powers up Fighting-type attacks.)"
			},
			{
				"user": "Pokemon2",
				"name": "(tera)(b move) Searing Spirit Focus Blast",
				"type": "Fighting",
				"gauge": "4",
				"uses": "1",
				"category": "Special",
				"power": "280-336",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: When the user’s Sp.&nbsp;Atk is not raised.(lb)(lb)Never misses. The more the user’s Attack is raised, the greater the power of this attack. Lowers the target’s Sp.&nbsp;Def by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Osu! Osu!!!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera)Amber Tera Blast",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "120-144",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "The more the user’s Attack is raised, the greater the power of this attack. Lowers the target’s Sp. Def by two stat ranks. The power of this move is not lowered even if there are multiple targets."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}