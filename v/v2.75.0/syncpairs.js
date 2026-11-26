export const PAXTON_EMBOAR = {
	"bg": "./v/v2.75.0/Tx_ch0368_00_kyoya_mindscape00.png",
	"trainer": {
		"name": "Paxton",
		"images": {
			"base": "./v/v2.75.0/ch0368_00_kyoya_1024.png",
			"ex": "./v/v2.75.0/ch0368_00_kyoya_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Support",
	"pokemonType": "Fire",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Emboar",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "336",
				"def": "174",
				"spa": "336",
				"spd": "176",
				"spe": "331"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "354",
				"def": "182",
				"spa": "354",
				"spd": "184",
				"spe": "349"
			},
			"statsLVL200": {
				"hp": "881",
				"atk": "444",
				"def": "222",
				"spa": "444",
				"spd": "224",
				"spe": "439"
			},
			"image": "./v/v2.75.0/pm0500_00_enbuoh_256.png"
		},
		{
			"name": "Mega Emboar",
			"formName": "",
			"stats": {
				"hp": "689",
				"atk": "403",
				"def": "174",
				"spa": "336",
				"spd": "176",
				"spe": "397"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "424",
				"def": "182",
				"spa": "354",
				"spd": "184",
				"spe": "418"
			},
			"statsLVL200": {
				"hp": "881",
				"atk": "532",
				"def": "222",
				"spa": "444",
				"spd": "224",
				"spe": "526"
			},
			"image": "./v/v2.75.0/pm0500_51_00_megaenbuoh_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Kalos Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Kalos theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Ally-Rescuing Spear of Flames",
				"description": "Reduces the user’s sync move countdown by one when it enters a battle. Raises the user’s Attack by four stat ranks when it enters a battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "Cool Blaze of Kindness",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when the user’s Trainer uses a move. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when the user’s Pokémon uses a status move."
			},
			{
				"name": "1st S-Move: Team Physical Break",
				"description": "Applies the Physical Move Break effect to all opposing sync pairs the first time the user’s sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Z-A Royale Conqueror",
				"description": "Reduces the user’s sync move countdown by one the first time its Trainer uses a move each battle. Reduces the user’s sync move countdown by one the first time its Pokémon uses a move each battle. Reduces the user’s sync move countdown by one the first time its sync move is used each battle."
			}
		],
		"themes": [
			{
				"name": "Fire",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Main Character",
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
				"name": "(b move) Searing Spear Flare Blitz",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Removes the frozen condition from the user. Lowers the target’s Attack and Sp. Atk by one stat rank. Leaves the target burned. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Kalos Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Kalos Circle (Physical) to the allied field of play. Kalos Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kalos theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
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
				"effect": "-",
				"description": "Makes the weather sunny."
			},
			{
				"user": "Trainer",
				"name": "I’ll Come Save You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Take Next \"All\" Move effect to the user. Applies the Endure and Restore effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Team MZ’s Secret Weapon Flare Blitz",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega&nbsp;Emboar until the end of battle. This attack’s power increases when the weather is sunny."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const CALEM_DELPHOX = {
	"bg": "./v/v2.75.0/Tx_ch0003_10_calme_mindscape00.png",
	"trainer": {
		"name": "Sygna Suit Calem",
		"images": {
			"base": "./v/v2.75.0/ch0003_10_calme_1024.png",
			"ex": "./v/v2.75.0/ch0003_10_calme_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Tech",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Water",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Delphox",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "210",
				"def": "150",
				"spa": "336",
				"spd": "150",
				"spe": "286"
			},
			"statsLVL150": {
				"hp": "691",
				"atk": "220",
				"def": "158",
				"spa": "354",
				"spd": "158",
				"spe": "300"
			},
			"statsLVL200": {
				"hp": "841",
				"atk": "270",
				"def": "198",
				"spa": "444",
				"spd": "198",
				"spe": "370"
			},
			"image": "./v/v2.75.0/pm0719_00_fox3_256.png"
		},
		{
			"name": "Mega Delphox",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "210",
				"def": "150",
				"spa": "403",
				"spd": "150",
				"spe": "343"
			},
			"statsLVL150": {
				"hp": "691",
				"atk": "220",
				"def": "158",
				"spa": "424",
				"spd": "158",
				"spe": "360"
			},
			"statsLVL200": {
				"hp": "841",
				"atk": "270",
				"def": "198",
				"spa": "532",
				"spd": "198",
				"spe": "444"
			},
			"image": "./v/v2.75.0/pm0655_51_00_megamahoxy_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Calmly Burning Competitive Spirit",
				"description": "Grants all of the following effects when the user enters a battle: Reduces the user’s sync move countdown by three. Raises the user’s Sp. Atk by six stat ranks. Applies the Special Move Break effect to all opposing sync pairs."
			},
			{
				"name": "Mastery of Bewitching Fire",
				"description": "When the user’s status move is used and inflicted a status condition on an opponent, inflicts the same status condition on all opposing sync pairs. Increases the user’s Special Moves ↑ Next effect by one rank when an ally’s attack move is successful against a burned opponent."
			},
			{
				"name": "Team S-Move: Restore B-Move MP 9",
				"description": "Restores one MP of the user’s buddy move after your team’s sync pair uses their sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex)Kalos’s Parallel Passion",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kalos theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Psychic",
				"description": ""
			},
			{
				"name": "Kalos",
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
				"name": "Cape",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "(b move) Phantasmal Fox Psybeam",
				"type": "Psychic",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "320-384",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Sp.&nbsp;Def by two stat ranks. Leaves the target confused."
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
				"name": "(b move) Bewitching Flames Psychic",
				"type": "Psychic",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "350-420",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)This attack’s power increases when the target is burned. This attack’s power increases when the target is confused. Lowers the target’s Sp.&nbsp;Def by one stat rank. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "I Want to Win!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Psychic Terrain. Applies the Enduring effect to the user. If the user’s Delphox has Mega Evolved, also increases the user’s Sync Move&nbsp;↑ Next effect by four&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Mastering the Power of Bonds Psychic",
				"type": "Psychic",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega&nbsp;Delphox until the end of battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const PROFESSORSYCAMORE_CHARMANDER = {
	"bg": "./v/v2.75.0/Tx_ch0136_00_platane_mindscape00.png",
	"trainer": {
		"name": "Professor Sycamore",
		"images": {
			"base": "./v/v2.75.0/ch0136_00_platane_1024.png",
			"ex": "./v/v2.75.0/ch0136_00_platane_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Charmander",
			"formName": "",
			"stats": {
				"hp": "663",
				"atk": "404",
				"def": "177",
				"spa": "424",
				"spd": "180",
				"spe": "283"
			},
			"statsLVL150": {
				"hp": "693",
				"atk": "426",
				"def": "185",
				"spa": "446",
				"spd": "188",
				"spe": "297"
			},
			"statsLVL200": {
				"hp": "843",
				"atk": "536",
				"def": "225",
				"spa": "556",
				"spd": "228",
				"spe": "367"
			},
			"image": "./v/v2.75.0/pm0004_00_hitokage_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit: Sp. Def ↓2 9",
				"description": "Lowers the target’s Sp. Def by two stat ranks when the user’s attack move against it is successful."
			},
			{
				"name": "Sunny Hit: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while the weather is sunny."
			},
			{
				"name": "1st Use Status P-Move: Team Special Boost 1",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank the first time the user’s Pokémon uses a status move each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Fire Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Fire theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Fire",
				"description": ""
			},
			{
				"name": "Kalos",
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
				"name": "Super Effective ↑",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Supereffective&nbsp;↑ Next effect to an ally."
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
				"effect": "-",
				"description": "Makes the weather sunny."
			},
			{
				"user": "Trainer",
				"name": "Remember to Have Fun!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces an ally’s sync move countdown by one. Raises an ally’s Sp.&nbsp;Atk by four stat ranks. Raises an ally’s accuracy by one stat rank. Raises an ally’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Je Ne Sais Quoi Fire Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MIRIAM_PINCURCHIN = {
	"bg": "./v/v2.75.0/Tx_ch0336_00_mimoza_mindscape00.png",
	"trainer": {
		"name": "Miriam",
		"images": {
			"base": "./v/v2.75.0/ch0336_00_mimoza_1024.png",
			"ex": "./v/v2.75.0/ch0336_00_mimoza_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pincurchin",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "156",
				"def": "225",
				"spa": "132",
				"spd": "225",
				"spe": "235"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "164",
				"def": "237",
				"spa": "138",
				"spd": "237",
				"spe": "247"
			},
			"statsLVL200": {
				"hp": "835",
				"atk": "204",
				"def": "297",
				"spa": "168",
				"spd": "297",
				"spe": "307"
			},
			"image": "./v/v2.75.0/pm0871_00_00_bachinuni_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hostile Environment 1",
				"description": "Raises the chance of inflicting status conditions with the additional effects of moves."
			},
			{
				"name": "Team Shout 9",
				"description": "Raises the Attack or Sp. Atk—or both—of all allied sync pairs by one stat rank when the user is hit by an attack move."
			},
			{
				"name": "Electric Guard",
				"description": "Reduces damage when the user is attacked by Electric-type moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Sweet Tooth",
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
				"name": "Spark",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target paralyzed."
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
				"effect": "-",
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
				"effect": "-",
				"description": "Applies the Damage Guard Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "I’ll Get Some Medicine!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Electric Terrain. Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by four stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Nurse’s Treatment Electric Impact",
				"type": "Electric",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const PENNY_IRONBUNDLE = {
	"bg": "./v/v2.75.0/Tx_ch0293_40_button_mindscape00.png",
	"trainer": {
		"name": "Penny (Holiday 2026)",
		"images": {
			"base": "./v/v2.75.0/ch0293_40_button_1024.png",
			"ex": "./v/v2.75.0/ch0293_40_button_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Tech",
	"pokemonType": "Water",
	"pokemonWeakness": "Rock",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Iron Bundle",
			"formName": "",
			"stats": {
				"hp": "651",
				"atk": "312",
				"def": "170",
				"spa": "424",
				"spd": "164",
				"spe": "459"
			},
			"statsLVL150": {
				"hp": "681",
				"atk": "328",
				"def": "178",
				"spa": "446",
				"spd": "172",
				"spe": "483"
			},
			"statsLVL200": {
				"hp": "831",
				"atk": "408",
				"def": "218",
				"spa": "556",
				"spd": "212",
				"spe": "603"
			},
			"image": "./v/v2.75.0/pm0991_00_00_tetsunotsutsumi_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Presents of the Future",
				"description": "Grants all of the following effects when the user uses BoosterEnergy or an ally turns the field of play’s terrain into Electric Terrain: Reduces the user’s sync move countdown by one. Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"name": "Supply Unit’s Arrival",
				"description": "Powers up the moves and sync moves of all allied sync pairs when the terrain is Electric Terrain. Extends the duration of Electric Terrain when the terrain turns into Electric Terrain while the user is on the field."
			},
			{
				"name": "1st Use S-Move: S-Moves ×4",
				"description": "The power of the user’s sync move is quadrupled the first time its sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Water",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Team Star",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Glasses",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "(b move) Pulsing Hydro Pump",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Sp.&nbsp;Def and Speed by two stat ranks."
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
				"effect": "-",
				"description": "Increases the user’s Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect by one&nbsp;rank."
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
				"user": "Trainer",
				"name": "Community... Service!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Sp.&nbsp;Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Not to Be Underestimated Water Beam",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the terrain is Electric Terrain."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LUSAMINE_NIHILEGO = {
	"bg": "./v/v2.75.0/Tx_ch0120_11_lusamine_mindscape00.png",
	"trainer": {
		"name": "Sygna Suit Lusamine (Alt.)",
		"images": {
			"base": "./v/v2.75.0/ch0120_11_lusamine_1024.png",
			"ex": "./v/v2.75.0/ch0120_11_lusamine_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Field",
	"pokemonType": "Rock",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "(shiny) Nihilego",
			"formName": "",
			"stats": {
				"hp": "652",
				"atk": "132",
				"def": "146",
				"spa": "404",
				"spd": "161",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "138",
				"def": "154",
				"spa": "426",
				"spd": "169",
				"spe": "354"
			},
			"statsLVL200": {
				"hp": "832",
				"atk": "168",
				"def": "194",
				"spa": "536",
				"spd": "209",
				"spe": "444"
			},
			"image": "./v/v2.75.0/pm0875_00_beastred_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Love as Deep as the Sea",
				"description": "Grants all of the following effects the first time the user enters a battle each battle: Raises the user’s Sp. Atk by six stat ranks. Applies the Enduring effect to the user. Turns the field of play’s zone into a Rock Zone. (A Rock Zone powers up Rock-type attacks.)"
			},
			{
				"name": "Turbulent Toxicity of Love",
				"description": "Lowers the target’s Rock Type Rebuff by one rank the first time the user’s attack move is successful each battle. Reduces the user’s sync move countdown by three the first time its attack move is successful each battle."
			},
			{
				"name": "Team S-Move: Special Boost ↑2 9",
				"description": "Increases the user’s Special Moves ↑ Next effect by two ranks after your team’s sync pair uses their sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex)Alola’s Immeasurable Love",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Alola theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Villain",
				"description": ""
			},
			{
				"name": "Sygna Suit",
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
				"name": "(b move) Entrancing Lantern Power Gem",
				"type": "Rock",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)The more the user’s sync buff is raised, the greater the power of this attack. (The maximum increase is 10 ranks.) Lowers the target’s Sp.&nbsp;Def by two stat ranks. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Rock Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Rock Zone. (A Rock Zone powers up Rock-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Shimmering Moon Meteor Beam",
				"type": "Rock",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "260-312",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)The user gets ready to attack. Raises the user’s Sp.&nbsp;Atk by one stat rank when it gets ready to attack. (The user’s Sp.&nbsp;Atk will not rise if it has not gotten ready to attack.) Using this move again will cause the user to leave this posture, then attack. No other actions can be taken while ready to attack. The preparation period is skipped when the user has the Enduring effect applied, and it will attack right away. Never misses. The more the user’s sync buff is raised, the greater the power of this attack. (The maximum increase is 10 ranks.) The power of this move is not lowered even if there are multiple targets. Restores the user’s HP by approximately 20% of its maximum HP. If the remaining MP for the user’s Rock Wish is one or more when attacking with this move, reduces those MP by one and turns the field of play’s zone into a Rock Zone. (A Rock Zone powers up Rock-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "Such a Strange Feeling...",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Gradual Healing effect to the user. Applies the Damage Guard Next effect to the user. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Pouring Limitless Love Meteor Beam",
				"type": "Rock",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}