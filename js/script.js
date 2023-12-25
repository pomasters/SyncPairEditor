/*

Check at the end of file for init

*/

import * as DATA from './data.js';
import {CURRENT_SYNCPAIR, SYNCPAIRS} from './syncpairs.js';

import * as GRID from './grid.js';
import {CURRENT_SYNCGRID, SYNCGRIDS, SYNCGRIDS_TEMPLATES} from './syncgrids.js';

const MAX_NUMBER_STARS = 7;
const MAX_NUMBER_PASSIVES = 3;
const MAX_NUMBER_MASTERPASSIVES = 2;
const MAX_NUMBER_LUCKY = 3;
const MAX_NUMBER_THEME = 6;
const MAX_NUMBER_MOVES = 4;
const MAX_NUMBER_SYNCMOVES = 1;
const MAX_MOVE_GAUGE = 6;
const DELAY_UPDATE_DISPLAY = 600;


function g(id) { return document.getElementById(id); }//shortcut



/*-----------------------------------------------------------------------------
	GENERATE ALL RAW HTML ELEMENTS ABOUT THE SYNCPAIR
-----------------------------------------------------------------------------*/

/*
Insert the informations of the syncPair inside their respective html element
*/
function showSyncPair() {
	try {
		resetShowSyncPair();

		g("syncPair_bg").src = SYNCPAIR.bg;
		g("syncPair_bg").onerror = function() { g("syncPair_bg").src = "./images/bg3.png" };

		g("syncPair_trainerImageBase").src = SYNCPAIR.trainer.images.base;

		if(SYNCPAIR.pokemon.length > 0) {
			g("syncPair_pokemonImage").src = SYNCPAIR.pokemon[0].image;
			g("syncPair_pokemonFormName").innerHTML = SYNCPAIR.pokemon[0].formName;
			g("syncPair_pokemonName").innerHTML = SYNCPAIR.pokemon[0].name;
			if(SYNCPAIR.pokemon[0].name.substring(0, 7).toLowerCase() == "(shiny)") {
				g("syncPair_pokemonShiny").classList.remove("hide");
				g("syncPair_pokemon2Shiny").classList.remove("hide");
				g("syncPair_pokemonName").innerHTML = SYNCPAIR.pokemon[0].name.substring(7);
			}
			g("syncPair_pokemonName").innerHTML += gender(SYNCPAIR.pokemonGender);
			g("syncPair_pokemonStats").innerHTML = statsAre(SYNCPAIR.pokemon[0].stats, SYNCPAIR.pokemon[0].stats);

		}

		g("syncPair_trainerName").innerHTML = SYNCPAIR.trainer.name;

		g("syncPair_rarity").innerHTML = rarity(SYNCPAIR.rarity);

		g("syncPair_roleImage").src = roleImage(SYNCPAIR.role);
		g("syncPair_typeImage").src = typeImage(SYNCPAIR.pokemonType);
		g("syncPair_weaknessImage").src = typeImage(SYNCPAIR.pokemonWeakness);

		if("exRole" in SYNCPAIR && SYNCPAIR.exRole != "") {
			g("syncPair_exRole").classList.remove("hide");
			g("css_exRole").disabled = false;
			g("syncPair_exRoleImage").src = roleImage(SYNCPAIR.exRole);
		} else {
			g("syncPair_exRole").classList.add("hide");
			g("css_exRole").disabled = true;
			g("syncPair_exRoleImage").src = "./images/empty.png";
		}

		g("moves").innerHTML = movesAre(SYNCPAIR.actions.moves, "move_classic");
		g("movesSync").innerHTML = movesAre(SYNCPAIR.actions.syncMove, "move_sync");

		g("passives").innerHTML = skillsAre(SYNCPAIR.skills.passives, "skill_passive");
		g("luckySkills").innerHTML = skillsAre(SYNCPAIR.skills.lucky, "skill_lucky");
		g("themeSkills").innerHTML = skillsAre(SYNCPAIR.skills.themes, "skill_theme");

		showSyncPair2();

		checkImagesValidity();
		addFocusEvent();
		noDragImages();
		moveUserImagesAdjustments();
		scout();

	} catch(e) {}
}

/*
All secondary elements : ex, 2nd Pokemon, passives2, passiveMaster, moves2, moveDynamax etc
*/
function showSyncPair2() {
	if(SYNCPAIR.trainer.images.ex != "") {
		g("syncPair_trainerImageEx").src = SYNCPAIR.trainer.images.ex;
	} else {
		g("syncPair_trainerImageEx").src = SYNCPAIR.trainer.images.base;
	}

	if(SYNCPAIR.pokemon.length > 1) {
		g("syncPair_pokemon2Image").src = SYNCPAIR.pokemon[1].image;
		g("syncPair_pokemon2Name").innerHTML = SYNCPAIR.pokemon[1].name;
		g("syncPair_pokemon2Name").innerHTML += gender(SYNCPAIR.pokemonGender);
		g("syncPair_pokemon2FormName").innerHTML = SYNCPAIR.pokemon[1].formName;
		g("syncPair_pokemon2Stats").innerHTML = statsAre(SYNCPAIR.pokemon[1].stats, SYNCPAIR.pokemon[0].stats);
		g("btn_alter").classList.remove("hide");

		if("pokemonType2" in SYNCPAIR && SYNCPAIR.pokemonType2 != "") {
			g("syncPair_type2Image").src = typeImage(SYNCPAIR.pokemonType2);
		}
		if("pokemonWeakness2" in SYNCPAIR && SYNCPAIR.pokemonWeakness2 != "") {
			g("syncPair_weakness2Image").src = typeImage(SYNCPAIR.pokemonWeakness2);
		}

	} else {
		g("syncPair_pokemon2").setAttribute('style', 'display: none !important');
		g("syncPair_pokemon2Stats").setAttribute('style', 'display: none !important');
	}

	if(SYNCPAIR.actions.moves2.length > 0) {
		g("moves2").innerHTML = movesAre(SYNCPAIR.actions.moves2, "move2_classic");
		g("btn_alter").classList.remove("hide");
	}

	if(SYNCPAIR.actions.syncMove2.length > 0) {
		g("moves2Sync").innerHTML = movesAre(SYNCPAIR.actions.syncMove2, "move2_sync");
		g("btn_alter").classList.remove("hide");
	}

	if(SYNCPAIR.actions.movesMAX.length > 0) {
		g("movesMAX").innerHTML = movesAre(SYNCPAIR.actions.movesMAX, "move_dynamax");
		g("btn_dynamax").classList.remove("hideMax");
	}

	if(SYNCPAIR.skills.passivesMaster.length > 0) {
		g("passiveMaster").innerHTML = skillsAre(SYNCPAIR.skills.passivesMaster, "skill_passiveMaster");
		g("passiveMaster").classList.remove("hide");
		g("iconTabPassiveMaster").classList.remove("hide");
	}

	if(SYNCPAIR.skills.passives2.length > 0) {
		g("passives2").innerHTML = skillsAre(SYNCPAIR.skills.passives2, "skill_passive");
		g("btn_alter").classList.remove("hide");
	}
}

