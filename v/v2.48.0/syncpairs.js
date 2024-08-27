export const TRAINER_RAIKOU = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Trainer (Scottie/Bettie)",
		"images": {
			"base": "./images/trainer_scottie.png",
			"ex": "./images/trainer_bettie.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Raikou",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "176",
				"def": "249",
				"spa": "176",
				"spd": "258",
				"spe": "297"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "184",
				"def": "261",
				"spa": "184",
				"spd": "272",
				"spe": "313"
			},
			"image": "./v/v2.48.0/pm0243_00_raikou_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Take Hit: Opp Attack ↓ & Sp. Atk ↓ 9",
				"description": "Lowers the Attack and Sp. Atk of an opponent that attacked the user by one stat rank when the user is hit by an attack move."
			},
			{
				"name": "Super Interference 2",
				"description": "Raises the chance of inflicting status conditions—as well as inflicting the flinching, confused, or trapped condition—with the additional effects of the user’s moves."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Electric Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Electric theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"themes": [
			{
				"name": "Electric",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Pasio",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Thunder Shock",
				"type": "Electric",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "17-20",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target paralyzed."
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
				"name": "Thunder Fang",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "47-56",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of making the target flinch. Has a chance (10%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "Lightning Speed!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by three stat ranks. Raises the critical-hit rate of all allied sync pairs by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Rumbling Thunder Electric Impact",
				"type": "Electric",
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

export const CHERYL_WAILORD = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Cheryl",
		"images": {
			"base": "./v/v2.48.0/ch0023_00_momi_1024.png",
			"ex": "./v/v2.48.0/ch0023_00_momi_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Wailord",
			"formName": "",
			"stats": {
				"hp": "728",
				"atk": "132",
				"def": "200",
				"spa": "132",
				"spd": "200",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "762",
				"atk": "138",
				"def": "210",
				"spa": "138",
				"spd": "210",
				"spe": "256"
			},
			"image": "./v/v2.48.0/pm0321_00_whaloh_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hype Up 9",
				"description": "Raises the Sp. Atk of all allied sync pairs by one stat rank when the user’s Pokémon uses a move."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Flameproof",
				"description": "Prevents the user from getting burned."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Water",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Grown Woman",
				"description": ""
			},
			{
				"name": "Battle Partner",
				"description": ""
			},
			{
				"name": "Battleground Foe",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Water Gun",
				"type": "Water",
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
				"name": "Whirlpool",
				"type": "Water",
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
				"name": "Protect Them!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Itching for a Battle Water Beam",
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

export const LUSAMINE_LILLIGANT = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Lusamine",
		"images": {
			"base": "./v/v2.48.0/ch0120_00_lusamine_1024.png",
			"ex": "./v/v2.48.0/ch0120_00_lusamine_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Special Strike",
	"exRole": "",
	"pokemonType": "Grass",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Lilligant",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "263",
				"def": "116",
				"spa": "346",
				"spd": "116",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "277",
				"def": "122",
				"spa": "364",
				"spd": "122",
				"spe": "282"
			},
			"image": "./v/v2.48.0/pm0549_00_dredear_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Charging Sun 5",
				"description": "Powers up the user’s moves when the weather is sunny."
			},
			{
				"name": "Fuzzy Strike 5",
				"description": "Powers up the user’s sync move when the target is confused."
			},
			{
				"name": "Dauntless",
				"description": "Sp. Atk cannot be lowered."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Villain",
				"description": ""
			},
			{
				"name": "Grown Woman",
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
				"name": "Teeter Dance",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Leaves the target confused."
			},
			{
				"user": "Trainer",
				"name": "Strength to Protect!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp.&nbsp;Atk by four stat ranks. Raises the user’s accuracy by one stat rank. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Even More Beautiful Grass Beam",
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

export const ROSE_PERRSERKER = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Rose",
		"images": {
			"base": "./v/v2.48.0/ch0262_00_rose_1024.png",
			"ex": "./v/v2.48.0/ch0262_00_rose_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Steel",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Perrserker",
			"formName": "",
			"stats": {
				"hp": "608",
				"atk": "414",
				"def": "164",
				"spa": "224",
				"spd": "158",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "636",
				"atk": "436",
				"def": "172",
				"spa": "236",
				"spd": "166",
				"spe": "256"
			},
			"image": "./v/v2.48.0/pm0863_00_31_nyaiking_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Infliction Freebie 9",
				"description": "Applies the Free Move Next effect to the user when its Pokémon uses a status move."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			},
			{
				"name": "Sand Shelter",
				"description": "Protects the user from damage from a sandstorm."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Villain",
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
				"description": "Lowers the target’s Defense by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "For a Better Future!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "For a Prosperous Galar Steel Impact",
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

export const WILL_SLOWBRO = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Will",
		"images": {
			"base": "./v/v2.48.0/ch0047_00_itsuki_1024.png",
			"ex": "./v/v2.48.0/ch0047_00_itsuki_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Slowbro",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "360",
				"def": "161",
				"spa": "404",
				"spd": "157",
				"spe": "236"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "380",
				"def": "169",
				"spa": "426",
				"spd": "165",
				"spe": "248"
			},
			"image": "./v/v2.48.0/pm0080_00_yadoran_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Aggravation 9",
				"description": "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
			},
			{
				"name": "On a Roll 9",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves."
			},
			{
				"name": "Confusion Synergy 5",
				"description": "Powers up the user’s moves when the target is confused."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Psychic",
				"description": ""
			},
			{
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Masked",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Confusion",
				"type": "Psychic",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "18-21",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target confused."
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
				"name": "Losing Is Not an Option!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense by two stat ranks. Raises the user’s Sp.&nbsp;Atk by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Stand Above All Psychic Beam",
				"type": "Psychic",
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

export const MORGAN_VIRIZION = {
	"bg": "./v/v2.48.0/Tx_ch0207_00_lematin_mindscape00.ktx.png",
	"trainer": {
		"name": "Morgan",
		"images": {
			"base": "./v/v2.48.0/ch0207_00_lematin_1024.png",
			"ex": "./v/v2.48.0/ch0207_00_lematin_01_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Grass",
	"pokemonWeakness": "Flying",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Virizion",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "200",
				"def": "234",
				"spa": "200",
				"spd": "264",
				"spe": "317"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "210",
				"def": "246",
				"spa": "210",
				"spd": "278",
				"spe": "333"
			},
			"image": "./v/v2.48.0/pm0640_00_virizion_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Focus Group 9",
				"description": "Raises the critical-hit rate of all allied sync pairs by one stat rank when the user’s Pokémon uses a move."
			},
			{
				"name": "Recharging Strike 3",
				"description": "Has a chance (40%) of charging the user’s move gauge by one when its attack move hits. If the move has the multistrike effect tag, has a chance (40%) of charging the user’s move gauge by one for each hit."
			},
			{
				"name": "S-Move: Team HP Recovery (M) 1",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP after using the user’s sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Grass Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Grass theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
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
				"name": "Battle Facility Foe",
				"description": ""
			},
			{
				"name": "Battle Partner",
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
				"name": "Heheheh...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp.&nbsp;Atk of all allied sync pairs by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Elegant Eldest Sister Grass Impact",
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
		"movesMAX": []
	}
}


export const LILLIE_SOLGALEO = {
	"bg": "./v/v2.48.0/Tx_ch0118_51_lillie_mindscape00.ktx.png",
	"trainer": {
		"name": "Lillie (Anniversary 2024)",
		"images": {
			"base": "./v/v2.48.0/ch0118_51_lillie_1024.png",
			"ex": "./v/v2.48.0/ch0118_51_lillie_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Field",
	"pokemonType": "Steel",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Solgaleo",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "468",
				"def": "176",
				"spa": "356",
				"spd": "176",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "492",
				"def": "184",
				"spa": "374",
				"spd": "184",
				"spe": "354"
			},
			"image": "./v/v2.48.0/pm0873_00_sun_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Satisfied Snicker 9",
				"description": "Lowers the target’s Sp. Atk by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Trip Up 9",
				"description": "Lowers the target’s Speed by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Impervious",
				"description": "The user’s stats cannot be lowered."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Pigtails",
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
				"name": "Sunsteel Strike",
				"type": "Steel",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
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
				"name": "(b move) All-Out Sunsteel Strike",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Pokémon uses a move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. The power of this move is not lowered even if there are multiple targets. Turns the field of play’s zone into a Steel Zone the first time this attack move is successful each battle. (A Steel Zone powers up Steel-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "Radiance of the Sun!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Wholesome Heart Searing Sunraze Smash",
				"type": "Steel",
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

export const AS_CYNTHIA_GARCHOMP = {
	"bg": "./v/v2.48.0/Tx_ch0091_90_shirona_mindscape00.ktx.png",
	"trainer": {
		"name": "Arc Suit Cynthia",
		"images": {
			"base": "./v/v2.48.0/ch0091_90_shirona_1024.png",
			"ex": "./v/v2.48.0/ch0091_90_shirona_01_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Physical Strike",
	"pokemonType": "Ground",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Garchomp",
			"formName": "",
			"stats": {
				"hp": "699",
				"atk": "390",
				"def": "185",
				"spa": "268",
				"spd": "185",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "731",
				"atk": "410",
				"def": "195",
				"spa": "282",
				"spd": "195",
				"spe": "354"
			},
			"image": "./v/v2.48.0/pm0445_01_gaburias_256.png"
		},
		{
			"name": "Mega Garchomp",
			"formName": "",
			"stats": {
				"hp": "699",
				"atk": "429",
				"def": "203",
				"spa": "294",
				"spd": "203",
				"spe": "369"
			},
			"statsLVL150": {
				"hp": "731",
				"atk": "495",
				"def": "258",
				"spa": "354",
				"spd": "258",
				"spe": "433"
			},
			"image": "./v/v2.48.0/pm0445_51_megagaburias_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Myth Archeologist",
				"description": "Turns the field of play’s zone into a Ground Zone when the user causes a sandstorm. (A Ground Zone powers up Ground-type attacks.) Extends the duration of a sandstorm when a sandstorm is caused while the user is on the field. Extends the duration of the Ground Zone when the zone turns into a Ground Zone while the user is on the field."
			},
			{
				"name": "Mutual Trust",
				"description": "The user’s moves never miss. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Protects the user from damage from a sandstorm."
			},
			{
				"name": "Unbending Pride",
				"description": "Reduces the sync move countdown by one the first time the user’s Pokémon uses a status move each battle. Raises the user’s Attack by six stat ranks the first time its Pokémon uses a status move each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Ground Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Ground theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Ground Judgment",
				"description": "Raises the Ground Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Ground Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
		"themes": [
			{
				"name": "Ground",
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
				"name": "Sand Tomb",
				"type": "Ground",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "38-45",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target trapped."
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
				"user": "Pokemon",
				"name": "(b move) Almighty Rending Earthquake",
				"type": "Ground",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When a sandstorm is caused.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Defense by one stat rank. Increases the user’s Sync Move&nbsp;↑ Next effect by one&nbsp;rank when its attack hits a target that is trapped."
			},
			{
				"user": "Trainer",
				"name": "Greatest Battle!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Gradual Healing effect to the user. Applies the Supereffective ↑ Next effect to the user. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "(divine move) Cataclysmic Divine Earthquake",
				"type": "Ground",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega&nbsp;Garchomp until the end of battle. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const AS_STEVEN_METAGROSS = {
	"bg": "./v/v2.48.0/Tx_ch0090_90_daigo_mindscape00.ktx.png",
	"trainer": {
		"name": "Arc Suit Steven",
		"images": {
			"base": "./v/v2.48.0/ch0090_90_daigo_1024.png",
			"ex": "./v/v2.48.0/ch0090_90_daigo_01_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Support",
	"pokemonType": "Steel",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Metagross",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "346",
				"def": "319",
				"spa": "224",
				"spd": "319",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "364",
				"def": "335",
				"spa": "236",
				"spd": "335",
				"spe": "302"
			},
			"image": "./v/v2.48.0/pm0376_00_metagross_256.png"
		},
		{
			"name": "Mega Metagross",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "380",
				"def": "350",
				"spa": "246",
				"spd": "350",
				"spe": "316"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "400",
				"def": "368",
				"spa": "259",
				"spd": "368",
				"spe": "332"
			},
			"image": "./v/v2.48.0/pm0376_51_megametagross_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "What I Learned from My Adventure",
				"description": "Applies the Enduring effect to all allied sync pairs the first time the user enters a battle each battle. Applies the Free Move Next effect to the user when its attack move is successful. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when the user’s attack move is successful."
			},
			{
				"name": "Wandering Stone Enthusiast",
				"description": "Protects the user against critical hits. Protects the user from damage from a sandstorm. When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name": "Triage Tank 9",
				"description": "Restores the user’s HP when it is hit by an attack move."
			}
		],
		"passives2": [
			{
				"name": "What I Learned from My Adventure",
				"description": "Applies the Enduring effect to all allied sync pairs the first time the user enters a battle each battle. Applies the Free Move Next effect to the user when its attack move is successful. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when the user’s attack move is successful."
			},
			{
				"name": "Wandering Stone Enthusiast",
				"description": "Protects the user against critical hits. Protects the user from damage from a sandstorm. When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name": "Team Triage Tank 9",
				"description": "Restores the HP of all allied sync pairs when the user is hit by an attack move."
			}
		],
		"passivesMaster": [
		],
		"passivesArcSuit": [
			{
				"name": "Steel Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Steel theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Steel Judgment",
				"description": "Raises the Steel Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Steel Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
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
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
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
				"name": "(b move) Almighty Flash Bullet Punch",
				"type": "Steel",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "120-144",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the target’s Defense and Sp.&nbsp;Def by two stat ranks. Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "We’re the Strongest!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by six stat ranks. Uses a maximum of three slots of the user’s move gauge. The more amount used, the more it raises the critical-hit rate of all allied sync pairs (can be raised by zero to three stat ranks maximum). Increases the Sync Move&nbsp;↑ Next effect of all allied sync pairs by three&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "(divine move) Polished Steel Divine Meteor Mash",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega&nbsp;Metagross until the end of battle. Restores the HP of all allied sync pairs by approximately 20% of their maximum HP."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const AS_LANCE_DRAGONITE = {
	"bg": "./v/v2.48.0/Tx_ch0111_90_wataru_mindscape00.ktx.png",
	"trainer": {
		"name": "Arc Suit Lance",
		"images": {
			"base": "./v/v2.48.0/ch0111_90_wataru_1024.png",
			"ex": "./v/v2.48.0/ch0111_90_wataru_01_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Tech",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Dragonite",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "336",
				"def": "198",
				"spa": "336",
				"spd": "198",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "354",
				"def": "208",
				"spa": "354",
				"spd": "208",
				"spe": "328"
			},
			"image": "./v/v2.48.0/pm0149_00_kairyu_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Your Challenge Ends with Me!",
				"description": "Lowers the target’s Defense by six stat ranks when the user’s physical attack move against it is successful. Lowers the target’s Sp. Def by six stat ranks when the user’s special attack move against it is successful."
			},
			{
				"name": "The Caped Dragon Master",
				"description": "Normal-type moves become Dragon-type moves. Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by two. The user’s moves never miss."
			},
			{
				"name": "We’ve Been through Enough",
				"description": "Reduces damage when the user is hit by an attack move or sync move when its HP is full. Restores the user’s HP when its attack move is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Dragon Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Dragon theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Dragon Judgment",
				"description": "Raises the Dragon Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Dragon Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
		"themes": [
			{
				"name": "Dragon",
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
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "223-267",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "Giga Impact",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "223-267",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Almighty Roar Hyper Beam",
				"type": "Dragon",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When an ally’s Pokémon uses any moves three&nbsp;times.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. The more the opponent’s Defense or Sp.&nbsp;Def are lowered, the greater the power of this attack."
			},
			{
				"user": "Trainer",
				"name": "Let’s Get Serious!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies the Gradual Healing effect to the user. Applies the Enduring effect to the user. The user takes damage equal to 20% of its remaining HP."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "(divine move) Heroic Ascension Divine Outrage",
				"type": "Dragon",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
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

export const LANCE_KINGDRA = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Lance",
		"images": {
			"base": "./v/v2.48.0/ch0111_00_wataru_1024.png",
			"ex": "./v/v2.48.0/ch0111_00_wataru_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Kingdra",
			"formName": "",
			"stats": {
				"hp": "606",
				"atk": "224",
				"def": "210",
				"spa": "224",
				"spd": "210",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "634",
				"atk": "236",
				"def": "220",
				"spa": "236",
				"spd": "220",
				"spe": "328"
			},
			"image": "./v/v2.48.0/pm0230_00_kingdra_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Dragon Shift",
				"description": "Normal-type moves become Dragon-type moves."
			},
			{
				"name": "Freevenge 9",
				"description": "Applies the Free Move Next effect to the user when it is hit by an attack move."
			},
			{
				"name": "Midpoint Mend 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time its HP drops to half or below each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Dragon",
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
				"name": "Dragon Breath",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target paralyzed."
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
				"name": "Hyper Beam",
				"type": "Dragon",
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
				"name": "Ready to Lose?",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp.&nbsp;Atk and critical-hit rate of all allied sync pairs by two stat ranks. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. The user takes damage equal to 30% of its remaining HP."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Legendary Dragon Beam",
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
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LEAF_BLASTOISE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Leaf",
		"images": {
			"base": "./v/v2.48.0/ch0017_00_leaf_1024.png",
			"ex": "./v/v2.48.0/ch0017_00_leaf_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Special Strike",
	"pokemonType": "Water",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Blastoise",
			"formName": "",
			"stats": {
				"hp": "684",
				"atk": "336",
				"def": "187",
				"spa": "336",
				"spd": "187",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "716",
				"atk": "354",
				"def": "197",
				"spa": "354",
				"spd": "197",
				"spe": "298"
			},
			"image": "./v/v2.48.0/pm0009_00_kamex_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Kanto Journey Legacy",
				"description": "The user’s moves never miss. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves, sync move, or max moves."
			},
			{
				"name": "Entry: Sp. Atk ↑ & Sp. Def ↑ 4",
				"description": "Raises the user’s Sp. Atk and Sp. Def by four stat ranks when it enters a battle."
			},
			{
				"name": "Mind Games 9",
				"description": "Lowers the target’s Sp. Def by one stat rank when the user’s attack move against it is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Water",
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
				"name": "Water Pulse",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "47-56",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of leaving the target confused."
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
				"name": "Can’t Get Enough!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises an ally’s Defense by four stat ranks. Applies the Enduring effect to an ally."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Full Blast Hydro Cannon",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "180-216",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the weather turns rainy.(lb)Deactivation Condition: When the weather condition is no longer rainy.(lb)(lb)Lowers the target’s Attack and Sp. Atk by one stat rank. The power of this move is not lowered even if there are multiple targets."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Kaboom Kaboom Water Beam",
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
			}
		]
	}
}


export const SILVER_CROBAT = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Silver",
		"images": {
			"base": "./v/v2.48.0/ch0133_00_shilver_1024.png",
			"ex": "./v/v2.48.0/ch0133_00_shilver_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "",
	"pokemonType": "Flying",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Crobat",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "375",
				"def": "176",
				"spa": "375",
				"spd": "176",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "395",
				"def": "184",
				"spa": "395",
				"spd": "184",
				"spe": "369"
			},
			"image": "./v/v2.48.0/pm0169_00_crobat_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Landing Pad",
				"description": "Turns the field of play’s zone into a Flying Zone the first time the user enters a battle each battle. (A Flying Zone powers up Flying-type attacks.)"
			},
			{
				"name": "Trip Up 9",
				"description": "Lowers the target’s Speed by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Mind Games 9",
				"description": "Lowers the target’s Sp. Def by one stat rank when the user’s attack move against it is successful."
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
				"name": "Rival",
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
				"name": "Hurricane",
				"type": "Flying",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "126-151",
				"accuracy": "70",
				"target": "An opponent",
				"effect": "-",
				"description": "Never misses when the weather is rainy. Has a chance (30%) of leaving the target confused."
			},
			{
				"user": "Trainer",
				"name": "Take You Down!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Speed, accuracy, evasiveness, and critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Believe in You More Flying Beam",
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

export const MALVA_TALONFLAME = {
	"bg": "./v/v2.48.0/Tx_ch0177_00_pachira_mindscape00.ktx.png",
	"trainer": {
		"name": "Malva",
		"images": {
			"base": "./v/v2.48.0/ch0177_00_pachira_1024.png",
			"ex": "./v/v2.48.0/ch0177_00_pachira_01_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Talonflame",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "414",
				"def": "176",
				"spa": "370",
				"spd": "174",
				"spe": "409"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "436",
				"def": "184",
				"spa": "390",
				"spd": "182",
				"spe": "431"
			},
			"image": "./v/v2.48.0/pm0755_00_robin3_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Trip Twice 9",
				"description": "Lowers the target’s Speed by two stat ranks when the user’s attack move against it is successful."
			},
			{
				"name": "“Quick Move”: Sync CD ↓ 9",
				"description": "Reduces the user’s sync move countdown by one when it uses a move that has the quick move effect tag."
			},
			{
				"name": "Scorching Touch 4",
				"description": "Has a chance (50%) of leaving the target burned when the user’s attack move against it is successful."
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
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Sunglasses",
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
				"name": "Flame Charge",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "30-36",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the user’s Speed by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Speed All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Quick Attack",
				"type": "Normal",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "94-112",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "I’m Burning Up!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Attack by four stat ranks. Raises the critical-hit rate of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Fiery Reporter Fire Impact",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
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

export const CHUCK_POLIWRATH = {
	"bg": "./v/v2.48.0/Tx_ch0171_00_shijima_mindscape00.ktx.png",
	"trainer": {
		"name": "Chuck",
		"images": {
			"base": "./v/v2.48.0/ch0171_00_shijima_1024.png",
			"ex": "./v/v2.48.0/ch0171_00_shijima_01_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Poliwrath",
			"formName": "",
			"stats": {
				"hp": "684",
				"atk": "390",
				"def": "146",
				"spa": "326",
				"spd": "144",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "716",
				"atk": "410",
				"def": "154",
				"spa": "344",
				"spd": "152",
				"spe": "297"
			},
			"image": "./v/v2.48.0/pm0062_00_nyorobon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "P-Move: Physical Boost ↑1 4",
				"description": "Has a chance (50%) of increasing the user’s Physical Moves ↑ Next effect by one rank when its Pokémon uses a move."
			},
			{
				"name": "Critical Eye 1",
				"description": "Raises the user’s critical-hit rate by one stat rank when its move is successful."
			},
			{
				"name": "Water Guard",
				"description": "Reduces damage when the user is attacked by Water-type moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Fighting",
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
				"name": "Rock Smash",
				"type": "Fighting",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "46-55",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (50%) of lowering the target’s Defense by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Oooarrgh!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Raises the user’s accuracy by six stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Roaring Fists Fighting Impact",
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

export const TREVOR_FLORGES = {
	"bg": "./v/v2.48.0/Tx_ch0181_00_trova_mindscape00.ktx.png",
	"trainer": {
		"name": "Trevor",
		"images": {
			"base": "./v/v2.48.0/ch0181_00_trova_1024.png",
			"ex": "./v/v2.48.0/ch0181_00_trova_01_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Florges",
			"formName": "Orange Flower",
			"stats": {
				"hp": "678",
				"atk": "132",
				"def": "275",
				"spa": "200",
				"spd": "293",
				"spe": "282"
			},
			"statsLVL150": {
				"hp": "710",
				"atk": "138",
				"def": "289",
				"spa": "210",
				"spd": "307",
				"spe": "296"
			},
			"image": "./v/v2.48.0/pm0715_13_flower3_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Satisfied Snicker 9",
				"description": "Lowers the target’s Sp. Atk by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Healing Hand 4",
				"description": "Has a chance (50%) of removing all status conditions from all allied sync pairs when the user’s Pokémon uses a move."
			},
			{
				"name": "Team Fist Bump 3",
				"description": "Has a chance (40%) of restoring the HP of all allied sync pairs when the user’s attack move is successful."
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
				"name": "Vine Whip",
				"type": "Grass",
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
				"name": "Synthesis",
				"type": "Grass",
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
				"name": "Disarming Voice",
				"type": "Fairy",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "45-54",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "Keep It Low-Key!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Special Damage Reduction effect to the allied field of play. Raises the Sp.&nbsp;Atk and Sp.&nbsp;Def of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Perfect Test Scores Fairy Beam",
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


export const LEAR_GHOLDENGO = {
	"bg": "./v/v2.48.0/Tx_ch0066_10_boss_mindscape00.ktx.png",
	"trainer": {
		"name": "Sygna Suit Lear",
		"images": {
			"base": "./v/v2.48.0/ch0066_10_boss_1024.png",
			"ex": "./v/v2.48.0/ch0066_10_boss_01_expose_1024.ktx.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Special Strike",
	"pokemonType": "Steel",
	"pokemonWeakness": "Fire",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Gholdengo",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "336",
				"def": "185",
				"spa": "448",
				"spd": "185",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "354",
				"def": "195",
				"spa": "472",
				"spd": "195",
				"spe": "369"
			},
			"image": "./v/v2.48.0/pm1000_00_00_surfugo_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Golden Authority",
				"description": "The user’s stats cannot be lowered. Prevents the user from being inflicted with status conditions, flinching, becoming confused, or becoming trapped."
			},
			{
				"name": "Royal Fortune",
				"description": "Grants all of the following effects when Pasio Circle (Defensive) applies to the allied field of play: Powers up the moves and sync moves of all allied sync pairs. Stats cannot be lowered for all allied sync pairs. Prevents all allied sync pairs from being inflicted with status conditions, flinching, becoming confused, or becoming trapped."
			},
			{
				"name": "T-Move: Sync CD ↓ 9",
				"description": "Reduces the user’s sync move countdown by one when its Trainer uses a move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Pasio Flagbearer",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Pasio theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],
		"themes": [
			{
				"name": "Steel",
				"description": ""
			},
			{
				"name": "Pasio",
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
				"name": "Make It Rain",
				"type": "Steel",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "176-211",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the user’s Sp.&nbsp;Atk by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Pasio Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Pasio Circle (Defensive) to the allied field of play. Pasio Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Pasio theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Precious Make It Rain",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move one&nbsp;time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Lowers the target’s Sp.&nbsp;Def by three stat ranks. Applies the Free Move Next effect to all allied sync pairs. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Behold My Kingly Shine!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Sp.&nbsp;Atk by six stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "King’s Golden Authority Make It Rain",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when a circle applies to the allied field of play."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const RACHEL_GIMMIGHOUL = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Rachel",
		"images": {
			"base": "./v/v2.48.0/ch0067_00_leader1_1024.png",
			"ex": "./v/v2.48.0/ch0067_00_leader1_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Gimmighoul",
			"formName": "Roaming Form",
			"stats": {
				"hp": "645",
				"atk": "132",
				"def": "283",
				"spa": "200",
				"spd": "283",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "138",
				"def": "297",
				"spa": "210",
				"spd": "297",
				"spe": "328"
			},
			"image": "./v/v2.48.0/pm0999_12_00_collecurei_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Power Behind the Future King",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank the first time the user enters a battle each battle."
			},
			{
				"name": "Group Morale Boost 9",
				"description": "Raises the Sp. Atk of all allied sync pairs by one stat rank when the user’s Trainer uses a move."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Ghost",
				"description": ""
			},
			{
				"name": "Pasio",
				"description": ""
			},
			{
				"name": "Sunglasses",
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
				"name": "Astonish",
				"type": "Ghost",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "12-14",
				"accuracy": "100",
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
				"user": "Trainer",
				"name": "Exploooore!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by one stat rank. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Roaming in the Dark Ghost Beam",
				"type": "Ghost",
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

export const SAWYER_GIMMIGHOUL = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Sawyer",
		"images": {
			"base": "./v/v2.48.0/ch0068_00_leader2_1024.png",
			"ex": "./v/v2.48.0/ch0068_00_leader2_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Gimmighoul",
			"formName": "Chest Form",
			"stats": {
				"hp": "645",
				"atk": "132",
				"def": "297",
				"spa": "200",
				"spd": "297",
				"spe": "263"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "138",
				"def": "313",
				"spa": "210",
				"spd": "313",
				"spe": "277"
			},
			"image": "./v/v2.48.0/pm0999_11_00_collecurei_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Power Behind the Future King",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank the first time the user enters a battle each battle."
			},
			{
				"name": "Curative Confusion 1",
				"description": "Restores the user’s HP when its attack move is successful against a confused opponent."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Ghost",
				"description": ""
			},
			{
				"name": "Pasio",
				"description": ""
			},
			{
				"name": "Sunglasses",
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
				"name": "Astonish",
				"type": "Ghost",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "12-14",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
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
				"user": "Trainer",
				"name": "Hands Off!",
				"type": "Trainer",
				"gauge": "3",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Physical Damage Reduction effect to the allied field of play. Applies the Special Damage Reduction effect to the allied field of play. Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Treasured Family Heirloom Ghost Beam",
				"type": "Ghost",
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