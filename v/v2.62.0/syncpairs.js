export const AS_BLUE_PIDGEOT = {
	"bg": "./v/v2.62.0/Tx_ch0021_91_green_mindscape00.png",
	"trainer": {
		"name": "Arc Suit Blue",
		"images": {
			"base": "./v/v2.62.0/ch0021_91_green_1024.png",
			"ex": "./v/v2.62.0/ch0021_91_green_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Multi",
	"exRole": "Special Strike",
	"pokemonType": "Flying",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pidgeot",
			"formName": "",
			"stats": {
				"hp": "695",
				"atk": "273",
				"def": "190",
				"spa": "336",
				"spd": "190",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "727",
				"atk": "287",
				"def": "200",
				"spa": "354",
				"spd": "200",
				"spe": "354"
			},
			"statsLVL200": {
				"hp": "887",
				"atk": "357",
				"def": "250",
				"spa": "444",
				"spd": "250",
				"spe": "444"
			},
			"image": "./v/v2.62.0/pm0018_00_pigeot_256.png"
		},
		{
			"name": "Mega Pidgeot",
			"formName": "",
			"stats": {
				"hp": "695",
				"atk": "300",
				"def": "209",
				"spa": "369",
				"spd": "209",
				"spe": "369"
			},
			"statsLVL150": {
				"hp": "727",
				"atk": "315",
				"def": "220",
				"spa": "389",
				"spd": "220",
				"spe": "389"
			},
			"statsLVL200": {
				"hp": "887",
				"atk": "392",
				"def": "275",
				"spa": "488",
				"spd": "275",
				"spe": "488"
			},
			"image": "./v/v2.62.0/pm0018_51_megapigeot_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Mach 2 Desire to Improve",
				"description": "Grants all of the following effects when the user enters a battle: Raises the user’s Sp. Atk by six stat ranks. Applies the Free Move Next effect to the user. Increases the user’s Special Moves ↑ Next effect by two ranks."
			},
			{
				"name": "Strongest Genes in Kanto",
				"description": "Applies Kanto Circle (Special) to the allied field of play the first time the user’s attack move is successful each battle. Applies Kanto Circle (Special) to the allied field of play the first time the user’s sync move is used each battle."
			},
			{
				"name": "All Stats ↓ Immunity | P-Moves & S-Moves Crit",
				"description": "The user’s stats cannot be lowered. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [
			{
				"name": "Sky Myth",
				"description": "Powers up the moves of all allied sync pairs by 10%. Reduces attack move damage taken by all allied sync pairs by 20%. The more allied sync pairs with the Flying theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves by 10% and reduces damage by 3%. The maximum power-up is 30%, and the maximum damage reduction is 26%.)"
			},
			{
				"name": "Sky Judgment",
				"description": "Raises the Flying Type Rebuff of all allied sync pairs by one rank the first time the user enters a battle each battle. Lowers the Flying Type Rebuff of all opposing sync pairs by one rank the first time the user enters a battle each battle."
			}
		],
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
				"name": "Arc Suit",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "(b move) Sacred Hurricane",
				"type": "Flying",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Leaves the target confused. The power of this move is not lowered even if there are multiple targets. If the user’s Pidgeot has Mega Evolved, also doubles this attack’s power. When the user’s team does not have a sync buff, also reduces the user’s sync move countdown by three."
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
				"name": "Air Slash",
				"type": "Flying",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "45-54",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
			},
			{
				"user": "Trainer",
				"name": "I’ll Tell You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Increases the user’s Special Moves&nbsp;↑ Next effect by five&nbsp;ranks. If the user’s Pidgeot has Mega Evolved, also restores one MP of its Almighty(lb)Air Slash."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "(divine move) Blue Beyond the Clouds Almighty Hurricane",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Become Mega&nbsp;Pidgeot until the end of battle. Applies the Enduring effect to the user the first time its sync move is used each battle."
			}
		],
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "(b move) Sacred Hurricane",
				"type": "Flying",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "100-120",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Leaves the target confused. The power of this move is not lowered even if there are multiple targets. If the user’s Pidgeot has Mega Evolved, also doubles this attack’s power. When the user’s team does not have a sync buff, also reduces the user’s sync move countdown by three."
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
				"name": "(b move) Almighty Air Slash",
				"type": "Flying",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "350-420",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Makes the target flinch."
			},
			{
				"user": "Trainer",
				"name": "I’ll Tell You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Increases the user’s Special Moves&nbsp;↑ Next effect by five&nbsp;ranks. If the user’s Pidgeot has Mega Evolved, also restores one MP of its Almighty(lb)Air Slash."
			}
		],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const PENNY_EEVEE = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Penny",
		"images": {
			"base": "./v/v2.62.0/ch0293_00_button_1024.png",
			"ex": "./v/v2.62.0/ch0293_00_button_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Physical Strike",
	"exRole": "",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Eevee",
			"formName": "",
			"stats": {
				"hp": "603",
				"atk": "414",
				"def": "120",
				"spa": "223",
				"spd": "134",
				"spe": "296"
			},
			"statsLVL150": {
				"hp": "631",
				"atk": "436",
				"def": "126",
				"spa": "235",
				"spd": "140",
				"spe": "312"
			},
			"statsLVL200": {
				"hp": "771",
				"atk": "546",
				"def": "156",
				"spa": "295",
				"spd": "170",
				"spe": "392"
			},
			"image": "./v/v2.62.0/pm0133_01_00_eievui_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Recoil Removal 9",
				"description": "Negates recoil damage when using moves that have the recoil effect tag."
			},
			{
				"name": "Sharpened Body 5",
				"description": "Powers up the user’s moves when its Attack is raised."
			},
			{
				"name": "“Quick Move”: Physical Boost ↑1 9",
				"description": "Increases the user’s Physical Moves ↑ Next effect by one rank when it uses a move that has the quick move effect tag."
			}
		],
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
				"name": "Team Star",
				"description": ""
			},
			{
				"name": "Glasses",
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
				"name": "Double-Edge",
				"type": "Normal",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "167-200",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "The user also takes 25% of the damage it dealt to the target."
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
				"name": "Quick Attack",
				"type": "Normal",
				"gauge": "-",
				"uses": "3",
				"category": "Physical",
				"power": "94-112",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Trainer",
				"name": "Take ’Em On!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Veevee Power Normal Impact",
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

export const MIRIAM_TOXAPEX = {
	"bg": "./v/v2.62.0/Tx_ch0336_00_mimoza_mindscape00.png",
	"trainer": {
		"name": "Miriam",
		"images": {
			"base": "./v/v2.62.0/ch0336_00_mimoza_1024.png",
			"ex": "./v/v2.62.0/ch0336_00_mimoza_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Poison",
	"pokemonWeakness": "Psychic",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Toxapex",
			"formName": "Tera Type: Poison",
			"stats": {
				"hp": "688",
				"atk": "336",
				"def": "318",
				"spa": "156",
				"spd": "306",
				"spe": "263"
			},
			"statsLVL150": {
				"hp": "720",
				"atk": "354",
				"def": "334",
				"spa": "164",
				"spd": "322",
				"spe": "277"
			},
			"statsLVL200": {
				"hp": "880",
				"atk": "444",
				"def": "414",
				"spa": "204",
				"spd": "402",
				"spe": "347"
			},
			"image": "./v/v2.62.0/pm0748_00_00_dohidoide_256.png"
		},
		{
			"name": "Toxapex",
			"formName": "Tera Type: Poison",
			"stats": {
				"hp": "688",
				"atk": "336",
				"def": "318",
				"spa": "156",
				"spd": "306",
				"spe": "263"
			},
			"statsLVL150": {
				"hp": "720",
				"atk": "354",
				"def": "334",
				"spa": "164",
				"spd": "322",
				"spe": "277"
			},
			"statsLVL200": {
				"hp": "880",
				"atk": "444",
				"def": "414",
				"spa": "204",
				"spd": "402",
				"spe": "347"
			},
			"image": "./v/v2.62.0/pm0748_71_08_dohidoide_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Debut: Poison S-Tera",
				"description": "The user Sync Terastallizes into Poison type the first time it enters a battle each battle."
			},
			{
				"name": "Team S-Move: HP Recovery 3",
				"description": "Restores the user’s HP by approximately 30% of its maximum HP after your team’s sync pair uses their sync move."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passives2": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Poison Spikes Time to Shine",
				"description": "Restores one MP of the user’s Ametrine Tera Blast when it nullifies an opponent’s move while in a defensive posture."
			},
			{
				"name": "Team S-Move: HP Recovery 3",
				"description": "Restores the user’s HP by approximately 30% of its maximum HP after your team’s sync pair uses their sync move."
			},
			{
				"name": "Vigilance",
				"description": "Protects the user against critical hits."
			}
		],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Angel of the Nurse’s Office",
				"description": "Powers up the moves of all allied sync pairs when the zone is a Poison Zone. Turns the field of play’s zone into a Poison Zone the first time the user’s attack move is successful each battle. (A Poison Zone powers up Poison-type attacks.) Extends the duration of the Poison Zone when the zone turns into a Poison Zone while the user is on the field."
			}
		],
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
				"name": "Poison Sting",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "12-14",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user": "Pokemon",
				"name": "Baneful Bunker",
				"type": "Poison",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies moves when hit while in this defensive posture, then the user leaves the defensive posture. If the move was a physical attack move, leaves the opponent that used it poisoned."
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
				"name": "Don’t Work Too Hard!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by four stat ranks. Raises the critical-hit rate of all allied sync pairs by two stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Nurse’s Office Angel Tera Blast",
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
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "(tera) Poison Sting",
				"type": "Poison",
				"gauge": "1",
				"uses": "-",
				"category": "Physical",
				"power": "18-21",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of leaving the target poisoned."
			},
			{
				"user": "Pokemon2",
				"name": "(tera) Baneful Bunker",
				"type": "Poison",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies moves when hit while in this defensive posture, then the user leaves the defensive posture. If the move was a physical attack move, leaves the opponent that used it poisoned."
			},
			{
				"user": "Pokemon2",
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
				"name": "Don’t Work Too Hard!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by four stat ranks. Raises the critical-hit rate of all allied sync pairs by two stat ranks."
			}
		],
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Ametrine Tera Blast",
				"type": "Poison",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Except in certain circumstances, successful hits with this attack become critical hits. Reduces the user’s sync move countdown by one. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by three&nbsp;ranks."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const JASMINE_FORRETRESS = {
	"bg": "./v/v2.62.0/Tx_ch0113_42_mikan_mindscape00.png",
	"trainer": {
		"name": "Jasmine (Academy)",
		"images": {
			"base": "./v/v2.62.0/ch0113_42_mikan_1024.png",
			"ex": "./v/v2.62.0/ch0113_42_mikan_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Bug",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Forretress",
			"formName": "",
			"stats": {
				"hp": "681",
				"atk": "134",
				"def": "326",
				"spa": "157",
				"spd": "302",
				"spe": "280"
			},
			"statsLVL150": {
				"hp": "713",
				"atk": "140",
				"def": "342",
				"spa": "165",
				"spd": "318",
				"spe": "294"
			},
			"statsLVL200": {
				"hp": "873",
				"atk": "170",
				"def": "422",
				"spa": "205",
				"spd": "398",
				"spe": "364"
			},
			"image": "./v/v2.62.0/pm0205_00_foretos_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Caring Iron Guard",
				"description": "Grants all of the following effects the first time the user applies Johto Circle (Special) to the allied field of play each battle: Raises the Sp. Atk of all allied sync pairs by four stat ranks. Raises the critical-hit rate of all allied sync pairs by three stat ranks. Applies the Enduring effect to all allied sync pairs."
			},
			{
				"name": "Hang On, Steel Heart!",
				"description": "Lowers the target’s Sp. Def by two stat ranks when the user’s attack move against it is successful. Applies the Special Move Break effect to the target the first time the user’s attack move against it is successful each battle."
			},
			{
				"name": "Johto C (Spec) & Move: Free Move Next 9",
				"description": "Applies the Free Move Next effect to the user when its move is successful while Johto Circle (Special) applies to the allied field of play."
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
				"name": "Johto",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Special Costume",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "Bug Buzz",
				"type": "Bug",
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
				"name": "Johto Analysis",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Johto Circle (Special) to the allied field of play. Johto Circle (Special) grants all of the following effects: Powers up the special attack moves and special sync moves of all allied sync pairs by 10%. Reduces special attack move and special sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Johto theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Devoted Iron Defense",
				"type": "Steel",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When Johto Circle (Special) is applied to the allied field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Raises the Defense and Sp. Def of all allied sync pairs by two stat ranks. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank."
			},
			{
				"user": "Trainer",
				"name": "I’ll Heal You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Applies the Gradual Healing effect to an ally. Applies the Critical Hit Next effect to an ally. Increases the Special Moves&nbsp;↑ Next effect of an ally by three&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Protective Steel Shell Bug Beam",
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

export const HUGH_PIGNITE = {
	"bg": "./v/v2.62.0/Tx_ch0147_40_hugh_mindscape00.png",
	"trainer": {
		"name": "Hugh (Academy)",
		"images": {
			"base": "./v/v2.62.0/ch0147_40_hugh_1024.png",
			"ex": "./v/v2.62.0/ch0147_40_hugh_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Fire",
	"pokemonWeakness": "Water",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pignite",
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
			"image": "./v/v2.62.0/pm0499_00_chaoboo_256.png"
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
				"name": "Fire",
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
				"name": "Unleash My Learning Fire Impact",
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

export const KABU_CAMERUPT = {
	"bg": "./v/v2.62.0/Tx_ch0252_40_kabu_mindscape00.png",
	"trainer": {
		"name": "Kabu (Academy)",
		"images": {
			"base": "./v/v2.62.0/ch0252_40_kabu_1024.png",
			"ex": "./v/v2.62.0/ch0252_40_kabu_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Field",
	"pokemonType": "Ground",
	"pokemonWeakness": "Water",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Camerupt",
			"formName": "",
			"stats": {
				"hp": "645",
				"atk": "448",
				"def": "133",
				"spa": "248",
				"spd": "147",
				"spe": "282"
			},
			"statsLVL150": {
				"hp": "675",
				"atk": "472",
				"def": "139",
				"spa": "260",
				"spd": "155",
				"spe": "296"
			},
			"statsLVL200": {
				"hp": "825",
				"atk": "592",
				"def": "169",
				"spa": "320",
				"spd": "195",
				"spe": "366"
			},
			"image": "./v/v2.62.0/pm0323_00_bakuuda_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Ideal Weather for Training",
				"description": "The power of the user’s High Horsepower is doubled when the weather is sunny. Turns the field of play’s zone into a Ground Zone when an ally turns the weather sunny. (A Ground Zone powers up Ground-type attacks.)"
			},
			{
				"name": "Veteran Trainer’s Ingenuity",
				"description": "Restores one MP of the user’s buddy move the first time its sync move is used each battle. Restores one MP of the user’s buddy move after using its max move."
			},
			{
				"name": "Hot Hoenn Sun",
				"description": "Powers up the user’s sync move and max move when the weather is sunny. When the user’s max move attacks an opponent, the target becomes all opposing sync pairs. The power of max moves affected by this passive skill is not lowered even if there are multiple targets. Restores two MP for the status moves of the user’s Pokémon after using the user’s max move."
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
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Gym Leader",
				"description": ""
			},
			{
				"name": "Special Costume",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon",
				"name": "High Horsepower",
				"type": "Ground",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "106-127",
				"accuracy": "95",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
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
				"name": "(b move) Driven High Horsepower",
				"type": "Ground",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Attack is raised.(lb)Deactivation Condition: When the user’s Attack is not raised.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. If the remaining MP for the user’s Sunny Day is one or more when attacking with this move, reduces those MP by one and grants all of the following effects: Makes the weather sunny. Increases the user’s Sync Move&nbsp;↑ Next effect by two&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "This Match Is Decided!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Attack by four stat ranks. Raises the user’s accuracy by one stat rank. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Teaching Tenacity Ground Impact",
				"type": "Ground",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Quake",
				"type": "Ground",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Sp. Def of all allied sync pairs by two stat ranks."
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
				"name": "Max Quake",
				"type": "Ground",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Raises the Sp. Def of all allied sync pairs by two stat ranks."
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

export const CHASE_EEVEE = {
	"bg": "./images/bg/gold.png",
	"trainer": {
		"name": "Chase",
		"images": {
			"base": "./v/v2.62.0/ch0279_00_kakeru_1024.png",
			"ex": "./v/v2.62.0/ch0279_00_kakeru_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Eevee",
			"formName": "",
			"stats": {
				"hp": "650",
				"atk": "424",
				"def": "158",
				"spa": "424",
				"spd": "176",
				"spe": "292"
			},
			"statsLVL150": {
				"hp": "680",
				"atk": "446",
				"def": "166",
				"spa": "446",
				"spd": "184",
				"spe": "308"
			},
			"statsLVL200": {
				"hp": "830",
				"atk": "556",
				"def": "206",
				"spa": "556",
				"spd": "224",
				"spe": "388"
			},
			"image": "./v/v2.62.0/pm0133_00_eievui_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Extreme Typeboost",
				"description": "Lowers all of the following Type Rebuffs of all opposing sync pairs by one rank the first time the user’s sync move is used each battle: Normal, Fire, Water, Electric, Grass, Ice, Psychic, Dark, Fairy"
			},
			{
				"name": "S-Move: Normal Zone",
				"description": "Turns the field of play’s zone into a Normal Zone after using the user’s sync move. (A Normal Zone powers up Normal-type attacks.)"
			},
			{
				"name": "P/S-Move on Opp: Defense & Sp. Def ↓2 9",
				"description": "Lowers the target’s Defense and Sp. Def by two stat ranks when the user’s Pokémon uses a move targeting that opponent. Lowers the target’s Defense and Sp. Def by two stat ranks after using the user’s sync move targeting that opponent."
			}
		],
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
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Main Character",
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
				"user": "Pokemon",
				"name": "Growl",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Attack by one stat rank."
			},
			{
				"user": "Pokemon",
				"name": "Swift",
				"type": "Normal",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "57-68",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses."
			},
			{
				"user": "Trainer",
				"name": "Let’s Go Full Speed!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the user’s Attack and Sp. Atk by three stat ranks. Raises the critical-hit rate of all allied sync pairs by two stat ranks. Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by two ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Chasing Possibilities Normal Impact",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s Defense is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}