/*
Reset all innerHTML, img src, hide certain elements, etc
*/
function resetShowSyncPair() {
	var emptyImg = "./images/empty.png";

	g("syncPair_bg").src = emptyImg;
	g("syncPair_bg_div").classList.add("backgroundSmall");

	g("syncPair_trainerImageBase").src = emptyImg;
	g("syncPair_trainerImageEx").src = emptyImg;

	g("syncPair_pokemonImage").src = emptyImg;
	g("syncPair_pokemonFormName").innerHTML = "";
	g("syncPair_pokemonName").innerHTML = "";

	g("syncPair_pokemon2Image").src = emptyImg;
	g("syncPair_pokemon2FormName").innerHTML = "";
	g("syncPair_pokemon2Name").innerHTML = "";

	g("syncPair_trainerName").innerHTML = "";

	g("syncPair_rarity").innerHTML = "";

	g("syncPair_roleImage").src = emptyImg;
	g("syncPair_exRoleImage").src = emptyImg;
	g("syncPair_typeImage").src = emptyImg;
	g("syncPair_weaknessImage").src = emptyImg;

	g("syncPair_type2Image").src = emptyImg;
	g("syncPair_weakness2Image").src = emptyImg;

	g("syncPair_pokemonStats").innerHTML = "";
	g("syncPair_pokemon2Stats").innerHTML = "";

	g("moves").innerHTML = "";
	g("moves2").innerHTML = "";
	g("movesMAX").innerHTML = "";
	g("movesSync").innerHTML = "";
	g("moves2Sync").innerHTML = "";

	g("passiveMaster").innerHTML = "";
	g("passives").innerHTML = "";
	g("passives2").innerHTML = "";

	g("luckySkills").innerHTML = "";
	g("themeSkills").innerHTML = "";

	g("elementFocus").innerHTML = "";

	g("syncPair_trainerImageBase").classList.remove("hide");
	g("syncPair_trainerImageBase").classList.add("elementF");
	g("syncPair_trainerImageEx").classList.add("hide");
	g("syncPair_trainerImageEx").classList.add("elementF");

	g("syncPair_pokemon").classList.remove("hide");
	g("syncPair_pokemon2").classList.add("hide");

	g("syncPair_pokemonImage").classList.add("elementF");
	g("syncPair_pokemon2Image").classList.add("elementF");

	g("syncPair_pokemonShiny").classList.add("hide");
	g("syncPair_pokemon2Shiny").classList.add("hide");

	g("btn_alter").classList.add("hide");

	g("syncPair_typeImage").classList.remove("hide");
	g("syncPair_weaknessImage").classList.remove("hide");

	g("syncPair_type2Image").classList.add("hide");
	g("syncPair_weakness2Image").classList.add("hide");

	g("syncPair_pokemonStats").classList.remove("hide");
	g("syncPair_pokemon2Stats").classList.add("hide");

	g("moves").classList.remove("hide");
	g("moves2").classList.add("hide");
	g("movesSync").classList.remove("hide");
	g("moves2Sync").classList.add("hide");

	g("moves").classList.remove("hideMax");
	g("moves2").classList.remove("hideMax");
	g("movesSync").classList.remove("hideMax");
	g("moves2Sync").classList.remove("hideMax");
	g("movesMAX").classList.add("hideMax");
	g("btn_dynamax").classList.add("hideMax");

	g("iconTabPassiveMaster").classList.add("hide");
	g("passiveMaster").classList.add("hide");
	g("passives").classList.remove("hide");
	g("passives2").classList.add("hide");

	g("syncPair_pokemon2").removeAttribute("style");
	g("syncPair_pokemon2Stats").removeAttribute("style");

	g("elementFocus").classList.add("hide");
}


function checkImagesValidity() {
	var emptyImg = "./images/empty.png";
	g("syncPair_bg").onerror = function() {
		this.src = "./images/bg3.png";
		SYNCPAIR.bg = "./images/bg3.png";
	}
	g("syncPair_trainerImageBase").onerror = function() {
		this.src = emptyImg;
		SYNCPAIR.trainer.images.base = emptyImg;
	}
	g("syncPair_trainerImageEx").onerror = function() {
		this.src = emptyImg;
		SYNCPAIR.trainer.images.ex = emptyImg;
	}
	g("syncPair_pokemonImage").onerror = function() {
		this.src = emptyImg;
		SYNCPAIR.pokemon[0].image = emptyImg;
	}
	g("syncPair_pokemon2Image").onerror = function() {
		this.src = emptyImg;
		SYNCPAIR.pokemon[1].image = emptyImg;
	}
}


function scout() {

	if(g("scout").classList.contains("hide")) {
		g("scout").classList = "hide scout_" + SYNCPAIR.pokemonType.toLowerCase();
	} else {
		g("scout").classList = "scout_" + SYNCPAIR.pokemonType.toLowerCase();
	}

	g("scout_trainer").src = SYNCPAIR.trainer.images.base;
	g("scout_star").innerHTML = rarity(SYNCPAIR.rarity);

	if(SYNCPAIR.pokemon.length > 0) {
		g("scout_pokemon").src = SYNCPAIR.pokemon[0].image;
		g("scout_name").innerHTML = `<p>${SYNCPAIR.trainer.name}<br>& ${SYNCPAIR.pokemon[0].name.replace("(Shiny)","").replace("(shiny)","")}</p>`;
	}

	g("scout_trainer").onerror = function() { g("scout_trainer").src = "./images/empty.png" };
	g("scout_pokemon").onerror = function() { g("scout_pokemon").src = "./images/empty.png" };

	if(SYNCPAIR.skills.themes[1].name.toLowerCase() == "sinnoh" && SYNCPAIR.skills.themes[1].description.toLowerCase() == "(hisui)" ) {
		g("scout_images").classList.add("hisui_bg");
	} else {
		g("scout_images").classList.remove("hisui_bg");
	}
}


/*
Generates the html code for n <img> stars
*/
function rarity(r) {

	var n, ex;
	var r_str = r + "";

	if(r_str.toLowerCase().indexOf("+ex") > -1) {
		ex = true;
		n = parseInt(r_str.replace("+ex",""));
	} else {
		ex = false;
		n = parseInt(r_str);
	}

	var o = "";
	for(var i=1; i<=MAX_NUMBER_STARS-2; i++) {
		if (i<=n) { o += '<img src="./images/star.png">'; }
		else { o += '<img src="./images/star2.png">'; }
	}
	if(n==MAX_NUMBER_STARS-1 || ex) { o += '<img src="./images/star_ex1.png">'; }
	if(n>=MAX_NUMBER_STARS) { o += '<img src="./images/star_ex2.png">'; }
	return o;
}

/*
Cheks if r is a role and return the path of the image
*/
function roleImage(r) {
	if(DATA.ROLES.indexOf(r.toLowerCase()) > -1) {
		return `./images/role_${r.toLowerCase().replace(" ","_")}.png`;
	} else { return "./images/empty.png" }
}

/*
Cheks if t is a type and return the path of the image
*/
function typeImage(t) {
	if(DATA.TYPES.indexOf(t.toLowerCase()) > -1) {
		return `./images/type_${t.toLowerCase()}.png`;
	} else { return "./images/empty.png" }
}

/*
Cheks if t is a type and return the path of the image
*/
function moveTypeImage(t) {
	if(DATA.TYPES.indexOf(t.toLowerCase()) > -1) {
		return `./images/move_${t.toLowerCase()}.png`;
	} else { return "./images/empty.png" }
}

/*
Cheks if t is a type and return the path of the image
*/
function syncMoveTypeImage(t) {
	if(DATA.TYPES.indexOf(t.toLowerCase()) > -1) {
		return `./images/sync_${t.toLowerCase()}.png`;
	} else { return "./images/empty.png" }
}

/*
Returns the html code for the <img> of the gender g
*/
function gender(g) {
	if(DATA.GENDER.indexOf(g.toLowerCase()) > -1) {
		return `<img class="syncPair_pokemonGender" src="./images/icon_${g.toLowerCase()}.png">`;
	} else { return '<img class="syncPair_pokemonGender" src="./images/empty.png">'; }
}


/*
parameters :
	[hp,att,def,spa,spd,spe]  array containing all stats of first Pokemon
	[hp2,att2,def2,spa2,spd2,spe2]  array containing all stats of second Pokemon

return :
	string of html code for the stats
*/
function statsAre(stats, stats2) {
	const max_stats = {
		"Hp": ["Rampardos (1000)", "Emboar (978)", "Cranidos (975)", "Pignite (939)", "Hariyama (935)"],
		"Attack": ["Pheromosa (544)", "Mega Metagross (539)", "Mega Charizard X (535)", "Zygarde (Complete Forme) (535)", "Mega Blaziken (535)"],
		"Defense": ["Mega Steelix (424)", "Mega Lucario (Cynthia) (387)", "Mega Blastoise (374)", "Steelix (354)", "Mega Ampharos (350)"],
		"Special Attack": ["Mega Gardevoir (Wally) (621)", "Mega Mewtwo Y (599)", "Pheromosa (544)", "Mega Pidgeot (535)", "Mega Charizard X (535)", "Zygarde (Complete Forme) (535)"],
		"Special Defense": ["Mega Latios (392)", "Mega Lucario (Cynthia) (387)", "Mega Blastoise (374)", "Celesteela (354)", "Mega Ampharos (350)"],
		"Speed": ["Deoxys-Speed (566)", "Mega Sharpedo (540)", "Mega Mewtwo Y (532)", "Rapidash (Blaine) (529)", "Pheromosa (523)"]
	}

	if(stats.hp == 0 && stats.atk == 0 && stats.def == 0 && 
		stats.spa == 0 && stats.spd == 0 && stats.spe ==0) {
		g("stats").classList.add("hide");

		if(SYNCPAIR.exRole != "") {
			g("syncPair_role_type").classList.add("noExRole");
		}
	} else {
		g("stats").classList.remove("hide");
		if(SYNCPAIR.exRole != "") {
			g("syncPair_role_type").classList.remove("noExRole");
		}
	}

	return `<p class="${compareStat(stats.hp, stats2.hp)}">${checkMaxStat(stats.hp,935,"Hp")}${isEmpty(stats.hp)}</p>
			<p class="${compareStat(stats.atk, stats2.atk)}">${checkMaxStat(stats.atk,535,"Attack")}${isEmpty(stats.atk)}</p>
			<p class="${compareStat(stats.def, stats2.def)}">${checkMaxStat(stats.def,350,"Defense")}${isEmpty(stats.def)}</p>
			<p class="${compareStat(stats.spa, stats2.spa)}">${checkMaxStat(stats.spa,535,"Special Attack")}${isEmpty(stats.spa)}</p>
			<p class="${compareStat(stats.spd, stats2.spd)}">${checkMaxStat(stats.spd,350,"Special Defense")}${isEmpty(stats.spd)}</p>
			<p class="${compareStat(stats.spe, stats2.spe)}">${checkMaxStat(stats.spe,523,"Speed")}${isEmpty(stats.spe)}</p>`

	/*
	compare stat1 and stat2 and return the adequate class name that describes their relation
	*/
	function compareStat(s, s2) {
		if(parseInt(s)==parseInt(s2)) { return ""; }
		if(parseInt(s)>parseInt(s2)) { return "stat_up"; } else { return "stat_down"; }
	}

	function isEmpty(s) {
		if(s == "") { return "&nbsp;"; }
		else { return s; }
	}

	function checkMaxStat(stat, maxStat, whichStat) {
		if(stat >= maxStat) {
			return `<img src="images/attention.png" class="highestStatIcon">
			<span class="highestStatTooltip"><a target="_blank" href="https://www.serebii.net/pokemonmasters/syncpairs/${whichStat.toLowerCase().replace(" ","")}.shtml">TOP IN ${whichStat.toUpperCase()} ↗</a><br><br>${max_stats[whichStat].join("<br>")}</span>`
		} else {
			return "";
		}
	}
}


