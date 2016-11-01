function initialize() {
var canvasWidth = 750;
var canvasHeight = 480;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 80, canvasWidth/canvasHeight, 0.1, 2000 );

var scale = 50;
var renderer = new THREE.WebGLRenderer();

renderer.setSize( canvasWidth, canvasHeight );
container = document.getElementById( 'Canvas' );
//document.body.appendChild( container );
container.appendChild( renderer.domElement );

var objects = [];

var goals = [];

var pointer;

var controls;

init();
render();

var toolbox;
var workspace;
}

var light;
var directionalLight;
function init(){
  
  camera.position.x = 50;
  camera.position.y = 200;
  camera.position.z = 1000;
  camera.lookAt(new THREE.Vector3(0,0,0));
  light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  directionalLight.position.set( 0, -5, 25);
  scene.add( directionalLight );
  renderer.setClearColor( 0x5a5a5a );

  controls = new THREE.TrackballControls( camera , renderer.domElement);
  controls.rotateSpeed = 1.0;
  controls.zoomSpeed = 1.2;
  controls.panSpeed = 0.8;
  controls.noZoom = false;
  controls.noPan = false;
  controls.staticMoving = true;
  controls.dynamicDampingFactor = 0.3;
  controls.keys = [ 65, 83, 68 ];
  controls.addEventListener( 'change', cameramoved );
  
}

function init2d(){
  
  camera.position.x = 400;
  camera.position.y = 320;
  camera.position.z = 450;
  camera.lookAt(new THREE.Vector3(400,320,0));
  light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  directionalLight.position.set( 0, -5, 25);
  scene.add( directionalLight );
  makeSystem(scale);
  controls = null;
}


