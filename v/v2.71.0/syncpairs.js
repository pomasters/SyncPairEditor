export const FLORIAN_YANMEGA = {
	"bg": "./v/v2.71.0/Tx_ch0286_80_svboy_mindscape00.png",
	"trainer": {
		"name": "Florian (Alt.)",
		"images": {
			"base": "./v/v2.71.0/ch0286_80_svboy_1024.png",
			"ex": "./v/v2.71.0/ch0286_80_svboy_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Bug",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Yanmega",
			"formName": "Tera Type: Bug",
			"stats": {
				"hp": "665",
				"atk": "424",
				"def": "161",
				"spa": "424",
				"spd": "147",
				"spe": "346"
			},
			"statsLVL150": {
				"hp": "695",
				"atk": "446",
				"def": "169",
				"spa": "446",
				"spd": "155",
				"spe": "364"
			},
			"statsLVL200": {
				"hp": "845",
				"atk": "556",
				"def": "209",
				"spa": "556",
				"spd": "195",
				"spe": "454"
			},
			"image": "./v/v2.71.0/pm0469_00_00_megayanma_256.png"
		},
		{
			"name": "Yanmega",
			"formName": "Tera Type: Bug",
			"stats": {
				"hp": "665",
				"atk": "424",
				"def": "161",
				"spa": "424",
				"spd": "147",
				"spe": "346"
			},
			"statsLVL150": {
				"hp": "695",
				"atk": "446",
				"def": "169",
				"spa": "446",
				"spd": "155",
				"spe": "364"
			},
			"statsLVL200": {
				"hp": "845",
				"atk": "556",
				"def": "209",
				"spa": "556",
				"spd": "195",
				"spe": "454"
			},
			"image": "./v/v2.71.0/pm0469_71_12_megayanma_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Debut: Bug S-Tera",
				"description": "The user Sync Terastallizes into Bug type the first time it enters a battle each battle."
			},
			{
				"name": "1st T-Move: Attack ↑6 & Crit Rate ↑3",
				"description": "Raises the user’s Attack by six stat ranks the first time its Trainer uses a move each battle. Raises the user’s critical-hit rate by three stat ranks the first time its Trainer uses a move each battle."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
			}
		],
		"passives2": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Ancient Ogre Wingbeats",
				"description": "Removes all of the user’s Speed increases, and increases its Physical Moves ↑ Next effect by the same amount after using its sync move."
			},
			{
				"name": "1st T-Move: Attack ↑6 & Crit Rate ↑3",
				"description": "Raises the user’s Attack by six stat ranks the first time its Trainer uses a move each battle. Raises the user’s critical-hit rate by three stat ranks the first time its Trainer uses a move each battle."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
			}
		],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Memories of Kitakami Road",
				"description": "Powers up the sync moves of all allied sync pairs when the zone is a Bug Zone. Extends the duration of the Bug Zone when the zone turns into a Bug Zone while the user is on the field. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"themes": [
			{
				"name": "Bug",
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
				"name": "Hypnosis",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "75",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
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
				"name": "(b move) Zipping Lunge",
				"type": "Bug",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "240-288",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Lowers the target’s Attack by three stat ranks. The power of this move is not lowered even if there are multiple targets. Applies the Free Move Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "Festival Starts Now!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by three. Applies the Supereffective ↑ Next effect to the user. Applies the Free Move Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Festival of Curiosity Tera Blast",
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
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "Hypnosis",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "75",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
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
				"user": "Pokemon2",
				"name": "(b move)(tera) Zipping Lunge",
				"type": "Bug",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "240-288",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Lowers the target’s Attack by three stat ranks. The power of this move is not lowered even if there are multiple targets. Applies the Free Move Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "Festival Starts Now!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by three. Applies the Supereffective ↑ Next effect to the user. Applies the Free Move Next effect to the user."
			}
		],
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Jadeite Tera Blast",
				"type": "Bug",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Defense by two stat ranks. Turns the field of play’s zone into a Bug Zone the first time this attack move is successful each battle. (A Bug Zone powers up Bug-type attacks.)"
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const JULIANA_CHIMECHO = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Juliana",
		"images": {
			"base": "./v/v2.71.0/ch0287_00_svgirl_1024.png",
			"ex": "./v/v2.71.0/ch0287_00_svgirl_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Sprint",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Chimecho",
			"formName": "",
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
			"image": "./v/v2.71.0/pm0358_00_chirean_256.png"
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
				"name": "Psychic",
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
				"name": "Beautiful Windy Echoes Psychic Beam",
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

export const CARMINE_MIGHTYENA = {
	"bg": "./v/v2.71.0/Tx_ch0356_80_zeiyu_mindscape00.png",
	"trainer": {
		"name": "Carmine (Alt.)",
		"images": {
			"base": "./v/v2.71.0/ch0356_80_zeiyu_1024.png",
			"ex": "./v/v2.71.0/ch0356_80_zeiyu_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Mightyena",
			"formName": "",
			"stats": {
				"hp": "687",
				"atk": "312",
				"def": "316",
				"spa": "268",
				"spd": "319",
				"spe": "328"
			},
			"statsLVL150": {
				"hp": "719",
				"atk": "328",
				"def": "332",
				"spa": "282",
				"spd": "335",
				"spe": "346"
			},
			"statsLVL200": {
				"hp": "879",
				"atk": "408",
				"def": "412",
				"spa": "352",
				"spd": "415",
				"spe": "436"
			},
			"image": "./v/v2.71.0/pm0262_00_graena_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Dazzling Jinbei Look",
				"description": "Applies Paldea Circle (Physical) to the allied field of play the first time the user enters a battle each battle. Applies the Endure and Restore effect to the user the first time it enters a battle each battle."
			},
			{
				"name": "Talent for Oustin’ Ogres",
				"description": "Reduces the user’s sync move countdown by one when it applies Paldea Circle (Physical) to the allied field of play. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when the user applies Paldea Circle (Physical) to the allied field of play."
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
				"name": "Ogre Balloon–Busting Champion",
				"description": "Reduces the user’s sync move countdown by one the first time its sync move is used each battle. Turns the field of play’s zone into a Dark Zone the first time the user’s Trainer uses a move each battle. (A Dark Zone powers up Dark-type attacks.) Extends the duration of the Dark Zone when the zone turns into a Dark Zone while the user is on the field."
			}
		],
		"themes": [
			{
				"name": "Dark",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Battle Partner",
				"description": ""
			},
			{
				"name": "Blueberry Academy",
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
				"name": "Paldea Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank. Applies Paldea Circle (Physical) to the allied field of play. Paldea Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Paldea theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Sharp Fangs Crunch",
				"type": "Dark",
				"gauge": "1",
				"uses": "2",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When a circle is applied to the allied field of play.(lb)Deactivation Condition: When there are no longer any circles applied to the allied field of play.(lb)(lb)Never misses. Lowers the target’s Defense by three stat ranks. Applies the Physical Move Break effect to the target the first time this attack move is successful each battle. Turns the field of play’s zone into a Dark Zone the first time this attack move is successful each battle. (A Dark Zone powers up Dark-type attacks.) Increases the Physical Moves ↑ Next effect of all allied sync pairs by two ranks."
			},
			{
				"user": "Trainer",
				"name": "First One Wins!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the Attack of all allied sync pairs by three stat ranks. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ogre Balloon–Busting Champion Crunch",
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

export const WHITNEY_GIRAFARIG = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Whitney",
		"images": {
			"base": "./v/v2.71.0/ch0026_00_akane_1024.png",
			"ex": "./v/v2.71.0/ch0026_00_akane_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Special Strike",
	"exRole": "",
	"pokemonType": "Normal",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Girafarig",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "312",
				"def": "116",
				"spa": "346",
				"spd": "116",
				"spe": "291"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "328",
				"def": "122",
				"spa": "364",
				"spd": "122",
				"spe": "307"
			},
			"statsLVL200": {
				"hp": "779",
				"atk": "408",
				"def": "152",
				"spa": "454",
				"spd": "152",
				"spe": "387"
			},
			"image": "./v/v2.71.0/pm0203_01_kirinriki_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sync Thinker 9",
				"description": "Increases the user’s Special Moves ↑ Next effect by one rank after using its sync move."
			},
			{
				"name": "Mind Games 9",
				"description": "Lowers the target’s Sp. Def by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Unflappable",
				"description": "Prevents the user from flinching."
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
				"name": "Hyper Beam",
				"type": "Normal",
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
				"name": "I Really Want to Battle!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by three stat ranks. Applies the Free Move Next effect to the user. Increases the user’s Special Moves ↑ Next effect by two ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Perfect for a Cutie Like Me Normal Beam",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
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

export const SELENE_PRIMARINA = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Selene",
		"images": {
			"base": "./v/v2.71.0/ch0123_00_mizuki_1024.png",
			"ex": "./v/v2.71.0/ch0123_00_mizuki_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Tech",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Primarina",
			"formName": "",
			"stats": {
				"hp": "656",
				"atk": "336",
				"def": "172",
				"spa": "336",
				"spd": "191",
				"spe": "307"
			},
			"statsLVL150": {
				"hp": "686",
				"atk": "354",
				"def": "180",
				"spa": "354",
				"spd": "201",
				"spe": "323"
			},
			"statsLVL200": {
				"hp": "836",
				"atk": "444",
				"def": "220",
				"spa": "444",
				"spd": "251",
				"spe": "403"
			},
			"image": "./v/v2.71.0/pm0849_00_ashika3_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Entry: Attack ↑6 & Crit Rate ↑3",
				"description": "Raises the user’s Attack by six stat ranks when it enters a battle. Raises the user’s critical-hit rate by three stat ranks when it enters a battle."
			},
			{
				"name": "1st “Fairy Wish” MP 0: Team Physical Boost 3",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by three ranks the first time the remaining MP for the user’s Fairy Wish is zero each battle."
			},
			{
				"name": "Fairy Zone Hit: Defense ↓2 9",
				"description": "Lowers the target’s Defense by two stat ranks when the user’s attack move is successful while the zone is a Fairy Zone."
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
				"name": "Play Rough",
				"type": "Fairy",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "111-133",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Attack by one stat rank."
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
				"name": "(b move) Elegant Play Rough",
				"type": "Fairy",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Attack and Sp. Atk by two stat ranks. The power of this move is not lowered even if there are multiple targets. If the remaining MP for the user’s Fairy Wish is one or more when attacking with this move, reduces those MP by one and grants all of the following effects: Turns the field of play’s zone into a Fairy Zone. (A Fairy Zone powers up Fairy-type attacks.) Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "In a Hurry!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an ally by one. Applies the Supereffective ↑ Next effect to an ally. Increases the Sync Move ↑ Next effect of an ally by five ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Moonlit Melody Fairy Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const HARMONY_FERALIGATR = {
	"bg": "./v/v2.71.0/Tx_ch0366_00_zagirl_mindscape00.png",
	"trainer": {
		"name": "Harmony",
		"images": {
			"base": "./v/v2.71.0/ch0366_00_zagirl_1024.png",
			"ex": "./v/v2.71.0/ch0366_00_zagirl_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Physical Strike",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Feraligatr",
			"formName": "",
			"stats": {
				"hp": "669",
				"atk": "356",
				"def": "165",
				"spa": "336",
				"spd": "164",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "701",
				"atk": "374",
				"def": "173",
				"spa": "354",
				"spd": "172",
				"spe": "328"
			},
			"statsLVL200": {
				"hp": "861",
				"atk": "464",
				"def": "213",
				"spa": "444",
				"spd": "212",
				"spe": "408"
			},
			"image": "./v/v2.71.0/pm0160_00_ordile_256.png"
		},
		{
			"name": "Mega Feraligatr",
			"formName": "",
			"stats": {
				"hp": "669",
				"atk": "427",
				"def": "165",
				"spa": "336",
				"spd": "164",
				"spe": "374"
			},
			"statsLVL150": {
				"hp": "701",
				"atk": "448",
				"def": "173",
				"spa": "354",
				"spd": "172",
				"spe": "393"
			},
			"statsLVL200": {
				"hp": "861",
				"atk": "556",
				"def": "213",
				"spa": "444",
				"spd": "212",
				"spe": "489"
			},
			"image": "./v/v2.71.0/pm0160_51_00_megaordile_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Kalos Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Kalos theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Team MZ’s Secret Weapon",
				"description": "Reduces the MP for the user’s KalosPassion by one and grants all of the following effects after your team’s sync pair uses their sync move: Applies Kalos Circle (Physical) to the allied field of play. Increases the user’s Physical Moves ↑ Next effect by two ranks. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"name": "A Winner’s True Strength",
				"description": "Applies the Physical Move Break effect to all opposing sync pairs the first time the user’s sync move is used each battle. Increases the user’s Physical Moves ↑ Next effect by two ranks the first time its sync move is used each battle."
			},
			{
				"name": "Circle: S-Moves ↑ 9",
				"description": "Powers up the user’s sync move when a circle applies to the allied field of play."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Gigantic Jaws’ Tenfold Power",
				"description": "Powers up the sync moves of all allied sync pairs when a circle applies to the allied field of play. Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"themes": [
			{
				"name": "Water",
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
				"name": "(b move) Massive Jaws Liquidation",
				"type": "Water",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Defense by two stat ranks. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Kalos Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank. Applies Kalos Circle (Physical) to the allied field of play. Kalos Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kalos theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Rushing Rapids Aqua Jet",
				"type": "Water",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Reduces the user’s sync move countdown by two. Increases the user’s Sync Move ↑ Next effect by five ranks. If the user’s Feraligatr has Mega Evolved, also increases this attack’s power by 50%."
			},
			{
				"user": "Trainer",
				"name": "With Confidence!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Raises the user’s Attack by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies Kalos Circle (Physical) to the allied field of play. Kalos Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kalos theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Lumiose-Loving Traveler Liquidation",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Feraligatr until the end of battle. The more the user’s Attack is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const URBAIN_MEGANIUM = {
	"bg": "./v/v2.71.0/Tx_ch0367_00_gai_mindscape00.png",
	"trainer": {
		"name": "Urbain",
		"images": {
			"base": "./v/v2.71.0/ch0367_00_gai_1024.png",
			"ex": "./v/v2.71.0/ch0367_00_gai_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Tech",
	"pokemonType": "Grass",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Meganium",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "336",
				"def": "155",
				"spa": "448",
				"spd": "155",
				"spe": "327"
			},
			"statsLVL150": {
				"hp": "691",
				"atk": "354",
				"def": "163",
				"spa": "472",
				"spd": "163",
				"spe": "345"
			},
			"statsLVL200": {
				"hp": "841",
				"atk": "444",
				"def": "203",
				"spa": "592",
				"spd": "203",
				"spe": "435"
			},
			"image": "./v/v2.71.0/pm0154_00_meganium_256.png"
		},
		{
			"name": "Mega Meganium",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "336",
				"def": "155",
				"spa": "537",
				"spd": "186",
				"spe": "327"
			},
			"statsLVL150": {
				"hp": "691",
				"atk": "354",
				"def": "163",
				"spa": "566",
				"spd": "195",
				"spe": "345"
			},
			"statsLVL200": {
				"hp": "841",
				"atk": "444",
				"def": "203",
				"spa": "710",
				"spd": "243",
				"spe": "435"
			},
			"image": "./v/v2.71.0/pm0154_51_00_megameganium_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Kalos Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Kalos theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "A Heart for Lumiose",
				"description": "Reduces the MP for the user’s KalosAnalysis by one and grants all of the following effects after your team’s sync pair uses their sync move: Applies Kalos Circle (Special) to the allied field of play. Increases the user’s Special Moves ↑ Next effect by two ranks. Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"name": "Helping Heart",
				"description": "Applies the Physical Damage Reduction effect and the Special Damage Reduction effect to the allied field of play when the user applies Kalos Circle (Special) to the allied field of play."
			},
			{
				"name": "Physical/Special DR on Field: MG → 5",
				"description": "Quickly charges the move gauge when the Physical Damage Reduction effect or the Special Damage Reduction effect applies to the allied field of play."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Four-Flower Shine",
				"description": "Turns the field of play’s terrain into Grassy Terrain the first time the user’s attack move is successful each battle. Turns the field of play’s terrain into Grassy Terrain the first time the user’s sync move is used each battle. Extends the duration of Grassy Terrain when the terrain turns into Grassy Terrain while the user is on the field."
			}
		],
		"themes": [
			{
				"name": "Grass",
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
				"name": "(b move) Luxuriant Leaf Storm",
				"type": "Grass",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp. Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Sp. Def by two stat ranks. The power of this move is not lowered even if there are multiple targets. In addition, lowers the target’s Attack by one stat rank when the Physical Damage Reduction effect applies to the allied field of play. In addition, lowers the target’s Sp. Atk by one stat rank when the Special Damage Reduction effect applies to the allied field of play."
			},
			{
				"user": "Trainer",
				"name": "Kalos Analysis",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank. Applies Kalos Circle (Special) to the allied field of play. Kalos Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kalos theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Four-Fleur Solar Beam",
				"type": "Grass",
				"gauge": "2",
				"uses": "3",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When a Kalos Circle is applied to the allied field of play.(lb)Deactivation Condition: When there are no longer any Kalos Circles applied to the allied field of play.(lb)(lb)The user gets ready to attack. Using this move again will cause the user to leave this posture, then attack. No other actions can be taken while ready to attack. The preparation period is skipped when the weather is sunny or if the user’s Meganium has Mega Evolved, and the user will attack right away. The power of this move is not lowered even if there are multiple targets. This attack’s power increases 50% when the Physical Damage Reduction effect applies to the allied field of play.(lb)This attack’s power increases 50% when the Special Damage Reduction effect applies to the allied field of play.(lb)(This attack’s power is doubled if both the Physical Damage Reduction effect and Special Damage Reduction effect apply to the allied field of play.)"
			},
			{
				"user": "Trainer",
				"name": "Believe in Our Team!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies Kalos Circle (Special) to the allied field of play. Kalos Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kalos theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Helping People and Pokémon Solar Beam",
				"type": "Grass",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Meganium until the end of battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}