/*
parameters :
	move = {
		"user" : "Pokemon",
		"name" : "Move 1",
		"type" : "Electric",
		"gauge" : 6,
		"uses" : 0,
		"category" : "Special",
		"power" : "999",
		"accuracy" : "Never miss",
		"target" : "All opponents",
		"effect" : "",
		"description" : "6 !?"
	}
	option = "move_classic", "move_sync", "move2_classic", "move2_sync", "move_dynamax"

return :
	string of the html code of 1 move
*/
function moveIs(move, option) {
	var moveOption = option;

	if(move.name == "" || move.type == "") { moveOption = "no_move"; }

	var b_move = "";
	var move_name = move.name;
	var noIconType = "";
	if(move_name.substring(0, 8).toLowerCase() == "(b move)") {
		b_move = `<div class="b_move"><img src="images/b_move_chain.png"><img src="images/b_move_bg.png"><img src="images/b_move_border.png"></div>`;
		move_name = move.name.substring(8);
		noIconType = "noIconType"
	}

	var target_icon = "";
	if(move.target == "All opponents") {
		target_icon = `<div class="move_target_icon bg_${move.type.toLowerCase()}"></div>`
	}

	return `<div class="move ${moveOption} bg_${move.type.toLowerCase()} elementF">
				<div class="move_basics icon_${move.type.toLowerCase()} ${noIconType}">
					${b_move}
					<p class="move_name">${move_name}</p>

					<div class="move_gauge_uses">
						<div class="move_gauge ${hideOrNot(move.gauge)}">${gauges(move.gauge)}</div>
						<p class="move_uses ${hideOrNot(move.uses)}">${uses(move.uses)}</p>
					</div>

					${moveUser(move.user, move.type)}

					${target_icon}
				</div>

				<div class="move_details_description">
					<div class="move_details">
						<div style="border-bottom: 6px solid var(--${move.type.toLowerCase()});"><p>Type</p><p class="move_type"><img src="${typeImage(move.type)}">${move.type}</p></div>
						<div><p>Category</p><p class="move_category">${category(move.category)}</p></div>
						<div><p>Power</p><p class="move_power">${move.category.toLowerCase()=="status" ? "-" : move.power}</p></div>
						<div><p>Accuracy</p><p class="move_accuracy">${move.accuracy}</p></div>
						<div><p>Target</p><p class="move_target">${move.target}</p></div>
						<div><p>Effect</p><p class="move_effect">${move.effect.replaceAll("(lb)","<br>")}</p></div>
					</div>

					<p class="move_description" data-descriptionlength="${Math.round(move.description.length/10)}">${move.description.replaceAll("(lb)","<br>").replace(/\(ex:(.*?)\)/g, exEffect)}</p>
				</div>
			</div>`;

	/*
	Returns g <img> of the gauge
	*/
	function gauges(g) {
		if(g<=MAX_MOVE_GAUGE) {
			return '<img src="./images/icon_gauge.png">'.repeat(g);
		} else { return '<img src="./images/icon_gauge.png">'.repeat(MAX_MOVE_GAUGE); }
	}

	function uses(u) { return u+"/"+u; }

	function hideOrNot(n) { if(isNaN(n) || n==0 || n=="") { return 'hide'; } else { return ""; } }

	/*
	Cheks if c is a category and return a <img> of the category
	*/
	function category(c) {
		if(DATA.CATEGORIES.indexOf(c.toLowerCase()) > -1) {
			return `<img src="./images/category_${c.toLowerCase()}.png">`;
		} else { return '<img src="./images/empty.png">' }
	}

	/*
	Returns the div that contains the image of the move user (or not)
	*/
	function moveUser(u, t) {
		if(u == "") { return ""; }

		var image = "./images/empty.png";
		var user = "";

		if(u.toLowerCase() == "trainer" && SYNCPAIR.trainer.images.base.length > 0) { image = SYNCPAIR.trainer.images.base; user = "u_trainer"; }
		if(u.toLowerCase() == "trainer2" && SYNCPAIR.trainer.images.ex.length > 0) { image = SYNCPAIR.trainer.images.ex; user = "u_trainer2"; }
		if(u.toLowerCase() == "pokemon" && SYNCPAIR.pokemon.length > 0) { image = SYNCPAIR.pokemon[0].image; user = "u_pokemon"; }
		if(u.toLowerCase() == "pokemon2" && SYNCPAIR.pokemon.length > 1) { image = SYNCPAIR.pokemon[1].image; user = "u_pokemon2"; }

		return `<div class="move_user bg_${t.toLowerCase()} ${user}"><img src="${image}"></div>`;
	}

	function exEffect(match, p1, p2, offset, string) {
		var exDesc = "";
		switch(p1) {
			case "+strike": exDesc = "Targets all opponents."; break;
			case "+tech": exDesc = "Power ×1.5"; break;
			case "+support": exDesc = "Once per battle, the stat increase after using sync move is doubled."; break;
			case "+sprint": exDesc = "The first time the user's sync move is used each battle, the sync move countdown is reduced by three."; break;
			default:
				if(p1.substring(0,7)=="+field ") {
					var setField = p1.match(/(\+field)(.*)/)[2].split(",");
					exDesc = "Implements the following field effect just before the user's sync move is used the first time each battle. Extends the field effect duration only that time.<br>• "+setField.join("<br>• ");
				} else {
					exDesc = p1;
				}
		}
		if(option == "move_sync" || option == "move2_sync") {
			return `<span class="exEffect bg_${move.type.toLowerCase()}">${exDesc}</span>`
		}
	}
}


/*
Apply moveIs() function to each move inside moves=[]
parameters :
	moves = [{move},{move},{move},{move}, ..]
	
	option = "move_classic", "move_sync", "move2_classic", "move2_sync", "move_dynamax"

return :
	string of the html code of all moves that is "option"
*/
function movesAre(moves, option) {
	var o = "";
	var move4 = moves.slice(0, MAX_NUMBER_MOVES); //keep a limited number of moves

	if(option == "move_sync" || option == "move2_sync") { move4 = moves.slice(0, MAX_NUMBER_SYNCMOVES) }

	for(var i=0; i<move4.length; i++) {
		o += moveIs(move4[i], option)
	}

	return o + sync_center(option);

	/*
	adds the html code of div/img of the syncMoveIcon in the middle
	*/
	function sync_center(option) {
		try {
			if(option == "move_sync") {
				return `<div class="icon_sync_center"><img src="./images/icon_sync.png">
						<img src="${syncMoveTypeImage(SYNCPAIR.actions.syncMove[0].type)}"></div>`;
			}
			if(option == "move2_sync") {
				return `<div class="icon_sync_center"><img src="./images/icon_sync.png">
						<img src="${syncMoveTypeImage(SYNCPAIR.actions.syncMove2[0].type)}"></div>`;
			}
			if(option == "move_dynamax") {
				return `<div class="icon_sync_center"><img src="./images/icon_sync.png"></div>`
			}
			return "";
		} catch(e) { return ""; }
	}
}


