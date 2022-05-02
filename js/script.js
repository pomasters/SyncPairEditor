/*

Check at the end of file for init

*/

import {BACKGROUNDS,ROLES,GENDER,CATEGORIES,TYPES,POKEMON} from './data.js';
import {SYNCPAIRS} from './syncpairs.js';


const MAX_NUMBER_STARS = 6;
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
			g("syncPair_pokemonName").innerHTML += gender(SYNCPAIR.pokemonGender);
			g("syncPair_pokemonStats").innerHTML = statsAre(SYNCPAIR.pokemon[0].stats, SYNCPAIR.pokemon[0].stats);
		}

		g("syncPair_trainerName").innerHTML = SYNCPAIR.trainer.name;

		g("syncPair_rarity").innerHTML = rarity(SYNCPAIR.rarity);

		g("syncPair_roleImage").src = roleImage(SYNCPAIR.role);
		g("syncPair_typeImage").src = typeImage(SYNCPAIR.pokemonType);
		g("syncPair_weaknessImage").src = typeImage(SYNCPAIR.pokemonWeakness);

		g("moves").innerHTML = movesAre(SYNCPAIR.actions.moves, "move_classic");
		g("movesSync").innerHTML = movesAre(SYNCPAIR.actions.syncMove, "move_sync");

		g("passives").innerHTML = skillsAre(SYNCPAIR.skills.passives, "skill_passive");
		g("luckySkills").innerHTML = skillsAre(SYNCPAIR.skills.lucky, "skill_lucky");
		g("themeSkills").innerHTML = skillsAre(SYNCPAIR.skills.themes, "skill_theme");

		showSyncPair2();

		addFocusEvent();
		noDragImages();
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
	g("syncPair_typeImage").src = emptyImg;
	g("syncPair_weaknessImage").src = emptyImg;

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

	g("btn_alter").classList.add("hide");

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

/*
Generates the html code for n <img> stars
*/
function rarity(n) {
	var o = "";
	for(var i=1; i<=MAX_NUMBER_STARS-1; i++) {
		if (i<=n) { o += '<img src="./images/star.png">'; }
		else { o += '<img src="./images/star2.png">'; }
	}
	if(n>=MAX_NUMBER_STARS) { o += '<img src="./images/star_ex.png">'; }
	return o;
}

/*
Cheks if r is a role and return the path of the image
*/
function roleImage(r) {
	if(ROLES.indexOf(r.toLowerCase()) > -1) {
		return `./images/role_${r.toLowerCase().replace(" ","_")}.png`;
	} else { return "./images/empty.png" }
}

/*
Cheks if t is a type and return the path of the image
*/
function typeImage(t) {
	if(TYPES.indexOf(t.toLowerCase()) > -1) {
		return `./images/type_${t.toLowerCase()}.png`;
	} else { return "./images/empty.png" }
}

/*
Cheks if t is a type and return the path of the image
*/
function moveTypeImage(t) {
	if(TYPES.indexOf(t.toLowerCase()) > -1) {
		return `./images/move_${t.toLowerCase()}.png`;
	} else { return "./images/empty.png" }
}

/*
Cheks if t is a type and return the path of the image
*/
function syncMoveTypeImage(t) {
	if(TYPES.indexOf(t.toLowerCase()) > -1) {
		return `./images/sync_${t.toLowerCase()}.png`;
	} else { return "./images/empty.png" }
}

