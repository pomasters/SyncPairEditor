export const HILBERT_KYUREM = {
	"bg": "./v/v2.63.0/Tx_ch0020_90_toya_mindscape00.png",
	"trainer": {
		"name": "Hilbert (Champion)",
		"images": {
			"base": "./v/v2.63.0/ch0020_90_toya_1024.png",
			"ex": "./v/v2.63.0/ch0020_90_toya_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Special Strike",
	"pokemonType": "Ice",
	"pokemonWeakness": "Steel",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "(shiny)Kyurem",
			"formName": "White Kyurem",
			"stats": {
				"hp": "686",
				"atk": "292",
				"def": "186",
				"spa": "380",
				"spd": "199",
				"spe": "307"
			},
			"statsLVL150": {
				"hp": "718",
				"atk": "308",
				"def": "196",
				"spa": "400",
				"spd": "209",
				"spe": "323"
			},
			"statsLVL200": {
				"hp": "878",
				"atk": "388",
				"def": "246",
				"spa": "500",
				"spd": "259",
				"spe": "403"
			},
			"image": "./v/v2.63.0/pm0646_12_kyurem_rare_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sudden Whiteout",
				"description": "Reduces the user’s sync move countdown by one the first time its Pokémon uses a status move each battle. Turns the field of play’s zone into an EX Ice Zone the first time the user’s Pokémon uses a status move each battle. (An EX Ice Zone powers up Ice-type attacks.) Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Grants all of the following effects when the user is attacking: Ignores the target’s passive skills that would reduce the damage of attacks. Ignores the target’s passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
			},
			{
				"name": "Ultracold Air",
				"description": "The power of the user’s Ice Beam is doubled. Lowers the target’s Sp. Def by three stat ranks when the user’s attack move against it is successful. Increases the user’s Special Moves ↑ Next effect by three ranks when its attack move is successful."
			},
			{
				"name": "Ally Hits Status Cond Opp: Sync Move Boost ↑2 9",
				"description": "Increases an ally’s Sync Move ↑ Next effect by two ranks when its attack move is successful against an opponent that is affected by a status condition."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Unova’s Gentle Hero",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Unova theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Raises the user’s Sp. Atk by six stat ranks when it enters a battle."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Ice",
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
				"name": "Ice Beam",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "46-55",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target frozen."
			},
			{
				"user": "Pokemon",
				"name": "Noble Roar",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Attack and Sp. Atk by one stat rank."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Absolute Zero Ice Burn",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)The user gets ready to attack. Using this move again will cause the user to leave this posture, then attack. No other actions can be taken while ready to attack. The preparation period is skipped when the user’s Special Moves ↑ Next effect is increased, and the user will attack right away. Never misses. Leaves the target burned."
			},
			{
				"user": "Trainer",
				"name": "Hero in White’s Glory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Increases the Special Moves ↑ Next effect of an ally by three ranks. Increases the Sync Move ↑ Next effect of an ally by five ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Foreseeing the Truth Ice Burn",
				"type": "Ice",
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

export const HILDA_IRONLEAVES = {
	"bg": "./v/v2.63.0/Tx_ch0004_90_toko_mindscape00.png",
	"trainer": {
		"name": "Hilda (Champion)",
		"images": {
			"base": "./v/v2.63.0/ch0004_90_toko_1024.png",
			"ex": "./v/v2.63.0/ch0004_90_toko_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Bug",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Iron Leaves",
			"formName": "",
			"stats": {
				"hp": "694",
				"atk": "390",
				"def": "143",
				"spa": "180",
				"spd": "161",
				"spe": "332"
			},
			"statsLVL150": {
				"hp": "726",
				"atk": "410",
				"def": "151",
				"spa": "190",
				"spd": "169",
				"spe": "350"
			},
			"statsLVL200": {
				"hp": "886",
				"atk": "510",
				"def": "191",
				"spa": "240",
				"spd": "209",
				"spe": "440"
			},
			"image": "./v/v2.63.0/pm1010_00_00_tetsunoisaha_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Shining Blades of the Future",
				"description": "Grants all of the following effects when the user uses BoosterEnergy or an ally turns the field of play’s terrain into Electric Terrain: Reduces the user’s sync move countdown by one. Increases the user’s Physical Moves ↑ Next effect by two ranks."
			},
			{
				"name": "Future-Honed Strike",
				"description": "Normal-type moves become Psychic-type moves. Decreases the amount of move gauge slots the user needs to use Giga Impact by one. Lowers the target’s Defense by three stat ranks when the user’s attack move against it is successful."
			},
			{
				"name": "Unwavering Steel Justice",
				"description": "Powers up the user’s sync move when a terrain applies to the field of play. Protects the user against critical hits when a terrain applies to the field of play."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Unova’s Hotblooded Girl",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Unova theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
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
				"name": "Giga Impact",
				"type": "Psychic",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "223-267",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
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
				"description": "Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by one rank."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Shining Sword Psyblade",
				"type": "Psychic",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "350-420",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Makes the target flinch. The power of this move is not lowered even if there are multiple targets. This attack’s power increases 50% when a terrain applies to the field of play. Turns the field of play’s terrain into Electric Terrain when the terrain is Electric Terrain. Turns the field of play’s terrain into Grassy Terrain when the terrain is Grassy Terrain. Turns the field of play’s terrain into Psychic Terrain when the terrain is Psychic Terrain."
			},
			{
				"user": "Trainer",
				"name": "Glory of the Burning Fight!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Electric Terrain. Raises the user’s Attack by six stat ranks. Applies the Free Move Next effect to the user. Increases the user’s Physical Moves ↑ Next effect by two ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "A Future of Helping One Another Psyblade",
				"type": "Psychic",
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

export const HILDA_MIENFOO = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Hilda",
		"images": {
			"base": "./v/v2.63.0/ch0004_00_toko_1024.png",
			"ex": "./v/v2.63.0/ch0004_00_toko_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Mienfoo",
			"formName": "",
			"stats": {
				"hp": "638",
				"atk": "180",
				"def": "225",
				"spa": "156",
				"spd": "223",
				"spe": "309"
			},
			"statsLVL150": {
				"hp": "668",
				"atk": "190",
				"def": "237",
				"spa": "164",
				"spd": "235",
				"spe": "325"
			},
			"statsLVL200": {
				"hp": "818",
				"atk": "240",
				"def": "297",
				"spa": "204",
				"spd": "295",
				"spe": "405"
			},
			"image": "./v/v2.63.0/pm0619_00_kojofu_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hit: HP Recovery 9",
				"description": "Restores the user’s HP when its attack move is successful."
			},
			{
				"name": "Defense Crush 9",
				"description": "Lowers the target’s Defense by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Unflappable",
				"description": "Prevents the user from flinching."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Fighting",
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
				"name": "Low Sweep",
				"type": "Fighting",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "30-36",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by one stat rank."
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
				"user": "Pokemon",
				"name": "Rock Smash",
				"type": "Fighting",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "46-55",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (50%) of lowering the target’s Defense by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Ready to Go!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Strengthened Spirit Fighting Impact",
				"type": "Fighting",
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

export const LANCE_CHARIZARD = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Lance",
		"images": {
			"base": "./v/v2.63.0/ch0111_00_wataru_1024.png",
			"ex": "./v/v2.63.0/ch0111_00_wataru_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Field",
	"pokemonType": "Flying",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Charizard",
			"formName": "",
			"stats": {
				"hp": "657",
				"atk": "356",
				"def": "154",
				"spa": "268",
				"spd": "158",
				"spe": "335"
			},
			"statsLVL150": {
				"hp": "687",
				"atk": "374",
				"def": "162",
				"spa": "282",
				"spd": "166",
				"spe": "353"
			},
			"statsLVL200": {
				"hp": "837",
				"atk": "464",
				"def": "202",
				"spa": "352",
				"spd": "206",
				"spe": "443"
			},
			"image": "./v/v2.63.0/pm0006_00_lizardon_256.png"
		},
		{
			"name": "Mega Charizard Y",
			"formName": "",
			"stats": {
				"hp": "657",
				"atk": "427",
				"def": "154",
				"spa": "268",
				"spd": "158",
				"spe": "402"
			},
			"statsLVL150": {
				"hp": "687",
				"atk": "448",
				"def": "162",
				"spa": "282",
				"spd": "166",
				"spe": "423"
			},
			"statsLVL200": {
				"hp": "837",
				"atk": "556",
				"def": "202",
				"spa": "352",
				"spd": "206",
				"spe": "531"
			},
			"image": "./v/v2.63.0/pm0006_52_megalizardonY_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Caped Champion’s Spirit",
				"description": "Grants all of the following effects when the user enters a battle: Raises the user’s Attack by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. Increases the user’s Physical Moves ↑ Next effect by three ranks."
			},
			{
				"name": "Dragon’s Ascent",
				"description": "Normal-type moves become Flying-type moves. The user’s moves never miss. Protects the user against critical hits."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Flying",
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
				"user": "Pokemon",
				"name": "(b move) Dragon King’s Slash",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Critical hits land more easily. Lowers the target’s Defense by two stat ranks. The power of this move is not lowered even if there are multiple targets. If the user’s Charizard has Mega Evolved, also increases the user’s Physical Moves ↑ Next effect by two ranks."
			},
			{
				"user": "Trainer",
				"name": "Considerable Skill!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Increases the user’s Physical Moves ↑ Next effect by three ranks. Increases the user’s Sync Move ↑ Next effect by five ranks. The user takes damage equal to 20% of its remaining HP."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Long and Difficult Journey Flying Impact",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega Charizard Y until the end of battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ARVEN_SCOVILLAIN = {
	"bg": "./v/v2.63.0/Tx_ch0317_40_pepper_mindscape00.png",
	"trainer": {
		"name": "Arven (Holiday 2025)",
		"images": {
			"base": "./v/v2.63.0/ch0317_40_pepper_1024.png",
			"ex": "./v/v2.63.0/ch0317_40_pepper_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Scovillain",
			"formName": "",
			"stats": {
				"hp": "690",
				"atk": "312",
				"def": "188",
				"spa": "448",
				"spd": "188",
				"spe": "308"
			},
			"statsLVL150": {
				"hp": "722",
				"atk": "328",
				"def": "198",
				"spa": "472",
				"spd": "198",
				"spe": "324"
			},
			"statsLVL200": {
				"hp": "882",
				"atk": "408",
				"def": "248",
				"spa": "592",
				"spd": "248",
				"spe": "404"
			},
			"image": "./v/v2.63.0/pm0952_00_00_scovillain_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Appetizing Super-Spicy Cooking",
				"description": "Reduces MP by one for the user’s moves that have the Berry effect tag and reduces its sync move countdown by one after your team’s sync pair uses their sync move."
			},
			{
				"name": "Arven’s Special Hot Sauce",
				"description": "Reduces the user’s sync move countdown by two after using its sync move while the remaining MP for its moves that have the Berry effect tag is one or more."
			},
			{
				"name": "BOGO 9",
				"description": "Applies the Free Move Next effect to the user when its move is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Fire",
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
				"name": "Seasonal Outfit",
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
				"name": "Fire Blast",
				"type": "Fire",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "116-139",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target burned."
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
				"effect": "-",
				"description": "Removes all status conditions from an ally."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Super-Spicy Overheat",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Never misses. Increases the Special Moves ↑ Next effect of all allied sync pairs by one to four ranks at random. (The increase is the same for all allied sync pairs.)"
			},
			{
				"user": "Trainer",
				"name": "Lemme Show Off!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp. Atk by four stat ranks. Raises the user’s accuracy by one stat rank. Raises the user’s critical-hit rate by three stat ranks. Increases the user’s Special Moves ↑ Next effect by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Real Spicy Flavor Fire Beam",
				"type": "Fire",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const CARMINE_PECHARUNT = {
	"bg": "./v/v2.63.0/Tx_ch0356_10_zeiyu_mindscape00.png",
	"trainer": {
		"name": "Sygna Suit Carmine",
		"images": {
			"base": "./v/v2.63.0/ch0356_10_zeiyu_1024.png",
			"ex": "./v/v2.63.0/ch0356_10_zeiyu_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Sprint",
	"pokemonType": "Poison",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Pecharunt",
			"formName": "",
			"stats": {
				"hp": "685",
				"atk": "336",
				"def": "167",
				"spa": "424",
				"spd": "143",
				"spe": "304"
			},
			"statsLVL150": {
				"hp": "717",
				"atk": "354",
				"def": "175",
				"spa": "446",
				"spd": "151",
				"spe": "320"
			},
			"statsLVL200": {
				"hp": "877",
				"atk": "444",
				"def": "215",
				"spa": "556",
				"spd": "191",
				"spe": "400"
			},
			"image": "./v/v2.63.0/pm1025_00_00_momowarou_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "C’mon, Let’s Finish This!",
				"description": "Reduces the MP for the user’s Move Gauge Boost by one and grants all of the following effects after your team’s sync pair uses their sync move: Applies Paldea Circle (Special) to the allied field of play. Increases the user’s Special Moves ↑ Next effect by three ranks. Charges the user’s move gauge by six."
			},
			{
				"name": "That Crit Came Out of Nowhere!",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Restores one MP of the user’s buddy move after your team’s sync pair uses their sync move."
			},
			{
				"name": "Didn’t Hit Your Head, Did You?",
				"description": "Lowers the target’s Sp. Def by two stat ranks when the user’s attack move is successful against a confused opponent. Increases the user’s Sync Move ↑ Next effect by two ranks when its attack move is successful against a poisoned or badly poisoned opponent."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Cool Girl from Kitakami",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Paldea theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Extends the duration of Paldea Circle (Special) when Paldea Circle (Special) is applied to the allied field of play."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Poison",
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
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Malignant Chain",
				"type": "Poison",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (50%) of leaving the target badly poisoned."
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
				"description": "Charges the user’s move gauge by three."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Corrosive Malignant Chain",
				"type": "Poison",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Leaves the target badly poisoned. Leaves the target confused. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "I’m Gonna Crush You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Raises the user’s Sp. Atk by six stat ranks. Increases the user’s Special Moves ↑ Next effect by two ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Teach ’Em Who’s Better Malignant Chain",
				"type": "Poison",
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