function setupSettings(data){
  /*var newTB = JSON.parse(data);
  toolbox = newTB;*/

  workspace = Blockly.inject('blocklyDiv',
      {toolbox: toolbox2,
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
  console.log("Succefully retrived default toolbox");
  workspace.addChangeListener(updateTextCode);
}

function setUpInterface(){
  document.getElementById("myexamples").insertAdjacentHTML('beforeend', '<br>');
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("Spara exempel till databas");
  btn.onclick = function() { 
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xml);
    var name = prompt("Vad vill du kalla exemplet?");
    if(name == ""){
      alert("Du måste ge ett namn.");
    }else if(name){
      var open = prompt("Vill du att exemplet ska vara öppet för andra? (ja/nej)");
      if(open == "ja"){
        saveExample(userID, name, xml_text, '1');
      }else if(open == "nej"){
        saveExample(userID, name, xml_text, '0');
      }else{
        return;
      }
      
    }else{
      return;
    }
    
    };
  btn.appendChild(t);
  document.getElementById("myexamples").appendChild(btn);

  var btn2 = document.createElement("BUTTON");
  var t2 = document.createTextNode("Spara över");
  btn2.onclick = function() { 
    edit_Example();
    };
  btn2.appendChild(t2);
  document.getElementById("myexamples").appendChild(btn2);
  document.getElementById("myexamples").insertAdjacentHTML('beforeend', '<br>');

  var btn3 = document.createElement("BUTTON");
  var t3 = document.createTextNode("Ladda om exempellistan");
  btn3.onclick = function() { 
    //Reloads the examples to update
    document.getElementById("myexamples").innerHTML = "INLOGGAD";
    document.getElementById("myexamples").insertAdjacentHTML('beforeend', '<br>');
    setUpInterface();
    getExampleIds(userID, setupUserExamples);
    };
  btn3.appendChild(t3);
  document.getElementById("myexamples").appendChild(btn3);
  document.getElementById("myexamples").insertAdjacentHTML('beforeend', '<br>');

  var btn4 = document.createElement("BUTTON");
  var t4 = document.createTextNode("Definera ny verktygslåda");
  btn4.onclick = function() { 
    //sets up toolboxeditor
    setUpToolboxeditor();
    };
  btn4.appendChild(t4);
  document.getElementById("myexamples").appendChild(btn4);
  document.getElementById("myexamples").insertAdjacentHTML('beforeend', '<br><br>');
}


var editor;
function setUpToolboxeditor(){
  $('#toolboxEditor').empty();
  editor = Blockly.inject('toolboxEditor',
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
  console.log("setup the toolboxeditor");

  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("Spara verktygslåda");
  btn.onclick = function() { 
    saveToolbox(editor);
  };
  btn.appendChild(t);
  document.getElementById("toolboxEditor").appendChild(btn);
  Blockly.mainWorkspace = workspace;
}


var usersettings = [];
function setupUserSettings(data){
  var settings = JSON.parse(data);

  if(settings.length == 0){
    var t = document.createTextNode("Du har inte sparat några verktygslådor. Gör något kul, spara det och dela med dig!");
    document.getElementById("mysettings").appendChild(t);
  }else{
    for(var i = 0; i < settings.length; i++){
      getUserSetting(settings[i], defineUserSettings);
    }
  }
}

function defineUserSettings(data){

  var setting = JSON.parse(data);
  usersettings.push(setting);
  document.getElementById("mysettings").insertAdjacentHTML('beforeend', '<br>');
  //removeOld(example[2]);

  var btn = document.createElement("BUTTON");
  //btn.setAttribute("id", example[2]);
  var t = document.createTextNode("verktygslåda " + usersettings.length);
  btn.onclick = function() { 
    resetall();
    document.getElementById(":0").innerHTML = "";
    $('#blocklyDiv').empty();
    // THE BUGS ARE REAL!! BLOCKLY ÄR SÄMST!!!
    //toolbox = setting;
    workspace = Blockly.inject('blocklyDiv',
      {toolbox: setting,
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

  btn.appendChild(t);
  document.getElementById("mysettings").appendChild(btn);
  
  //console.log("Button made");

}

var grid = false;
var gridarray = []
function makeSystem(size){
  console.log("Making system");
  var xlength = 1000;
  var ylength = 1000;
  var xwidth = scale;
  var ywidth = scale;
  var x = new THREE.Vector3( xlength - scale / 2, 0- scale / 2, 0 );
  var x2 = new THREE.Vector3( -xlength- scale / 2, 0- scale / 2, 0 );
  var y = new THREE.Vector3(0- scale / 2,ylength- scale / 2,0);
  var y2 = new THREE.Vector3(0- scale / 2,-ylength- scale / 2,0);
  var xgeometry = new THREE.Geometry();
  xgeometry.vertices.push(x2);
  xgeometry.vertices.push(x);
  var ygeometry = new THREE.Geometry();
  ygeometry.vertices.push(y2);
  ygeometry.vertices.push(y);
  var material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });
  var xline = new THREE.Line( xgeometry, material );
  var yline = new THREE.Line( ygeometry, material );
  scene.add( xline );
  gridarray.push(xline);
  scene.add( yline );
  gridarray.push(yline);

  
  for (var i = 0; i < size; i++) {
    x = new THREE.Vector3(xlength- scale / 2, -ylength+i*xwidth- scale / 2, 0);
    x2 = new THREE.Vector3(-xlength- scale / 2, -ylength+i*xwidth- scale / 2, 0);
    y = new THREE.Vector3(-xlength+i*ywidth- scale / 2, ylength- scale / 2, 0);
    y2 = new THREE.Vector3(-xlength+i*ywidth- scale / 2, -ylength- scale / 2, 0);
  var xgeometry = new THREE.Geometry();
  xgeometry.vertices.push(x2);
  xgeometry.vertices.push(x);
  var ygeometry = new THREE.Geometry();
  ygeometry.vertices.push(y2);
  ygeometry.vertices.push(y);
  var material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });
  xline = new THREE.Line( xgeometry, material );
  yline = new THREE.Line( ygeometry, material );
  scene.add( xline );
  gridarray.push(xline);
  scene.add( yline );
  gridarray.push(yline);
  grid = true;
  }
}

function removeGrid(){
  for(var i = 0; i < gridarray.length; i++){
    scene.remove(gridarray[i]);
  }

}
