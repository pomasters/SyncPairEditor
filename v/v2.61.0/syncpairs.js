export const AREZU_LILLIGANT = {
	"bg": "./v/v2.61.0/Tx_ch0312_00_hinatsu_mindscape00.png",
	"trainer": {
		"name": "Arezu",
		"images": {
			"base": "./v/v2.61.0/ch0312_00_hinatsu_1024.png",
			"ex": "./v/v2.61.0/ch0312_00_hinatsu_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Special Strike",
	"pokemonType": "Grass",
	"pokemonWeakness": "Flying",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Lilligant",
			"formName": "Hisuian Form",
			"stats": {
				"hp": "651",
				"atk": "380",
				"def": "182",
				"spa": "380",
				"spd": "181",
				"spe": "350"
			},
			"statsLVL150": {
				"hp": "681",
				"atk": "400",
				"def": "192",
				"spa": "400",
				"spd": "191",
				"spe": "368"
			},
			"statsLVL200": {
				"hp": "831",
				"atk": "500",
				"def": "242",
				"spa": "500",
				"spd": "241",
				"spe": "458"
			},
			"image": "./v/v2.61.0/pm0549_00_41_dredear_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sinnoh Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Sinnoh theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Dance of Yellow Tones",
				"description": "Applies the Physical Move Break effect to the target when the user’s physical attack move against it is successful. Applies the Special Move Break effect to the target when the user’s special attack move against it is successful. Only one of these effects can activate once per battle."
			},
			{
				"name": "Dance of Green Tones",
				"description": "Lowers the target’s Defense by two stat ranks when the user’s physical attack move against it is successful. Increases the user’s Physical Moves ↑ Next effect by three ranks when its physical attack move is successful. Lowers the target’s Sp. Def by two stat ranks when the user’s special attack move against it is successful. Increases the user’s Special Moves ↑ Next effect by three ranks when its special attack move is successful."
			},
			{
				"name": "All Stats ↓ Immunity | P-Moves & S-Moves Crit",
				"description": "The user’s stats cannot be lowered. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Bold and Stylish Hairdresser",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Applies Sinnoh Circle (Defensive) to the allied field of play the first time the user enters a battle each battle. Extends the duration of Sinnoh Circle (Defensive) when Sinnoh Circle (Defensive) is applied to the allied field of play."
			}
		],
		"themes": [
			{
				"name": "Grass",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": "(Hisui)"
			},
			{
				"name": "Nature Lover",
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
				"name": "Leaf Storm",
				"type": "Grass",
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
				"user": "Pokemon",
				"name": "Seed Bomb",
				"type": "Grass",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Splendid Victory Dance",
				"type": "Fighting",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Activation Condition: When the sync buff of the user’s team is zero.(lb)Deactivation Condition: When the sync buff of the user’s team is one or more.(lb)(lb)Raises the user’s Attack, Defense, Sp.&nbsp;Atk, and Speed by six stat ranks."
			},
			{
				"user": "Trainer",
				"name": "Just Thought This Up!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by two. Increases the user’s Physical Moves&nbsp;↑ Next effect by 10 ranks when its Physical Moves&nbsp;↑ Next effect is increased. Increases the user’s Special Moves&nbsp;↑ Next effect by 10 ranks when its Special Moves&nbsp;↑ Next effect is increased."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Bold and Strong Hairstylist Petal Dance",
				"type": "Grass",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the user’s Speed is raised, the greater the power of this attack."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const PIERS_SKUNTANK = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Piers",
		"images": {
			"base": "./v/v2.61.0/ch0256_00_nezz_1024.png",
			"ex": "./v/v2.61.0/ch0256_00_nezz_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Support",
	"exRole": "",
	"pokemonType": "Dark",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Skuntank",
			"formName": "",
			"stats": {
				"hp": "605",
				"atk": "190",
				"def": "225",
				"spa": "180",
				"spd": "222",
				"spe": "223"
			},
			"statsLVL150": {
				"hp": "633",
				"atk": "200",
				"def": "237",
				"spa": "190",
				"spd": "234",
				"spe": "235"
			},
			"statsLVL200": {
				"hp": "773",
				"atk": "250",
				"def": "297",
				"spa": "240",
				"spd": "294",
				"spe": "295"
			},
			"image": "./v/v2.61.0/pm0435_00_skutank_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Staggering 2",
				"description": "Has a chance (30%) of making the target flinch when the user’s attack move against it is successful."
			},
			{
				"name": "First Aid 4",
				"description": "Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			},
			{
				"name": "Last Word",
				"description": "The user uses Explosion immediately before fainting."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
		"themes": [
			{
				"name": "Dark",
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
				"name": "Night Slash",
				"type": "Dark",
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
				"name": "Poison Gas",
				"type": "Poison",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "90",
				"target": "All opponents",
				"effect": "-",
				"description": "Leaves the target poisoned."
			},
			{
				"user": "Trainer",
				"name": "Singin’ You a Song!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp.&nbsp;Def of all allied sync pairs by four stat ranks. Raises the accuracy of all allied sync pairs by one stat rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "I Don’t Do Encores Dark Impact",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MAI_MUNCHLAX = {
	"bg": "./v/v2.61.0/Tx_ch0311_00_yone_mindscape00.png",
	"trainer": {
		"name": "Mai",
		"images": {
			"base": "./v/v2.61.0/ch0311_00_yone_1024.png",
			"ex": "./v/v2.61.0/ch0311_00_yone_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Munchlax",
			"formName": "",
			"stats": {
				"hp": "680",
				"atk": "200",
				"def": "294",
				"spa": "132",
				"spd": "318",
				"spe": "198"
			},
			"statsLVL150": {
				"hp": "712",
				"atk": "210",
				"def": "310",
				"spa": "138",
				"spd": "334",
				"spe": "208"
			},
			"statsLVL200": {
				"hp": "872",
				"atk": "260",
				"def": "390",
				"spa": "168",
				"spd": "414",
				"spe": "258"
			},
			"image": "./v/v2.61.0/pm0446_00_gonbe_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Sinnoh Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Sinnoh theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Blessings of the Fieldlands",
				"description": "Restores the HP of all allied sync pairs when the user is hit by an attack move while the zone is a Normal Zone. Restores the user’s HP by approximately 20% of its maximum HP when it is hit by a sync move while the zone is a Normal Zone."
			},
			{
				"name": "Hit: Attack ↓ & Sp. Atk ↓ 9",
				"description": "Lowers the target’s Attack and Sp. Atk by one stat rank when the user’s attack move is successful."
			},
			{
				"name": "Normal Zone: Team All Stats ↓ Immunity",
				"description": "Stats cannot be lowered for all allied sync pairs when the zone is a Normal Zone."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Warden of the Obsidian Fieldlands",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Reduces the sync move countdown by one the first time the user’s sync move is used each battle. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank after your team’s sync pair uses their sync move."
			}
		],
		"themes": [
			{
				"name": "Normal",
				"description": ""
			},
			{
				"name": "Sinnoh",
				"description": "(Hisui)"
			},
			{
				"name": "Nature Lover",
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
				"name": "Normal Wish",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Normal Zone. (A Normal Zone powers up Normal-type attacks.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Thick Fur Protect",
				"type": "Normal",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Applies the Gradual Healing effect to the user. Applies the Damage Guard Next effect to the user. Applies the Take Next \"All\" Move effect to the user."
			},
			{
				"user": "Trainer",
				"name": "We’ll Help You!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by three stat ranks. These stats are raised by six stat ranks instead when the zone is a Normal Zone."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Big Sis Warden Giga Impact",
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

export const PERRIN_GROWLITHE = {
	"bg": "./v/v2.61.0/Tx_ch0338_00_sazare_mindscape00.png",
	"trainer": {
		"name": "Perrin",
		"images": {
			"base": "./v/v2.61.0/ch0338_00_sazare_1024.png",
			"ex": "./v/v2.61.0/ch0338_00_sazare_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Sprint",
	"pokemonType": "Rock",
	"pokemonWeakness": "Water",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Growlithe",
			"formName": "Hisuian Form",
			"stats": {
				"hp": "665",
				"atk": "404",
				"def": "197",
				"spa": "268",
				"spd": "198",
				"spe": "309"
			},
			"statsLVL150": {
				"hp": "695",
				"atk": "426",
				"def": "207",
				"spa": "282",
				"spd": "208",
				"spe": "325"
			},
			"statsLVL200": {
				"hp": "845",
				"atk": "536",
				"def": "257",
				"spa": "352",
				"spd": "258",
				"spe": "405"
			},
			"image": "./v/v2.61.0/pm0058_00_41_gardie_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Paldea Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Paldea theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Great Photo Op!",
				"description": "Raises the user’s Attack by six stat ranks the first time it applies Rock Damage Field to the opponent's field of play each battle. Raises the user’s critical-hit rate by three stat ranks the first time it applies Rock Damage Field to the opponent’s field of play each battle."
			},
			{
				"name": "Keep It Going!",
				"description": "Lowers one of the target’s following stats by two stat ranks at random when the user’s attack move is successful while Rock Damage Field applies to the opponent’s field of play: Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness. Applies the Free Move Next effect to the user when its attack move is successful while Rock Damage Field applies to the opponent’s field of play."
			},
			{
				"name": "Sure Hit & Recoil Removal",
				"description": "The user’s moves never miss. Negates recoil damage when using moves that have the Recoil effect tag."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Traveler with a Thing for Photography",
				"description": "Reduces the user’s sync move countdown by one the first time its sync move is used each battle. Powers up the sync moves of all allied sync pairs when Rock Damage Field applies to the opponent’s field of play. Extends the duration of the Rock Zone when the zone turns into a Rock Zone while the user is on the field."
			}
		],
		"themes": [
			{
				"name": "Rock",
				"description": ""
			},
			{
				"name": "Paldea",
				"description": ""
			},
			{
				"name": "Artistic",
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
				"name": "Head Smash",
				"type": "Rock",
				"gauge": "3",
				"uses": "-",
				"category": "Physical",
				"power": "188-225",
				"accuracy": "80",
				"target": "An opponent",
				"effect": "-",
				"description": "The user also takes approximately 33% of the damage it dealt to the target."
			},
			{
				"user": "Pokemon",
				"name": "Stealth Rock",
				"type": "Rock",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Opponents’ side",
				"effect": "-",
				"description": "Applies Rock Damage Field to the opponents’ field of play. (Rock Damage Field: The sync pairs will take Rock-type damage whenever they take an action.)"
			},
			{
				"user": "Pokemon",
				"name": "(b move) Pebbly Rock Slide",
				"type": "Rock",
				"gauge": "2",
				"uses": "2",
				"category": "Physical",
				"power": "350-420",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When Rock Damage Field applies to the opponent’s field of play.(lb)Deactivation Condition: When the opponent’s field of play is no longer Rock Damage Field.(lb)(lb)Lowers the target’s Defense by two stat ranks. Makes the target flinch. The power of this move is not lowered even if there are multiple targets. Turns the field of play’s zone into an EX Rock Zone the first time this attack move is successful each battle. (An EX Rock Zone powers up Rock-type attacks.)"
			},
			{
				"user": "Trainer",
				"name": "Gimme a Nice Expression!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Reduces the sync move countdown of an ally by one. Applies the Supereffective&nbsp;↑ Next effect to an ally. Applies the Enduring effect to an ally."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Traveling Photo Enthusiast Rock Slide",
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

export const LACEY_WHIMSICOTT = {
	"bg": "./v/v2.61.0/Tx_ch0352_40_taro_mindscape00.png",
	"trainer": {
		"name": "Lacey (Fall 2025)",
		"images": {
			"base": "./v/v2.61.0/ch0352_40_taro_1024.png",
			"ex": "./v/v2.61.0/ch0352_40_taro_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Field",
	"pokemonType": "Dark",
	"pokemonWeakness": "Bug",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Whimsicott ",
			"formName": "Tera Type: Dark",
			"stats": {
				"hp": "678",
				"atk": "210",
				"def": "315",
				"spa": "254",
				"spd": "298",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "710",
				"atk": "220",
				"def": "331",
				"spa": "266",
				"spd": "314",
				"spe": "351"
			},
			"statsLVL200": {
				"hp": "870",
				"atk": "270",
				"def": "411",
				"spa": "326",
				"spd": "394",
				"spe": "441"
			},
			"image": "./v/v2.61.0/pm0547_00_elfuun_256.png"
		},
		{
			"name": "Whimsicott ",
			"formName": "Tera Type: Dark",
			"stats": {
				"hp": "678",
				"atk": "210",
				"def": "315",
				"spa": "254",
				"spd": "298",
				"spe": "333"
			},
			"statsLVL150": {
				"hp": "710",
				"atk": "220",
				"def": "331",
				"spa": "266",
				"spd": "314",
				"spe": "351"
			},
			"statsLVL200": {
				"hp": "870",
				"atk": "270",
				"def": "411",
				"spa": "326",
				"spd": "394",
				"spe": "441"
			},
			"image": "./v/v2.61.0/pm0547_71_16_elfuun_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Debut: Dark S-Tera",
				"description": "The user Sync Terastallizes into Dark type the first time it enters a battle each battle."
			},
			{
				"name": "Tricks Galore!",
				"description": "Has a chance (30% each) of granting the following effects when the user’s attack move is successful: Makes the target flinch. Leaves the target confused. Leaves the target trapped."
			},
			{
				"name": "User Sets Dark Zone: Team Special Boost ↑1 9",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank when the user turns the field of play’s zone into a Dark Zone."
			}
		],
		"passives2": [
			{
				"name": "Let’s Be Cute AND Bad!",
				"description": "Reduces the user’s sync move countdown by one when it Sync Terastallizes. Turns the field of play’s zone into a Dark Zone when the user Sync Terastallizes. (A Dark Zone powers up Dark-type attacks.)"
			},
			{
				"name": "Tricks Galore!",
				"description": "Has a chance (30% each) of granting the following effects when the user’s attack move is successful: Makes the target flinch. Leaves the target confused. Leaves the target trapped."
			},
			{
				"name": "User Sets Dark Zone: Team Special Boost ↑1 9",
				"description": "Increases the Special Moves ↑ Next effect of all allied sync pairs by one rank when the user turns the field of play’s zone into a Dark Zone."
			}
		],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [],
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
				"name": "Elite Four",
				"description": ""
			},
			{
				"name": "Seasonal Outfit",
				"description": ""
			},
			{
				"name": "Fancy Lady",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
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
				"name": "(b move) Cute ’n’ Bad Fake Tears",
				"type": "Dark",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the Sp.&nbsp;Def of all opposing sync pairs by three stat ranks. Turns the field of play’s zone into a Dark Zone. (A Dark Zone powers up Dark-type attacks.) Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "Cuter and Cuter!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Sp.&nbsp;Atk of all allied sync pairs by four stat ranks. Raises the critical-hit rate of all allied sync pairs by three stat ranks. Increases the Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Bad for a Day Tera Blast",
				"type": "Dark",
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
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Spinel Tera Blast",
				"type": "Dark",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Raises the user’s Defense and Sp.&nbsp;Def by one stat rank."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const CILAN_SIMISAGE = {
	"bg": "./v/v2.61.0/Tx_ch0107_00_dent_mindscape00.png",
	"trainer": {
		"name": "Cilan",
		"images": {
			"base": "./v/v2.61.0/ch0107_00_dent_1024.png",
			"ex": "./v/v2.61.0/ch0107_00_dent_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Tech",
	"pokemonType": "Grass",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Simisage",
			"formName": "",
			"stats": {
				"hp": "660",
				"atk": "200",
				"def": "299",
				"spa": "200",
				"spd": "299",
				"spe": "348"
			},
			"statsLVL150": {
				"hp": "690",
				"atk": "210",
				"def": "315",
				"spa": "210",
				"spd": "315",
				"spe": "366"
			},
			"statsLVL200": {
				"hp": "840",
				"atk": "260",
				"def": "395",
				"spa": "260",
				"spd": "395",
				"spe": "456"
			},
			"image": "./v/v2.61.0/pm0512_00_yanakkie_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Best Tea Leaves",
				"description": "Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank when an ally applies a circle to the allied field of play."
			},
			{
				"name": "Take P/S-Move Hit & Half HP: Use Berry & HP Recovery 4",
				"description": "Reduces MP by one for the user’s moves that have the Berry effect tag and restores its HP by approximately 40% of its maximum HP when its HP is left at half or below after it is hit by an attack move or sync move."
			},
			{
				"name": "Circle: Team Crit Immunity",
				"description": "Protects all allied sync pairs against critical hits when a circle applies to the allied field of play."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "Vine Whip",
				"type": "Grass",
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
				"name": "Leer",
				"type": "Normal",
				"gauge": "1",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "100",
				"target": "All opponents",
				"effect": "-",
				"description": "Lowers the target’s Defense by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "Enjoy the Fragrance!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Raises the Defense and Sp.&nbsp;Def of all allied sync pairs by two stat ranks. Applies Unova Circle (Defensive) to the allied field of play. Unova Circle (Defensive) grants all of the following effects: Powers up the moves and sync moves of all allied sync pairs by 5%. Reduces attack move and sync move damage taken by all allied sync pairs by 10%. The more sync pairs with the Unova theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 5% and reduces damage by 5%. The maximum power-up is 20%, and the maximum damage reduction is 25%.)"
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Fragrant Green Trouble Grass Impact",
				"type": "Grass",
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

export const CHILI_SIMISEAR = {
	"bg": "./v/v2.61.0/Tx_ch0145_00_pod_mindscape00.png",
	"trainer": {
		"name": "Chili",
		"images": {
			"base": "./v/v2.61.0/ch0145_00_pod_1024.png",
			"ex": "./v/v2.61.0/ch0145_00_pod_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Sprint",
	"pokemonType": "Fire",
	"pokemonWeakness": "Rock",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Simisear",
			"formName": "",
			"stats": {
				"hp": "646",
				"atk": "356",
				"def": "160",
				"spa": "268",
				"spd": "160",
				"spe": "332"
			},
			"statsLVL150": {
				"hp": "676",
				"atk": "374",
				"def": "168",
				"spa": "282",
				"spd": "168",
				"spe": "350"
			},
			"statsLVL200": {
				"hp": "826",
				"atk": "464",
				"def": "208",
				"spa": "352",
				"spd": "208",
				"spe": "440"
			},
			"image": "./v/v2.61.0/pm0514_00_baokkie_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Burning Up!",
				"description": "Increases the user’s Physical Moves ↑ Next effect by two ranks when an ally applies a circle to the allied field of play."
			},
			{
				"name": "The Perfect Temperature",
				"description": "Grants all of the following effects the first time the user uses UnovaPassion each battle: Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by three stat ranks. Applies the Supereffective ↑ Next effect to the user."
			},
			{
				"name": "Circle: Team All Stats ↓ Immunity",
				"description": "Stats cannot be lowered for all allied sync pairs when a circle applies to the allied field of play."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "(b move) Dancing Flames Flare Blitz",
				"type": "Fire",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When a circle is applied to the allied field of play.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Removes the frozen condition from the user. Never misses. Lowers the target’s Defense by one stat rank. Has a chance (10%) of leaving the target burned. The power and chance of applying additional effects of this move are not lowered even if there are multiple targets."
			},
			{
				"user": "Trainer",
				"name": "Unova Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Unova Circle (Physical) to the allied field of play. Unova Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Unova theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
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
				"name": "Keep It Burning!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Applies the Supereffective&nbsp;↑ Next effect to the user. Applies the Free Move Next effect to the user. Increases the user’s Sync Move&nbsp;↑ Next effect by four&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Burning Red Trouble Fire Impact",
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

export const CRESS_SIMIPOUR = {
	"bg": "./v/v2.61.0/Tx_ch0146_00_corn_mindscape00.png",
	"trainer": {
		"name": "Cress",
		"images": {
			"base": "./v/v2.61.0/ch0146_00_corn_1024.png",
			"ex": "./v/v2.61.0/ch0146_00_corn_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Sprint",
	"exRole": "Physical Strike",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Simipour",
			"formName": "",
			"stats": {
				"hp": "672",
				"atk": "404",
				"def": "180",
				"spa": "224",
				"spd": "180",
				"spe": "356"
			},
			"statsLVL150": {
				"hp": "704",
				"atk": "426",
				"def": "190",
				"spa": "236",
				"spd": "190",
				"spe": "374"
			},
			"statsLVL200": {
				"hp": "864",
				"atk": "536",
				"def": "240",
				"spa": "296",
				"spd": "240",
				"spe": "464"
			},
			"image": "./v/v2.61.0/pm0516_00_hiyakkie_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "The Purest Water",
				"description": "Raises the Speed of all allied sync pairs by two stat ranks when an ally applies a circle to the allied field of play. Applies the Free Move Next effect to all allied sync pairs when an ally applies a circle to the allied field of play."
			},
			{
				"name": "Use Unova Passion: Sync CD ↓ 9",
				"description": "Reduces the user’s sync move countdown by one when it uses UnovaPassion."
			},
			{
				"name": "Circle: Team Condition Nullification",
				"description": "Prevents all allied sync pairs from being inflicted with status conditions, flinching, becoming confused, or becoming trapped when a circle applies to the allied field of play."
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
				"name": "Unova",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "(b move) Hydraulic Force Aqua Tail",
				"type": "Water",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Defense and Speed by two stat ranks. Applies the Physical Move Break effect to the target the first time this attack move is successful each battle."
			},
			{
				"user": "Trainer",
				"name": "Unova Passion",
				"type": "Trainer",
				"gauge": "2",
				"uses": "2",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Increases the Physical Moves&nbsp;↑ Next effect of all allied sync pairs by one&nbsp;rank. Applies Unova Circle (Physical) to the allied field of play. Unova Circle (Physical) grants all of the following effects: Powers up the physical attack moves and physical sync moves of all allied sync pairs by 10%. Reduces physical attack move and physical sync move damage taken by all allied sync pairs by 5%. The more sync pairs with the Unova theme that are on the allied field of play, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 10% and reduces damage by 3%. The maximum power-up is 40%, and the maximum damage reduction is 14%.)"
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
				"user": "Trainer",
				"name": "Like a Fresh Stream!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Reduces the user’s sync move countdown by one. Raises the user’s Attack by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Flowing Blue Trouble Water Impact",
				"type": "Water",
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
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}