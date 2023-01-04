export const WALLY_GARDEVOIR = {
	"Informations from":"Absol-utely",
	"-----------------":"-------",
	"bg":"./v/v2.25.0/sswallyBG.png",
	"trainer":{
		"name":"Sygna Suit Wally",
		"images":{
			"base":"./v/v2.25.0/sswally.png",
			"ex":"./v/v2.25.0/sswallyEX.png"
		}
	},
	"rarity":6,
	"role":"Tech",
	"pokemonType":"Fairy",
	"pokemonWeakness":"Ghost",
	"pokemonGender":"Male",
	"pokemon":[
		{
			"name":"(shiny) Gardevoir",
			"formName":"",
			"stats":{
				"hp":"645",
				"atk":"292",
				"def":"199",
				"spa":"492",
				"spd":"202",
				"spe":"242"
			},
			"statsLVL150":{
				"hp":"675",
				"atk":"308",
				"def":"209",
				"spa":"518",
				"spd":"212",
				"spe":"254"
			},
			"image":"./v/v2.25.0/282.png"
		},
		{
			"name":"Mega Gardevoir",
			"formName":"",
			"stats":{
				"hp":"645",
				"atk":"292",
				"def":"199",
				"spa":"590",
				"spd":"242",
				"spe":"242"
			},
			"statsLVL150":{
				"hp":"675",
				"atk":"308",
				"def":"209",
				"spa":"621",
				"spd":"254",
				"spe":"254"
			},
			"image":"./v/v2.25.0/282-m.png"
		}
	],
	"skills":{
		"passives":[
			{
				"name":"Head Start 1",
				"description":"Reduces the user’s sync move countdown by 1 the first time it enters a battle each battle."
			},
			{
				"name":"Gobsmack 4",
				"description":"Has a chance (50%) of leaving the target confused when the user’s attack move against it is successful."
			},
			{
				"name":"Team Speedy Entry 2",
				"description":"Raises the Speed of all allied sync pairs by 2 stat ranks when the user enters a battle."
			}
		],
		"passives2":[
			{
				"name":"Head Start 2",
				"description":"Reduces the user’s sync move countdown by 2 the first time it enters a battle each battle."
			},
			{
				"name":"Gobsmack 4",
				"description":"Has a chance (50%) of leaving the target confused when the user’s attack move against it is successful."
			},
			{
				"name":"Team Speedy Entry 2",
				"description":"Raises the Speed of all allied sync pairs by 2 stat ranks when the user enters a battle."
			}
		],
		"passivesMaster":[
			
		],
		"themes":[
			{
				"name":"Fairy",
				"description":""
			},
			{
				"name":"Hoenn",
				"description":""
			},
			{
				"name":"Rival",
				"description":""
			},
			{
				"name":"Sygna Suit",
				"description":""
			},
			{
				"name":"Passionate Spirit",
				"description":""
			}
		],
		"lucky":[
			
		]
	},
	"actions":{
		"moves":[
			{
				"user":"Pokemon",
				"name":"Disarming Voice",
				"type":"Fairy",
				"gauge":"2",
				"uses":"-",
				"category":"Special",
				"power":"45-54",
				"accuracy":"-",
				"target":"All opponents",
				"effect":"Sure Hit",
				"description":"Never misses."
			},
			{
				"user":"Trainer",
				"name":"Fairy Wish",
				"type":"Trainer",
				"gauge":"2",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Entire field",
				"effect":"-",
				"description":"Turns the field of play’s zone into a Fairy Zone. (A Fairy Zone powers up Fairy-type attacks.)"
			},
			{
				"user":"Pokemon",
				"name":"(B Move) B Dazzling Gleam",
				"type":"Fairy",
				"gauge":"-",
				"uses":"1",
				"category":"Special",
				"power":"100-120",
				"accuracy":"100",
				"target":"All opponents",
				"effect":"Quick Move",
				"description":"Activation Condition: When an ally Mega Evolves.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Lowers the target’s Attack and Sp. Atk by 4 stat ranks. Lowers the target’s Fairy Type Rebuff by 1 rank."
			},
			{
				"user":"Trainer",
				"name":"I Won’t Fall Behind!",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Self",
				"effect":"-",
				"description":"Raises the user’s Sp. Atk by 2 stat ranks. Raises the user’s Sp. Def and critical-hit rate by 1 stat rank."
			}
		],
		"syncMove":[
			{
				"user":"Pokemon2",
				"name":"Take On the World Dazzling Gleam",
				"type":"Fairy",
				"gauge":"-",
				"uses":"-",
				"category":"Special",
				"power":"160-192",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"Become Mega Gardevoir until the end of battle. This attack’s power increases when the zone is a Fairy Zone."
			}
		],
		"moves2":[
			
		],
		"syncMove2":[
			
		],
		"movesMAX":[
			
		]
	}
}