/*
Returns the html code for the <img> of the gender g
*/
function gender(g) {
	if(GENDER.indexOf(g.toLowerCase()) > -1) {
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
	if(stats.hp == 0 && stats.atk == 0 && stats.def == 0 && 
		stats.spa == 0 && stats.spd == 0 && stats.spe ==0) {
		g("stats").classList.add("hide");
	} else {
		g("stats").classList.remove("hide");
	}

	return `<p class="${compareStat(stats.hp, stats2.hp)}">${stats.hp}</p>
			<p class="${compareStat(stats.atk, stats2.atk)}">${stats.atk}</p>
			<p class="${compareStat(stats.def, stats2.def)}">${stats.def}</p>
			<p class="${compareStat(stats.spa, stats2.spa)}">${stats.spa}</p>
			<p class="${compareStat(stats.spd, stats2.spd)}">${stats.spd}</p>
			<p class="${compareStat(stats.spe, stats2.spe)}">${stats.spe}</p>`

	/*
	compare stat1 and stat2 and return the adequate class name that describes their relation
	*/
	function compareStat(s, s2) {
		if(s==s2) { return ""; }
		if(s>s2) { return "stat_up"; } else { return "stat_down"; }
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

	return `<div class="move ${moveOption} bg_${move.type.toLowerCase()} elementF">
				<div class="move_basics icon_${move.type.toLowerCase()}">
					<p class="move_name">${move.name}</p>

					<div class="move_gauge_uses">
						<div class="move_gauge ${hideOrNot(move.gauge)}">${gauges(move.gauge)}</div>
						<p class="move_uses ${hideOrNot(move.uses)}">${uses(move.uses)}</p>
					</div>

					<div class="move_user bg_${move.type.toLowerCase()}">
						<img src="${moveUser(move.user)}">
					</div>
				</div>

				<div class="move_details_description">
					<div class="move_details">
						<div style="border-bottom: 6px solid var(--${move.type.toLowerCase()});"><p>Type</p><p class="move_type"><img src="${typeImage(move.type)}">${move.type}</p></div>
						<div><p>Category</p><p class="move_category">${category(move.category)}</p></div>
						<div><p>Power</p><p class="move_power">${move.power}</p></div>
						<div><p>Accuracy</p><p class="move_accuracy">${move.accuracy}</p></div>
						<div><p>Target</p><p class="move_target">${move.target}</p></div>
						<div><p>Effect</p><p class="move_effect">${move.effect}</p></div>
					</div>

					<p class="move_description">${move.description}</p>
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
		if(CATEGORIES.indexOf(c.toLowerCase()) > -1) {
			return `<img src="./images/category_${c.toLowerCase()}.png">`;
		} else { return '<img src="./images/empty.png">' }
	}

	/*
	Returns the path of the image of the user u
	*/
	function moveUser(u) {
		if(u.toLowerCase() == "trainer" && SYNCPAIR.trainer.images.base.length > 0) { return SYNCPAIR.trainer.images.base; }
		if(u.toLowerCase() == "pokemon" && SYNCPAIR.pokemon.length > 0) { return SYNCPAIR.pokemon[0].image;	}
		return "./images/empty.png"
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

	/*if the skill is a "type" (fire, ice, ..)*/
	if(TYPES.indexOf(skill.name.toLowerCase()) > -1) { themeType= "bg_"+skill.name.toLowerCase(); }

	return `<div class="skill ${option} ${themeType} elementF">
				<p class="skill_name">${skill.name}</p>
				<p class="skill_description">${skill.description}</p>
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
		var option = `<option value="${i}">${SYNCPAIRS[i].trainer.name} & ${SYNCPAIRS[i].pokemon[0].name}</option>`;
		

		/*disable <option> if name is "--" */
		if(SYNCPAIRS[i].pokemon[0].name == "--") {
			option = `<option disabled>${SYNCPAIRS[i].trainer.name}</option>`
		}

		/*if last two elements, just show the trainer name, no pokemon*/
		if(i==SYNCPAIRS.length-1 || i==SYNCPAIRS.length-2) {
			option = `<option value="${i}" selected>${SYNCPAIRS[i].trainer.name}</option>`
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

	node.classList.add("screenshotXL");

	var size = node.getBoundingClientRect();
	var w = size.width;
	var h = size.height;

	domtoimage.toPng(node,{width: w,height: h})
	.then(function (dataUrl) {
		var img = new Image();
		img.src = dataUrl;

		g("screenshot").innerHTML = `<p>GENERATED IMAGE :</p>`;
		g("screenshot").appendChild(img);

		g('main').classList.remove("screenshotXL");

		alert("Image generated. Scroll down the page to see your image.")
	})
	.catch(function (error) {
		g('main').classList.remove("screenshotXL");
		alert("Error. Make sure to not have a custom image link in your code before using this button.")
		console.log(error);
	});

}



/*-----------------------------------------------------------------------------
	TEXT EDITOR
-----------------------------------------------------------------------------*/

var SOURCE_SYNCPAIR_VALUE;

/*
put the code inside the textarea "source_syncpair" 
before applying codemirror on it
*/
function firstshowSyncPairSource() {
	g("source_syncpair").value = JSON.stringify(SYNCPAIR, null, "  ");
	SOURCE_SYNCPAIR_VALUE = g("source_syncpair").value;
}


function showSyncPairFromSource() {
	try {
		SYNCPAIR = JSON.parse(SOURCE_SYNCPAIR_VALUE)
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


//https://codemirror.net/
var CODE_MIRROR_EDITOR;

function initTextEditor(){
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
		theme: "shadowfox"
	});

	/*
	fold some parts of the code of the template demo
	*/
	CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(28, 0));//pokemon2
	CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(57, 0));//passives2
	CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(71, 0));//passiveMaster
	CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(176, 0));//moves2
	CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(230, 0));//syncMove2
	CODE_MIRROR_EDITOR.foldCode(CodeMirror.Pos(245, 0));//movesMAX
	
	CODE_MIRROR_EDITOR.on('change', (editor) => {
		SOURCE_SYNCPAIR_VALUE = editor.doc.getValue();
		setTimeout(showSyncPairFromSource, DELAY_UPDATE_DISPLAY);
	});
}

