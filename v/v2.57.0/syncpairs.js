export const ELIO_NECROZMA = {
	"bg": "./v/v2.57.0/Tx_ch0122_90_yo_mindscape00.png",
	"trainer": {
		"name": "Elio (Champion)",
		"images": {
			"base": "./v/v2.57.0/ch0122_90_yo_1024.png",
			"ex": "./v/v2.57.0/ch0122_90_yo_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Steel",
	"pokemonWeakness": "Dark",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "(shiny) Necrozma",
			"formName": "Dusk Mane",
			"stats": {
				"hp": "679",
				"atk": "482",
				"def": "158",
				"spa": "414",
				"spd": "158",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "508",
				"def": "166",
				"spa": "436",
				"spd": "166",
				"spe": "328"
			},
			"image": "./v/v2.57.0/pm0865_12_prismsun_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Beast That Devours the Sun",
				"description": "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves. Raises the user’s Attack by six stat ranks when it enters a battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			},
			{
				"name": "Limitless Power",
				"description": "Increases the user’s Physical Moves ↑ Next effect by two ranks when an ally applies a circle to the allied field of play. Increases the user’s Sync Move ↑ Next effect by three ranks when an ally applies a circle to the allied field of play."
			},
			{
				"name": "Gentle Morning Sun",
				"description": "Reduces the MP for the user’s Morning Sun by one and grants all of the following effects when its HP drops to half or below: Restores the user’s HP by approximately 50% of its maximum HP. Increases the user’s Physical Moves ↑ Next effect by two ranks."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Alola Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Alola theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Steel",
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
				"name": "Champion",
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
				"name": "Sunsteel Strike",
				"type": "Steel",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
			},
			{
				"user": "Pokemon",
				"name": "Morning Sun",
				"type": "Normal",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Solar Sunsteel Strike",
				"type": "Steel",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "330-396",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. Lowers the target’s Defense by three stat ranks. The power of this move is not lowered even if there are multiple targets. If the remaining MP for the user’s Morning Sun is one or more when attacking with this move, applies Alola Circle (Physical) to the allied field of play. Alola Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Alola theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Trainer",
				"name": "Sunward Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by three ranks. Applies Alola Circle (Physical) to the allied field of play. Alola Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Alola theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dusk Solar Eclipse Sunsteel Strike",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const IRIS_DRUDDIGON = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Iris",
		"images": {
			"base": "./v/v2.57.0/ch0092_00_iris_1024.png",
			"ex": "./v/v2.57.0/ch0092_00_iris_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Druddigon",
			"formName": "",
			"stats": {
				"hp": "601",
				"atk": "176",
				"def": "228",
				"spa": "156",
				"spd": "228",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "629",
				"atk": "184",
				"def": "240",
				"spa": "164",
				"spd": "240",
				"spe": "256"
			},
			"image": "./v/v2.57.0/pm0621_00_crimgan_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Take Hit: Trap Opponent 9",
				"description": "Leaves an opponent that attacked the user trapped when the user is hit by an attack move."
			},
			{
				"name": "Move Gauge Refresh 4",
				"description": "Has a chance (50%) of charging the user’s move gauge by one when its move is successful."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Dragon",
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
				"name": "Dragon Claw",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "50-60",
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
				"description": "Raises the critical-hit rate of all allied sync pairs by two stat ranks."
			},
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
				"name": "Super Curious!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp.&nbsp;Atk of all allied sync pairs by four stat ranks. Raises the Speed of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Get Closer to Pokémon Dragon Impact",
				"type": "Dragon",
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

export const SELENE_NECROZMA = {
	"bg": "./v/v2.57.0/Tx_ch0123_90_mizuki_mindscape00.png",
	"trainer": {
		"name": "Selene (Champion)",
		"images": {
			"base": "./v/v2.57.0/ch0123_90_mizuki_1024.png",
			"ex": "./v/v2.57.0/ch0123_90_mizuki_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Field",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "MaleFemale",
	"pokemon": [
		{
			"name": "(shiny) Necrozma",
			"formName": "Dawn Wings",
			"stats": {
				"hp": "679",
				"atk": "414",
				"def": "176",
				"spa": "448",
				"spd": "176",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "436",
				"def": "184",
				"spa": "472",
				"spd": "184",
				"spe": "369"
			},
			"image": "./v/v2.57.0/pm0865_13_prismmoon_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Beast That Calls the Moon",
				"description": "Extends the duration of Alola Circle (Special) when Alola Circle (Special) is applied to the allied field of play. When an attack move used by the user’s Pokémon that targets itself or an ally is successful, that attack’s target becomes all allied sync pairs. When an attack move used by the user’s Pokémon that targets an opponent is successful, that attack’s target becomes all opposing sync pairs. When the user’s sync move attacks an opponent, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves and sync moves affected by this passive skill are not lowered even if there are multiple targets. Raises the user’s Sp. Atk by six stat ranks when it enters a battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "Continuously Expel Energy",
				"description": "Grants one of the following effects depending on how many opponents were hit after using the user’s sync move:Applies the Free Move Next effect to the user when exactly three opponents were hit.Charges the user’s move gauge by two and increases its Special Moves ↑ Next effect by one rank when exactly two opponents were hit.Increases the user’s Special Moves ↑ Next effect by three ranks when exactly one opponent was hit."
			},
			{
				"name": "Warm Moonlight",
				"description": "Reduces the MP for the user’s Moonlight by one and grants all of the following effects when its HP drops to half or below: Restores the user’s HP by approximately 50% of its maximum HP. Increases the user’s Special Moves ↑ Next effect by two ranks."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Alola Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Alola theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Champion",
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
				"name": "Moongeist Beam",
				"type": "Ghost",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "160-192",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
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
				"effect": "-",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Lunar Moongeist Beam",
				"type": "Ghost",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "430-516",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. Lowers the target’s Sp.&nbsp;Def by three stat ranks. The more MP remaining for the user’s Moonlight when attacking with this move, the more it reduces its sync move countdown (can be reduced by up to three maximum)."
			},
			{
				"user": "Trainer",
				"name": "Moonlit Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Applies the Supereffective ↑ Next effect to the user. Increases the user’s Special Moves&nbsp;↑ Next effect by three&nbsp;ranks. Applies Alola Circle (Special) to the allied field of play. Alola Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Alola theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dawn Lunar Eclipse Moongeist Beam",
				"type": "Ghost",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Sp.&nbsp;Atk is raised, the greater the power of this attack. Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BEDE_MAWILE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Bede",
		"images": {
			"base": "./v/v2.57.0/ch0246_00_beet_1024.png",
			"ex": "./v/v2.57.0/ch0246_00_beet_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Mawile",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "414",
				"def": "190",
				"spa": "414",
				"spd": "185",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "436",
				"def": "200",
				"spa": "436",
				"spd": "195",
				"spe": "297"
			},
			"image": "./v/v2.57.0/pm0303_00_kucheat_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ethereal Entrance",
				"description": "Turns the field of play’s zone into a Fairy Zone the first time the user enters a battle each battle. (A Fairy Zone powers up Fairy-type attacks.)"
			},
			{
				"name": "Terrify 2",
				"description": "Lowers the Attack of all opposing sync pairs by two stat ranks when the user enters a battle."
			},
			{
				"name": "Satisfied Snarl 9",
				"description": "Lowers the target’s Sp. Atk by one stat rank when a move targeting that opponent is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Fairy",
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
				"user": "Trainer",
				"name": "Mini Potion All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP."
			},
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
				"description": "Lowers the target’s Sp. Def by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "How Bothersome...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Defense and critical-hit rate by one stat rank. Raises an ally’s Sp.&nbsp;Atk by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Unbreakable Will Fairy Beam",
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

export const LARRY_FLAMIGO = {
	"bg": "./v/v2.57.0/Tx_ch0304_40_aoki_mindscape00.png",
	"trainer": {
		"name": "Larry (Special Costume)",
		"images": {
			"base": "./v/v2.57.0/ch0304_40_aoki_1024.png",
			"ex": "./v/v2.57.0/ch0304_40_aoki_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Flying",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Flamigo",
			"formName": "",
			"stats": {
				"hp": "664",
				"atk": "200",
				"def": "314",
				"spa": "200",
				"spd": "303",
				"spe": "317"
			},
			"statsLVL150": {
				"hp": "696",
				"atk": "210",
				"def": "330",
				"spa": "210",
				"spd": "319",
				"spe": "333"
			},
			"image": "./v/v2.57.0/pm0973_00_00_karamingo_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ally Stat ↑: Sync Move Boost ↑1 9",
				"description": "Increases an ally’s Sync Move ↑ Next effect by one rank when any of its stats are raised."
			},
			{
				"name": "1st Time Take S-Move Hit: Team HP Recovery 2",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP the first time the user is hit by a sync move each battle."
			},
			{
				"name": "Take S-Move Hit: Team Phys & Spec Boost ↑1 9",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user is hit by a sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Flying",
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
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
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
				"name": "(b move) Summer Sky Feather Dance",
				"type": "Flying",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the Attack and Sp.&nbsp;Atk of all opposing sync pairs by two stat ranks. Turns the field of play’s zone into a Flying Zone. (A Flying Zone powers up Flying-type attacks.) Raises the evasiveness of all allied sync pairs by two stat ranks. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "It’s Got Flavor...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by four stat ranks. Raises the accuracy of all allied sync pairs by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Peculiar Flavor Flying Beam",
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

export const CLIVE_AMOONGUSS = {
	"bg": "./v/v2.57.0/Tx_ch0358_00_nelke_mindscape00.png",
	"trainer": {
		"name": "Clive",
		"images": {
			"base": "./v/v2.57.0/ch0358_00_nelke_1024.png",
			"ex": "./v/v2.57.0/ch0358_00_nelke_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Poison",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Amoonguss",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "414",
				"def": "187",
				"spa": "448",
				"spd": "187",
				"spe": "239"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "436",
				"def": "197",
				"spa": "472",
				"spd": "197",
				"spe": "251"
			},
			"image": "./v/v2.57.0/pm0591_00_morobareru_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ally Hits Flinching Opp: Phys & Spec Boost ↑1 9",
				"description": "Increases an ally’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by one rank when its attack move is successful against a flinching opponent."
			},
			{
				"name": "Ally Hits Confused Opp: MG ↑2 9",
				"description": "Charges an ally’s move gauge by two when its attack move is successful against a confused opponent."
			},
			{
				"name": "Ally Hits Trapped Opp: HP Recovery 9",
				"description": "Restores an ally’s HP by approximately 10% of its maximum HP when its attack move is successful against a trapped opponent."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Sunglasses",
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
				"name": "(b move) Alluring Sweet Scent",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the evasiveness of all opposing sync pairs by two stat ranks. Leaves all opposing sync pairs either flinching, confused, or trapped. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Restores the user’s HP by approximately 10% of its maximum HP. Makes opponents target the user for a short time."
			},
			{
				"user": "Trainer",
				"name": "Stay Sharp Out There!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s evasiveness by six stat ranks. Applies the Enduring effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Just Between Us Poison Beam",
				"type": "Poison",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is flinching, confused, or trapped."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SAMSON_OAK_EXEGGUTOR = {
	"bg": "./v/v2.57.0/Tx_ch0138_00_orchid2_mindscape00.png",
	"trainer": {
		"name": "Samson Oak",
		"images": {
			"base": "./v/v2.57.0/ch0138_00_orchid2_1024.png",
			"ex": "./v/v2.57.0/ch0138_00_orchid2_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Exeggutor ",
			"formName": "Alolan Form",
			"stats": {
				"hp": "650",
				"atk": "336",
				"def": "297",
				"spa": "224",
				"spd": "297",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "354",
				"def": "313",
				"spa": "236",
				"spd": "313",
				"spe": "282"
			},
			"image": "./v/v2.57.0/pm0103_61_00_anassy_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Blazing Sunlight Transformation",
				"description": "Restores one MP of the user’s moves that have the Berry effect tag when it uses Sitrus Berry while the weather is sunny. Has a chance (50%) of restoring one MP of the user’s moves that have the Berry effect tag when it uses Sitrus Berry while the weather is not sunny."
			},
			{
				"name": "Advantageous Abundance",
				"description": "Grants all of the following effects when the user uses Sitrus Berry: Makes opponents target the user for a short time. Applies the Take Next \"All\" Move effect to the user. Increases the user’s Physical Moves ↑ Next effect by two ranks."
			},
			{
				"name": "Max Move: Dragon Zone",
				"description": "Turns the field of play’s zone into a Dragon Zone after using the user’s max move. (A Dragon Zone powers up Dragon-type attacks.)"
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Dragon",
				"description": ""
			},
			{
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Sunglasses",
				"description": ""
			},
			{
				"name": "Researcher",
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
				"name": "Bullet Seed",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "15-18",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Attacks the target two to five times in a row."
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
				"effect": "-",
				"description": "Restores an ally’s HP by approximately 20% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Taaaaaall Dragon Hammer",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Physical Moves&nbsp;↑ Next effect is rank two or higher.(lb)Deactivation Condition: When the user’s Physical Moves&nbsp;↑ Next effect is rank one or lower.(lb)(lb)Leaves the target confused. Leaves the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "How Interesting!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp.&nbsp;Atk of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Big Wave–Riding Researcher Dragon Impact",
				"type": "Dragon",
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
				"description": "Lowers the Attack of all opposing sync pairs by two stat ranks."
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

export const GORDIE_BARBARACLE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Gordie",
		"images": {
			"base": "./v/v2.57.0/ch0254_00_gordie_1024.png",
			"ex": "./v/v2.57.0/ch0254_00_gordie_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Rock",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Barbaracle",
			"formName": "",
			"stats": {
				"hp": "675",
				"atk": "180",
				"def": "301",
				"spa": "132",
				"spd": "301",
				"spe": "332"
			},
			"statsLVL150": {
				"hp": "707",
				"atk": "190",
				"def": "317",
				"spa": "138",
				"spd": "317",
				"spe": "350"
			},
			"image": "./v/v2.57.0/pm0748_00_kamenote2_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ally Crit: Power ↑ 1",
				"description": "Powers up allies’ attacks when they become critical hits."
			},
			{
				"name": "Quick Tempo",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user enters a battle each battle."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "(b move) Huge Boulder Iron Defense",
				"type": "Steel",
				"gauge": "1",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by two stat ranks. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "Become a Monolith!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp.&nbsp;Atk of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Hard Crusher Rock Impact",
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

export const MELONY_FROSMOTH = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Melony",
		"images": {
			"base": "./v/v2.57.0/ch0255_00_melon_1024.png",
			"ex": "./v/v2.57.0/ch0255_00_melon_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Ice",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Frosmoth",
			"formName": "",
			"stats": {
				"hp": "649",
				"atk": "132",
				"def": "292",
				"spa": "200",
				"spd": "312",
				"spe": "308"
			},
			"statsLVL150": {
				"hp": "679",
				"atk": "138",
				"def": "308",
				"spa": "210",
				"spd": "328",
				"spe": "324"
			},
			"image": "./v/v2.57.0/pm0873_00_00_mothnow_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit: Attack ↓ & Sp. Atk ↓ 9",
				"description": "Lowers the target’s Attack and Sp. Atk by one stat rank when the user’s attack move is successful."
			},
			{
				"name": "Debut: Field Special DR & Extension 5",
				"description": "Applies the Special Damage Reduction effect to the allied field of play the first time the user enters a battle each battle. Extends the duration of the Special Damage Reduction effect when the Special Damage Reduction effect is applied to the allied field of play."
			},
			{
				"name": "Condition Nullification",
				"description": "Prevents the user from being inflicted with status conditions, flinching, becoming confused, or becoming trapped."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Ice",
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
				"name": "Veteran Trainer",
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
				"name": "Powder Snow",
				"type": "Ice",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "16-19",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target frozen."
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
				"name": "(b move) Silver Snow Mist",
				"type": "Ice",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the Special Damage Reduction effect is applied to the allied field of play.(lb)Deactivation Condition: When the Special Damage Reduction effect is no longer applied to the allied field of play.(lb)(lb)Never misses. Returns the raised stats of all opposing sync pairs to normal. Applies the No Stat Increases effect to the opponent’s field of play. Applies the Stat Reduction Defense effect to the allied field of play. Returns lowered stats of all allied sync pairs to normal. Applies the Supereffective&nbsp;↑ Next effect to all allied sync pairs. Applies the Free Move Next effect to all allied sync pairs."
			},
			{
				"user": "Trainer",
				"name": "Lower the Temperature!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Severe Battle Style Frost Beam",
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