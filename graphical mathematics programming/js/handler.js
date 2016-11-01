function resetall(){
  //console.log(Blockly.mainWorkspace);
  Blockly.mainWorkspace.clear();
  pointer = null;
  lastend = null;
}
function render(){
  requestAnimationFrame( render );

  for(var i = 0; i < objects.length; i++){
    objects[i].update();
  }
  if(controls != null){
     controls.update();
  }
  if(objectives != null && !objectives.done){
    //console.log(objectives);
    objectives.update();
  }
 
  renderer.render(scene, camera);
}



function cameramoved(){
  //console.log("Camera moved");
}

function resetCamera(){
  camera.position.x = 50;
  camera.position.y = 200;
  camera.position.z = 1000;
  camera.lookAt(new THREE.Vector3(0,0,0));
  camera.up = new THREE.Vector3(0,1,0);
}

var InfiniteFlag = false;
function doInfinite(flag){
  InfiniteFlag = flag;
}

function createCube(r){
  var c = new Shape(r,"cube",scale)
  objects.push(c);
  return c;
}

function createSphere(r){
	var s = new Shape(r,"sphere",scale)
	objects.push(s);
	return s;
}

function createPoint(){
  var s = new Point(0, 0, 0)
  objects.push(s);
  return s;
}
var lastend;
function createLine(dist, x,y,z){
  var start;
  if(lastend == null){
    start = {x:0,y:0,z:0};
  }else{
    start = {x:lastend.x,y:lastend.y,z:lastend.z};
  }
  var s = new Line(start, dist, x , y ,z , scale);
  s.setUpFunc();
  s.makeMesh();
  lastend = s.getEnd();
  objects.push(s);
  return s;
}

function createPointer(){
  var p = new Pointer();
  pointer = p;
  return p;
}

function setColor(o, color){
  o.assignColor(color);
}

function moveSphere(o,x,y,z){
	o.setmove(x,y,z, InfiniteFlag);
}

function moveObject(o,dir){
	o.setmove2(dir, InfiniteFlag);
}

function moveSpec(o, dir){
  o.set_sin_move(dir, 1, 10, InfiniteFlag);
}

function rotateObject(o,dir){
  o.setRotate2(dir, InfiniteFlag);
}

function combineMoves(object, combine){
  console.log("objekt: " + object);
}
function getCoordinate(object, axis){
  return object.get_Coordinate(axis);
}

function goGrid(){
  scene.remove(light);
  scene.remove(directionalLight);
  init2d();
}
function goNormal(){
  if(grid){
    removeGrid();
  }
  scene.remove(light);
  scene.remove(directionalLight);
  init();
}


/*function moveObject(object, dir){
  if(dir == "up"){
    object.mesh.y += 10;
  }
  if(dir == "right"){
    object.mesh.x += 10;
  }
  //And so on with each direction.
}*/


function showCode() {
      // Generate JavaScript code and display it.
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      document.getElementById('code').value = code;
      //document.getElementById("demo").innerHTML = code;
      //alert(code);
    }

var code;
function runCode() {
      // Generate JavaScript code and run it
      lastend = null;
      for (var i = 0; i < objects.length; i++) {
        scene.remove(objects[i].s.mesh);
      };
      
  
      objects = [];

      window.LoopTrap = 10000;
      Blockly.JavaScript.INFINITE_LOOP_TRAP =
          'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
      code = Blockly.JavaScript.workspaceToCode(workspace);
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      try {
        // runs the code inside the workspace
        eval(code);

        if(objectives != null){
          objectives.done = false;
          objectives.counter = 0;
          setUpGoals();
        }
      } catch (e) {
        alert(e);
      }

    }

function runWrittenCode(){
  var manualcode = "function ExecuteCode(){\n ";
  manualcode += document.getElementById('code').value;
  manualcode += "\n } \n ExecuteCode();";
  lastend = null;
  for (var i = 0; i < objects.length; i++) {
    scene.remove(objects[i].s.mesh);
  };
  
  objects = [];
  eval(manualcode);
}

function updateTextCode(){
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('code').value = code;
}


function setUserID(id){
  var userid = JSON.parse(id);
  userID = userid;
}

function saveToolbox(toolbox){
// Detta går att använda för att få ut vilka blocktyper som ligger i workspacet!
// På så viss kan man skapa egna verktygslådor genom att dra ut de block man vill kunna använda sig av
// var str2 = str.split('block type="');
  var xml_init = Blockly.Xml.workspaceToDom(toolbox);
  var xml_text = Blockly.Xml.domToText(xml_init);
  console.log(xml_text);
  var str = xml_text.split('block type="');
  console.log(str);
  var tstring = "";
  for(var i = 1; i < str.length; i++){
    var temp = str[i];
    n = 0;
    while (temp[n] != '"'){
      tstring += temp[n];
      n++;
    }
    tstring += ",";
    console.log(tstring);
  }

  var blocks = tstring.split(",");
  blocks.splice(-1,1);
  console.log(blocks);

  var xml = "<xml>";
  for(var i = 0; i < blocks.length; i++){
    xml += '<block type="';
    xml += blocks[i];
    xml += '"></block>';
  }
  xml += "</xml>";
  console.log(xml);

  var settings = [];
  settings[0] = xml;
  settings[1] = '[50,200,1000]';

  saveSettings(settings);

}
// Trasig för att blockly är sämst
// går bara återladda standradlådan en gång sen går det inte byta igen.. 
//vet inte hur jag ska lösa. Idt på blocklytreeroot (?) får nytt id när den görs om.
function resetToolbox(){
  resetall();
  document.getElementById(":0").innerHTML = "";
  $('#blocklyDiv').empty();
  // THE BUGS ARE REAL!! BLOCKLY ÄR SÄMST!!!
  //toolbox = setting;
  workspace = Blockly.inject('blocklyDiv',
    {toolbox: toolbox,
   grid:
      {spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true}, 
   zoom:
      {controls: true,
      wheel: false,
      startScale: 0.8,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2},
      trashcan: true});
    console.log("settings button clicked ");
    Blockly.mainWorkspace = workspace;
    workspace.addChangeListener(updateTextCode);

    };