/*
parameters :
	move = {
				"name" : "Electric",
				"description" : "Description"
			}
	option = "skill_passive", "skill_passiveMaster", "skill_lucky", "skill_theme"

return :
	string of the html code of 1 skill
*/
function skillIs(skill, option) {
	var themeType = "";
	var skillOption = option;
	var themeSkillIcon = "";

	if(skill.name == "" && skill.description == "") { skillOption = "no_move"; skill.name = "&nbsp;"; }

	if(option == "skill_theme") {
		var icon = "other";
		if((icon = DATA.THEMES_SKILLS[skill.name.toLowerCase()]) == undefined) { icon = "other"; }
		themeSkillIcon = `<img src="images/theme_${icon}.png" class="skill_theme_icon">`;
	}

	/*if the skill is a "type" (fire, ice, ..)*/
	if(DATA.TYPES.indexOf(skill.name.toLowerCase()) > -1) {
		themeType= "bg_"+skill.name.toLowerCase();
		themeSkillIcon = `<img src="images/theme_type.png" class="skill_theme_icon">`;
	}

	return `<div class="skill ${skillOption} ${themeType} elementF">
				${themeSkillIcon}
				<p class="skill_name">${skill.name}</p>
				<p class="skill_description" data-descriptionlength="${Math.round(skill.description.length/10)}">${skill.description.replaceAll("(lb)","<br>")}</p>
			</div>`;
}

/*
Apply skillIs() function to each skill inside skilla=[]
parameters :
	skills = [{skill},{skill},{skill}, ..]
	
	option = skill_passive", "skill_passiveMaster", "skill_lucky", "skill_theme"

return :
	string of the html code of all skills that is "option"
*/
function skillsAre(skills, option) {
	var o = "";
	var skills3 = skills.slice(0, MAX_NUMBER_PASSIVES);

	/*limits the number of skill*/
	if(option == "skill_passiveMaster") { skills3 = skills.slice(0, MAX_NUMBER_MASTERPASSIVES) }
	if(option == "skill_lucky") { skills3 = skills.slice(0, MAX_NUMBER_LUCKY) }
	if(option == "skill_theme") { skills3 = skills.slice(0, MAX_NUMBER_THEME) }

	for(var i=0; i<skills3.length; i++) {
		o += skillIs(skills3[i], option)
	}
	return o;
}



/*-----------------------------------------------------------------------------
	TABS : "MOVES", "PASSIVES", "LUCKY", "THEMES"
-----------------------------------------------------------------------------*/

/*
html id of tabs
*/
var tabs = ["tab_actions","tab_passiveSkills","tab_luckySkills","tab_themeSkills"];
var lastSelected = g(tabs[0]);

tabs.forEach(e => g(e).addEventListener("click", function() { changeTabTo(this); }));

function changeTabTo(tab) {
	lastSelected.classList.remove("tab_selected");
	tab.classList.add("tab_selected");
	lastSelected = tab;

	tabs.forEach(e => g(e.replace("tab_","")).classList.add("hide"));
	g(tab.id.replace("tab_","")).classList.remove("hide");

	if(! g("actions").classList.contains("hide")) { g("skills").classList.add("hide"); }
	else { g("skills").classList.remove("hide"); }
}



/*-----------------------------------------------------------------------------
	changeMode, screenshot, generateHtmlOptions
-----------------------------------------------------------------------------*/

function changeMode() {
	if(g("css_main1").disabled) {//"game mode"
		g("css_main1").disabled = false;
		g("css_main2").disabled = true;
		g("css_skills3").disabled = true;
		g("css_moves4").disabled = true;
		g("css_showall").disabled = true;
		g("btn_skills").classList.add("no_move");
		g("btn_moves").classList.add("no_move");
		g("btn_showall").classList.add("no_move");
		g("btn_skills").classList.remove("optionSelected");
		g("btn_moves").classList.remove("optionSelected");
		g("btn_showall").classList.remove("optionSelected");
		changeTabTo(lastSelected);

		g("css_slider").disabled = true;
		g("css_vertical").disabled = true;
	}
	else {//"expanded mode"
		g("css_main1").disabled = true;
		g("css_main2").disabled = false;
		g("css_skills3").disabled = true;
		g("css_moves4").disabled = true;
		g("css_showall").disabled = true;
		g("skills").classList.remove("hide");
		g("actions").classList.remove("hide");
		g("btn_skills").classList.remove("no_move");
		g("btn_moves").classList.remove("no_move");
		g("btn_showall").classList.remove("no_move");

		if(localStorage.getItem("syncPairEditorSliderMode") !== null) {
			g("css_slider").disabled = !(localStorage.getItem("syncPairEditorSliderMode") === "true");
			g("css_vertical").disabled = true;
		}
		if(localStorage.getItem("syncPairEditorVerticalMode") !== null) {
			g("css_vertical").disabled = !(localStorage.getItem("syncPairEditorVerticalMode") === "true");
			g("css_slider").disabled = true;
		}
	}
}


/*
takes the id of the css <link> to enable/disable it
*/
function toggleCSS(css) {
	if(g(css).disabled) { g(css).disabled = false;
	} else { g(css).disabled = true; }
}

/*
hide element1 and show element2
*/
function switchBetween(e1,e2) {
	g(e1).classList.toggle("hide");
	g(e2).classList.toggle("hide");
}


/*
Generates all <option> for all syncpairs from syncpairs.js
and insert it in the <select>
*/
function generateSyncPairsOptionsHtml() {
	var output = "";
	for(var i=0; i<SYNCPAIRS.length; i++) {
		var optionSelected = "";
		if(SYNCPAIRS[i].trainer.name == SYNCPAIR.trainer.name) { optionSelected = "selected"; }

		var option = `<option value="${i}" ${optionSelected}>${SYNCPAIRS[i].trainer.name} & ${SYNCPAIRS[i].pokemon[0].name.replace("(shiny) ", "")}</option>`;
		
		/*disable <option> if name is "--" */
		if(SYNCPAIRS[i].pokemon[0].name == "--") {
			option = `<option disabled>${SYNCPAIRS[i].trainer.name}</option>`
		}

		/*if first two elements, just show the trainer name, no pokemon*/
		if(i==0 || i==1) {
			option = `<option value="${i}" ${optionSelected}>${SYNCPAIRS[i].trainer.name}</option>`
		}

		output += option;
	}
	g("input_sync_pairs").innerHTML = output;
}

/*
Generates all <option> for all elements inside arr and insert
the html code inside the element with id "target"
*/
function generateOptionsHtml(arr, target) {
	var output = "";
	for(var i=1; i<arr.length; i++) {
		output += `<option value="${i}">${arr[i]}</option>`;
	}
	g(target).innerHTML += output;
}



//https://github.com/tsayen/dom-to-image
function screenshot() {
	var node = g('main');

	var pageIsZoomed = (100 !== Math.round(window.devicePixelRatio * 100));
	var descriptions = Array.from(document.getElementsByClassName("move_description")).concat(Array.from(document.getElementsByClassName("skill_description")));
	if(pageIsZoomed) { descriptions.forEach(d => d.style = `padding-bottom: ${parseInt(d.dataset.descriptionlength)/2}px`); }

	if(! g("grid").classList.contains("hide")) {
		if(g("selectedCellsContainer").classList.contains("hide")) {
			node = g("grid");
			node.style.backgroundImage = "none";
			if(g("btn_changeMode").classList.contains("optionSelected")) {
				node.style.height = "1200px";
			} else { node.style.height = "812px"; }
			g("gridInfos").classList.add("hide");
		} else {
			node = g("selectedCellsContainer");
			node.style.overflowY = "initial";
			node.style.height = "auto";
			g("grid").style.overflow = "initial";			
		}
	}

	if(! g("scout").classList.contains("hide")) {
		node = g("scout");
	}

	var w = node.clientWidth;
	var h = node.clientHeight;
	var scale = 1.45;
	var options = { width: w*scale,
					height: h*scale,
					style: {'transform': 'scale('+scale+')','transform-origin': 'top left'}
				}

	if(! g("scout").classList.contains("hide")) {
		options.style["background-size"] = "69%";
	}

	Array.from(document.getElementsByClassName("highestStatIcon")).forEach(i => i.classList.add("hide"));
	Array.from(document.getElementsByClassName("highestStatTooltip")).forEach(i => i.classList.add("hide"));

	domtoimage.toPng(node, options)
	.then(function (dataUrl) {
		var img = new Image();
		img.src = dataUrl;

		g("screenshot").classList.remove("hide");
		g("screenshot").innerHTML = `<p>GENERATED IMAGE :</p>`;
		g("screenshot").appendChild(img);

		node.removeAttribute("style");
		g("gridInfos").removeAttribute("class");
		g("grid").removeAttribute("style");
		g("selectedCellsContainer").removeAttribute("style");

		if(pageIsZoomed) { descriptions.forEach(d => d.removeAttribute("style")); }

		Array.from(document.getElementsByClassName("highestStatIcon")).forEach(i => i.classList.remove("hide"));
		Array.from(document.getElementsByClassName("highestStatTooltip")).forEach(i => i.classList.remove("hide"));

		alert("Image generated.")
		location.href = "#screenshot";
	})
	.catch(function (error) {
		alert("Error. Make sure to not have a custom image link in your code before using this button.")
		console.log(error);
	});
}


