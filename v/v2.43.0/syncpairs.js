export const VOLO_TOGEPI = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.43.0/volo_BG.png",
	"trainer": {
		"name": "Volo",
		"images": {
			"base": "./v/v2.43.0/volo.png",
			"ex": "./v/v2.43.0/volo_EX.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Tech",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Togepi",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "336",
				"def": "188",
				"spa": "336",
				"spd": "188",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "354",
				"def": "198",
				"spa": "354",
				"spd": "198",
				"spe": "282"
			},
			"image": "./v/v2.43.0/0175.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Piqued Curiosity",
				"description": "The user’s moves never miss. When the user uses Normal-type attack moves, those moves become Fairy-type moves. Turns the field of play’s zone into a Fairy Zone the first time the user’s Pokémon uses a status move each battle. (A Fairy Zone powers up Fairy-type attacks.)"
			},
			{
				"name": "Business Opportunity",
				"description": "Lowers one of the target’s following stats by one stat rank at random when the user’s attack move against it is successful: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. Charges the user’s move gauge by one when its attack move hits."
			},
			{
				"name": "Circle: Team S-Moves ↑ 3",
				"description": "Powers up the sync moves of all allied sync pairs when a circle applies to the allied field of play."
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
				"name": "Sinnoh",
				"description": "(Hisui)"
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
				"name": "Dazzling Gleam",
				"type": "Fairy",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "50-60",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
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
				"effect": "Sure Hit",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank. Applies Sinnoh Circle (Defensive) to the allied field of play. Sinnoh Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Sinnoh theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Masterful Metronome",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Uses one of several moves at random. (With some exceptions, the user will use a move other than Metronome.) Activates one of several additional effects at random. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "This Is an Investment!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Attack and Sp. Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Ruin Enthusiast Merchant Dazzling Gleam",
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

export const VOLO_GIBLE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Volo",
		"images": {
			"base": "./v/v2.43.0/volo.png",
			"ex": "./v/v2.43.0/volo.png"
		}
	},
	"rarity": "4+ex",
	"role": "Physical Strike",
	"exRole": "",
	"pokemonType": "Ground",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Gible",
			"formName": "",
			"stats": {
				"hp": "572",
				"atk": "361",
				"def": "117",
				"spa": "224",
				"spd": "117",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "598",
				"atk": "379",
				"def": "123",
				"spa": "236",
				"spd": "123",
				"spe": "256"
			},
			"image": "./v/v2.43.0/0443.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sand Shelter",
				"description": "Protects the user from damage from a sandstorm."
			},
			{
				"name": "Hunter’s Instinct",
				"description": "The more the target’s Speed is lowered, the more it powers up the user’s moves."
			},
			{
				"name": "Sand Blaster 5",
				"description": "Powers up the user’s sync move during a sandstorm."
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
				"name": "Sinnoh",
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
				"name": "Bulldoze",
				"type": "Ground",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "80-96",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Speed by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Defense",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense by two stat ranks."
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
				"user": "Trainer",
				"name": "Filled with Curiosity!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by two stat ranks. In addition, raises the user’s evasiveness by two stat ranks during a sandstorm."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Led By Curiosity Ground Impact",
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

export const JACQ_FARIGIRAF = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.43.0/jacq_BG.png",
	"trainer": {
		"name": "Jacq",
		"images": {
			"base": "./v/v2.43.0/jacq.png",
			"ex": "./v/v2.43.0/jacq_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Farigiraf",
			"formName": "",
			"stats": {
				"hp": "710",
				"atk": "312",
				"def": "172",
				"spa": "468",
				"spd": "172",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "742",
				"atk": "328",
				"def": "180",
				"spa": "492",
				"spd": "180",
				"spe": "328"
			},
			"image": "./v/v2.43.0/0981.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Jacq’s Lesson",
				"description": "Reduces MP by one for the user’s moves that have the Berry effect tag and raises its Sp. Atk and Sp. Def by two stat ranks when its attack move is successful."
			},
			{
				"name": "S-Move: Restore “Berry” MP 3",
				"description": "Restores three MP of the user’s moves that have the Berry effect tag after using its sync move."
			},
			{
				"name": "Strike: Stat ↑2 9",
				"description": "Raises one of the user’s following stats by two stat ranks at random when its attack move hits: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. If the move has the multistrike effect tag, raises one of the user’s following stats by two stat ranks at random for each hit: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
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
				"name": "Twin Beam",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "25-30",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Attacks twice in a row."
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
				"effect": "Berry",
				"description": "Removes all status conditions from an ally."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Experimental Stored Power",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user’s stats are raised by a total of ten stat ranks or more.(lb)Deactivation Condition: When the user’s stats are raised by a total of nine stat ranks or less.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. The more the user’s stats are raised, the greater the power of this attack. Removes all of the user’s stat increases."
			},
			{
				"user": "Trainer",
				"name": "There You Have It!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "If the user’s stats are raised, the amount of increase is doubled. Applies the Gradual Healing effect to the user. Applies the Supereffective ↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Laid-Back Biology Teacher Twin Beam",
				"type": "Psychic",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s stats are raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BARRY_HERACROSS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.43.0/barry_BG.png",
	"trainer": {
		"name": "Barry (Special Costume)",
		"images": {
			"base": "./v/v2.43.0/barry.png",
			"ex": "./v/v2.43.0/barry_EX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"exRole": "Tech",
	"pokemonType": "Bug",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Heracross",
			"formName": "",
			"stats": {
				"hp": "651",
				"atk": "400",
				"def": "134",
				"spa": "356",
				"spd": "147",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "681",
				"atk": "420",
				"def": "140",
				"spa": "374",
				"spd": "155",
				"spe": "351"
			},
			"image": "./v/v2.43.0/0214.png"
		},
		{
			"name": "Mega Heracross",
			"formName": "",
			"stats": {
				"hp": "651",
				"atk": "480",
				"def": "134",
				"spa": "356",
				"spd": "176",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "681",
				"atk": "504",
				"def": "140",
				"spa": "374",
				"spd": "186",
				"spe": "351"
			},
			"image": "./v/v2.43.0/0214-m.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Guaranteed Triple",
				"description": "Increases the number of times the user hits with a move that has the multistrike effect tag to three or more when that move is successful."
			},
			{
				"name": "Entry: Attack ↑ & Speed ↑ 2",
				"description": "Raises the user’s Attack and Speed by two stat ranks when it enters a battle."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
			}
		],
		"passives2": [
			{
				"name": "No Quarter",
				"description": "Maximizes the number of times the user hits with a move that has the multistrike effect tag when that move is successful."
			},
			{
				"name": "Entry: Attack ↑ & Speed ↑ 2",
				"description": "Raises the user’s Attack and Speed by two stat ranks when it enters a battle."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
			}
		],
		"passivesMaster": [],
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Special Costume",
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
				"name": "Pin Missile",
				"type": "Bug",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "16-19",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Attacks the target two to five times in a row."
			},
			{
				"user": "Pokemon",
				"name": "Close Combat",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "124-148",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Defense and Sp. Def by one stat rank."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Spiral Megahorn",
				"type": "Bug",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When any of the user’s attack moves hit a total of five times while this move is deactivated.(lb)Deactivation Condition: When this move is used.(lb)(lb)The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Going Ahead!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Attack by two stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies the Enduring effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Master’s Legacy Bug Impact",
				"type": "Bug",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Heracross until the end of battle."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SELENE_SCIZOR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.43.0/selene_BG.png",
	"trainer": {
		"name": "Selene (Special Costume)",
		"images": {
			"base": "./v/v2.43.0/selene.png",
			"ex": "./v/v2.43.0/selene_EX.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Physical Strike",
	"pokemonType": "Steel",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Scizor",
			"formName": "",
			"stats": {
				"hp": "670",
				"atk": "404",
				"def": "185",
				"spa": "200",
				"spd": "172",
				"spe": "267"
			},
			"statsLVL150": {
				"hp": "702",
				"atk": "426",
				"def": "195",
				"spa": "210",
				"spd": "180",
				"spe": "281"
			},
			"image": "./v/v2.43.0/0212.png"
		},
		{
			"name": "Mega Scizor",
			"formName": "",
			"stats": {
				"hp": "670",
				"atk": "404",
				"def": "222",
				"spa": "200",
				"spd": "206",
				"spe": "267"
			},
			"statsLVL150": {
				"hp": "702",
				"atk": "426",
				"def": "234",
				"spa": "210",
				"spd": "216",
				"spe": "281"
			},
			"image": "./v/v2.43.0/0212-m.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Offensive Defense 9",
				"description": "Raises the Defense of all allied sync pairs by one stat rank when the user’s attack move is successful."
			},
			{
				"name": "Metallic Acceleration 2",
				"description": "Quickly charges the move gauge when the zone is a Steel Zone."
			},
			{
				"name": "Metallic Power 2",
				"description": "Powers up the user’s moves when the zone is a Steel Zone."
			}
		],
		"passives2": [

			{
				"name": "Team Offensive Defense 9",
				"description": "Raises the Defense of all allied sync pairs by one stat rank when the user’s attack move is successful."
			},
			{
				"name": "Metallic Acceleration 3",
				"description": "Quickly charges the move gauge when the zone is a Steel Zone."
			},
			{
				"name": "Metallic Power 5",
				"description": "Powers up the user’s moves when the zone is a Steel Zone."
			}
		],
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
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Special Costume",
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
				"name": "Steel Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Steel Zone. (A Steel Zone powers up Steel-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Metallic Bullet Punch",
				"type": "Steel",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Quick Move, Sure Hit",
				"description": "Activation Condition: When the field of play’s zone turns into a Steel Zone.(lb)Deactivation Condition: When the field of play’s zone is no longer a Steel Zone.(lb)(lb)Never misses. Makes the target flinch. If the user’s Scizor has Mega Evolved, also restores one MP of its buddy move."
			},
			{
				"user": "Trainer",
				"name": "Loading to Full Power!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Attack and critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Crushing Red Justice Steel Impact",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Scizor until the end of battle."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}