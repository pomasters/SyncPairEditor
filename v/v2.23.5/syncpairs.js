export const ZINNIA_RAYQUAZA = {
	"Informations from": "Serebii",
	"Images from": "Pokekalos",
	"-----------------": "-------",
	"bg": "./v/v2.23.5/zinniabg.png",
	"trainer": {
		"name": "Zinnia",
		"images": {
			"base": "./v/v2.23.5/zinnia.png",
			"ex": "./v/v2.23.5/zinniaex.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Rock",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Rayquaza",
			"formName": "",
			"stats": {
				"hp": 546,
				"atk": 379,
				"def": 148,
				"spa": 379,
				"spd": 148,
				"spe": 254
			},
			"image": "./v/v2.23.5/384.png"
		},
		{
			"name": "Mega Rayquaza",
			"formName": "",
			"stats": {
				"hp": 546,
				"atk": 379,
				"def": 148,
				"spa": 454,
				"spd": 148,
				"spe": 304
			},
			"image": "./v/v2.23.5/384-m.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Weather Surge 3",
				"description": "Powers up moves when weather conditions are in effect."
			}
		],
		"passives2": [
			{
				"name": "Weather Surge 3",
				"description": "Powers up moves when weather conditions are in effect."
			},
			{
				"name": "Fresh Start",
				"description": "Returns the user's lowered stats to normal when it enters a battle."
			},
			{
				"name": "Move Gauge Refresh 2",
				"description": "Has a chance (30%) of charging the user's move gauge by one when a move is successful."
			}
		],
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
				"name": "Cape",
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
				"name": "Outrage",
				"type": "Dragon",
				"gauge": 3,
				"uses": 0,
				"category": "Physical",
				"power": "115-138",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the user confused."
			},
			{
				"user": "Pokemon",
				"name": "Aerial Ace",
				"type": "Flying",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "45-54",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "Stellar Imagination!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Removes the confused, flinching, and trapped conditions from the user. Raises the user’s Attack and Sp. Atk by 2 stat ranks. Raises the user’s Speed and accuracy by 1 stat rank. Lowers the user’s Defense and Sp. Def by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Draco Meteor",
				"type": "Dragon",
				"gauge": 3,
				"uses": 0,
				"category": "Special",
				"power": "136-163",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Dimensional Defender Draco Meteor",
				"type": "Dragon",
				"gauge": 0,
				"uses": 0,
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Rayquaza until the end of battle."
			}
		],
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "Outrage",
				"type": "Dragon",
				"gauge": 3,
				"uses": 0,
				"category": "Physical",
				"power": "115-138",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the user confused."
			},
			{
				"user": "Pokemon2",
				"name": "Dragon Ascent",
				"type": "Flying",
				"gauge": 4,
				"uses": 0,
				"category": "Physical",
				"power": "192-230",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user's Defense and Sp. Def by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Stellar Imagination!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Removes the confused, flinching, and trapped conditions from the user. Raises the user’s Attack and Sp. Atk by 2 stat ranks. Raises the user’s Speed and accuracy by 1 stat rank. Lowers the user’s Defense and Sp. Def by 2 stat ranks."
			},
			{
				"user": "Pokemon2",
				"name": "Draco Meteor",
				"type": "Dragon",
				"gauge": 3,
				"uses": 0,
				"category": "Special",
				"power": "136-163",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}


