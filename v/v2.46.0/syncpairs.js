export const GARDENIA_DHELMISE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.46.0/gardenia_BG.png",
	"trainer": {
		"name": "Gardenia (Summer 2024)",
		"images": {
			"base": "./v/v2.46.0/gardenia.png",
			"ex": "./v/v2.46.0/gardenia_EX.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Ice",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Dhelmise",
			"formName": "",
			"stats": {
				"hp": "684",
				"atk": "292",
				"def": "175",
				"spa": "390",
				"spd": "161",
				"spe": "281"
			},
			"statsLVL150": {
				"hp": "716",
				"atk": "308",
				"def": "183",
				"spa": "410",
				"spd": "169",
				"spe": "295"
			},
			"image": "./v/v2.46.0/0781.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Grooow Strong!",
				"description": "Grants all of the following effects when the user activates a weather, terrain, or zone effect: Raises one of the following stats of all allied sync pairs by two stat ranks at random: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. (The same stat is raised for all allied sync pairs.) Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"name": "Status P-Move on Opp: Team ↓ 9",
				"description": "When a status move used by the user’s Pokémon lowers an opponent’s stat, lowers the same stat for all opposing sync pairs instead."
			},
			{
				"name": "1st Use Status P-Move: Steel Zone",
				"description": "Turns the field of play’s zone into a Steel Zone the first time the user’s Pokémon uses a status move each battle. (A Steel Zone powers up Steel-type attacks.)"
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
				"name": "Sinnoh",
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
				"name": "Nature Lover",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Flash Cannon",
				"type": "Steel",
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
				"description": "Lowers the target’s Sp. Def by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Summer Hues Shadow Ball",
				"type": "Ghost",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "180-216",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Attack and Sp. Atk by one stat rank. Has a chance (20%) of lowering the target’s Sp. Def by one stat rank. Turns the field of play’s zone into a Ghost Zone the first time this attack move is successful each battle. (A Ghost Zone powers up Ghost-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "I-I’m Not Afraid!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Sure Hit",
				"description": "Turns the field of play’s zone into a Ghost Zone. (A Ghost Zone powers up Ghost-type attacks.) Raises an ally’s Sp. Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Courageous Strides Ghost Beam",
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

export const GLADION_WEAVILE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Gladion",
		"images": {
			"base": "./v/v2.46.0/gladion.png",
			"ex": "./v/v2.46.0/gladion.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Weavile",
			"formName": "",
			"stats": {
				"hp": "652",
				"atk": "390",
				"def": "161",
				"spa": "370",
				"spd": "176",
				"spe": "350"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "410",
				"def": "169",
				"spa": "390",
				"spd": "184",
				"spe": "368"
			},
			"image": "./v/v2.46.0/0461.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Arctic Arrival",
				"description": "Turns the field of play’s zone into an Ice Zone the first time the user enters a battle each battle. (An Ice Zone powers up Ice-type attacks.)"
			},
			{
				"name": "Use Move When Ice Zone: Team HP Recovery 9",
				"description": "Restores the HP of all allied sync pairs when the user uses a move while the zone is an Ice Zone."
			},
			{
				"name": "Unfortunate Strike 4",
				"description": "Has a chance (50%) of lowering one of the target’s following stats by one stat rank at random when the user’s attack move against it hits: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. If the move has the multistrike effect tag, has a chance (50%) of lowering one of the target’s following stats by one stat rank at random for each hit: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
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
				"description": "Lowers the target’s Speed by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Hah... Here We Go!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Defense and Sp. Def by two stat ranks. Applies the Gradual Healing effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "See More of the World Ice Impact",
				"type": "Ice",
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

export const HUGH_UNFEZANT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Hugh",
		"images": {
			"base": "./v/v2.46.0/hugh.png",
			"ex": "./v/v2.46.0/hugh.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "",
	"pokemonType": "Flying",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Unfezant",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "312",
				"def": "184",
				"spa": "404",
				"spd": "172",
				"spe": "374"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "328",
				"def": "194",
				"spa": "426",
				"spd": "180",
				"spe": "394"
			},
			"image": "./v/v2.46.0/0521.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Head Start 1",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle."
			},
			{
				"name": "Use Status P-Move: Team Sp. Atk ↓ 9",
				"description": "Lowers the Sp. Atk of all opposing sync pairs by one stat rank when the user’s Pokémon uses a status move."
			},
			{
				"name": "Speed Leech 9",
				"description": "Lowers the target’s Speed by one stat rank and raises the user’s Speed by the same amount when the user’s attack move against the target is successful."
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
				"name": "Let’s Speed It Up!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s accuracy and critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Crush ’Em All Flying Beam",
				"type": "Flying",
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

export const MARNIE_SCRAFTY = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Marnie",
		"images": {
			"base": "./v/v2.46.0/marnie.png",
			"ex": "./v/v2.46.0/marnie.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Scrafty",
			"formName": "",
			"stats": {
				"hp": "648",
				"atk": "390",
				"def": "185",
				"spa": "424",
				"spd": "178",
				"spe": "309"
			},
			"statsLVL150": {
				"hp": "678",
				"atk": "410",
				"def": "195",
				"spa": "446",
				"spd": "186",
				"spe": "325"
			},
			"image": "./v/v2.46.0/0560.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Debut: Dark Zone",
				"description": "Turns the field of play’s zone into a Dark Zone the first time the user enters a battle each battle. (A Dark Zone powers up Dark-type attacks.)"
			},
			{
				"name": "On a Roll 9",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves."
			},
			{
				"name": "Trip Up 9",
				"description": "Lowers the target’s Speed by one stat rank when the user’s attack move against it is successful."
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
				"name": "Crunch",
				"type": "Dark",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of lowering the target’s Defense by one stat rank."
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
				"user": "Pokemon",
				"name": "Focus Blast",
				"type": "Fighting",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "142-170",
				"accuracy": "70",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "No Way We’re Losin’!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Attack and Sp. Atk by two stat ranks. Raises an ally’s critical-hit rate by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "We Aren’t Givin’ Up Dark Impact",
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
		"syncMove2": [],
		"movesMAX": []
	}
}

export const NEMONA_LYCANROC = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Nemona",
		"images": {
			"base": "./v/v2.46.0/nemona.png",
			"ex": "./v/v2.46.0/nemona.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "",
	"pokemonType": "Rock",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Lycanroc",
			"formName": "Midday Form",
			"stats": {
				"hp": "662",
				"atk": "390",
				"def": "173",
				"spa": "244",
				"spd": "173",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "694",
				"atk": "410",
				"def": "181",
				"spa": "256",
				"spd": "181",
				"spe": "355"
			},
			"image": "./v/v2.46.0/0745.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Debut: Rock Zone",
				"description": "Turns the field of play’s zone into a Rock Zone the first time the user enters a battle each battle. (A Rock Zone powers up Rock-type attacks.)"
			},
			{
				"name": "Lithic Acceleration 3",
				"description": "Quickly charges the move gauge when the zone is a Rock Zone."
			},
			{
				"name": "Armor Leech 9",
				"description": "Lowers the target’s Defense by one stat rank and raises the user’s Defense by the same amount when the user’s attack move against the target is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
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
				"name": "Champion",
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
				"name": "Stone Edge",
				"type": "Rock",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "80",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
			},
			{
				"user": "Pokemon",
				"name": "Stealth Rock",
				"type": "Rock",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Opponents’ side",
				"effect": "-",
				"description": "Applies Rock Damage Field to the opponents’ field of play. (Rock Damage Field: The sync pairs will take Rock-type damage whenever they take an action.)"
			},
			{
				"user": "Pokemon",
				"name": "Accelerock",
				"type": "Rock",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "75-90",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Quick Move",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Clinch the Win!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "Sure Hit",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises an ally’s Attack by two stat ranks. Raises an ally’s critical-hit rate by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Happy to Go All Out Rock Impact",
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

export const WALLY_ALTARIA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Wally",
		"images": {
			"base": "./v/v2.46.0/wally.png",
			"ex": "./v/v2.46.0/wally.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Altaria",
			"formName": "",
			"stats": {
				"hp": "658",
				"atk": "424",
				"def": "172",
				"spa": "424",
				"spd": "188",
				"spe": "350"
			},
			"statsLVL150": {
				"hp": "688",
				"atk": "446",
				"def": "180",
				"spa": "446",
				"spd": "198",
				"spe": "368"
			},
			"image": "./v/v2.46.0/0334.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Head Start 1",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle."
			},
			{
				"name": "Hostile Environment 3",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
			},
			{
				"name": "Hit Paralyzed Opp: Defense ↓ & Sp. Def ↓ 9",
				"description": "Lowers the target’s Defense and Sp. Def by one stat rank when the user’s attack move is successful against a paralyzed opponent."
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
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
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
				"name": "Dragon Claw",
				"type": "Dragon",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "50-60",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
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
				"name": "Please Watch Me!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Attack and Sp. Atk by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Much, Much Stronger Dragon Impact",
				"type": "Dragon",
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

export const ACEROLA_JELLICENT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.46.0/acerola_BG.png",
	"trainer": {
		"name": "Acerola (Summer 2024)",
		"images": {
			"base": "./v/v2.46.0/acerola.png",
			"ex": "./v/v2.46.0/acerola_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Jellicent",
			"formName": "",
			"stats": {
				"hp": "681",
				"atk": "156",
				"def": "300",
				"spa": "190",
				"spd": "311",
				"spe": "291"
			},
			"statsLVL150": {
				"hp": "713",
				"atk": "164",
				"def": "316",
				"spa": "200",
				"spd": "327",
				"spe": "307"
			},
			"image": "./v/v2.46.0/0593.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Touch at Your Own Peril",
				"description": "Lowers the Attack and Sp. Atk of an opponent that attacked the user by two stat ranks when the user is hit by an attack move."
			},
			{
				"name": "“Heals” Move: Team Gradual Healing",
				"description": "Applies the Gradual Healing effect to all allied sync pairs when the user uses a move that has the heals effect tag."
			},
			{
				"name": "Team Fist Bump 9",
				"description": "Restores the HP of all allied sync pairs when the user’s attack move is successful."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Trial Giver",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
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
				"name": "Recover",
				"type": "Normal",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Shoreline Ominous Wind",
				"type": "Ghost",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s HP is at 80% or more.(lb)Deactivation Condition: When the user’s HP is less than 80%.(lb)(lb)Raises the Attack, Defense, Sp. Atk, Sp. Def, and Speed of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Are You Afraid?",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "Sure Hit",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank. Raises the user’s Water Type Rebuff and Ghost Type Rebuff by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Full-Moon Ocean Invite Ghost Beam",
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

export const KABU_TORKOAL = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Kabu",
		"images": {
			"base": "./v/v2.46.0/kabu.png",
			"ex": "./v/v2.46.0/kabu.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Fire",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Torkoal",
			"formName": "",
			"stats": {
				"hp": "609",
				"atk": "146",
				"def": "247",
				"spa": "156",
				"spd": "222",
				"spe": "243"
			},
			"statsLVL150": {
				"hp": "637",
				"atk": "154",
				"def": "259",
				"spa": "164",
				"spd": "234",
				"spe": "255"
			},
			"image": "./v/v2.46.0/0324.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit Inter Opp: HP Recovery 9",
				"description": "Restores the user’s HP when its attack move is successful against a flinching, confused, or trapped opponent."
			},
			{
				"name": "Team Pinpoint Entry 1",
				"description": "Raises the accuracy of all allied sync pairs by one stat rank when the user enters a battle."
			},
			{
				"name": "Unbending",
				"description": "Defense cannot be lowered."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Passionate Spirit",
				"description": ""
			},
			{
				"name": "Veteran Trainer",
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
				"user": "Trainer",
				"name": "Hup, Two!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Atk of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by one stat rank. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Burn Upwards, Aim Higher Fire Beam",
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
		"movesMAX": []
	}
}

export const KLARA_SLOWBRO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.46.0/klara_BG.png",
	"trainer": {
		"name": "Klara",
		"images": {
			"base": "./v/v2.46.0/klara.png",
			"ex": "./v/v2.46.0/klara_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Special Strike",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Slowbro",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "424",
				"def": "185",
				"spa": "424",
				"spd": "163",
				"spe": "282"
			},
			"statsLVL150": {
				"hp": "691",
				"atk": "446",
				"def": "195",
				"spa": "446",
				"spd": "171",
				"spe": "296"
			},
			"image": "./v/v2.46.0/0080.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Full-Course Feast of Venom",
				"description": "Increases the user’s Physical Moves ↑ Next effect by one rank when it successfully attacks with Poison Jab. Increases the user’s Special Moves ↑ Next effect by one rank when it successfully attacks with Sludge Bomb."
			},
			{
				"name": "Physical Max Move: Physical Boost 3",
				"description": "Increases the user’s Physical Moves ↑ Next effect by three ranks after using its physical max move."
			},
			{
				"name": "Special Max Move: Special Boost 3",
				"description": "Increases the user’s Special Moves ↑ Next effect by three ranks after using its special max move."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Grown Woman",
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
				"name": "Poison Jab",
				"type": "Poison",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "92-110",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Poisonous Shell Side Arm",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "240-288",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user’s Physical Moves ↑ Next effect or Special Moves ↑ Next effect is increased.(lb)Deactivation Condition: When the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect are not increased.(lb)(lb)This move’s category changes to Physical when the user’s Physical Moves ↑ Next effect rank is higher than its Special Moves ↑ Next effect rank. Conversely, this move’s category changes to Special when the user’s Special Moves ↑ Next effect rank is equal to or higher than its Physical Moves ↑ Next effect rank. The category for this move’s corresponding max move will not change from Special. Never misses. Leaves the target poisoned. In addition, grants the following two effects when this move’s category is Physical: Lowers the target’s Attack and Defense by two stat ranks. Restores the user’s HP. In addition, grants the following two effects when this move’s category is Special: Lowers the target’s Sp. Atk and Sp. Def by two stat ranks. Applies the Free Move Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "I’m Gettin’ Better!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Colorful, Caring, and Charismatic Poison Beam",
				"type": "Poison",
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
				"description": "Raises the Sp. Atk of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Max Ooze",
				"type": "Poison",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Sp. Atk of all allied sync pairs by two stat ranks."
			},
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
				"description": "Raises the Sp. Atk of all allied sync pairs by two stat ranks."
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

export const AVERY_SLOWKING = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.46.0/avery_BG.png",
	"trainer": {
		"name": "Avery",
		"images": {
			"base": "./v/v2.46.0/avery.png",
			"ex": "./v/v2.46.0/avery_EX.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Tech",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Slowking",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "312",
				"def": "163",
				"spa": "448",
				"spd": "185",
				"spe": "282"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "328",
				"def": "171",
				"spa": "472",
				"spd": "195",
				"spe": "296"
			},
			"image": "./v/v2.46.0/0199.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Set Allied/Entire Field Effect: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when it activates a field effect on either the entire field of play or the allied field of play."
			},
			{
				"name": "Hail: Physical DR 3",
				"description": "Reduces physical attack move damage taken by allies during a hailstorm."
			},
			{
				"name": "Team Hail Immunity",
				"description": "Protects all allied sync pairs from damage from a hailstorm."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Glasses",
				"description": ""
			},
			{
				"name": "Supernatural",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Eerie Spell",
				"type": "Psychic",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "160-192",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Galar Analysis",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "Sure Hit",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank. Applies Galar Circle (Special) to the allied field of play. Galar Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Galar theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Classy Chilly Reception",
				"type": "Ice",
				"gauge": "2",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When a circle is applied to the allied field of play.(lb)Deactivation Condition: When there are no longer any circles applied to the allied field of play.(lb)(lb)Never misses. Lowers the Defense, Sp. Def, and evasiveness of all opposing sync pairs by three stat ranks. Causes a hailstorm. Applies the No Stat Increases effect to the opponents’ field of play. Applies the Stat Reduction Defense effect to the allied field of play. Returns lowered stats of all allied sync pairs to normal."
			},
			{
				"user": "Trainer",
				"name": "ESP!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp. Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks. Applies the Gradual Healing effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Elegant Psychic Beam",
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
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Mindstorm",
				"type": "Psychic",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Psychic Terrain."
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

export const GRETA_BRELOOM = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.46.0/greta_BG.png",
	"trainer": {
		"name": "Greta",
		"images": {
			"base": "./v/v2.46.0/greta.png",
			"ex": "./v/v2.46.0/greta_EX.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "Field",
	"pokemonType": "Grass",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Breloom",
			"formName": "",
			"stats": {
				"hp": "651",
				"atk": "458",
				"def": "172",
				"spa": "292",
				"spd": "172",
				"spe": "356"
			},
			"statsLVL150": {
				"hp": "681",
				"atk": "482",
				"def": "180",
				"spa": "308",
				"spd": "180",
				"spe": "374"
			},
			"image": "./v/v2.46.0/0286.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Max Move: Team Free Move Next",
				"description": "Applies the Free Move Next effect to all allied sync pairs after using the user’s max move."
			},
			{
				"name": "Use Status P-Move: Stat ↑ 9",
				"description": "Raises one of the user’s following stats by one stat rank at random when its Pokémon uses a status move: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			},
			{
				"name": "Turbo Turf 2",
				"description": "Quickly charges the move gauge when the terrain is Grassy Terrain."
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
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
				"description": ""
			},
			{
				"name": "Body Builder",
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
				"name": "Bullet Seed",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "15-18",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Multistrike",
				"description": "Attacks the target two to five times in a row."
			},
			{
				"user": "Pokemon",
				"name": "Spore",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Deep Sleep Spore",
				"type": "Grass",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Lowers the Speed of all opposing sync pairs by three stat ranks. Puts all opposing sync pairs to sleep. Reduces the user’s sync move countdown by one. Raises the Speed of all allied sync pairs by three stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Be Ready!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Mind-Skill-Body Mastery Grass Impact",
				"type": "Grass",
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