export const RAIHAN_GIGALITH = {
	"Informations from":"Absol-utely",
	"-----------------":"-------",
	"bg":"./images/bg/silver.png",
	"trainer":{
		"name":"Raihan",
		"images":{
			"base":"./v/v2.25.0/raihan.png",
			"ex":"./v/v2.25.0/raihan.png"
		}
	},
	"rarity":4,
	"role":"Support",
	"pokemonType":"Rock",
	"pokemonWeakness":"Water",
	"pokemonGender":"Male",
	"pokemon":[
		{
			"name":"Gigalith",
			"formName":"",
			"stats":{
				"hp":"574",
				"atk":"142",
				"def":"229",
				"spa":"117",
				"spd":"200",
				"spe":"239"
			},
			"statsLVL150":{
				"hp":"600",
				"atk":"148",
				"def":"241",
				"spa":"123",
				"spd":"210",
				"spe":"251"
			},
			"image":"./v/v2.25.0/526.png"
		}
	],
	"skills":{
		"passives":[
			{
				"name":"Sand Summoner",
				"description":"Causes a sandstorm the first time the user enters a battle each battle. Protects the user from damage from a sandstorm."
			},
			{
				"name":"Atmospheric Acceleration 2",
				"description":"Quickly charges the move gauge when weather conditions are in effect."
			},
			{
				"name":"Endurance",
				"description":"When the user enters battle with full HP, applies the Enduring effect to it."
			}
		],
		"passives2":[
			
		],
		"passivesMaster":[
			
		],
		"themes":[
			{
				"name":"Rock",
				"description":""
			},
			{
				"name":"Galar",
				"description":""
			},
			{
				"name":"Gym Leader",
				"description":""
			},
			{
				"name":"Gadgeteer",
				"description":""
			},
			{
				"name":"Passionate Spirit",
				"description":""
			}
		],
		"lucky":[
			
		]
	},
	"actions":{
		"moves":[
			{
				"user":"Pokemon",
				"name":"Smack Down",
				"type":"Rock",
				"gauge":"1",
				"uses":"-",
				"category":"Physical",
				"power":"20-24",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"No additional effect."
			},
			{
				"user":"Trainer",
				"name":"X Regen All",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"All allies",
				"effect":"-",
				"description":"Applies the Gradual Healing effect to all allied sync pairs."
			},
			{
				"user":"Pokemon",
				"name":"Iron Defense",
				"type":"Steel",
				"gauge":"2",
				"uses":"-",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Self",
				"effect":"-",
				"description":"Raises the user’s Defense by 2 stat ranks."
			},
			{
				"user":"Trainer",
				"name":"Shake Things Up!",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"All allies",
				"effect":"-",
				"description":"Raises the Attack and Sp. Atk of all allied sync pairs by 2 stat ranks."
			}
		],
		"syncMove":[
			{
				"user":"Pokemon",
				"name":"Smashing Rock Impact",
				"type":"Rock",
				"gauge":"-",
				"uses":"-",
				"category":"Physical",
				"power":"250-300",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"No additional effect."
			}
		],
		"moves2":[
			
		],
		"syncMove2":[
			
		],
		"movesMAX":[
			
		]
	}
}