export const STEVEN_DEOXYS = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.23.5/ssstevenbg.png",

	"trainer" : {
		"name" : "Sygna Suit Steven",
		"images" : {
			"base" : "./v/v2.23.5/sssteven.png",
			"ex" : "./v/v2.23.5/ssstevenex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Psychic",
	"pokemonWeakness" : "Dark",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Deoxys",
			"formName" : "Before “Try This!”",
			"stats" : {
				"hp" : 664,
				"atk" : 224,
				"def" : 156,
				"spa" : 224,
				"spd" : 156,
				"spe" : 336
			},
			"image" : "./v/v2.23.5/386.png"
		},
		{
			"name" : "Deoxys",
			"formName" : "After “Try This!”",
			"stats" : {
				"hp" : 664,
				"atk" : 224,
				"def" : 156,
				"spa" : 224,
				"spd" : 156,
				"spe" : 336
			},
			"image" : "./v/v2.23.5/386.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Downside Up",
				"description" : "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name" : "Pinpoint Entry 1",
				"description" : "Raises the user’s accuracy by 1 stat rank when it enters a battle."
			},
			{
				"name" : "Entry Freebie",
				"description" : "Applies the Free Move Next effect to the user when it enters a battle."
			}
		],
		"passives2" : [
			{
				"name" : "Downside Up",
				"description" : "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name" : "Fuel Economy 1",
				"description" : "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by 1."
			},
			{
				"name" : "Aggravation 2",
				"description" : "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Psychic",
				"description" : ""
			},
			{
				"name" : "Hoenn",
				"description" : ""
			},
			{
				"name" : "Champion",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Space Cadet",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Trainer",
				"name": "Try This!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Psychic Terrain. Raises the user’s Defense, Sp. Atk, Sp. Def, and Speed by 2 stat ranks. Replaces the user’s moves with different moves. Replaces some of the user’s passive skills with different passive skills."
			},
			{
				"user": "Trainer",
				"name": "Attack!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 6 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Change into Attack Forme until the end of battle."
			},
			{
				"user": "Trainer",
				"name": "Faster!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 2. Raises the user’s Speed by 6 stat ranks. Raises the user’s evasiveness by 3 stat ranks. Change into Speed Forme until the end of battle."
			},
			{
				"user": "Trainer",
				"name": "Defend!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by 4 stat ranks. Applies the Damage Guard Next effect to the user. Change into Defense Forme until the end of battle."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon",
				"name" : "Space Rocks Psycho Boost",
				"type" : "Psychic",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "The more the user’s stats are raised, the greater the power of this attack."
			}
		],

		"moves2" : [
			{
				"user": "Pokemon2",
				"name": "Psycho Boost",
				"type": "Psychic",
				"gauge": 3,
				"uses": 0,
				"category": "Special",
				"power": "200",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon2",
				"name": "Recover",
				"type": "Normal",
				"gauge": 1,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP."
			},
			{
				"user": "Pokemon2",
				"name": "Zen Headbutt",
				"type": "Psychic",
				"gauge": 1,
				"uses": 0,
				"category": "Physical",
				"power": "51",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Pokemon2",
				"name": "Cosmic Power",
				"type": "Psychic",
				"gauge": 1,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense and Sp. Def by 1 stat rank."
			}
		],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const STEVEN_DEOXYS_ATTACK = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.23.5/ssstevenbg.png",

	"trainer" : {
		"name" : "Sygna Suit Steven",
		"images" : {
			"base" : "./v/v2.23.5/sssteven.png",
			"ex" : "./v/v2.23.5/ssstevenex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Psychic",
	"pokemonWeakness" : "Dark",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Deoxys",
			"formName" : "Normal Forme",
			"stats" : {
				"hp" : 664,
				"atk" : 224,
				"def" : 156,
				"spa" : 224,
				"spd" : 156,
				"spe" : 336
			},
			"image" : "./v/v2.23.5/386.png"
		},
		{
			"name" : "Deoxys",
			"formName" : "Attack Forme",
			"stats" : {
				"hp" : 664,
				"atk" : 448,
				"def" : 109,
				"spa" : 448,
				"spd" : 109,
				"spe" : 336
			},
			"image" : "./v/v2.23.5/386-a.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Downside Up",
				"description" : "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name" : "Pinpoint Entry 1",
				"description" : "Raises the user’s accuracy by 1 stat rank when it enters a battle."
			},
			{
				"name" : "Entry Freebie",
				"description" : "Applies the Free Move Next effect to the user when it enters a battle."
			}
		],
		"passives2" : [
			{
				"name" : "Downside Up",
				"description" : "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name" : "Expanded Sync",
				"description" : "When the user's sync move attacks an opponent, the target becomes all opposing sync pairs. The power of sync moves affected by this passive skill is not lowered even if there are multiple targets."
			},
			{
				"name" : "Power Chain 2",
				"description" : "Has a chance (30%) of increasing the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by 1 rank when its move is successful."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Psychic",
				"description" : ""
			},
			{
				"name" : "Hoenn",
				"description" : ""
			},
			{
				"name" : "Champion",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Space Cadet",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Trainer",
				"name": "Try This!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Psychic Terrain. Raises the user’s Defense, Sp. Atk, Sp. Def, and Speed by 2 stat ranks. Replaces the user’s moves with different moves. Replaces some of the user’s passive skills with different passive skills."
			},
			{
				"user": "Trainer",
				"name": "Attack!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 6 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Change into Attack Forme until the end of battle."
			},
			{
				"user": "Trainer",
				"name": "Faster!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 2. Raises the user’s Speed by 6 stat ranks. Raises the user’s evasiveness by 3 stat ranks. Change into Speed Forme until the end of battle."
			},
			{
				"user": "Trainer",
				"name": "Defend!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by 4 stat ranks. Applies the Damage Guard Next effect to the user. Change into Defense Forme until the end of battle."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon2",
				"name" : "Space Rocks Psycho Boost",
				"type" : "Psychic",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "The more the user’s stats are raised, the greater the power of this attack."
			}
		],

		"moves2" : [
			{
				"user": "Pokemon2",
				"name": "Psycho Boost",
				"type": "Psychic",
				"gauge": 4,
				"uses": 0,
				"category": "Special",
				"power": "200",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon2",
				"name": "Protect",
				"type": "Normal",
				"gauge": 2,
				"uses": 1,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Damage Guard Next effect to the user."
			},
			{
				"user": "Pokemon2",
				"name": "Zen Headbutt",
				"type": "Psychic",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "51",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Pokemon2",
				"name": "Cosmic Power",
				"type": "Psychic",
				"gauge": 2,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense and Sp. Def by 1 stat rank."
			}
		],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const STEVEN_DEOXYS_DEFENSE = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.23.5/ssstevenbg.png",

	"trainer" : {
		"name" : "Sygna Suit Steven",
		"images" : {
			"base" : "./v/v2.23.5/sssteven.png",
			"ex" : "./v/v2.23.5/ssstevenex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Psychic",
	"pokemonWeakness" : "Dark",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Deoxys",
			"formName" : "Normal Forme",
			"stats" : {
				"hp" : 664,
				"atk" : 224,
				"def" : 156,
				"spa" : 224,
				"spd" : 156,
				"spe" : 336
			},
			"image" : "./v/v2.23.5/386.png"
		},
		{
			"name" : "Deoxys",
			"formName" : "Defense Forme",
			"stats" : {
				"hp" : 664,
				"atk" : 112,
				"def" : 312,
				"spa" : 112,
				"spd" : 312,
				"spe" : 168
			},
			"image" : "./v/v2.23.5/386-d.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Downside Up",
				"description" : "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name" : "Pinpoint Entry 1",
				"description" : "Raises the user’s accuracy by 1 stat rank when it enters a battle."
			},
			{
				"name" : "Entry Freebie",
				"description" : "Applies the Free Move Next effect to the user when it enters a battle."
			}
		],
		"passives2" : [
			{
				"name" : "Downside Up",
				"description" : "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name" : "Stat Share 9",
				"description" : "When a status move used by the user’s Pokémon raises its stats only, raises the same stats by the same amount for all allied sync pairs instead."
			},
			{
				"name" : "Team Mind-Bracing Infliction+ 9",
				"description" : "Raises the Sp. Def of all allied sync pairs by 2 stat ranks when the user’s Pokémon uses a status move."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Psychic",
				"description" : ""
			},
			{
				"name" : "Hoenn",
				"description" : ""
			},
			{
				"name" : "Champion",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Space Cadet",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Trainer",
				"name": "Try This!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Psychic Terrain. Raises the user’s Defense, Sp. Atk, Sp. Def, and Speed by 2 stat ranks. Replaces the user’s moves with different moves. Replaces some of the user’s passive skills with different passive skills."
			},
			{
				"user": "Trainer",
				"name": "Attack!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 6 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Change into Attack Forme until the end of battle."
			},
			{
				"user": "Trainer",
				"name": "Faster!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 2. Raises the user’s Speed by 6 stat ranks. Raises the user’s evasiveness by 3 stat ranks. Change into Speed Forme until the end of battle."
			},
			{
				"user": "Trainer",
				"name": "Defend!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by 4 stat ranks. Applies the Damage Guard Next effect to the user. Change into Defense Forme until the end of battle."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon2",
				"name" : "Space Rocks Psycho Boost",
				"type" : "Psychic",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "The more the user’s stats are raised, the greater the power of this attack."
			}
		],

		"moves2" : [
			{
				"user": "Pokemon2",
				"name": "Psycho Boost",
				"type": "Psychic",
				"gauge": 4,
				"uses": 0,
				"category": "Special",
				"power": "200",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon2",
				"name": "Recover",
				"type": "Normal",
				"gauge": 2,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP."
			},
			{
				"user": "Pokemon2",
				"name": "Zen Headbutt",
				"type": "Psychic",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "51",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Pokemon2",
				"name": "Iron Defense",
				"type": "Steel",
				"gauge": 2,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Defense by 2 stat ranks."
			}
		],

		"syncMove2" : [],

		"movesMAX" : []
	}
}

