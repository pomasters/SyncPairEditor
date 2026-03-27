export const AS_KORRINA_LUCARIO = {
	"bg": "./v/v2.67.0/Tx_ch0012_90_corni_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Korrina",
		"images": {
			"base": "./v/v2.67.0/ch0012_90_corni_1024.png",
			"ex": "./v/v2.67.0/ch0012_90_corni_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Support",
	"pokemonType": "Fighting",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Lucario",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "312",
				"def": "312",
				"spa": "312",
				"spd": "312",
				"spe": "330"
			},
			"statsLVL150": {
				"hp": "691",
				"atk": "328",
				"def": "328",
				"spa": "328",
				"spd": "328",
				"spe": "348"
			},
			"statsLVL200": {
				"hp": "841",
				"atk": "408",
				"def": "408",
				"spa": "408",
				"spd": "408",
				"spe": "438"
			},
			"image": "./v/v2.67.0/pm0448_00_lucario_256.png"
		},
		{
			"name": "Mega Lucario",
			"formName": "",
			"stats": {
				"hp": "661",
				"atk": "343",
				"def": "343",
				"spa": "343",
				"spd": "343",
				"spe": "363"
			},
			"statsLVL150": {
				"hp": "691",
				"atk": "360",
				"def": "360",
				"spa": "360",
				"spd": "360",
				"spe": "382"
			},
			"statsLVL200": {
				"hp": "841",
				"atk": "448",
				"def": "448",
				"spa": "448",
				"spd": "448",
				"spe": "481"
			},
			"image": "./v/v2.67.0/pm0448_51_megalucario_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Mega Evolution Successor",
				"description": "Turns the field of play’s zone into an EX Fighting Zone the first time the user successfully attacks with its buddy move each battle. (An EX Fighting Zone powers up Fighting-type attacks.) Extends the duration of the Fighting Zone when the zone turns into a Fighting Zone while the user is on the field. Extends the duration of the following field effects when they are applied to the allied field of play:- Kalos Circle (Physical)- Kalos Circle (Special)- Kalos Circle (Defensive)"
			},
			{
				"name": "Guiding Aura of Victory",
				"description": "Raises the Defense and Sp. Def of all allied sync pairs by two stat ranks when the user’s attack move is successful. Applies the Free Move Next effect to the user when its attack move is successful."
			},
			{
				"name": "Entry: Team Physical & Special Boost 1",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when the user enters a battle."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Fist Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Fighting theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Fist Judgment",
				"description": "Raises the Fighting Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Fighting Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Fighting",
				"description": ""
			},
			{
				"name": "Kalos",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Arc Suit",
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
				"user": "Pokemon",
				"name": "(b move) Almighty Aura Sphere",
				"type": "Fighting",
				"gauge": "2",
				"uses": "3",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user is not in a pinch.(lb)Deactivation Condition: When the user is in a pinch.(lb)(lb)Never misses. Lowers the target’s Sp.&nbsp;Def by two stat ranks. Reduces the user’s sync move countdown by one. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks. Applies Kalos Circle (Special) to the allied field of play the first time this attack move is successful each battle.(lb)Kalos Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kalos theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Almighty Rock Smash",
				"type": "Fighting",
				"gauge": "2",
				"uses": "3",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user is not in a pinch.(lb)Deactivation Condition: When the user is in a pinch.(lb)(lb)Lowers the target’s Defense by two stat ranks. Reduces the user’s sync move countdown by one. Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks. Applies Kalos Circle (Physical) to the allied field of play the first time this attack move is successful each battle.(lb)Kalos Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kalos theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Trainer",
				"name": "Waiting to Skate On Through!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Restores the HP of all allied sync pairs by approximately 40% of their maximum HP. Applies the Gradual Healing effect to all allied sync pairs. If the user’s Lucario has Mega Evolved, also applies the Damage Guard Next effect to the user."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "(divine move) Fervent Fighter Divine Power-Up Punch",
				"type": "Fighting",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega&nbsp;Lucario until the end of battle. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank the first time the user’s sync move is used each battle."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const INGO_BOLDORE = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Ingo",
		"images": {
			"base": "./v/v2.67.0/ch0108_00_nobori_1024.png",
			"ex": "./v/v2.67.0/ch0108_00_nobori_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Rock",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Boldore",
			"formName": "",
			"stats": {
				"hp": "641",
				"atk": "200",
				"def": "226",
				"spa": "112",
				"spd": "222",
				"spe": "263"
			},
			"statsLVL150": {
				"hp": "671",
				"atk": "210",
				"def": "238",
				"spa": "118",
				"spd": "234",
				"spe": "277"
			},
			"statsLVL200": {
				"hp": "821",
				"atk": "260",
				"def": "298",
				"spa": "148",
				"spd": "294",
				"spe": "347"
			},
			"image": "./v/v2.67.0/pm0525_00_gantle_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Endurance",
				"description": "Applies the Enduring effect to the user if its HP is full when it enters a battle."
			},
			{
				"name": "Hit: HP Recovery 9",
				"description": "Restores the user’s HP when its attack move is successful."
			},
			{
				"name": "Team Swift Reaction 9",
				"description": "Raises the Speed of all allied sync pairs by one stat rank when the user is hit by an attack move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Rock",
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
				"name": "Rock Tomb",
				"type": "Rock",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "39-46",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Lowers the target’s Speed by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "X Regen All",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Applies the Gradual Healing effect to all allied sync pairs."
			},
			{
				"user": "Pokemon",
				"name": "Wide Guard",
				"type": "Rock",
				"gauge": "1",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies moves that target all allies when hit by such a move while in this defensive posture, then the user leaves the defensive posture."
			},
			{
				"user": "Trainer",
				"name": "Please Stand Back!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense of all allied sync pairs by four stat ranks. Raises the accuracy of all allied sync pairs by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Train to the Top Rock Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const AS_SABRINA_ALAKAZAM = {
	"bg": "./v/v2.67.0/Tx_ch0114_90_natsume_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Sabrina",
		"images": {
			"base": "./v/v2.67.0/ch0114_90_natsume_1024.png",
			"ex": "./v/v2.67.0/ch0114_90_natsume_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Field",
	"pokemonType": "Psychic",
	"pokemonWeakness": "Ghost",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Alakazam",
			"formName": "",
			"stats": {
				"hp": "646",
				"atk": "132",
				"def": "170",
				"spa": "380",
				"spd": "181",
				"spe": "315"
			},
			"statsLVL150": {
				"hp": "676",
				"atk": "138",
				"def": "178",
				"spa": "400",
				"spd": "191",
				"spe": "331"
			},
			"statsLVL200": {
				"hp": "826",
				"atk": "168",
				"def": "218",
				"spa": "500",
				"spd": "241",
				"spe": "411"
			},
			"image": "./v/v2.67.0/pm0065_00_foodin_256.png"
		},
		{
			"name": "Mega Alakazam",
			"formName": "",
			"stats": {
				"hp": "646",
				"atk": "145",
				"def": "187",
				"spa": "418",
				"spd": "199",
				"spe": "346"
			},
			"statsLVL150": {
				"hp": "676",
				"atk": "151",
				"def": "195",
				"spa": "440",
				"spd": "210",
				"spe": "364"
			},
			"statsLVL200": {
				"hp": "826",
				"atk": "184",
				"def": "239",
				"spa": "550",
				"spd": "265",
				"spe": "452"
			},
			"image": "./v/v2.67.0/pm0065_51_megafoodin_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Psychic Master’s Foresight",
				"description": "Grants all of the following effects when the user enters a battle: Applies the Physical Damage Reduction effect to the allied field of play. Applies the Special Damage Reduction effect to the allied field of play. Raises the user’s Sp. Atk by six stat ranks."
			},
			{
				"name": "Grasping a Victorious Future",
				"description": "Reduces the user’s sync move countdown by three the first time it enters a battle each battle. Applies Kanto Circle (Special) to the allied field of play the first time the user enters a battle each battle."
			},
			{
				"name": "P-Moves & S-Moves Crit",
				"description": "Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Mind Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Psychic theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Mind Judgment",
				"description": "Raises the Psychic Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Psychic Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
		"passivesSuperawakening": [],
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
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Arc Suit",
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
				"name": "(b move) Almighty Psybeam",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Leaves the target confused. Lowers one of the target’s stats (Attack, Defense, Sp.&nbsp;Atk, Sp.&nbsp;Def, Speed, accuracy, or evasiveness) by one stat rank at random the following number of times:(lb)two&nbsp;times regardless of the status of the allied field of play,(lb)four additional times when the Physical Damage Reduction effect applies to the allied field of play,(lb)four additional times when the Special Damage Reduction effect applies to the allied field of play."
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
				"name": "(b move) Almighty Psychic",
				"type": "Psychic",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "150-180",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When your team’s sync pair uses a sync move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. The more the target’s stats are lowered, the greater the power of this attack. Has a chance (10%) of lowering the target’s Sp.&nbsp;Def by one stat rank. The power and chance of applying additional effects of this move are not lowered even if there are multiple targets. Turns the field of play’s terrain into Psychic Terrain the first time this attack move is successful each battle."
			},
			{
				"user": "Trainer",
				"name": "Our Sixth Sense!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s terrain into EX Psychic Terrain. Applies the Damage Guard Next effect to the user. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "(divine move) Prescient Divine Psywave",
				"type": "Psychic",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega&nbsp;Alakazam until the end of battle. Applies Kanto Circle (Special) to the allied field of play the first time the user’s sync move is used each battle.<br>Kanto Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Kanto theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const SONIA_CORVIKNIGHT = {
	"bg": "./v/v2.67.0/Tx_ch0259_41_sania_mindscape00.png",
	"trainer": {
		"name": "Sonia (Academy)",
		"images": {
			"base": "./v/v2.67.0/ch0259_41_sania_1024.png",
			"ex": "./v/v2.67.0/ch0259_41_sania_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Steel",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Corviknight",
			"formName": "",
			"stats": {
				"hp": "688",
				"atk": "224",
				"def": "312",
				"spa": "132",
				"spd": "296",
				"spe": "293"
			},
			"statsLVL150": {
				"hp": "720",
				"atk": "236",
				"def": "328",
				"spa": "138",
				"spd": "312",
				"spe": "309"
			},
			"statsLVL200": {
				"hp": "880",
				"atk": "296",
				"def": "408",
				"spa": "168",
				"spd": "392",
				"spe": "389"
			},
			"image": "./v/v2.67.0/pm0823_00_00_armorga_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Black Steel in Galar Skies",
				"description": "Grants all of the following effects when the user turns the field of play’s zone into a Steel Zone: Reduces the user’s sync move countdown by one. Applies Galar Circle (Defensive) to the allied field of play. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"name": "Winged Reign of Terror",
				"description": "Extends the duration of the Steel Zone when the zone turns into a Steel Zone while the user is on the field. Extends the duration of Galar Circle (Defensive) when Galar Circle (Defensive) is applied to the allied field of play."
			},
			{
				"name": "Stat ↓ Reflection",
				"description": "When the user’s stat is lowered by an opponent, the amount lowered is reflected back to that opponent instead."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Sunglasses",
				"description": ""
			},
			{
				"name": "Pasio Academy",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Metal Claw",
				"type": "Steel",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "21-25",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (10%) of raising the user’s Attack by one stat rank."
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
				"name": "(b move) Black Steel Wing",
				"type": "Steel",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Turns the field of play’s zone into a Steel Zone. (A Steel Zone powers up Steel-type attacks.) Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by two stat ranks."
			},
			{
				"user": "Trainer",
				"name": "So Young and Cute!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Attack and Sp.&nbsp;Atk of all allied sync pairs by four stat ranks. Raises the accuracy of all allied sync pairs by one stat rank. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Young Studying Professor Steel Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const ARVEN_SKWOVET = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Arven",
		"images": {
			"base": "./v/v2.67.0/ch0317_00_pepper_1024.png",
			"ex": "./v/v2.67.0/ch0317_00_pepper_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Tech",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Skwovet",
			"formName": "",
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
			"image": "./v/v2.67.0/pm0819_00_00_hoshigarisu_256.png"
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
				"name": "Normal",
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
				"name": "Body Slam",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "53-63",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target paralyzed."
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
				"name": "No Leftovers Normal Impact",
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

export const PERRIN_NOCTOWL = {
	"bg": "./v/v2.67.0/Tx_ch0338_40_sazare_mindscape00.png",
	"trainer": {
		"name": "Perrin (Academy)",
		"images": {
			"base": "./v/v2.67.0/ch0338_40_sazare_1024.png",
			"ex": "./v/v2.67.0/ch0338_40_sazare_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Support",
	"pokemonType": "Flying",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Noctowl",
			"formName": "",
			"stats": {
				"hp": "669",
				"atk": "438",
				"def": "170",
				"spa": "438",
				"spd": "189",
				"spe": "381"
			},
			"statsLVL150": {
				"hp": "699",
				"atk": "462",
				"def": "178",
				"spa": "462",
				"spd": "199",
				"spe": "401"
			},
			"statsLVL200": {
				"hp": "849",
				"atk": "582",
				"def": "218",
				"spa": "582",
				"spd": "249",
				"spe": "501"
			},
			"image": "./v/v2.67.0/pm0164_00_yorunozuku_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Turning On the Flash!",
				"description": "Lowers the target’s Defense and Speed by two stat ranks when the user’s attack move against it is successful. Has a chance (30%) of making the target flinch when the user’s attack move against it is successful."
			},
			{
				"name": "Raising the Shutter Speed!",
				"description": "Reduces the user’s sync move countdown by one when the user applies a circle to the allied field of play. Extends the duration of Paldea Circle (Physical) when Paldea Circle (Physical) is applied to the allied field of play. Raises the Speed of all allied sync pairs by two stat ranks when the user applies a circle to the allied field of play."
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
				"name": "Flying",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Special Costume",
				"description": ""
			},
			{
				"name": "Artistic",
				"description": ""
			},
			{
				"name": "Pasio Academy",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Aerial Ace",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "45-54",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "Paldea Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Paldea Circle (Physical) to the allied field of play. Paldea Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Paldea theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Eagle Eye Zen Headbutt",
				"type": "Psychic",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "300-360",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When a circle is applied to the allied field of play.(lb)Deactivation Condition: When there are no longer any circles applied to the allied field of play.(lb)(lb)Never misses. Makes the target flinch. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "Pretty Amazing!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Attack by three stat ranks. Raises the user’s critical-hit rate by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Real Good Shot Flying Impact",
				"type": "Flying",
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