export const GORDIE_COALOSSAL = {
	"Informations from":"Absol-utely",
	"-----------------":"-------",
	"bg":"./v/v2.25.0/gordieBG.png",
	"trainer":{
		"name":"Gordie",
		"images":{
			"base":"./v/v2.25.0/gordie.png",
			"ex":"./v/v2.25.0/gordieEx.png"
		}
	},
	"rarity":6,
	"role":"Tech",
	"pokemonType":"Rock",
	"pokemonWeakness":"Ground",
	"pokemonGender":"Male",
	"pokemon":[
		{
			"name":"Coalossal",
			"formName":"",
			"stats":{
				"hp":"678",
				"atk":"390",
				"def":"226",
				"spa":"390",
				"spd":"154",
				"spe":"198"
			},
			"statsLVL150":{
				"hp":"710",
				"atk":"410",
				"def":"238",
				"spa":"410",
				"spd":"162",
				"spe":"208"
			},
			"image":"./v/v2.25.0/839.png"
		}
	],
	"skills":{
		"passives":[
			{
				"name":"Hot to the Touch 4",
				"description":"Has a chance (50%) of leaving an opponent that attacked the user burned when the user is hit by an attack move."
			},
			{
				"name":"Posthaste 9",
				"description":"Raises the user’s Speed by two stat ranks when it is hit by an attack move."
			},
			{
				"name":"Hunter’s Instinct",
				"description":"The more the target’s Speed is lowered, the more it powers up the user’s moves."
			}
		],
		"passives2":[
			
		],
		"passivesMaster":[
			
		],
		"themes":[
			{
				"name":"Rock",
				"description":""
			},
			{
				"name":"Galar",
				"description":""
			},
			{
				"name":"Gym Leader",
				"description":""
			},
			{
				"name":"Sunglasses",
				"description":""
			}
		],
		"lucky":[
			
		]
	},
	"actions":{
		"moves":[
			{
				"user":"Pokemon",
				"name":"Rock Tomb",
				"type":"Rock",
				"gauge":"2",
				"uses":"-",
				"category":"Physical",
				"power":"39-46",
				"accuracy":"95",
				"target":"An opponent",
				"effect":"-",
				"description":"Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user":"Pokemon",
				"name":"Flame Charge",
				"type":"Fire",
				"gauge":"2",
				"uses":"-",
				"category":"Physical",
				"power":"30-36",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"Raises the user’s Speed by 1 stat rank."
			},
			{
				"user":"Pokemon",
				"name":"Tar Shot",
				"type":"Rock",
				"gauge":"2",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"Lowers the target’s Speed by 1 stat rank. Lowers the target’s Fire Type Rebuff by 1 rank."
			},
			{
				"user":"Trainer",
				"name":"Not Just Yet!",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Self",
				"effect":"-",
				"description":"Raises the user’s Attack by 2 stat ranks. Raises the user’s Defense and critical-hit rate by 1 stat rank."
			}
		],
		"syncMove":[
			{
				"user":"Pokemon",
				"name":"Stylish Hard Rock Impact",
				"type":"Rock",
				"gauge":"-",
				"uses":"-",
				"category":"Physical",
				"power":"200-240",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"The more the target’s Speed has been lowered, the greater the power of this attack."
			}
		],
		"moves2":[
			
		],
		"syncMove2":[
			
		],
		"movesMAX":[
			{
				"user":"Pokemon",
				"name":"G-Max Volcalith",
				"type":"Rock",
				"gauge":"-",
				"uses":"-",
				"category":"Physical",
				"power":"400-480",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"Applies the Rock Damage Field effect to the opponents’ field of play. (Rock Damage Field: The sync pairs will take Rock-type damage whenever they take an action.)"
			},
			{
				"user":"Pokemon",
				"name":"Max Flare",
				"type":"Fire",
				"gauge":"-",
				"uses":"-",
				"category":"Physical",
				"power":"400-480",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"Makes the weather sunny."
			},
			{
				"user":"Pokemon",
				"name":"Max Guard",
				"type":"Normal",
				"gauge":"-",
				"uses":"-",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"An ally",
				"effect":"-",
				"description":"Applies the Damage Guard Next effect to an ally."
			},
			{
				"user":"",
				"name":"",
				"type":"",
				"gauge":"-",
				"uses":"-",
				"category":"",
				"power":"-",
				"accuracy":"-",
				"target":"",
				"effect":"-",
				"description":""
			}
		]
	}
}