export const STEVEN_DEOXYS_SPEED = {
	"Informations from" : "Absol-utely",
	"Images from" : "Pokekalos",
	"-----------------" : "-------",
	"bg" : "./v/v2.23.5/ssstevenbg.png",

	"trainer" : {
		"name" : "Sygna Suit Steven",
		"images" : {
			"base" : "./v/v2.23.5/sssteven.png",
			"ex" : "./v/v2.23.5/ssstevenex.png"
		},
	},

	"rarity" : 6,
	"role" : "Tech",

	"pokemonType" : "Psychic",
	"pokemonWeakness" : "Dark",
	"pokemonGender" : "",

	"pokemon" : [
		{
			"name" : "Deoxys",
			"formName" : "Normal Forme",
			"stats" : {
				"hp" : 664,
				"atk" : 224,
				"def" : 156,
				"spa" : 224,
				"spd" : 156,
				"spe" : 336
			},
			"image" : "./v/v2.23.5/386.png"
		},
		{
			"name" : "Deoxys",
			"formName" : "Speed Forme",
			"stats" : {
				"hp" : 664,
				"atk" : 224,
				"def" : 202,
				"spa" : 224,
				"spd" : 202,
				"spe" : 537
			},
			"image" : "./v/v2.23.5/386-s.png"
		}
	],


	"skills" : {
		"passives" : [
			{
				"name" : "Downside Up",
				"description" : "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name" : "Pinpoint Entry 1",
				"description" : "Raises the user’s accuracy by 1 stat rank when it enters a battle."
			},
			{
				"name" : "Entry Freebie",
				"description" : "Applies the Free Move Next effect to the user when it enters a battle."
			}
		],
		"passives2" : [
			{
				"name" : "Downside Up",
				"description" : "When the user’s stats would be lowered, raises the user’s stats by the same amount instead."
			},
			{
				"name" : "Afflicter’s Fervor 2",
				"description" : "Reduces the sync move countdown by 2 the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name" : "Catalytic Infliction",
				"description" : "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user’s Pokémon uses a status move each battle."
			}
		],
		"passivesMaster" : [],

		"themes" : [
			{
				"name" : "Psychic",
				"description" : ""
			},
			{
				"name" : "Hoenn",
				"description" : ""
			},
			{
				"name" : "Champion",
				"description" : ""
			},
			{
				"name" : "Sygna Suit",
				"description" : ""
			},
			{
				"name" : "Space Cadet",
				"description" : ""
			}
		],

		"lucky" : []
	},


	"actions" : {
		"moves" : [
			{
				"user": "Trainer",
				"name": "Try This!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Psychic Terrain. Raises the user’s Defense, Sp. Atk, Sp. Def, and Speed by 2 stat ranks. Replaces the user’s moves with different moves. Replaces some of the user’s passive skills with different passive skills."
			},
			{
				"user": "Trainer",
				"name": "Attack!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by 6 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks. Change into Attack Forme until the end of battle."
			},
			{
				"user": "Trainer",
				"name": "Faster!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 2. Raises the user’s Speed by 6 stat ranks. Raises the user’s evasiveness by 3 stat ranks. Change into Speed Forme until the end of battle."
			},
			{
				"user": "Trainer",
				"name": "Defend!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by 4 stat ranks. Applies the Damage Guard Next effect to the user. Change into Defense Forme until the end of battle."
			}
		],

		"syncMove" : [
			{
				"user" : "Pokemon2",
				"name" : "Space Rocks Psycho Boost",
				"type" : "Psychic",
				"gauge" : 0,
				"uses" : 0,
				"category" : "Special",
				"power" : "200",
				"accuracy" : "-",
				"target" : "An opponent",
				"effect" : "-",
				"description" : "The more the user’s stats are raised, the greater the power of this attack."
			}
		],

		"moves2" : [
			{
				"user": "Pokemon2",
				"name": "Psycho Boost",
				"type": "Psychic",
				"gauge": 4,
				"uses": 0,
				"category": "Special",
				"power": "200",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user": "Pokemon2",
				"name": "Recover",
				"type": "Normal",
				"gauge": 2,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "Heals",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP."
			},
			{
				"user": "Pokemon2",
				"name": "Zen Headbutt",
				"type": "Psychic",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "51",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of making the target flinch."
			},
			{
				"user": "Pokemon2",
				"name": "Double Team",
				"type": "Normal",
				"gauge": 1,
				"uses": 0,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s evasiveness by 1 stat rank."
			}
		],

		"syncMove2" : [],

		"movesMAX" : []
	}
}


