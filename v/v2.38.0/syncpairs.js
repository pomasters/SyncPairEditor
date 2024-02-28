export const ROXIE_TOXTRICITY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.38.0/roxie_BG.png",
	"trainer": {
		"name": "Sygna Suit Roxie",
		"images": {
			"base": "./v/v2.38.0/roxie.png",
			"ex": "./v/v2.38.0/roxie_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Special Strike",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Toxtricity",
			"formName": "Amped Form",
			"stats": {
				"hp": "650",
				"atk": "351",
				"def": "176",
				"spa": "419",
				"spd": "176",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "369",
				"def": "184",
				"spa": "441",
				"spd": "184",
				"spe": "369"
			},
			"image": "./v/v2.38.0/0849_01.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Amped and Vibed",
				"description": "Turns the field of play’s zone into a Poison Zone the first time the user’s max move is used each battle. (A Poison Zone powers up Poison-type attacks.) Extends the duration of the Poison Zone when the zone turns into a Poison Zone while the user is on the field."
			},
			{
				"name": "Turbo Charge 3",
				"description": "Quickly charges the move gauge when the terrain is Electric Terrain."
			},
			{
				"name": "Hit Poisoned Opp: Attack ↓ & Hit Paralyzed Opp: Sp. Atk ↓ 9",
				"description": "Lowers the target’s Attack by 1 stat rank when the user’s attack move is successful against a poisoned or badly poisoned opponent. Lowers the target’s Sp. Atk by 1 stat rank when the user’s attack move is successful against a paralyzed opponent."
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
				"name": "(b move) Frenzied Sludge Wave",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon affected by a status condition on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon affected by a status condition on the opponent’s field of play.(lb)(lb)Lowers the target’s Sp. Def by 2 stat ranks. Has a chance (10%) of leaving the target poisoned. This attack’s power increases 50% when the terrain is Electric Terrain."
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
				"name": "Overdrive",
				"type": "Electric",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "160-192",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Poison on Stage!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Rock Them Away Poison Beam",
				"type": "Poison",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Ooze",
				"type": "Poison",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Sp. Atk of all allied sync pairs by 2 stat ranks."
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
				"name": "G-Max Stun Shock",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves all opposing sync pairs poisoned or paralyzed."
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

export const RED_VENUASAUR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Red",
		"images": {
			"base": "./v/v2.38.0/red.png",
			"ex": "./v/v2.38.0/red.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Special Strike",
	"pokemonType": "Grass",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Venusaur",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "336",
				"def": "176",
				"spa": "336",
				"spd": "187",
				"spe": "285"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "354",
				"def": "184",
				"spa": "354",
				"spd": "197",
				"spe": "299"
			},
			"image": "./v/v2.38.0/0003.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Kanto Journey Legacy",
				"description": "The user’s moves never miss. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves, sync move, or max moves."
			},
			{
				"name": "Ferocious Entry 4",
				"description": "Raises the user’s Attack and Sp. Atk by 4 stat ranks when it enters a battle."
			},
			{
				"name": "Move on Opp: Attack ↓ &/ Sp. Atk ↓ 9",
				"description": "Lowers the target’s Attack or Sp. Atk—or both—by 1 stat rank when the user’s move targeting that opponent is successful."
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
				"effect": "Heals",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Toughen Up to Win!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Defense and Sp. Def by 2 stat ranks. Applies the Gradual Healing effect to an ally."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Giga Frenzy Plant",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "180-216",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the field of play’s terrain turns into Grassy Terrain.(lb)Deactivation Condition: When the field of play’s terrain is no longer Grassy Terrain.(lb)(lb)Lowers the target’s Sp. Def by 2 stat ranks. The power of this move is not lowered even if there are multiple targets."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Silent Overgrowth Grass Beam",
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
				"name": "Max Overgrowth",
				"type": "Grass",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Grassy Terrain."
			}
		]
	}
}

