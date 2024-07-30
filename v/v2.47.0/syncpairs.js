export const ELIO_STAKATAKA = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.47.0/elio_bg.png",
	"trainer": {
		"name": "Elio (Alt.)",
		"images": {
			"base": "./v/v2.47.0/elio.png",
			"ex": "./v/v2.47.0/elio_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Rock",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Stakataka",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "176",
				"def": "322",
				"spa": "156",
				"spd": "302",
				"spe": "238"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "184",
				"def": "338",
				"spa": "164",
				"spd": "318",
				"spe": "250"
			},
			"image": "./v/v2.47.0/0805.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "1st T-Move: Defense ↑ & Sp. Def ↑ 6",
				"description": "Raises the user’s Defense and Sp. Def by six stat ranks the first time its Trainer uses a move each battle."
			},
			{
				"name": "Set Allied/Entire Field Effect: Team Attack ↑ & Sp. Atk ↑ 9",
				"description": "Raises the Attack and Sp. Atk of all allied sync pairs by one stat rank when the user activates a field effect on either the entire field of play or the allied field of play."
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
				"name": "Rock",
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
				"name": "Passionate Spirit",
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
				"name": "Smack Down",
				"type": "Rock",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "20-24",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Alola Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank. Applies Alola Circle (Defensive) to the allied field of play. Alola Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Alola theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Ginormous Rock Tomb",
				"type": "Rock",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "120-144",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Defense is raised to its maximum stat rank.(lb)Deactivation Condition: When the user’s Defense is not raised to its maximum stat rank.(lb)(lb)Lowers the target’s Speed by two stat ranks. Turns the field of play’s zone into a Rock Zone. (A Rock Zone powers up Rock-type attacks.) Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "Ultra Endurance!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP. In addition, restores the user’s HP by approximately 20% of its maximum HP. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Stacked-Up Emotions Continental Crush",
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

export const IONO_WATTREL = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Iono",
		"images": {
			"base": "./v/v2.47.0/iono.png",
			"ex": "./v/v2.47.0/iono.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Electric",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Wattrel",
			"formName": "",
			"stats": {
				"hp": "631",
				"atk": "161",
				"def": "229",
				"spa": "176",
				"spd": "229",
				"spe": "297"
			},
			"statsLVL150": {
				"hp": "661",
				"atk": "169",
				"def": "241",
				"spa": "184",
				"spd": "241",
				"spe": "313"
			},
			"image": "./v/v2.47.0/0940.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Team Body-Bracing Infliction 2",
				"description": "Raises the Defense of all allied sync pairs by two stat ranks the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Electric Guard",
				"description": "Reduces damage when the user is attacked by Electric-type moves."
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
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Artistic",
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
				"name": "Thunder Shock",
				"type": "Electric",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "17-20",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "",
				"description": "Has a chance (10%) of leaving the target paralyzed."
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
				"effect": "",
				"description": "Applies the Damage Guard Next effect to the user."
			},
			{
				"user": "Pokemon",
				"name": "Eerie Impulse",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "",
				"description": "Lowers the target’s Sp. Atk. by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Clip This!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "",
				"description": "Raises the Attack, Sp. Atk, and critical-hit rate of all allied sync pairs by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "",
				"name": "Electrify ’Em Electric Beam",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BLUE_ALAKAZAM = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Blue",
		"images": {
			"base": "./v/v2.47.0/blue.png",
			"ex": "./v/v2.47.0/blue.png"
		}
	},
	"rarity": 6,
	"role": "Sprint",
	"exRole": "",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Alakazam",
			"formName": "",
			"stats": {
				"hp": "646",
				"atk": "375",
				"def": "156",
				"spa": "434",
				"spd": "190",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "676",
				"atk": "395",
				"def": "164",
				"spa": "456",
				"spd": "200",
				"spe": "369"
			},
			"image": "./v/v2.47.0/0065.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Head Start 1",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle."
			},
			{
				"name": "On a Roll 9",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves."
			},
			{
				"name": "Hit Paralyzed Opp: Sp. Def ↓ 9",
				"description": "Lowers the target’s Sp. Def by one stat rank when the user’s attack move is successful against a paralyzed opponent."
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
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			},
			{
				"name": "Rival",
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
				"name": "Thunder Wave",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "",
				"description": "Leaves the target paralyzed."
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
				"effect": "",
				"description": "Raises the user’s critical-hit rate by two stat ranks."
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
				"effect": "",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "That All You Got?",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Sp. Atk by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Beat Them All Psychic Beam",
				"type": "Psychic",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "",
				"description": "This attack’s power increases when the target is paralyzed."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SELENE_NIHILEGO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.47.0/selene_BG.png",
	"trainer": {
		"name": "Selene (Alt.)",
		"images": {
			"base": "./v/v2.47.0/selene.png",
			"ex": "./v/v2.47.0/selene_EX.png"
		}
	},
	"rarity": 6,
	"role": "Special Strike",
	"exRole": "Tech",
	"pokemonType": "Rock",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Nihilego",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "356",
				"def": "132",
				"spa": "468",
				"spd": "160",
				"spe": "309"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "374",
				"def": "138",
				"spa": "492",
				"spd": "168",
				"spe": "325"
			},
			"image": "./v/v2.47.0/0875.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Alola to You!",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves. When an opponent’s stat is lowered by the additional effects of the user’s moves, it is lowered by double the stat ranks."
			},
			{
				"name": "Poison-Type Hit: Poison 9",
				"description": "Leaves the target poisoned when the user’s Poison-type attack move against it is successful."
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
				"name": "Rock",
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
				"name": "Pigtails",
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
				"name": "Acid",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "19-22",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Alola Analysis",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank. Applies Alola Circle (Special) to the allied field of play. Alola Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Alola theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Nihil Meteor Beam",
				"type": "Rock",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "210-252",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "",
				"description": "Activation Condition: When the user’s Sp. Atk is raised.(lb)Deactivation Condition: When the user’s Sp. Atk is not raised.(lb)(lb)The user gets ready to attack. Raises the user’s Sp. Atk by one stat rank when it gets ready to attack. (The user’s Sp. Atk will not rise if it has not gotten ready to attack.) Using this move again will cause the user to leave this posture, then attack. No other actions can be taken while ready to attack. Never misses. The more the target’s Sp. Def is lowered, the greater the power of this attack. Lowers the target’s Sp. Def by one stat rank when it is poisoned or badly poisoned. The preparation period is skipped when a circle applies to the allied field of play, and the user will attack right away."
			},
			{
				"user": "Trainer",
				"name": "Ultra Opportunity!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "",
				"description": "Raises the user’s Sp. Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks. Increases the user’s Special Moves ↑ Next effect by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Cute Quirks Continental Crush",
				"type": "Rock",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ARVEN_MABOSSTIFF = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.47.0/arven_BG.png",
	"trainer": {
		"name": "Arven",
		"images": {
			"base": "./v/v2.47.0/arven.png",
			"ex": "./v/v2.47.0/arven_EX.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Dark",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Mabosstiff",
			"formName": "",
			"stats": {
				"hp": "686",
				"atk": "166",
				"def": "302",
				"spa": "160",
				"spd": "288",
				"spe": "297"
			},
			"statsLVL150": {
				"hp": "718",
				"atk": "174",
				"def": "318",
				"spa": "168",
				"spd": "302",
				"spe": "313"
			},
			"image": "./v/v2.47.0/0943.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Trusty Arven’s Chockablock Cheer",
				"description": "Reduces MP by one for the user’s moves that have the Berry effect tag and grants all of the following effects when the user’s HP is left at half or below after it is hit by an attack move or sync move: Restores the HP of all allied sync pairs by approximately 30% of their maximum HP. In addition, restores the user’s HP by approximately 20% of its maximum HP."
			},
			{
				"name": "Herba Mystica Effects",
				"description": "Except in certain circumstances, reduces damage when the user is hit by an attack move while the remaining MP for its moves that have the Berry effect tag is zero."
			},
			{
				"name": "Hit Restrained Opp: Team 1 of 5 Stats ↑ 9",
				"description": "Raises one of the following stats of all allied sync pairs by one stat rank at random when the user’s attack move is successful against a restrained opponent: Attack, Defense, Sp. Atk, Sp. Def, or Speed."
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
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Cook",
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
				"name": "Bite",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Sitrus Berry",
				"type": "Trainer",
				"gauge": "-",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "",
				"description": "Restores an ally’s HP by approximately 20% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Bounce Back Jaw Lock",
				"type": "Dark",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "",
				"description": "Activation Condition: When the user uses any moves one time.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Applies the Restrain effect to the target and the user. If the remaining MP for the user’s Sitrus Berry is one or more when attacking with this move, reduces those MP by one and increases the Physical Moves ↑ Next effect of all allied sync pairs by two ranks. If the remaining MP for the user’s Sitrus Berry is zero when attacking with this move, restores its HP by approximately 10% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "Here You Go!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "",
				"description": "Raises the Attack and critical-hit rate of all allied sync pairs by two stat ranks. In addition, raises the Attack and Defense of all allied sync pairs by two stat ranks when the user is restrained."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Chef’s Spicy Comeuppance",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const OAK_NIDORINO = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Professor Oak",
		"images": {
			"base": "./v/v2.47.0/professoroak.png",
			"ex": "./v/v2.47.0/professoroak.png"
		}
	},
	"rarity": 6,
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Poison",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Nidorino",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "161",
				"def": "278",
				"spa": "146",
				"spd": "302",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "693",
				"atk": "169",
				"def": "292",
				"spa": "154",
				"spd": "318",
				"spe": "302"
			},
			"image": "./v/v2.47.0/0033.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hostile Environment 3",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
			},
			{
				"name": "“Heals” Move: HP Recovery 2",
				"description": "Restores the user’s HP by approximately 20% of its maximum HP when it uses a move that has the heals effect tag."
			},
			{
				"name": "Quick Cure",
				"description": "Removes the confused, flinching, and trapped conditions from the user the first time they are inflicted each battle."
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
				"name": "Researcher",
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
				"name": "Poison Sting",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "12-14",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "",
				"description": "Has a chance (30%) of leaving the target poisoned."
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
				"effect": "",
				"description": "Restores the HP of all allied sync pairs by approximately 20% of their maximum HP."
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
				"effect": "",
				"description": "Applies the Damage Guard Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "Dreams and Adventures!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "",
				"description": "Applies the Special Damage Reduction effect to the allied field of play. Raises the Sp. Def of all allied sync pairs by four stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Your Tale Unfolds Poison Impact",
				"type": "Poison",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const NEMONA_SCREAMTAIL = {
	"Informations from": "Absol-utely",
	"-----------------": "-------",
	"bg": "./v/v2.47.0/nemona_BG.png",
	"trainer": {
		"name": "Sygna Suit Nemona",
		"images": {
			"base": "./v/v2.47.0/nemona.png",
			"ex": "./v/v2.47.0/nemona_EX.png"
		}
	},
	"rarity": 6,
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Poison",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Scream Tail",
			"formName": "",
			"stats": {
				"hp": "684",
				"atk": "336",
				"def": "132",
				"spa": "336",
				"spd": "150",
				"spe": "341"
			},
			"statsLVL150": {
				"hp": "716",
				"atk": "354",
				"def": "138",
				"spa": "354",
				"spd": "158",
				"spe": "359"
			},
			"image": "./v/v2.47.0/0985.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ancient Scream",
				"description": "Increases the user’s Physical Moves ↑ Next effect by two ranks when it uses BoosterEnergy or an ally turns the weather sunny."
			},
			{
				"name": "Energetic Student Council President",
				"description": "Reduces the user’s sync move countdown by one when its Pokémon uses a status move. Applies Paldea Circle (Physical) to the allied field of play when the user’s Pokémon uses a status move."
			},
			{
				"name": "Fruitful Attack",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Charges the user’s move gauge by one when its attack move hits."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Paldea Pride",
				"description": "Powers up the physical attack moves of all allied sync pairs by 20%. Reduces physical attack move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Paldea theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.)"
			}
		],
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Sygna Suit",
				"description": ""
			},
			{
				"name": "Champion",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "(b move) Ferocious Play Rough",
				"type": "Fairy",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "",
				"description": "Activation Condition: When the user uses any moves one time.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Attack and Defense by one stat rank. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Booster Energy",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "",
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by one rank."
			},
			{
				"user": "Pokemon",
				"name": "Sunny Day",
				"type": "Fire",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "",
				"description": "Makes the weather sunny."
			},
			{
				"user": "Trainer",
				"name": "Our Greatest Battle!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "",
				"description": "Raises the user’s Attack by six stat ranks. Raises the user’s Speed by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Nicely Rampagey Play Rough",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "",
				"description": "No additional effect."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}