/*-----------------------------------------------------------------------------
	LOCALSTORAGE
-----------------------------------------------------------------------------*/

function clearAll() {
	localStorage.clear();

	Array.from(document.getElementsByClassName("slot")).forEach(s => s.innerHTML = s.value.replace("Slot", "Slot "));
}

function clearSave() {
	var save = g("localstorage").value;
	var slotNum = parseInt(save.replace("Slot","")) - 1;

	localStorage.removeItem(save);
	localStorage.removeItem(save+"_grid");

	document.getElementsByClassName("slot")[slotNum].innerHTML = document.getElementsByClassName("slot")[slotNum].value.replace("Slot", "Slot ");

	updateSlotsName();
}

function loadSave() {
	var save = g("localstorage").value;

	if(localStorage.getItem(save) !== null) {
		SYNCPAIR = JSON.parse(localStorage.getItem(save));
		SYNCGRID = JSON.parse(localStorage.getItem(save+"_grid"));

		upTextEditorValueFromSyncPairOBJ();
		upTextEditorValueFromSyncGridOBJ();

		showSyncPair();
		GRID.genGrid(SYNCGRID);
		clickCellToCodePart();
	}
}

function saveSave() {
	var save = g("localstorage").value;
	var currentPairName = `${SYNCPAIR.trainer.name} & ${SYNCPAIR.pokemon[0].name}`;

	localStorage.setItem(save, JSON.stringify(SYNCPAIR, null, "  "));
	localStorage.setItem(save+"_grid", JSON.stringify(SYNCGRID, null, "  "));

	document.getElementsByClassName("slot")[parseInt(save.replace("Slot","")) - 1].innerHTML = currentPairName;
	
	updateSlotsName();
}

function updateSlotsName() {
	var slotsName = [];

	Array.from(document.getElementsByClassName("slot")).forEach(s => slotsName.push(s.innerHTML));

	localStorage.setItem("SlotsName", slotsName.join(" &&&& "));
}

function getSaveName() {
	try {
		if(localStorage.getItem("SlotsName") !== null) {
			var slotsName = localStorage.getItem("SlotsName").split(" &&&& ");

			Array.from(document.getElementsByClassName("slot")).forEach(s => s.innerHTML = slotsName[s.value.replace("Slot","") - 1]);		
		}
	} catch(e) {
		clearAll();
	}
}


function sliderMode() {
	var isDisabled = document.getElementById("css_slider").disabled;
	document.getElementById("css_slider").disabled = !isDisabled;

	localStorage.setItem("syncPairEditorSliderMode", isDisabled);
	localStorage.removeItem("syncPairEditorVerticalMode");
}


function verticalMode() {
	var isDisabled = document.getElementById("css_vertical").disabled;
	document.getElementById("css_vertical").disabled = !isDisabled;

	localStorage.setItem("syncPairEditorVerticalMode", isDisabled);
	localStorage.removeItem("syncPairEditorSliderMode");
}


/*-----------------------------------------------------------------------------
	TEXT EDITOR
-----------------------------------------------------------------------------*/

/*
put the code inside the textarea "source_syncpair" 
before applying codemirror on it

same for "source_syncgrid" 
*/
function firstShowCodeSources() {
	g("source_syncpair").value = JSON.stringify(SYNCPAIR, null, "  ");

	g("source_syncgrid").value = JSON.stringify(SYNCGRID, null, "  ");
}


function showSyncPairFromSource() {
	try {
		SYNCPAIR = JSON.parse(CODE_MIRROR_EDITOR.doc.getValue());
		g('source_valid').innerHTML = "Valid";
		g('source_valid').classList.remove("sourceInvalid");
		g('source_valid').classList.add("sourceValid");
	} catch {
		g('source_valid').innerHTML = "Invalid";
		g('source_valid').classList.remove("sourceValid");
		g('source_valid').classList.add("sourceInvalid");
	}
	showSyncPair();
}

function updateSyncGridFromSource() {
	try {
		SYNCGRID = JSON.parse(CODE_MIRROR_EDITOR_GRID.doc.getValue());
		g('sourceGrid_valid').innerHTML = "Valid";
		g('sourceGrid_valid').classList.remove("sourceInvalid");
		g('sourceGrid_valid').classList.add("sourceValid");
	} catch {
		g('sourceGrid_valid').innerHTML = "Invalid";
		g('sourceGrid_valid').classList.remove("sourceValid");
		g('sourceGrid_valid').classList.add("sourceInvalid");
	}
}


//https://codemirror.net/
var CODE_MIRROR_EDITOR;
var CODE_MIRROR_EDITOR_GRID;


function initSyncPairCodeEditor() {
	CODE_MIRROR_EDITOR = CodeMirror.fromTextArea(document.getElementById("source_syncpair"), {
		mode: "application/json",
		lineNumbers: true,
		lineWrapping: true,
		matchBrackets: true,
		autoCloseBrackets: true,
		styleActiveLine: true,
		lint: true,
		foldGutter: true,
		gutters: ["CodeMirror-lint-markers","CodeMirror-linenumbers", "CodeMirror-foldgutter"],
		theme: "shadowfox",
		extraKeys: {"Alt-F": "findPersistent"},
		foldOptions: {
			widget: (from, to) => {
				var count = undefined;

				// Get open / close token
				var startToken = '{', endToken = '}';        
				var prevLine = CODE_MIRROR_EDITOR.getLine(from.line);
				if (prevLine.lastIndexOf('[') > prevLine.lastIndexOf('{')) {
					startToken = '[', endToken = ']';
				}

				// Get json content
				var internal = CODE_MIRROR_EDITOR.getRange(from, to);
				var toParse = startToken + internal + endToken;

				// Get key count
				try {
					var parsed = JSON.parse(toParse);
					count = Object.keys(parsed).length;
				} catch(e) { }        

				return count ? `\u2190\u0020${count}\u0020\u2192` : '\u2194';
			}
		}
	});

	CODE_MIRROR_EDITOR.on('change', (editor) => {
		setTimeout(showSyncPairFromSource, DELAY_UPDATE_DISPLAY);
	});

	var charWidth = CODE_MIRROR_EDITOR.defaultCharWidth(), basePadding = 4;
	CODE_MIRROR_EDITOR.on("renderLine", function(cm, line, elt) {
		var off = CodeMirror.countColumn(line.text, null, cm.getOption("tabSize")) * charWidth;
		elt.style.textIndent = "-" + off + "px";
		elt.style.paddingLeft = (basePadding + off) + "px";
	});
	CODE_MIRROR_EDITOR.refresh();

	foldSomeParts();
}

function initSyncGridCodeEditor() {
	CODE_MIRROR_EDITOR_GRID = CodeMirror.fromTextArea(document.getElementById("source_syncgrid"), {
		mode: "application/json",
		lineNumbers: true,
		lineWrapping: true,
		matchBrackets: true,
		autoCloseBrackets: true,
		styleActiveLine: true,
		lint: true,
		foldGutter: true,
		gutters: ["CodeMirror-lint-markers","CodeMirror-linenumbers", "CodeMirror-foldgutter"],
		theme: "shadowfox",
		extraKeys: {"Alt-F": "findPersistent"},
		foldOptions: {
			widget: (from, to) => {
				var count = undefined;

				// Get open / close token
				var startToken = '{', endToken = '}';        
				var prevLine = CODE_MIRROR_EDITOR.getLine(from.line);
				if (prevLine.lastIndexOf('[') > prevLine.lastIndexOf('{')) {
					startToken = '[', endToken = ']';
				}

				// Get json content
				var internal = CODE_MIRROR_EDITOR.getRange(from, to);
				var toParse = startToken + internal + endToken;

				// Get key count
				try {
					var parsed = JSON.parse(toParse);
					count = Object.keys(parsed).length;
				} catch(e) { }        

				return count ? `\u2190\u0020${count}\u0020\u2192` : '\u2194';
			}
		}
	});

	CODE_MIRROR_EDITOR_GRID.on('change', (editor) => {
		updateSyncGridFromSource();
		document.getElementById("syncGridModeBtn").classList.add("syncGridModeBtnPending");
	});

	var charWidth = CODE_MIRROR_EDITOR_GRID.defaultCharWidth(), basePadding = 4;
	CODE_MIRROR_EDITOR_GRID.on("renderLine", function(cm, line, elt) {
		var off = CodeMirror.countColumn(line.text, null, cm.getOption("tabSize")) * charWidth;
		elt.style.textIndent = "-" + off + "px";
		elt.style.paddingLeft = (basePadding + off) + "px";
	});
	CODE_MIRROR_EDITOR_GRID.refresh();
}