export const MELONY_LAPRAS = {
	"Informations from":"Absol-utely",
	"-----------------":"-------",
	"bg":"./v/v2.25.0/melonyBG.png",
	"trainer":{
		"name":"Melony",
		"images":{
			"base":"./v/v2.25.0/melony.png",
			"ex":"./v/v2.25.0/melonyEX.png"
		}
	},
	"rarity":6,
	"role":"Support",
	"pokemonType":"Ice",
	"pokemonWeakness":"Rock",
	"pokemonGender":"Female",
	"pokemon":[
		{
			"name":"Lapras",
			"formName":"",
			"stats":{
				"hp":"679",
				"atk":"195",
				"def":"274",
				"spa":"224",
				"spd":"286",
				"spe":"242"
			},
			"statsLVL150":{
				"hp":"711",
				"atk":"205",
				"def":"288",
				"spa":"236",
				"spd":"300",
				"spe":"254"
			},
			"image":"./v/v2.25.0/131.png"
		}
	],
	"skills":{
		"passives":[
			{
				"name":"Persisting Shield 5",
				"description":"Extends the duration of the Physical Damage Reduction effect when the Physical Damage Reduction effect applies to the allied field of play."
			},
			{
				"name":"Persisting Barrier 5",
				"description":"Extends the duration of the Special Damage Reduction effect when the Special Damage Reduction effect applies to the allied field of play."
			},
			{
				"name":"Persisting Immunity 5",
				"description":"Extends the duration of the Status Condition Defense effect when the Status Condition Defense effect applies to the allied field of play."
			}
		],
		"passives2":[
			
		],
		"passivesMaster":[
			
		],
		"themes":[
			{
				"name":"Ice",
				"description":""
			},
			{
				"name":"Galar",
				"description":""
			},
			{
				"name":"Gym Leader",
				"description":""
			},
			{
				"name":"Veteran Trainer",
				"description":""
			},
			{
				"name":"Grown Woman",
				"description":""
			}
		],
		"lucky":[
			
		]
	},
	"actions":{
		"moves":[
			{
				"user":"Pokemon",
				"name":"Ice Beam",
				"type":"Ice",
				"gauge":"2",
				"uses":"-",
				"category":"Special",
				"power":"46-55",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"Has a chance (10%) of leaving the target frozen."
			},
			{
				"user":"Pokemon",
				"name":"Safeguard",
				"type":"Normal",
				"gauge":"3",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Allied side",
				"effect":"-",
				"description":"Applies the Status Condition Defense effect to the allied field of play."
			},
			{
				"user":"Pokemon",
				"name":"Sing",
				"type":"Normal",
				"gauge":"1",
				"uses":"-",
				"category":"Status",
				"power":"-",
				"accuracy":"45",
				"target":"An opponent",
				"effect":"-",
				"description":"Puts the target to sleep."
			},
			{
				"user":"Trainer",
				"name":"I Won’t Hold Back!",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"All allies",
				"effect":"-",
				"description":"Raises the Sp. Def of all allied sync pairs by 2 stat ranks. Raises the critical-hit rate of all allied sync pairs by 1 stat rank."
			}
		],
		"syncMove":[
			{
				"user":"Pokemon",
				"name":"Chilling Invitation Frost Beam",
				"type":"Ice",
				"gauge":"-",
				"uses":"-",
				"category":"Special",
				"power":"250-300",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"No additional effect."
			}
		],
		"moves2":[
			
		],
		"syncMove2":[
			
		],
		"movesMAX":[
			{
				"user":"Pokemon",
				"name":"G-Max Resonance",
				"type":"Ice",
				"gauge":"-",
				"uses":"-",
				"category":"Special",
				"power":"400-480",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"Applies the Physical Damage Reduction effect to the allied field of play. Applies the Special Damage Reduction effect to the allied field of play."
			},
			{
				"user":"Pokemon",
				"name":"Max Guard",
				"type":"Normal",
				"gauge":"-",
				"uses":"-",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"An ally",
				"effect":"-",
				"description":"Applies the Damage Guard Next effect to an ally."
			},
			{
				"user":"Pokemon",
				"name":"Max Guard",
				"type":"Normal",
				"gauge":"-",
				"uses":"-",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"An ally",
				"effect":"-",
				"description":"Applies the Damage Guard Next effect to an ally."
			},
			{
				"user":"",
				"name":"",
				"type":"",
				"gauge":"-",
				"uses":"-",
				"category":"",
				"power":"-",
				"accuracy":"-",
				"target":"",
				"effect":"-",
				"description":""
			}
		]
	}
}

