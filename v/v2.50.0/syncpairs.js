export const INGO_CHANDELURE = {
	"bg": "./v/v2.50.0/Tx_ch0108_10_nobori_mindscape00.png",
	"trainer": {
		"name": "Sygna Suit Ingo",
		"images": {
			"base": "./v/v2.50.0/ch0108_10_nobori_1024.png",
			"ex": "./v/v2.50.0/ch0108_10_nobori_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Tech",
	"pokemonType": "Ghost",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Chandelure",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "336",
				"def": "168",
				"spa": "336",
				"spd": "167",
				"spe": "362"
			},
			"statsLVL150": {
				"hp": "693",
				"atk": "354",
				"def": "176",
				"spa": "354",
				"spd": "175",
				"spe": "382"
			},
			"image": "./v/v2.50.0/pm0609_00_chandela_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Inbound Train Announcement",
				"description": "Reduces the user’s sync move countdown by two when its max move targeting an opponent that is affected by a status condition is successful. Increases the user’s Special Moves ↑ Next effect by two ranks when its max move targeting an opponent that is flinching, confused, or trapped is successful."
			},
			{
				"name": "Team Brain Gain 9",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank when the user’s move is successful."
			},
			{
				"name": "Move: Sp. Atk ↑2 & Crit Rate ↑1 9",
				"description": "Grants all of the following effects when the user’s move is successful: Raises the user’s Sp. Atk by two stat ranks. Raises the user’s critical-hit rate by one stat rank."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "All Aboard to Victory",
				"description": "Powers up the user’s sync move against targets that are affected by a status condition. Turns the field of play’s zone into a Ghost Zone after using the user’s max move. (A Ghost Zone powers up Ghost-type attacks.) Extends the duration of the Ghost Zone when the zone turns into a Ghost Zone while the user is on the field."
			}
		],
		"themes": [
			{
				"name": "Ghost",
				"description": ""
			},
			{
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Battle Facility Foe",
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
				"name": "Confuse Ray",
				"type": "Ghost",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Leaves the target confused."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Rising Flames Hex",
				"type": "Ghost",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "80-96",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon affected by a status condition, flinching, confused, or trapped on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon affected by a status condition, flinching, confused, or trapped on the opponent’s field of play.(lb)(lb)This attack’s power is doubled against targets that are affected by a status condition, flinching, confused, or trapped. Lowers the target’s Defense by two stat ranks when it is paralyzed. Lowers the target’s Sp.&nbsp;Def by two stat ranks when it is burned. Lowers the target’s Speed by two stat ranks when it is flinching. Restores the HP of all allied sync pairs when the target is poisoned or badly poisoned. Applies the Free Move Next effect to the user when the target is trapped. Increases the user’s Special Moves&nbsp;↑ Next effect by one&nbsp;rank when the target is confused."
			},
			{
				"user": "Trainer",
				"name": "The Train Is Leaving!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Raises the Speed of all allied sync pairs by four stat ranks. Raises the evasiveness of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Arrival at the Greatest Battle Ghost Ray",
				"type": "Ghost",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is affected by a status condition."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": [
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
				"user": "Pokemon",
				"name": "Max Phantasm",
				"type": "Ghost",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the Defense of all opposing sync pairs by two stat ranks."
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

export const EMMET_EELEKTROSS = {
	"bg": "./v/v2.50.0/Tx_ch0109_10_kudari_mindscape00.png",
	"trainer": {
		"name": "Sygna Suit Emmet",
		"images": {
			"base": "./v/v2.50.0/ch0109_10_kudari_1024.png",
			"ex": "./v/v2.50.0/ch0109_10_kudari_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Tech",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Eelektross",
			"formName": "",
			"stats": {
				"hp": "674",
				"atk": "336",
				"def": "166",
				"spa": "314",
				"spd": "165",
				"spe": "310"
			},
			"statsLVL150": {
				"hp": "706",
				"atk": "354",
				"def": "174",
				"spa": "330",
				"spd": "173",
				"spe": "326"
			},
			"image": "./v/v2.50.0/pm0604_00_shibirudon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Outbound Train Announcement",
				"description": "Applies the Free Move Next effect to all allied sync pairs when the user’s max move targeting an opponent that is affected by a status condition is successful. Increases the user’s Physical Moves ↑ Next effect by two ranks when its max move targeting an opponent that is flinching, confused, or trapped is successful."
			},
			{
				"name": "The Rest Will Be Totally Different",
				"description": "Raises the chance of inflicting status conditions with the additional effects of the user’s moves. Leaves the target trapped when the user’s attack move against it is successful."
			},
			{
				"name": "Honing Hit 9",
				"description": "Grants all of the following effects when the user’s move is successful:Raises the user’s Attack by two stat ranks.Raises the user’s critical-hit rate by one stat rank."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Follow the Rules and Drive Safely",
				"description": "Reduces the user’s sync move countdown by two the first time its Trainer uses a move each battle. Powers up the sync moves of all allied sync pairs when Unova Circle (Defensive) applies to the allied field of play. Extends the duration of Unova Circle (Defensive) when Unova Circle (Defensive) is applied to the allied field of play."
			}
		],
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
				"name": "Battle Facility Foe",
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
				"name": "Thunder Fang",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "47-56",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of making the target flinch. Has a chance (10%) of leaving the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "Unova Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Unova Circle (Defensive) to the allied field of play. Unova Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Unova theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Descending Lightning Wild Charge",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "160-192",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When there is at least one Pokémon affected by a status condition, flinching, confused, or trapped on the opponent’s field of play.(lb)Deactivation Condition: When there are no longer any Pokémon affected by a status condition, flinching, confused, or trapped on the opponent’s field of play.(lb)(lb)Lowers the target’s Defense by two stat ranks when it is paralyzed. Lowers the target’s Sp.&nbsp;Def by two stat ranks when it is burned. Lowers the target’s Speed by two stat ranks when it is flinching. Restores the HP of all allied sync pairs when the target is poisoned or badly poisoned. Applies the Free Move Next effect to the user when the target is confused. Increases the user’s Physical Moves&nbsp;↑ Next effect by one&nbsp;rank when the target is trapped."
			},
			{
				"user": "Trainer",
				"name": "Aim for Victory!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Critical Hit Next effect to an ally. Applies the Supereffective&nbsp;↑ Next effect to an ally. Increases the Sync Move&nbsp;↑ Next effect of an ally by five&nbsp;ranks. Raises an ally’s Ground Type Rebuff by two&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "The Best, Perfect Electric Impact",
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
		"syncMove2": [],
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Lightning",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Electric Terrain."
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
				"name": "Max Lightning",
				"type": "Electric",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Electric Terrain."
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

export const SHAUNA_DELCATTY = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Shauna",
		"images": {
			"base": "./v/v2.50.0/ch0139_00_sana_1024.png",
			"ex": "./v/v2.50.0/ch0139_00_sana_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Delcatty",
			"formName": "",
			"stats": {
				"hp": "601",
				"atk": "336",
				"def": "146",
				"spa": "312",
				"spd": "137",
				"spe": "300"
			},
			"statsLVL150": {
				"hp": "629",
				"atk": "354",
				"def": "154",
				"spa": "328",
				"spd": "143",
				"spe": "316"
			},
			"image": "./v/v2.50.0/pm0301_00_enekororo_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Hem In 9",
				"description": "Lowers the target’s evasiveness by one stat rank when the user’s attack move against it is successful."
			},
			{
				"name": "Healthy Healing",
				"description": "Applies the Gradual Healing effect to the user when its HP is full when it enters a battle."
			},
			{
				"name": "Charging Infliction 1",
				"description": "Charges the user’s move gauge by one when its Pokémon uses a status move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"themes": [
			{
				"name": "Normal",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Rival",
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
				"name": "Sing",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "45",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
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
				"description": "Raises the user’s Attack by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Headbutt",
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
				"name": "Make the Best of It!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s accuracy by two stat ranks. Raises the user’s critical-hit rate by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Traveling Together Normal Impact",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "This attack’s power increases when the target is affected by a status condition."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const TIERNO_TALONFLAME = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Tierno",
		"images": {
			"base": "./v/v2.50.0/ch0180_00_tierno_1024.png",
			"ex": "./v/v2.50.0/ch0180_00_tierno_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "",
	"pokemonType": "Fire",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Talonflame",
			"formName": "",
			"stats": {
				"hp": "648",
				"atk": "312",
				"def": "176",
				"spa": "336",
				"spd": "174",
				"spe": "379"
			},
			"statsLVL150": {
				"hp": "678",
				"atk": "328",
				"def": "184",
				"spa": "354",
				"spd": "182",
				"spe": "399"
			},
			"image": "./v/v2.50.0/pm0755_00_robin3_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sunburst",
				"description": "Makes the weather sunny the first time the user enters a battle each battle."
			},
			{
				"name": "Sunny Disposition ",
				"description": "The user’s stats cannot be lowered when the weather is sunny."
			},
			{
				"name": "Sunny Hit: 2 Stats ↓ 9",
				"description": "Lowers two of the target’s following stats by one stat rank at random when the user’s attack move is successful while the weather is sunny: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
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
				"name": "Rival",
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
				"name": "Flamethrower",
				"type": "Fire",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "47-56",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target burned."
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
				"user": "Pokemon",
				"name": "Overheat",
				"type": "Fire",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "136-163",
				"accuracy": "90",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the user’s Sp. Atk by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Nice Move!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Raises an ally’s Sp.&nbsp;Atk and critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Can’t Help Dancing Fire Beam",
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

export const ERI_ANNIHILAPE = {
	"bg": "./v/v2.50.0/Tx_ch0330_00_biwa_mindscape00.png",
	"trainer": {
		"name": "Eri",
		"images": {
			"base": "./v/v2.50.0/ch0330_00_biwa_1024.png",
			"ex": "./v/v2.50.0/ch0330_00_biwa_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Annihilape",
			"formName": "",
			"stats": {
				"hp": "684",
				"atk": "336",
				"def": "297",
				"spa": "176",
				"spd": "297",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "716",
				"atk": "354",
				"def": "313",
				"spa": "184",
				"spd": "313",
				"spe": "328"
			},
			"image": "./v/v2.50.0/pm0979_00_00_konoyozaru_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "We’ll See Who’s Left Standing",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by one stat rank when the user is hit by an attack move. Increases the Physical Moves ↑ Next effect of all allied sync pairs by one rank when the user is hit by an attack move."
			},
			{
				"name": "Circle Hit: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its attack move is successful while a circle applies to the allied field of play."
			},
			{
				"name": "Team Sleep & Flinch Immunity",
				"description": "Prevents all allied sync pairs from falling asleep or flinching."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "RAAAAAAAAAH!!!",
				"description": "Reduces the user’s sync move countdown by two the first time it enters a battle each battle. Powers up the moves of all allied sync pairs when Paldea Circle (Defensive) applies to the allied field of play. Restores the user’s HP by approximately 60% of its maximum HP the first time it is in a pinch each battle."
			}
		],
		"themes": [
			{
				"name": "Fighting",
				"description": ""
			},
			{
				"name": "Paldea",
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
				"name": "Drain Punch",
				"type": "Fighting",
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
				"name": "Paldea Solidarity",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Paldea Circle (Defensive) to the allied field of play. Paldea Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Paldea theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Rage Fist of Friendship",
				"type": "Ghost",
				"gauge": "3",
				"uses": "2",
				"category": "Physical",
				"power": "50-60",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user is hit by an attack move one&nbsp;time.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. This attack’s power increases each time the user is hit by an attack move.(lb)(This attack powers up by 100% every time the user is hit. The maximum power-up is 600%.) Restores the user’s HP by approximately 40% of its maximum HP."
			},
			{
				"user": "Trainer",
				"name": "I Won’t Run Away!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the critical-hit rate of all allied sync pairs by three stat ranks. Applies the Gradual Healing effect to all allied sync pairs. Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Great Infernal Cross Chop",
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
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SINA_GLACEON = {
	"bg": "./v/v2.50.0/Tx_ch0187_00_sina_mindscape00.png",
	"trainer": {
		"name": "Sina",
		"images": {
			"base": "./v/v2.50.0/ch0187_00_sina_1024.png",
			"ex": "./v/v2.50.0/ch0187_00_sina_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Strike (Special)",
	"pokemonType": "Ice",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Glaceon",
			"formName": "",
			"stats": {
				"hp": "671",
				"atk": "331",
				"def": "180",
				"spa": "390",
				"spd": "165",
				"spe": "350"
			},
			"statsLVL150": {
				"hp": "703",
				"atk": "349",
				"def": "188",
				"spa": "410",
				"spd": "173",
				"spe": "368"
			},
			"image": "./v/v2.50.0/pm0471_00_glacia_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Entry: Sp. Atk ↑ & Evasiveness ↑ 4",
				"description": "Raises the user’s Sp. Atk and evasiveness by four stat ranks when it enters a battle."
			},
			{
				"name": "Hit: “Berry” MP ↓ & Special Boost ↑3 9",
				"description": "Reduces MP by one for the user’s moves that have the Berry effect tag and increases its Special Moves ↑ Next effect by three ranks when its attack move is successful."
			},
			{
				"name": "1st “Berry” MP 0: Sync CD ↓ 3",
				"description": "Reduces the user’s sync move countdown by three the first time the remaining MP for its moves that have the Berry effect tag is zero each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Stop Right There!",
				"description": "Turns the field of play’s zone into an Ice Zone the first time the user enters a battle each battle. (An Ice Zone powers up Ice-type attacks.) Increases the user’s Special Moves ↑ Next effect by three ranks the first time it enters a battle each battle. Applies the Enduring effect to the user if its HP is full when it enters a battle."
			}
		],
		"themes": [
			{
				"name": "Ice",
				"description": ""
			},
			{
				"name": "Kalos",
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
				"user": "Trainer",
				"name": "Sitrus Berry",
				"type": "Trainer",
				"gauge": "-",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Restores an ally’s HP by approximately 20% of its maximum HP."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Beautiful Icy Wind",
				"type": "Ice",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s evasiveness is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect. Lowers the target’s Speed and accuracy by one stat rank. The power of this move is not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Au Revoir!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Raises the user’s critical-hit rate by three stat ranks. Increases the user’s Special Moves&nbsp;↑ Next effect by two&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Beautifully Beautiful Subzero Slammer",
				"type": "Ice",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Sp.&nbsp;Atk is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const DEXIO_ESPEON = {
	"bg": "./v/v2.50.0/Tx_ch0188_00_dexio_mindscape00.png",
	"trainer": {
		"name": "Dexio",
		"images": {
			"base": "./v/v2.50.0/ch0188_00_dexio_1024.png",
			"ex": "./v/v2.50.0/ch0188_00_dexio_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Dark",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Espeon",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "336",
				"def": "160",
				"spa": "424",
				"spd": "178",
				"spe": "341"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "354",
				"def": "168",
				"spa": "446",
				"spd": "186",
				"spe": "359"
			},
			"image": "./v/v2.50.0/pm0196_00_eifie_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Seeing Is Believing",
				"description": "Increases the amount of move gauge slots needed to use attack moves by one and powers up moves. Raises the user’s Sp. Atk by four stat ranks when it enters a battle. Raises the user’s critical-hit rate by three stat ranks when it enters a battle."
			},
			{
				"name": "Team S-Move: Restore B-Move MP 9",
				"description": "Restores one MP of the user’s buddy move after your team’s sync pair uses their sync move."
			},
			{
				"name": "1st “Berry” MP 0: Special Boost 3",
				"description": "Increases the user’s Special Moves ↑ Next effect by three ranks the first time the remaining MP for its moves that have the Berry effect tag is zero each battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "I Might as Well Test My Skills",
				"description": "Reduces the user’s sync move countdown by two the first time its sync move is used each battle. Turns the field of play’s terrain into Psychic Terrain the first time the user enters a battle each battle. Increases the user’s Special Moves ↑ Next effect by three ranks the first time it enters a battle each battle."
			}
		],
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
				"name": "Psychic",
				"type": "Psychic",
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
				"name": "(b move) Psychic Light of Dawn",
				"type": "Psychic",
				"gauge": "3",
				"uses": "1",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: When the user’s Sp.&nbsp;Atk is not raised.(lb)(lb)Never misses. Lowers the target’s Sp.&nbsp;Def by two stat ranks. Applies the Free Move Next effect to the user. Increases the user’s Special Moves&nbsp;↑ Next effect by one&nbsp;rank. If the remaining MP for the user’s Lum Berry is one or more when attacking with this move, reduces those MP by one and restores one MP of its buddy move."
			},
			{
				"user": "Trainer",
				"name": "Let Me Show You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. Removes all status conditions from the user. Applies the Damage Guard Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Pokémon-Voyage Veteran Shattered Psyche",
				"type": "Psychic",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Sp.&nbsp;Atk is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const HILDA_LEAFEON = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Hilda",
		"images": {
			"base": "./v/v2.50.0/ch0004_00_toko_1024.png",
			"ex": "./v/v2.50.0/ch0004_00_toko_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Grass",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Leafeon",
			"formName": "",
			"stats": {
				"hp": "635",
				"atk": "390",
				"def": "166",
				"spa": "336",
				"spd": "159",
				"spe": "337"
			},
			"statsLVL150": {
				"hp": "665",
				"atk": "410",
				"def": "174",
				"spa": "354",
				"spd": "167",
				"spe": "355"
			},
			"image": "./v/v2.50.0/pm0470_00_leafia_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Green Thumb",
				"description": "Turns the field of play’s terrain into Grassy Terrain after using the user’s sync move."
			},
			{
				"name": "Grassy Terrain: Team Condition Nullification",
				"description": "Prevents all allied sync pairs from being inflicted with status conditions, flinching, becoming confused, or becoming trapped when the terrain is Grassy Terrain."
			},
			{
				"name": "P-Move/S-Move on Opp: Defense ↓ 9",
				"description": "Lowers the target’s Defense by one stat rank when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s Defense by one stat rank after using the user’s sync move targeting that opponent."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
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
				"name": "Razor Leaf",
				"type": "Grass",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "43-51",
				"accuracy": "95",
				"target": "All opponents",
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
				"effect": "-",
				"description": "Restores the user’s HP by approximately 50% of its maximum HP. HP is restored by 60% instead when the weather is sunny, and 40% when the weather is rainy or during a hailstorm or a sandstorm."
			},
			{
				"user": "Pokemon",
				"name": "Grassy Glide",
				"type": "Grass",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Will not consume the move gauge when the terrain is Grassy Terrain."
			},
			{
				"user": "Trainer",
				"name": "I Got Overheated!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s critical-hit rate by three stat ranks. Raises the Attack of all allied sync pairs by two stat ranks. Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks. Lowers the user’s Speed by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Sun-Grown Fighting Spirit Grass Impact",
				"type": "Grass",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Defense is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const HILBERT_GLACEON = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Hilbert",
		"images": {
			"base": "./v/v2.50.0/ch0020_00_toya_1024.png",
			"ex": "./v/v2.50.0/ch0020_00_toya_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Ice",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Glaceon",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "336",
				"def": "161",
				"spa": "448",
				"spd": "191",
				"spe": "295"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "354",
				"def": "169",
				"spa": "472",
				"spd": "201",
				"spe": "311"
			},
			"image": "./v/v2.50.0/pm0471_00_glacia_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "S-Move: Ice Zone",
				"description": "Turns the field of play’s zone into an Ice Zone after using the user’s sync move. (An Ice Zone powers up Ice-type attacks.)"
			},
			{
				"name": "Ice Zone: Team Crit Immunity",
				"description": "Protects all allied sync pairs against critical hits when the zone is an Ice Zone."
			},
			{
				"name": "Disenchanting Strike 9",
				"description": "Lowers the target’s Sp. Atk by one stat rank when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s Sp. Atk by one stat rank after using the user’s sync move targeting that opponent."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
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
				"name": "Powder Snow",
				"type": "Ice",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "16-19",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (10%) of leaving the target frozen."
			},
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
				"name": "This Looks Promising!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Sp.&nbsp;Def by four stat ranks. Raises the Sp.&nbsp;Atk of all allied sync pairs by four stat ranks. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks. Lowers the user’s Speed by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Sharp and Icy Determination Frost Beam",
				"type": "Ice",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Sp.&nbsp;Atk is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const CALEM_SYLVEON = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Calem",
		"images": {
			"base": "./v/v2.50.0/ch0003_00_calme_1024.png",
			"ex": "./v/v2.50.0/ch0003_00_calme_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Poison",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Sylveon",
			"formName": "",
			"stats": {
				"hp": "642",
				"atk": "336",
				"def": "166",
				"spa": "424",
				"spd": "180",
				"spe": "292"
			},
			"statsLVL150": {
				"hp": "672",
				"atk": "354",
				"def": "174",
				"spa": "446",
				"spd": "188",
				"spe": "308"
			},
			"image": "./v/v2.50.0/pm0767_00_ninnfi_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Fairy Kingdom",
				"description": "Turns the field of play’s zone into a Fairy Zone after using the user’s sync move. (A Fairy Zone powers up Fairy-type attacks.)"
			},
			{
				"name": "Fairy Zone: Team All Stats ↓ Immunity",
				"description": "Stats cannot be lowered for all allied sync pairs when the zone is a Fairy Zone."
			},
			{
				"name": "Stupefying Strike 9",
				"description": "Lowers the target’s Sp. Def by one stat rank when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s Sp. Def by one stat rank after using the user’s sync move targeting that opponent."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"themes": [
			{
				"name": "Fairy",
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
				"name": "Sunglasses",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Dazzling Gleam",
				"type": "Fairy",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "50-60",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "No additional effect."
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
				"description": "Lowers the target’s Attack by two stat ranks."
			},
			{
				"user": "Pokemon",
				"name": "Moonblast",
				"type": "Fairy",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "98-117",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s Sp. Atk by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Watch Carefully!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Sp.&nbsp;Atk by four stat ranks. Raises the critical-hit rate of all allied sync pairs by two stat ranks. Increases the Sync Move&nbsp;↑ Next effect of all allied sync pairs by four&nbsp;ranks. Lowers the user’s Speed by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Fighting Alongside You Fairy Beam",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Sp.&nbsp;Def is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"syncMove2": [],
		"movesMAX": []
	}
}