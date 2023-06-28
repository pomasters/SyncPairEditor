export const TATE_JIRACHI = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.34.0/tateBG.png",
	"trainer": {
		"name": "Tate (Summer 2023)",
		"images": {
			"base": "./v/v2.34.0/tate.png",
			"ex": "./v/v2.34.0/tateEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Steel",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Jirachi",
			"formName": "",
			"stats": {
				"hp": "664",
				"atk": "424",
				"def": "185",
				"spa": "424",
				"spd": "185",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "696",
				"atk": "446",
				"def": "195",
				"spa": "446",
				"spd": "195",
				"spe": "354"
			},
			"image": "./v/v2.34.0/0385.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "2 P-Moves: Doom Desire",
				"description": "Every two times the user’s Pokémon uses a move, deals additional damage to the opponent targeted by the second move. (Type: Steel, Category: Special) This additional damage is not affected by some status changes."
			},
			{
				"name": "Use Doom Desire: Team Same Stat ↑2",
				"description": "Raises one of the following stats of all allied sync pairs by 2 stat ranks at random when the user uses 2 P-Moves: Doom Desire: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. (The same stat is raised for all allied sync pairs.)"
			},
			{
				"name": "P-Move on Opp: Sp. Def ↓2 9",
				"description": "Lowers the target’s Sp. Def by 2 stat ranks when the user’s Pokémon uses a move targeting that opponent."
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
				"name": "Hoenn",
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
				"name": "Flash Cannon",
				"type": "Steel",
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
				"name": "Charm",
				"type": "Fairy",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Attack by 2 stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Wish upon a Star!",
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
				"name": "Friends Forever Steel Beam",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
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

export const IRIDA_FLAREON = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Irida",
		"images": {
			"base": "./v/v2.34.0/irida.png",
			"ex": "./v/v2.34.0/irida.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Water",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Flareon",
			"formName": "",
			"stats": {
				"hp": "567",
				"atk": "356",
				"def": "156",
				"spa": "268",
				"spd": "164",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "593",
				"atk": "374",
				"def": "164",
				"spa": "282",
				"spd": "172",
				"spe": "282"
			},
			"image": "./v/v2.34.0/0136.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Standfast 9",
				"description": "Reduces recoil damage received from using moves that have the recoil effect tag."
			},
			{
				"name": "Aggravation 2",
				"description": "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
			},
			{
				"name": "Hostile Environment 2",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
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
				"name": "Fire Fang",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "47-56",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of making the target flinch. Has a chance (10%) of leaving the target burned."
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
				"description": "Raises the user’s Attack by 2 stat ranks."
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
				"user": "Trainer",
				"name": "Vast World!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Def by 1 stat rank. Raises the user’s critical-hit rate by 2 stat ranks. Applies the Gradual Healing effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Can’t Stand the Swelter Fire Impact",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
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

export const LIZA_CELESTEELA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.34.0/lizaBG.png",
	"trainer": {
		"name": "Liza (Summer 2023)",
		"images": {
			"base": "./v/v2.34.0/liza.png",
			"ex": "./v/v2.34.0/lizaEX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"pokemonType": "Flying",
	"pokemonWeakness": "Electric",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Celesteela",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "409",
				"def": "161",
				"spa": "409",
				"spd": "159",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "431",
				"def": "169",
				"spa": "431",
				"spd": "167",
				"spe": "297"
			},
			"image": "./v/v2.34.0/0797.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Flying Shift",
				"description": "Normal-type moves become Flying-type moves."
			},
			{
				"name": "Shielding Infliction+ 9",
				"description": "Raises the user’s Defense by 2 stat ranks when its Pokémon uses a status move."
			},
			{
				"name": "Infliction Freebie 9",
				"description": "Applies the Free Move Next effect to the user when its Pokémon uses a status move."
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
				"name": "Hoenn",
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
				"name": "Giga Impact",
				"type": "Flying",
				"gauge": "4",
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
				"name": "Iron Defense",
				"type": "Steel",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Protect",
				"type": "Flying",
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
				"name": "Into the Night Sky!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s accuracy by 1 stat rank. Raises the user’s critical-hit rate by 3 stat ranks. When the user’s Defense is raised, raises the user’s Attack by the same amount."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Forever Friends Flying Impact",
				"type": "Flying",
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

export const ROSE_COPPERAJAH = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.34.0/roseBG.png",
	"trainer": {
		"name": "Rose",
		"images": {
			"base": "./v/v2.34.0/rose.png",
			"ex": "./v/v2.34.0/roseEX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"pokemonType": "Steel",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Copperajah",
			"formName": "",
			"stats": {
				"hp": "708",
				"atk": "370",
				"def": "132",
				"spa": "283",
				"spd": "132",
				"spe": "239"
			},
			"statsLVL150": {
				"hp": "742",
				"atk": "390",
				"def": "138",
				"spa": "297",
				"spd": "138",
				"spe": "251"
			},
			"image": "./v/v2.34.0/0879.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "P-Moves & Max Moves Expansion",
				"description": "When a move used by the user’s Pokémon that targets itself or an ally is successful, the target becomes all allied sync pairs. When a move used by the user’s Pokémon that targets an opponent is successful, the target becomes all opposing sync pairs. When the user’s max move attacks an opponent, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves and max moves affected by this passive skill are not lowered even if there are multiple targets."
			},
			{
				"name": "Hit the Gas 5",
				"description": "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves."
			},
			{
				"name": "Rose’s Results",
				"description": "Powers up the user’s Steel-type moves. The user’s moves never miss."
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
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "138-165",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Pokemon",
				"name": "Stone Edge",
				"type": "Rock",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "80",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
			},
			{
				"user": "Pokemon",
				"name": "High Horsepower",
				"type": "Ground",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "159-190",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Actions, Not Words!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by 6 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Increases the user’s Physical Moves ↑ Next effect by 1 rank. Lowers the user’s Speed by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Millennium from Now Steel Impact",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max G-Max Steelsurge",
				"type": "Steel",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Applies the Steel Damage Field effect to the opponents’ field of play. (Steel Damage Field: The sync pairs will take Steel-type damage whenever they take an action.)"
			},
			{
				"user": "Pokemon",
				"name": "Max Max Rockfall",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Causes a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "Max Max Quake",
				"type": "Ground",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
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

export const OLEANA_GARBODOR = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.34.0/oleanaBG.png",
	"trainer": {
		"name": "Oleana",
		"images": {
			"base": "./v/v2.34.0/oleana.png",
			"ex": "./v/v2.34.0/oleanaEX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Garbodor",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "336",
				"def": "174",
				"spa": "268",
				"spd": "174",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "354",
				"def": "182",
				"spa": "282",
				"spd": "182",
				"spe": "302"
			},
			"image": "./v/v2.34.0/0569.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Status P-Move on Poisoned Opp: Stat ↓×3",
				"description": "When a poisoned or badly poisoned opponent’s stat is lowered by a status move used by the user’s Pokémon, it is lowered by three times the stat ranks."
			},
			{
				"name": "Max Move Hit: Team Poison Rebuff ↓ 1",
				"description": "Lowers the Poison Type Rebuff of all opposing sync pairs by 1 rank when the user’s max move targeting an opponent is successful."
			},
			{
				"name": "Ally Poisons: Badly Poisoned",
				"description": "Except in certain circumstances, when an ally leaves an opponent poisoned, leaves it badly poisoned instead."
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
				"name": "Villain",
				"description": ""
			},
			{
				"name": "Researcher",
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
				"name": "Gunk Shot",
				"type": "Poison",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "194-232",
				"accuracy": "80",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user": "Trainer",
				"name": "Move Gauge Boost",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Charges the user’s move gauge by 3."
			},
			{
				"user": "Pokemon",
				"name": "Venom Drench",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Attack, Sp. Atk, and Speed by 1 stat rank when the target is poisoned or badly poisoned. Fails when the target is not poisoned or badly poisoned."
			},
			{
				"user": "Trainer",
				"name": "Please Leave!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. Raises the user’s Attack by 4 stat ranks. Raises the user’s accuracy by 2 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Still Good with It Poison Impact",
				"type": "Poison",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s stats are lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max G-Max Malodor",
				"type": "Poison",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves all opposing sync pairs poisoned."
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
				"name": "Max Max Guard",
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

export const KIAWE_ARCANINE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Kiawe",
		"images": {
			"base": "./v/v2.34.0/kiawe.png",
			"ex": "./v/v2.34.0/kiawe.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Arcanine",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "380",
				"def": "176",
				"spa": "380",
				"spd": "176",
				"spe": "356"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "400",
				"def": "184",
				"spa": "400",
				"spd": "184",
				"spe": "374"
			},
			"image": "./v/v2.34.0/0059.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Extend Range",
				"description": "When a move used by the user’s Pokémon that targets itself or an ally is successful, the target becomes all allied sync pairs. When a move used by the user’s Pokémon that targets an opponent is successful, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves affected by this passive skill are not lowered even if there are multiple targets."
			},
			{
				"name": "Hit Burned Opp: Sp. Atk ↓ 9",
				"description": "Lowers the target’s Sp. Atk by 1 stat rank when the user’s attack move is successful against a burned opponent."
			},
			{
				"name": "Hit Trapped Opp: Sp. Def ↓ 9",
				"description": "Lowers the target’s Sp. Def by 1 stat rank when the user’s attack move is successful against targets that are trapped."
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
				"name": "Alola",
				"description": ""
			},
			{
				"name": "Trial Giver",
				"description": ""
			},
			{
				"name": "Body Builder",
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
				"name": "Come On By!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s accuracy and critical-hit rate by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dancing Together Inferno Overdrive",
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

export const MALLOW_SHIINOTIC = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Mallow",
		"images": {
			"base": "./v/v2.34.0/mallow.png",
			"ex": "./v/v2.34.0/mallow.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Grass",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Shiinotic",
			"formName": "",
			"stats": {
				"hp": "630",
				"atk": "88",
				"def": "273",
				"spa": "224",
				"spd": "297",
				"spe": "251"
			},
			"statsLVL150": {
				"hp": "660",
				"atk": "92",
				"def": "287",
				"spa": "236",
				"spd": "313",
				"spe": "265"
			},
			"image": "./v/v2.34.0/0756.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "“Absorbs” Hit: Attack ↓",
				"description": "Lowers the target’s Attack by 1 stat rank when the user’s attack move that has the absorbs effect tag is successful."
			},
			{
				"name": "Hit Paralyzed Opp: Recover HP 9",
				"description": "Restores the user’s HP when its attack move is successful against a paralyzed opponent."
			},
			{
				"name": "Status Immunity",
				"description": "Status conditions cannot be inflicted on the user."
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
				"name": "Trial Giver",
				"description": ""
			},
			{
				"name": "Cook",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Giga Drain",
				"type": "Grass",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "91-109",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "Absorbs",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
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
				"name": "Stun Spore",
				"type": "Grass",
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
				"user": "Trainer",
				"name": "Today’s Special!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp. Atk of all allied sync pairs by 4 stat ranks. Raises the accuracy of all allied sync pairs by 1 stat rank. Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Strong Kick to It Bloom Doom",
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