function upTextEditorValueFromSyncPairOBJ() {
	CODE_MIRROR_EDITOR.doc.setValue(JSON.stringify(SYNCPAIR, null, "  "));

	foldSomeParts();
}

function upTextEditorValueFromSyncGridOBJ() {
	CODE_MIRROR_EDITOR_GRID.doc.setValue(JSON.stringify(SYNCGRID, null, "  "));
}


/* fold some parts of the code */
function foldSomeParts() {
	var statsLVL150 = CODE_MIRROR_EDITOR.getSearchCursor("statsLVL150", CodeMirror.Pos(CODE_MIRROR_EDITOR.firstLine(), 0));
	while(statsLVL150.findNext()) {
		CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(statsLVL150.from().line,0));
	}

	if(SYNCPAIR.trainer.name == "TEMPLATE (FULL)") {
		CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(28, 0));//pokemon2
		CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(57, 0));//passives2
		CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(71, 0));//passiveMaster
		CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(176, 0));//moves2
		CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(230, 0));//syncMove2
		CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(245, 0));//movesMAX		
	}
}


function clickCellToCodePart() {
	Array.from(document.getElementsByClassName("cell")).forEach(e => e.addEventListener("click", function() {
		if(this.dataset.cellid == 0) return;

		var line = ((parseInt(this.dataset.cellid)-1)*12)+5;
		CODE_MIRROR_EDITOR_GRID.focus();
		CODE_MIRROR_EDITOR_GRID.setSelection({line: line, ch: 0}, {line: line+7, ch: 0});

		/* center vertically selection */
		var top = CODE_MIRROR_EDITOR_GRID.charCoords({line: line, ch: 0}, "local").top; 
		var marginTop = CODE_MIRROR_EDITOR_GRID.getScrollerElement().offsetHeight / 3; 
		CODE_MIRROR_EDITOR_GRID.scrollTo(null, top - marginTop); 
	}));
}



/*-----------------------------------------------------------------------------
	EVENTS LISTENERS : Buttons, Text area, Pokemon search
-----------------------------------------------------------------------------*/

/*
add the "focus" listener to all passives and moves
*/
function addFocusEvent() {
	Array.from(document.getElementsByClassName("elementF")).forEach(e => e.addEventListener("click", function() {
		g("elementFocus").innerHTML = this.outerHTML;
		g("elementFocus").classList.remove("hide");
	}));
}

/*
prevents images drag
*/
function noDragImages() {
	Array.from(document.getElementsByTagName("img")).forEach(e => e.draggable = false);
}


function resetImagesAdjustments() {
	g("positionXbg").value = 0;	g("positionYbg").value = 0;	g("sizeBg").value = 100;
	g("positionXTrainer").value = 0; g("positionYTrainer").value = 0; g("sizeTrainer").value = 100;

	g("ratioBg").checked = false;
	g("mirrorImageTrainer").checked = false;

	g("positionXuserPokemon").value = 0; g("positionYuserPokemon").value = 0; g("sizeUserPokemon").value = 100;
	g("positionXuserPokemon2").value = 0; g("positionYuserPokemon2").value = 0;  g("sizeUserPokemon2").value = 100;
	g("positionXuserTrainer").value = 0; g("positionYuserTrainer").value = 0; g("sizeUserTrainer").value = 100;
	g("positionXuserTrainer2").value = 0; g("positionYuserTrainer2").value = 0; g("sizeUserTrainer2").value = 100;

	g("positionXscoutTrainer").value = 0; g("positionYscoutTrainer").value = 0; g("sizeScoutTrainer").value = 100;
	g("positionXscoutPokemon").value = 0; g("positionYscoutPokemon").value = 0; g("sizeScoutPokemon").value = 100;

	g("scout_trainer").removeAttribute("style");
	g("scout_pokemon").removeAttribute("style");
	g("mirrorScoutTrainer").checked = false;
	g("mirrorScoutPokemon").checked = false;

	g("syncPair_bg").removeAttribute("style");
	g("syncPair_trainerImageBase").removeAttribute("style");
	g("syncPair_trainerImageEx").removeAttribute("style");
	Array.from(document.getElementsByClassName("u_pokemon")).forEach(e => e.children[0].removeAttribute("style"));
	Array.from(document.getElementsByClassName("u_pokemon2")).forEach(e => e.children[0].removeAttribute("style"));
	Array.from(document.getElementsByClassName("u_trainer")).forEach(e => e.children[0].removeAttribute("style"));
	Array.from(document.getElementsByClassName("u_trainer2")).forEach(e => e.children[0].removeAttribute("style"));
}


function moveUserImagesAdjustments() {
	Array.from(document.getElementsByClassName("u_pokemon")).forEach(function(e) {
		e.children[0].style.left = g("positionXuserPokemon").value + "%";
		e.children[0].style.top = -parseInt(g("positionYuserPokemon").value) + "%";
		e.children[0].style.transform = "scale(" + g("sizeUserPokemon").value + "%)";
	});
	Array.from(document.getElementsByClassName("u_pokemon2")).forEach(function(e) {
		e.children[0].style.left = g("positionXuserPokemon2").value + "%";
		e.children[0].style.top = -parseInt(g("positionYuserPokemon2").value) + "%";
		e.children[0].style.transform = "scale(" + g("sizeUserPokemon2").value + "%)";
	});
	Array.from(document.getElementsByClassName("u_trainer")).forEach(function(e) {
		e.children[0].style.left = g("positionXuserTrainer").value + "%";
		e.children[0].style.top = -parseInt(g("positionYuserTrainer").value) + "%";
		e.children[0].style.transform = "scale(" + g("sizeUserTrainer").value + "%)";
	});
	Array.from(document.getElementsByClassName("u_trainer2")).forEach(function(e) {
		e.children[0].style.left = g("positionXuserTrainer2").value + "%";
		e.children[0].style.top = -parseInt(g("positionYuserTrainer2").value) + "%";
		e.children[0].style.transform = "scale(" + g("sizeUserTrainer2").value + "%)";
	});
}


/*
syncpairs selection
*/
g("input_sync_pairs").addEventListener("input", function() {
	SYNCPAIR = SYNCPAIRS[this.value];
	SYNCGRID = SYNCGRIDS[this.value];

	upTextEditorValueFromSyncPairOBJ();
	upTextEditorValueFromSyncGridOBJ();
	document.getElementById("syncGridModeBtn").classList.remove("syncGridModeBtnPending");

	showSyncPair();
	if(! g("grid").classList.contains("hide")) {
		GRID.genGrid(SYNCGRID);
		clickCellToCodePart();
	}

	resetImagesAdjustments();
})

/*
change mode button
*/
g("btn_changeMode").addEventListener("click", function() {
	changeMode();
	this.classList.toggle("optionSelected");
	if(!g("css_main2").disabled) { g("btn_skills").click(); }
})

/*
skills button
*/
g("btn_skills").addEventListener("click", function() {
	toggleCSS('css_skills3');
	this.classList.toggle("optionSelected");
})

/*
moves button
*/
g("btn_moves").addEventListener("click", function() {
	toggleCSS('css_moves4');
	this.classList.toggle("optionSelected");
})

/*
show all button
*/
g("btn_showall").addEventListener("click", function() {
	toggleCSS('css_showall');
	this.classList.toggle("optionSelected");
})

/*
image generator button
*/
g("btn_genimage").addEventListener("click", screenshot)

/*
help button
*/
g("btn_help").addEventListener("click", function() {
	g("elementFocus").innerHTML = g("help").outerHTML;
	g("elementFocus").classList.remove("hide");

	g("detailedCell").classList = "cell_base";
	g("detailedCell").children[2].innerHTML = "HELP";
	g("detailedCell").children[3].innerHTML = 
		`<span>id</span><br>the id of the cell...<br><br>
		<span>x, y</span><br>coordinates of the cell in the grid. You can make a completely new template if you want. For more details, look at the "All cells" template.<br><br>
		<span>energy, orb, level</span><br>(optional but if you really want to fully interact with your grid, you can add those values)<br><br>
		<span>color</span><br>"blue", "red", "green", "yellow", "sync", "dynamax"<br><br>
		<span>icon</span><br>"bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water",<br><br>"trainer", "sync", "dynamax", "stat", "passive"`;

	g("detailedCell").children[4].innerHTML = "0";
	g("detailedCell").children[5].innerHTML = "0";
	g("detailedCell").children[6].innerHTML = "0";
})


/*
backgrounds selection
*/
g("input_backgrounds").addEventListener("input", function() {
	SYNCPAIR.bg = `./images/bg/${DATA.BACKGROUNDS[this.value]}.jpg`;
	if(this.value <= 4) {
		SYNCPAIR.bg = `./images/bg/${DATA.BACKGROUNDS[this.value]}.png`;
	}
	upTextEditorValueFromSyncPairOBJ();
})

