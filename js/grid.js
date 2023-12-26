export function cellPropertiesBasedOn(divContainer) {
	/*
	var container_width = Math.floor(parseInt(divContainer.offsetWidth));
	var container_height = Math.floor(parseInt(divContainer.offsetHeight));
	*/

	/* Don't depend on the divContainer in this case,
	because there are two div size with game mode and expand mode*/
	var container_width = 768;
	var container_height = 1408;

	var cell_width = Math.floor(container_width/7);
	var cell_ratio = 120/138;
	var cell_height = Math.floor(cell_width * cell_ratio);
	var cell_margin_left = container_width/2 - cell_width/2;
	var cell_margin_top = container_height/2 - cell_height/2;

	return {
		"width" : cell_width,
		"ratio" : cell_ratio,
		"height" : cell_height,
		"marginLeft" : cell_margin_left,
		"marginTop" : cell_margin_top
	}
}


export function genGrid(sgrid) {
	var gridDiv = document.getElementById("cells");

	var cellProperties = cellPropertiesBasedOn(gridDiv);

	gridDiv.style.setProperty('--cellWidth', cellProperties.width+'px');
	gridDiv.style.setProperty('--cellHeigth', cellProperties.height+'px');
	gridDiv.style.setProperty('--cellRatio', cellProperties.ratio);

	var centerCell = {
		id: 0,
		x: 0,
		y: 0,
		name: 'Pokemon',
		description: '',
		energy: 0,
		orb: 0,
		level: 0,
		color: 'origin',
		icon: 'origin'
	}

	gridDiv.innerHTML = createCell(centerCell, cellProperties);

	for(var i=0; i<sgrid.length; i++) {
		gridDiv.innerHTML += createCell(sgrid[i], cellProperties)
	}

	Array.from(document.getElementsByClassName("cell")).forEach(e => e.addEventListener("click", function() {
		clickCell(this)
	}));
	Array.from(document.getElementsByClassName("cell")).forEach(e => e.addEventListener("mouseover", function() {
		showCell(this)
	}));

	document.getElementById("energyLeft").innerHTML = "60";
	document.getElementById("orbUsed").innerHTML = "0";
	document.getElementById("syncLevel").children[2].selected = 'selected';

	document.getElementById("cell0").addEventListener("click", function() {
		document.getElementById("selectedCellsContainer").classList.toggle("hide");
	})
	document.getElementById("cell0").children[1].innerHTML = `<div class="centerCellAnimation"></div><img src="${document.getElementById("syncPair_pokemonImage").src}">`;
	document.getElementById("selectedCellsPokemon").innerHTML = `${document.getElementById("syncPair_trainerName").textContent} & ${document.getElementById("syncPair_pokemonName").textContent}`;

	document.getElementById("selectedCellsContainer").classList.add("hide");

	resetGrid(5);
}


export function createCell(cell, cellDimensions) {

	var x = cellDimensions.width - (cellDimensions.width/4);
	var y = cellDimensions.height;

	var adjustY = 0;

	if(cell.x > 0) { adjustY = (y/2) * Math.abs(cell.x); }
	if(cell.x < 0) { adjustY = -(y/2) * Math.abs(cell.x); }

	return `<div class="cell" id="cell${cell.id}" data-cellid="${cell.id}" data-cellname="${cell.name}" data-cellcolor="${cell.color.toLowerCase()}" style="left:${x * cell.x + cellDimensions.marginLeft}px;top:${(y * cell.y) + adjustY + cellDimensions.marginTop}px;">
				<div class="${"grid_color_" + cell.color.toLowerCase()}"></div>
				<div class="${"grid_icon_" + cell.icon.toLowerCase()}"></div>
				<p class="cellName">${cell.name}</p>
				<p class="cellDescription">${cell.description}</p>
				<p class="cellEnergy">${cell.energy}</p>
				<p class="cellLevel">${cell.level}</p>
				<p class="cellOrb">${cell.orb}</p>
			</div>`
}


export function clickCell(cell) {
	if(cell.id == "cell0") return;

	if(cell.classList.contains("selectedCell")) {
		unselect(cell)
	} else {
		select(cell)
	}
	energyLeft();
	updateSelectedCells();
}


export function select(cell) {
	cell.classList.add("selectedCell");

	cell.children[0].classList = cell.children[0].classList.toString() + "2";
	cell.children[0].innerHTML = `<div class="grid_light"></div>`;

	document.getElementById("energyLeft").innerHTML = parseInt(document.getElementById("energyLeft").innerHTML) - parseInt(cell.children[4].innerHTML);
	document.getElementById("orbUsed").innerHTML = parseInt(document.getElementById("orbUsed").innerHTML) + parseInt(cell.children[6].innerHTML);
}


export function unselect(cell) {
	cell.classList.remove("selectedCell");

	cell.children[0].classList = cell.children[0].classList.toString().replace("2","");
	cell.children[0].innerHTML = "";

	document.getElementById("energyLeft").innerHTML = parseInt(document.getElementById("energyLeft").innerHTML) + parseInt(cell.children[4].innerHTML);
	document.getElementById("orbUsed").innerHTML = parseInt(document.getElementById("orbUsed").innerHTML) - parseInt(cell.children[6].innerHTML);
}


export function showCell(cell) {
	if(cell.id == "cell0") return;

	document.getElementById("detailedCell").classList = cell.children[0].classList.toString().replace("grid_color_","cell_").replace("2","")
	document.getElementById("detailedCell").innerHTML = cell.innerHTML;
}


export function updateSelectedCells() {
	var selectedCells = [];

	Array.from(document.getElementsByClassName("selectedCell")).forEach(c => 
		selectedCells.push(`<div class="cell_${c.dataset.cellcolor}">${c.innerHTML}</div>`)
	)

	document.getElementById("selectedCells").innerHTML = selectedCells.sort().join("");

	if(selectedCells.length > 0) {
		document.getElementsByClassName("grid_icon_origin")[0].classList.add("grid_icon_origin_animation");
	} else {
		document.getElementsByClassName("grid_icon_origin")[0].classList.remove("grid_icon_origin_animation");
	}
}


export function resetGrid(syncLevel) {
	Array.from(document.getElementsByClassName("cell")).forEach(function(cell){
		if(parseInt(cell.children[5].innerHTML) > syncLevel) {
			if(cell.classList.contains("selectedCell")) {
				unselect(cell);
			}			
			cell.classList.add("lockedCell");
			cell.children[1].classList.add("grid_icon_lock");
		} else {
			cell.classList.remove("lockedCell");
			cell.children[1].classList.remove("grid_icon_lock");
		}
	})
	energyLeft();
	updateSelectedCells();
}


function energyLeft() {
	if(parseInt(document.getElementById("energyLeft").innerHTML) < 0) {
		document.getElementById("energyLeft").classList.add("cellEnergyNegative");
	} else {
		document.getElementById("energyLeft").classList.remove("cellEnergyNegative");
	}
}