export const GIOVANNI_PERSIAN = {
	"Informations from": "Absol-utely",
	"Images from": "Pokekalos",
	"-----------------": "-------",
	"bg": "./v/v2.23.5/giovanniclassicbg.png",
	"trainer": {
		"name": "Giovanni (Classic)",
		"images": {
			"base": "./v/v2.23.5/giovanniclassic.png",
			"ex": "./v/v2.23.5/giovanniclassicex.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Persian",
			"formName": "",
			"stats": {
				"hp": 532,
				"atk": 200,
				"def": 231,
				"spa": 200,
				"spd": 234,
				"spe": 326
			},
			"image": "./v/v2.23.5/053.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Speedy Entry 2",
				"description": "Raises the user’s Speed by 2 stat ranks when it enters a battle."
			},
			{
				"name": "Panic Button",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user is in a pinch each battle."
			},
			{
				"name": "Natural Remedy",
				"description": "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
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
				"name": "Villain",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Slash",
				"type": "Normal",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
			},
			{
				"user": "Trainer",
				"name": "Dire Hit All +",
				"type": "Trainer",
				"gauge": 0,
				"uses": 2,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by 2 stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Bite",
				"type": "Dark",
				"gauge": 2,
				"uses": 0,
				"category": "Physical",
				"power": "42",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Enough!",
				"type": "Trainer",
				"gauge": 0,
				"uses": 1,
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by 3 stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Perfectly Evil Normal Impact",
				"type": "Normal",
				"gauge": 0,
				"uses": 0,
				"category": "Physical",
				"power": "300",
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