export const HILDA_VICTINI = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.26.0/hildaBG.png",
	"trainer": {
		"name": "Sygna Suit Hilda",
		"images": {
			"base": "./v/v2.26.0/hilda.png",
			"ex": "./v/v2.26.0/hildaEX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"pokemonType": "Fire",
	"pokemonWeakness": "Dark",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Victini",
			"formName": "",
			"stats": {
				"hp": "592",
				"atk": "502",
				"def": "122",
				"spa": "502",
				"spd": "122",
				"spe": "376"
			},
			"statsLVL150": {
				"hp": "620",
				"atk": "528",
				"def": "128",
				"spa": "528",
				"spd": "128",
				"spe": "396"
			},
			"image": "./v/v2.26.0/494.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Fierce Entry 6",
				"description": "Raises the user’s Attack by 6 stat ranks when it enters a battle."
			},
			{
				"name": "Recharging Strike 9",
				"description": "Charges the user’s move gauge by one when its attack move hits. If the move has the multistrike effect tag, charges the user’s move gauge by one for each hit."
			},
			{
				"name": "Downside Up",
				"description": "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Sygna Suit",
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
				"name": "Searing Shot",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "152-182",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target burned."
			},
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
				"user": "Pokemon",
				"name": "V-create",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Defense, Sp. Def, and Speed by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "For the Win!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by 3 stat ranks. When the user’s Attack is raised, raises the user’s Sp. Atk by the same amount. Raises the accuracy of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Infinite Energy V-create",
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
		"movesMAX": []
	}
}

