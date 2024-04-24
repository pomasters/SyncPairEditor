export const RIKA_CLODSIRE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.44.0/rika_BG.png",
	"trainer": {
		"name": "Rika",
		"images": {
			"base": "./v/v2.44.0/rika.png",
			"ex": "./v/v2.44.0/rika_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Ground",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Clodsire",
			"formName": "",
			"stats": {
				"hp": "684",
				"atk": "200",
				"def": "302",
				"spa": "200",
				"spd": "317",
				"spe": "224"
			},
			"statsLVL150": {
				"hp": "716",
				"atk": "210",
				"def": "318",
				"spa": "210",
				"spd": "333",
				"spe": "236"
			},
			"image": "./v/v2.44.0/0980.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Triage Tank 9",
				"description": "Restores the HP of all allied sync pairs when the user is hit by an attack move."
			},
			{
				"name": "Take Hit: Opp 1 of 5 Stats ↓2 9",
				"description": "Lowers one of the following stats of an opponent that attacked the user by two stat ranks at random when the user is hit by an attack move: Attack, Defense, Sp. Atk, Sp. Def, or Speed."
			},
			{
				"name": "Critical Squad 1",
				"description": "Raises the critical-hit rate of all allied sync pairs by one stat rank when the user’s move is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
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
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Knowledgeable",
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
				"name": "Poison Sting",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "12-14",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
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
				"name": "(b move) Rampant Mud Slap",
				"type": "Ground",
				"gauge": "1",
				"uses": "1",
				"category": "Special",
				"power": "20-24",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user is hit by an attack move one time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the target’s accuracy by two stat ranks. Leaves the target poisoned. Turns the field of play’s zone into a Ground Zone. (A Ground Zone powers up Ground-type attacks.) Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by two ranks."
			},
			{
				"user": "Trainer",
				"name": "Think Fast!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "Sure Hit",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the Attack and Sp. Atk of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Paldea League Interviewer Earth Power",
				"type": "Ground",
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

export const BRYCEN_ZOROARK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.44.0/brycen-man_BG.png",
	"trainer": {
		"name": "Brycen-Man",
		"images": {
			"base": "./v/v2.44.0/brycen-man.png",
			"ex": "./v/v2.44.0/brycen-man_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Special Strike",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Zoroark",
			"formName": "",
			"stats": {
				"hp": "606",
				"atk": "312",
				"def": "176",
				"spa": "336",
				"spd": "176",
				"spe": "358"
			},
			"statsLVL150": {
				"hp": "634",
				"atk": "328",
				"def": "184",
				"spa": "354",
				"spd": "184",
				"spe": "376"
			},
			"image": "./v/v2.44.0/0571.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit Rebuff ↓ Opp: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while the target’s Type Rebuff is lowered."
			},
			{
				"name": "1st S-Move on Opp: Stat Ranks ↓ ×2",
				"description": "If the target’s stats are lowered, the amount of decrease is doubled the first time the user’s sync move targeting the opponent is successful each battle. This effect can activate only once per battle."
			},
			{
				"name": "On a Roll 2",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
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
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Artistic",
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
				"name": "Night Daze",
				"type": "Dark",
				"gauge": "4",
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
				"name": "(b move) Eerily Captivating Fake Tears",
				"type": "Dark",
				"gauge": "1",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user’s Trainer uses any moves one time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the target’s Sp. Atk and Sp. Def by two stat ranks. Lowers the target’s Dark Type Rebuff by one rank."
			},
			{
				"user": "Trainer",
				"name": "My Dark, Secret Arts!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Sure Hit",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Sp. Atk by four stat ranks. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dye This World Dark Beam",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Sp. Def is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const RIKA_WHISCASH = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Rika",
		"images": {
			"base": "./v/v2.44.0/rika.png",
			"ex": "./v/v2.44.0/rika.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Ground",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Whiscash",
			"formName": "",
			"stats": {
				"hp": "553",
				"atk": "244",
				"def": "161",
				"spa": "361",
				"spd": "161",
				"spe": "224"
			},
			"statsLVL150": {
				"hp": "577",
				"atk": "256",
				"def": "169",
				"spa": "379",
				"spd": "169",
				"spe": "236"
			},
			"image": "./v/v2.44.0/0340.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Dizzying Power",
				"description": "The more the target’s accuracy is lowered, the more it powers up the user’s moves."
			},
			{
				"name": "On a Roll 4",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves."
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
				"name": "Ground",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Knowledgeable",
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
				"name": "Earth Power",
				"type": "Ground",
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
				"name": "Watch Your Step!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "Sure Hit",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Testing Mind and Aptitude Ground Beam",
				"type": "Ground",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s accuracy is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BLUE_CHARIZARD = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Blue (Classic)",
		"images": {
			"base": "./v/v2.44.0/blue.png",
			"ex": "./v/v2.44.0/blue.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Special Strike",
	"pokemonType": "Fire",
	"pokemonWeakness": "Water",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Charizard",
			"formName": "",
			"stats": {
				"hp": "677",
				"atk": "356",
				"def": "166",
				"spa": "356",
				"spd": "166",
				"spe": "297"
			},
			"statsLVL150": {
				"hp": "709",
				"atk": "374",
				"def": "174",
				"spa": "374",
				"spd": "174",
				"spe": "313"
			},
			"image": "./v/v2.44.0/0006.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Kanto Journey Legacy",
				"description": "The user’s moves never miss. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves, sync move, or max moves."
			},
			{
				"name": "Entry: Sp. Atk ↑ & Speed ↑ 4",
				"description": "Raises the user’s Sp. Atk and Speed by four stat ranks when it enters a battle."
			},
			{
				"name": "Recoil Removal 9",
				"description": "Negates recoil damage when using moves that have the recoil effect tag."
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
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Pallet Town",
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
				"name": "Heat Wave",
				"type": "Fire",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "109-130",
				"accuracy": "90",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Pokemon",
				"name": "Flare Blitz",
				"type": "Fire",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "123-147",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Ok While Frozen, Recoil",
				"description": "Removes the frozen condition from the user. The user also takes 25% of the damage it dealt to the target. Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Neo Blast Burn",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "180-216",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the weather turns sunny.(lb)Deactivation Condition: When the weather condition is no longer sunny.(lb)(lb)Lowers the target’s Defense and Sp. Def by one stat rank. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Can’t Fool Me!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an allied sync pair by one. Raises an ally’s Attack by four stat ranks. Applies the Supereffective ↑ Next effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Burning Rivalry Fire Beam",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Flare",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Makes the weather sunny."
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
				"user": "Pokemon",
				"name": "Max Flare",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
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

export const SABRINA_SWOOBAT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.44.0/bellelba_BG.png",
	"trainer": {
		"name": "Bellelba",
		"images": {
			"base": "./v/v2.44.0/bellelba.png",
			"ex": "./v/v2.44.0/bellelba_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Swoobat",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "205",
				"def": "273",
				"spa": "156",
				"spd": "273",
				"spe": "377"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "215",
				"def": "287",
				"spa": "164",
				"spd": "287",
				"spe": "397"
			},
			"image": "./v/v2.44.0/0528.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Rules of the Enchanted Land",
				"description": "The user’s Defense and Sp. Def increase 20% when effects that apply only to the allied field of play are in effect. Extends the duration of the Critical-Hit Defense effect when the Critical-Hit Defense effect applies to the allied field of play."
			},
			{
				"name": "Allied Field Effect & Hit: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while effects that apply only to the allied field of play are in effect."
			},
			{
				"name": "Crit-Hit Defense: Physical & Special DR",
				"description": "Applies the Physical Damage Reduction effect and the Special Damage Reduction effect to the allied field of play when the user applies the Critical-Hit Defense effect."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Special Costume",
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
				"name": "Potion",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Heals",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Critical Shield",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Critical-Hit Defense effect to the allied field of play."
			},
			{
				"user": "Trainer",
				"name": "Give Me Energy!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by four stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Rule the Enchanted Land Psychic Impact",
				"type": "Psychic",
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

export const GUZMA_ARIADOS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Guzma",
		"images": {
			"base": "./v/v2.44.0/guzma.png",
			"ex": "./v/v2.44.0/guzma.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Bug",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Ariados",
			"formName": "",
			"stats": {
				"hp": "664",
				"atk": "190",
				"def": "278",
				"spa": "185",
				"spd": "278",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "696",
				"atk": "200",
				"def": "292",
				"spa": "195",
				"spd": "292",
				"spe": "282"
			},
			"image": "./v/v2.44.0/0168.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Overwhelm 9",
				"description": "Lowers the target’s Attack by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Trip Up 9",
				"description": "Lowers the target’s Speed by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Hostile Environment 3",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Bug",
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
				"name": "Poison Sting",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "12-14",
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
				"name": "Quit Standin’ Around!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by two stat ranks. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Shake Things Up Savage Spin-Out",
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

export const PLUMERIA_GENGAR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Plumeria",
		"images": {
			"base": "./v/v2.44.0/plumeria.png",
			"ex": "./v/v2.44.0/plumeria.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "Tech",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Gengar",
			"formName": "",
			"stats": {
				"hp": "626",
				"atk": "351",
				"def": "161",
				"spa": "434",
				"spd": "176",
				"spe": "395"
			},
			"statsLVL150": {
				"hp": "656",
				"atk": "369",
				"def": "169",
				"spa": "456",
				"spd": "184",
				"spe": "415"
			},
			"image": "./v/v2.44.0/0094.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Grand Entry 4",
				"description": "Raises the user’s Sp. Atk by four stat ranks when it enters a battle."
			},
			{
				"name": "Toxic Freebie 9",
				"description": "Applies the Free Move Next effect to the user when the user’s attack move is successful against a poisoned or badly poisoned opponent."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Poison",
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
				"name": "Beauty",
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
				"name": "(b move) Alluring Confuse Ray",
				"type": "Ghost",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When there is at least one poisoned or badly poisoned Pokémon on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any poisoned or badly poisoned Pokémon on the opponent’s field of play.(lb)(lb)Leaves the target confused. Lowers the target’s accuracy by one stat rank. Applies the Move Gauge Acceleration effect to the allied field of play. Reduces the user’s sync move countdown by one."
			},
			{
				"user": "Trainer",
				"name": "Prove You Got Guts!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "Sure Hit",
				"description": "Raises the user’s Speed by six stat ranks. Raises the evasiveness of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ready to Go Acid Downpour",
				"type": "Poison",
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

export const POPPY_TINKATON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.44.0/poppy_BG.png",
	"trainer": {
		"name": "Poppy",
		"images": {
			"base": "./v/v2.44.0/poppy.png",
			"ex": "./v/v2.44.0/poppy_EX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Steel",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Tinkaton",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "468",
				"def": "132",
				"spa": "268",
				"spd": "147",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "492",
				"def": "138",
				"spa": "282",
				"spd": "155",
				"spe": "328"
			},
			"image": "./v/v2.44.0/0959.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Use Status P-Move on Opp: Defense ↓2 9",
				"description": "Lowers the target’s Defense by two stat ranks when the user’s Pokémon uses a status move targeting that opponent."
			},
			{
				"name": "P-Moves & S-Moves Crit",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
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
				"name": "Paldea",
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
				"name": "(b move) Steel-Hard Gigaton Hammer",
				"type": "Steel",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "450-540",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any moves one time.(lb)Deactivation Condition: When this move is used.(lb)(lb)No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Reeeal Strong!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by six stat ranks. Applies the Free Move Next effect to the user. Increases the user’s Physical Moves ↑ Next effect by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Steel-Hard Strength Gigaton Hammer",
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