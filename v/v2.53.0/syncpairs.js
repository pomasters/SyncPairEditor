export const BROCK_KABUTOPS = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Brock",
		"images": {
			"base": "./v/v2.53.0/ch0015_00_takeshi_1024.png",
			"ex": "./v/v2.53.0/ch0015_00_takeshi_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Rock",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Kabutops",
			"formName": "",
			"stats": {
				"hp": "646",
				"atk": "161",
				"def": "267",
				"spa": "132",
				"spd": "252",
				"spe": "294"
			},
			"statsLVL150": {
				"hp": "676",
				"atk": "169",
				"def": "281",
				"spa": "138",
				"spd": "266",
				"spe": "310"
			},
			"image": "./v/v2.53.0/pm0141_00_kabutops_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Fossil Excavation Finds",
				"description": "Powers up the Rock-type moves of all allied sync pairs. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user applies a circle to the allied field of play."
			},
			{
				"name": "Adrenaline 1",
				"description": "Reduces the sync move countdown by one the first time the user’s sync move is used each battle."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " The Mystique of Fossil Pokémon",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Applies Kanto Circle (Defensive) to the allied field of play the first time the user’s sync move is used each battle. Extends the duration of Kanto Circle (Defensive) when Kanto Circle (Defensive) is applied to the allied field of play."
			}
		],
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
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Rock Lover",
				"description": ""
			},
			{
				"name": "Body Builder",
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
				"name": "Kanto Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Kanto Circle (Defensive) to the allied field of play. Kanto Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Kanto theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
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
				"user": "Trainer",
				"name": "Show Me Your Best!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by three stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Rock-Hard Resolve Rock Impact",
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

export const WINONA_ALTARIA = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Winona",
		"images": {
			"base": "./v/v2.53.0/ch0042_00_nagi_1024.png",
			"ex": "./v/v2.53.0/ch0042_00_nagi_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Flying",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Altaria",
			"formName": "",
			"stats": {
				"hp": "658",
				"atk": "149",
				"def": "246",
				"spa": "149",
				"spd": "262",
				"spe": "285"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "157",
				"def": "258",
				"spa": "157",
				"spd": "276",
				"spe": "299"
			},
			"image": "./v/v2.53.0/pm0334_00_tyltalis_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Feel the Breeze Up High",
				"description": "Powers up the Flying-type moves of all allied sync pairs. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user applies a circle to the allied field of play."
			},
			{
				"name": "Adrenaline 1",
				"description": "Reduces the sync move countdown by one the first time the user’s sync move is used each battle."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " Bird User Taking Flight into the World",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Applies Hoenn Circle (Defensive) to the allied field of play the first time the user’s sync move is used each battle. Extends the duration of Hoenn Circle (Defensive) when Hoenn Circle (Defensive) is applied to the allied field of play."
			}
		],
		"themes": [
			{
				"name": "Flying",
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
				"name": "Nature Lover",
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
				"name": "Aerial Ace",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "45-54",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "Hoenn Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Hoenn Circle (Defensive) to the allied field of play. Hoenn Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Hoenn theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
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
				"user": "Trainer",
				"name": "Triumph with Grace...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and evasiveness of all allied sync pairs by two stat ranks. Raises the Sp.&nbsp;Def of all allied sync pairs by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Soaring the Sky as One Flying Impact",
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

export const GRUSHA_BEARTIC = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Grusha",
		"images": {
			"base": "./v/v2.53.0/ch0294_00_grusha_1024.png",
			"ex": "./v/v2.53.0/ch0294_00_grusha_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Beartic",
			"formName": "",
			"stats": {
				"hp": "648",
				"atk": "163",
				"def": "258",
				"spa": "136",
				"spd": "258",
				"spe": "281"
			},
			"statsLVL150": {
				"hp": "678",
				"atk": "171",
				"def": "272",
				"spa": "142",
				"spd": "272",
				"spe": "295"
			},
			"image": "./v/v2.53.0/pm0614_00_tunbear_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Frozen-Over Passion",
				"description": "Powers up the Ice-type moves of all allied sync pairs. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user applies a circle to the allied field of play."
			},
			{
				"name": "Adrenaline 1",
				"description": "Reduces the sync move countdown by one the first time the user’s sync move is used each battle."
			},
			{
				"name": "Endurance",
				"description": "Applies the Enduring effect to the user if its HP is full when it enters a battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " Icy Bite of Reality",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Applies Paldea Circle (Defensive) to the allied field of play the first time the user’s sync move is used each battle. Extends the duration of Paldea Circle (Defensive) when Paldea Circle (Defensive) is applied to the allied field of play."
			}
		],
		"themes": [
			{
				"name": "Ice",
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
				"name": "Paldea Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Paldea Circle (Defensive) to the allied field of play. Paldea Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Paldea theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
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
				"user": "Trainer",
				"name": "Let It Pile Up!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Defense, Sp.&nbsp;Atk, and Sp.&nbsp;Def of all allied sync pairs by two stat ranks. Applies the Free Move Next effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Chilling Snowy Mountains Ice Impact",
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

export const DIANTHA_TYRANTRUM = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Diantha",
		"images": {
			"base": "./v/v2.53.0/ch0158_00_carnet_1024.png",
			"ex": "./v/v2.53.0/ch0158_00_carnet_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Physical Strike",
	"exRole": "",
	"pokemonType": "Rock",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Tyrantrum",
			"formName": "",
			"stats": {
				"hp": "605",
				"atk": "312",
				"def": "136",
				"spa": "239",
				"spd": "113",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "633",
				"atk": "328",
				"def": "142",
				"spa": "251",
				"spd": "119",
				"spe": "297"
			},
			"image": "./v/v2.53.0/pm0738_00_tyranno2_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Recoil Removal 9",
				"description": "Negates recoil damage when using moves that have the recoil effect tag."
			},
			{
				"name": "Superduper Effective 5",
				"description": "Powers up moves that are super effective."
			},
			{
				"name": "Mighty Command 9",
				"description": "Increases the user’s Physical Moves ↑ Next effect by one rank when its Trainer uses a move."
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
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Champion",
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
				"name": "X Accuracy",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s accuracy by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Head Smash",
				"type": "Rock",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "188-225",
				"accuracy": "80",
				"target": "An opponent",
				"effect": "-",
				"description": "The user also takes approximately 33% of the damage it dealt to the target."
			},
			{
				"user": "Trainer",
				"name": "Step Onstage!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shining to Eternity Rock Impact",
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

export const SHAUNA_SYLVEON = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Shauna",
		"images": {
			"base": "./v/v2.53.0/ch0139_00_sana_1024.png",
			"ex": "./v/v2.53.0/ch0139_00_sana_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Sylveon",
			"formName": "",
			"stats": {
				"hp": "648",
				"atk": "268",
				"def": "161",
				"spa": "424",
				"spd": "178",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "678",
				"atk": "282",
				"def": "169",
				"spa": "446",
				"spd": "186",
				"spe": "354"
			},
			"image": "./v/v2.53.0/pm0767_00_ninnfi_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Head Start 1",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle."
			},
			{
				"name": "Charging Infliction 2",
				"description": "Charges the user’s move gauge by two when its Pokémon uses a status move."
			},
			{
				"name": "Catalyst",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user’s sync move is used each battle."
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
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Rival",
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
				"name": "X Sp. Atk",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by two stat ranks."
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
				"name": "Proof of Friendship!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s critical-hit rate by three stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Really Really Exciting Battle Fairy Beam",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Sp.&nbsp;Def is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MARLEY_SHAYMIN = {
	"bg": "./v/v2.53.0/Tx_ch0097_40_mai_mindscape00.png",
	"trainer": {
		"name": "Marley (Palentine's 2025)",
		"images": {
			"base": "./v/v2.53.0/ch0097_40_mai_1024.png",
			"ex": "./v/v2.53.0/ch0097_40_mai_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Support",
	"pokemonType": "Grass",
	"pokemonWeakness": "Fire",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Shaymin",
			"formName": "Land Forme",
			"stats": {
				"hp": "663",
				"atk": "334",
				"def": "167",
				"spa": "390",
				"spd": "167",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "693",
				"atk": "352",
				"def": "175",
				"spa": "410",
				"spd": "175",
				"spe": "369"
			},
			"image": "./v/v2.53.0/pm0492_11_shaymin_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Conveying Kindness",
				"description": "Reduces the user’s sync move countdown by three the first time it applies Sinnoh Circle (Special) to the allied field of play each battle. Raises the user’s Sp. Atk by four stat ranks the first time it applies Sinnoh Circle (Special) to the allied field of play each battle."
			},
			{
				"name": "Blossoming Talent",
				"description": "Raises the user’s accuracy and critical-hit rate by one stat rank when its move is successful. Charges the user’s move gauge by two when its move is successful."
			},
			{
				"name": "On a Roll 2",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Cape",
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
				"name": "Seed Flare",
				"type": "Grass",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "185-222",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (40%) of lowering the target’s Sp. Def by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Sinnoh Analysis",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Sinnoh Circle (Special) to the allied field of play. Sinnoh Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Sinnoh theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Blessed Seed Flare",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync move countdown is reduced by three while this move is deactivated.(lb)Deactivation Condition: When this move is used.(lb)(lb)Except in certain circumstances, successful hits with this attack become critical hits. Lowers the target’s Sp.&nbsp;Def by two stat ranks. The power of this move is not lowered even if there are multiple targets. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "Thanks...!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the Speed of all allied sync pairs by four stat ranks. Raises the user’s evasiveness by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Blooming Gratitude and Courage Grass Beam",
				"type": "Grass",
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
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ERIKA_LURANTIS = {
	"bg": "./v/v2.53.0/Tx_ch0008_41_erika_mindscape00.png",
	"trainer": {
		"name": "Erika (Palentine's 2025)",
		"images": {
			"base": "./v/v2.53.0/ch0008_41_erika_1024.png",
			"ex": "./v/v2.53.0/ch0008_41_erika_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Special Strike",
	"pokemonType": "Grass",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Lurantis",
			"formName": "",
			"stats": {
				"hp": "634",
				"atk": "311",
				"def": "176",
				"spa": "390",
				"spd": "176",
				"spe": "307"
			},
			"statsLVL150": {
				"hp": "664",
				"atk": "327",
				"def": "184",
				"spa": "410",
				"spd": "184",
				"spe": "323"
			},
			"image": "./v/v2.53.0/pm0869_00_hanakamakiri2_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Mutual Love",
				"description": "When the user’s stats would be lowered, raises its stats by the same amount instead and increases its Special Moves ↑ Next effect by one rank."
			},
			{
				"name": "Bouquet Gift",
				"description": "Restores one MP of the user’s moves that have the Berry effect tag when it successfully attacks with Leaf Storm."
			},
			{
				"name": "Piercing Blows",
				"description": "Grants all of the following effects when the user is attacking:Ignores the target’s passive skills that would reduce the damage of attacks.Ignores the target’s passive skills that would protect the target against a critical hit.Ignores the target’s Enduring effect."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Grass",
				"description": ""
			},
			{
				"name": "Kanto",
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
				"name": "Leaf Storm",
				"type": "Grass",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "136-163",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Lum Berry",
				"type": "Trainer",
				"gauge": "-",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Removes all status conditions from an ally."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Profusion of Flowers Energy Ball",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. If the remaining MP for the user’s Lum Berry is three when attacking with this move, reduces those MP by three and grants the following three effects: This attack’s power increases.(lb)(This attack powers up by 400%.) Lowers the target’s Sp.&nbsp;Atk and Sp.&nbsp;Def by three stat ranks. Restores the user’s HP by approximately 30% of its maximum HP. If the remaining MP for the user’s Lum Berry is two when attacking with this move, reduces those MP by two and grants the following three effects: This attack’s power increases.(lb)(This attack powers up by 200%.) Lowers the target’s Sp.&nbsp;Atk and Sp.&nbsp;Def by two stat ranks. Restores the user’s HP by approximately 20% of its maximum HP. If the remaining MP for the user’s Lum Berry is one when attacking with this move, reduces those MP by one and grants the following three effects: This attack’s power increases.(lb)(This attack powers up by 50%.) Lowers the target’s Sp.&nbsp;Atk and Sp.&nbsp;Def by one stat rank. Restores the user’s HP by approximately 10% of its maximum HP. If the remaining MP for the user’s Lum Berry is zero when attacking with this move, has a chance (10%) of lowering the target’s Sp.&nbsp;Def by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Time to Blossom!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp.&nbsp;Atk by four stat ranks. Raises the user’s accuracy by one stat rank. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Growing Vibrant Gratitude Grass Beam",
				"type": "Grass",
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
		"syncMove2": [],
		"movesMAX": []
	}
}

export const CLAVELL_SPRIGATITO = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Clavell (Alt.)",
		"images": {
			"base": "./v/v2.53.0/ch0318_80_claver_1024.png",
			"ex": "./v/v2.53.0/ch0318_80_claver_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Tech",
	"pokemonType": "Grass",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Sprigatito",
			"formName": "",
			"stats": {
				"hp": "631",
				"atk": "419",
				"def": "185",
				"spa": "308",
				"spd": "158",
				"spe": "340"
			},
			"statsLVL150": {
				"hp": "661",
				"atk": "441",
				"def": "195",
				"spa": "324",
				"spd": "166",
				"spe": "358"
			},
			"image": "./v/v2.53.0/pm0906_00_00_nyahoja_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Strike: Sync Move Boost ↑1 9",
				"description": "Increases the user’s Sync Move ↑ Next effect by one rank when its attack move hits. If the move has the Multistrike effect tag, increases the user’s Sync Move ↑ Next effect by one rank for each hit."
			},
			{
				"name": "Recharging Strike 4",
				"description": "Has a chance (50%) of charging the user’s move gauge by one when its attack move hits. If the move has the multistrike effect tag, has a chance (50%) of charging the user’s move gauge by one for each hit."
			},
			{
				"name": "1st T-Move: Sync CD ↓ 2",
				"description": "Reduces the user’s sync move countdown by two the first time its Trainer uses a move each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Grass",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Glasses",
				"description": ""
			},
			{
				"name": "Knowledgeable",
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
				"name": "Dire Hit All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by one stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Petal Blizzard",
				"type": "Grass",
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
				"name": "The Theme Is a Treasure Hunt!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Director of the Academy Grass Impact",
				"type": "Grass",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Attack is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const JULIANA_KORAIDON = {
	"bg": "./v/v2.53.0/Tx_ch0287_00_svgirl_mindscape00.png",
	"trainer": {
		"name": "Juliana",
		"images": {
			"base": "./v/v2.53.0/ch0287_00_svgirl_1024.png",
			"ex": "./v/v2.53.0/ch0287_00_svgirl_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Tech",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Koraidon",
			"formName": "Apex Build",
			"stats": {
				"hp": "665",
				"atk": "390",
				"def": "160",
				"spa": "292",
				"spd": "134",
				"spe": "352"
			},
			"statsLVL150": {
				"hp": "695",
				"atk": "410",
				"def": "168",
				"spa": "308",
				"spd": "140",
				"spe": "370"
			},
			"image": "./v/v2.53.0/pm1007_11_00_koraidon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hungry Pulse",
				"description": "The user’s Attack increases 30% when the weather is sunny. Makes the weather sunny the first time the user enters a battle each battle. Extends the duration of sunny weather when the weather turns sunny while the user is on the field."
			},
			{
				"name": "My Very Own Treasure",
				"description": "Increases the user’s Physical Moves ↑ Next effect by two ranks the first time its sync move is used each battle. Restores one MP for the status moves of the user’s Pokémon the first time the user’s sync move is used each battle."
			},
			{
				"name": "Sunny: Team P-Moves ↑ & S-Moves ↑ 2",
				"description": "Powers up the moves and sync moves of all allied sync pairs when the weather is sunny."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Paldea Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Paldea theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Cook",
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
				"name": "Collision Course",
				"type": "Fighting",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "152-182",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases 30% when it is super effective."
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
				"name": "(b move) S Collision Course",
				"type": "Fighting",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the weather turns sunny.(lb)Deactivation Condition: When the weather condition is no longer sunny.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. This attack’s power increases 30% when it is super effective. Lowers the target’s Defense by three stat ranks. If the remaining MP for the user’s Sunny Day is one or more when attacking with this move, reduces those MP by one and grants all of the following effects: Makes the weather sunny. Reduces the user’s sync move countdown by one. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "Sparkling Memories!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. In addition, raises the user’s Speed by six stat ranks when the weather is sunny."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ripening Oranges Ancient Collision Course",
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

export const FLORIAN_MIRAIDON = {
	"bg": "./v/v2.53.0/Tx_ch0286_00_svboy_mindscape00.png",
	"trainer": {
		"name": "Florian",
		"images": {
			"base": "./v/v2.53.0/ch0286_00_svboy_1024.png",
			"ex": "./v/v2.53.0/ch0286_00_svboy_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Tech",
	"pokemonType": "Electric",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Miraidon",
			"formName": "Ultimate Mode",
			"stats": {
				"hp": "665",
				"atk": "292",
				"def": "134",
				"spa": "336",
				"spd": "160",
				"spe": "352"
			},
			"statsLVL150": {
				"hp": "695",
				"atk": "308",
				"def": "140",
				"spa": "354",
				"spd": "168",
				"spe": "370"
			},
			"image": "./v/v2.53.0/pm1008_11_00_miraidon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ravenous Engine",
				"description": "The user’s Sp. Atk increases 30% when the terrain is Electric Terrain. Turns the field of play’s terrain into Electric Terrain the first time the user enters a battle each battle. Extends the duration of Electric Terrain when the terrain turns into Electric Terrain while the user is on the field."
			},
			{
				"name": "Unstoppable Curiosity",
				"description": "Reduces the user’s sync move countdown by three the first time it uses Electric Terrain each battle. Restores one MP of the user’s buddy move the first time it uses Electric Terrain each battle."
			},
			{
				"name": "Fuel Economy 2",
				"description": "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by two."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Paldea Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Paldea theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Electric",
				"description": ""
			},
			{
				"name": "Paldea",
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
				"name": "Electro Drift",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "152-182",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases 30% when it is super effective."
			},
			{
				"user": "Pokemon",
				"name": "Electric Terrain",
				"type": "Electric",
				"gauge": "",
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
				"name": "(b move) V Electro Drift",
				"type": "Electric",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "350-420",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the field of play’s terrain turns into Electric Terrain.(lb)Deactivation Condition: When the field of play’s terrain is no longer Electric Terrain.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. This attack’s power increases 30% when it is super effective. The power of this move is not lowered even if there are multiple targets. Increases the user’s Sync Move&nbsp;↑ Next effect by 10 ranks."
			},
			{
				"user": "Trainer",
				"name": "Treasure Hunt Time!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp.&nbsp;Atk by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. In addition, raises the user’s Speed by six stat ranks when the terrain is Electric Terrain."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ripening Grapes Future Electro Drift",
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