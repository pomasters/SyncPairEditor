export const STEVEN_SKARMORY = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Steven",
		"images": {
			"base": "./v/v2.54.0/ch0090_00_daigo_1024.png",
			"ex": "./v/v2.54.0/ch0090_00_daigo_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Steel",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Skarmory",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "200",
				"def": "268",
				"spa": "156",
				"spd": "244",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "210",
				"def": "282",
				"spa": "164",
				"spd": "256",
				"spe": "297"
			},
			"image": "./v/v2.54.0/pm0227_00_00_airmd_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Endurance",
				"description": "Applies the Enduring effect to the user if its HP is full when it enters a battle."
			},
			{
				"name": "Natural Remedy",
				"description": "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
			},
			{
				"name": "Quick Cure",
				"description": "Removes the confused, flinching, and trapped conditions from the user the first time they are inflicted each battle."
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
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Rock Lover",
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
				"name": "Metal Claw",
				"type": "Steel",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "21-25",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of raising the user’s Attack by one stat rank."
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
				"user": "Trainer",
				"name": "Let’s Do This!",
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
				"name": "Tempered Armor Steel Impact",
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

export const HOP_ZACIAN = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Hop",
		"images": {
			"base": "./v/v2.54.0/ch0244_00_hop_1024.png",
			"ex": "./v/v2.54.0/ch0244_00_hop_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Tech",
	"pokemonType": "Steel",
	"pokemonWeakness": "Ground",
	"pokemonGender": "MaleFemale",
	"pokemon": [
		{
			"name": "Zacian",
			"formName": "Crowned Sword",
			"stats": {
				"hp": "650",
				"atk": "336",
				"def": "176",
				"spa": "268",
				"spd": "176",
				"spe": "390"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "354",
				"def": "184",
				"spa": "282",
				"spd": "184",
				"spe": "410"
			},
			"image": "./v/v2.54.0/pm0888_12_00_zacian_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Sword That Saved Galar",
				"description": "Protects the user against critical hits. When an attack move used by the user’s Pokémon that targets itself or an ally is successful, that attack’s target becomes all allied sync pairs. When an attack move used by the user’s Pokémon that targets an opponent is successful, that attack’s target becomes all opposing sync pairs. When the user’s sync move attacks an opponent, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves and sync moves affected by this passive skill are not lowered even if there are multiple targets. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "Fierce Entry 6",
				"description": "Raises the user’s Attack by six stat ranks when it enters a battle."
			},
			{
				"name": "Defense Destroyer 9",
				"description": "Lowers the target’s Defense by two stat ranks when the user’s attack move against it is successful."
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
				"name": "Behemoth Blade",
				"type": "Steel",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "144-172",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases 50% when the target has a sync buff."
			},
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
				"user": "Pokemon",
				"name": "(b move) Blue Fangs Behemoth Blade",
				"type": "Steel",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "280-336",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Restores one MP of the user’s buddy move when the target does not have a sync buff. This attack’s power is doubled when the target has a sync buff. Reduces the user’s sync move countdown by two when the target has a sync buff."
			},
			{
				"user": "Trainer",
				"name": "Our True Power!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Reduces the user’s sync move countdown by one. Raises the Speed of all allied sync pairs by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "The Fairy King’s Sword Steel Impact",
				"type": "Steel",
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

export const MARNIE_LIEPARD = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Marnie",
		"images": {
			"base": "./v/v2.54.0/ch0245_00_mary_1024.png",
			"ex": "./v/v2.54.0/ch0245_00_mary_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Liepard",
			"formName": "",
			"stats": {
				"hp": "643",
				"atk": "424",
				"def": "176",
				"spa": "424",
				"spd": "176",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "673",
				"atk": "446",
				"def": "184",
				"spa": "446",
				"spd": "184",
				"spe": "328"
			},
			"image": "./v/v2.54.0/pm0510_00_lepardas_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Fast-Track 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when the user’s Pokémon uses a move."
			},
			{
				"name": "Dirty Sync 5",
				"description": "Powers up the user’s sync move against targets that are affected by a status condition."
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
				"name": "Dark",
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
				"name": "Pigtails",
				"description": ""
			},
			{
				"name": "Fancy Lady",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Snarl",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "39-46",
				"accuracy": "95",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Sp. Atk. by one stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Thunder Wave",
				"type": "Electric",
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
				"name": "Goin’ All Out!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Sp.&nbsp;Atk by four stat ranks. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Hard-Trained Favorite Dark Beam",
				"type": "Dark",
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

export const IONO_KILOWATTREL = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Iono",
		"images": {
			"base": "./v/v2.54.0/ch0296_00_nanjamo_1024.png",
			"ex": "./v/v2.54.0/ch0296_00_nanjamo_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "",
	"pokemonType": "Electric",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Kilowattrel",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "283",
				"def": "156",
				"spa": "424",
				"spd": "156",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "297",
				"def": "164",
				"spa": "446",
				"spd": "164",
				"spe": "354"
			},
			"image": "./v/v2.54.0/pm0941_00_00_taikaiden_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit the Gas 5",
				"description": "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves."
			},
			{
				"name": "Rejuvenate 6",
				"description": "Charges the user’s move gauge by six after using a sync move."
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
				"name": "Dire Hit +",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by two stat ranks."
			},
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
				"name": "Gimme Some Cheers!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk and Speed by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Flyin’ High Electric Beam",
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

export const MAY_KYOGRE = {
	"bg": "./v/v2.54.0/Tx_ch0126_90_haruka_mindscape00.png",
	"trainer": {
		"name": "May (Champion)",
		"images": {
			"base": "./v/v2.54.0/ch0126_90_haruka_1024.png",
			"ex": "./v/v2.54.0/ch0126_90_haruka_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Special Strike",
	"pokemonType": "Water",
	"pokemonWeakness": "Grass",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "(shiny) Kyogre",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "297",
				"def": "176",
				"spa": "370",
				"spd": "190",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "313",
				"def": "184",
				"spa": "390",
				"spd": "200",
				"spe": "297"
			},
			"image": "./v/v2.54.0/pm0382_00_kyogre_rare_256.png"
		},
		{
			"name": "Primal Kyogre",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "297",
				"def": "176",
				"spa": "370",
				"spd": "190",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "313",
				"def": "184",
				"spa": "390",
				"spd": "200",
				"spe": "297"
			},
			"image": "./v/v2.54.0/pm0382_51_kyogresp_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Blue Power Awakening",
				"description": "Become Primal Kyogre until the end of battle the first time the user enters a battle each battle."
			},
			{
				"name": "Hoenn Blessing",
				"description": "Charges the user’s move gauge by one when its attack move hits while the weather is rainy. Increases the user’s Sync Move ↑ Next effect by one rank when its attack move hits while the weather is rainy."
			},
			{
				"name": "Sure Hit | P-Moves & S-Moves Crit",
				"description": "The user’s moves never miss. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passives2": [
			{
				"name": "Primordial Ocean of Myths",
				"description": "Grants all of the following effects when the user’s Kyogre becomes Primal Kyogre: Reduces the user’s sync move countdown by three. Makes the weather EX rainy. Raises the user’s Sp. Atk by six stat ranks."
			},
			{
				"name": "Hoenn Blessing",
				"description": "Charges the user’s move gauge by one when its attack move hits while the weather is rainy. Increases the user’s Sync Move ↑ Next effect by one rank when its attack move hits while the weather is rainy."
			},
			{
				"name": "Sure Hit | P-Moves & S-Moves Crit",
				"description": "The user’s moves never miss. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passivesMaster": [
			{
				"name": "Hoenn Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Hoenn theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Water",
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
				"name": "Champion",
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
				"user": "Pokemon2",
				"name": "Origin Pulse",
				"type": "Water",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "189-226",
				"accuracy": "85",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon2",
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
				"user": "Pokemon2",
				"name": "(b move) Blue Origin Pulse",
				"type": "Water",
				"gauge": "4",
				"uses": "1",
				"category": "Special",
				"power": "600-720",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the weather turns EX rainy.(lb)Deactivation Condition: When the weather condition is no longer EX rainy.(lb)(lb)Makes the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Starry Sky of Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Increases the Sync Move&nbsp;↑ Next effect of an ally by four&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by four&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Storm-Summoning Seas Origin Pulse",
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
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BRENDAN_SWELLOW = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Brendan",
		"images": {
			"base": "./v/v2.54.0/ch0019_00_yuki_1024.png",
			"ex": "./v/v2.54.0/ch0019_00_yuki_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Flying",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Swellow",
			"formName": "",
			"stats": {
				"hp": "593",
				"atk": "375",
				"def": "156",
				"spa": "375",
				"spd": "155",
				"spe": "311"
			},
			"statsLVL150": {
				"hp": "621",
				"atk": "395",
				"def": "164",
				"spa": "395",
				"spd": "163",
				"spe": "327"
			},
			"image": "./v/v2.54.0/pm0277_00_ohsubame_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Grab Bag 9",
				"description": "Lowers one of the target’s following stats by one stat rank at random when the user’s Pokémon uses a move targeting that opponent: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"name": "Move Gauge Refresh 4",
				"description": "Has a chance (50%) of charging the user’s move gauge by one when its move is successful."
			},
			{
				"name": "Quick Cure",
				"description": "Removes the confused, flinching, and trapped conditions from the user the first time they are inflicted each battle."
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
				"name": "X Evasion",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s evasiveness by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Growl",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Attack by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Soar the Sky!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Speed by four stat ranks. Raises the user’s evasiveness by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Soaring in the Clear Sky Flying Beam",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s evasiveness is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const HAU_CRABOMINABLE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Hau",
		"images": {
			"base": "./v/v2.54.0/ch0098_00_hau_1024.png",
			"ex": "./v/v2.54.0/ch0098_00_hau_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Crabominable",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "419",
				"def": "185",
				"spa": "224",
				"spd": "183",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "441",
				"def": "195",
				"spa": "236",
				"spd": "193",
				"spe": "354"
			},
			"image": "./v/v2.54.0/pm0860_00_yashigani2_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Head Start 1",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle."
			},
			{
				"name": "Defense Crush 9",
				"description": "Lowers the target’s Defense by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Speed ↓ Flip",
				"description": "When the user’s Speed would be lowered, raises the user’s Speed by the same amount instead."
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
				"name": "Ice Hammer",
				"type": "Ice",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "194-232",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Speed by one stat rank."
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
				"name": "Ice Punch",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "46-55",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target frozen."
			},
			{
				"user": "Trainer",
				"name": "Have a Blast!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s accuracy by one stat rank. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Having a Blast Ice Impact",
				"type": "Ice",
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

export const BRENDAN_GROUDON = {
	"bg": "./v/v2.54.0/Tx_ch0019_90_yuki_mindscape00.png",
	"trainer": {
		"name": "Brendan (Champion)",
		"images": {
			"base": "./v/v2.54.0/ch0019_90_yuki_1024.png",
			"ex": "./v/v2.54.0/ch0019_90_yuki_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Physical Strike",
	"pokemonType": "Ground",
	"pokemonWeakness": "Water",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "(shiny) Groudon",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "448",
				"def": "190",
				"spa": "336",
				"spd": "176",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "472",
				"def": "200",
				"spa": "354",
				"spd": "184",
				"spe": "297"
			},
			"image": "./v/v2.54.0/pm0383_00_groudon_rare_256.png"
		},
		{
			"name": "Groudon",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "448",
				"def": "190",
				"spa": "336",
				"spd": "176",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "472",
				"def": "200",
				"spa": "354",
				"spd": "184",
				"spe": "297"
			},
			"image": "./v/v2.54.0/pm0383_51_groudonsp_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Red Power Awakening",
				"description": "Become Primal Groudon until the end of battle the first time the user enters a battle each battle."
			},
			{
				"name": "Hoenn Hype",
				"description": "Powers up the moves and sync moves of all allied sync pairs when the weather is sunny. Powers up the Ground-type moves and Ground-type sync moves of all allied sync pairs when the weather is sunny."
			},
			{
				"name": "Sure Hit | P-Moves & S-Moves Crit",
				"description": "The user’s moves never miss. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passives2": [
			{
				"name": "Desolate Land of Myths",
				"description": "Grants all of the following effects when the user’s Groudon becomes Primal Groudon: Reduces the user’s sync move countdown by three. Makes the weather EX sunny. Raises the user’s Attack by six stat ranks."
			},
			{
				"name": "Hoenn Hype",
				"description": "Powers up the moves and sync moves of all allied sync pairs when the weather is sunny. Powers up the Ground-type moves and Ground-type sync moves of all allied sync pairs when the weather is sunny."
			},
			{
				"name": "Sure Hit | P-Moves & S-Moves Crit",
				"description": "The user’s moves never miss. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passivesMaster": [
			{
				"name": "Hoenn Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Hoenn theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Ground",
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
				"name": "Champion",
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
				"user": "Pokemon2",
				"name": "Precipice Blades",
				"type": "Ground",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "189-226",
				"accuracy": "85",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Hoenn Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Hoenn Circle (Physical) to the allied field of play. Hoenn Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Hoenn theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon2",
				"name": "(b move) Red Precipice Blades",
				"type": "Ground",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "270-324",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move one&nbsp;time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Makes the target flinch. The power of this move is not lowered even if there are multiple targets. Lowers the target’s Defense by three stat ranks when the weather is EX sunny. Applies the Free Move Next effect to the user when the weather is EX sunny."
			},
			{
				"user": "Trainer",
				"name": "Blue Sky of Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of an ally by two&nbsp;ranks. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Raincloud-Scattering Lands Precipice Blade",
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

export const AS_N_ZOROARK = {
	"bg": "./v/v2.54.0/Tx_ch0089_90_n_mindscape00.png",
	"trainer": {
		"name": "Arc Suit N",
		"images": {
			"base": "./v/v2.54.0/ch0089_90_n_1024.png",
			"ex": "./v/v2.54.0/ch0089_90_n_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Tech",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Zoroark",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "351",
				"def": "190",
				"spa": "448",
				"spd": "190",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "369",
				"def": "200",
				"spa": "472",
				"spd": "200",
				"spe": "369"
			},
			"image": "./v/v2.54.0/pm0571_00_zoroark_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Bridge Between Pokémon and Humans",
				"description": "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by two. Raises the chance of lowering stat values with the additional effects of the user’s moves. When an opponent’s stat is lowered by the additional effects of the user’s moves, it is lowered by six times the stat ranks."
			},
			{
				"name": "Math Genius",
				"description": "If the target’s accuracy is lowered when the user’s attack move is successful, grants the following effect a number of times equal to the number of ranks the accuracy is lowered: Lowers one of the target’s following stats by one stat rank at random: Attack, Defense, Sp. Atk, Sp. Def, or Speed."
			},
			{
				"name": "Entry: No Stat ↑ on Field",
				"description": "Applies the No Stat Increases effect to the opponents’ field of play when the user enters a battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Dread Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Dark theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Dread Judgment",
				"description": "Raises the Dark Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Dark Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
		"passivesSuperawakening": [],
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Arc Suit",
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
				"name": "Night Daze",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "166-199",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (40%) of lowering the target’s accuracy by one stat rank."
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
				"name": "(b move) Almighty Obsidian Night Daze",
				"type": "Dark",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon with a lowered Type Rebuff on the opponent’s field of play.(lb)(lb)Never misses. The more the target’s stats are lowered, the greater the power of this attack. Lowers the target’s accuracy by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Behold My Love!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp.&nbsp;Atk by six stat ranks. Raises the user’s accuracy by one stat rank. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shape-Shifting Divine Night Daze",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Grants the following effect 10 times: Lowers one of the target’s following stats by one stat rank at random: Attack, Defense, Sp.&nbsp;Atk, Sp.&nbsp;Def, or Speed."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ETHAN_HOOH = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Ethan",
		"images": {
			"base": "./v/v2.54.0/ch0112_00_hibiki_1024.png",
			"ex": "./v/v2.54.0/ch0112_00_hibiki_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Field",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Ho-Oh",
			"formName": "",
			"stats": {
				"hp": "684",
				"atk": "336",
				"def": "174",
				"spa": "336",
				"spd": "186",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "716",
				"atk": "354",
				"def": "182",
				"spa": "354",
				"spd": "196",
				"spe": "369"
			},
			"image": "./v/v2.54.0/pm0250_00_houou_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Shimmering Rainbow Flames",
				"description": "The user’s moves never miss. When a move used by the user’s Pokémon that targets itself or an ally is successful, the target becomes all allied sync pairs. When a move used by the user’s Pokémon that targets an opponent is successful, the target becomes all opposing sync pairs. When the user’s sync move attacks an opponent, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves and sync moves affected by this passive skill are not lowered even if there are multiple targets. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "Ferocious Entry 4",
				"description": "Raises the user’s Attack and Sp. Atk by four stat ranks when it enters a battle."
			},
			{
				"name": "Use Status P-Move: Sync CD ↓ 9",
				"description": "Reduces the user’s sync move countdown by one when its Pokémon uses a status move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Fire",
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
				"name": "(b move) Rainbow Flames Sacred Fire",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "165-198",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the weather turns sunny.(lb)Deactivation Condition: When the weather condition is no longer sunny.(lb)(lb)Removes the frozen condition from the user. Lowers the target’s Defense and Sp.&nbsp;Def by one stat rank. Leaves the target burned."
			},
			{
				"user": "Trainer",
				"name": "Heart of Shining Gold!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Gradual Healing effect to all allied sync pairs. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Johto Circle (Defensive) to the allied field of play. Johto Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Johto theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Blazing Heart Fire Impact",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the weather is sunny."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ORTEGA_DACHSBUN = {
	"bg": "./v/v2.54.0/Tx_ch0329_00_ortiga_mindscape00.png",
	"trainer": {
		"name": "Ortega",
		"images": {
			"base": "./v/v2.54.0/ch0329_00_ortiga_1024.png",
			"ex": "./v/v2.54.0/ch0329_00_ortiga_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Dachsbun",
			"formName": "",
			"stats": {
				"hp": "630",
				"atk": "224",
				"def": "312",
				"spa": "224",
				"spd": "297",
				"spe": "294"
			},
			"statsLVL150": {
				"hp": "660",
				"atk": "236",
				"def": "328",
				"spa": "236",
				"spd": "313",
				"spe": "310"
			},
			"image": "./v/v2.54.0/pm0927_00_00_bowtzel_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Competitive Heir",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user is hit by an attack move."
			},
			{
				"name": "Well-Baked Strategy",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user is hit by Fire-type attack moves or Fire-type sync moves."
			},
			{
				"name": "Group Fire Guard",
				"description": "Reduces the damage all allied sync pairs take when attacked by Fire-type moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " The Heir-Mechanic’s Pride",
				"description": "Reduces the user’s sync move countdown by two the first time it uses PaldeaSolidarity each battle. Turns the field of play’s zone into a Fairy Zone the first time the user uses PaldeaSolidarity each battle. (A Fairy Zone powers up Fairy-type attacks.) Increases the Sync Move ↑ Next effect of all allied sync pairs by one rank when the user is hit by an attack move."
			}
		],
		"themes": [
			{
				"name": "Fairy",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Team Star",
				"description": ""
			},
			{
				"name": "Gadgeteer",
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
				"user": "Pokemon",
				"name": "(b move) Tasty-Sweet Charm",
				"type": "Fairy",
				"gauge": "2",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the Attack of all opposing sync pairs by two stat ranks. Applies the Critical-Hit Defense effect to the allied field of play. Applies the Physical Damage Reduction effect to the allied field of play. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank."
			},
			{
				"user": "Trainer",
				"name": "Adorable Strength!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by one stat rank. Applies the Gradual Healing effect to all allied sync pairs. Raises the Fire Type Rebuff of all allied sync pairs by one&nbsp;rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Cute and Cranky Mechanic Play Rough",
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