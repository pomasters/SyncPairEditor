export const ADAMAN_LEAFEON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.33.0/adamanBG.png",
	"trainer": {
		"name": "Adaman",
		"images": {
			"base": "./v/v2.33.0/adaman.png",
			"ex": "./v/v2.33.0/adamanEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Grass",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Leafeon",
			"formName": "",
			"stats": {
				"hp": "582",
				"atk": "448",
				"def": "209",
				"spa": "336",
				"spd": "190",
				"spe": "314"
			},
			"statsLVL150": {
				"hp": "608",
				"atk": "472",
				"def": "219",
				"spa": "354",
				"spd": "200",
				"spe": "330"
			},
			"image": "./v/v2.33.0/0470.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Time Flows over Hisui",
				"description": "Makes the weather sunny the first time the user enters a battle each battle. Makes the weather sunny after using the user’s sync move. Powers up the user’s moves when the weather is sunny."
			},
			{
				"name": "Clutch Critical",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves, sync move, or max moves."
			},
			{
				"name": "Critical Freebie 9",
				"description": "Applies the Free Move Next effect to the user when it lands a critical hit."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Sinnoh Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Sinnoh theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Grass",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": "(Hisui)"
			},
			{
				"name": "Nature Lover",
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
				"name": "Leaf Blade",
				"type": "Grass",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "80-96",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
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
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Razor Leaf",
				"type": "Grass",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Critical hits land more easily. Lowers the target’s Defense by 1 stat rank. Lowers the target’s Grass Type Rebuff by 1 rank. In addition, lowers the target’s Defense by 1 stat rank when the weather is sunny."
			},
			{
				"user": "Trainer",
				"name": "No Time Like the Present!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 6 stat ranks. Raises the user’s Defense by 4 stat ranks. Reduces the user’s sync move countdown by 1 when the weather is sunny."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Accelerating Time Razor Leaf",
				"type": "Grass",
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

export const ADAMAN_VAPOREON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Adaman",
		"images": {
			"base": "./v/v2.33.0/adaman.png",
			"ex": "./v/v2.33.0/adaman.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Vaporeon",
			"formName": "",
			"stats": {
				"hp": "540",
				"atk": "176",
				"def": "222",
				"spa": "210",
				"spd": "232",
				"spe": "243"
			},
			"statsLVL150": {
				"hp": "564",
				"atk": "184",
				"def": "234",
				"spa": "220",
				"spd": "244",
				"spe": "255"
			},
			"image": "./v/v2.33.0/0134.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Endurance",
				"description": "When the user enters battle with full HP, applies the Enduring effect to it."
			},
			{
				"name": "Rain Gear 2",
				"description": "Reduces damage when the user is hit by an attack move while the weather is rainy."
			},
			{
				"name": "Revenge Boost 2",
				"description": "Has a chance (30%) of charging the user’s move gauge by one when the user is hit by an attack move."
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
				"description": "(Hisui)"
			},
			{
				"name": "Nature Lover",
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
				"name": "Bubble Beam",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "49-58",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Speed by 1 stat rank."
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
				"description": "Raises the Defense of all allied sync pairs by 2 stat ranks."
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
				"name": "A Sight to See!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s Sp. Def by 2 stat ranks. Raises the Sp. Atk of all allied sync pairs by 2 stat ranks. Applies the Gradual Healing effect to the user when the weather is rainy."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Come On Already Water Beam",
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

export const IRIDA_GLACEON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.33.0/iridaBG.png",
	"trainer": {
		"name": "Irida",
		"images": {
			"base": "./v/v2.33.0/irida.png",
			"ex": "./v/v2.33.0/iridaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Ice",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Glaceon",
			"formName": "",
			"stats": {
				"hp": "606",
				"atk": "312",
				"def": "206",
				"spa": "448",
				"spd": "206",
				"spe": "271"
			},
			"statsLVL150": {
				"hp": "634",
				"atk": "328",
				"def": "216",
				"spa": "472",
				"spd": "216",
				"spe": "285"
			},
			"image": "./v/v2.33.0/0471.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Space Spreads over Hisui",
				"description": "Protects all allied sync pairs from damage from a hailstorm. Powers up the moves of all allied sync pairs during a hailstorm. Quickly charges the move gauge during a hailstorm."
			},
			{
				"name": "Watch for Ice",
				"description": "Causes a hailstorm when the user turns the field of play’s zone into an Ice Zone."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Sinnoh Spirit",
				"description": "Powers up the special attack moves of all allied sync pairs by 20%. Reduces special attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Sinnoh theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
		"themes": [
			{
				"name": "Ice",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": "(Hisui)"
			},
			{
				"name": "Nature Lover",
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
				"name": "Icy Wind",
				"type": "Ice",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "92-110",
				"accuracy": "95",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Speed by 1 stat rank."
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
				"name": "(b move) B Ice Beam",
				"type": "Ice",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Activation Condition: When a hailstorm is caused.(lb)Deactivation Condition: When the weather condition is no longer a hailstorm.(lb)(lb)Never misses. Has a chance (10%) of leaving the target frozen. Lowers the target’s Sp. Def by 4 stat ranks. Applies the Move Gauge Acceleration effect to the allied field of play. Applies the Free Move Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "Chilled to Your Core!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Applies the Gradual Healing effect to all allied sync pairs during a hailstorm."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Great Wide World Ice Beam",
				"type": "Ice",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases during a hailstorm."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const EUSINE_SUICUNE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.33.0/eusineBG.png",
	"trainer": {
		"name": "Eusine",
		"images": {
			"base": "./v/v2.33.0/eusine.png",
			"ex": "./v/v2.33.0/eusineEX.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "(shiny) Suicune",
			"formName": "",
			"stats": {
				"hp": "687",
				"atk": "268",
				"def": "151",
				"spa": "288",
				"spd": "151",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "719",
				"atk": "282",
				"def": "159",
				"spa": "302",
				"spd": "159",
				"spe": "355"
			},
			"image": "./v/v2.33.0/0245.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Recharging Strike 9",
				"description": "Charges the user’s move gauge by one when its attack move hits. If the move has the multistrike effect tag, charges the user’s move gauge by one for each hit."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
			},
			{
				"name": "Trap and Buff 5",
				"description": "Powers up the user’s moves and sync move when the target is trapped."
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
				"name": "Cape",
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
				"user": "Pokemon",
				"name": "Blizzard",
				"type": "Ice",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "126-151",
				"accuracy": "70",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses during a hailstorm. Has a chance (10%) of leaving the target frozen."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Surf",
				"type": "Water",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "160-192",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any moves twice.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Has a chance (20%) of making the target flinch. The power and chance of applying additional effects of this move are not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "The Chase Continues!",
				"type": "Trainer",
				"gauge": "3",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 6 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Applies the Condition Nullification effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dignified Dash Hydro Pump",
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

export const SILVER_SNEASEL = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.33.0/sssilverBG.png",
	"trainer": {
		"name": "Sygna Suit Silver",
		"images": {
			"base": "./v/v2.33.0/sssilver.png",
			"ex": "./v/v2.33.0/sssilverEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Sneasel",
			"formName": "",
			"stats": {
				"hp": "599",
				"atk": "404",
				"def": "176",
				"spa": "292",
				"spd": "190",
				"spe": "400"
			},
			"statsLVL150": {
				"hp": "627",
				"atk": "426",
				"def": "184",
				"spa": "308",
				"spd": "200",
				"spe": "420"
			},
			"image": "./v/v2.33.0/0215.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Adrenaline 2",
				"description": "Reduces the sync move countdown by 2 the first time the user’s sync move is used each battle."
			},
			{
				"name": "Tripping Strike 9",
				"description": "Lowers the target’s Speed by 1 stat rank when the user’s attack move against it hits. If the move has the multistrike effect tag, lowers the target’s Speed by 1 stat rank for each hit."
			},
			{
				"name": "Inertia",
				"description": "The more user’s Speed is raised, the more it powers up the user’s sync move."
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
				"name": "Johto",
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
				"name": "Triple Axel",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "20-24",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Attacks up to three times in a row. This attack’s power increases for each hit. (The second attack is twice as powerful as the first attack, and the third attack is three times as powerful as the first attack.) After using this move, the attack’s power returns to normal."
			},
			{
				"user": "Trainer",
				"name": "X Speed +",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Speed by 3 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "(b move) B Triple Axel",
				"type": "Ice",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "40-48",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Activation Condition: When the user’s HP is full.(lb)Deactivation Condition: When the user’s HP is not full.(lb)(lb)Attacks up to three times in a row. This attack’s power increases for each hit. (The second attack is twice as powerful as the first attack, and the third attack is three times as powerful as the first attack.) Reduces the user’s sync move countdown by 1 for each hit. Raises the user’s critical-hit rate by 1 stat rank for each hit. After using this move, the attack’s power returns to normal."
			},
			{
				"user": "Trainer",
				"name": "I Won’t Leave You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Attack by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Strong for Your Sake Triple Axel",
				"type": "Ice",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Speed has been lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}