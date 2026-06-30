export const AKARI_MANAPHY = {
	"bg": "./v/v2.70.0/Tx_ch0291_40_sho_mindscape00.png",
	"trainer": {
		"name": "Akari (Summer 2026)",
		"images": {
			"base": "./v/v2.70.0/ch0291_40_sho_1024.png",
			"ex": "./v/v2.70.0/ch0291_40_sho_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Manaphy",
			"formName": "",
			"stats": {
				"hp": "690",
				"atk": "159",
				"def": "309",
				"spa": "201",
				"spd": "309",
				"spe": "352"
			},
			"statsLVL150": {
				"hp": "722",
				"atk": "167",
				"def": "325",
				"spa": "211",
				"spd": "325",
				"spe": "370"
			},
			"statsLVL200": {
				"hp": "882",
				"atk": "207",
				"def": "405",
				"spa": "261",
				"spd": "405",
				"spe": "460"
			},
			"image": "./v/v2.70.0/pm0490_00_manaphy_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Beautifully Flowing Water",
				"description": "Extends the duration of rainy weather when the weather turns rainy while the user is on the field. Restores an ally’s HP by approximately 10% of its maximum HP when its attack move is successful while the weather is rainy."
			},
			{
				"name": "Plenty of Energy!",
				"description": "Reduces the MP for the user’s Sitrus Berry by one and grants all of the following effects after your team’s sync pair uses their sync move: Makes the weather rainy. Restores the user’s HP by approximately 30% of its maximum HP."
			},
			{
				"name": "User Sets Rain: Team Phys & Spec Boost ↑1 9",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user makes the weather rainy."
			}
		],
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
				"name": "Sinnoh",
				"description": "(Hisui)"
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Hisui Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Bubble",
				"type": "Water",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "19-22",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Speed by one stat rank."
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
				"name": "(b move) Blue Seas Take Heart",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When the user is not in a pinch.(lb)Deactivation Condition: When the user is in a pinch.(lb)(lb)Removes all status conditions from all allied sync pairs. Raises the Attack, Defense, Sp.&nbsp;Atk, and Sp.&nbsp;Def of all allied sync pairs by one stat rank. In addition, increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank when the weather is rainy."
			},
			{
				"user": "Trainer",
				"name": "Beautifully Flowing!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Makes the weather rainy. Reduces the user’s sync move countdown by two. Raises the critical-hit rate of all allied sync pairs by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Legend of the Sea Water Beam",
				"type": "Water",
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

export const HAU_TAUROS = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Hau",
		"images": {
			"base": "./v/v2.70.0/ch0098_00_hau_1024.png",
			"ex": "./v/v2.70.0/ch0098_00_hau_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Tauros",
			"formName": "",
			"stats": {
				"hp": "626",
				"atk": "183",
				"def": "232",
				"spa": "129",
				"spd": "232",
				"spe": "292"
			},
			"statsLVL150": {
				"hp": "656",
				"atk": "191",
				"def": "244",
				"spa": "135",
				"spd": "244",
				"spe": "306"
			},
			"statsLVL200": {
				"hp": "806",
				"atk": "231",
				"def": "304",
				"spa": "165",
				"spd": "304",
				"spe": "376"
			},
			"image": "./v/v2.70.0/pm0128_00_kentauros_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ridicure 4",
				"description": "Has a chance (50%) of restoring the user’s HP by approximately 20% of its maximum HP when an opponent’s attack move targeting the user misses."
			},
			{
				"name": "Team Viral Hustle 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when the user’s Pokémon uses a status move."
			},
			{
				"name": "Catalytic Infliction",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user’s Pokémon uses a status move each battle."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Rival",
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
				"name": "Double Team",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s evasiveness by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Waiting for Ages!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Sp.&nbsp;Atk, and evasiveness of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Super Thrilling Ride Normal Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const AREZU_BASCULEGION = {
	"bg": "./v/v2.70.0/Tx_ch0312_40_hinatsu_mindscape00.png",
	"trainer": {
		"name": "Arezu (Summer 2026)",
		"images": {
			"base": "./v/v2.70.0/ch0312_40_hinatsu_1024.png",
			"ex": "./v/v2.70.0/ch0312_40_hinatsu_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Physical Strike",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Basculegion",
			"formName": "",
			"stats": {
				"hp": "652",
				"atk": "424",
				"def": "176",
				"spa": "424",
				"spd": "190",
				"spe": "311"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "446",
				"def": "184",
				"spa": "446",
				"spd": "200",
				"spe": "327"
			},
			"statsLVL200": {
				"hp": "832",
				"atk": "556",
				"def": "224",
				"spa": "556",
				"spd": "250",
				"spe": "407"
			},
			"image": "./v/v2.70.0/pm0902_11_41_idaitou_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Soul-Clad Rage",
				"description": "The user’s Attack, Defense, Sp. Atk, Sp. Def, and Speed increase 50% when you only have one Pokémon on your team. Powers up the user’s moves and sync move when you only have one Pokémon on your team."
			},
			{
				"name": "Own Ally Faints: Phys & Spec Boost ↑10",
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by 10 ranks when an ally on your team faints."
			},
			{
				"name": "Own Ally Faints: Sync CD ↓9 (Lim. 2)",
				"description": "Reduces the user’s sync move countdown by nine when an ally on your team faints. When used in a co-op battle, reduces the sync move countdown of a player other than the user by nine instead when the user faints. This effect can activate up to two times per battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Ghost",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": "(Hisui)"
			},
			{
				"name": "Seasonal Outfit",
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
				"name": "Shadow Ball",
				"type": "Ghost",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of lowering the target’s Sp. Def by one stat rank."
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
				"name": "(b move) Souls’ Repose Last Respects",
				"type": "Ghost",
				"gauge": "3",
				"uses": "3",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Trainer uses any moves one&nbsp;time.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. The more fainted Pokémon on your team, the greater the power of this attack. Lowers the target’s Defense by two stat ranks. The power of this move is not lowered even if there are multiple targets. Restores one MP for this move when you have two or more Pokémon on your team."
			},
			{
				"user": "Trainer",
				"name": "I Pack Quite a Punch!",
				"type": "Trainer",
				"gauge": "2",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Raises the user’s Attack and Sp. Atk by six stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Raging Soul Carrier Ghost Impact",
				"type": "Ghost",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const AS_DIANTHA_GARDEVOIR = {
	"bg": "./v/v2.70.0/Tx_ch0158_90_carnet_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Diantha",
		"images": {
			"base": "./v/v2.70.0/ch0158_90_carnet_1024.png",
			"ex": "./v/v2.70.0/ch0158_90_carnet_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Special Strike",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Gardevoir",
			"formName": "",
			"stats": {
				"hp": "673",
				"atk": "268",
				"def": "186",
				"spa": "336",
				"spd": "209",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "705",
				"atk": "282",
				"def": "196",
				"spa": "354",
				"spd": "219",
				"spe": "351"
			},
			"statsLVL200": {
				"hp": "865",
				"atk": "352",
				"def": "246",
				"spa": "444",
				"spd": "269",
				"spe": "441"
			},
			"image": "./v/v2.70.0/pm0282_00_sirnight_256.png"
		},
		{
			"name": "Mega Gardevoir",
			"formName": "",
			"stats": {
				"hp": "673",
				"atk": "294",
				"def": "204",
				"spa": "369",
				"spd": "229",
				"spe": "366"
			},
			"statsLVL150": {
				"hp": "705",
				"atk": "310",
				"def": "215",
				"spa": "389",
				"spd": "240",
				"spe": "386"
			},
			"statsLVL200": {
				"hp": "865",
				"atk": "387",
				"def": "270",
				"spa": "488",
				"spd": "295",
				"spe": "485"
			},
			"image": "./v/v2.70.0/pm0282_51_megasrnight_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Opening Night on a Noble Silver Screen",
				"description": "Reduces the user’s sync move countdown by three when it enters a battle. Raises the user’s Sp. Atk by six stat ranks when it enters a battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "Ever-Shining Performance",
				"description": "Reduces the MP for the user’s Fairy Wish by one and turns the field of play’s zone into a Fairy Zone after your team’s sync pair uses their sync move. (A Fairy Zone powers up Fairy-type attacks.) Extends the duration of the Fairy Zone when the zone turns into a Fairy Zone while the user is on the field."
			},
			{
				"name": "Ally Sets Fairy Zone: Special Boost ↑2 9",
				"description": "Increases the user’s Special Moves ↑ Next effect by two ranks when an ally turns the field of play’s zone into a Fairy Zone."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Pixie Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Fairy theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Pixie Judgment",
				"description": "Raises the Fairy Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Fairy Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
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
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Arc Suit",
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
				"name": "(b move) Almighty Dazzling Gleam",
				"type": "Fairy",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Sp.&nbsp;Def by two stat ranks. The power of this move is not lowered even if there are multiple targets. If the user’s Gardevoir has Mega Evolved, also decreases the amount of move gauge slots needed to use this move by two."
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
				"name": "(b move) Almighty Moonblast",
				"type": "Fairy",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Gardevoir Mega Evolves.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. The more the user’s Sync Move&nbsp;↑ Next effect is increased, the greater the power of this attack. Has a chance (30%) of lowering the target’s Sp.&nbsp;Atk by one stat rank. The power and chance of applying additional effects of this move are not lowered even if there are multiple targets. Removes all of the user’s Sync Move&nbsp;↑ Next effect ranks."
			},
			{
				"user": "Trainer",
				"name": "The Shine of Life!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Applies the Gradual Healing effect to the user. Applies the Damage Guard Next effect to the user. Applies the Enduring effect to the user. If the user’s Gardevoir has Mega Evolved, also increases the user’s Special Moves&nbsp;↑ Next effect by three&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "(divine move) Sudden Light Divine Moonblast",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Gardevoir until the end of battle. Increases the user’s Sync Move&nbsp;↑ Next effect by 10 ranks."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const AS_GEETA_GLIMMORA = {
	"bg": "./v/v2.70.0/Tx_ch0295_90_omodaka_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Geeta",
		"images": {
			"base": "./v/v2.70.0/ch0295_90_omodaka_1024.png",
			"ex": "./v/v2.70.0/ch0295_90_omodaka_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Support",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Glimmora",
			"formName": "",
			"stats": {
				"hp": "683",
				"atk": "336",
				"def": "333",
				"spa": "312",
				"spd": "331",
				"spe": "334"
			},
			"statsLVL150": {
				"hp": "715",
				"atk": "354",
				"def": "351",
				"spa": "328",
				"spd": "349",
				"spe": "352"
			},
			"statsLVL200": {
				"hp": "875",
				"atk": "444",
				"def": "441",
				"spa": "408",
				"spd": "439",
				"spe": "442"
			},
			"image": "./v/v2.70.0/pm0970_00_00_kiraflor_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Incapable of Holding Back",
				"description": "Leaves all opposing sync pairs badly poisoned the first time the user enters a battle each battle. Raises the critical-hit rate of all allied sync pairs by three stat ranks when the user enters a battle."
			},
			{
				"name": "Inspiring All Who Watch",
				"description": "Restores the HP of all allied sync pairs when the user is hit by an attack move while the zone is a Poison Zone. Restores the HP of all allied sync pairs by approximately 20% of their maximum HP when the user is hit by a sync move while the zone is a Poison Zone."
			},
			{
				"name": "Poison Zone: Team Crit Immunity",
				"description": "Protects all allied sync pairs against critical hits when the zone is a Poison Zone."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Toxic Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Poison theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Toxic Judgment",
				"description": "Raises the Poison Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Poison Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
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
				"name": "(b move) Almighty Mortal Spin",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Defense and Sp.&nbsp;Def by two stat ranks. Leaves the target poisoned. Removes a damage field from the allied field of play. Removes the trapped condition from the user."
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
				"name": "(b move) Almighty Venoshock",
				"type": "Poison",
				"gauge": "2",
				"uses": "4",
				"category": "Special",
				"power": "80-96",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon affected by a status condition on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon affected by a status condition on the opponent’s field of play.(lb)(lb)Never misses. This attack’s power is doubled when the target is poisoned or badly poisoned. Applies the Physical Move Break effect and Special Move Break effect to the target the first time this attack move is successful each battle. Turns the field of play’s zone into a Poison Zone. (A Poison Zone powers up Poison-type attacks.) Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "The Guiding Light!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Uses a maximum of three slots of the user’s move gauge. The more amount used, the more it raises the Attack, Defense, Sp.&nbsp;Atk, and Sp.&nbsp;Def of all allied sync pairs (can be raised by up to four stat ranks maximum)."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "(divine move) Dazzling Brilliance Divine Mortal Spin",
				"type": "Poison",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks the first time the user’s sync move is used each battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}