export const VICTOR_RILLABOOM = {
	"Informations from":"Absol-utely",
	"-----------------":"-------",
	"bg":"./v/v2.25.0/victorBG.png",
	"trainer":{
		"name":"Victor",
		"images":{
			"base":"./v/v2.25.0/victor.png",
			"ex":"./v/v2.25.0/victorEX.png"
		}
	},
	"rarity":6,
	"role":"Physical Strike",
	"pokemonType":"Grass",
	"pokemonWeakness":"Fire",
	"pokemonGender":"Male",
	"pokemon":[
		{
			"name":"Rillaboom",
			"formName":"",
			"stats":{
				"hp":"648",
				"atk":"380",
				"def":"160",
				"spa":"224",
				"spd":"134",
				"spe":"268"
			},
			"statsLVL150":{
				"hp":"678",
				"atk":"400",
				"def":"168",
				"spa":"236",
				"spd":"140",
				"spe":"282"
			},
			"image":"./v/v2.25.0/812.png"
		}
	],
	"skills":{
		"passives":[
			{
				"name":"Piercing Blows",
				"description":"Grants all of the following effects when the user is attacking: Ignores the target’s passive skills that would reduce the damage of attacks. Ignores the target’s passive skills that would protect the target against a critical hit. Ignores the target’s Enduring effect."
			},
			{
				"name":"Chase Down 3",
				"description":"Powers up the user’s moves when the target’s Speed is lowered."
			},
			{
				"name":"Targets Maxed",
				"description":"When the user’s max move attacks an opponent, the target becomes all opposing sync pairs. The power of max moves affected by this passive skill is not lowered even if there are multiple targets."
			}
		],
		"passives2":[
			
		],
		"passivesMaster":[
			
		],
		"themes":[
			{
				"name":"Grass",
				"description":""
			},
			{
				"name":"Galar",
				"description":""
			},
			{
				"name":"Main Character",
				"description":""
			},
			{
				"name":"Galar Adventurer",
				"description":""
			}
		],
		"lucky":[
			
		]
	},
	"actions":{
		"moves":[
			{
				"user":"Pokemon",
				"name":"Drum Beating",
				"type":"Grass",
				"gauge":"4",
				"uses":"-",
				"category":"Physical",
				"power":"160-192",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"Lowers the target’s Speed by 1 stat rank."
			},
			{
				"user":"Trainer",
				"name":"Dire Hit +",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Self",
				"effect":"-",
				"description":"Raises the user’s critical-hit rate by 2 stat ranks."
			},
			{
				"user":"Pokemon",
				"name":"High Horsepower",
				"type":"Ground",
				"gauge":"3",
				"uses":"-",
				"category":"Physical",
				"power":"106-127",
				"accuracy":"95",
				"target":"An opponent",
				"effect":"-",
				"description":"No additional effect."
			},
			{
				"user":"Trainer",
				"name":"Attack Rhythm!",
				"type":"Trainer",
				"gauge":"-",
				"uses":"1",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Self",
				"effect":"-",
				"description":"Raises the user’s Attack by 6 stat ranks. Applies the Free Move Next effect to the user. Increases the user’s Physical Moves ↑ Next effect by 1 rank."
			}
		],
		"syncMove":[
			{
				"user":"Pokemon",
				"name":"Strategically Sound Grass Impact",
				"type":"Grass",
				"gauge":"-",
				"uses":"-",
				"category":"Physical",
				"power":"250-300",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"No additional effect."
			}
		],
		"moves2":[
			
		],
		"syncMove2":[
			
		],
		"movesMAX":[
			{
				"user":"Pokemon",
				"name":"G-Max Drum Solo",
				"type":"Grass",
				"gauge":"-",
				"uses":"-",
				"category":"Physical",
				"power":"450-540",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit."
			},
			{
				"user":"",
				"name":"",
				"type":"",
				"gauge":"-",
				"uses":"-",
				"category":"",
				"power":"-",
				"accuracy":"-",
				"target":"",
				"effect":"-",
				"description":""
			},
			{
				"user":"Pokemon",
				"name":"Max Quake",
				"type":"Ground",
				"gauge":"-",
				"uses":"-",
				"category":"Physical",
				"power":"400-480",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"Raises the Sp. Def of all allied sync pairs by 2 stat ranks."
			},
			{
				"user":"",
				"name":"",
				"type":"",
				"gauge":"-",
				"uses":"-",
				"category":"",
				"power":"-",
				"accuracy":"-",
				"target":"",
				"effect":"-",
				"description":""
			}
		]
	}
}

