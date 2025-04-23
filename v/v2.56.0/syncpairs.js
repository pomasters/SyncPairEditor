export const IONO_RAGINGBOLT = {
	"bg": "./v/v2.56.0/Tx_ch0296_10_nanjamo_mindscape00.png",
	"trainer": {
		"name": "Sygna Suit Iono",
		"images": {
			"base": "./v/v2.56.0/ch0296_10_nanjamo_1024.png",
			"ex": "./v/v2.56.0/ch0296_10_nanjamo_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Sprint",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Raging Bolt",
			"formName": "",
			"stats": {
				"hp": "664",
				"atk": "309",
				"def": "167",
				"spa": "356",
				"spd": "166",
				"spe": "294"
			},
			"statsLVL150": {
				"hp": "696",
				"atk": "325",
				"def": "175",
				"spa": "374",
				"spd": "174",
				"spe": "310"
			},
			"image": "./v/v2.56.0/pm1021_00_00_takeruraiko_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ancient Thunder",
				"description": "Restores one MP for the user’s moves that have the Quick Move effect tag when it uses BoosterEnergy or an ally turns the weather sunny."
			},
			{
				"name": "Ally Sets WTZ: Team 1 of 5 Stats ↑2 9",
				"description": "Raises one of the following stats of all allied sync pairs by two stat ranks at random when an ally activates a weather, terrain, or zone effect: Attack, Defense, Sp. Atk, Sp. Def, or Speed."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " Save That in Your Brainspace!",
				"description": "Reduces the user’s sync move countdown by one the first time its Trainer uses a move each battle. Powers up the moves of all allied sync pairs when the terrain is Electric Terrain. Increases the user’s Special Moves ↑ Next effect by one rank when its Trainer uses a move."
			}
		],
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
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Sygna Suit",
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
				"name": "Thunder",
				"type": "Electric",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "124-148",
				"accuracy": "70",
				"target": "An opponent",
				"effect": "-",
				"description": "Never misses when the weather is rainy. Has a chance (30%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "Booster Energy",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Increases the user’s Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect by one&nbsp;rank."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Fully Charged Thunderclap",
				"type": "Electric",
				"gauge": "-",
				"uses": "3",
				"category": "Special",
				"power": "180-216",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: When the user’s Sp.&nbsp;Atk is not raised.(lb)(lb)Makes the target flinch. Turns the field of play’s terrain into EX Electric Terrain the first time this attack move is successful each battle. Increases the Sync Move&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "Shiny Li’l Lightbulb!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an allied sync pair by one. Raises an ally’s Sp.&nbsp;Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Exclusive Stream Reveal Thunderclap",
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

export const ELESA_THUNDURUS = {
	"bg": "./v/v2.56.0/Tx_ch0106_11_kamitsure_mindscape00.png",
	"trainer": {
		"name": "Sygna Suit Elesa (Alt.)",
		"images": {
			"base": "./v/v2.56.0/ch0106_11_kamitsure_1024.png",
			"ex": "./v/v2.56.0/ch0106_11_kamitsure_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Special Strike",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Thundurus",
			"formName": "Therian Forme",
			"stats": {
				"hp": "651",
				"atk": "314",
				"def": "162",
				"spa": "502",
				"spd": "178",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "681",
				"atk": "330",
				"def": "170",
				"spa": "528",
				"spd": "186",
				"spe": "355"
			},
			"image": "./v/v2.56.0/pm0642_12_00_voltolos_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Dynamax Runway",
				"description": "Powers up the user’s max move when the weather is rainy. When the user’s max move attacks an opponent, the target becomes all opposing sync pairs. The power of max moves affected by this passive skill is not lowered even if there are multiple targets."
			},
			{
				"name": "Dazzling Rainy Stage",
				"description": "Extends the duration of rainy weather when the weather turns rainy while the user is on the field. Extends the duration of Electric Terrain when the terrain turns into Electric Terrain while the user is on the field."
			},
			{
				"name": "Ally Sets WTZ: Team Special Boost ↑1 9",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank when an ally activates a weather, terrain, or zone effect."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " I Can’t Let My Fans Down",
				"description": "Reduces the user’s sync move countdown by two after using its max move. Protects all allied sync pairs against critical hits when the weather is rainy. Applies the Enduring effect to the user if its HP is full when it enters a battle."
			}
		],
		"themes": [
			{
				"name": "Electric",
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
				"name": "Sygna Suit",
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
				"name": "Wildbolt Storm",
				"type": "Electric",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "177-212",
				"accuracy": "80",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses when the weather is rainy. Has a chance (20%) of leaving the target paralyzed."
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
				"name": "(b move) Thunder-Calling Wildbolt Storm",
				"type": "Electric",
				"gauge": "2",
				"uses": "3",
				"category": "Special",
				"power": "180-216",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: When the user’s Sp.&nbsp;Atk is not raised.(lb)(lb)Never misses when the weather is rainy. Lowers the target’s Sp.&nbsp;Def by two stat ranks. Lowers the target’s Electric Type Rebuff by one&nbsp;rank the first time this attack move is successful each battle. Leaves the target paralyzed. The power of this move is not lowered even if there are multiple targets. If the remaining MP for the user’s Electric Terrain is one or more when attacking with this move, reduces those MP by one and grants all of the following effects: Makes the weather rainy. Turns the field of play’s terrain into Electric Terrain."
			},
			{
				"user": "Trainer",
				"name": "Surely, Shirley!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an allied sync pair by one. Raises an ally’s Sp.&nbsp;Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Different Impression Electric Beam",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Lightning",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Electric Terrain."
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
				"name": "Max Lightning",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Electric Terrain."
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

export const TEDDY_RELLOR = {
	"bg": "./images/bg/bronze.png",
	"trainer": {
		"name": "Teddy (Hiker)",
		"images": {
			"base": "./v/v2.56.0/ch0080_00_yamaotoko_1024.png",
			"ex": "./v/v2.56.0/ch0080_00_yamaotoko_01_expose_1024.png"
		}
	},
	"rarity": "3",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Bug",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "(shiny) Rellor",
			"formName": "",
			"stats": {
				"hp": "547",
				"atk": "116",
				"def": "193",
				"spa": "115",
				"spd": "179",
				"spe": "229"
			},
			"statsLVL150": {
				"hp": "569",
				"atk": "122",
				"def": "201",
				"spa": "121",
				"spd": "187",
				"spe": "239"
			},
			"image": "./v/v2.56.0/pm0953_00_00_shigaroko_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Propelling Strike 9",
				"description": "Charges the user’s move gauge by one when its attack move is successful."
			},
			{
				"name": "Natural Remedy",
				"description": "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Bug",
				"description": ""
			},
			{
				"name": "Sinnoh",
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
				"name": "Mud-Slap",
				"type": "Ground",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "13-15",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s accuracy by one stat rank."
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
				"name": "Leech Life",
				"type": "Bug",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "91-109",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
			},
			{
				"user": "Trainer",
				"name": "Mountains Are Great!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp.&nbsp;Atk of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shout from the Summit Golden Bug Impact",
				"type": "Bug",
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

export const AS_ALDER_VOLCARONA = {
	"bg": "./v/v2.56.0/Tx_ch0132_90_adeku_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Alder",
		"images": {
			"base": "./v/v2.56.0/ch0132_90_adeku_1024.png",
			"ex": "./v/v2.56.0/ch0132_90_adeku_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Sprint",
	"pokemonType": "Bug",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Volcarona",
			"formName": "",
			"stats": {
				"hp": "705",
				"atk": "336",
				"def": "186",
				"spa": "336",
				"spd": "192",
				"spe": "381"
			},
			"statsLVL150": {
				"hp": "739",
				"atk": "354",
				"def": "196",
				"spa": "354",
				"spd": "202",
				"spe": "401"
			},
			"image": "./v/v2.56.0/pm0637_00_ulgamoth_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Wandering Champion",
				"description": "Normal-type moves become Bug-type moves. When a move used by the user’s Pokémon that targets itself or an ally is successful, the target becomes all allied sync pairs. When a move used by the user’s Pokémon that targets an opponent is successful, the target becomes all opposing sync pairs. When the user’s sync move attacks an opponent, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves and sync moves affected by this passive skill are not lowered even if there are multiple targets. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "Been Through Enough",
				"description": "The user’s moves never miss. Increases the user’s Special Moves ↑ Next effect by one rank when an ally turns the field of play’s zone into a Bug Zone."
			},
			{
				"name": "Adrenaline 3",
				"description": "Reduces the sync move countdown by three the first time the user’s sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Insect Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Bug theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Insect Judgment",
				"description": "Raises the Bug Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Bug Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Bug",
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
				"name": "Arc Suit",
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
				"name": "Hyper Beam",
				"type": "Bug",
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
				"name": "(b move) Almighty Sun Hyper Beam",
				"type": "Bug",
				"gauge": "-",
				"uses": "1",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Uses a maximum of six&nbsp;slots of the user’s move gauge. This attack’s power increases based on the amount used. Turns the field of play’s zone into a Bug Zone. (A Bug Zone powers up Bug-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "We Are One!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Sp.&nbsp;Atk by six stat ranks. Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "(divine move) Unmatched Talent Divine Bug Buzz",
				"type": "Bug",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Increases the user’s Special Moves&nbsp;↑ Next effect by two&nbsp;ranks."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const N_ARCHEOPS = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "N",
		"images": {
			"base": "./v/v2.56.0/ch0089_00_n_1024.png",
			"ex": "./v/v2.56.0/ch0089_00_n_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "",
	"pokemonType": "Rock",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Archeops",
			"formName": "",
			"stats": {
				"hp": "643",
				"atk": "424",
				"def": "159",
				"spa": "333",
				"spd": "159",
				"spe": "317"
			},
			"statsLVL150": {
				"hp": "673",
				"atk": "446",
				"def": "167",
				"spa": "351",
				"spd": "167",
				"spe": "333"
			},
			"image": "./v/v2.56.0/pm0567_00_archeos_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Head Start 1",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle."
			},
			{
				"name": "Might Afflicter 9",
				"description": "Lowers the Attack of all opposing sync pairs by one stat rank when a status move used by the user’s Pokémon is successful."
			},
			{
				"name": "Charging Infliction 1",
				"description": "Charges the user’s move gauge by one when its Pokémon uses a status move."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Villain.",
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
				"name": "X Attack",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by two stat ranks."
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
				"user": "Trainer",
				"name": "You’ll Never Defeat Me!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s critical-hit rate by two stat ranks. Raises the accuracy of all allied sync pairs by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Soaring Ancient Dreams Rock Impact",
				"type": "Rock",
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

export const DAWN_EMPOLEON = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Dawn",
		"images": {
			"base": "./v/v2.56.0/ch0116_00_hikari_1024.png",
			"ex": "./v/v2.56.0/ch0116_00_hikari_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Sprint",
	"pokemonType": "Steel",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Empoleon",
			"formName": "",
			"stats": {
				"hp": "666",
				"atk": "258",
				"def": "181",
				"spa": "414",
				"spd": "190",
				"spe": "281"
			},
			"statsLVL150": {
				"hp": "698",
				"atk": "272",
				"def": "189",
				"spa": "436",
				"spd": "200",
				"spe": "295"
			},
			"image": "./v/v2.56.0/pm0395_00_emperte_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Shining Steel Leadership",
				"description": "Reduces the user’s sync move countdown by one when it uses Steel Wish. Increases the user’s Special Moves ↑ Next effect by two ranks when it uses Steel Wish."
			},
			{
				"name": "I Haven’t Lost My Determination!",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank after using the user’s sync move. Restores one MP of the user’s buddy move after using its sync move."
			},
			{
				"name": "Steel Zone Hit: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while the zone is a Steel Zone."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Scarf",
				"description": ""
			},
			{
				"name": "Contest Lover",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Flash Cannon",
				"type": "Steel",
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
				"name": "Steel Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Steel Zone. (A Steel Zone powers up Steel-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Super Solid Steel Beam",
				"type": "Steel",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the field of play’s zone turns into a Steel Zone.(lb)Deactivation Condition: When the field of play’s zone is no longer a Steel Zone.(lb)(lb)Never misses. Lowers the target’s Sp.&nbsp;Atk and Sp.&nbsp;Def by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Something Nice!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp.&nbsp;Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks. Applies the Damage Guard Next effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shining Symbol of Power Steel Beam",
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

export const KORRINA_HAWLUCHA = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Korrina",
		"images": {
			"base": "./v/v2.56.0/ch0012_00_corni_1024.png",
			"ex": "./v/v2.56.0/ch0012_00_corni_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Hawlucha",
			"formName": "",
			"stats": {
				"hp": "632",
				"atk": "164",
				"def": "265",
				"spa": "146",
				"spd": "250",
				"spe": "299"
			},
			"statsLVL150": {
				"hp": "662",
				"atk": "172",
				"def": "279",
				"spa": "154",
				"spd": "264",
				"spe": "315"
			},
			"image": "./v/v2.56.0/pm0761_00_rutya_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Let’s Give It All We’ve Got!",
				"description": "Powers up the Fighting-type moves of all allied sync pairs. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user applies a circle to the allied field of play."
			},
			{
				"name": "Adrenaline 1",
				"description": "Reduces the sync move countdown by one the first time the user’s sync move is used each battle."
			},
			{
				"name": "Team Triage Tank 9",
				"description": "Restores the HP of all allied sync pairs when the user is hit by an attack move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " The Evolution Fighter!",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Applies Kalos Circle (Defensive) to the allied field of play the first time the user’s sync move is used each battle. Extends the duration of Kalos Circle (Defensive) when Kalos Circle (Defensive) is applied to the allied field of play."
			}
		],
		"themes": [
			{
				"name": "Fighting",
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
				"name": "Low Sweep",
				"type": "Fighting",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "30-36",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Kalos Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Kalos Circle (Defensive) to the allied field of play. Kalos Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Kalos theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
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
				"name": "My Big Appearance!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Sp. Atk, and critical-hit rate of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Nimble Finishing Leap Fighting Impact",
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

export const WHITNEY_WIGGLYTUFF = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Whitney",
		"images": {
			"base": "./v/v2.56.0/ch0026_00_akane_1024.png",
			"ex": "./v/v2.56.0/ch0026_00_akane_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Normal",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Wigglytuff",
			"formName": "",
			"stats": {
				"hp": "659",
				"atk": "147",
				"def": "254",
				"spa": "137",
				"spd": "265",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "689",
				"atk": "155",
				"def": "268",
				"spa": "143",
				"spd": "279",
				"spe": "298"
			},
			"image": "./v/v2.56.0/pm0040_00_pukurin_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "I’m Doing Great!",
				"description": "Powers up the Normal-type moves of all allied sync pairs. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user applies a circle to the allied field of play."
			},
			{
				"name": "Adrenaline 1",
				"description": "Reduces the sync move countdown by one the first time the user’s sync move is used each battle."
			},
			{
				"name": "Sync Damage Guard",
				"description": "Applies the Damage Guard Next effect to the user the first time its sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " The Incredibly Pretty Girl",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Applies Johto Circle (Defensive) to the allied field of play the first time the user’s sync move is used each battle. Extends the duration of Johto Circle (Defensive) when Johto Circle (Defensive) is applied to the allied field of play."
			}
		],
		"themes": [
			{
				"name": "Normal",
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
				"name": "Headbutt",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "53-63",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Johto Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Johto Circle (Defensive) to the allied field of play. Johto Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Johto theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
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
				"name": "I Won’t Lose!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by two stat ranks. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ballooning Frustration Normal Impact",
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

export const KABU_NINETALES = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Kabu",
		"images": {
			"base": "./v/v2.56.0/ch0252_00_kabu_1024.png",
			"ex": "./v/v2.56.0/ch0252_00_kabu_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Fire",
	"pokemonWeakness": "Water",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Ninetales",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "134",
				"def": "244",
				"spa": "160",
				"spd": "269",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "140",
				"def": "256",
				"spa": "168",
				"spd": "283",
				"spe": "302"
			},
			"image": "./v/v2.56.0/pm0038_00_kyukon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Brightly Burning Confidence",
				"description": "Powers up the Fire-type moves of all allied sync pairs. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user applies a circle to the allied field of play."
			},
			{
				"name": "Adrenaline 1",
				"description": "Reduces the sync move countdown by one the first time the user’s sync move is used each battle."
			},
			{
				"name": "Impervious",
				"description": "The user’s stats cannot be lowered."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " Light That Fire and Move Your Mind!",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Applies Galar Circle (Defensive) to the allied field of play the first time the user’s sync move is used each battle. Extends the duration of Galar Circle (Defensive) when Galar Circle (Defensive) is applied to the allied field of play."
			}
		],
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
				"name": "Fire Spin",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "38-45",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target trapped."
			},
			{
				"user": "Trainer",
				"name": "Galar Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Galar Circle (Defensive) to the allied field of play. Galar Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Galar theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
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
				"name": "Go Forward, Youths!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp.&nbsp;Atk of all allied sync pairs by four stat ranks. Raises the Sp.&nbsp;Def and accuracy of all allied sync pairs by two stat ranks. Applies the Supereffective&nbsp;↑ Next effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Burn and Learn Fire Beam",
				"type": "Fire",
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

export const LARRY_OINKOLOGNE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Larry",
		"images": {
			"base": "./v/v2.56.0/ch0304_00_aoki_1024.png",
			"ex": "./v/v2.56.0/ch0304_00_aoki_01_expose_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Oinkologne",
			"formName": "",
			"stats": {
				"hp": "636",
				"atk": "136",
				"def": "224",
				"spa": "114",
				"spd": "229",
				"spe": "266"
			},
			"statsLVL150": {
				"hp": "666",
				"atk": "142",
				"def": "236",
				"spa": "120",
				"spd": "241",
				"spe": "280"
			},
			"image": "./v/v2.56.0/pm0916_01_00_perfuton_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Bedazzle 1",
				"description": "Lowers the accuracy of all opposing sync pairs by one stat rank when the user enters a battle."
			},
			{
				"name": "Trip Up 9",
				"description": "Lowers the target’s Speed by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "1st Use Status P-Move: HP Recovery 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time its Pokémon uses a status move each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Hyper Voice",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "63-75",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Showtime...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Sp. Atk, and critical-hit rate of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Floral Aroma Normal Impact",
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

export const BENGA_VOLCARONA = {
	"bg": "./v/v2.56.0/Tx_ch0212_00_banjiro_mindscape00.png",
	"trainer": {
		"name": "Benga",
		"images": {
			"base": "./v/v2.56.0/ch0212_00_banjiro_1024.png",
			"ex": "./v/v2.56.0/ch0212_00_banjiro_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Sprint",
	"pokemonType": "Bug",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Volcarona",
			"formName": "",
			"stats": {
				"hp": "671",
				"atk": "288",
				"def": "185",
				"spa": "346",
				"spd": "187",
				"spe": "334"
			},
			"statsLVL150": {
				"hp": "703",
				"atk": "302",
				"def": "195",
				"spa": "364",
				"spd": "197",
				"spe": "352"
			},
			"image": "./v/v2.56.0/pm0637_00_ulgamoth_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Pure Competition",
				"description": "Turns the field of play’s zone into an EX Bug Zone after using the user’s max move. (An EX Bug Zone powers up Bug-type attacks.) Increases the user’s Special Moves ↑ Next effect by two ranks after using its max move."
			},
			{
				"name": "Been Through Enough",
				"description": "The user’s moves never miss. Increases the user’s Special Moves ↑ Next effect by one rank when an ally turns the field of play’s zone into a Bug Zone."
			},
			{
				"name": "Fuel Economy 1",
				"description": "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by one."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " He Who Overcame the Challenge",
				"description": "Reduces the user’s sync move countdown by one the first time its sync move is used each battle. Powers up the sync moves of all allied sync pairs when the zone is a Bug Zone. Extends the duration of the Bug Zone when the zone turns into a Bug Zone while the user is on the field."
			}
		],
		"themes": [
			{
				"name": "Bug",
				"description": ""
			},
			{
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
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
				"name": "Struggle Bug",
				"type": "Bug",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "30-36",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Sp. Atk. by one stat rank."
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
				"description": "Applies the Supereffective&nbsp;↑ Next effect to an ally."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Swarming Flames Bug Buzz",
				"type": "Bug",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "120-144",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Trainer uses any moves one&nbsp;time.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Sp.&nbsp;Def by three stat ranks. The power of this move is not lowered even if there are multiple targets. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "See Who’s Stronger!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises an ally’s Sp.&nbsp;Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Power Through Even More Bug Beam",
				"type": "Bug",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Flutterby",
				"type": "Bug",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the Sp.&nbsp;Atk of all opposing sync pairs by two stat ranks."
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
				"name": "Max Flutterby",
				"type": "Bug",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the Sp.&nbsp;Atk of all opposing sync pairs by two stat ranks."
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

export const BEDE_IRONVALIANT = {
	"bg": "./v/v2.56.0/Tx_ch0246_10_beet_mindscape00.png",
	"trainer": {
		"name": "Sygna Suit Bede",
		"images": {
			"base": "./v/v2.56.0/ch0246_10_beet_1024.png",
			"ex": "./v/v2.56.0/ch0246_10_beet_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Special Strike",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Poison",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Iron Valiant",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "258",
				"def": "188",
				"spa": "258",
				"spd": "161",
				"spe": "377"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "272",
				"def": "198",
				"spa": "272",
				"spd": "169",
				"spe": "397"
			},
			"image": "./v/v2.56.0/pm1006_00_00_tetsunobujin_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Blades of the Future",
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by three ranks when it uses BoosterEnergy or an ally turns the field of play’s terrain into Electric Terrain."
			},
			{
				"name": "Unbreakable Elite Mentality",
				"description": "The user’s stats cannot be lowered. When an attack move used by the user’s Pokémon that targets itself or an ally is successful, that attack’s target becomes all allied sync pairs. When an attack move used by the user’s Pokémon that targets an opponent is successful, that attack’s target becomes all opposing sync pairs. The power and chance of applying additional effects of moves affected by this passive skill are not lowered even if there are multiple targets. Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by one rank when its attack move hits."
			},
			{
				"name": "Carve My Name into History",
				"description": "Reduces the user’s sync move countdown by three the first time its Physical Moves ↑ Next effect is rank six or higher each battle. Increases the user’s Special Moves ↑ Next effect by three ranks the first time its Special Moves ↑ Next effect is rank six or higher each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " Intruder from the Future",
				"description": "Turns the field of play’s zone into a Fighting Zone the first time the user’s sync move is used each battle. (A Fighting Zone powers up Fighting-type attacks.) Extends the duration of the Fighting Zone when the zone turns into a Fighting Zone while the user is on the field. Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by two ranks the first time it enters a battle each battle."
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Sygna Suit",
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
				"name": "Close Combat",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "124-148",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Defense and Sp. Def by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Booster Energy",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Increases the user’s Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect by one&nbsp;rank."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Refined Focus Blast",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses Booster(lb)Energy.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Sp.&nbsp;Def by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "We’ve Got to Win!",
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
				"user": "Pokemon",
				"name": "Shouldering the Future Elite Focus Blast",
				"type": "Fighting",
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

export const GRIMSLEY_ABSOL = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Grimsley (Kimono)",
		"images": {
			"base": "./v/v2.56.0/ch0048_80_gima_1024.png",
			"ex": "./v/v2.56.0/ch0048_80_gima_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Field",
	"pokemonType": "Dark",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Absol",
			"formName": "",
			"stats": {
				"hp": "652",
				"atk": "380",
				"def": "188",
				"spa": "244",
				"spd": "188",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "400",
				"def": "198",
				"spa": "256",
				"spd": "198",
				"spe": "328"
			},
			"image": "./v/v2.56.0/pm0359_00_absol_256.png"
		},
		{
			"name": "Mega Absol",
			"formName": "",
			"stats": {
				"hp": "652",
				"atk": "456",
				"def": "188",
				"spa": "244",
				"spd": "188",
				"spe": "374"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "480",
				"def": "198",
				"spa": "256",
				"spd": "198",
				"spe": "393"
			},
			"image": "./v/v2.56.0/pm0359_51_megaabsol_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "High Risk, High Return",
				"description": "Grants all of the following effects the first time the user’s sync move is used each battle: Applies the Damage Guard Next effect to the user. Increases the user’s Physical Moves ↑ Next effect by six ranks. The user takes damage equal to 60% of its remaining HP."
			},
			{
				"name": "The Die Has Been Cast!",
				"description": "Grants all of the following effects when the user enters a battle: Raises the user’s Attack by one to six stat ranks at random. Raises the user’s Defense by one to six stat ranks at random. Raises the user’s Sp. Def by one to six stat ranks at random."
			},
			{
				"name": "P-Moves & S-Moves Crit",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Scarf",
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
				"user": "Pokemon",
				"name": "Snatch",
				"type": "Dark",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Returns the target’s raised stats to normal, then raises the user’s same stats by the same amount."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Feint Attack Heads",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s HP is at 50% or more.(lb)Deactivation Condition: When the user’s HP is less than 50%.(lb)(lb)Never misses. Grants one of the following additional effects one&nbsp;time at random: Leaves the target confused. Turns the field of play’s zone into a Dark Zone. (A Dark Zone powers up Dark-type attacks.) Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one rank. Reduces the user’s sync move countdown by one. Raises the user’s evasiveness by two stat ranks. Applies the Free Move Next effect to the user. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks. Lowers the user’s Attack and Sp.&nbsp;Atk by one stat rank. Lowers the user’s Defense and Sp.&nbsp;Def by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "It Isn’t Over Yet!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "The smaller the user’s percentage of remaining HP, the more it reduces the user’s sync move countdown (can be reduced by up to four maximum). Applies the Enduring effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Try Your Luck Dark Impact",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega&nbsp;Absol until the end of battle. The more the user’s Attack is raised, the greater the power of this attack."
			}
		],
		"moves2": [
			{
				"user": "Pokemon2",
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
				"user": "Pokemon2",
				"name": "Snatch",
				"type": "Dark",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Returns the target’s raised stats to normal, then raises the user’s same stats by the same amount."
			},
			{
				"user": "Pokemon2",
				"name": "(b move) Feint Attack Tails",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s HP is at 50% or more.(lb)Deactivation Condition: When the user’s HP is less than 50%.(lb)(lb)Never misses. Grants one of the following additional effects two times at random: Leaves the target flinching, confused, and trapped. Turns the field of play’s zone into a Dark Zone. (A Dark Zone powers up Dark-type attacks.) Raises the evasiveness of all allied sync pairs by two stat ranks. Applies the Free Move Next effect to all allied sync pairs. Increases the Physical Moves ↑ Next effect of all allied sync pairs by two ranks. Reduces the user’s sync move countdown by one. Applies the Damage Guard Next effect to the user. Increases the user’s Physical Moves ↑ Next effect by four ranks. Lowers the user’s Attack and Sp. Atk by two stat ranks. Lowers the user’s Defense and Sp. Def by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "It Isn’t Over Yet!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "The smaller the user’s percentage of remaining HP, the more it reduces the user’s sync move countdown (can be reduced by up to four maximum). Applies the Enduring effect to the user."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}