/*
click on the background itself to change the display
*/
g("syncPair_bg_div").addEventListener("click", function() {
	if(this.classList.contains("backgroundSmall")) {
		this.classList.remove("backgroundSmall");
		this.classList.add("backgroundLarge");
	} else {
		this.classList.add("backgroundSmall")
		this.classList.remove("backgroundLarge");
	}
})


/*
grid templates selection
*/
g("input_gridTemplates").addEventListener("input", function() {
	SYNCGRID = SYNCGRIDS_TEMPLATES[this.value];
	upTextEditorValueFromSyncGridOBJ();
	if(! g("grid").classList.contains("hide")) {
		GRID.genGrid(SYNCGRID);
		clickCellToCodePart();
	}
})


/*
button to import background image
*/
g("file_img_sync_bg").addEventListener("input", function() {
	SYNCPAIR.bg = URL.createObjectURL(this.files[0]);
	upTextEditorValueFromSyncPairOBJ();
})

/*
button to import trainer image 1
*/
g("file_img_sync_trainer").addEventListener("input", function() {
	SYNCPAIR.trainer.images.base = URL.createObjectURL(this.files[0]);
	upTextEditorValueFromSyncPairOBJ();
})

/*
button to import trainer image 2
*/
g("file_img_sync_trainer2").addEventListener("input", function() {
	SYNCPAIR.trainer.images.ex = URL.createObjectURL(this.files[0]);
	upTextEditorValueFromSyncPairOBJ();
})

/*
button to import pokemon image 1
*/
g("file_img_sync_pokemon").addEventListener("input", function() {
	var img_url = URL.createObjectURL(this.files[0]);

	if(SYNCPAIR.pokemon.length == 0) {/*if no pokemon in SYNCPAIR*/
		SYNCPAIR.pokemon.push({
			"name" : "Pokemon",
			"formName" : "",
			"stats" : {"hp":0,"atk":0,"def":0,"spa":0,"spd":0,"spe":0},
			"image" : img_url
		})
	} else {
		SYNCPAIR.pokemon[0].image = img_url;
	}
	upTextEditorValueFromSyncPairOBJ();
})

/*
button to import pokemon image 2
*/
g("file_img_sync_pokemon2").addEventListener("input", function() {
	var img_url = URL.createObjectURL(this.files[0]);

	if(SYNCPAIR.pokemon.length == 1) {/*if just one pokemon in SYNCPAIR*/
		SYNCPAIR.pokemon.push({
			"name" : "Pokemon",
			"formName" : "",
			"stats" : {"hp":0,"atk":0,"def":0,"spa":0,"spd":0,"spe":0},
			"image" : img_url
		})
	} else {
		SYNCPAIR.pokemon[1].image = img_url;
	}
	upTextEditorValueFromSyncPairOBJ();
})


/*
datalist containing all pokemon options
*/
g("input_pokemon_art").addEventListener("input", function() {
	var pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+this.value+".png";

	if(g("pokemonHome_art").classList.contains("pokemonHome_art_selected")) {
		pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+this.value+".png";
	}

	if(isNaN(this.value) || this.value =="") {//if input is not number or ""
		g("syncPair_pokemonImage").src = "./images/substitute.png";
		g("syncPair_pokemonFormName").innerHTML = "";
		g("syncPair_pokemonName").innerHTML = "???";
	}
	else {
		if(this.value < 0 || this.value >= DATA.POKEMON.length ) {//if number out of range
			g("syncPair_pokemonImage").src = "./images/substitute.png";
			g("syncPair_pokemonFormName").innerHTML = "";
			g("syncPair_pokemonName").innerHTML = "???";
		} else {
			if(SYNCPAIR.pokemon.length == 0) {
				SYNCPAIR.pokemon.push({
					"name" : DATA.POKEMON[this.value],
					"formName" : "",
					"stats" : {"hp":0,"atk":0,"def":0,"spa":0,"spd":0,"spe":0},
					"image" : pokeUrl
				})
			} else {
				SYNCPAIR.pokemon[0].name = DATA.POKEMON[this.value];
				SYNCPAIR.pokemon[0].formName = "";
				SYNCPAIR.pokemon[0].image = pokeUrl;
			}
			upTextEditorValueFromSyncPairOBJ();
		}
	}
})

g("pokemonHome_art").addEventListener("click", function() {
	this.classList.toggle("pokemonHome_art_selected");

	if(!isNaN(g("input_pokemon_art").value)) {
		var currentImg = SYNCPAIR.pokemon[0].image;

		if(currentImg.indexOf("/pokemon/other/home/") > -1) {
			SYNCPAIR.pokemon[0].image = currentImg.replace("/pokemon/other/home/", "/pokemon/other/official-artwork/");
		} else if(currentImg.indexOf("/pokemon/other/official-artwork/") > -1) {
			SYNCPAIR.pokemon[0].image = currentImg.replace("/pokemon/other/official-artwork/", "/pokemon/other/home/");
		}

		upTextEditorValueFromSyncPairOBJ();
	}
})


g("syncPairModeBtn").addEventListener("click", function() {
	g("syncPairCodeEditor").classList.remove("hide");
	g("syncGridCodeEditor").classList.add("hide");
	g("syncOptions").classList.add("hide");
	g("main").classList.remove("hide");
	g("grid").classList.add("hide");
	g("scout").classList.add("hide");
	g("syncPairModeBtn").classList.add("syncModeBtnSelected");
	g("syncGridModeBtn").classList.remove("syncModeBtnSelected");
	g("syncScoutModeBtn").classList.remove("syncModeBtnSelected");

	upTextEditorValueFromSyncPairOBJ();
	if(! g("syncPairCodeEditor").classList.contains("hide")) {
		showSyncPair();
	}
})

g("syncGridModeBtn").addEventListener("click", function() {
	g("syncPairCodeEditor").classList.add("hide");
	g("syncGridCodeEditor").classList.remove("hide");
	g("syncOptions").classList.add("hide");
	g("main").classList.add("hide");
	g("grid").classList.remove("hide");
	g("scout").classList.add("hide");
	g("syncGridModeBtn").classList.remove("syncGridModeBtnPending");
	g("syncPairModeBtn").classList.remove("syncModeBtnSelected");
	g("syncGridModeBtn").classList.add("syncModeBtnSelected");
	g("syncScoutModeBtn").classList.remove("syncModeBtnSelected");

	updateSyncGridFromSource();
	if(! g("grid").classList.contains("hide")) {
		GRID.genGrid(SYNCGRID);
		clickCellToCodePart();
	}
})

g("syncScoutModeBtn").addEventListener("click", function() {
	g("syncPairCodeEditor").classList.remove("hide");
	g("syncGridCodeEditor").classList.add("hide");
	g("syncOptions").classList.add("hide");
	g("main").classList.add("hide");
	g("grid").classList.add("hide");
	g("scout").classList.remove("hide");
	g("syncPairModeBtn").classList.remove("syncModeBtnSelected");
	g("syncGridModeBtn").classList.remove("syncModeBtnSelected");
	g("syncScoutModeBtn").classList.add("syncModeBtnSelected");
})


g("syncOptionsModeBtn").addEventListener("click", function() {
	g("syncPairCodeEditor").classList.add("hide");
	g("syncGridCodeEditor").classList.add("hide");
	g("syncOptions").classList.remove("hide");
})

g("btn_loadSave").addEventListener("click", loadSave)
g("btn_saveSave").addEventListener("click", saveSave)
g("btn_clearSave").addEventListener("click", clearSave)

g("ratioBg").addEventListener("input", function() {
	if(this.checked) {
		g("syncPair_bg").style.width = "auto";
		g("syncPair_bg").style.height = "100%";
	} else {
		g("syncPair_bg").style.width = "100%";
		g("syncPair_bg").style.height = "100%";
	}
})

