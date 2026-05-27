export const ETHAN_RAIKOU = {
	"bg": "./v/v2.69.0/Tx_ch0112_91_hibiki_mindscape00.png",
	"trainer": {
		"name": "Ethan (Champion)",
		"images": {
			"base": "./v/v2.69.0/ch0112_91_hibiki_1024.png",
			"ex": "./v/v2.69.0/ch0112_91_hibiki_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Raikou",
			"formName": "",
			"stats": {
				"hp": "688",
				"atk": "244",
				"def": "314",
				"spa": "244",
				"spd": "328",
				"spe": "338"
			},
			"statsLVL150": {
				"hp": "720",
				"atk": "256",
				"def": "330",
				"spa": "256",
				"spd": "344",
				"spe": "356"
			},
			"statsLVL200": {
				"hp": "880",
				"atk": "316",
				"def": "410",
				"spa": "316",
				"spd": "424",
				"spe": "446"
			},
			"image": "./v/v2.69.0/pm0243_00_raikou_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Earth-Shaking Roar",
				"description": "Grants all of the following effects when the terrain is Electric Terrain: Powers up the moves of all allied sync pairs. Powers up the sync moves of all allied sync pairs. Reduces attack move damage taken by allies."
			},
			{
				"name": "Rough and Swirling Electric Energy",
				"description": "Raises the Attack, Defense, Sp. Atk, and Sp. Def of all allied sync pairs by two stat ranks when the user’s attack move is successful."
			},
			{
				"name": "Debut / 1st S-Move: Johto C (Phys & Spec) on Field",
				"description": "Applies Johto Circle (Physical) and Johto Circle (Special) to the allied field of play the first time the user enters a battle each battle. Applies Johto Circle (Physical) and Johto Circle (Special) to the allied field of play the first time the user’s sync move is used each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Johto’s Thundering Legend",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Johto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Electric",
				"description": ""
			},
			{
				"name": "Johto",
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
				"name": "Pokéathlete",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "(b move) Reigning Thunder Fang",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When a circle is applied to the allied field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Defense by two stat ranks. Leaves the target paralyzed. Has a chance (50%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "Max Revive",
				"type": "Trainer",
				"gauge": "1",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Endure and Restore effect to an ally."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Thunderous Roar Wild Charge",
				"type": "Electric",
				"gauge": "2",
				"uses": "3",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. The power of this move is not lowered even if there are multiple targets. Turns the field of play’s terrain into Electric Terrain. Reduces the user’s sync move countdown by one. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "Thundering Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Restores the user’s HP by approximately 20% of its maximum HP. Restores the HP of all allied sync pairs by approximately 30% of their maximum HP. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Lightning Dasher Wild Charge",
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

export const AKARI_MIMEJR = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Akari",
		"images": {
			"base": "./v/v2.69.0/ch0291_00_sho_1024.png",
			"ex": "./v/v2.69.0/ch0291_00_sho_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Mime Jr.",
			"formName": "",
			"stats": {
				"hp": "642",
				"atk": "112",
				"def": "201",
				"spa": "244",
				"spd": "227",
				"spe": "265"
			},
			"statsLVL150": {
				"hp": "672",
				"atk": "118",
				"def": "211",
				"spa": "256",
				"spd": "239",
				"spe": "279"
			},
			"statsLVL200": {
				"hp": "822",
				"atk": "148",
				"def": "261",
				"spa": "316",
				"spd": "299",
				"spe": "349"
			},
			"image": "./v/v2.69.0/pm0439_00_manene_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Take SE Hit: P-Move DR & S-Move DR 5",
				"description": "Reduces damage taken by the user from super effective moves and super effective sync moves."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Aggravation 9",
				"description": "Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Psychic",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Scarf",
				"description": ""
			},
			{
				"name": "Hisui Adventurer",
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
				"name": "Light Screen",
				"type": "Psychic",
				"gauge": "3",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Special Damage Reduction effect to the allied field of play."
			},
			{
				"user": "Trainer",
				"name": "It’s My Responsibility!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp.&nbsp;Def of all allied sync pairs by four stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Reliable Mentor Psychic Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const LYRA_ENTEI = {
	"bg": "./v/v2.69.0/Tx_ch0002_90_kotone_mindscape00.png",
	"trainer": {
		"name": "Lyra (Champion)",
		"images": {
			"base": "./v/v2.69.0/ch0002_90_kotone_1024.png",
			"ex": "./v/v2.69.0/ch0002_90_kotone_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Entei",
			"formName": "",
			"stats": {
				"hp": "674",
				"atk": "468",
				"def": "151",
				"spa": "336",
				"spd": "156",
				"spe": "292"
			},
			"statsLVL150": {
				"hp": "706",
				"atk": "492",
				"def": "159",
				"spa": "354",
				"spd": "164",
				"spe": "308"
			},
			"statsLVL200": {
				"hp": "866",
				"atk": "612",
				"def": "199",
				"spa": "444",
				"spd": "204",
				"spe": "388"
			},
			"image": "./v/v2.69.0/pm0244_00_entei_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Land of Bursting Fire",
				"description": "Grants all of the following effects the first time the user enters a battle each battle: Reduces the user’s sync move countdown by three. Raises the user’s Attack by six stat ranks. Increases the user’s Physical Moves ↑ Next effect by two ranks."
			},
			{
				"name": "Uncontainable Volcanic Power",
				"description": "Grants all of the following effects after your team’s sync pair uses their sync move: Restores the user’s HP by approximately 20% of its maximum HP. Increases the user’s Physical Moves ↑ Next effect by two ranks. Restores one MP of the user’s buddy move."
			},
			{
				"name": "P-Moves & S-Moves Crit",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Johto’s Flaming Legend",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Johto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
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
				"name": "Johto",
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
				"name": "Pokéathlete",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "(b move) Reigning Sacred Fire",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "220-264",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Removes the frozen condition from the user. Never misses. The more the user’s sync buff is raised, the greater the power of this attack. (The maximum increase is 10 ranks.) Lowers the target’s Attack and Defense by two stat ranks. Leaves the target burned."
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
				"name": "(b move) Entrapping Blaze Flare Blitz",
				"type": "Fire",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Removes the frozen condition from the user. Never misses. The more the user’s sync buff is raised, the greater the power of this attack. (The maximum increase is 10 ranks.) Leaves the target burned. The power of this move is not lowered even if there are multiple targets. If the remaining MP for the user’s Super(lb)Effective ↑ is one or more when attacking with this move, reduces those MP by one and grants all of the following effects: Makes the weather sunny. Applies the Supereffective&nbsp;↑ Next effect to the user."
			},
			{
				"user": "Trainer",
				"name": "Erupting Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Increases the user’s Physical Moves&nbsp;↑ Next effect by three&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Youthful Eruption Sacred Fire",
				"type": "Fire",
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

export const RAIFORT_GENGAR = {
	"bg": "./v/v2.69.0/Tx_ch0348_00_raifort_mindscape00.png",
	"trainer": {
		"name": "Raifort",
		"images": {
			"base": "./v/v2.69.0/ch0348_00_raifort_1024.png",
			"ex": "./v/v2.69.0/ch0348_00_raifort_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Gengar",
			"formName": "Tera Type: Ghost",
			"stats": {
				"hp": "678",
				"atk": "176",
				"def": "308",
				"spa": "224",
				"spd": "308",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "710",
				"atk": "184",
				"def": "324",
				"spa": "236",
				"spd": "324",
				"spe": "328"
			},
			"statsLVL200": {
				"hp": "870",
				"atk": "224",
				"def": "404",
				"spa": "296",
				"spd": "404",
				"spe": "408"
			},
			"image": "./v/v2.69.0/pm0094_00_gangar_256.png"
		},
		{
			"name": "Gengar",
			"formName": "Tera Type: Ghost",
			"stats": {
				"hp": "678",
				"atk": "176",
				"def": "308",
				"spa": "224",
				"spd": "308",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "710",
				"atk": "184",
				"def": "324",
				"spa": "236",
				"spd": "324",
				"spe": "328"
			},
			"statsLVL200": {
				"hp": "870",
				"atk": "224",
				"def": "404",
				"spa": "296",
				"spd": "404",
				"spe": "408"
			},
			"image": "./v/v2.69.0/pm0094_71_14_gangar_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Debut: Ghost S-Tera",
				"description": "The user Sync Terastallizes into Ghost type the first time it enters a battle each battle."
			},
			{
				"name": "Power of a Deeply Held Grudge",
				"description": "When the user’s status move is used and inflicted a status condition on an opponent, inflicts the same status condition on all opposing sync pairs. Lowers the target’s Attack and Sp. Atk by one stat rank when the user’s attack move is successful against targets that are affected by a status condition."
			},
			{
				"name": "Ghost Zone: Team P-Moves & S-Moves DR 2",
				"description": "Reduces damage when an ally is hit by an attack move or sync move while the zone is a Ghost Zone."
			}
		],
		"passives2": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Do Your Thing, Technology!",
				"description": "Doubles the current number of Physical Moves ↑ Next effect and Special Moves ↑ Next effect ranks of all allied sync pairs the first time the user’s sync move is used each battle."
			},
			{
				"name": "Power of a Deeply Held Grudge",
				"description": "When the user’s status move is used and inflicted a status condition on an opponent, inflicts the same status condition on all opposing sync pairs. Lowers the target’s Attack and Sp. Atk by one stat rank when the user’s attack move is successful against targets that are affected by a status condition."
			},
			{
				"name": "Ghost Zone: Team P-Moves & S-Moves DR 2",
				"description": "Reduces damage when an ally is hit by an attack move or sync move while the zone is a Ghost Zone."
			}
		],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "The Explorer of Antiquity",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Reduces the sync move countdown by one the first time the user’s sync move is used each battle. Powers up the moves of all allied sync pairs when attacking a target that is poisoned or badly poisoned."
			}
		],
		"themes": [
			{
				"name": "Ghost",
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
				"name": "Toxic",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target badly poisoned."
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
				"effect": "-",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Scintillating Souls Confuse Ray",
				"type": "Ghost",
				"gauge": "2",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Leaves all opposing sync pairs confused. Turns the field of play’s zone into a Ghost Zone. (A Ghost Zone powers up Ghost-type attacks.) Reduces the user’s sync move countdown by one. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank."
			},
			{
				"user": "Trainer",
				"name": "History Is Wonderful!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by four stat ranks. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank. Applies the Damage Guard Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Imparting Past Knowledge Tera Blast",
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
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "Toxic",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target badly poisoned."
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
				"effect": "-",
				"description": "Restores an ally’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Pokemon2",
				"name": "(tera)(b move) Scintillating Souls Confuse Ray",
				"type": "Ghost",
				"gauge": "2",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Leaves all opposing sync pairs confused. Turns the field of play’s zone into a Ghost Zone. (A Ghost Zone powers up Ghost-type attacks.) Reduces the user’s sync move countdown by one. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank."
			},
			{
				"user": "Trainer",
				"name": "History Is Wonderful!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by four stat ranks. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank. Applies the Damage Guard Next effect to the user."
			}
		],
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Tanzanite Tera Blast",
				"type": "Ghost",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Defense and Sp. Def by one stat rank."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SABI_RHYPERIOR = {
	"bg": "./v/v2.69.0/Tx_ch0315_00_wasabi_mindscape00.png",
	"trainer": {
		"name": "Sabi",
		"images": {
			"base": "./v/v2.69.0/ch0315_00_wasabi_1024.png",
			"ex": "./v/v2.69.0/ch0315_00_wasabi_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Physical Strike",
	"pokemonType": "Ground",
	"pokemonWeakness": "Water",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Rhyperior",
			"formName": "",
			"stats": {
				"hp": "702",
				"atk": "448",
				"def": "201",
				"spa": "132",
				"spd": "183",
				"spe": "280"
			},
			"statsLVL150": {
				"hp": "736",
				"atk": "472",
				"def": "211",
				"spa": "138",
				"spd": "193",
				"spe": "294"
			},
			"statsLVL200": {
				"hp": "906",
				"atk": "592",
				"def": "261",
				"spa": "168",
				"spd": "243",
				"spe": "364"
			},
			"image": "./v/v2.69.0/pm0464_01_dosidon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sinnoh Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Sinnoh theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "You Got Cold Feet?",
				"description": "Grants all of the following effects the first time the user enters a battle each battle: Applies Sinnoh Circle (Physical) to the allied field of play. Raises the user’s Attack by six stat ranks. Increases the user’s Physical Moves ↑ Next effect by two ranks."
			},
			{
				"name": "Try and Catch Me!",
				"description": "Applies the Free Move Next effect to the user when its attack move (except its buddy move) is successful while the remaining MP for its buddy move is zero. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when the user’s attack move (except its buddy move) is successful while the remaining MP for its buddy move is zero."
			},
			{
				"name": "Soften Up 1",
				"description": "Critical hits land more easily when the user attacks with a sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Carefree Clairvoyance",
				"description": "Reduces the user’s sync move countdown by one the first time its sync move is used each battle. Turns the field of play’s zone into a Ground Zone the first time the user’s sync move is used each battle. (A Ground Zone powers up Ground-type attacks.) Extends the duration of the Ground Zone when the zone turns into a Ground Zone while the user is on the field."
			}
		],
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
				"name": "Pigtails",
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
				"name": "Earthquake",
				"type": "Ground",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Sinnoh Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Sinnoh Circle (Physical) to the allied field of play. Sinnoh Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Sinnoh theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Earth-Smashing Drill Run",
				"type": "Ground",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Physical Moves&nbsp;↑ Next effect is increased.(lb)Deactivation Condition: When the user’s Physical Moves&nbsp;↑ Next effect is not increased.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks. Grants all of the following effects the first time this attack move is successful each battle: Applies the Physical Move Break effect to the target. Reduces the user’s sync move countdown by two. Increases the user’s Physical Moves&nbsp;↑ Next effect by double the number of ranks consumed when using this move."
			},
			{
				"user": "Trainer",
				"name": "The Real Question!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s critical-hit rate by three stat ranks. Applies the Supereffective&nbsp;↑ Next effect to the user. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Clairvoyant Drill Run",
				"type": "Ground",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}