export const HELENA_HAUNTER = {
	"Informations from":"Absol-utely",
	"-----------------":"-------",
	"bg":"./v/v2.25.0/helenaBG.png",
	"trainer":{
		"name":"Helena (Hex Maniac)",
		"images":{
			"base":"./v/v2.25.0/helena.png",
			"ex":"./v/v2.25.0/helena.png"
		}
	},
	"rarity":3,
	"role":"Tech",
	"pokemonType":"Ghost",
	"pokemonWeakness":"Dark",
	"pokemonGender":"Female",
	"pokemon":[
		{
			"name":"Haunter",
			"formName":"",
			"stats":{
				"hp":"460",
				"atk":"166",
				"def":"119",
				"spa":"332",
				"spd":"132",
				"spe":"322"
			},
			"statsLVL150":{
				"hp":"478",
				"atk":"174",
				"def":"125",
				"spa":"348",
				"spd":"138",
				"spe":"336"
			},
			"image":"./v/v2.25.0/093.png"
		}
	],
	"skills":{
		"passives":[
			{
				"name":"Hostile Environment 1",
				"description":"Raises the chance of inflicting status conditions with the additional effects of moves."
			},
			{
				"name":"Paralysis Synergy 3",
				"description":"Powers up the user’s moves when the target is paralyzed."
			},
			{
				"name":"Antitoxin",
				"description":"Prevents the user from getting poisoned or badly poisoned."
			}
		],
		"passives2":[
			
		],
		"passivesMaster":[
			
		],
		"themes":[
			{
				"name":"Ghost",
				"description":""
			},
			{
				"name":"Kalos",
				"description":""
			},
			{
				"name":"Supernatural",
				"description":""
			}
		],
		"lucky":[
			
		]
	},
	"actions":{
		"moves":[
			{
				"user":"Pokemon",
				"name":"Shadow Ball",
				"type":"Ghost",
				"gauge":"3",
				"uses":"-",
				"category":"Special",
				"power":"99-118",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"Has a chance (20%) of lowering the target’s Sp. Def by 1 stat rank."
			},
			{
				"user":"Trainer",
				"name":"X Sp. Atk",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Self",
				"effect":"-",
				"description":"Raises the user’s Sp. Atk by 2 stat ranks."
			},
			{
				"user":"Pokemon",
				"name":"Lick",
				"type":"Ghost",
				"gauge":"1",
				"uses":"-",
				"category":"Physical",
				"power":"12-14",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"Has a chance (30%) of leaving the target paralyzed."
			},
			{
				"user":"Trainer",
				"name":"How Bizarre...",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Self",
				"effect":"-",
				"description":"Raises the user’s evasiveness by 2 stat ranks. Raises the user’s critical-hit rate by 1 stat rank."
			}
		],
		"syncMove":[
			{
				"user":"Pokemon",
				"name":"Scary-but-True Ghost Beam",
				"type":"Ghost",
				"gauge":"-",
				"uses":"-",
				"category":"Special",
				"power":"200-240",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"This attack’s power increases when the target is paralyzed."
			}
		],
		"moves2":[
			
		],
		"syncMove2":[
			
		],
		"movesMAX":[
			
		]
	}
}

