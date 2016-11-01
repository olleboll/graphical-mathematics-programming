var first = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_callnoreturn" id="l*T+!oPGEEXt,m(5[6Et" x="10" y="50"><mutation name="Start"></mutation><next><block type="controls_repeat_ext" id="g*PqQp@r1oDFmrH(#4M:"><value name="TIMES"><block type="math_number" id=")A`YIG*QU3b3{[kd(e`^"><field name="NUM">3</field></block></value><statement name="DO"><block type="graphics_move_object" id="=+V%Sb8g360zuu/0tJ=;"><field name="direction">up</field><value name="Object"><block type="variables_get" id="b[s*N*K9{Dlitg|J;2_F"><field name="VAR">Gul kub</field></block></value></block></statement></block></next></block><block type="procedures_defnoreturn" id="w^wYG^e@,.gn@in8mOqh" collapsed="true" x="90" y="190"><field name="NAME">Start</field><comment pinned="false" h="80" w="160">Skapar startläge</comment><statement name="STACK"><block type="variables_set" id="9%gvk/uW@@f/lTD(9`lR"><field name="VAR">pekare</field><value name="VALUE"><block type="graphics_pointer" id="vE6yp#SH`}m^iD-ZE||D"></block></value><next><block type="variables_set" id="oD2(hL(=C}I/;3:s~^Kz"><field name="VAR">Gul kub</field><value name="VALUE"><block type="graphics_make_cube" id="7a/44l:+[9)WDi2zU4ql"><value name="Length"><block type="math_number" id="OyiOHGQ5QBty=Wxtr!Tl"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="^RcH2HkK5QFx]Z+4PTv]"><value name="object"><block type="variables_get" id="41I6q^,ul2h!t{1b2B:i"><field name="VAR">Gul kub</field></block></value><value name="color"><block type="colour_picker" id="*RP98DI9g^),UYIW:}i["><field name="COLOUR">#ffff33</field></block></value></block></next></block></next></block></statement></block></xml>';
var second = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_callnoreturn" id="l*T+!oPGEEXt,m(5[6Et" x="170" y="30"><mutation name="Start"></mutation></block><block type="procedures_defnoreturn" id="w^wYG^e@,.gn@in8mOqh" collapsed="true" x="10" y="190"><field name="NAME">Start</field><comment pinned="false" h="80" w="160">Skapar startläge</comment><statement name="STACK"><block type="variables_set" id="9%gvk/uW@@f/lTD(9`lR"><field name="VAR">pekare</field><value name="VALUE"><block type="graphics_pointer" id="vE6yp#SH`}m^iD-ZE||D"></block></value><next><block type="variables_set" id="oD2(hL(=C}I/;3:s~^Kz"><field name="VAR">Gul kub</field><value name="VALUE"><block type="graphics_make_cube" id="7a/44l:+[9)WDi2zU4ql"><value name="Length"><block type="math_number" id="OyiOHGQ5QBty=Wxtr!Tl"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="^RcH2HkK5QFx]Z+4PTv]"><value name="object"><block type="variables_get" id="41I6q^,ul2h!t{1b2B:i"><field name="VAR">Gul kub</field></block></value><value name="color"><block type="colour_picker" id="*RP98DI9g^),UYIW:}i["><field name="COLOUR">#ffff33</field></block></value><next><block type="controls_repeat_ext" id="P;x|ef6{b}V;SL81#2uJ"><value name="TIMES"><block type="math_number" id="{C%+Z5vl%`p)P)+0Zhn)"><field name="NUM">10</field></block></value><statement name="DO"><block type="graphics_move_object" id="H31}M}xO,L/K]X|JQAHh"><field name="direction">up</field><value name="Object"><block type="variables_get" id="~ywEFR8.I.|v@JD[#F/*"><field name="VAR">pekare</field></block></value><next><block type="graphics_move_object" id="w-6U?XM}v@JUx%Nsn!!!"><field name="direction">right</field><value name="Object"><block type="variables_get" id="3T)1K8-VkqQt}QBfsG0?"><field name="VAR">pekare</field></block></value></block></next></block></statement><next><block type="variables_set" id="r+((A9yU}N]91E!vD/ZW"><field name="VAR">Vit kub</field><value name="VALUE"><block type="graphics_make_cube" id="*7++KKo^aqa[J}(1.Y6V"><value name="Length"><block type="math_number" id="*+Yc@nRXR_r#gmEOhGU^"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="E=}Iew*._vSiaO`uuUx_"><value name="object"><block type="variables_get" id="]@Rah.P6/#GCk0L7Z88c"><field name="VAR">Vit kub</field></block></value><value name="color"><block type="colour_picker" id="O!6Nn1%mP+}19~to(:TO"><field name="COLOUR">#ffffff</field></block></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>';
var third = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_callnoreturn" id="l*T+!oPGEEXt,m(5[6Et" x="170" y="30"><mutation name="Start"></mutation></block><block type="procedures_defnoreturn" id="w^wYG^e@,.gn@in8mOqh" collapsed="true" x="10" y="190"><field name="NAME">Start</field><comment pinned="false" h="80" w="160">Skapar startläge</comment><statement name="STACK"><block type="variables_set" id="9%gvk/uW@@f/lTD(9`lR"><field name="VAR">pekare</field><value name="VALUE"><block type="graphics_pointer" id="vE6yp#SH`}m^iD-ZE||D"></block></value><next><block type="variables_set" id="oD2(hL(=C}I/;3:s~^Kz"><field name="VAR">Gul kub</field><value name="VALUE"><block type="graphics_make_cube" id="7a/44l:+[9)WDi2zU4ql"><value name="Length"><block type="math_number" id="OyiOHGQ5QBty=Wxtr!Tl"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="^RcH2HkK5QFx]Z+4PTv]"><value name="object"><block type="variables_get" id="41I6q^,ul2h!t{1b2B:i"><field name="VAR">Gul kub</field></block></value><value name="color"><block type="colour_picker" id="*RP98DI9g^),UYIW:}i["><field name="COLOUR">#ffff33</field></block></value><next><block type="controls_repeat_ext" id="P;x|ef6{b}V;SL81#2uJ"><value name="TIMES"><block type="math_number" id="{C%+Z5vl%`p)P)+0Zhn)"><field name="NUM">10</field></block></value><statement name="DO"><block type="graphics_move_object" id="H31}M}xO,L/K]X|JQAHh"><field name="direction">up</field><value name="Object"><block type="variables_get" id="~ywEFR8.I.|v@JD[#F/*"><field name="VAR">pekare</field></block></value><next><block type="graphics_move_object" id="w-6U?XM}v@JUx%Nsn!!!"><field name="direction">right</field><value name="Object"><block type="variables_get" id="3T)1K8-VkqQt}QBfsG0?"><field name="VAR">pekare</field></block></value></block></next></block></statement><next><block type="variables_set" id="r+((A9yU}N]91E!vD/ZW"><field name="VAR">Vit kub</field><value name="VALUE"><block type="graphics_make_cube" id="*7++KKo^aqa[J}(1.Y6V"><value name="Length"><block type="math_number" id="*+Yc@nRXR_r#gmEOhGU^"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="E=}Iew*._vSiaO`uuUx_"><value name="object"><block type="variables_get" id="]@Rah.P6/#GCk0L7Z88c"><field name="VAR">Vit kub</field></block></value><value name="color"><block type="colour_picker" id="O!6Nn1%mP+}19~to(:TO"><field name="COLOUR">#ffffff</field></block></value><next><block type="controls_repeat_ext" id="AuG6-JB_Pm]ER*}(9vI["><value name="TIMES"><block type="math_number" id="5a.*E*K6h9z`N9gdY%2."><field name="NUM">5</field></block></value><statement name="DO"><block type="graphics_move_object" id="l|qj-G{l#7_V_!,p{zM_"><field name="direction">down</field><value name="Object"><block type="variables_get" id="WIo{#:[8R#ev(83;s+p{"><field name="VAR">pekare</field></block></value><next><block type="graphics_move_object" id="#@*q1Tsg6?]5.#4sw^6_"><field name="direction">right</field><value name="Object"><block type="variables_get" id=")T93lRPwe({XX(XiUN]C"><field name="VAR">pekare</field></block></value></block></next></block></statement><next><block type="variables_set" id="7630%-EfnqHvGL[vif^O"><field name="VAR">Orange kub</field><value name="VALUE"><block type="graphics_make_cube" id="TqaS8kH?IhhX6G}|80i|"><value name="Length"><block type="math_number" id="s]0],UxQT=-gCEj,MZSX"><field name="NUM">10</field></block></value></block></value><next><block type="graphics_color" id="TEBLeAS_e.Z58*pmCbau"><value name="object"><block type="variables_get" id="(;BT)nP0Le8O^@zqnl6m"><field name="VAR">Orange kub</field></block></value><value name="color"><block type="colour_picker" id="y{wugOlelG1Gk=uSau}F"><field name="COLOUR">#ff6600</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>';
var fourth;
var fifth;
var sixth;

function setRandomObjective(){
	clearGoals();
	for( var i = 0; i < objects.length; i++){
		var x  = Math.floor((Math.random() * 17) + 1) * scale;
		var y = Math.floor((Math.random() * 13) + 1) * scale;
		console.log("x: " + x/scale + ", y: " + y/scale);
		while(onWall(x/scale,y/scale)){
			console.log("0");
			x  = Math.floor((Math.random() * 17) + 1) * scale;
			y = Math.floor((Math.random() * 13) + 1) * scale;
		}
		makeGoals(x,y, objects[i]);
	}
}

function setUpGoals(){
	for(var i = 0; i < goals.length; i++){
		objects[i].addGoal(goals[i]);
	}
}

function loadStart(){
	resetall();
	var xml = Blockly.Xml.textToDom(first);
	Blockly.Xml.domToWorkspace(xml, workspace);
	runCode();
	setRandomObjective();
}

function loadLevel(start){
	resetall();
	var xml = Blockly.Xml.textToDom(start);
	Blockly.Xml.domToWorkspace(xml, workspace);
	runCode();
	setRandomObjective();
}
var obj;
function loadDefault(){
	console.log(obj.level);
	obj.setUpNewLevel(obj.level);
	}
var myWorkspace;
var ws1;
var ws2;
var ws3;
var ws4;
function Objectives(goals, walls, level){
	this.goals = goals;
	this.walls = walls;
	this.counter = 0;
	this.done = false;
	this.level = level;
	this.startTime = new Date();
	this.lastStart = this.startTime;
	this.endTime;
	this.tempEnd;
	this.score;
	this.times = [];
	obj = this;
	
	this.update = function(){
		for (var i = 0; i < objects.length; i++) {
			var obj = objects[i];
			var posx = obj.s.mesh.position.x;
			var posy = obj.s.mesh.position.y;
			if((posx == obj.goal.mesh.position.x) && (posy == obj.goal.mesh.position.y)){
				obj.goal.done = true;
				this.counter++;
			}
		};
		if(this.counter == objects.length && objects.length != 0){
			myWorkspace = getWorkSpace();

			if(this.level == 3){
				alert("BRA JOBBAT! Kan du flytta " + (this.level) + " kuber till sina färger?");
				ws3 = getWorkSpace();
			}else if(this.level == 4){
				alert("WOW! Du klarade alla uppgifter. Bra programmerat!");
				ws4 = getWorkSpace();
			}else if(this.level == 2){
				alert("BRA JOBBAT! Kan du flytta " + (this.level + 1) + " kuber till sina färger? De röda väggarna går inte att ta sig igenom!");
				ws2 = getWorkSpace();
			}else{
				alert("BRA JOBBAT! Kan du flytta " + (this.level + 1) + " kuber till sina färger?");
				ws1 = getWorkSpace();
			}
			this.done = true;
			this.level++;
			this.tempEnd = new Date();
			var time = this.tempEnd - this.lastStart;
			this.lastStart = this.tempEnd;
			time /= 1000;
			this.times.push(time);
			if(this.level == 2){
				submitResult(this.times, (this.level - 1));
				
			}else if (this.level == 5){
				this.endTime = new Date();
				score = this.endTime - this.startTime;
				score /= 1000;
				this.times.push(score);
				console.log(this.times);
				addResult(this.times, 4);
				
				this.level = 1;
				this.startTime = new Date();
				window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScOO0lHcZ-hwjYOwVhEzf4pelk61qt8Vm-Ck8qeJ3FMfc2aBw/viewform';
			}else{
				addResult(this.times, (this.level - 1));
				
			}
			
			this.setUpNewLevel(this.level);
		}else{
			this.counter = 0;
		}
	}

	this.setUpNewLevel = function(level){
		switch(level) {
      	case 1:
        	clearWalls();
        	loadLevel(first);
        	break;
      	case 2:
      		clearWalls();

        	loadLevel(second);
        	//skapa väggarna här
        	break;
      	case 3:
      		clearWalls();
        	makeWall(2,3,5,1);
        	makeWall(12,5,1,8);
        	loadLevel(third);
       		break;
      	case 4:
        	clearWalls();
        	makeWall(2,3,5,1);
    		makeWall(9,7,1,5);
    		makeWall(5,5,5,1);
    		makeWall(12,5,1,8);
    		loadLevel(third);
        	break;
      	case 6:
        	
        	clearWalls();
        	makeWall(9,7,1,5);
        	makeWall(9,7,1,5);
        	makeWall(5,5,5,1);
        	makeWall(15,2,5,1);
        	makeWall(12,10,1,8);
        	loadLevel(third);
        	break;
    	}
	}

	

}

function getWorkSpace(){
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToText(xml);
	console.log(xml_text);
	return xml_text;
}

function onWall(x,y){
	// Check to see so the goals dont get placed inside a wall
	for(var i = 0; i < walls.length; i++){
		var temp = walls[i];
		for(var j = 0; j < temp.xs; j++){
			if(x == temp.x + j){
				for(var k = 0; k < temp.ys; k++){
					if(y == temp.y + k){
						return true;
					}
				}
			}
		}
	}
	return false;
}

function makeWall(x,y,xs,ys){
	geometry = new THREE.BoxGeometry( scale * xs, scale * ys, scale);
    material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    m = new THREE.Mesh( geometry, material );
    var wall = {mesh:m, x:x, y:y, xs:xs, ys:ys};
    walls.push(wall);
    m.position.x = (x + (xs/2 - 0.5))  * scale;
    m.position.y = (y + (ys/2 - 0.5)) * scale;
    scene.add(wall.mesh);
    console.log("wall made at: "+x+", "+y);
}

function checkColx(o){
	if(walls.length == 0){
		return false;
	}
	var raycaster = new THREE.Raycaster();
	var pos = new THREE.Vector3( o.s.mesh.position.x, o.s.mesh.position.y, 5 );
	var dx;
	if(o.x < o.dx){
		dx = 1;
	}else if(o.x > o.dx){
		dx = -1;
	}else{
		return false;
	}
	var dir = new THREE.Vector3(dx, 0, 0);
	raycaster.set(pos,dir);
	var intersects = raycaster.intersectObjects( scene.children );
	//console.log(intersects[0]);
	if(intersects[0] != null){
		if(intersects[0].distance <=  scale/2){
			return true;
		}
	}

	return false;
}


function checkColy(o){
	if(walls.length == 0){
		return false;
	}
	var raycaster = new THREE.Raycaster();
	var pos = new THREE.Vector3( o.s.mesh.position.x, o.s.mesh.position.y, 5 );
	var dy;
	if(o.y < o.dy){
		dy = 1;
	}else if(o.y > o.dy){
		dy = -1;
	}else{
		return false;
	}
	var dir = new THREE.Vector3(0, dy, 0);
	raycaster.set(pos,dir);
	var intersects = raycaster.intersectObjects( scene.children );
	if(intersects[0] != null){
		if(intersects[0].distance <=  scale/2){
			return true;
		}
	}

	return false;
}

function makeGoals(x,y,o){
    geometry = new THREE.BoxGeometry( scale, scale, 5);
    material = new THREE.MeshPhongMaterial( { color: o.color } );
    m = new THREE.Mesh( geometry, material );
    var goal = {mesh:m, done:false};
    goals.push(goal);
    m.position.x = x;
    m.position.y = y;
    o.addGoal(goal);
    scene.add(goal.mesh);
    console.log("goal made at: "+x/scale+", "+y/scale);
    goals_made = true;
  }

function clearGoals(){

  for (var i = 0; i < goals.length; i++) {
        scene.remove(goals[i].mesh);
      };
  goals = [];
}

function clearWalls(){

  for (var i = 0; i < walls.length; i++) {
        scene.remove(walls[i].mesh);
      };
  walls = [];
}
var name;
function submitResult(s){
	name = prompt("Du har klarat första uppgiften STRÅLANDE! Skriv in ditt namn eller vad du kallas");
	var times = s.join();
	submitScore(name, times);
}

function addResult(s, lvl){
	var times = s.join();
	addScore(name, times, lvl);
}
var playerID;
function submitScore(name, time){
	var posting = $.post("php/getData.php", {
		name: name, time: time
	});

	posting.done(function(data){
		console.log("Entry inserted, ID: " + data);
		playerID = JSON.parse(data);
		submitWS(ws1);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function addWS(ws, lvl){
	console.log("Level: " + lvl);
	var wsf = ws;
	if(lvl == 2){
		wsf = ws2;
	}else if (lvl == 3) {
		wsf = ws3;
	}else if(lvl == 4){
		wsf = ws4;
	}else{
		wsf = ws1;
	}
	var posting = $.post("php/getData.php", {
		id: playerID, ws: wsf, lvl: lvl
	});

	posting.done(function(data){
		console.log(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function submitWS(ws){

	var posting = $.post("php/getData.php", {
		id: playerID, ws: ws
	});

	posting.done(function(data){
		console.log(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function addScore(id, times, lvl){
	var ws = getWorkSpace();
	var posting = $.post("php/getData.php", {
		id: playerID, times: times
	});

	posting.done(function(data){
		console.log("Entry updated");
		addWS(myWorkspace, lvl);
	});

	posting.fail(function(){
		alert("fail");
	});
}