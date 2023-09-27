export const AKARI_SAMUROTT = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.37.0/akari_BG.png",
	"trainer": {
		"name": "Akari",
		"images": {
			"base": "./v/v2.37.0/akari.png",
			"ex": "./v/v2.37.0/akari_EX.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Physical Strike",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Samurott",
			"formName": "Hisuian Form",
			"stats": {
				"hp": "665",
				"atk": "361",
				"def": "179",
				"spa": "244",
				"spd": "167",
				"spe": "272"
			},
			"statsLVL150": {
				"hp": "697",
				"atk": "379",
				"def": "187",
				"spa": "256",
				"spd": "175",
				"spe": "286"
			},
			"image": "./v/v2.37.0/0503.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Survey Corps Teachings",
				"description": "Grants all of the following effects the first time the user enters a battle each battle: Reduces the user’s sync move countdown by 1. Raises the user’s Attack by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks."
			},
			{
				"name": "Quick Tempo",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play the first time the user enters a battle each battle."
			},
			{
				"name": "Critical Strike 2",
				"description": "Powers up the user’s attacks when they become critical hits."
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
				"name": "Sinnoh",
				"description": "(Hisui)"
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Scarf",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Ceaseless Edge",
				"type": "Dark",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily. Applies Dark Damage Field to the opponents’ field of play. (Dark Damage Field: The sync pairs will take Dark-type damage whenever they take an action.)"
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
				"name": "(b move) Top Performer Ceaseless Edge",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Activation Condition: When Dark Damage Field applies to the opponents’ field of play.(lb)Deactivation Condition: When the opponents’ field of play is no longer Dark Damage Field.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. This move’s power increases when successfully used in succession. (This move powers up by 20% every time it is used.) (The maximum power-up is 60%.) If a different move is used by the user’s Pokémon, this move’s power returns to normal."
			},
			{
				"user": "Trainer",
				"name": "Mutual Understanding!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Dark Zone. (A Dark Zone powers up Dark-type attacks.) Raises an ally’s Speed by 4 stat ranks. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of an ally by 2 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Master Crafter Ceaseless Edge",
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

export const REI_DECIDUEYE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.37.0/rei_BG.png",
	"trainer": {
		"name": "Rei",
		"images": {
			"base": "./v/v2.37.0/rei.png",
			"ex": "./v/v2.37.0/rei_EX.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "Physical Strike",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Decidueye",
			"formName": "Hisuian Form",
			"stats": {
				"hp": "652",
				"atk": "468",
				"def": "164",
				"spa": "224",
				"spd": "188",
				"spe": "402"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "492",
				"def": "172",
				"spa": "236",
				"spd": "198",
				"spe": "424"
			},
			"image": "./v/v2.37.0/0724.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Survey Corps Teachings",
				"description": "Grants all of the following effects the first time the user enters a battle each battle: Reduces the user’s sync move countdown by 1. Raises the user’s Attack by 4 stat ranks. Raises the user’s critical-hit rate by 3 stat ranks."
			},
			{
				"name": "S-Move: Team Free Move Next 9",
				"description": "Has a chance (100%) of applying the Free Move Next effect to all allied sync pairs after using the user’s sync move."
			},
			{
				"name": "Soften Up 1",
				"description": "Critical hits land more easily when the user attacks with a sync move."
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
				"name": "Sinnoh",
				"description": "(Hisui)"
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Scarf",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Triple Arrows",
				"type": "Fighting",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily. Has a chance (50%) of lowering the target’s Defense by 1 stat rank. Has a chance (30%) of making the target flinch."
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
				"name": "(b move) Triple Arrows Barrage",
				"type": "Fighting",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move 1 time.(lb)Deactivation Condition: When this move is used.(lb)(lb)Except in certain circumstances, successful hits with this attack become critical hits. Lowers the target’s Defense by 2 stat ranks. Makes the target flinch. The power and chance of applying additional effects of this move are not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Our Hearts Are One!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 1. Raises the user’s Speed by 6 stat ranks. Applies the Supereffective ↑ Next effect to the user. Increases the user’s Physical Moves ↑ Next effect by 2 ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Space-Time Traveler Triple Arrows",
				"type": "Fighting",
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

export const GIOVANNI_NIDORINO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Giovanni",
		"images": {
			"base": "./v/v2.37.0/giovanni.png",
			"ex": "./v/v2.37.0/giovanni.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Nidorino",
			"formName": "",
			"stats": {
				"hp": "631",
				"atk": "220",
				"def": "227",
				"spa": "200",
				"spd": "227",
				"spe": "225"
			},
			"statsLVL150": {
				"hp": "661",
				"atk": "230",
				"def": "239",
				"spa": "210",
				"spd": "239",
				"spe": "237"
			},
			"image": "./v/v2.37.0/0033.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Take Hit: Opp Poisoned 2",
				"description": "Has a chance (30%) of leaving an opponent that attacked the user poisoned when the user is hit by an attack move."
			},
			{
				"name": "Revenge Boost 4",
				"description": "Has a chance (50%) of charging the user’s move gauge by one when the user is hit by an attack move."
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
				"name": "Poison",
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
				"name": "Poison Tail",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "38-45",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily. Has a chance (10%) of leaving the target poisoned."
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
				"name": "Stomping Tantrum",
				"type": "Ground",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "44-52",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power is doubled when the user’s previous move failed."
			},
			{
				"user": "Trainer",
				"name": "Well, Well...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "World-Eroding Poison Impact",
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

export const THORTON_MAGNEZONE = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Thorton",
		"images": {
			"base": "./v/v2.37.0/thorton.png",
			"ex": "./v/v2.37.0/thorton.png"
		}
	},
	"rarity": 6,
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Steel",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Magnezone",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "268",
				"def": "205",
				"spa": "458",
				"spd": "166",
				"spe": "241"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "282",
				"def": "215",
				"spa": "482",
				"spd": "174",
				"spe": "253"
			},
			"image": "./v/v2.37.0/0462.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Factory Knowledge",
				"description": "Powers up the moves of all allied sync pairs when attacking a target that is restrained. Applies the Restrain effect to the target when the user’s attack move against it is successful."
			},
			{
				"name": "Hit Restrained Opp: Free Move Next 9",
				"description": "Has a chance (100%) of applying the Free Move Next effect to the user when its attack move is successful against a restrained opponent."
			},
			{
				"name": "Hit Restrained Opp: Supereffective ↑ Next 9",
				"description": "Has a chance (100%) of applying the Supereffective ↑ Next effect to the user when its attack move is successful against a restrained opponent."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
				"description": ""
			},
			{
				"name": "Knowledgeable",
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
				"name": "Let’s Get Going!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Attack and Sp. Atk by 2 stat ranks. Raises an ally’s critical-hit rate by 3 stat ranks. Applies the Enduring effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "One Hundred Percent Steel Beam",
				"type": "Steel",
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

export const NOLAND_NINJASK = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Noland",
		"images": {
			"base": "./v/v2.37.0/noland.png",
			"ex": "./v/v2.37.0/noland.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "Physical Strike",
	"pokemonType": "Bug",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Ninjask",
			"formName": "",
			"stats": {
				"hp": "602",
				"atk": "424",
				"def": "164",
				"spa": "346",
				"spd": "164",
				"spe": "508"
			},
			"statsLVL150": {
				"hp": "630",
				"atk": "446",
				"def": "172",
				"spa": "364",
				"spd": "172",
				"spe": "534"
			},
			"image": "./v/v2.37.0/0291.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit: Team Speed ↑2 9",
				"description": "Has a chance (100%) of raising the Speed of all allied sync pairs by 2 stat ranks when the user’s attack move is successful."
			},
			{
				"name": "Overwhelm 9",
				"description": "Has a chance (100%) of lowering the target’s Attack by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Haste",
				"description": "Speed cannot be lowered."
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
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
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
				"name": "(b move) Accelerating X-Scissor",
				"type": "Bug",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "Sure Hit",
				"description": "Activation Condition: When the user’s Speed is raised to its maximum stat rank.(lb)Deactivation Condition: When the user’s Speed is not raised to its maximum stat rank.(lb)(lb)Never misses. Lowers the target’s accuracy by 1 stat rank. Leaves the target confused."
			},
			{
				"user": "Trainer",
				"name": "Good Job!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by 3. Raises the user’s Attack and evasiveness by 2 stat ranks. Lowers the user’s Defense and Sp. Def by 3 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Knowledge from Experience Bug Impact",
				"type": "Bug",
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

export const ROXANNE_RUNERIGUS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.37.0/roxanne_BG.png",
	"trainer": {
		"name": "Roxanne",
		"images": {
			"base": "./v/v2.37.0/roxanne.png",
			"ex": "./v/v2.37.0/roxanne_EX.png"
		}
	},
	"rarity": 6,
	"role": "Tech",
	"exRole": "Physical Strike",
	"pokemonType": "Ground",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Runerigus",
			"formName": "",
			"stats": {
				"hp": "610",
				"atk": "434",
				"def": "191",
				"spa": "176",
				"spd": "176",
				"spe": "241"
			},
			"statsLVL150": {
				"hp": "638",
				"atk": "456",
				"def": "201",
				"spa": "184",
				"spd": "184",
				"spe": "253"
			},
			"image": "./v/v2.37.0/0867.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "S-Move: Team Stat ↑ Flip",
				"description": "Returns the raised stats of all opposing sync pairs to normal (except critical-hit rate), then lowers those stats by the same amount after using the user’s sync move."
			},
			{
				"name": "Opp Trapped: Team Moves ↑ 2",
				"description": "Powers up the moves of all allied sync pairs when attacking a target that is trapped."
			},
			{
				"name": "Hit: Team Apply Status Change 9",
				"description": "When the user inflicts a status change on an opponent with the additional effects of a move, has a chance (100%) of inflicting the same status change on all opposing sync pairs."
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
				"name": "(b move) Grudgeful Bulldoze",
				"type": "Ground",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "120-144",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "Quick Move",
				"description": "Activation Condition: When there is at least one trapped Pokémon on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any trapped Pokémon on the opponent’s field of play.(lb)(lb)Lowers the target’s Defense and Speed by 1 stat rank. Raises the Defense and Speed of all allied sync pairs by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "I See It All!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s critical-hit rate by 3 stat ranks. Raises the accuracy of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Menacing Memories Ground Impact",
				"type": "Ground",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is trapped."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const PHOEBE_COFAGRIGUS = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.37.0/phoebe_BG.png",
	"trainer": {
		"name": "Phoebe",
		"images": {
			"base": "./v/v2.37.0/phoebe.png",
			"ex": "./v/v2.37.0/phoebe_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Cofagrigus",
			"formName": "",
			"stats": {
				"hp": "612",
				"atk": "234",
				"def": "289",
				"spa": "205",
				"spd": "280",
				"spe": "225"
			},
			"statsLVL150": {
				"hp": "640",
				"atk": "246",
				"def": "303",
				"spa": "215",
				"spd": "294",
				"spe": "237"
			},
			"image": "./v/v2.37.0/0563.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Take Hit: Ignore Attack ↑ & Sp. Atk ↑",
				"description": "Except in certain circumstances, ignores the opponent’s raised Attack and Sp. Atk when the user is hit by an attack move."
			},
			{
				"name": "Hit: Team Attack ↑ & Sp. Atk ↑ 9",
				"description": "Has a chance (100%) of raising the Attack and Sp. Atk of all allied sync pairs by 1 stat rank when the user’s attack move is successful."
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
				"name": "Hoenn",
				"description": ""
			},
			{
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
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
				"name": "Shadow Claw",
				"type": "Ghost",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "40-48",
				"accuracy": "100",
				"target": "An opponent",
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
				"user": "Pokemon",
				"name": "Phantom Force",
				"type": "Ghost",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The user takes on a phantom presence. After a set time, this presence fades and the user attacks. No other actions can be taken while in phantom presence. Opponents’ moves will not hit the user while it is in this presence. If the user is hit by a sync move or max move while in phantom presence, the presence will fade."
			},
			{
				"user": "Trainer",
				"name": "It’s Lively Now!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Stat Reduction Defense effect to the allied field of play. Raises the Defense and Sp. Def of all allied sync pairs by 4 stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Glimmering Gold Ghost Impact",
				"type": "Ghost",
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

export const LENORA_WATCHOG = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.37.0/lenora_BG.png",
	"trainer": {
		"name": "Lenora",
		"images": {
			"base": "./v/v2.37.0/lenora.png",
			"ex": "./v/v2.37.0/lenora_EX.png"
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
			"name": "Watchog",
			"formName": "",
			"stats": {
				"hp": "632",
				"atk": "220",
				"def": "288",
				"spa": "200",
				"spd": "288",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "662",
				"atk": "230",
				"def": "302",
				"spa": "210",
				"spd": "302",
				"spe": "256"
			},
			"image": "./v/v2.37.0/0505.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Use Status P-Move on Opp: Sp. Def ↓ 9",
				"description": "Has a chance (100%) of lowering the target’s Sp. Def by 1 stat rank when the user’s Pokémon uses a status move targeting that opponent."
			},
			{
				"name": "Debut: Field Special DR",
				"description": "Applies the Special Damage Reduction effect to the allied field of play the first time the user enters a battle each battle."
			},
			{
				"name": "Team Pinpoint Entry 2",
				"description": "Raises the accuracy of all allied sync pairs by 2 stat rank(s) when the user enters a battle."
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
				"name": "Knowledgeable",
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
				"name": "Facade",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "47-56",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power is doubled when the user is poisoned, badly poisoned, paralyzed, or burned. Ignores lowered Attack from burns."
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
				"name": "Leer",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Defense by 1 stat rank."
			},
			{
				"user": "Trainer",
				"name": "Research Time!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "Heals",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP. Charges the user’s move gauge by 2 for each allied sync pair on the field. When used in a co-op battle, charges the move gauges of all allied players by 2 instead."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Museum Director Normal Impact",
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