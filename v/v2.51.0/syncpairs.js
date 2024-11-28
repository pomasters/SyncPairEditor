export const AS_LEON_CHARIZARD = {
	"bg": "./v/v2.51.0/Tx_ch0247_90_dande_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Leon",
		"images": {
			"base": "./v/v2.51.0/ch0247_90_dande_1024.png",
			"ex": "./v/v2.51.0/ch0247_90_dande_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Charizard",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "385",
				"def": "176",
				"spa": "414",
				"spd": "176",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "405",
				"def": "184",
				"spa": "436",
				"spd": "184",
				"spe": "369"
			},
			"image": "./v/v2.51.0/pm0006_00_lizardon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Champion Who Hears the Cheers",
				"description": "When the user’s sync move or max move attacks an opponent, the target becomes all opposing sync pairs. The power of sync moves or max moves affected by this passive skill is not lowered even if there are multiple targets. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: sync move or max moves."
			},
			{
				"name": "Champion Time!",
				"description": "Reduces the user’s sync move countdown by three after using its max move. Increases the user’s Special Moves ↑ Next effect by three ranks after using its max move."
			},
			{
				"name": "The Unbeatable Leon",
				"description": "The user’s moves never miss. Protects the user against critical hits."
			}
		],
		"passives2": [],
		"passivesMaster": [
		],
		"passivesArcSuit": [
			{
				"name": "Flame Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Fire theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Flame Judgment",
				"description": "Raises the Fire Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Fire Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
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
				"name": "Champion",
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
				"name": "Inferno",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "183-219",
				"accuracy": "50",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target burned."
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
				"name": "(b move) Almighty Fire Blast",
				"type": "Fire",
				"gauge": "4",
				"uses": "1",
				"category": "Special",
				"power": "700-840",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one burned Pokémon on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any burned Pokémon on the opponent’s field of play.(lb)(lb)Leaves the target burned."
			},
			{
				"user": "Trainer",
				"name": "Passion Ablaze!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp.&nbsp;Atk by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies the Free Move Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "(divine move) Fiery Determination Divine Fire Blast",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "G-Max Wildfire",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Applies Fire Damage Field to the opponents’ field of play. (Fire Damage Field: The sync pairs will take Fire-type damage whenever they take an action.)"
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
				"name": "G-Max Wildfire",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Applies Fire Damage Field to the opponents’ field of play. (Fire Damage Field: The sync pairs will take Fire-type damage whenever they take an action.)"
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

export const CHEREN_LIEPARD = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Cheren",
		"images": {
			"base": "./v/v2.51.0/ch0014_01_cheren_1024.png",
			"ex": "./v/v2.51.0/ch0014_01_cheren_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "",
	"pokemonType": "Dark",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Liepard",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "268",
				"def": "174",
				"spa": "424",
				"spd": "174",
				"spe": "356"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "282",
				"def": "182",
				"spa": "446",
				"spd": "182",
				"spe": "374"
			},
			"image": "./v/v2.51.0/pm0510_00_lepardas_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Head Start 1",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle."
			},
			{
				"name": "Overwhelm 9",
				"description": "Lowers the target’s Attack by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Double Buffer",
				"description": "When an ally’s stat is raised by a status move used by the user’s Pokémon, it is raised by double the stat ranks."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
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
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Rival",
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
				"name": "You Look Tough!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Speed and critical-hit rate by two stat ranks. Raises the user’s accuracy by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Learning Who I Am Dark Beam",
				"type": "Dark",
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

export const ARVEN_NACLI = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Arven",
		"images": {
			"base": "./v/v2.51.0/ch0317_00_pepper_1024.png",
			"ex": "./v/v2.51.0/ch0317_00_pepper_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Rock",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Nacli",
			"formName": "",
			"stats": {
				"hp": "598",
				"atk": "132",
				"def": "229",
				"spa": "112",
				"spd": "200",
				"spe": "300"
			},
			"statsLVL150": {
				"hp": "626",
				"atk": "138",
				"def": "241",
				"spa": "118",
				"spd": "210",
				"spe": "316"
			},
			"image": "./v/v2.51.0/pm0932_00_00_kojio_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Status Immunity",
				"description": "Status conditions cannot be inflicted on the user."
			},
			{
				"name": "Ghost Guard",
				"description": "Reduces damage when the user is attacked by Ghost-type moves."
			},
			{
				"name": "Stat Share 9",
				"description": "When a status move used by the user’s Pokémon raises its stats only, raises the same stats by the same amount for all allied sync pairs instead."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"themes": [
			{
				"name": "Rock",
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
				"user": "Pokemon",
				"name": "Recover",
				"type": "Normal",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "Iron Defense",
				"type": "Steel",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Give It a Taste!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Serving a Salty Defeat Rock Impact",
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

export const MILO_ELDEGOSS = {
	"bg": "./v/v2.51.0/Tx_ch0248_00_yarrow_mindscape00.png",
	"trainer": {
		"name": "Milo",
		"images": {
			"base": "./v/v2.51.0/ch0248_00_yarrow_1024.png",
			"ex": "./v/v2.51.0/ch0248_00_yarrow_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Grass",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Eldegoss",
			"formName": "",
			"stats": {
				"hp": "586",
				"atk": "268",
				"def": "297",
				"spa": "200",
				"spd": "302",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "612",
				"atk": "282",
				"def": "313",
				"spa": "210",
				"spd": "318",
				"spe": "298"
			},
			"image": "./v/v2.51.0/pm0830_00_00_watashiraga_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Tough as Weeds",
				"description": "Reduces the user’s sync move countdown by one after your team’s sync pair uses their max move. Increases the Physical Moves ↑ Next effect of all allied sync pairs by two ranks after your team’s sync pair uses their max move."
			},
			{
				"name": "Opp Speed ↓: Team P-Moves, S-Moves, Max Moves ↑ 2",
				"description": "Powers up the moves, sync moves, and max moves of all allied sync pairs when the target’s Speed is lowered."
			},
			{
				"name": "Take Hit: Opp Speed ↓2 9",
				"description": "Lowers the Speed of an opponent that attacked the user by two stat ranks when the user is hit by an attack move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": " The Fighting Farmer",
				"description": "Reduces the user’s sync move countdown by one after using its max move. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank after using the user’s max move. Turns the field of play’s terrain into Grassy Terrain the first time the user enters a battle each battle."
			}
		],
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
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Nature Lover",
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
				"name": "(b move) Abundant Cotton Spore",
				"type": "Grass",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the Speed of all opposing sync pairs by two stat ranks. Applies the Supereffective&nbsp;↑ Next effect to all allied sync pairs. Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by two ranks."
			},
			{
				"user": "Trainer",
				"name": "You’ll Be Uprooted!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by four stat ranks. Raises the accuracy and critical-hit rate of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Fighting Farmer Grass Impact",
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

export const HOP_RILLABOOM = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Hop",
		"images": {
			"base": "./v/v2.51.0/ch0244_00_hop_1024.png",
			"ex": "./v/v2.51.0/ch0244_00_hop_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Physical Strike",
	"pokemonType": "Grass",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Rillaboom",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "336",
				"def": "185",
				"spa": "200",
				"spd": "174",
				"spe": "294"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "354",
				"def": "195",
				"spa": "210",
				"spd": "182",
				"spe": "310"
			},
			"image": "./v/v2.51.0/pm0812_00_00_gorirander_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Gentle Combo",
				"description": "Raises the user’s Attack by six stat ranks when it enters a battle. Raises the user’s critical-hit rate by three stat ranks when it enters a battle."
			},
			{
				"name": "User Sets Grassy Terrain: Galar C (Phys) on Field",
				"description": "Applies Galar Circle (Physical) to the allied field of play when the user turns the field of play’s terrain into Grassy Terrain."
			},
			{
				"name": "Grassy Terrain Hit: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while the terrain is Grassy Terrain."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
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
				"name": "Drum Beating",
				"type": "Grass",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by one stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Grassy Terrain",
				"type": "Grass",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Grassy Terrain."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Scattershot Drum Beating",
				"type": "Grass",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a max move one&nbsp;time.(lb)Deactivation Condition: When this move is used.(lb)(lb)The power of this move is not lowered even if there are multiple targets. Lowers the target’s Speed by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Show What We Know!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an allied sync pair by one. Applies the Supereffective&nbsp;↑ Next effect to an ally. Increases the Physical Moves&nbsp;↑ Next effect of an ally by three ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Valuing Team Harmony Grass Impact",
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
			}
		]
	}
}

export const MARNIE_CINDERACE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Marnie",
		"images": {
			"base": "./v/v2.51.0/ch0245_00_mary_1024.png",
			"ex": "./v/v2.51.0/ch0245_00_mary_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Fire",
	"pokemonWeakness": "Water",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Cinderace",
			"formName": "",
			"stats": {
				"hp": "640",
				"atk": "336",
				"def": "176",
				"spa": "292",
				"spd": "176",
				"spe": "314"
			},
			"statsLVL150": {
				"hp": "670",
				"atk": "354",
				"def": "184",
				"spa": "308",
				"spd": "184",
				"spe": "330"
			},
			"image": "./v/v2.51.0/pm0815_00_00_aceburn_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Fiery Combo",
				"description": "Raises the user’s Attack by four stat ranks when it enters a battle. Raises the user’s accuracy by two stat ranks when it enters a battle. Raises the user’s critical-hit rate by three stat ranks when it enters a battle."
			},
			{
				"name": "User Sets Sunny W: Galar C (Def) on Field",
				"description": "Applies Galar Circle (Defensive) to the allied field of play when the user turns the weather sunny."
			},
			{
				"name": "Sunny Hit: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while the weather is sunny."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
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
				"name": "Pyro Ball",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "172-206",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned."
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
				"name": "(b move) Explosive Pyro Ball",
				"type": "Fire",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "240-288",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned. The power and chance of applying additional effects of this move are not lowered even if there are multiple targets. Applies the Supereffective&nbsp;↑ Next effect to all allied sync pairs. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank."
			},
			{
				"user": "Trainer",
				"name": "Charge On Ahead!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an allied sync pair by one. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of an ally by two&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Stoked by Cheers Fire Impact",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Flare",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Makes the weather sunny."
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
				"name": "Max Flare",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Makes the weather sunny."
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

export const BEDE_INTELEON = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Bede",
		"images": {
			"base": "./v/v2.51.0/ch0246_00_beet_1024.png",
			"ex": "./v/v2.51.0/ch0246_00_beet_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Tech",
	"pokemonType": "Water",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Inteleon",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "292",
				"def": "174",
				"spa": "390",
				"spd": "174",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "308",
				"def": "182",
				"spa": "410",
				"spd": "182",
				"spe": "354"
			},
			"image": "./v/v2.51.0/pm0818_00_00_intereon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Gentleman’s Combo",
				"description": "Raises the user’s Sp. Atk by six stat ranks when it enters a battle. Raises the user’s critical-hit rate by three stat ranks when it enters a battle."
			},
			{
				"name": "User Sets Rain: Galar C (Spec) on Field",
				"description": "Applies Galar Circle (Special) to the allied field of play when the user makes the weather rainy."
			},
			{
				"name": "Rainy Hit: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while the weather is rainy."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
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
				"name": "Snipe Shot",
				"type": "Water",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "128-153",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
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
				"name": "(b move) High-Pressure Snipe Shot",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move one&nbsp;time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Critical hits land more easily. Lowers the target’s Sp.&nbsp;Def by three stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Fine, Then!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an allied sync pair by one. Applies the Supereffective&nbsp;↑ Next effect to an ally. Increases the Special Moves&nbsp;↑ Next effect of an ally by three ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Sharpshooting Judgment Water Beam",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Geyser",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Makes the weather rainy."
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
				"name": "Max Geyser",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Makes the weather rainy."
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

export const LILLIE_PRIMARINA = {
	"bg": "./v/v2.51.0/Tx_ch0118_42_lillie_mindscape00.png",
	"trainer": {
		"name": "Lillie (Holiday 2024)",
		"images": {
			"base": "./v/v2.51.0/ch0118_42_lillie_1024.png",
			"ex": "./v/v2.51.0/ch0118_42_lillie_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Support",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "(shiny) Primarina",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "244",
				"def": "176",
				"spa": "424",
				"spd": "190",
				"spe": "361"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "256",
				"def": "184",
				"spa": "446",
				"spd": "200",
				"spe": "379"
			},
			"image": "./v/v2.51.0/pm0849_00_ashika3_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit the Gas 9",
				"description": "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves."
			},
			{
				"name": "Pep Rally 2",
				"description": "Raises the Speed of all allied sync pairs by two stat ranks when the user’s move is successful."
			},
			{
				"name": "Ally Speed ↑: Moves ↑ 2",
				"description": "Powers up an ally’s moves when its Speed is raised."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
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
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Fancy Lady",
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
				"name": "Moonblast",
				"type": "Fairy",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "186-222",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s Sp. Atk by one stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Sing",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "45",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Starry Night Disarming Voice",
				"type": "Fairy",
				"gauge": "2",
				"uses": "3",
				"category": "Special",
				"power": "285-342",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Reduces the user’s sync move countdown by one. Applies the Supereffective&nbsp;↑ Next effect to all allied sync pairs. Applies the Free Move Next effect to all allied sync pairs. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Let’s Make Music!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Sp.&nbsp;Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Beautiful Dancing Songstress Fairy Beam",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Speed is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BUGSY_KRICKETUNE = {
	"bg": "./v/v2.51.0/Tx_ch0045_40_tsukushi_mindscape00.png",
	"trainer": {
		"name": "Bugsy (Holiday 2024)",
		"images": {
			"base": "./v/v2.51.0/ch0045_40_tsukushi_1024.png",
			"ex": "./v/v2.51.0/ch0045_40_tsukushi_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Bug",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Kricketune",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "283",
				"def": "300",
				"spa": "224",
				"spd": "300",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "297",
				"def": "316",
				"spa": "236",
				"spd": "316",
				"spe": "297"
			},
			"image": "./v/v2.51.0/pm0402_00_korotock_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "User Sets Circle: Team Phys & Spec Boost ↑1 9",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user applies a circle to the allied field of play."
			},
			{
				"name": "User Sets Circle: Team Defense & Sp. Def ↑2 9",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by two stat ranks when the user applies a circle to the allied field of play."
			},
			{
				"name": "Focus Group 9",
				"description": "Raises the critical-hit rate of all allied sync pairs by one stat rank when the user’s Pokémon uses a move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"themes": [
			{
				"name": "Bug",
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
				"user": "Pokemon",
				"name": "(b move) Bugs’ Singing Leech Life",
				"type": "Bug",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "120-144",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When a circle is applied to the allied field of play.(lb)Deactivation Condition: When there are no longer any circles applied to the allied field of play.(lb)(lb)Lowers one of the target’s following stats by two stat ranks at random: Attack, Defense, Sp.&nbsp;Atk, Sp.&nbsp;Def, Speed, accuracy, or evasiveness. Raises the user’s stat by the same amount. The more damage dealt to the target, the more it restores the user’s HP. Restores the HP of all allied sync pairs by approximately 10% of their maximum HP. Turns the field of play’s zone into a Bug Zone the first time this attack move is successful each battle. (A Bug Zone powers up Bug-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "Bugs Are Tough!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP. Removes all status conditions and the flinching, confused, and trapped conditions from an ally. Applies the Gradual Healing effect to an ally. Applies the Enduring effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Conduct a Melody of Feelings Bug Impact",
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