export const IRIS_NAGANADEL = {
	"Informations from":"Absol-utely",
	"-----------------":"-------",
	"bg":"./v/v2.25.0/irisBG.png",
	"trainer":{
		"name":"Iris (Fall 2022)",
		"images":{
			"base":"./v/v2.25.0/iris.png",
			"ex":"./v/v2.25.0/irisEX.png"
		}
	},
	"rarity":6,
	"role":"Tech",
	"pokemonType":"Poison",
	"pokemonWeakness":"Psychic",
	"pokemonGender":"",
	"pokemon":[
		{
			"name":"Naganadel",
			"formName":"",
			"stats":{
				"hp":"626",
				"atk":"202",
				"def":"202",
				"spa":"273",
				"spd":"202",
				"spe":"416"
			},
			"statsLVL150":{
				"hp":"656",
				"atk":"212",
				"def":"212",
				"spa":"287",
				"spd":"212",
				"spe":"438"
			},
			"image":"./v/v2.25.0/804.png"
		}
	],
	"skills":{
		"passives":[
			{
				"name":"Poison Shift",
				"description":"Normal-type moves become Poison-type moves."
			},
			{
				"name":"Virulent Toxin 3",
				"description":"Powers up the user’s sync move when the target is poisoned or badly poisoned."
			},
			{
				"name":"Toxic Chance 2",
				"description":"Has a chance (30%) of leaving the target poisoned when a move targeting that opponent is successful."
			}
		],
		"passives2":[
			
		],
		"passivesMaster":[
			
		],
		"themes":[
			{
				"name":"Poison",
				"description":""
			},
			{
				"name":"Unova",
				"description":""
			},
			{
				"name":"Seasonal Outfit",
				"description":""
			},
			{
				"name":"Pigtails",
				"description":""
			},
			{
				"name":"Undella Town",
				"description":""
			}
		],
		"lucky":[
			
		]
	},
	"actions":{
		"moves":[
			{
				"user":"Pokemon",
				"name":"Acid",
				"type":"Poison",
				"gauge":"1",
				"uses":"-",
				"category":"Special",
				"power":"19-22",
				"accuracy":"100",
				"target":"All opponents",
				"effect":"-",
				"description":"Has a chance (10%) of lowering the target’s Sp. Def by 1 stat rank."
			},
			{
				"user":"Trainer",
				"name":"Poison Wish",
				"type":"Trainer",
				"gauge":"2",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Entire field",
				"effect":"-",
				"description":"Turns the field of play’s zone into a Poison Zone. (A Poison Zone powers up Poison-type attacks.)"
			},
			{
				"user":"Pokemon",
				"name":"Hyper Beam",
				"type":"Poison",
				"gauge":"4",
				"uses":"-",
				"category":"Special",
				"power":"223-267",
				"accuracy":"90",
				"target":"An opponent",
				"effect":"-",
				"description":"No additional effect."
			},
			{
				"user":"Trainer",
				"name":"Gonna Eat You Up!",
				"type":"Trainer",
				"gauge":"-",
				"uses":"1",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"Self",
				"effect":"-",
				"description":"Raises the user’s Sp. Atk by 4 stat ranks. Raises the user’s accuracy by 1 stat rank. Raises the user’s critical-hit rate by 2 stat ranks."
			}
		],
		"syncMove":[
			{
				"user":"Pokemon",
				"name":"With Every Fiber Poison Beam",
				"type":"Poison",
				"gauge":"-",
				"uses":"-",
				"category":"Special",
				"power":"200-240",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"This attack’s power increases when the zone is a Poison Zone."
			}
		],
		"moves2":[
			
		],
		"syncMove2":[
			
		],
		"movesMAX":[
			
		]
	}
}