export const HILBERT_GENESECT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.26.0/hilbertBG.png",
	"trainer": {
		"name": "Sygna Suit Hilbert",
		"images": {
			"base": "./v/v2.26.0/hilbert.png",
			"ex": "./v/v2.26.0/hilbertEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Bug",
	"pokemonWeakness": "Fire",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Genesect",
			"formName": "",
			"stats": {
				"hp": "640",
				"atk": "284",
				"def": "167",
				"spa": "380",
				"spd": "167",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "670",
				"atk": "298",
				"def": "175",
				"spa": "400",
				"spd": "175",
				"spe": "351"
			},
			"image": "./v/v2.26.0/649.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Bug Shift",
				"description": "Normal-type moves become Bug-type moves."
			},
			{
				"name": "Hilbert’s Aim",
				"description": "When the target’s weakness type is either Fire, Water, Electric, Ice, or Bug, lowers the target’s Type Rebuff of that type by 1 rank the first time the user’s attack move against that target is successful each battle."
			},
			{
				"name": "Hilbert’s Plan",
				"description": "Changes the type of the user’s attack move to that of the target’s weakness when the target’s weakness type is either Fire, Water, Electric, or Ice and only for that attack."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Sygna Suit",
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
				"name": "Metal Sound",
				"type": "Steel",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Sp. Def by 2 stat ranks."
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
				"description": "Raises the user’s critical-hit rate by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Techno Blast",
				"type": "Bug",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Perfect Aim!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 3 stat ranks. Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Aim for Victory Bug Buzz",
				"type": "Bug",
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

export const ELESA_JOLTIK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Elesa",
		"images": {
			"base": "./v/v2.26.0/elesa.png",
			"ex": "./v/v2.26.0/elesa.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Electric",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Joltik",
			"formName": "",
			"stats": {
				"hp": "572",
				"atk": "200",
				"def": "206",
				"spa": "200",
				"spd": "206",
				"spe": "224"
			},
			"statsLVL150": {
				"hp": "598",
				"atk": "210",
				"def": "216",
				"spa": "210",
				"spd": "216",
				"spe": "236"
			},
			"image": "./v/v2.26.0/595.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hype Up 1",
				"description": "Has a chance (20%) of raising the Sp. Atk of all allied sync pairs by one stat rank when the user’s Pokémon uses a move."
			},
			{
				"name": "Trip Up 4",
				"description": "Has a chance (50%) of lowering the target’s Speed by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Recuperation 1",
				"description": "Restores the user’s HP by approximately 20% of its maximum HP after using its sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
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
				"name": "Undella Town",
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
				"name": "Electroweb",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "39-46",
				"accuracy": "95",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
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
				"description": "Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
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
				"name": "Mutual Improvement!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the accuracy of all allied sync pairs by 1 stat rank. Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dazzlingly Bright Electric Beam",
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

export const HUGH_BOUFFALANT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.26.0/hughBG.png",
	"trainer": {
		"name": "Hugh",
		"images": {
			"base": "./v/v2.26.0/hugh.png",
			"ex": "./v/v2.26.0/hughEX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Bouffalant",
			"formName": "",
			"stats": {
				"hp": "845",
				"atk": "424",
				"def": "124",
				"spa": "268",
				"spd": "124",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "885",
				"atk": "446",
				"def": "130",
				"spa": "282",
				"spd": "130",
				"spe": "298"
			},
			"image": "./v/v2.26.0/626.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Recoil Removal 4",
				"description": "Has a chance (50%) of negating recoil damage when using moves that have the recoil effect tag."
			},
			{
				"name": "Reckless Boost 9",
				"description": "Powers up the user’s moves that have the recoil effect tag."
			},
			{
				"name": "Hugh’s Determination",
				"description": "Except in certain circumstances, fully restores the user’s HP just before the user faints the first time each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Normal",
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
				"name": "Unova Adventurer",
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
				"name": "Dire Hit +",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Head Charge",
				"type": "Normal",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "167-200",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Recoil",
				"description": "The user also takes 25% of the damage it dealt to the target."
			},
			{
				"user": "Trainer",
				"name": "I’ll Take You On!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 4 stat ranks. Raises the user’s Defense and Sp. Def by 2 stat ranks. Applies the Free Move Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Trusted Partners Head Charge",
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

export const N_KYUREMBLACK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.26.0/nBG.png",
	"trainer": {
		"name": "Sygna Suit N",
		"images": {
			"base": "./v/v2.26.0/n.png",
			"ex": "./v/v2.26.0/nEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Kyurem",
			"formName": "Black Kyurem",
			"stats": {
				"hp": "661",
				"atk": "487",
				"def": "179",
				"spa": "419",
				"spd": "179",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "691",
				"atk": "513",
				"def": "187",
				"spa": "441",
				"spd": "187",
				"spe": "355"
			},
			"image": "./v/v2.26.0/646.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Piercing Blows",
				"description": "Grants all of the following effects when the user is attacking: Ignores the target’s passive skills that would reduce the damage of attacks. Ignores the target’s passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
			},
			{
				"name": "Too Prepared 9",
				"description": "Reduces the user’s sync move countdown by 2 when an attack move, which was conducted after leaving the counter attacking posture or after getting ready to attack, is successful."
			},
			{
				"name": "Hostile Environment 1",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Ice",
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
				"name": "Sygna Suit",
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
				"name": "Freeze Shock",
				"type": "Ice",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "The user gets ready to attack. Using this move again will cause the user to leave this posture, then attack. Has a chance (30%) of leaving the target paralyzed. No other actions can be taken while ready to attack."
			},
			{
				"user": "Pokemon",
				"name": "Ice Beam",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "46-55",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target frozen."
			},
			{
				"user": "Pokemon",
				"name": "(B Move) B Noble Roar",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user gets ready to attack.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the Attack, Sp. Atk, and Speed of all opposing sync pairs by 2 stat ranks. Applies the Supereffective ↑ Next effect to the user. Applies the Free Move Next effect to the user. Increases the user’s Physical Moves ↑ Next effect by 1 rank."
			},
			{
				"user": "Trainer",
				"name": "My Formula!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "World-Changing Freeze Bolt",
				"type": "Ice",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Attack is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const COLRESS_KLINKLANG = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.26.0/colressBG.png",
	"trainer": {
		"name": "Colress",
		"images": {
			"base": "./v/v2.26.0/colress.png",
			"ex": "./v/v2.26.0/colressEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Steel",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Klinklang",
			"formName": "",
			"stats": {
				"hp": "628",
				"atk": "331",
				"def": "205",
				"spa": "390",
				"spd": "192",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "658",
				"atk": "349",
				"def": "215",
				"spa": "410",
				"spd": "202",
				"spe": "328"
			},
			"image": "./v/v2.26.0/601.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ripple Effect 9",
				"description": "When a move used by the user’s Pokémon lowers an opponent’s stat, lowers the same stat for all opposing sync pairs instead."
			},
			{
				"name": "Team Critical Shock 9",
				"description": "Raises the critical-hit rate of all allied sync pairs by 1 stat rank when the user’s attack move is successful against a paralyzed opponent."
			},
			{
				"name": "On a Roll 1",
				"description": "Raises the chance of lowering stat values with the additional effects of moves."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Villain",
				"description": ""
			},
			{
				"name": "Glasses",
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
				"name": "Screech",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Defense by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Mirror Shot",
				"type": "Steel",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "57-68",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s accuracy by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "For Science!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Defense and Sp. Def by 4 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Potential-Surpassing Gear Grind",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is paralyzed."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LYRA_VAPOREON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Lyra (Eevee Day)",
		"images": {
			"base": "./v/v2.26.0/lyra.png",
			"ex": "./v/v2.26.0/lyra.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Water",
	"pokemonWeakness": "Grass",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Vaporeon",
			"formName": "",
			"stats": {
				"hp": "690",
				"atk": "288",
				"def": "161",
				"spa": "356",
				"spd": "162",
				"spe": "269"
			},
			"statsLVL150": {
				"hp": "722",
				"atk": "302",
				"def": "169",
				"spa": "374",
				"spd": "170",
				"spe": "283"
			},
			"image": "./v/v2.26.0/134.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Rain Caller",
				"description": "Makes the weather rainy after using the user’s sync move."
			},
			{
				"name": "Team Rain Coat",
				"description": "Protects all allied sync pairs against critical hits when the weather is rainy."
			},
			{
				"name": "Impeding Strike 9",
				"description": "Lowers the target’s Speed by 1 stat rank when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s Speed by 1 stat rank after using the user’s sync move targeting that opponent."
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
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Main Character",
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
				"description": "Lowers the target’s Sp. Def by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Muddy Water",
				"type": "Water",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "116-139",
				"accuracy": "85",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s accuracy by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Come Along!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks. Raises the Speed of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Overflowing Curiosity Water Beam",
				"type": "Water",
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

export const KRIS_JOLTEON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Kris (Eevee Day)",
		"images": {
			"base": "./v/v2.26.0/kris.png",
			"ex": "./v/v2.26.0/kris.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Jolteon",
			"formName": "",
			"stats": {
				"hp": "625",
				"atk": "268",
				"def": "179",
				"spa": "390",
				"spd": "179",
				"spe": "403"
			},
			"statsLVL150": {
				"hp": "655",
				"atk": "282",
				"def": "187",
				"spa": "410",
				"spd": "187",
				"spe": "423"
			},
			"image": "./v/v2.26.0/135.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Power Plant",
				"description": "Turns the field of play’s terrain into Electric Terrain after using the user’s sync move."
			},
			{
				"name": "Team Electric Current",
				"description": "Stats cannot be lowered for all allied sync pairs when the terrain is Electric Terrain."
			},
			{
				"name": "Snaring Strike 9",
				"description": "Lowers the target’s evasiveness by 1 stat rank when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s evasiveness by 1 stat rank after using the user’s sync move targeting that opponent."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"themes": [
			{
				"name": "Electric",
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
				"name": "Pigtails",
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
				"name": "Reviewed and Ready!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Jolt of Genius Electric Beam",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is paralyzed."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LUCAS_FLAREON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Lucas (Eevee Day)",
		"images": {
			"base": "./v/v2.26.0/lucas.png",
			"ex": "./v/v2.26.0/lucas.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Flareon",
			"formName": "",
			"stats": {
				"hp": "633",
				"atk": "317",
				"def": "166",
				"spa": "346",
				"spd": "180",
				"spe": "285"
			},
			"statsLVL150": {
				"hp": "663",
				"atk": "333",
				"def": "174",
				"spa": "364",
				"spd": "188",
				"spe": "299"
			},
			"image": "./v/v2.26.0/136.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Solarize",
				"description": "Makes the weather sunny after using the user’s sync move."
			},
			{
				"name": "Team Solar Immunity",
				"description": "When the weather is sunny, status conditions cannot be inflicted on any allied sync pairs and prevents all allies from flinching, becoming confused, or becoming trapped."
			},
			{
				"name": "Blunting Strike 9",
				"description": "Lowers the target’s Attack by 1 stat rank when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s Attack by 1 stat rank after using the user’s sync move targeting that opponent."
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
				"name": "Ember",
				"type": "Fire",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "17-20",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Pokemon",
				"name": "Will-O-Wisp",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target burned."
			},
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
				"user": "Trainer",
				"name": "Let Me Teach You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by 1 stat rank. Raises the Sp. Atk of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Red-Hot Research Fire Beam",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is burned."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}