export const GLADION_GOLBAT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Gladion",
		"images": {
			"base": "./v/v2.38.0/gladion.png",
			"ex": "./v/v2.38.0/gladion_EX.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Poison",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Golbat",
			"formName": "",
			"stats": {
				"hp": "603",
				"atk": "176",
				"def": "228",
				"spa": "156",
				"spd": "228",
				"spe": "297"
			},
			"statsLVL150": {
				"hp": "631",
				"atk": "184",
				"def": "240",
				"spa": "164",
				"spd": "240",
				"spe": "313"
			},
			"image": "./v/v2.38.0/0042.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Quick Cure",
				"description": "Removes the confused, flinching, and trapped conditions from the user the first time they are inflicted each battle."
			},
			{
				"name": "Antitoxin",
				"description": "Prevents the user from getting poisoned or badly poisoned."
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Villain",
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
				"name": "Poison Fang",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "34-40",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (50%) of leaving the target badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "X Attack All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack of all allied sync pairs by 2 stat ranks."
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
				"name": "I’ll Protect You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense, Sp. Def, and critical-hit rate of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Best Moves Poison Impact",
				"type": "Poison",
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

export const PIERS_TOXTRICITY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.38.0/piers_BG.png",
	"trainer": {
		"name": "Sygna Suit Piers",
		"images": {
			"base": "./v/v2.38.0/piers.png",
			"ex": "./v/v2.38.0/piers_EX.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"exRole": "Support",
	"pokemonType": "Electric",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Toxtricity",
			"formName": "Low Key Form",
			"stats": {
				"hp": "650",
				"atk": "307",
				"def": "135",
				"spa": "336",
				"spd": "135",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "323",
				"def": "141",
				"spa": "354",
				"spd": "141",
				"spe": "369"
			},
			"image": "./v/v2.38.0/0849_02.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Low-Key Melancholy",
				"description": "Turns the field of play’s terrain into Electric Terrain the first time the user’s attack move is successful each battle. Extends the duration of Electric Terrain when the terrain turns into Electric Terrain while the user is on the field."
			},
			{
				"name": "Poisonous Acceleration 3",
				"description": "Quickly charges the move gauge when the zone is a Poison Zone."
			},
			{
				"name": "Piercing Blows",
				"description": "Grants all of the following effects when the user is attacking: Ignores the target’s passive skills that would reduce the damage of attacks. Ignores the target’s passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
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
				"name": "Galar",
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
				"name": "(b move) Sorrowful Echoes Overdrive",
				"type": "Electric",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "180-216",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When weather, terrain, or zone effects are activated.(lb)Deactivation Condition: When all weather, terrain, and zone effects are cleared.(lb)(lb)The power of this move is not lowered even if there are multiple targets. Decreases the amount of move gauge slots needed to use this move by 2 when the zone is a Poison Zone. This attack’s power increases 20% when the target is affected by a status condition."
			},
			{
				"user": "Trainer",
				"name": "The Show Begins!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Poison Zone. (A Poison Zone powers up Poison-type attacks.) Raises the user’s Sp. Atk and critical-hit rate by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Lightning and Blues Overdrive",
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

export const RYUKI_TURTONATOR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.38.0/ryuki_BG.png",
	"trainer": {
		"name": "Ryuki",
		"images": {
			"base": "./v/v2.38.0/ryuki.png",
			"ex": "./v/v2.38.0/ryuki_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Special Strike",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Turtonator",
			"formName": "",
			"stats": {
				"hp": "630",
				"atk": "346",
				"def": "178",
				"spa": "448",
				"spd": "166",
				"spe": "224"
			},
			"statsLVL150": {
				"hp": "660",
				"atk": "364",
				"def": "186",
				"spa": "472",
				"spd": "174",
				"spe": "236"
			},
			"image": "./v/v2.38.0/0776.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Star Shout!",
				"description": "Grants all of the following effects when the user uses Shell Trap: Makes opponents target the user for a short time. Applies the Damage Guard Next effect to the user. Increases the user’s Special Moves ↑ Next effect by 2 ranks."
			},
			{
				"name": "First Aid 9",
				"description": "Restores the user’s HP by approximately 90% of its maximum HP the first time it is in a pinch each battle."
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
				"name": "Dragon",
				"description": ""
			},
			{
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Artistic",
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
				"name": "Draco Meteor",
				"type": "Dragon",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "136-163",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Shell Trap",
				"type": "Fire",
				"gauge": "3",
				"uses": "2",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "The user takes up a counterattacking posture. Using this move again will cause the user to leave this posture. No other actions can be taken while in this posture. The user will leave this posture if hit by a physical attack move while it is in this counterattacking posture, then attack all opposing sync pairs."
			},
			{
				"user": "Pokemon",
				"name": "Overheat",
				"type": "Fire",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "136-163",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Pour My Soul!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk and critical-hit rate by 2 stat ranks. Increases the user’s Special Moves ↑ Next effect by 1 rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Fiery Spirit Dragon Beam",
				"type": "Dragon",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Sp. Atk is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const PENNY_SYLVEON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.38.0/penny_BG.png",
	"trainer": {
		"name": "Penny",
		"images": {
			"base": "./v/v2.38.0/penny.png",
			"ex": "./v/v2.38.0/penny_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Special Strike",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Sylveon",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "161",
				"def": "285",
				"spa": "200",
				"spd": "312",
				"spe": "295"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "169",
				"def": "299",
				"spa": "210",
				"spd": "328",
				"spe": "311"
			},
			"image": "./v/v2.38.0/0700.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "1st Hit: Fairy Rebuff ↓",
				"description": "Lowers the target’s Fairy Type Rebuff by 1 rank the first time the user’s attack move is successful each battle."
			},
			{
				"name": "Mind Games 9",
				"description": "Lowers the target’s Sp. Def by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Team Smart Command 9",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank when the user’s Trainer uses a move."
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
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Glasses",
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
				"name": "Disarming Voice",
				"type": "Fairy",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "45-54",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Never misses."
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
				"name": "(b move) Starry Draining Kiss",
				"type": "Fairy",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "120-144",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Returns the target’s raised stats to normal, then raises the user’s same stats by the same amount. Restores the user’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Veevee Power!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the Sp. Atk of all allied sync pairs by 4 stat ranks. Raises the critical-hit rate of all allied sync pairs by 2 stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Bright Hacker’s Disarming Voice",
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

export const ELAINE_EEVEE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.38.0/elaine_BG.png",
	"trainer": {
		"name": "Elaine",
		"images": {
			"base": "./v/v2.38.0/elaine.png",
			"ex": "./v/v2.38.0/elaine_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Eevee",
			"formName": "",
			"stats": {
				"hp": "664",
				"atk": "161",
				"def": "297",
				"spa": "161",
				"spd": "297",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "696",
				"atk": "169",
				"def": "313",
				"spa": "169",
				"spd": "313",
				"spe": "298"
			},
			"image": "./v/v2.38.0/0133.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "“Quick Move”: Restore T-Move MP 9",
				"description": "Restores 1 MP for the user’s Trainer when it uses a move that has the quick move effect tag."
			},
			{
				"name": "Hit: Interference (1 Kind) 9",
				"description": "Leaves the target either flinching, confused, or trapped when the user’s attack move against it is successful."
			},
			{
				"name": "1st Use Status P-Move: HP Recovery 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time its Pokémon uses a status move each battle."
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
				"name": "Swift",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "57-68",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Never misses."
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
				"name": "Quick Attack",
				"type": "Normal",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "94-112",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Quick Move",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Let’s Go Together!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Restores the HP of all allied sync pairs by approximately 10% of their maximum HP. Restores 1 MP of the user’s moves that have the quick move effect tag. Raises the critical-hit rate of all allied sync pairs by 3 stat ranks. Increases the Physical Moves ↑ Next effect or Special Moves ↑ Next effect of all allied sync pairs by 1 rank. (The same type of effect is increased for all allied sync pairs.)"
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Partner Promenade Veevee Volley",
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

export const EVE_EEVEE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.38.0/eve_BG.png",
	"trainer": {
		"name": "Eve",
		"images": {
			"base": "./v/v2.38.0/eve.png",
			"ex": "./v/v2.38.0/eve.png"
		}
	},
	"rarity": 3,
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Eevee",
			"formName": "",
			"stats": {
				"hp": "533",
				"atk": "288",
				"def": "132",
				"spa": "288",
				"spd": "132",
				"spe": "210"
			},
			"statsLVL150": {
				"hp": "555",
				"atk": "302",
				"def": "138",
				"spa": "302",
				"spd": "138",
				"spe": "220"
			},
			"image": "./v/v2.38.0/0133.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Unfortuitous 9",
				"description": "Lowers one of the target’s following stats by one stat rank at random when the user’s attack move against it is successful: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"name": "Move Gauge Refresh 3",
				"description": "Has a chance (40%) of charging the user’s move gauge by one when a move is successful."
			},
			{
				"name": "Group Slapdash 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when an opponent’s attack move targeting the user misses."
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
				"name": "Galar",
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
				"name": "Double Team",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s evasiveness by 1 stat rank."
			},
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
				"effect": "Sure Hit",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "Vee! Eevee!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 2 stat ranks. Raises the user’s evasiveness and critical-hit rate by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Double Eevee Normal Beam",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
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

export const SELENE_UMBREON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Selene",
		"images": {
			"base": "./v/v2.38.0/selene.png",
			"ex": "./v/v2.38.0/selene.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Umbreon",
			"formName": "",
			"stats": {
				"hp": "674",
				"atk": "419",
				"def": "181",
				"spa": "336",
				"spd": "190",
				"spe": "292"
			},
			"statsLVL150": {
				"hp": "706",
				"atk": "441",
				"def": "189",
				"spa": "354",
				"spd": "200",
				"spe": "308"
			},
			"image": "./v/v2.38.0/0197.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "S-Move: Dark Zone",
				"description": "Turns the field of play’s zone into a Dark Zone after using the user’s sync move. (A Dark Zone powers up Dark-type attacks.)"
			},
			{
				"name": "Dark Zone: Team Crit Immunity",
				"description": "Protects all allied sync pairs against critical hits when the zone is a Dark Zone."
			},
			{
				"name": "P-Move/S-Move on Opp: Defense ↓2 9",
				"description": "Lowers the target’s Defense by 2 stat ranks when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s Defense by 2 stat ranks after using the user’s sync move targeting that opponent."
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
				"name": "Moonlight",
				"type": "Fairy",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "Crunch",
				"type": "Dark",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of lowering the target’s Defense by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Full of Energy!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s Attack by 2 stat ranks. Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Floating High Black Hole Eclipse",
				"type": "Dark",
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

export const ELIO_ESPEON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Elio",
		"images": {
			"base": "./v/v2.38.0/elio.png",
			"ex": "./v/v2.38.0/elio.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Espeon",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "336",
				"def": "166",
				"spa": "419",
				"spd": "179",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "354",
				"def": "174",
				"spa": "441",
				"spd": "187",
				"spe": "354"
			},
			"image": "./v/v2.38.0/0196.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Weird World",
				"description": "Turns the field of play’s terrain into Psychic Terrain after using the user’s sync move."
			},
			{
				"name": "Psychic Terrain: Team Condition Nullification",
				"description": "Prevents all allied sync pairs from being inflicted with status conditions, flinching, becoming confused, or becoming trapped when the terrain is Psychic Terrain."
			},
			{
				"name": "P-Move/S-Move on Opp: Sp. Def ↓2 9",
				"description": "Lowers the target’s Sp. Def by 2 stat ranks when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s Sp. Def by 2 stat ranks after using the user’s sync move targeting that opponent."
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
				"name": "Morning Sun",
				"type": "Normal",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
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
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Mysterious Power!",
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
				"name": "Shining High Shattered Psyche",
				"type": "Psychic",
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