export const ALLISTER_GOURGEIST = {
	"Informations from":"Absol-utely",
	"-----------------":"-------",
	"bg":"./v/v2.25.0/allisterBG.png",
	"trainer":{
		"name":"Allister (Fall 2022)",
		"images":{
			"base":"./v/v2.25.0/allister.png",
			"ex":"./v/v2.25.0/allisterEX.png"
		}
	},
	"rarity":6,
	"role":"Support",
	"pokemonType":"Ghost",
	"pokemonWeakness":"Fire",
	"pokemonGender":"Male",
	"pokemon":[
		{
			"name":"Gourgeist",
			"formName":"Super Size",
			"stats":{
				"hp":"717",
				"atk":"195",
				"def":"312",
				"spa":"195",
				"spd":"268",
				"spe":"225"
			},
			"statsLVL150":{
				"hp":"751",
				"atk":"205",
				"def":"328",
				"spa":"205",
				"spd":"282",
				"spe":"237"
			},
			"image":"./v/v2.25.0/711.png"
		}
	],
	"skills":{
		"passives":[
			{
				"name":"Revenge Boost 9",
				"description":"Charges the user’s move gauge by one when it is hit by an attack move."
			},
			{
				"name":"Natural Remedy",
				"description":"Removes all status conditions from the user the first time it is inflicted by any status condition each battle."
			},
			{
				"name":"First Aid 4",
				"description":"Restores the user’s HP by approximately 40% of its maximum HP the first time it is in a pinch each battle."
			}
		],
		"passives2":[
			
		],
		"passivesMaster":[
			
		],
		"themes":[
			{
				"name":"Ghost",
				"description":""
			},
			{
				"name":"Galar",
				"description":""
			},
			{
				"name":"Seasonal Outfit",
				"description":""
			},
			{
				"name":"Masked",
				"description":""
			},
			{
				"name":"Cape",
				"description":""
			}
		],
		"lucky":[
			
		]
	},
	"actions":{
		"moves":[
			{
				"user":"Pokemon",
				"name":"Hex",
				"type":"Ghost",
				"gauge":"2",
				"uses":"-",
				"category":"Special",
				"power":"38-45",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"This attack’s power is doubled when the target is affected by a status condition."
			},
			{
				"user":"Trainer",
				"name":"X Defense All",
				"type":"Trainer",
				"gauge":"-",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"All allies",
				"effect":"-",
				"description":"Raises the Defense of all allied sync pairs by 2 stat ranks."
			},
			{
				"user":"Pokemon",
				"name":"Trick-or-Treat",
				"type":"Ghost",
				"gauge":"2",
				"uses":"2",
				"category":"Status",
				"power":"-",
				"accuracy":"100",
				"target":"An opponent",
				"effect":"-",
				"description":"Lowers the target’s Ghost Type Rebuff by 1 rank."
			},
			{
				"user":"Trainer",
				"name":"Wait for It...",
				"type":"Trainer",
				"gauge":"-",
				"uses":"1",
				"category":"Status",
				"power":"-",
				"accuracy":"-",
				"target":"All allies",
				"effect":"-",
				"description":"Activates zero to five effects from several additional effects at random. Raises the critical-hit rate of all allied sync pairs by 3 stat ranks."
			}
		],
		"syncMove":[
			{
				"user":"Pokemon",
				"name":"Matching Masks Ghost Beam",
				"type":"Ghost",
				"gauge":"-",
				"uses":"-",
				"category":"Special",
				"power":"250-300",
				"accuracy":"-",
				"target":"An opponent",
				"effect":"-",
				"description":"No additional effect."
			}
		],
		"moves2":[
			
		],
		"syncMove2":[
			
		],
		"movesMAX":[
			
		]
	}
}