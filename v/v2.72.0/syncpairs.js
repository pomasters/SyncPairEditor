export const BLUE_MEGA_DRAGONITE = {
	"bg": "./v/v2.72.0/Tx_ch0021_40_green_mindscape00.png",
	"trainer": {
		"name": "Blue (Anniversary 2026)",
		"images": {
			"base": "./v/v2.72.0/ch0021_40_green_1024.png",
			"ex": "./v/v2.72.0/ch0021_40_green_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Field",
	"pokemonType": "Flying",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Dragonite",
			"formName": "",
			"stats": {
				"hp": "680",
				"atk": "414",
				"def": "148",
				"spa": "336",
				"spd": "161",
				"spe": "331"
			},
			"statsLVL150": {
				"hp": "712",
				"atk": "436",
				"def": "156",
				"spa": "354",
				"spd": "169",
				"spe": "349"
			},
			"statsLVL200": {
				"hp": "872",
				"atk": "546",
				"def": "196",
				"spa": "444",
				"spd": "209",
				"spe": "439"
			},
			"image": "./v/v2.72.0/pm0149_00_kairyu_256.png"
		},
		{
			"name": "Mega Dragonite",
			"formName": "",
			"stats": {
				"hp": "680",
				"atk": "496",
				"def": "148",
				"spa": "336",
				"spd": "193",
				"spe": "331"
			},
			"statsLVL150": {
				"hp": "712",
				"atk": "523",
				"def": "156",
				"spa": "354",
				"spd": "202",
				"spe": "349"
			},
			"statsLVL200": {
				"hp": "872",
				"atk": "655",
				"def": "196",
				"spa": "444",
				"spd": "250",
				"spe": "439"
			},
			"image": "./v/v2.72.0/pm0149_51_00_megakairyu_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Caped Dragon Master’s Teachings",
				"description": "Normal-type moves become Flying-type moves. Turns the field of play’s zone into an EX Flying Zone the first time the user enters a battle each battle. (An EX Flying Zone powers up Flying-type attacks.) Raises the user’s Attack by six stat ranks the first time it enters a battle each battle."
			},
			{
				"name": "Debut: Endure and Restore",
				"description": "Applies the Endure and Restore effect to the user the first time it enters a battle each battle."
			},
			{
				"name": "Let the Party Begin!",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Kanto’s Wings of Mercy",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kanto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Extends the duration of the Flying Zone when the zone turns into a Flying Zone while the user is on the field."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Flying",
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
				"name": "Seasonal Outfit",
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
				"name": "(b move) White Wings Aerial Ace",
				"type": "Flying",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Has a chance (30%) of making the target flinch. The power and chance of applying additional effects of this move are not lowered even if there are multiple targets."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Unrivaled Giga Impact",
				"type": "Flying",
				"gauge": "-",
				"uses": "1",
				"category": "Physical",
				"power": "350-420",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Dragonite Mega Evolves.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. The more the user’s sync buff is raised, the greater the power of this attack. (The maximum increase is 10 ranks.) The power of this move is not lowered even if there are multiple targets. The more the user’s sync buff is raised, the more its sync move countdown is reduced the first time this attack move is successful each battle. (The maximum reduction is nine.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Split-Second Extreme Speed",
				"type": "Flying",
				"gauge": "-",
				"uses": "1",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Dragonite has not Mega Evolved.(lb)Deactivation Condition: When the user’s Dragonite Mega Evolves.(lb)(lb)Never misses. Lowers the target’s Defense by six stat ranks. The power of this move is not lowered even if there are multiple targets. Reduces the user’s sync move countdown by three the first time this attack move is successful each battle."
			},
			{
				"user": "Trainer",
				"name": "C’mon!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Removes all status conditions and the flinching, confused, and trapped conditions from the user. Applies the Damage Guard Next effect to the user. If the user’s Dragonite has Mega Evolved, also increases the user’s Sync Move ↑ Next effect by 10 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Power of Love Fly",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Dragonite until the end of battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SERENA_MEGA_GRENINJA = {
	"bg": "./v/v2.72.0/Tx_ch0130_41_serena_mindscape00.png",
	"trainer": {
		"name": "Serena (Anniversary 2026)",
		"images": {
			"base": "./v/v2.72.0/ch0130_41_serena_1024.png",
			"ex": "./v/v2.72.0/ch0130_41_serena_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Field",
	"pokemonType": "Dark",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Greninja",
			"formName": "",
			"stats": {
				"hp": "669",
				"atk": "336",
				"def": "147",
				"spa": "336",
				"spd": "159",
				"spe": "354"
			},
			"statsLVL150": {
				"hp": "701",
				"atk": "354",
				"def": "155",
				"spa": "354",
				"spd": "167",
				"spe": "372"
			},
			"statsLVL200": {
				"hp": "861",
				"atk": "444",
				"def": "195",
				"spa": "444",
				"spd": "207",
				"spe": "462"
			},
			"image": "./v/v2.72.0/pm0725_00_frog3_256.png"
		},
		{
			"name": "Mega Greninja",
			"formName": "",
			"stats": {
				"hp": "669",
				"atk": "403",
				"def": "147",
				"spa": "403",
				"spd": "159",
				"spe": "354"
			},
			"statsLVL150": {
				"hp": "701",
				"atk": "424",
				"def": "155",
				"spa": "424",
				"spd": "167",
				"spe": "372"
			},
			"statsLVL200": {
				"hp": "861",
				"atk": "532",
				"def": "195",
				"spa": "532",
				"spd": "207",
				"spe": "462"
			},
			"image": "./v/v2.72.0/pm0658_51_00_megagekkouga_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Majestic Ninja",
				"description": "Reduces the user’s sync move countdown by three when it enters a battle. Raises the user’s Attack and Sp. Atk by six stat ranks when it enters a battle."
			},
			{
				"name": "Victorious Reflexes",
				"description": "Protects the user against critical hits. The user’s stats cannot be lowered. Prevents the user from being inflicted with status conditions, flinching, becoming confused, or becoming trapped."
			},
			{
				"name": "Let the Party Begin!",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Kalos’s Ruler of Shadows",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kalos theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Extends the duration of the Dark Zone when the zone turns into a Dark Zone while the user is on the field."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
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
				"name": "(b move) Moonlit Night Slash",
				"type": "Dark",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "230-276",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. Lowers the target’s Defense by two stat ranks. The power of this move is not lowered even if there are multiple targets. Charges the user’s move gauge by one for each hit."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Air-Cutting Water Shuriken",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "40-48",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Attacks the target two to five times in a row. Never misses. Increases the user’s Physical Moves ↑ Next effect by one rank for each hit."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Glowing Mist Feint Attack",
				"type": "Dark",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "320-384",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. The more the user’s sync buff is raised, the greater the power of this attack. (The maximum increase is 10 ranks.) The power of this move is not lowered even if there are multiple targets. Turns the field of play’s zone into a Dark Zone the first time this attack move is successful each battle. (A Dark Zone powers up Dark-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "I’m Going to Win!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by five ranks. If the user’s Greninja has Mega Evolved, also increases the user’s Sync Move ↑ Next effect by 10 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Stylish Ambush Night Slash",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Greninja until the end of battle."
			}
		],
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "(b move) Moonlit Night Slash",
				"type": "Dark",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "230-276",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. Lowers the target’s Defense by two stat ranks. The power of this move is not lowered even if there are multiple targets. Charges the user’s move gauge by one for each hit."
			},
			{
				"user": "Pokemon2",
				"name": "(b move) Supersonic Water Shuriken",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Increases the user’s Physical Moves ↑ Next effect by five ranks."
			},
			{
				"user": "Pokemon2",
				"name": "(b move) Glowing Mist Feint Attack",
				"type": "Dark",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "320-384",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. The more the user’s sync buff is raised, the greater the power of this attack. (The maximum increase is 10 ranks.) The power of this move is not lowered even if there are multiple targets. Turns the field of play’s zone into a Dark Zone the first time this attack move is successful each battle. (A Dark Zone powers up Dark-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "I’m Going to Win!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by five ranks. If the user’s Greninja has Mega Evolved, also increases the user’s Sync Move ↑ Next effect by 10 ranks."
			}
		],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const KAHILI_MANDIBUZZ = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Kahili",
		"images": {
			"base": "./v/v2.72.0/ch0058_00_kahiri_1024.png",
			"ex": "./v/v2.72.0/ch0058_00_kahiri_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Flying",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Mandibuzz",
			"formName": "",
			"stats": {
				"hp": "591",
				"atk": "390",
				"def": "154",
				"spa": "390",
				"spd": "143",
				"spe": "270"
			},
			"statsLVL150": {
				"hp": "617",
				"atk": "410",
				"def": "162",
				"spa": "410",
				"spd": "151",
				"spe": "284"
			},
			"statsLVL200": {
				"hp": "747",
				"atk": "510",
				"def": "202",
				"spa": "510",
				"spd": "191",
				"spe": "354"
			},
			"image": "./v/v2.72.0/pm0630_00_vulgina_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Gobsmack 9",
				"description": "Leaves the target confused when the user’s attack move against it is successful."
			},
			{
				"name": "Interference Sync 5",
				"description": "Powers up the user’s sync move against targets that are flinching, confused, or trapped."
			},
			{
				"name": "Posthaste 9",
				"description": "Raises the user’s Speed by two stat ranks when it is hit by an attack move."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Fancy Lady",
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
				"name": "Guard Spec.",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Stat Reduction Defense effect to the allied field of play."
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
				"user": "Trainer",
				"name": "Transcendent Battle!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Alola Return Flight Flying Impact",
				"type": "Flying",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const AARON_DUSTOX = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Aaron",
		"images": {
			"base": "./v/v2.72.0/ch0152_00_ryo_1024.png",
			"ex": "./v/v2.72.0/ch0152_00_ryo_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Bug",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Dustox",
			"formName": "",
			"stats": {
				"hp": "560",
				"atk": "380",
				"def": "143",
				"spa": "380",
				"spd": "154",
				"spe": "267"
			},
			"statsLVL150": {
				"hp": "586",
				"atk": "400",
				"def": "151",
				"spa": "400",
				"spd": "162",
				"spe": "281"
			},
			"statsLVL200": {
				"hp": "716",
				"atk": "500",
				"def": "191",
				"spa": "500",
				"spd": "202",
				"spe": "351"
			},
			"image": "./v/v2.72.0/pm0269_00_dokucale_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "1st Use Status P-Move: Crit Rate ↑ 3",
				"description": "Raises the user’s critical-hit rate by three stat ranks the first time its Pokémon uses a status move each battle."
			},
			{
				"name": "Trap and Sync 5",
				"description": "Powers up the user’s sync move against targets that are trapped."
			},
			{
				"name": "Virulent Toxin 5",
				"description": "Powers up the user’s sync move when the target is poisoned or badly poisoned."
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
				"name": "Elite Four",
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
				"name": "Infestation",
				"type": "Bug",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "20-24",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target trapped."
			},
			{
				"user": "Pokemon",
				"name": "Toxic",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target badly poisoned."
			},
			{
				"user": "Pokemon",
				"name": "Bug Buzz",
				"type": "Bug",
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
				"name": "Let’s Hear It!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp Atk by four stat ranks. Raises the user’s accuracy by one stat rank. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Nasty-Mean yet Beautiful Bug Beam",
				"type": "Bug",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Sp Atk is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const NESSA_BARRASKEWDA = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Nessa",
		"images": {
			"base": "./v/v2.72.0/ch0249_00_rulina_1024.png",
			"ex": "./v/v2.72.0/ch0249_00_rulina_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Field",
	"exRole": "",
	"pokemonType": "Water",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Barraskewda",
			"formName": "",
			"stats": {
				"hp": "593",
				"atk": "380",
				"def": "144",
				"spa": "200",
				"spd": "135",
				"spe": "294"
			},
			"statsLVL150": {
				"hp": "621",
				"atk": "400",
				"def": "152",
				"spa": "210",
				"spd": "141",
				"spe": "308"
			},
			"statsLVL200": {
				"hp": "761",
				"atk": "500",
				"def": "192",
				"spa": "260",
				"spd": "171",
				"spe": "378"
			},
			"image": "./v/v2.72.0/pm0847_00_00_kamasujaw_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "1st Use Status P-Move: Team Free Move Next",
				"description": "Applies the Free Move Next effect to all allied sync pairs the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name": "Defense Destroyer 9",
				"description": "Lowers the target’s Defense by two stat ranks when the user’s attack move against it is successful."
			},
			{
				"name": "Rainy Immunity",
				"description": "Status conditions cannot be inflicted on the user when the weather is rainy."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "Waterfall",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "45-54",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Pokemon",
				"name": "Rain Dance",
				"type": "Water",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Makes the weather rainy."
			},
			{
				"user": "Pokemon",
				"name": "Aqua Jet",
				"type": "Water",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "75-90",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Graceful Moves!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Attack by four stat ranks. Raises an ally’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Gracefully Fired Off Water Impact",
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

export const JACQ_MUDSDALE = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Jacq",
		"images": {
			"base": "./v/v2.72.0/ch0298_00_zinnia_1024.png",
			"ex": "./v/v2.72.0/ch0298_00_zinnia_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Ground",
	"pokemonWeakness": "Water",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Mudsdale",
			"formName": "",
			"stats": {
				"hp": "588",
				"atk": "176",
				"def": "232",
				"spa": "132",
				"spd": "229",
				"spe": "264"
			},
			"statsLVL150": {
				"hp": "614",
				"atk": "184",
				"def": "244",
				"spa": "138",
				"spd": "241",
				"spe": "278"
			},
			"statsLVL200": {
				"hp": "744",
				"atk": "224",
				"def": "304",
				"spa": "168",
				"spd": "301",
				"spe": "348"
			},
			"image": "./v/v2.72.0/pm0840_00_roba2_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Toughen Up 9",
				"description": "Raises the user’s Defense by one stat rank when it is hit by an attack move."
			},
			{
				"name": "Triage Tank 9",
				"description": "Restores the user’s HP when it is hit by an attack move."
			},
			{
				"name": "Healthy Healing",
				"description": "Applies the Gradual Healing effect to the user if its HP is full when it enters a battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Ground",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Knowledgeable",
				"description": ""
			},
			{
				"name": "Gadgeteer",
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
				"name": "Hello, Hello!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp Atk of all allied sync pairs by two stat ranks. Raises the Speed of all allied sync pairs by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Super-Duper Splendid Research Ground Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BRANDON_ARTICUNO = {
	"bg": "./v/v2.72.0/Tx_ch0201_00_jindai_mindscape00.png",
	"trainer": {
		"name": "Brandon",
		"images": {
			"base": "./v/v2.72.0/ch0201_00_jindai_1024.png",
			"ex": "./v/v2.72.0/ch0201_00_jindai_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Flying",
	"pokemonWeakness": "Rock",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Articuno",
			"formName": "",
			"stats": {
				"hp": "680",
				"atk": "224",
				"def": "247",
				"spa": "234",
				"spd": "260",
				"spe": "286"
			},
			"statsLVL150": {
				"hp": "712",
				"atk": "236",
				"def": "259",
				"spa": "246",
				"spd": "274",
				"spe": "300"
			},
			"statsLVL200": {
				"hp": "872",
				"atk": "296",
				"def": "319",
				"spa": "306",
				"spd": "344",
				"spe": "370"
			},
			"image": "./v/v2.72.0/pm0144_00_freezer_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Aggravation 1",
				"description": "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
			},
			{
				"name": "T-Move: Team Phys & Spec Boost ↑1 9",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user’s Trainer uses a move."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Flying Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Flying theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Battle Facility Foe",
				"description": ""
			},
			{
				"name": "Passionate Spirit",
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
				"name": "Mist",
				"type": "Ice",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Stat Reduction Defense effect to the allied field of play."
			},
			{
				"user": "Trainer",
				"name": "Courage Sensor!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Sp. Atk, and critical-hit rate of all allied sync pairs by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Courageous Pyramid King Flying Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const PLAYER_POIPOLE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Player",
		"images": {
			"base": "./images/trainer_bettie.png",
			"ex": "./images/trainer_scottie.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Poipole",
			"formName": "",
			"stats": {
				"hp": "654",
				"atk": "200",
				"def": "249",
				"spa": "200",
				"spd": "249",
				"spe": "269"
			},
			"statsLVL150": {
				"hp": "684",
				"atk": "210",
				"def": "261",
				"spa": "210",
				"spd": "261",
				"spe": "283"
			},
			"statsLVL200": {
				"hp": "834",
				"atk": "260",
				"def": "321",
				"spa": "260",
				"spd": "321",
				"spe": "353"
			},
			"image": "./v/v2.72.0/pm0886_00_beastdoku1_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "On a Roll 9",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves."
			},
			{
				"name": "Team Fist Bump 9",
				"description": "Restores the HP of all allied sync pairs when the user’s attack move is successful."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Poison Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Poison theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Poison",
				"description": ""
			},
			{
				"name": "Pasio",
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
				"name": "Acid",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "19-22",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by one stat rank."
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
				"name": "Toxic",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "On Your Mark, Everyone!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp Atk and Sp Def of all allied sync pairs by two stat ranks. Increases the Sync Move ↑ Next effect of all allied sync pairs by three ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Otherworldly Journey Poison Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LEAF_BEEDRILL = {
	"bg": "./v/v2.72.0/Tx_ch0017_00_leaf_mindscape00.png",
	"trainer": {
		"name": "Leaf",
		"images": {
			"base": "./v/v2.72.0/ch0017_00_leaf_1024.png",
			"ex": "./v/v2.72.0/ch0017_00_leaf_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Sprint",
	"pokemonType": "Bug",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Beedrill",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "458",
				"def": "158",
				"spa": "336",
				"spd": "185",
				"spe": "340"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "482",
				"def": "166",
				"spa": "354",
				"spd": "195",
				"spe": "358"
			},
			"statsLVL200": {
				"hp": "830",
				"atk": "602",
				"def": "206",
				"spa": "444",
				"spd": "245",
				"spe": "448"
			},
			"image": "./v/v2.72.0/pm0015_00_spear_256.png"
		},
		{
			"name": "Mega Beedrill",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "549",
				"def": "158",
				"spa": "336",
				"spd": "185",
				"spe": "408"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "578",
				"def": "166",
				"spa": "354",
				"spd": "195",
				"spe": "429"
			},
			"statsLVL200": {
				"hp": "830",
				"atk": "722",
				"def": "206",
				"spa": "444",
				"spd": "245",
				"spe": "537"
			},
			"image": "./v/v2.72.0/pm0015_51_megaspear_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Megapowerful Poison Stingers",
				"description": "The power of the user’s Lunge is tripled. When an opponent’s stat is lowered by the additional effects of the user’s Lunge, it is lowered by three times the stat ranks. When the user’s sync move attacks an opponent, the target becomes all opposing sync pairs. The power of sync moves affected by this passive skill is not lowered even if there are multiple targets."
			},
			{
				"name": "1st S-Move: Team Speed ↑ 6",
				"description": "Raises the Speed of all allied sync pairs by six stat ranks the first time the user’s sync move is used each battle."
			},
			{
				"name": "Ally Moves ↑ as Ally Speed ↑",
				"description": "The more an ally’s Speed is raised, the more it powers up its moves."
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
				"name": "Lunge",
				"type": "Bug",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "80-96",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Attack by one stat rank."
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
				"name": "(b move) Vicious Poison Twineedle",
				"type": "Bug",
				"gauge": "3",
				"uses": "3",
				"category": "Physical",
				"power": "310-372",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Attacks twice in a row. Never misses. Leaves the target badly poisoned. Has a chance (50%) of making the target flinch. Has a chance (50%) of leaving the target confused. Has a chance (50%) of leaving the target trapped. Turns the field of play’s zone into an EX Bug Zone the first time this attack move is successful each battle. (An EX Bug Zone powers up Bug-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "Different Ways to Love!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces an ally’s sync move countdown by one. Raises an ally’s Attack by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Pals from Viridian Forest Bug Impact",
				"type": "Bug",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Beedrill until the end of battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BRENDAN_SALAMENCE = {
	"bg": "./v/v2.72.0/Tx_ch0019_00_yuki_mindscape00.png",
	"trainer": {
		"name": "Brendan",
		"images": {
			"base": "./v/v2.72.0/ch0019_00_yuki_1024.png",
			"ex": "./v/v2.72.0/ch0019_00_yuki_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Flying",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Salamence",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "434",
				"def": "166",
				"spa": "346",
				"spd": "174",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "693",
				"atk": "456",
				"def": "174",
				"spa": "364",
				"spd": "182",
				"spe": "355"
			},
			"statsLVL200": {
				"hp": "853",
				"atk": "566",
				"def": "214",
				"spa": "454",
				"spd": "222",
				"spe": "445"
			},
			"image": "./v/v2.72.0/pm0373_00_bohmander_256.png"
		},
		{
			"name": "Mega Salamence",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "520",
				"def": "199",
				"spa": "346",
				"spd": "174",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "693",
				"atk": "547",
				"def": "208",
				"spa": "364",
				"spd": "182",
				"spe": "355"
			},
			"statsLVL200": {
				"hp": "853",
				"atk": "679",
				"def": "256",
				"spa": "454",
				"spd": "222",
				"spe": "445"
			},
			"image": "./v/v2.72.0/pm0373_51_megabohmander_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Soaring Crescent Moon",
				"description": "Normal-type moves become Flying-type moves. Applies Hoenn Circle (Physical) to the allied field of play when the user turns the field of play’s zone into a Flying Zone. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when the user turns the field of play’s zone into a Flying Zone."
			},
			{
				"name": "Entry: Team Attack & Sp. Atk ↓ 2",
				"description": "Lowers the Attack and Sp. Atk of all opposing sync pairs by two stat ranks when the user enters a battle."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
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
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Main Character",
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
				"name": "Giga Impact",
				"type": "Flying",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "223-267",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Flying Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Flying Zone. (A Flying Zone powers up Flying-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Crescent Blade Giga Impact",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "480-576",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Lowers the target’s Flying Type Rebuff by one rank the first time this attack move is successful each battle. Turns the field of play’s zone into a Flying Zone the first time this attack move is successful each battle. (A Flying Zone powers up Flying-type attacks.) Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "Swooping Descent!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces an ally’s sync move countdown by one. Raises an ally’s Attack by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Winged Wishes Flying Impact",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Salamence until the end of battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ETHAN_GYARADOS = {
	"bg": "./v/v2.72.0/Tx_ch0112_00_hibiki_mindscape00.png",
	"trainer": {
		"name": "Ethan",
		"images": {
			"base": "./v/v2.72.0/ch0112_00_hibiki_1024.png",
			"ex": "./v/v2.72.0/ch0112_00_hibiki_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Sprint",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Gyarados",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "434",
				"def": "163",
				"spa": "346",
				"spd": "185",
				"spe": "314"
			},
			"statsLVL150": {
				"hp": "693",
				"atk": "456",
				"def": "171",
				"spa": "364",
				"spd": "195",
				"spe": "330"
			},
			"statsLVL200": {
				"hp": "853",
				"atk": "566",
				"def": "211",
				"spa": "454",
				"spd": "245",
				"spe": "410"
			},
			"image": "./v/v2.72.0/pm0130_00_gyarados_rare_256.png"
		},
		{
			"name": "Mega Gyarados",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "520",
				"def": "195",
				"spa": "346",
				"spd": "185",
				"spe": "314"
			},
			"statsLVL150": {
				"hp": "693",
				"atk": "547",
				"def": "205",
				"spa": "364",
				"spd": "195",
				"spe": "330"
			},
			"statsLVL200": {
				"hp": "853",
				"atk": "679",
				"def": "253",
				"spa": "454",
				"spd": "245",
				"spe": "410"
			},
			"image": "./v/v2.72.0/pm0130_51_megagyarados_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Rampaging Storm",
				"description": "Powers up the sync moves of all allied sync pairs when the weather is rainy. Extends the duration of rainy weather when the weather turns rainy while the user is on the field. Quickly charges the move gauge when the weather is rainy."
			},
			{
				"name": "P-Move on Opp: Attack & Sp. Atk ↓ 9",
				"description": "Lowers the target’s Attack and Sp. Atk by one stat rank when the user’s Pokémon uses a move targeting that opponent."
			},
			{
				"name": "Aggravation 1",
				"description": "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
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
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Main Character",
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
				"name": "Waterfall",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "45-54",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
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
				"user": "Pokemon",
				"name": "(b move) Weeping Dragon Rain Dance",
				"type": "Water",
				"gauge": "2",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Makes the weather EX rainy. Reduces the user’s sync move countdown by two. Increases the Physical Moves ↑ Next effect of all allied sync pairs by three ranks."
			},
			{
				"user": "Trainer",
				"name": "True Trust!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Attack by four stat ranks. Raises an ally’s Speed by three stat ranks. Increases the Physical Moves ↑ Next effect of an ally by two ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Red Rage Water Impact",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Gyarados until the end of battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const URBAIN_AVALUGG = {
	"bg": "./v/v2.72.0/Tx_ch0367_00_gai_mindscape00.png",
	"trainer": {
		"name": "Urbain",
		"images": {
			"base": "./v/v2.72.0/ch0367_00_gai_1024.png",
			"ex": "./v/v2.72.0/ch0367_00_gai_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Avalugg",
			"formName": "",
			"stats": {
				"hp": "612",
				"atk": "176",
				"def": "231",
				"spa": "112",
				"spd": "209",
				"spe": "222"
			},
			"statsLVL150": {
				"hp": "640",
				"atk": "184",
				"def": "243",
				"spa": "118",
				"spd": "219",
				"spe": "234"
			},
			"statsLVL200": {
				"hp": "780",
				"atk": "224",
				"def": "303",
				"spa": "148",
				"spd": "269",
				"spe": "294"
			},
			"image": "./v/v2.72.0/pm0751_00_ice3_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Super Interference 2",
				"description": "Raises the chance of inflicting status conditions—as well as inflicting the flinching, confused, or trapped condition—with the additional effects of the user’s moves."
			},
			{
				"name": "Unbending",
				"description": "Defense cannot be lowered."
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
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Rival",
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
				"name": "Tackling My Duties!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by four stat ranks. Raises the Speed of all allied sync pairs by two stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Weight of Responsibility Ice Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const CYNTHIA_GLACEON = {
	"bg": "./v/v2.72.0/Tx_ch0091_00_shirona_mindscape00.png",
	"trainer": {
		"name": "Cynthia",
		"images": {
			"base": "./v/v2.72.0/ch0091_00_shirona_1024.png",
			"ex": "./v/v2.72.0/ch0091_00_shirona_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Glaceon",
			"formName": "",
			"stats": {
				"hp": "628",
				"atk": "156",
				"def": "298",
				"spa": "224",
				"spd": "283",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "658",
				"atk": "164",
				"def": "314",
				"spa": "236",
				"spd": "297",
				"spe": "328"
			},
			"statsLVL200": {
				"hp": "808",
				"atk": "204",
				"def": "394",
				"spa": "296",
				"spd": "367",
				"spe": "408"
			},
			"image": "./v/v2.72.0/pm0471_00_glacia_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "User Sets Hail: Team Evasiveness ↑2 9",
				"description": "Raises the evasiveness of all allied sync pairs by two stat ranks when the user causes a hailstorm."
			},
			{
				"name": "Haily Hit: Team HP Recovery 9",
				"description": "Restores the HP of all allied sync pairs when the user’s attack move is successful during a hailstorm."
			},
			{
				"name": "Team Hail Immunity",
				"description": "Protects all allied sync pairs from damage from a hailstorm."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Undella Town",
				"description": ""
			},
			{
				"name": "Researcher",
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
				"user": "Pokemon",
				"name": "Hail",
				"type": "Ice",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Causes a hailstorm."
			},
			{
				"user": "Pokemon",
				"name": "Haze",
				"type": "Ice",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Returns the target’s raised stats to normal."
			},
			{
				"user": "Trainer",
				"name": "I Know That!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp Def of all allied sync pairs by four stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Freezing Beauty Ice Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const DAWN_ORIGIN_PALKIA = {
	"bg": "./v/v2.72.0/Tx_ch0116_90_hikari_mindscape00.png",
	"trainer": {
		"name": "Dawn (Champion)",
		"images": {
			"base": "./v/v2.72.0/ch0116_90_hikari_1024.png",
			"ex": "./v/v2.72.0/ch0116_90_hikari_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Field",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Palkia",
			"formName": "Origin Forme",
			"stats": {
				"hp": "671",
				"atk": "244",
				"def": "150",
				"spa": "468",
				"spd": "163",
				"spe": "339"
			},
			"statsLVL150": {
				"hp": "703",
				"atk": "256",
				"def": "158",
				"spa": "492",
				"spd": "171",
				"spe": "357"
			},
			"statsLVL200": {
				"hp": "863",
				"atk": "316",
				"def": "198",
				"spa": "612",
				"spd": "211",
				"spe": "447"
			},
			"image": "./v/v2.72.0/pm0484_12_00_palkia_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Total Control of Space",
				"description": "Grants all of the following effects the first time the user enters a battle each battle: Turns the field of play’s zone into a Dragon Zone. (A Dragon Zone powers up Dragon-type attacks.) Applies Sinnoh Circle (Special) to the allied field of play. Raises the user’s Sp. Atk by six stat ranks."
			},
			{
				"name": "Stabilized Space",
				"description": "Extends the duration of the Dragon Zone when the zone turns into a Dragon Zone while the user is on the field. Extends the duration of Sinnoh Circle (Special) when Sinnoh Circle (Special) is applied to the allied field of play. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "Shared Positivity",
				"description": "Reduces the MP for the user’s Lum Berry by one and powers up its sync move when it uses its sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Sinnoh’s Shining Pearl",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Sinnoh theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Increases the user’s Special Moves ↑ Next effect by two ranks when an ally applies a circle to the allied field of play."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Dragon",
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
				"name": "Champion",
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
				"name": "(b move) Shining Pearl Dragon Pulse",
				"type": "Dragon",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "350-420",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Sp Def by two stat ranks."
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
				"name": "(b move) Ideal World Spacial Rend",
				"type": "Dragon",
				"gauge": "-",
				"uses": "1",
				"category": "Special",
				"power": "600-720",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. Reduces the user’s sync move countdown by nine the first time this attack move is successful each battle. Increases the user’s Sync Move ↑ Next effect by 10 ranks."
			},
			{
				"user": "Trainer",
				"name": "Glorious Control of Space!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Supereffective ↑ Next effect to the user. Increases the user’s Special Moves ↑ Next effect by three ranks. Applies the Enduring effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shining Space Creation Spacial Rend",
				"type": "Dragon",
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

export const LUCAS_ORIGIN_DIALGA = {
	"bg": "./v/v2.72.0/Tx_ch0162_90_koki_mindscape00.png",
	"trainer": {
		"name": "Lucas (Champion)",
		"images": {
			"base": "./v/v2.72.0/ch0162_90_koki_1024.png",
			"ex": "./v/v2.72.0/ch0162_90_koki_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Dialga",
			"formName": "Origin Forme",
			"stats": {
				"hp": "683",
				"atk": "244",
				"def": "335",
				"spa": "278",
				"spd": "335",
				"spe": "313"
			},
			"statsLVL150": {
				"hp": "715",
				"atk": "256",
				"def": "353",
				"spa": "292",
				"spd": "353",
				"spe": "329"
			},
			"statsLVL200": {
				"hp": "875",
				"atk": "316",
				"def": "443",
				"spa": "362",
				"spd": "443",
				"spe": "409"
			},
			"image": "./v/v2.72.0/pm0483_12_00_dialga_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Total Control of Time",
				"description": "Grants all of the following effects the first time the user enters a battle each battle: Turns the field of play’s zone into an EX Dragon Zone. (An EX Dragon Zone powers up Dragon-type attacks.) Applies Sinnoh Circle (Defensive) to the allied field of play. Raises the Defense and Sp. Def of all allied sync pairs by four stat ranks."
			},
			{
				"name": "Ally Sets Circle: Team Phys & Spec Boost ↑1 9",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when an ally applies a circle to the allied field of play."
			},
			{
				"name": "Ally Sets WTZ: Team Phys & Spec Boost ↑1 9",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when an ally activates a weather, terrain, or zone effect."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Sinnoh’s Unbreakable Brilliance",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Sinnoh theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Extends the duration of Sinnoh Circle (Defensive) when Sinnoh Circle (Defensive) is applied to the allied field of play."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Dragon",
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
				"name": "Champion",
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
				"name": "(b move) Shatterproof Dragon Breath",
				"type": "Dragon",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "120-144",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Defense is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Attack and Sp. Atk by two stat ranks. Leaves the target either flinching, confused, or trapped. Leaves the target paralyzed. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Sinnoh Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank. Applies Sinnoh Circle (Defensive) to the allied field of play. Sinnoh Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Sinnoh theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Brilliant Diamond Roar of Time",
				"type": "Dragon",
				"gauge": "-",
				"uses": "1",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Reduces the user’s sync move countdown by nine the first time this attack move is successful each battle. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by four ranks."
			},
			{
				"user": "Trainer",
				"name": "Glorious Control of Time!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Restores the HP of all allied sync pairs by approximately 40% of their maximum HP. Removes all status conditions and the flinching, confused, and trapped conditions from all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "True Temporal Creation Roar of Time",
				"type": "Dragon",
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

export const CYRUS_WEAVILE = {
	"bg": "./v/v2.72.0/Tx_ch0194_00_akagi_mindscape00.png",
	"trainer": {
		"name": "Cyrus",
		"images": {
			"base": "./v/v2.72.0/ch0194_00_akagi_1024.png",
			"ex": "./v/v2.72.0/ch0194_00_akagi_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Weavile",
			"formName": "",
			"stats": {
				"hp": "652",
				"atk": "448",
				"def": "193",
				"spa": "380",
				"spd": "191",
				"spe": "353"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "472",
				"def": "203",
				"spa": "400",
				"spd": "201",
				"spe": "371"
			},
			"statsLVL200": {
				"hp": "832",
				"atk": "592",
				"def": "253",
				"spa": "500",
				"spd": "251",
				"spe": "461"
			},
			"image": "./v/v2.72.0/pm0461_00_manyula_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Cool and Clever Judgment",
				"description": "The user’s moves never miss. Applies the Free Move Next effect to the user when its attack move is successful while the zone is an Ice Zone. Increases the user’s Physical Moves ↑ Next effect by two ranks when its attack move is successful while the zone is an Ice Zone."
			},
			{
				"name": "Ally Sets WTZ: Team Physical Boost ↑1 9",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when an ally activates a weather, terrain, or zone effect."
			},
			{
				"name": "User Sets Ice Zone: Sinnoh C (Phys) on Field",
				"description": "Applies Sinnoh Circle (Physical) to the allied field of play when the user turns the field of play’s zone into an Ice Zone."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Villain.",
				"description": ""
			},
			{
				"name": "Gadgeteer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Icicle Crash",
				"type": "Ice",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "105-126",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Ice Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into an Ice Zone. (An Ice Zone powers up Ice-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Frigid Storm Ice Punch",
				"type": "Ice",
				"gauge": "3",
				"uses": "1",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Leaves the target frozen. The power of this move is not lowered even if there are multiple targets. Turns the field of play’s zone into an Ice Zone the first time this attack move is successful each battle. (An Ice Zone powers up Ice-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "We’re All Incomplete",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces an ally’s sync move countdown by one. Raises an ally’s Attack by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Rid of Incomplete Spirit Ice Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MARS_PURUGLY = {
	"bg": "./v/v2.72.0/Tx_ch0225_00_mars_mindscape00.png",
	"trainer": {
		"name": "Mars",
		"images": {
			"base": "./v/v2.72.0/ch0225_00_mars_1024.png",
			"ex": "./v/v2.72.0/ch0225_00_mars_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Tech",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Purugly",
			"formName": "",
			"stats": {
				"hp": "630",
				"atk": "380",
				"def": "174",
				"spa": "434",
				"spd": "174",
				"spe": "369"
			},
			"statsLVL150": {
				"hp": "660",
				"atk": "400",
				"def": "182",
				"spa": "456",
				"spd": "182",
				"spe": "389"
			},
			"statsLVL200": {
				"hp": "810",
				"atk": "500",
				"def": "222",
				"spa": "566",
				"spd": "222",
				"spe": "489"
			},
			"image": "./v/v2.72.0/pm0432_00_bunyatto_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Impudent Beauty",
				"description": "Reduces the user’s sync move countdown by two the first time its Pokémon uses a status move each battle. When the user’s status move is used and inflicted a status condition on an opponent, inflicts the same status condition on all opposing sync pairs."
			},
			{
				"name": "Ruthless Toxin 9",
				"description": "Lowers one of the target’s following stats by two stat ranks at random when the user’s attack move is successful against a poisoned or badly poisoned opponent: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"name": "Opp Poisoned: Team S-Moves ↑ 3",
				"description": "Powers up the sync moves of all allied sync pairs when attacking a target that is poisoned or badly poisoned."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Villain.",
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
				"name": "Swift",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "57-68",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "EX Speed",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Speed by six stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Toxic",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "Not a Chance!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Sp Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Strong Beautiful Commander Normal Beam",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
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

export const JUPITER_SKUNTANK = {
	"bg": "./v/v2.72.0/Tx_ch0226_00_jupiter_mindscape00.png",
	"trainer": {
		"name": "Jupiter",
		"images": {
			"base": "./v/v2.72.0/ch0226_00_jupiter_1024.png",
			"ex": "./v/v2.72.0/ch0226_00_jupiter_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Skuntank",
			"formName": "",
			"stats": {
				"hp": "676",
				"atk": "166",
				"def": "297",
				"spa": "190",
				"spd": "297",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "708",
				"atk": "174",
				"def": "313",
				"spa": "200",
				"spd": "313",
				"spe": "298"
			},
			"statsLVL200": {
				"hp": "868",
				"atk": "214",
				"def": "393",
				"spa": "250",
				"spd": "393",
				"spe": "368"
			},
			"image": "./v/v2.72.0/pm0435_00_skutank_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Wafting Poison Stench",
				"description": "Turns the field of play’s zone into a Poison Zone the first time the user’s Pokémon uses a status move each battle. (A Poison Zone powers up Poison-type attacks.) When the user’s status move is used and inflicted a status condition on an opponent, inflicts the same status condition on all opposing sync pairs."
			},
			{
				"name": "Hit Poisoned Opp: Team HP Recovery 9",
				"description": "Restores the HP of all allied sync pairs when the user’s attack move is successful against a poisoned or badly poisoned opponent."
			},
			{
				"name": "Opp Poisoned: Team S-Moves ↑ 3",
				"description": "Powers up the sync moves of all allied sync pairs when attacking a target that is poisoned or badly poisoned."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Villain.",
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
				"name": "Venoshock",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power is doubled when the target is poisoned or badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "X Sp. Atk All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Atk of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Toxic",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "Aren’t You Tough...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp Def of all allied sync pairs by four stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Stoic Passionate Commander Poison Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SATURN_TOXICROAK = {
	"bg": "./v/v2.72.0/Tx_ch0227_00_saturn_mindscape00.png",
	"trainer": {
		"name": "Saturn",
		"images": {
			"base": "./v/v2.72.0/ch0227_00_saturn_1024.png",
			"ex": "./v/v2.72.0/ch0227_00_saturn_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Toxicroak",
			"formName": "",
			"stats": {
				"hp": "648",
				"atk": "390",
				"def": "185",
				"spa": "434",
				"spd": "185",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "678",
				"atk": "410",
				"def": "195",
				"spa": "456",
				"spd": "195",
				"spe": "298"
			},
			"statsLVL200": {
				"hp": "828",
				"atk": "510",
				"def": "245",
				"spa": "566",
				"spd": "245",
				"spe": "368"
			},
			"image": "./v/v2.72.0/pm0454_01_dokurog_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Virulent Toxic Claws",
				"description": "When the user’s status move is used and inflicted a status condition on an opponent, inflicts the same status condition on all opposing sync pairs. Lowers the Sp. Def of all opposing sync pairs by three stat ranks when the user’s Pokémon uses a status move."
			},
			{
				"name": "Hit Poisoned Opp: S-Move Boost ↑3 9",
				"description": "Increases the user’s Sync Move ↑ Next effect by three ranks when its attack move is successful against a poisoned or badly poisoned opponent."
			},
			{
				"name": "Opp Poisoned: Team S-Moves ↑ 3",
				"description": "Powers up the sync moves of all allied sync pairs when attacking a target that is poisoned or badly poisoned."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Fighting",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Villain.",
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
				"name": "Vacuum Wave",
				"type": "Fighting",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "20-24",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
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
				"description": "Raises the Sp. Def of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Toxic",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "You’re Tough, My Friend!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Sp Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks. Increases the user’s Sync Move ↑ Next effect by five ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Boss-Assessing Commander Fighting Beam",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Sp Def is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}