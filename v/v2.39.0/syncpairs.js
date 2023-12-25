export const NATE_HAXORUS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.39.0/nateBG.png",
	"trainer": {
		"name": "Nate (Champion)",
		"images": {
			"base": "./v/v2.39.0/nate.png",
			"ex": "./v/v2.39.0/nateEX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"exRole": "Field",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "(shiny) Haxorus",
			"formName": "",
			"stats": {
				"hp": "673",
				"atk": "424",
				"def": "166",
				"spa": "336",
				"spd": "162",
				"spe": "356"
			},
			"statsLVL150": {
				"hp": "705",
				"atk": "446",
				"def": "174",
				"spa": "354",
				"spd": "170",
				"spe": "374"
			},
			"image": "./v/v2.39.0/0612.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Strategy: Focus on Attack!",
				"description": "Raises the user’s Attack by 6 stat ranks when its Trainer uses a move. Increases the user’s Physical Moves ↑ Next effect by one rank when its Trainer uses a move."
			},
			{
				"name": "Better Than Perfect Opportunity",
				"description": "Restores 1 MP of the user’s buddy move after your team’s sync pair uses their sync move. Increases the user’s Physical Moves ↑ Next effect by 1 rank after your team’s sync pair uses their sync move."
			},
			{
				"name": "P-Moves & S-Moves Crit",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Unova Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Unova theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Dragon",
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
				"name": "Champion",
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
				"name": "Scale Shot",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "16-19",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Attacks the target two to five times in a row. Raises the user’s Speed by 1 stat rank. Lowers the user’s Defense by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Unova Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by 1 rank. Applies Unova Circle (Physical) to the allied field of play. Unova Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Unova theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Dark Black Outrage",
				"type": "Dragon",
				"gauge": "4",
				"uses": "1",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Never misses. Reduces the user’s sync move countdown by 1."
			},
			{
				"user": "Trainer",
				"name": "Glory of the Challenge!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Returns the user’s lowered stats to normal. Raises the user’s Speed by 3 stat ranks. Applies the Free Move Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Resonating Will Dragon Claw",
				"type": "Dragon",
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

export const JASMINE_MAGNEMITE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Jasmine",
		"images": {
			"base": "./v/v2.39.0/jasmine.png",
			"ex": "./v/v2.39.0/jasmine.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Steel",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Magnemite",
			"formName": "",
			"stats": {
				"hp": "629",
				"atk": "190",
				"def": "229",
				"spa": "210",
				"spd": "219",
				"spe": "222"
			},
			"statsLVL150": {
				"hp": "659",
				"atk": "200",
				"def": "241",
				"spa": "220",
				"spd": "231",
				"spe": "234"
			},
			"image": "./v/v2.39.0/0081.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Endurance",
				"description": "When the user enters battle with full HP, applies the Enduring effect to it."
			},
			{
				"name": "Lithe",
				"description": "Prevents the user from getting paralyzed."
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
				"name": "Steel",
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
				"name": "Pokéathlete",
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
				"name": "Gyro Ball",
				"type": "Steel",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "44-52",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power is doubled when the target’s Speed is raised."
			},
			{
				"user": "Trainer",
				"name": "Heart of Steel!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense, Sp. Def, and accuracy of all allied sync pairs by 1 stat rank. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Hard Cold Sharp Strong Steel Impact",
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

export const VIOLA_VIVILLON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.39.0/violaBG.png",
	"trainer": {
		"name": "Viola (Holiday 2023)",
		"images": {
			"base": "./v/v2.39.0/viola.png",
			"ex": "./v/v2.39.0/violaEX.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Tech",
	"pokemonType": "Bug",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Vivillon",
			"formName": "Icy Snow Pattern",
			"stats": {
				"hp": "677",
				"atk": "244",
				"def": "167",
				"spa": "395",
				"spd": "167",
				"spe": "332"
			},
			"statsLVL150": {
				"hp": "709",
				"atk": "256",
				"def": "175",
				"spa": "415",
				"spd": "175",
				"spe": "350"
			},
			"image": "./v/v2.39.0/0666_11.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit Status Cond Opp: Stat ↓2 9",
				"description": "Lowers one of the target’s following stats by 2 stat ranks at random when the user’s attack move is successful against targets that are affected by a status condition: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"name": "Bug Zone: Team Attack Move DR 2",
				"description": "Reduces attack move damage taken by allies when the zone is a Bug Zone."
			},
			{
				"name": "Paralyzed Opp Fail ↑ 5",
				"description": "Raises the chance that an opponent’s move will fail due to paralysis."
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
				"name": "Kalos",
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
				"description": "Lowers the target’s Sp. Atk. by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Bug Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Bug Zone. (A Bug Zone powers up Bug-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Frozen Butterfly Stun Spore",
				"type": "Grass",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the field of play’s zone turns into a Bug Zone.(lb)Deactivation Condition: When the field of play’s zone is no longer a Bug Zone.(lb)(lb)Never misses. Leaves the target paralyzed. Leaves the target confused. Lowers the target’s Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, and evasiveness by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Getting in Focus!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp. Atk and critical-hit rate by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Mystical Icy Snow Dance Bug Beam",
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
		"movesMAX": []
	}
}

export const SYCAMORE_GOGOAT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.39.0/sycamoreBG.png",
	"trainer": {
		"name": "Professor Sycamore (Holiday 2023)",
		"images": {
			"base": "./v/v2.39.0/sycamore.png",
			"ex": "./v/v2.39.0/sycamoreEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Physical Strike",
	"pokemonType": "Grass",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Gogoat",
			"formName": "",
			"stats": {
				"hp": "695",
				"atk": "200",
				"def": "269",
				"spa": "180",
				"spd": "299",
				"spe": "225"
			},
			"statsLVL150": {
				"hp": "727",
				"atk": "210",
				"def": "283",
				"spa": "190",
				"spd": "315",
				"spe": "237"
			},
			"image": "./v/v2.39.0/0673.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Grass-Type Research Results",
				"description": "Lowers the target’s Grass Type Rebuff by 1 rank the first time the user’s attack move is successful each battle. Raises the Grass Type Rebuff of all allied sync pairs by 1 rank the first time the user’s attack move is successful each battle."
			},
			{
				"name": "Hit: HP Recovery 9",
				"description": "Restores the user’s HP when its attack move is successful."
			},
			{
				"name": "Group Grass Guard",
				"description": "Reduces the damage all allied sync pairs take when attacked by Grass-type moves."
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
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Knowledgeable",
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
				"name": "Dire Hit All +",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Let’s All Have a Battle!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by 4 stat ranks. Raises the Speed of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Gallop with Glee Grass Impact",
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

export const ROSA_MELOETTA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.39.0/rosaBG.png",
	"trainer": {
		"name": "Rosa ",
		"images": {
			"base": "./v/v2.39.0/rosa.png",
			"ex": "./v/v2.39.0/rosaEX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Psychic",
	"pokemonType2": "",
	"pokemonWeakness": "Bug",
	"pokemonWeakness2": "Flying",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Meloetta",
			"formName": "Aria Forme",
			"stats": {
				"hp": "679",
				"atk": "224",
				"def": "311",
				"spa": "254",
				"spd": "314",
				"spe": "359"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "236",
				"def": "327",
				"spa": "266",
				"spd": "330",
				"spe": "377"
			},
			"image": "./v/v2.39.0/0648.png"
		},
		{
			"name": "Meloetta",
			"formName": "Pirouette Forme",
			"stats": {
				"hp": "679",
				"atk": "224",
				"def": "311",
				"spa": "254",
				"spd": "314",
				"spe": "359"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "236",
				"def": "327",
				"spa": "266",
				"spd": "330",
				"spe": "377"
			},
			"image": "./v/v2.39.0/0648_1.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Relic Nostalgia",
				"description": "Switches between Aria Forme and Pirouette Forme when the user’s attack move or sync move which includes Relic Song in its name is successful. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by 1 rank when the user changes forms while it is on the field of play."
			},
			{
				"name": "Psychic Performance",
				"description": "Normal-type moves and sync moves become Psychic type. Raises the user’s Sp. Def by 1 stat rank when its move targeting an opponent is successful."
			},
			{
				"name": "Entrancing Melody",
				"description": "Lowers the target’s Psychic Type Rebuff by 1 rank the first time the user uses a move targeting the opponent each battle when it is in Aria Forme. Lowers the target’s Fighting Type Rebuff by 1 rank the first time the user uses a move targeting the opponent each battle when it is in Pirouette Forme."
			}
		],
		"passives2": [
			{
				"name": "Relic Nostalgia",
				"description": "Switches between Aria Forme and Pirouette Forme when the user’s attack move or sync move which includes Relic Song in its name is successful. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by 1 rank when the user changes forms while it is on the field of play."
			},
			{
				"name": "Fighting Performance",
				"description": "Normal-type moves and sync moves become Fighting type. Raises the user’s Defense by 1 stat rank when its move targeting an opponent is successful."
			},
			{
				"name": "Entrancing Melody",
				"description": "Lowers the target’s Psychic Type Rebuff by 1 rank the first time the user uses a move targeting the opponent each battle when it is in Aria Forme. Lowers the target’s Fighting Type Rebuff by 1 rank the first time the user uses a move targeting the opponent each battle when it is in Pirouette Forme."
			}
		],
		"passivesMaster": [
			{
				"name": "Unova Flag Bearer",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Unova theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			}
		],
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
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Champion",
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
				"name": "(b move) Relic Song of Wonder",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user is not in a pinch.(lb)Deactivation Condition: When the user is in a pinch.(lb)(lb)Never misses. Has a chance (30%) of putting the target to sleep. Raises the critical-hit rate of all allied sync pairs by 1 stat rank. Raises one of the following stats of all allied sync pairs by 2 stat ranks at random: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. (The same stat is raised for all allied sync pairs.)"
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
				"user": "Pokemon",
				"name": "Sing",
				"type": "Psychic",
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
				"user": "Trainer",
				"name": "Ode to Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by 2 stat ranks. Increases the Special Moves ↑ Next effect of all allied sync pairs by 2 ranks when the user is in Aria Forme. Increases the Physical Moves ↑ Next effect of all allied sync pairs by 2 ranks when the user is in Pirouette Forme."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Sepia Memories Relic Song",
				"type": "Psychic",
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
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "(b move) Relic Song of Wonder",
				"type": "Fighting",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user is not in a pinch.(lb)Deactivation Condition: When the user is in a pinch.(lb)(lb)Never misses. Has a chance (30%) of putting the target to sleep. Raises the critical-hit rate of all allied sync pairs by 1 stat rank. Raises one of the following stats of all allied sync pairs by 2 stat ranks at random: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. (The same stat is raised for all allied sync pairs.)"
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
				"user": "Pokemon2",
				"name": "Teeter Dance",
				"type": "Fighting",
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
				"name": "Ode to Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Speed of all allied sync pairs by 2 stat ranks. Increases the Special Moves ↑ Next effect of all allied sync pairs by 2 ranks when the user is in Aria Forme. Increases the Physical Moves ↑ Next effect of all allied sync pairs by 2 ranks when the user is in Pirouette Forme."
			}
		],
		"syncMove2": [
			{
				"user": "Pokemon2",
				"name": "Sepia Memories Relic Song",
				"type": "Fighting",
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
		"movesMAX": []
	}
}