g("positionXbg").addEventListener("input", function() {
	g("syncPair_bg").style.left = this.value + "%";
})
g("positionYbg").addEventListener("input", function() {
	g("syncPair_bg").style.top = this.value + "%";
})
g("sizeBg").addEventListener("input", function() {
	g("syncPair_bg").style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`;
})
g("positionXTrainer").addEventListener("input", function() {
	g("syncPair_trainerImageBase").style.left = this.value + "%";
	g("syncPair_trainerImageEx").style.left = this.value + "%";
})
g("positionYTrainer").addEventListener("input", function() {
	g("syncPair_trainerImageBase").style.bottom = this.value + "%";
	g("syncPair_trainerImageEx").style.bottom = this.value + "%";
})
g("sizeTrainer").addEventListener("input", function() {
	if(g("mirrorImageTrainer").checked) {
		g("syncPair_trainerImageBase").style.transform = `scaleX(-${this.value}%) scaleY(${this.value}%)`;
		g("syncPair_trainerImageEx").style.transform = `scaleX(-${this.value}%) scaleY(${this.value}%)`;
	} else {
		g("syncPair_trainerImageBase").style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`;
		g("syncPair_trainerImageEx").style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`;
	}
})

g("mirrorImageTrainer").addEventListener("input", function() {
	if(g("syncPair_trainerImageBase").style.transform == "") {
		g("syncPair_trainerImageBase").style.transform = `scaleX(-1) scaleY(1)`;
	}
	if(g("syncPair_trainerImageEx").style.transform == "") {
		g("syncPair_trainerImageEx").style.transform = `scaleX(-1) scaleY(1)`;
	}

	if(this.checked) {
		g("syncPair_trainerImageBase").style.transform = g("syncPair_trainerImageBase").style.transform.replace("scaleX(","scaleX(-");
		g("syncPair_trainerImageEx").style.transform = g("syncPair_trainerImageEx").style.transform.replace("scaleX(","scaleX(-");
	} else {
		g("syncPair_trainerImageBase").style.transform = g("syncPair_trainerImageBase").style.transform.replace("scaleX(-","scaleX(");
		g("syncPair_trainerImageEx").style.transform = g("syncPair_trainerImageEx").style.transform.replace("scaleX(-","scaleX(");
	}
})

g("positionXuserPokemon").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_pokemon")).forEach(e => e.children[0].style.left = this.value + "%");
})
g("positionYuserPokemon").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_pokemon")).forEach(e => e.children[0].style.top = -parseInt(this.value) + "%");
})
g("sizeUserPokemon").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_pokemon")).forEach(e => e.children[0].style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`);
})
g("positionXuserPokemon2").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_pokemon2")).forEach(e => e.children[0].style.left = this.value + "%");
})
g("positionYuserPokemon2").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_pokemon2")).forEach(e => e.children[0].style.top = -parseInt(this.value) + "%");
})
g("sizeUserPokemon2").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_pokemon2")).forEach(e => e.children[0].style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`);
})
g("positionXuserTrainer").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_trainer")).forEach(e => e.children[0].style.left = this.value + "%");
})
g("positionYuserTrainer").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_trainer")).forEach(e => e.children[0].style.top = -parseInt(this.value) + "%");
})
g("sizeUserTrainer").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_trainer")).forEach(e => e.children[0].style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`);
})
g("positionXuserTrainer2").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_trainer2")).forEach(e => e.children[0].style.left = this.value + "%");
})
g("positionYuserTrainer2").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_trainer2")).forEach(e => e.children[0].style.top = -parseInt(this.value) + "%");
})
g("sizeUserTrainer2").addEventListener("input", function() {
	Array.from(document.getElementsByClassName("u_trainer2")).forEach(e => e.children[0].style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`);
})


g("positionXscoutTrainer").addEventListener("input", function() {
	g("scout_trainer").style.left = this.value + "%";
})
g("positionYscoutTrainer").addEventListener("input", function() {
	g("scout_trainer").style.top = -parseInt(this.value) + "%";
})
g("sizeScoutTrainer").addEventListener("input", function() {
	if(g("mirrorScoutTrainer").checked) {
		g("scout_trainer").style.transform = `scaleX(-${this.value}%) scaleY(${this.value}%)`;
	} else {
		g("scout_trainer").style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`;
	}
})

g("positionXscoutPokemon").addEventListener("input", function() {
	g("scout_pokemon").style.right = -parseInt(this.value) + "%";
})
g("positionYscoutPokemon").addEventListener("input", function() {
	g("scout_pokemon").style.top = (-parseInt(this.value)+25) + "%";
})
g("sizeScoutPokemon").addEventListener("input", function() {
	if(g("mirrorScoutPokemon").checked) {
		g("scout_pokemon").style.transform = `scaleX(-${this.value}%) scaleY(${this.value}%)`;
	} else {
		g("scout_pokemon").style.transform = `scaleX(${this.value}%) scaleY(${this.value}%)`;
	}
})

g("mirrorScoutTrainer").addEventListener("input", function() {
	if(g("scout_trainer").style.transform == "") {
		g("scout_trainer").style.transform = `scaleX(-1) scaleY(1)`;
	}

	if(this.checked) {
		g("scout_trainer").style.transform = g("scout_trainer").style.transform.replace("scaleX(","scaleX(-");
	} else {
		g("scout_trainer").style.transform = g("scout_trainer").style.transform.replace("scaleX(-","scaleX(");
	}
})

g("mirrorScoutPokemon").addEventListener("input", function() {
	if(g("scout_pokemon").style.transform == "") {
		g("scout_pokemon").style.transform = `scaleX(-1) scaleY(1)`;
	}

	if(this.checked) {
		g("scout_pokemon").style.transform = g("scout_pokemon").style.transform.replace("scaleX(","scaleX(-");
	} else {
		g("scout_pokemon").style.transform = g("scout_pokemon").style.transform.replace("scaleX(-","scaleX(");
	}
})

g("btn_reset_adjustments").addEventListener("click", resetImagesAdjustments)

g("btn_sliderMode").addEventListener("click", sliderMode)

g("btn_verticalMode").addEventListener("click", verticalMode)


/*
swap images of trainer
*/
g("btn_ex").addEventListener("click", function() {
	if(SYNCPAIR.trainer.images.ex.length > 1) {
		switchBetween("syncPair_trainerImageBase","syncPair_trainerImageEx");
	}
})


/*
the button beside the pokemon image
*/
g("btn_alter").addEventListener("click", function() {
	if(SYNCPAIR.pokemon.length > 1) {
		switchBetween("syncPair_pokemon","syncPair_pokemon2");
		switchBetween("syncPair_pokemonStats","syncPair_pokemon2Stats");

		if("pokemonType2" in SYNCPAIR && SYNCPAIR.pokemonType2 != "") {
			switchBetween("syncPair_typeImage","syncPair_type2Image");
		}
		if("pokemonWeakness2" in SYNCPAIR && SYNCPAIR.pokemonWeakness2 != "") {
			switchBetween("syncPair_weaknessImage","syncPair_weakness2Image");
		}
	}
	if(SYNCPAIR.skills.passives2.length > 0) {
		switchBetween("passives","passives2");
	}
	if(SYNCPAIR.actions.moves2.length > 0) {
		switchBetween("moves","moves2");
	}
	if(SYNCPAIR.actions.syncMove2.length > 0) {
		switchBetween("movesSync","moves2Sync");
	}
})

/*
dynamax button
*/
g("btn_dynamax").addEventListener("click", function() {
	g("moves").classList.toggle("hideMax");
	g("moves2").classList.toggle("hideMax");
	g("movesSync").classList.toggle("hideMax");
	g("moves2Sync").classList.toggle("hideMax");

	g("movesMAX").classList.toggle("hideMax");
})


/*
quit the "focus" mode
*/
g("elementFocus").addEventListener("click", function() {
	this.classList.add("hide");
})


g("syncLevel").addEventListener("input", function() {
	GRID.resetGrid(this.value);
})


g("selectedCellsContainer").addEventListener("click", function() {
	this.classList.add("hide");
})



/*-----------------------------------------------------------------------------
	INIT
-----------------------------------------------------------------------------*/

var SYNCPAIR = SYNCPAIRS[0];
var SYNCGRID = SYNCGRIDS[0];

if(CURRENT_SYNCPAIR.length > 0 && CURRENT_SYNCPAIR.length == CURRENT_SYNCGRID.length) {
	var rand = Math.floor(Math.random() * CURRENT_SYNCPAIR.length);

	SYNCPAIR = CURRENT_SYNCPAIR[rand];
	SYNCGRID = CURRENT_SYNCGRID[rand];
}


showSyncPair();
firstShowCodeSources();

changeTabTo(lastSelected);

changeMode();

generateSyncPairsOptionsHtml();
generateOptionsHtml(DATA.POKEMON,"data_pokemon_art");
generateOptionsHtml(DATA.BACKGROUNDS,"input_backgrounds");
generateOptionsHtml(DATA.GRID_TEMPLATES,"input_gridTemplates");


function init() {

	initSyncPairCodeEditor();
	initSyncGridCodeEditor();

	getSaveName();
	
	g("syncPairModeBtn").classList.add("syncModeBtnSelected");
	g("syncGridCodeEditor").classList.add("hide");
	g("grid").classList.add("hide");
	g("scout").classList.add("hide");
	g("selectedCellsContainer").classList.add("hide");
	g("screenshot").classList.add("hide");

	g("syncOptions").classList.add("hide");

	g("loadApp").classList.add("hide");
}

window.onload = init;