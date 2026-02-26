export const RED1996_PIKACHU = {
	"bg": "./v/v2.66.0/Tx_ch0365_00_red2_mindscape00.png",
	"trainer": {
		"name": "Red (1996)",
		"images": {
			"base": "./v/v2.66.0/ch0365_00_red2_1024.png",
			"ex": "./v/v2.66.0/ch0365_00_red2_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Tech",
	"exRole": "Support",
	"pokemonType": "Electric",
	"pokemonWeakness": "Ground",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Pikachu",
			"formName": "Before “The Original Thunder”",
			"stats": {
				"hp": "671",
				"atk": "312",
				"def": "146",
				"spa": "336",
				"spd": "147",
				"spe": "335"
			},
			"statsLVL150": {
				"hp": "703",
				"atk": "328",
				"def": "154",
				"spa": "354",
				"spd": "155",
				"spe": "353"
			},
			"statsLVL200": {
				"hp": "863",
				"atk": "408",
				"def": "194",
				"spa": "444",
				"spd": "195",
				"spe": "443"
			},
			"image": "./v/v2.66.0/pm0025_03_pikachu_256.png"
		},
		{
			"name": "Pikachu",
			"formName": "After “The Original Thunder”",
			"stats": {
				"hp": "671",
				"atk": "312",
				"def": "146",
				"spa": "336",
				"spd": "147",
				"spe": "335"
			},
			"statsLVL150": {
				"hp": "703",
				"atk": "328",
				"def": "154",
				"spa": "354",
				"spd": "155",
				"spe": "353"
			},
			"statsLVL200": {
				"hp": "863",
				"atk": "408",
				"def": "194",
				"spa": "444",
				"spd": "195",
				"spe": "443"
			},
			"image": "./v/v2.66.0/pm0025_03_pikachu_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Cheeky Spark",
				"description": "The more the user’s Sp. Atk is raised, the more it powers up its sync move. When a move used by the user’s Pokémon that targets itself or an ally is successful, the target becomes all allied sync pairs. When a move used by the user’s Pokémon that targets an opponent is successful, the target becomes all opposing sync pairs. When the user’s sync move attacks an opponent, the target becomes all opposing sync pairs. The power and chance of applying additional effects of moves and sync moves affected by this passive skill are not lowered even if there are multiple targets. Grants all of the following effects the first time the user’s sync move is used each battle: Reduces the user’s sync move countdown by three. Turns the field of play’s terrain into Electric Terrain. Raises the sync buff of the user’s team by one rank."
			},
			{
				"name": "Boy from Pallet Town",
				"description": "Raises the user’s Sp. Atk by six stat ranks the first time it enters a battle each battle. Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			},
			{
				"name": "The Silent Trainer",
				"description": "Protects the user against critical hits. The user’s stats cannot be lowered."
			}
		],
		"passives2": [],
		"passivesMaster": [
			{
				"name": "(ex) Another Kanto Origin",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Kanto theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Increases the user’s Special Moves ↑ Next effect by two ranks after using its sync move."
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
				"name": "(b move) Everlasting Thunderbolt",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Speed by two stat ranks. Has a chance (30%) of making the target flinch. Leaves the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "... ... ...!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Fully restores the user’s HP. Removes all status conditions and the flinching, confused, and trapped conditions from the user."
			},
			{
				"user": "Pokemon",
				"name": "(b move) The Original Thunder",
				"type": "Electric",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "500-600",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Sp.&nbsp;Def by six stat ranks. Leaves the target paralyzed. Turns the field of play’s terrain into Electric Terrain the first time this attack move is successful each battle. Reduces the user’s sync move countdown by three the first time this attack move is successful each battle. Replaces this move with Glorious Thunder."
			},
			{
				"user": "Trainer",
				"name": "I Better Go!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies Kanto Circle (Physical), Kanto Circle (Special), and Kanto Circle (Defensive) to the allied field of play."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Grown Up So Much Thunderbolt",
				"type": "Electric",
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
		"moves2": [
			{
				"user": "Pokemon",
				"name": "(b move) Everlasting Thunderbolt",
				"type": "Electric",
				"gauge": "2",
				"uses": "-",
				"category": "Special",
				"power": "250-300",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Speed by two stat ranks. Has a chance (30%) of making the target flinch. Leaves the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "... ... ...!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Fully restores the user’s HP. Removes all status conditions and the flinching, confused, and trapped conditions from the user."
			},
			{
				"user": "Pokemon",
				"name": "(b move) Glorious Thunder",
				"type": "Electric",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "1000-1200",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user’s Sp.&nbsp;Atk is raised.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Leaves the target paralyzed."
			},
			{
				"user": "Trainer",
				"name": "I Better Go!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Allied side",
				"effect": "-",
				"description": "Applies Kanto Circle (Physical), Kanto Circle (Special), and Kanto Circle (Defensive) to the allied field of play."
			}
		],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const FLORIAN_OGERPON = {
	"bg": "./v/v2.66.0/Tx_ch0286_40_svboy_mindscape00.png",
	"trainer": {
		"name": "Florian (Anniversary 2026)",
		"images": {
			"base": "./v/v2.66.0/ch0286_40_svboy_1024.png",
			"ex": "./v/v2.66.0/ch0286_40_svboy_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Physical Strike",
	"exRole": "Support",
	"pokemonType": "Grass",
	"pokemonWeakness": "Fire",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Ogerpon",
			"formName": "Teal Mask",
			"stats": {
				"hp": "683",
				"atk": "336",
				"def": "139",
				"spa": "283",
				"spd": "161",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "715",
				"atk": "354",
				"def": "145",
				"spa": "297",
				"spd": "169",
				"spe": "328"
			},
			"statsLVL200": {
				"hp": "875",
				"atk": "444",
				"def": "175",
				"spa": "367",
				"spd": "209",
				"spe": "408"
			},
			"image": "./v/v2.66.0/pm1017_11_00_ogerpon_256.png"
		},
		{
			"name": "Ogerpon",
			"formName": "Teal Mask",
			"stats": {
				"hp": "683",
				"atk": "336",
				"def": "139",
				"spa": "283",
				"spd": "161",
				"spe": "312"
			},
			"statsLVL150": {
				"hp": "715",
				"atk": "354",
				"def": "145",
				"spa": "297",
				"spd": "169",
				"spe": "328"
			},
			"statsLVL200": {
				"hp": "875",
				"atk": "444",
				"def": "175",
				"spa": "367",
				"spd": "209",
				"spe": "408"
			},
			"image": "./v/v2.66.0/pm1017_71_05_ogerpon_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "1st S-Move: Grass S-Tera",
				"description": "The user Sync Terastallizes into Grass type the first time its sync move is used each battle."
			},
			{
				"name": "Festival Time!",
				"description": "Restores one MP of the user’s buddy move after your team’s sync pair uses their sync move. Reduces the MP for the user’s Grassy Terrain by one and grants all of the following effects after your team’s sync pair uses their sync move: Reduces the user’s sync move countdown by three. Turns the field of play’s terrain into Grassy Terrain."
			},
			{
				"name": "Ally Hits: User Phys Boost ↑1 & S-Move Boost ↑2",
				"description": "Increases the user’s Physical Moves ↑ Next effect by one rank when an ally’s attack move is successful. Increases the user’s Sync Move ↑ Next effect by two ranks when an ally’s attack move is successful."
			}
		],
		"passives2": [
			{
				"name": "While S-Tera: 5 Stats ↑ 1",
				"description": "The user’s Attack, Defense, Sp. Atk, Sp. Def, and Speed increase 10% while it is Sync Terastallized."
			},
			{
				"name": "Festival Time!",
				"description": "Restores one MP of the user’s buddy move after your team’s sync pair uses their sync move. Reduces the MP for the user’s Grassy Terrain by one and grants all of the following effects after your team’s sync pair uses their sync move: Reduces the user’s sync move countdown by three. Turns the field of play’s terrain into Grassy Terrain."
			},
			{
				"name": "Ally Hits: User Phys Boost ↑1 & S-Move Boost ↑2",
				"description": "Increases the user’s Physical Moves ↑ Next effect by one rank when an ally’s attack move is successful. Increases the user’s Sync Move ↑ Next effect by two ranks when an ally’s attack move is successful."
			}
		],
		"passivesMaster": [
			{
				"name": "(ex) Paldea’s Bold Curiosity",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Paldea theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Except in certain circumstances, successful hits with the user’s following attacks become critical hits: Pokémon’s moves or sync move."
			}
		],
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
				"name": "Seasonal Outfit",
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
				"name": "Ivy Cudgel",
				"type": "Grass",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "128-153",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
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
				"user": "Pokemon",
				"name": "(b move) Lush Ivy Cudgel",
				"type": "Grass",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. The power of this move is not lowered even if there are multiple targets. The more the user’s Grass Type Rebuff is increased, the greater the power of this attack. Reduces the user’s sync move countdown by three the first time this attack move is successful each battle. Raises the user’s Grass Type Rebuff by one&nbsp;rank."
			},
			{
				"user": "Trainer",
				"name": "Shine, Teal Mask!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Grassy Terrain. Raises the user’s Attack by six stat ranks. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Village Teal Mask Tera Blast",
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
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "(tera) Ivy Cudgel",
				"type": "Grass",
				"gauge": "4",
				"uses": "-",
				"category": "Physical",
				"power": "128-153",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Critical hits land more easily."
			},
			{
				"user": "Pokemon2",
				"name": "(tera) Grassy Terrain",
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
				"user": "Pokemon2",
				"name": "(tera)(b move) Lush Ivy Cudgel",
				"type": "Grass",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "100-120",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Except in certain circumstances, successful hits with this attack become critical hits. The power of this move is not lowered even if there are multiple targets. The more the user’s Grass Type Rebuff is increased, the greater the power of this attack. Reduces the user’s sync move countdown by three the first time this attack move is successful each battle. Raises the user’s Grass Type Rebuff by one&nbsp;rank."
			},
			{
				"user": "Trainer",
				"name": "Shine, Teal Mask!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Turns the field of play’s terrain into Grassy Terrain. Raises the user’s Attack by six stat ranks. Increases the user’s Physical Moves&nbsp;↑ Next effect by two&nbsp;ranks."
			}
		],
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Green Jasper Tera Blast",
				"type": "Grass",
				"gauge": "2",
				"uses": "1",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses. Lowers the target’s Defense by six stat ranks. Applies the Physical Move Break effect to the target the first time this attack move is successful each battle. The power of this move is not lowered even if there are multiple targets."
			}
		],
		"syncMove2": [
			{
				"user": "Pokemon2",
				"name": "Village Teal Mask Tera Blast",
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
		"movesMAX": []
	}
}

export const JULIANA_TERAPAGOS = {
	"bg": "./v/v2.66.0/Tx_ch0287_40_svgirl_mindscape00.png",
	"trainer": {
		"name": "Juliana (Anniversary 2026)",
		"images": {
			"base": "./v/v2.66.0/ch0287_40_svgirl_1024.png",
			"ex": "./v/v2.66.0/ch0287_40_svgirl_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Support",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Terapagos",
			"formName": "Normal Form",
			"stats": {
				"hp": "677",
				"atk": "295",
				"def": "149",
				"spa": "502",
				"spd": "149",
				"spe": "308"
			},
			"statsLVL150": {
				"hp": "709",
				"atk": "311",
				"def": "157",
				"spa": "528",
				"spd": "157",
				"spe": "324"
			},
			"statsLVL200": {
				"hp": "869",
				"atk": "391",
				"def": "197",
				"spa": "658",
				"spd": "197",
				"spe": "404"
			},
			"image": "./v/v2.66.0/pm1024_11_00_terapagos_256.png"
		},
		{
			"name": "Terapagos",
			"formName": "Terastal Form",
			"stats": {
				"hp": "677",
				"atk": "295",
				"def": "149",
				"spa": "502",
				"spd": "149",
				"spe": "308"
			},
			"statsLVL150": {
				"hp": "709",
				"atk": "311",
				"def": "157",
				"spa": "528",
				"spd": "157",
				"spe": "324"
			},
			"statsLVL200": {
				"hp": "869",
				"atk": "391",
				"def": "197",
				"spa": "658",
				"spd": "197",
				"spe": "404"
			},
			"image": "./v/v2.66.0/pm1024_12_00_terapagos_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Prepare for Battle",
				"description": "The user changes to Terastal Form the first time it enters a battle each battle."
			},
			{
				"name": "Debut: Sync CD ↓ & Sp. Atk ↑6",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Raises the user’s Sp. Atk by six stat ranks the first time it enters a battle each battle."
			},
			{
				"name": "Terastal Shell",
				"description": "Reduces the MP for the user’s Potion by one and grants all of the following effects when its HP drops to half or below: Restores the user’s HP by approximately 60% of its maximum HP. Increases the user’s Special Moves ↑ Next effect by three ranks."
			}
		],
		"passives2": [
			{
				"name": "1st S-Move: Stellar S-Tera",
				"description": "The user Sync Terastallizes into Stellar type the first time its sync move is used each battle."
			},
			{
				"name": "Terastal Energy Amplified",
				"description": "Reduces the user’s sync move countdown by two when the user changes into Terastal Form. Raises the user’s critical-hit rate by three stat ranks when the user changes into Terastal Form."
			},
			{
				"name": "Terastal Shell",
				"description": "Reduces the MP for the user’s Potion by one and grants all of the following effects when its HP drops to half or below: Restores the user’s HP by approximately 60% of its maximum HP. Increases the user’s Special Moves ↑ Next effect by three ranks."
			}
		],
		"passivesMaster": [
			{
				"name": "(ex) Paldea’s Grand Mystery",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Paldea theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Reduces damage when the user is hit by an attack move or sync move when its HP is full."
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
				"name": "Paldea",
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
				"name": "Free Spirit",
				"description": ""
			}
		],
		"lucky": []
	},
	"actions": {
		"moves": [
			{
				"user": "Pokemon2",
				"name": "Tera Starstorm",
				"type": "Normal",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Replaces the effects of the user’s moves with the following when it is in Stellar&nbsp;Form. This move’s type becomes Stellar type. This attack’s power becomes double that of when the user is in Normal&nbsp;Form or Terastal&nbsp;Form. The target becomes all opposing sync pairs."
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
				"name": "(b move) Kaleidoscopic Tera Starstorm",
				"type": "Normal",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Normal Type Rebuff by three&nbsp;ranks. Reduces the user’s sync move countdown by three. Replaces the effects of the user’s moves with the following when it is in Stellar&nbsp;Form. This move’s type becomes Stellar type. This attack’s power becomes double that of when the user is in Normal&nbsp;Form or Terastal&nbsp;Form. The target becomes all opposing sync pairs. Never misses. Lowers the target’s Stellar Type Rebuff by three&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "Stellar Shine!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Increases the user’s Special Moves&nbsp;↑ Next effect by three&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks. Applies the Enduring effect to the user. If the user is in Stellar&nbsp;Form, also grants all of the following effects: Increases the user’s Special Moves&nbsp;↑ Next effect by two&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Ancient Indigo Disk Tera Blast",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
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

export const JULIANA_TERAPAGOS2 = {
	"bg": "./v/v2.66.0/Tx_ch0287_40_svgirl_mindscape00.png",
	"trainer": {
		"name": "Juliana (Anniversary 2026)",
		"images": {
			"base": "./v/v2.66.0/ch0287_40_svgirl_1024.png",
			"ex": "./v/v2.66.0/ch0287_40_svgirl_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Special Strike",
	"exRole": "Support",
	"pokemonType": "Normal",
	"pokemonWeakness": "Fighting",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Terapagos",
			"formName": "Terastal Form",
			"stats": {
				"hp": "677",
				"atk": "295",
				"def": "149",
				"spa": "502",
				"spd": "149",
				"spe": "308"
			},
			"statsLVL150": {
				"hp": "709",
				"atk": "311",
				"def": "157",
				"spa": "528",
				"spd": "157",
				"spe": "324"
			},
			"statsLVL200": {
				"hp": "869",
				"atk": "391",
				"def": "197",
				"spa": "658",
				"spd": "197",
				"spe": "404"
			},
			"image": "./v/v2.66.0/pm1024_12_00_terapagos_256.png"
		},
		{
			"name": "Terapagos",
			"formName": "Stellar Form",
			"stats": {
				"hp": "677",
				"atk": "295",
				"def": "149",
				"spa": "502",
				"spd": "149",
				"spe": "308"
			},
			"statsLVL150": {
				"hp": "709",
				"atk": "311",
				"def": "157",
				"spa": "528",
				"spd": "157",
				"spe": "324"
			},
			"statsLVL200": {
				"hp": "869",
				"atk": "391",
				"def": "197",
				"spa": "658",
				"spd": "197",
				"spe": "404"
			},
			"image": "./v/v2.66.0/pm1024_13_00_terapagos_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "1st S-Move: Stellar S-Tera",
				"description": "The user Sync Terastallizes into Stellar type the first time its sync move is used each battle."
			},
			{
				"name": "Debut: Sync CD ↓ & Sp. Atk ↑6",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. Raises the user’s Sp. Atk by six stat ranks the first time it enters a battle each battle."
			},
			{
				"name": "Terastal Shell",
				"description": "Reduces the MP for the user’s Potion by one and grants all of the following effects when its HP drops to half or below: Restores the user’s HP by approximately 60% of its maximum HP. Increases the user’s Special Moves ↑ Next effect by three ranks."
			}
		],
		"passives2": [
			{
				"name": "Shine Back to Zero",
				"description": "Removes all weather conditions and terrains the first time the user enters a battle each battle."
			},
			{
				"name": "Debut: Sync CD ↓3 & Normal Zone",
				"description": "Reduces the user’s sync move countdown by three the first time it enters a battle each battle. Turns the field of play’s zone into a Normal Zone the first time the user enters a battle each battle. (A Normal Zone powers up Normal-type attacks.)"
			},
			{
				"name": "Terastal Shell",
				"description": "Reduces the MP for the user’s Potion by one and grants all of the following effects when its HP drops to half or below: Restores the user’s HP by approximately 60% of its maximum HP. Increases the user’s Special Moves ↑ Next effect by three ranks."
			}
		],
		"passivesMaster": [
			{
				"name": "(ex) Paldea’s Grand Mystery",
				"description": "Powers up the moves and sync moves of all allied sync pairs by 20%. Reduces attack move and sync move damage taken by all allied sync pairs by 25%. The more allied sync pairs with the Paldea theme you have on your team, the higher these percentages are. (Each additional sync pair powers up moves and sync moves by 15% and reduces damage by 3%. The maximum power-up is 50%, and the maximum damage reduction is 31%.) Reduces damage when the user is hit by an attack move or sync move when its HP is full."
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
				"name": "Paldea",
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
				"name": "Tera Starstorm",
				"type": "Normal",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Replaces the effects of the user’s moves with the following when it is in Stellar&nbsp;Form. This move’s type becomes Stellar type. This attack’s power becomes double that of when the user is in Normal&nbsp;Form or Terastal&nbsp;Form. The target becomes all opposing sync pairs."
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
				"name": "(b move) Kaleidoscopic Tera Starstorm",
				"type": "Normal",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Normal Type Rebuff by three&nbsp;ranks. Reduces the user’s sync move countdown by three. Replaces the effects of the user’s moves with the following when it is in Stellar&nbsp;Form. This move’s type becomes Stellar type. This attack’s power becomes double that of when the user is in Normal&nbsp;Form or Terastal&nbsp;Form. The target becomes all opposing sync pairs. Never misses. Lowers the target’s Stellar Type Rebuff by three&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "Stellar Shine!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Increases the user’s Special Moves&nbsp;↑ Next effect by three&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks. Applies the Enduring effect to the user. If the user is in Stellar&nbsp;Form, also grants all of the following effects: Increases the user’s Special Moves&nbsp;↑ Next effect by two&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon2",
				"name": "Ancient Indigo Disk Tera Blast",
				"type": "Normal",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			}
		],
		"moves2": [
			{
				"user": "Pokemon2",
				"name": "(tera) Tera Starstorm",
				"type": "Stellar",
				"gauge": "4",
				"uses": "-",
				"category": "Special",
				"power": "150-180",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Replaces the effects of the user’s moves with the following when it is in Stellar&nbsp;Form. This move’s type becomes Stellar type. This attack’s power becomes double that of when the user is in Normal&nbsp;Form or Terastal&nbsp;Form. The target becomes all opposing sync pairs."
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
				"name": "(tera)(b move) Kaleidoscopic Tera Starstorm",
				"type": "Stellar",
				"gauge": "2",
				"uses": "2",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Normal Type Rebuff by three&nbsp;ranks. Reduces the user’s sync move countdown by three. Replaces the effects of the user’s moves with the following when it is in Stellar&nbsp;Form. This move’s type becomes Stellar type. This attack’s power becomes double that of when the user is in Normal&nbsp;Form or Terastal&nbsp;Form. The target becomes all opposing sync pairs. Never misses. Lowers the target’s Stellar Type Rebuff by three&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "Stellar Shine!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Increases the user’s Special Moves&nbsp;↑ Next effect by three&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks. Applies the Enduring effect to the user. If the user is in Stellar&nbsp;Form, also grants all of the following effects: Increases the user’s Special Moves&nbsp;↑ Next effect by two&nbsp;ranks. Increases the user’s Sync Move&nbsp;↑ Next effect by five&nbsp;ranks."
			}
		],
		"moveTera": [
			{
				"user": "Pokemon2",
				"name": "(tera) Rainbow Jewel Tera Blast",
				"type": "Stellar",
				"gauge": "2",
				"uses": "1",
				"category": "Special",
				"power": "300-360",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Never misses. Makes the target flinch. Applies the Special Move Break effect to the target the first time this attack move is successful each battle. The power of this move is not lowered even if there are multiple targets. Reduces the user’s sync move countdown by three."
			}
		],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MISTY_GOLDUCK = {
	"bg": "./images/bg/silver.png",
	"trainer": {
		"name": "Misty",
		"images": {
			"base": "./v/v2.66.0/ch0110_01_kasumi_1024.png",
			"ex": "./v/v2.66.0/ch0110_01_kasumi_1024.png"
		}
	},
	"rarity": "4+ex",
	"role": "Tech",
	"exRole": "",
	"pokemonType": "Water",
	"pokemonWeakness": "Electric",
	"pokemonGender": "Female",
	"pokemon": [
		{
			"name": "Golduck",
			"formName": "",
			"stats": {
				"hp": "603",
				"atk": "268",
				"def": "135",
				"spa": "356",
				"spd": "145",
				"spe": "284"
			},
			"statsLVL150": {
				"hp": "631",
				"atk": "282",
				"def": "141",
				"spa": "374",
				"spd": "153",
				"spe": "298"
			},
			"statsLVL200": {
				"hp": "771",
				"atk": "352",
				"def": "171",
				"spa": "464",
				"spd": "193",
				"spe": "368"
			},
			"image": "./v/v2.66.0/pm0055_00_golduck_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Pinpoint Entry 2",
				"description": "Raises the user’s accuracy by two stat ranks when it enters a battle."
			},
			{
				"name": "On a Roll 1",
				"description": "Raises the chance of lowering stat values with the additional effects of the user’s moves."
			},
			{
				"name": "Hem In 9",
				"description": "Lowers the target’s evasiveness by one stat rank when the user’s attack move against it is successful."
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
				"name": "Kanto",
				"description": ""
			},
			{
				"name": "Gym Leader",
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
				"name": "Water Gun",
				"type": "Water",
				"gauge": "1",
				"uses": "-",
				"category": "Special",
				"power": "20-24",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "No additional effect."
			},
			{
				"user": "Pokemon",
				"name": "Hypnosis",
				"type": "Psychic",
				"gauge": "2",
				"uses": "-",
				"category": "Status",
				"power": "-",
				"accuracy": "75",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
			},
			{
				"user": "Pokemon",
				"name": "Muddy Water",
				"type": "Water",
				"gauge": "3",
				"uses": "-",
				"category": "Special",
				"power": "116-139",
				"accuracy": "85",
				"target": "All opponents",
				"effect": "-",
				"description": "Has a chance (30%) of lowering the target’s accuracy by one stat rank."
			},
			{
				"user": "Trainer",
				"name": "All-Out Offensive!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Self",
				"effect": "-",
				"description": "Raises the user’s Sp.&nbsp;Atk by four stat ranks. Raises the user’s critical-hit rate by three stat ranks."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Open Ocean Dive Water Beam",
				"type": "Water",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "200-240",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "The more the target’s accuracy is lowered, the greater the power of this attack."
			}
		],
		"moves2": [],
		"moveTera": [],
		"syncMove2": [],
		"movesMAX": []
	}
}

export const MARNIE_GRIMMSNARL = {
	"bg": "./v/v2.66.0/Tx_ch0245_80_mary_mindscape00.png",
	"trainer": {
		"name": "Marnie (Alt.)",
		"images": {
			"base": "./v/v2.66.0/ch0245_80_mary_1024.png",
			"ex": "./v/v2.66.0/ch0245_80_mary_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Field",
	"exRole": "Support",
	"pokemonType": "Dark",
	"pokemonWeakness": "Fairy",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Grimmsnarl",
			"formName": "",
			"stats": {
				"hp": "652",
				"atk": "424",
				"def": "175",
				"spa": "298",
				"spd": "185",
				"spe": "286"
			},
			"statsLVL150": {
				"hp": "682",
				"atk": "446",
				"def": "183",
				"spa": "314",
				"spd": "195",
				"spe": "300"
			},
			"statsLVL200": {
				"hp": "832",
				"atk": "556",
				"def": "223",
				"spa": "394",
				"spd": "245",
				"spe": "370"
			},
			"image": "./v/v2.66.0/pm0861_00_00_ohlonge_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Galar Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Galar theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "Hometown Cheers",
				"description": "Raises the user’s Attack by four stat ranks the first time it turns the field of play’s zone into an EX Dark Zone each battle. Raises the user’s critical-hit rate by three stat ranks the first time it turns the field of play’s zone into an EX Dark Zone each battle."
			},
			{
				"name": "Returning Cheers with a Smile",
				"description": "Grants all of the following effects after the user uses its max move: Reduces the user’s sync move countdown by one. Turns the field of play’s zone into a Dark Zone. (A Dark Zone powers up Dark-type attacks.) Restores one MP of the user’s SuperEffective ↑."
			},
			{
				"name": "Targets Maxed",
				"description": "When the user’s max move attacks an opponent, the target becomes all opposing sync pairs. The power of max moves affected by this passive skill is not lowered even if there are multiple targets."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "Reviving Old Passion",
				"description": "Reduces the sync move countdown by one the first time the user’s sync move is used each battle. Reduces the user’s sync move countdown by two after using its max move. Increases the Physical Moves ↑ Next effect and Special Moves ↑ Next effect of all allied sync pairs by one rank after your team’s sync pair uses their sync move."
			}
		],
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
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Pigtails",
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
				"name": "Bite",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "42-50",
				"accuracy": "100",
				"target": "An opponent",
				"effect": "-",
				"description": "Has a chance (30%) of making the target flinch."
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
				"name": "(b move) Impish False Surrender",
				"type": "Dark",
				"gauge": "2",
				"uses": "-",
				"category": "Physical",
				"power": "200-240",
				"accuracy": "-",
				"target": "All opponents",
				"effect": "-",
				"description": "Activation Condition: When the user uses any move once.(lb)Deactivation Condition: Cannot be deactivated.(lb)(lb)Never misses. Lowers the target’s Defense and Sp.&nbsp;Def by two stat ranks. If the remaining MP for the user’s Super(lb)Effective ↑ is one or more when attacking with this move, reduces those MP by one and grants all of the following effects: Applies the Supereffective&nbsp;↑ Next effect to all allied sync pairs. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by two&nbsp;ranks."
			},
			{
				"user": "Trainer",
				"name": "Ain’t Goin’ Down Easy!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "An ally",
				"effect": "-",
				"description": "Turns the field of play’s zone into an EX Dark Zone. (An EX Dark Zone powers up Dark-type attacks.) Applies the Supereffective&nbsp;↑ Next effect to an ally. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of an ally by one rank."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Winning with Everyone’s Cheers Dark Impact",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "G-Max Snooze",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
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
				"name": "G-Max Snooze",
				"type": "Dark",
				"gauge": "-",
				"uses": "-",
				"category": "Physical",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Puts the target to sleep."
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

export const BEDE_RAPIDASH = {
	"bg": "./v/v2.66.0/Tx_ch0246_80_beet_mindscape00.png",
	"trainer": {
		"name": "Bede (Alt.)",
		"images": {
			"base": "./v/v2.66.0/ch0246_80_beet_1024.png",
			"ex": "./v/v2.66.0/ch0246_80_beet_01_expose_1024.png"
		}
	},
	"rarity": "5+ex",
	"role": "Support",
	"exRole": "Sprint",
	"pokemonType": "Fairy",
	"pokemonWeakness": "Steel",
	"pokemonGender": "Male",
	"pokemon": [
		{
			"name": "Rapidash",
			"formName": "Galarian Form",
			"stats": {
				"hp": "693",
				"atk": "134",
				"def": "300",
				"spa": "268",
				"spd": "312",
				"spe": "336"
			},
			"statsLVL150": {
				"hp": "725",
				"atk": "140",
				"def": "316",
				"spa": "282",
				"spd": "328",
				"spe": "354"
			},
			"statsLVL200": {
				"hp": "885",
				"atk": "170",
				"def": "396",
				"spa": "352",
				"spd": "408",
				"spe": "444"
			},
			"image": "./v/v2.66.0/pm0078_00_31_dgallop_256.png"
		}
	],
	"skills": {
		"passives": [
			{
				"name": "Galar Rush",
				"description": "Reduces the user’s sync move countdown by one the first time it enters a battle each battle. When used in a co-op battle, reduces the user’s sync move countdown by one the first time your team enters a battle each battle instead. The more allied sync pairs with the Galar theme you have on your team, the greater the reduction is. (Each additional sync pair increases the reduction by one, and the maximum reduction is three.) The effects do not stack if you have more than one sync pair on your team with passive skills of the same name."
			},
			{
				"name": "I’ll Give You Your Flowers",
				"description": "Reduces the MP for the user’s Mini Potion All by one and restores the HP of all allied sync pairs by approximately 40% of their maximum HP when an ally is in a pinch. (This effect will only activate once even if the condition is met multiple times simultaneously.)"
			},
			{
				"name": "Fairy Zone: Team Condition Nullification",
				"description": "Prevents all allied sync pairs from being inflicted with status conditions, flinching, becoming confused, or becoming trapped when the zone is a Fairy Zone."
			},
			{
				"name": "Hit: Attack ↓ & Sp. Atk ↓ 9",
				"description": "Lowers the target’s Attack and Sp. Atk by one stat rank when the user’s attack move is successful."
			}
		],
		"passives2": [],
		"passivesMaster": [],
		"passivesArcSuit": [],
		"passivesSuperawakening": [
			{
				"name": "So Sincere, Yet So Twisted",
				"description": "Reduces the user’s sync move countdown by one the first time its Trainer uses a move each battle. Powers up the moves of all allied sync pairs when the zone is a Fairy Zone. Stats cannot be lowered for all allied sync pairs when the zone is a Fairy Zone."
			}
		],
		"themes": [
			{
				"name": "Fairy",
				"description": ""
			},
			{
				"name": "Galar",
				"description": ""
			},
			{
				"name": "Rival",
				"description": ""
			},
			{
				"name": "Galar Adventurer",
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
				"name": "(b move) Idyllic Calm Mind",
				"type": "Psychic",
				"gauge": "-",
				"uses": "3",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "All allies",
				"effect": "-",
				"description": "Activation Condition: When the user is not in a pinch.(lb)Deactivation Condition: When the user is in a pinch.(lb)(lb)Turns the field of play’s zone into a Fairy Zone the first time this move is used each battle. (A Fairy Zone powers up Fairy-type attacks.) Reduces the user’s sync move countdown by one. Raises the Attack, Defense, Sp.&nbsp;Atk, and Sp.&nbsp;Def of all allied sync pairs by two stat ranks. Increases the Physical Moves&nbsp;↑ Next effect and Special Moves&nbsp;↑ Next effect of all allied sync pairs by one rank."
			},
			{
				"user": "Trainer",
				"name": "A Truly Great Pink!",
				"type": "Trainer",
				"gauge": "-",
				"uses": "1",
				"category": "Status",
				"power": "-",
				"accuracy": "-",
				"target": "Entire field",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Fairy Zone. (A Fairy Zone powers up Fairy-type attacks.) Applies the Enduring effect to all allied sync pairs."
			}
		],
		"syncMove": [
			{
				"user": "Pokemon",
				"name": "Pink Legacy Fairy Beam",
				"type": "Fairy",
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
		"movesMAX": [
			{
				"user": "Pokemon",
				"name": "Max Starfall",
				"type": "Fairy",
				"gauge": "-",
				"uses": "-",
				"category": "Special",
				"power": "400-480",
				"accuracy": "-",
				"target": "An opponent",
				"effect": "-",
				"description": "Turns the field of play’s zone into a Fairy Zone. (A Fairy Zone powers up Fairy-type attacks.)"
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