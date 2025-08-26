export const RED_CHARIZARD = {
	"bg": "./v/v2.60.0/Tx_ch0000_40_red_mindscape00.png",
	"trainer": {
		"name": "Red (Anniversary 2025)",
		"images": {
			"base": "./v/v2.60.0/ch0000_40_red_1024.png",
			"ex": "./v/v2.60.0/ch0000_40_red_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Tech",
	"pokemonType": "Dragon",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Charizard",
			"formName": "Tera Type: Dragon",
			"stats": {
				"hp": "689",
				"atk": "419",
				"def": "163",
				"spa": "336",
				"spd": "163",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "441",
				"def": "171",
				"spa": "354",
				"spd": "171",
				"spe": "354"
			},
			"statsLVL200": {
				"hp": "881",
				"atk": "551",
				"def": "211",
				"spa": "444",
				"spd": "211",
				"spe": "444"
			},
			"image": "./v/v2.60.0/pm0006_00_lizardon_256.png"
		},
		{
			"name": "Charizard",
			"formName": "Tera Type: Dragon",
			"stats": {
				"hp": "689",
				"atk": "419",
				"def": "163",
				"spa": "336",
				"spd": "163",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "721",
				"atk": "441",
				"def": "171",
				"spa": "354",
				"spd": "171",
				"spe": "354"
			},
			"statsLVL200": {
				"hp": "881",
				"atk": "551",
				"def": "211",
				"spa": "444",
				"spd": "211",
				"spe": "444"
			},
			"image": "./v/v2.60.0/pm0006_71_15_lizardon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Debut: Dragon S-Tera",
				"description": "The user Sync Terastallizes into Dragon type the first time it enters a battle each battle."
			},
			{
				"name": "Dragon Aura Overflow",
				"description": "Turns the field of play’s zone into a Dragon Zone the first time the user’s attack move is successful each battle. Turns the field of play’s zone into a Dragon Zone the first time the user’s sync move is used each battle. (A Dragon Zone powers up Dragon-type attacks.) Extends the duration of the Dragon Zone when the zone turns into a Dragon Zone while the user is on the field."
			},
			{
				"name": "Living Legend’s Intuition",
				"description": "Applies Kanto Circle (Physical) to the allied field of play the first time the user’s sync move is used each battle. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passives2": [
			{
				"name": "Shine of the Silent Fighting Spirit",
				"description": "Raises the user’s Attack by six stat ranks when it Sync Terastallizes. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move. Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by one rank when its attack move hits."
			},
			{
				"name": "Dragon Aura Overflow",
				"description": "Turns the field of play’s zone into a Dragon Zone the first time the user’s attack move is successful each battle. Turns the field of play’s zone into a Dragon Zone the first time the user’s sync move is used each battle. (A Dragon Zone powers up Dragon-type attacks.) Extends the duration of the Dragon Zone when the zone turns into a Dragon Zone while the user is on the field."
			},
			{
				"name": "Living Legend’s Intuition",
				"description": "Applies Kanto Circle (Physical) to the allied field of play the first time the user’s sync move is used each battle. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passivesMaster": [
			{
				"name": "(ex) Kanto’s Shining Legend",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kanto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Increases the user’s Physical Moves ↑ Next effect by three ranks after using its sync move."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Dragon",
				"description": ""
			},
			{
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
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
				"name": "(b move) Shining Dragon Claw",
				"type": "Dragon",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Never misses. Applies the Physical Move Break effect to the target. This attack’s power is doubled when the user’s team does not have a sync buff. Lowers the target’s Defense by six stat ranks when the user’s team does not have a sync buff."
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
				"name": "(b move) Treasured Scales Outrage",
				"type": "Dragon",
				"gauge": "4",
				"uses": "1",
				"category": "Physical",
				"power": "66-79",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Never misses. The more the user’s Special Moves&nbsp;↑ Next effect is increased, the greater the power of this attack. Removes all of the user’s Special Moves&nbsp;↑ Next effect ranks."
			},
			{
				"user": "Trainer",
				"name": "Shine for Victory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Applies the Supereffective&nbsp;↑ Next effect to the user. Increases the user’s Physical Moves&nbsp;↑ Next effect by three&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Shine at the Summit Tera Blast",
				"type": "Dragon",
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
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "(b move)(tera) Shining Dragon Claw",
				"type": "Dragon",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Never misses. Applies the Physical Move Break effect to the target. This attack’s power is doubled when the user’s team does not have a sync buff. Lowers the target’s Defense by six stat ranks when the user’s team does not have a sync buff."
			},
			{
				"user": "Pokemon2",
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
				"user": "Pokemon2",
				"name": "(b move)(tera) Treasured Scales Outrage",
				"type": "Dragon",
				"gauge": "4",
				"uses": "1",
				"category": "Physical",
				"power": "99-119",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Never misses. The more the user’s Special Moves&nbsp;↑ Next effect is increased, the greater the power of this attack. Removes all of the user’s Special Moves&nbsp;↑ Next effect ranks."
			},
			{
				"user": "Trainer",
				"name": "Shine for Victory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Applies the Supereffective&nbsp;↑ Next effect to the user. Increases the user’s Physical Moves&nbsp;↑ Next effect by three&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Lazulite Tera Blast",
				"type": "Dragon",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses. Charges the user’s move gauge by one for each hit. Increases the user’s Sync Move ↑ Next effect by one rank for each hit."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const IRIDA_TYPHLOSION = {
	"bg": "./v/v2.60.0/Tx_ch0285_41_kai_mindscape00.png",
	"trainer": {
		"name": "Irida (Anniversary 2025)",
		"images": {
			"base": "./v/v2.60.0/ch0285_41_kai_1024.png",
			"ex": "./v/v2.60.0/ch0285_41_kai_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Special Strike",
	"pokemonType": "Poison",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Typhlosion",
			"formName": "Hisuian Form (Tera Type: Poison)",
			"stats": {
				"hp": "650",
				"atk": "278",
				"def": "185",
				"spa": "336",
				"spd": "185",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "292",
				"def": "195",
				"spa": "354",
				"spd": "195",
				"spe": "328"
			},
			"statsLVL200": {
				"hp": "830",
				"atk": "362",
				"def": "245",
				"spa": "444",
				"spd": "245",
				"spe": "408"
			},
			"image": "./v/v2.60.0/pm0157_00_41_bakphoon_256.png"
		},
		{
			"name": "Typhlosion",
			"formName": "Hisuian Form (Tera Type: Poison)",
			"stats": {
				"hp": "650",
				"atk": "278",
				"def": "185",
				"spa": "336",
				"spd": "185",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "292",
				"def": "195",
				"spa": "354",
				"spd": "195",
				"spe": "328"
			},
			"statsLVL200": {
				"hp": "830",
				"atk": "362",
				"def": "245",
				"spa": "444",
				"spd": "245",
				"spe": "408"
			},
			"image": "./v/v2.60.0/pm0157_74_08_bakphoon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Debut: Poison S-Tera",
				"description": "The user Sync Terastallizes into Poison type the first time it enters a battle each battle."
			},
			{
				"name": "Soul-Eating Space",
				"description": "Normal-type moves become Poison-type moves. Turns the field of play’s zone into an EX Poison Zone the first time the user’s attack move is successful each battle. (An EX Poison Zone powers up Poison-type attacks.)"
			},
			{
				"name": "Deciding with Caution and Foresight",
				"description": "Applies Sinnoh Circle (Special) to the allied field of play the first time the user’s sync move is used each battle. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passives2": [
			{
				"name": "Help Quell the Battle",
				"description": "Increases an ally’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by one rank when its attack move is successful against an opponent that is affected by a status condition. Increases an ally’s Sync Move ↑ Next effect by two ranks when its attack move is successful against an opponent that is affected by a status condition."
			},
			{
				"name": "Soul-Eating Space",
				"description": "Normal-type moves become Poison-type moves. Turns the field of play’s zone into an EX Poison Zone the first time the user’s attack move is successful each battle. (An EX Poison Zone powers up Poison-type attacks.)"
			},
			{
				"name": "Deciding with Caution and Foresight",
				"description": "Applies Sinnoh Circle (Special) to the allied field of play the first time the user’s sync move is used each battle. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passivesMaster": [
			{
				"name": "Hisui’s Shining Pearl",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Sinnoh theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Restores the HP of all allied sync pairs by approximately 20% of their maximum HP the first time the user’s sync move is used each battle."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Nature Lover",
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
				"name": "(b move) Illusory Light Hex",
				"type": "Ghost",
				"gauge": "1",
				"uses": "1",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon affected by a status condition on the opponent’s field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)This attack’s power is doubled when the target is affected by a status condition. Lowers the target’s accuracy by three stat ranks. Applies the Special Move Break effect to the target."
			},
			{
				"user": "Trainer",
				"name": "Super Potion",
				"type": "Trainer",
				"gauge": "1",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Restores an ally’s HP by approximately 60% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Graceful Hyper Beam",
				"type": "Poison",
				"gauge": "4",
				"uses": "2",
				"category": "Special",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon affected by a status condition on the opponent’s field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)The power of this move is not lowered even if there are multiple targets. This attack’s power is doubled when the target is affected by a status condition. Applies the Supereffective&nbsp;↑ Next effect to the user when its team does not have a sync buff. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks when its team does not have a sync buff. Reduces the user’s sync move countdown by two when its team has a sync buff."
			},
			{
				"user": "Trainer",
				"name": "Strength in Numbers!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces an ally’s sync move countdown by one. Raises an ally’s Sp.&nbsp;Atk by six stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Space for All to Shine Tera Blast",
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
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "(b move) Illusory Light Hex",
				"type": "Ghost",
				"gauge": "1",
				"uses": "1",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon affected by a status condition on the opponent’s field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)This attack’s power is doubled when the target is affected by a status condition. Lowers the target’s accuracy by three stat ranks. Applies the Special Move Break effect to the target."
			},
			{
				"user": "Trainer",
				"name": "Super Potion",
				"type": "Trainer",
				"gauge": "1",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Restores an ally’s HP by approximately 60% of its maximum HP."
			},
			{
				"user": "Pokemon2",
				"name": "(b move) (tera) Graceful Hyper Beam",
				"type": "Poison",
				"gauge": "4",
				"uses": "2",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon affected by a status condition on the opponent’s field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)The power of this move is not lowered even if there are multiple targets. This attack’s power is doubled when the target is affected by a status condition. Applies the Supereffective&nbsp;↑ Next effect to the user when its team does not have a sync buff. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks when its team does not have a sync buff. Reduces the user’s sync move countdown by two when its team has a sync buff."
			},
			{
				"user": "Trainer",
				"name": "Strength in Numbers!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces an ally’s sync move countdown by one. Raises an ally’s Sp.&nbsp;Atk by six stat ranks. Raises an ally’s critical-hit rate by three stat ranks."
			}
		],
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Amethyst Tera Blast",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Defense and Sp. Def by one stat rank. Leaves the target badly poisoned. The power of this move is not lowered even if there are multiple targets."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const GLORIA_CINDERACE = {
	"bg": "./v/v2.60.0/Tx_ch0243_41_yuri_mindscape00.png",
	"trainer": {
		"name": "Gloria (Anniversary 2025)",
		"images": {
			"base": "./v/v2.60.0/ch0243_41_yuri_1024.png",
			"ex": "./v/v2.60.0/ch0243_41_yuri_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Rock",
	"pokemonWeakness": "Water",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Cinderace",
			"formName": "Tera Type: Rock",
			"stats": {
				"hp": "679",
				"atk": "224",
				"def": "317",
				"spa": "180",
				"spd": "317",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "236",
				"def": "333",
				"spa": "190",
				"spd": "333",
				"spe": "369"
			},
			"statsLVL200": {
				"hp": "871",
				"atk": "296",
				"def": "413",
				"spa": "240",
				"spd": "413",
				"spe": "459"
			},
			"image": "./v/v2.60.0/pm0815_00_00_aceburn_256.png"
		},
		{
			"name": "Cinderace",
			"formName": "Tera Type: Rock",
			"stats": {
				"hp": "679",
				"atk": "224",
				"def": "317",
				"spa": "180",
				"spd": "317",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "236",
				"def": "333",
				"spa": "190",
				"spd": "333",
				"spe": "369"
			},
			"statsLVL200": {
				"hp": "871",
				"atk": "296",
				"def": "413",
				"spa": "240",
				"spd": "413",
				"spe": "459"
			},
			"image": "./v/v2.60.0/pm0815_71_13_aceburn_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Debut: Rock S-Tera",
				"description": "The user Sync Terastallizes into Rock type the first time it enters a battle each battle."
			},
			{
				"name": "Memories of Battling Rock Types",
				"description": "Turns the field of play’s zone into a Rock Zone the first time the user’s attack move is successful each battle. Turns the field of play’s zone into a Rock Zone the first time the user’s sync move is used each battle. (A Rock Zone powers up Rock-type attacks.) Extends the duration of the Rock Zone when the zone turns into a Rock Zone while the user is on the field."
			},
			{
				"name": "The Galar Ace’s Finishing Move",
				"description": "Applies Galar Circle (Defensive) to the allied field of play the first time the user’s sync move is used each battle. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passives2": [
			{
				"name": "Shining Energetic Smile",
				"description": "Grants all of the following effects when the user’s attack move against the target is successful: Restores the HP of all allied sync pairs. Raises the Defense and Sp. Def of all allied sync pairs by two stat ranks. Applies the Free Move Next effect to the user."
			},
			{
				"name": "Memories of Battling Rock Types",
				"description": "Turns the field of play’s zone into a Rock Zone the first time the user’s attack move is successful each battle. Turns the field of play’s zone into a Rock Zone the first time the user’s sync move is used each battle. (A Rock Zone powers up Rock-type attacks.) Extends the duration of the Rock Zone when the zone turns into a Rock Zone while the user is on the field."
			},
			{
				"name": "The Galar Ace’s Finishing Move",
				"description": "Applies Galar Circle (Defensive) to the allied field of play the first time the user’s sync move is used each battle. Raises the sync buff of the user’s team by one rank the first time its sync move is used each battle."
			}
		],
		"passivesMaster": [
			{
				"name": "Galar’s Shining Ace",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Galar theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Applies the Enduring effect to all allied sync pairs the first time the user enters a battle each battle."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
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
				"name": "Pyro Ball",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "172-206",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Removes the frozen condition from the user. Has a chance (10%) of leaving the target burned."
			},
			{
				"user": "Trainer",
				"name": "All the Fun!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Restores the user’s HP by approximately 20% of its maximum HP. Restores the HP of all allied sync pairs by approximately 20% of their maximum HP. Removes all status conditions and the flinching, confused, and trapped conditions from all allied sync pairs."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Meteor Quick Attack",
				"type": "Normal",
				"gauge": "-",
				"uses": "1",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: When this move is used.(lb)(lb)Applies the Physical Move Break effect and Special Move Break effect to the target. Reduces the user’s sync move countdown by three. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by two ranks."
			},
			{
				"user": "Trainer",
				"name": "Get Excited!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp.&nbsp;Atk of all allied sync pairs by six stat ranks. Uses a maximum of three&nbsp;slots of the user’s move gauge. The more amount used, the more it raises the critical-hit rate of all allied sync pairs (can be raised by zero to three stat ranks maximum)."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Max Shining Fun Tera Blast",
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
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Rutile Tera Blast",
				"type": "Rock",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Attack, Defense, Sp. Atk, Sp. Def, and Speed by one stat rank. Has a chance (50%) of making the target flinch."
			}],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const THORTON_REGIGIGAS = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Thorton",
		"images": {
			"base": "./v/v2.60.0/ch0041_00_nejiki_1024.png",
			"ex": "./v/v2.60.0/ch0041_00_nejiki_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Regigigas",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "224",
				"def": "249",
				"spa": "200",
				"spd": "249",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "236",
				"def": "261",
				"spa": "210",
				"spd": "261",
				"spe": "302"
			},
			"statsLVL200": {
				"hp": "871",
				"atk": "296",
				"def": "321",
				"spa": "260",
				"spd": "321",
				"spe": "372"
			},
			"image": "./v/v2.60.0/pm0486_00_00_regigigas_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Move: Team Attack ↑ & Speed ↑ 1",
				"description": "Raises the Attack and Speed of all allied sync pairs by one stat rank when the user’s move is successful."
			},
			{
				"name": "S-Move: Team Physical Boost ↑2 9",
				"description": "Increases the Physical Moves ↑ Next effect of all allied sync pairs by two ranks after using the user’s sync move."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Normal Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Normal theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Normal",
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
				"name": "Stomp",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "53-63",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
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
				"name": "Bzweeeeep!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by three stat ranks. Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Learn Through Battling Normal Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const TRAINER_BUZZWOLE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Trainer (Scottie/Bettie)",
		"images": {
			"base": "./images/trainer_scottie.png",
			"ex": "./images/trainer_bettie.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Bug",
	"pokemonWeakness": "Flying",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Buzzwole",
			"formName": "",
			"stats": {
				"hp": "655",
				"atk": "224",
				"def": "258",
				"spa": "132",
				"spd": "244",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "685",
				"atk": "236",
				"def": "272",
				"spa": "138",
				"spd": "256",
				"spe": "282"
			},
			"statsLVL200": {
				"hp": "835",
				"atk": "296",
				"def": "342",
				"spa": "168",
				"spd": "316",
				"spe": "352"
			},
			"image": "./v/v2.60.0/pm0877_00_beastyellow_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Focus Group 9",
				"description": "Raises the critical-hit rate of all allied sync pairs by one stat rank when the user’s Pokémon uses a move."
			},
			{
				"name": "Fuel Economy 1",
				"description": "Decreases the amount of move gauge slots the user’s Pokémon needs to use moves by one."
			},
			{
				"name": "Impervious",
				"description": "The user’s stats cannot be lowered."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "Bug Teamwork",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 10%. The more allied sync pairs with the Bug theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 5% and reduces damage by 2%. The maximum power-up is 20%, and the maximum damage reduction is 14%.)"
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Bug",
				"description": ""
			},
			{
				"name": "Pasio",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Lunge",
				"type": "Bug",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "80-96",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Attack by one stat rank."
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
				"name": "Leech Life",
				"type": "Bug",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "91-109",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
			},
			{
				"user": "Trainer",
				"name": "Flex It!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the Attack and Defense of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Otherworldly Muscles Bug Impact",
				"type": "Bug",
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

export const FLINT_RAPIDASH = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Flint",
		"images": {
			"base": "./v/v2.60.0/ch0006_00_oba_1024.png",
			"ex": "./v/v2.60.0/ch0006_00_oba_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Rapidash",
			"formName": "",
			"stats": {
				"hp": "611",
				"atk": "180",
				"def": "224",
				"spa": "112",
				"spd": "224",
				"spe": "288"
			},
			"statsLVL150": {
				"hp": "639",
				"atk": "190",
				"def": "236",
				"spa": "118",
				"spd": "236",
				"spe": "302"
			},
			"statsLVL200": {
				"hp": "779",
				"atk": "240",
				"def": "296",
				"spa": "148",
				"spd": "296",
				"spe": "372"
			},
			"image": "./v/v2.60.0/pm0078_00_gallop_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Group Slapdash 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when an opponent’s attack move targeting the user misses."
			},
			{
				"name": "Group Fortification 9",
				"description": "Raises the Defense, Sp. Def—or both—of all allied sync pairs by one stat rank when an opponent’s attack move targeting the user misses."
			},
			{
				"name": "Endurance",
				"description": "Applies the Enduring effect to the user if its HP is full when it enters a battle."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Elite Four",
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
				"name": "Flame Charge",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "30-36",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the user’s Speed by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Evasion All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the evasiveness of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Bounce",
				"type": "Flying",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "182-218",
				"accuracy": "85",
				"target": "An opponent",
				"effect": "-",
				"description": "The user begins bouncing. After a set time, the user stops bouncing and attacks. Has a chance (30%) of leaving the target paralyzed. No other actions can be taken while bouncing. Most moves used by opponents will not hit the user while it is bouncing. If the user is attacked by a sync move or max move while bouncing, it will stop bouncing."
			},
			{
				"user": "Trainer",
				"name": "Go Full Throttle!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp.&nbsp;Atk of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Overpowering Determination Fire Impact",
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

export const BRYCEN_WALREIN = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Brycen",
		"images": {
			"base": "./v/v2.60.0/ch0040_00_hachiku_1024.png",
			"ex": "./v/v2.60.0/ch0040_00_hachiku_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Ice",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Walrein",
			"formName": "",
			"stats": {
				"hp": "616",
				"atk": "390",
				"def": "160",
				"spa": "390",
				"spd": "157",
				"spe": "224"
			},
			"statsLVL150": {
				"hp": "644",
				"atk": "410",
				"def": "168",
				"spa": "410",
				"spd": "165",
				"spe": "236"
			},
			"statsLVL200": {
				"hp": "784",
				"atk": "510",
				"def": "208",
				"spa": "510",
				"spd": "205",
				"spe": "296"
			},
			"image": "./v/v2.60.0/pm0365_00_todoseruga_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Strike: Physical Boost ↑1 4",
				"description": "Has a chance (50%) of increasing the user’s Physical Moves ↑ Next effect by one rank when its attack move hits. If the move has the Multistrike effect tag, has a chance (50%) of increasing the user’s Physical Moves ↑ Next effect by one rank for each hit."
			},
			{
				"name": "Guaranteed Triple",
				"description": "Increases the number of times the user hits with a move that has the multistrike effect tag to three or more when that move is successful."
			},
			{
				"name": "Tripping Strike 4",
				"description": "Has a chance (50%) of lowering the target’s Speed by one stat rank when the user’s attack move against it hits. If the move has the multistrike effect tag, has a chance (50%) of lowering the target’s Speed by one stat rank for each hit."
			}
		],
		"passives2": [],
		"passivesMaster": [],
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
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Artistic",
				"description": ""
			},
			{
				"name": "Masked",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Ice Fang",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "46-55",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of making the target flinch. Has a chance (10%) of leaving the target frozen."
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
				"name": "Icicle Spear",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "15-18",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Attacks the target two to five times in a row."
			},
			{
				"user": "Trainer",
				"name": "Being with Pokémon!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Raises the user’s accuracy by one stat rank. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Cold Heat Stout Heart Ice Impact",
				"type": "Ice",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
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

export const PHOEBE_SABLEYE = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Phoebe",
		"images": {
			"base": "./v/v2.60.0/ch0049_00_fuyo_1024.png",
			"ex": "./v/v2.60.0/ch0049_00_fuyo_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Sprint",
	"exRole": "",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Sableye",
			"formName": "",
			"stats": {
				"hp": "596",
				"atk": "380",
				"def": "160",
				"spa": "336",
				"spd": "157",
				"spe": "244"
			},
			"statsLVL150": {
				"hp": "624",
				"atk": "400",
				"def": "168",
				"spa": "354",
				"spd": "165",
				"spe": "256"
			},
			"statsLVL200": {
				"hp": "764",
				"atk": "500",
				"def": "208",
				"spa": "444",
				"spd": "205",
				"spe": "316"
			},
			"image": "./v/v2.60.0/pm0302_00_yamirami_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Afflicter’s Fervor 1",
				"description": "Reduces the sync move countdown by one the first time the user’s Pokémon uses a status move each battle."
			},
			{
				"name": "Fail Forward 1",
				"description": "Charges the user’s move gauge by one when an opponent’s attack move targeting the user misses."
			},
			{
				"name": "Dashing Team 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when the user’s attack move is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Supernatural",
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
				"name": "Astonish",
				"type": "Ghost",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "12-14",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
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
				"name": "A Little Something New!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Attack and critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Tight Bonds That Can’t Be Seen Ghost Impact",
				"type": "Ghost",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
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

export const BEA_HITMONTOP = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Bea",
		"images": {
			"base": "./v/v2.60.0/ch0250_00_saida_1024.png",
			"ex": "./v/v2.60.0/ch0250_00_saida_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Special Strike",
	"exRole": "",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Hitmontop",
			"formName": "",
			"stats": {
				"hp": "601",
				"atk": "336",
				"def": "116",
				"spa": "336",
				"spd": "118",
				"spe": "268"
			},
			"statsLVL150": {
				"hp": "629",
				"atk": "354",
				"def": "122",
				"spa": "354",
				"spd": "124",
				"spe": "282"
			},
			"statsLVL200": {
				"hp": "769",
				"atk": "444",
				"def": "152",
				"spa": "444",
				"spd": "154",
				"spe": "352"
			},
			"image": "./v/v2.60.0/pm0237_00_kapoerer_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "T-Move: Special Boost ↑2 9",
				"description": "Increases the user’s Special Moves ↑ Next effect by two ranks when its Trainer uses a move."
			},
			{
				"name": "Hit: Special Boost ↑1 9",
				"description": "Increases the user’s Special Moves ↑ Next effect by one rank when its attack move is successful."
			},
			{
				"name": "Piercing Gaze",
				"description": "Moves never miss."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Body Builder",
				"description": ""
			},
			{
				"name": "Sweet Tooth",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
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
				"user": "Trainer",
				"name": "Shake Your Very Soul!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies the Move Gauge Acceleration effect to the allied field of play. Raises the user’s Sp.&nbsp;Atk by six stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Nourish Your Spirit in Battle Fighting Beam",
				"type": "Fighting",
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

export const FLORIAN_FUECOCO = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Florian",
		"images": {
			"base": "./v/v2.60.0/ch0286_00_svboy_1024.png",
			"ex": "./v/v2.60.0/ch0286_00_svboy_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Fire",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Fuecoco",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "390",
				"def": "176",
				"spa": "448",
				"spd": "178",
				"spe": "266"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "410",
				"def": "184",
				"spa": "472",
				"spd": "186",
				"spe": "280"
			},
			"statsLVL200": {
				"hp": "830",
				"atk": "510",
				"def": "224",
				"spa": "592",
				"spd": "226",
				"spe": "350"
			},
			"image": "./v/v2.60.0/pm0909_00_00_hogator_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Go Viral 9",
				"description": "When the user’s status move is used and inflicted a status condition on an opponent, inflicts the same status condition on all opposing sync pairs."
			},
			{
				"name": "Burned Down (Attack ↓, Sp. Def ↓) 9",
				"description": "Lowers the target’s Attack and Sp. Def by one stat rank when the user’s attack move is successful against a burned opponent."
			},
			{
				"name": "Impervious",
				"description": "The user’s stats cannot be lowered."
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
				"name": "Main Character",
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
				"name": "Heat Wave",
				"type": "Fire",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "109-130",
				"accuracy": "90",
				"target": "All opponents",
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
				"name": "Fire It Up!",
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
				"name": "Burn to Learn Fire Beam",
				"type": "Fire",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
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

export const JULIANA_SPRIGATITO = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Juliana",
		"images": {
			"base": "./v/v2.60.0/ch0287_00_svgirl_1024.png",
			"ex": "./v/v2.60.0/ch0287_00_svgirl_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Special Strike",
	"pokemonType": "Grass",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Sprigatito",
			"formName": "",
			"stats": {
				"hp": "643",
				"atk": "200",
				"def": "269",
				"spa": "200",
				"spd": "267",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "673",
				"atk": "210",
				"def": "283",
				"spa": "210",
				"spd": "281",
				"spe": "298"
			},
			"statsLVL200": {
				"hp": "823",
				"atk": "260",
				"def": "353",
				"spa": "260",
				"spd": "351",
				"spe": "368"
			},
			"image": "./v/v2.60.0/pm0906_00_00_nyahoja_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Attack Trap 9",
				"description": "Leaves the target trapped when the user’s attack move against it is successful."
			},
			{
				"name": "Grassy Terrain: Team Condition Nullification",
				"description": "Prevents all allied sync pairs from being inflicted with status conditions, flinching, becoming confused, or becoming trapped when the terrain is Grassy Terrain."
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
				"name": "Grass",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Main Character",
				"description": ""
			},
			{
				"name": "Cook",
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
				"name": "Energy Ball",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "49-58",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by one stat rank."
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
				"name": "Grassy Terrain",
				"type": "Grass",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Grassy Terrain."
			},
			{
				"user": "Trainer",
				"name": "Grow Big!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp.&nbsp;Atk and accuracy of all allied sync pairs by two stat ranks. Raises the critical-hit rate of all allied sync pairs by three stat ranks. Applies the Gradual Healing effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Bright Mesmerizing Smile Grass Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const NEMONA_QUAXLY = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Nemona",
		"images": {
			"base": "./v/v2.60.0/ch0289_00_nemo_1024.png",
			"ex": "./v/v2.60.0/ch0289_00_nemo_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Tech",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Quaxly",
			"formName": "",
			"stats": {
				"hp": "647",
				"atk": "307",
				"def": "161",
				"spa": "307",
				"spd": "161",
				"spe": "270"
			},
			"statsLVL150": {
				"hp": "677",
				"atk": "323",
				"def": "169",
				"spa": "323",
				"spd": "169",
				"spe": "284"
			},
			"statsLVL200": {
				"hp": "827",
				"atk": "403",
				"def": "209",
				"spa": "403",
				"spd": "209",
				"spe": "354"
			},
			"image": "./v/v2.60.0/pm0912_00_00_kuwassu_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Extend Range",
				"description": "When a move used by the user’s Pokémon that targets itself or an ally is successful, the target becomes all allied sync pairs. When a move used by the user’s Pokémon that targets an opponent is successful, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves affected by this passive skill are not lowered even if there are multiple targets."
			},
			{
				"name": "Hit the Gas 5",
				"description": "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves."
			},
			{
				"name": "Flabbergast 9",
				"description": "Leaves the target confused when the user’s move targeting that opponent is successful."
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
				"name": "Hydro Pump",
				"type": "Water",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "125-150",
				"accuracy": "80",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
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
				"name": "Rain Dance",
				"type": "Water",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Makes the weather rainy."
			},
			{
				"user": "Trainer",
				"name": "I’ve Got Chills!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp.&nbsp;Atk by four stat ranks. Raises the user’s accuracy by two stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies the Supereffective&nbsp;↑ Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Put Out Any Fire Water Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const BARRY_INFERNAPE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Barry",
		"images": {
			"base": "./v/v2.60.0/ch0099_00_jun_1024.png",
			"ex": "./v/v2.60.0/ch0099_00_jun_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Sprint",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Water",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Infernape",
			"formName": "",
			"stats": {
				"hp": "679",
				"atk": "336",
				"def": "176",
				"spa": "278",
				"spd": "176",
				"spe": "331"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "354",
				"def": "184",
				"spa": "292",
				"spd": "184",
				"spe": "349"
			},
			"statsLVL200": {
				"hp": "871",
				"atk": "444",
				"def": "224",
				"spa": "362",
				"spd": "224",
				"spe": "439"
			},
			"image": "./v/v2.60.0/pm0392_00_goukazaru_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Who’s Got Time to Count?!",
				"description": "Reduces the user’s sync move countdown by one when it uses Fighting Wish. Increases the user’s Physical Moves ↑ Next effect by two ranks when it uses Fighting Wish."
			},
			{
				"name": "Headstrong and Reckless",
				"description": "Powers up the user’s Close Combat. The user’s stats cannot be lowered. Lowers the target’s Attack and Sp. Atk by one stat rank when the user’s Close Combat is successful."
			},
			{
				"name": "Fighting Zone & Hit: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while the zone is a Fighting Zone."
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
				"name": "Sinnoh",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Scarf",
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
				"user": "Trainer",
				"name": "Fighting Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Fighting Zone. (A Fighting Zone powers up Fighting-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Flaming Rock Smash",
				"type": "Fighting",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the field of play’s zone turns into a Fighting Zone.(lb)Deactivation Condition: When the field of play’s zone is no longer a Fighting Zone.(lb)(lb)Never misses. Lowers the target’s Defense by four stat ranks. Lowers the target’s Fighting Type Rebuff by one&nbsp;rank the first time this attack move is successful each battle."
			},
			{
				"user": "Trainer",
				"name": "I Believe in You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Attack by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks. Applies the Supereffective&nbsp;↑ Next effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "There’s No End Fighting Impact",
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

export const CARMINE_SWADLOON = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Carmine",
		"images": {
			"base": "./v/v2.60.0/ch0356_00_zeiyu_1024.png",
			"ex": "./v/v2.60.0/ch0356_00_zeiyu_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Bug",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Swadloon",
			"formName": "",
			"stats": {
				"hp": "576",
				"atk": "156",
				"def": "230",
				"spa": "200",
				"spd": "208",
				"spe": "240"
			},
			"statsLVL150": {
				"hp": "602",
				"atk": "164",
				"def": "242",
				"spa": "210",
				"spd": "218",
				"spe": "252"
			},
			"statsLVL200": {
				"hp": "732",
				"atk": "204",
				"def": "302",
				"spa": "260",
				"spd": "268",
				"spe": "312"
			},
			"image": "./v/v2.60.0/pm0541_00_kurumayu_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Trip Up 9",
				"description": "Lowers the target’s Speed by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Move Gauge Refresh 4",
				"description": "Has a chance (50%) of charging the user’s move gauge by one when its move is successful."
			},
			{
				"name": "Natural Remedy",
				"description": "Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Bug",
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
				"name": "Struggle Bug",
				"type": "Bug",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "30-36",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Sp. Atk. by one stat rank."
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
				"effect": "-",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
			},
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
				"effect": "-",
				"description": "The more damage dealt to the target, the more it restores the user’s HP."
			},
			{
				"user": "Trainer",
				"name": "Go On, Then!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack, Defense, Sp.&nbsp;Atk, and Sp.&nbsp;Def of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Get Ready to Eat Dirt Bug Beam",
				"type": "Bug",
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

export const HILDA_TORNADUS = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Hilda",
		"images": {
			"base": "./v/v2.60.0/ch0004_00_toko_1024.png",
			"ex": "./v/v2.60.0/ch0004_00_toko_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Flying",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Tornadus",
			"formName": "Incarnate Forme",
			"stats": {
				"hp": "650",
				"atk": "375",
				"def": "174",
				"spa": "395",
				"spd": "185",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "395",
				"def": "182",
				"spa": "415",
				"spd": "195",
				"spe": "369"
			},
			"statsLVL200": {
				"hp": "830",
				"atk": "495",
				"def": "222",
				"spa": "515",
				"spd": "245",
				"spe": "459"
			},
			"image": "./v/v2.60.0/pm0641_11_tornelos_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Battle Enthusiast’s Whirlwind",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Reduces the user’s sync move countdown by one the first time its sync move is used each battle. Turns the field of play’s zone into an EX Flying Zone the first time the user’s attack move is successful each battle. (An EX Flying Zone powers up Flying-type attacks.)"
			},
			{
				"name": "Changing Seasons Incarnate",
				"description": "Raises the Sp. Def of all allied sync pairs by one stat rank when the user’s attack move is successful. Lowers the target’s Sp. Def by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Recharging Strike 9",
				"description": "Charges the user’s move gauge by one when its attack move hits. If the move has the Multistrike effect tag, charges the user’s move gauge by one for each hit."
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
				"name": "Bleakwind Storm",
				"type": "Flying",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "179-214",
				"accuracy": "80",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses when the weather is rainy. Has a chance (30%) of lowering the target’s Speed by one stat rank."
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
				"name": "(b move) Harsh Winter Bleakwind Storm",
				"type": "Flying",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "250-300",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: When the user’s Sp.&nbsp;Atk is not raised.(lb)(lb)Never misses when the weather is rainy. Lowers the target’s Speed by three stat ranks. Leaves the target confused. The power of this move is not lowered even if there are multiple targets. Applies the Critical-Hit Defense effect to the allied field of play."
			},
			{
				"user": "Trainer",
				"name": "Blow Them Away!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp.&nbsp;Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks. Applies the Free Move Next effect to an ally. Increases the Special Moves&nbsp;↑ Next effect of an ally by two ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Thunder-Rivaling Winds Flying Beam",
				"type": "Flying",
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

export const HILBERT_THUNDURUS = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Hilbert",
		"images": {
			"base": "./v/v2.60.0/ch0020_00_toya_1024.png",
			"ex": "./v/v2.60.0/ch0020_00_toya_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Electric",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Thundurus",
			"formName": "Incarnate Forme",
			"stats": {
				"hp": "650",
				"atk": "375",
				"def": "174",
				"spa": "395",
				"spd": "185",
				"spe": "351"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "395",
				"def": "182",
				"spa": "415",
				"spd": "195",
				"spe": "369"
			},
			"statsLVL200": {
				"hp": "830",
				"atk": "495",
				"def": "222",
				"spa": "515",
				"spd": "245",
				"spe": "459"
			},
			"image": "./v/v2.60.0/pm0642_11_00_voltolos_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hero in White’s Roaring Thunder",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Reduces the user’s sync move countdown by one the first time its sync move is used each battle. Turns the field of play’s terrain into EX Electric Terrain the first time the user’s attack move is successful each battle."
			},
			{
				"name": "Changing Seasons Incarnate",
				"description": "Raises the Sp. Def of all allied sync pairs by one stat rank when the user’s attack move is successful. Lowers the target’s Sp. Def by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Recharging Strike 9",
				"description": "Charges the user’s move gauge by one when its attack move hits. If the move has the Multistrike effect tag, charges the user’s move gauge by one for each hit."
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
				"name": "Wildbolt Storm",
				"type": "Electric",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "177-212",
				"accuracy": "80",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses when the weather is rainy. Has a chance (20%) of leaving the target paralyzed."
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
				"name": "(b move) Midsummer Wildbolt Storm",
				"type": "Electric",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "250-300",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: When the user’s Sp.&nbsp;Atk is not raised.(lb)(lb)Never misses when the weather is rainy. Lowers the target’s Sp.&nbsp;Atk by three stat ranks. Leaves the target paralyzed. The power of this move is not lowered even if there are multiple targets. Applies the Special Damage Reduction effect to the allied field of play."
			},
			{
				"user": "Trainer",
				"name": "A Path to Victory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp.&nbsp;Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks. Applies the Gradual Healing effect to an ally. Increases the Special Moves&nbsp;↑ Next effect of an ally by two ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Wind-Rivaling Thunder Electric Beam",
				"type": "Electric",
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

export const N_LANDORUS = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "N",
		"images": {
			"base": "./v/v2.60.0/ch0089_00_n_1024.png",
			"ex": "./v/v2.60.0/ch0089_00_n_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Ground",
	"pokemonWeakness": "Ice",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Landorus",
			"formName": "Incarnate Forme",
			"stats": {
				"hp": "679",
				"atk": "395",
				"def": "185",
				"spa": "395",
				"spd": "174",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "711",
				"atk": "415",
				"def": "195",
				"spa": "415",
				"spd": "182",
				"spe": "354"
			},
			"statsLVL200": {
				"hp": "871",
				"atk": "515",
				"def": "245",
				"spa": "515",
				"spd": "222",
				"spe": "444"
			},
			"image": "./v/v2.60.0/pm0645_11_landlos_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hero in Black’s Bountiful Harvest",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Reduces the user’s sync move countdown by one the first time its sync move is used each battle. Turns the field of play’s zone into an EX Ground Zone the first time the user’s attack move is successful each battle. (An EX Ground Zone powers up Ground-type attacks.)"
			},
			{
				"name": "Changing Seasons Incarnate",
				"description": "Raises the Sp. Def of all allied sync pairs by one stat rank when the user’s attack move is successful. Lowers the target’s Sp. Def by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Recharging Strike 9",
				"description": "Charges the user’s move gauge by one when its attack move hits. If the move has the Multistrike effect tag, charges the user’s move gauge by one for each hit."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Ground",
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
				"name": "Villain",
				"description": ""
			},
			{
				"name": "Unova Adventurer",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Sandsear Storm",
				"type": "Ground",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "177-212",
				"accuracy": "80",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses when the weather is rainy. Has a chance (20%) of leaving the target burned."
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
				"name": "(b move) Peak Autumn Sandsear Storm",
				"type": "Ground",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "250-300",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: When the user’s Sp.&nbsp;Atk is not raised.(lb)(lb)Never misses when the weather is rainy. Lowers the target’s Attack by three stat ranks. Leaves the target burned. The power of this move is not lowered even if there are multiple targets. Applies the Physical Damage Reduction effect to the allied field of play."
			},
			{
				"user": "Trainer",
				"name": "Harmonius Formula!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp. Atk by four stat ranks. Raises an ally’s critical-hit rate by three stat ranks. Applies the Condition Nullification effect to an ally. Increases the Special Moves ↑ Next effect of an ally by two ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Calm the Winds and Thunder Ground Beam",
				"type": "Ground",
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

export const VOLO_GIRATINA = {
	"bg": "./v/v2.60.0/Tx_ch0359_00_volo2_mindscape00.png",
	"trainer": {
		"name": "Volo (Alt.)",
		"images": {
			"base": "./v/v2.60.0/ch0359_00_volo2_1024.png",
			"ex": "./v/v2.60.0/ch0359_00_volo2_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Physical Strike",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "",
	"pokemon": [
		{
			"name": "Giratina",
			"formName": "Origin Forme",
			"stats": {
				"hp": "704",
				"atk": "390",
				"def": "187",
				"spa": "390",
				"spd": "187",
				"spe": "331"
			},
			"statsLVL150": {
				"hp": "736",
				"atk": "410",
				"def": "197",
				"spa": "410",
				"spd": "197",
				"spe": "349"
			},
			"statsLVL200": {
				"hp": "896",
				"atk": "510",
				"def": "247",
				"spa": "510",
				"spd": "247",
				"spe": "439"
			},
			"image": "./v/v2.60.0/pm0487_12_giratina_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Devotion to the Creator",
				"description": "Reduces the user’s sync move countdown by three the first time it enters a battle each battle. Lowers the Ghost Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			},
			{
				"name": "Distorted Eldritch Presence",
				"description": "Turns the field of play’s zone into an EX Ghost Zone the first time the user’s Trainer uses a move each battle. (An EX Ghost Zone powers up Ghost-type attacks.) Increases the user’s Sync Move ↑ Next effect by 10 ranks the first time its Trainer uses a move each battle."
			},
			{
				"name": "The Heavens and the Earth as One",
				"description": "Leaves the target flinching, confused, and trapped when the user’s attack move against it is successful while the zone is a Ghost Zone. Applies the Free Move Next effect to the user when its attack move is successful against a flinching, confused, or trapped opponent. Increases the user’s Physical Moves ↑ Next effect and Special Moves ↑ Next effect by one rank when its attack move is successful against a flinching, confused, or trapped opponent."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Hisui’s Pokémon Wielder",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Sinnoh theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Lowers the Ghost Type Rebuff of all opposing sync pairs by one rank the first time the user’s sync move is used each battle."
			}
		],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Shadow Force",
				"type": "Ghost",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The user takes on a shadow presence. After a set time, this presence fades and the user attacks. No other actions can be taken while in shadow presence. Opponents’ moves will not hit the user while it is in this presence. If the user is hit by a sync move or max move while in shadow presence, the presence will fade."
			},
			{
				"user": "Pokemon",
				"name": "Shadow Ball",
				"type": "Ghost",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "99-118",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (20%) of lowering the target’s Sp. Def by one stat rank."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Distortion World Shadow Force",
				"type": "Ghost",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: When this move is used or when attacking with this move.(lb)(lb)The user takes on a shadow presence. After a set time, this presence fades and the user attacks. No other actions can be taken while in shadow presence. Opponents’ moves will not hit the user while it is in this presence. If the user is hit by a sync move or max move while in shadow presence, the presence will fade. The user attacks without taking on a shadow presence when the zone is a Ghost Zone. The power of this move is not lowered even if there are multiple targets. Raises the evasiveness of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Strike Them Down!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Attack and Sp. Atk by six stat ranks. Raises the user’s critical-hit rate by three stat ranks. Increases the user’s Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect by three&nbsp;ranks. Applies the Physical Move Break effect and Special Move Break effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Dreaming of a Better World Shadow Force",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ROSA_DEERLING = {
	"bg": "./v/v2.60.0/Tx_ch0101_42_mei_mindscape00.png",
	"trainer": {
		"name": "Rosa (Academy)",
		"images": {
			"base": "./v/v2.60.0/ch0101_42_mei_1024.png",
			"ex": "./v/v2.60.0/ch0101_42_mei_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Sprint",
	"pokemonType": "Grass",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Deerling",
			"formName": "Summer Form",
			"stats": {
				"hp": "200",
				"atk": "140",
				"def": "40",
				"spa": "140",
				"spd": "40",
				"spe": "300"
			},
			"statsLVL150": {
				"hp": "210",
				"atk": "146",
				"def": "42",
				"spa": "146",
				"spd": "42",
				"spe": "316"
			},
			"statsLVL200": {
				"hp": "260",
				"atk": "176",
				"def": "52",
				"spa": "176",
				"spd": "52",
				"spe": "396"
			},
			"image": "./v/v2.60.0/pm0585_12_shikijika_256.png"
		}
	],
	"skills": {
		"passives": [],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Grass",
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
				"name": "Pigtails",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Energy Ball",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "49-58",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of lowering the target’s Sp. Def by one stat rank."
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
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Mark the Seasons Grass Beam",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}