function upTextEditorValueFromSyncPairOBJ() {
	SOURCE_SYNCPAIR_VALUE = JSON.stringify(SYNCPAIR, null, "  ");
	CODE_MIRROR_EDITOR.doc.setValue(SOURCE_SYNCPAIR_VALUE);	
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


/*
syncpairs selection
*/
g("input_sync_pairs").addEventListener("input", function() {
	SYNCPAIR = SYNCPAIRS[this.value];
	upTextEditorValueFromSyncPairOBJ();
	showSyncPair();
})

/*
change mode button
*/
g("btn_changeMode").addEventListener("click", function() {
	changeMode();
	this.classList.toggle("optionSelected");
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
g("btn_genimage").addEventListener("click", function() {
	screenshot()
})

/*
help button
*/
g("btn_help").addEventListener("click", function() {
	g("elementFocus").innerHTML = g("help").outerHTML;
	g("elementFocus").classList.remove("hide");
})


/*
backgrounds selection
*/
g("input_backgrounds").addEventListener("input", function() {
	SYNCPAIR.bg = `./images/bg/${BACKGROUNDS[this.value]}.jpg`;
	upTextEditorValueFromSyncPairOBJ();
	showSyncPair();
})

/*
click on the background itself to change the display
*/
g("syncPair_bg").addEventListener("click", function() {
	if(this.style.clipPath!="none") {
		this.style.clipPath="none";
		this.style.opacity="60%";
		this.style.filter="none";
	} else {
		this.style.clipPath="polygon(90% 0, 0% 80%, 0 0%)";
		this.style.opacity="80%";
		this.style.filter="blur(2px)";
	}
})


/*
button to import background image
*/
g("file_img_sync_bg").addEventListener("input", function() {
	SYNCPAIR.bg = URL.createObjectURL(this.files[0]);
	upTextEditorValueFromSyncPairOBJ();
	showSyncPair();
})

/*
button to import trainer image 1
*/
g("file_img_sync_trainer").addEventListener("input", function() {
	SYNCPAIR.trainer.images.base = URL.createObjectURL(this.files[0]);
	upTextEditorValueFromSyncPairOBJ();
	showSyncPair();
})

/*
button to import trainer image 2
*/
g("file_img_sync_trainer2").addEventListener("input", function() {
	SYNCPAIR.trainer.images.ex = URL.createObjectURL(this.files[0]);
	upTextEditorValueFromSyncPairOBJ();
	showSyncPair();
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
	showSyncPair();
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
	showSyncPair();
})


/*
datalist containing all pokemon options
*/
g("input_pokemon_art").addEventListener("input", function() {
	var pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+this.value+".png";

	if(isNaN(this.value) || this.value =="") {//if input is not number or ""
		g("syncPair_pokemonImage").src = "./images/substitute.png";
		g("syncPair_pokemonFormName").innerHTML = "";
		g("syncPair_pokemonName").innerHTML = "???";
	}
	else {
		if(this.value < 0 || this.value >= POKEMON.length ) {//if number <0 or >898 (#calyrex)
			g("syncPair_pokemonImage").src = "./images/substitute.png";
			g("syncPair_pokemonFormName").innerHTML = "";
			g("syncPair_pokemonName").innerHTML = "???";
		} else {
			if(SYNCPAIR.pokemon.length == 0) {
				SYNCPAIR.pokemon.push({
					"name" : POKEMON[this.value],
					"formName" : "",
					"stats" : {"hp":0,"atk":0,"def":0,"spa":0,"spd":0,"spe":0},
					"image" : pokeUrl
				})
			} else {
				SYNCPAIR.pokemon[0].name = POKEMON[this.value];
				SYNCPAIR.pokemon[0].formName = "";
				SYNCPAIR.pokemon[0].image = pokeUrl;
			}
			upTextEditorValueFromSyncPairOBJ();
			showSyncPair();
		}
	}
})


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



/*-----------------------------------------------------------------------------
	INIT
-----------------------------------------------------------------------------*/

var SYNCPAIR = SYNCPAIRS[SYNCPAIRS.length-1];//TEMPLATE (FULL)

showSyncPair();
firstshowSyncPairSource();

changeTabTo(lastSelected);

changeMode();

generateSyncPairsOptionsHtml();
generateOptionsHtml(POKEMON,"data_pokemon_art");
generateOptionsHtml(BACKGROUNDS,"input_backgrounds");

window.onload = initTextEditor;