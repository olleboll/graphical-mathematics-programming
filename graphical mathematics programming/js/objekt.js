
function Shape(size, type, scale){
  var m;
  var geometry;
  var material;
  this.scale = scale;
  if(type == "sphere"){
    this.r = size;
    this.flag = false;
    this.color = 0x0000ff;
    geometry = new THREE.SphereGeometry( this.r/20*this.scale, 16, 16 );
    material = new THREE.MeshPhongMaterial( {color: this.color} );
    m = new THREE.Mesh( geometry, material );
  }
  if(type == "cube"){
    this.s = size;
    this.flag = false;
    this.color = 0xff0000;
    geometry = new THREE.BoxGeometry( this.s/10*this.scale, this.s/10*this.scale, this.s/10*this.scale );
    material = new THREE.MeshPhongMaterial( { color: this.color } );
    m = new THREE.Mesh( geometry, material );
  }
  this.s = {mesh: m};
  if(pointer != null){
    this.x = pointer.x;
    this.y = pointer.y;
    this.z = pointer.z;
    this.dx = pointer.x;
    this.dy = pointer.y;
    this.dz = pointer.z;
  }else{
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.dx = 0;
    this.dy = 0;
    this.dz = 0;
  }
  
  m.position.x = this.x;
  m.position.y = this.y;
  m.position.z = this.z;
  
  scene.add( this.s.mesh );

  this.speedx = 2;
  this.speedy = 2;
  this.speedz = 2;
  this.rotdx = {angle : 0};
  this.rotdy = {angle : 0};
  this.rotdz = {angle : 0};
  this.rotddx = 0;
  this.rotddy = 0;
  this.rotddz = 0;
  this.rotx = 0;
  this.roty = 0;
  this.rotz = 0;

  this.ghostX = this.x;
  this.ghostY = this.y;
  this.ghostZ = this.z;
  
  this.moves = [];
  this.anglespeed = 0.03;
  this.rotations = [];

  this.goal = null;
  this.done = false;
  
  this.get_Coordinate = function(axis){
    //console.log(axis);
    switch(axis){
    case "X":
        //console.log(this.ghostX/ scale);
        return this.ghostX/ scale;
        break;
    case "Y":
        //console.log(this.ghostY/ scale);
        return this.ghostY/ scale;
        break;
    case "Z":
        //console.log(this.ghostZ/ scale);
        return this.ghostZ / scale;
        break;
      }
  }

  this.setmove = function(x,y,z, flag) {
    var move = {coord: [x,y,z], loop: flag};
    this.moves.push(move);
  };

  this.setmove2 = function(dir, flag) {

    var x = 0;
    var y = 0;
    var z = 0;
    var cord = [x,y,z]
    var dist = scale;
    switch(dir) {
    case "up":
        cord = [x,dist,z];
        this.ghostY+=dist;
        break;
    case "down":
        cord = [x,-dist,z];
        this.ghostY-=dist;
        break;
    case "right":
        cord = [dist,y,z];
        this.ghostX+=dist;
        break;
    case "left":
        cord = [-dist,y,z];
        this.ghostX-=dist;
        break;
    case "in":
        cord = [x,y,-dist];
        this.ghostZ-=dist;
        break;
    case "out":
        cord = [x,y,dist];
        this.ghostZ+=dist;
        break;
      }
    var move = {coord: cord, loop: flag, color: null};
    if(this.moves.length == 1){
      move.color = this.color;
    }  
    this.moves.push(move);
  };

  this.set_sin_move = function(func, waves, Amp, flag){
    //SINUS MOVE TEST
    var cord = [0,0,0]
    var dist = scale;
    var stepsize = 1 * this.speedx;
    switch(func) {
    case "x":
    	var x = this.x;
    	var y = this.y;
    	for(var i = 1; i < ((waves * 2)* Math.PI); i++){
    		y = Math.round(Amp*Math.sin(i)) * stepsize;
		    cord = [stepsize * Amp,y,0];
		    //console.log(cord);
		    var move = {coord: cord, loop: flag, color: null};
			if(this.moves.length == 1){
			  move.color = this.color;
			}  
    		this.moves.push(move);
    	}
        break;
    case "y":
    	var x = this.x;
    	var y = this.y;
    	for(var i = 1; i < ((waves * 2)* Math.PI); i++){
    		x = Math.round(Amp*Math.sin(i)) * stepsize;
		    cord = [x,stepsize * Amp,0];
		    //console.log(cord);
		    var move = {coord: cord, loop: flag, color: null};
			if(this.moves.length == 1){
			  move.color = this.color;
			}  
    		this.moves.push(move);
    	}
        break;
    case "-y":
    	var x = this.x;
    	var y = this.y;
    	for(var i = 1; i < ((waves * 2)* Math.PI); i++){
    		x = Math.round(Amp*Math.sin(i)) * stepsize;
		    cord = [x,-stepsize * Amp,0];
		    //console.log(cord);
		    var move = {coord: cord, loop: flag, color: null};
			if(this.moves.length == 1){
			  move.color = this.color;
			}  
    		this.moves.push(move);
    	}
        break;
    case "-x":
    	var x = this.x;
    	var y = this.y;
    	for(var i = 1; i < ((waves * 2)* Math.PI); i++){
    		y = Math.round(Amp*Math.sin(i)) * stepsize;
		    cord = [-stepsize * Amp,y,0];
		    //console.log(cord);
		    var move = {coord: cord, loop: flag, color: null};
			if(this.moves.length == 1){
			  move.color = this.color;
			}  
    		this.moves.push(move);
    	}
        break;
      }
  }

  this.update = function(){
    this.move();
    this.rotate2();
    this.updateMove();
    this.updateRotate();
  };


  this.rotate = function(){
    
    var sign;
    if(this.rotdx.flag){
      sign = this.rotdx.angle / Math.abs(this.rotdx.angle);
      this.s.mesh.rotateX(sign * this.anglespeed);
    }else if(this.rotx != this.rotdx.angle){
      if(this.rotx < this.rotdx.angle){
        this.s.mesh.rotateX(this.anglespeed);
        this.rotx ++;
      }else{
        this.s.mesh.rotateX(-this.anglespeed);
        this.rotx --;
      }

    }
    
    if(this.rotdy.flag){
      sign = this.rotdy.angle / Math.abs(this.rotdy.angle);
      this.s.mesh.rotateY(sign * this.anglespeed);
    }else if(this.roty != this.rotdy.angle){
      if(this.roty < this.rotdy.angle){
        this.s.mesh.rotateY(this.anglespeed);
        this.roty ++;
      }else{
        this.s.mesh.rotateY(-this.anglespeed);
        this.roty--;
      }
    }
    
    if(this.rotdz.flag){
      sign = this.rotdz.angle / Math.abs(this.rotdz.angle);
      this.s.mesh.rotateZ(sign * this.anglespeed);
    }else if(this.rotz != this.rotdz.angle){
      if(this.rotz < this.rotdz.angle){
        this.s.mesh.rotateZ(this.anglespeed);
        this.rotz ++;
      }else{
        this.s.mesh.rotateZ(-this.anglespeed);
        this.rotx--;
      }
    }
    
  }

  this.rotate2 = function(){

    if(this.rotx != this.rotddx){
      if(this.rotx < this.rotddx){
        this.s.mesh.rotateX(this.anglespeed);
        this.rotx ++;
      }else{
        this.s.mesh.rotateX(-this.anglespeed);
        this.rotx --;
      }

    }
    
    if(this.roty != this.rotddy){
      if(this.roty < this.rotddy){
        this.s.mesh.rotateY(this.anglespeed);
        this.roty ++;
      }else{
        this.s.mesh.rotateY(-this.anglespeed);
        this.roty--;
      }
    }
    
    if(this.rotz != this.rotddz){
      if(this.rotz < this.rotddz){
        this.s.mesh.rotateZ(this.anglespeed);
        this.rotz ++;
      }else{
        this.s.mesh.rotateZ(-this.anglespeed);
        this.rotz--;
      }
    }
    
  }

  this.move = function(){
    var sx = this.speedx;
    var sy = this.speedy;
    if(checkColx(this)){
      this.speedx = 0;
      this.dx = this.x;
    }
    if(checkColy(this)){
      this.speedy = 0;
      console.log(this.y);
      this.dy = this.y;
    }

    if(this.x != this.dx){
      if(this.x < this.dx){
        this.x += this.speedx;
      }else{
        this.x -= this.speedx;
      }

    }
    if(this.y != this.dy){
      if(this.y < this.dy){
        this.y += this.speedy;
      }else{
        this.y -= this.speedy;
      }
    }
    if(this.z != this.dz){
      if(this.z < this.dz){
      this.z += this.speedz;
      }else{
        this.z -= this.speedz;
      }
    }
    this.speedx = sx;
    this.speedy = sy;
    this.s.mesh.position.x = this.x;
    this.s.mesh.position.y = this.y;
    this.s.mesh.position.z = this.z;
  }

  this.updateRotate = function(){
    if(this.rotx == this.rotddx && this.roty == this.rotddy && this.rotz == this.rotddz){
      if(this.rotations.length != 0){
        var rot = this.rotations.shift(0);
        if(rot.loop){
          this.rotations.push(rot);
        }
        this.rotddx = this.rotx + rot.coord[0];
        this.rotddy = this.roty + rot.coord[1];
        this.rotddz = this.rotz + rot.coord[2];
      }
    }
  }

  this.updateMove = function(){
    if(this.x == this.dx && this.y == this.dy && this.z == this.dz){
      if(this.moves.length != 0){
        var move = this.moves.shift(0);
        if(move.loop){
          this.moves.push(move);
        }
        this.dx = this.x + move.coord[0];
        this.dy = this.y + move.coord[1];
        this.dz = this.z + move.coord[2];
        if(move.color != null){
          this.setColor(move.color);

        }
      }
    }
  }  

  this.setRotate = function(dir, flag){
    var x = 0;
    var y = 0;
    var y = 0;
    var cord = [x,y,z];
    var dist = scale;
    switch(dir) {
    case "up":
        cord = [10,y,z];
        this.rotdx.angle -= 10;
        this.rotdx.flag = flag;
        break;
    case "down":
        this.rotdx.angle += 10;
        this.rotdx.flag = flag;
        break;
    case "right":
        this.rotdy.angle += 10;
        this.rotdy.flag = flag;
        break;
    case "left":
        this.rotdy.angle -= 10;
        this.rotdy.flag = flag;
        break;
    case "in":
        this.rotdz.angle += 10;
        this.rotdz.flag = flag;
        break;
    case "out":
        this.rotdz.angle -= 10;
        this.rotdz.flag = flag;
        break;
    }
    var rot = {coord: cord, loop: flag}; 
    this.rotations.push(rot);

  }

  this.setRotate2 = function(dir, flag){
    var x = 0;
    var y = 0;
    var z = 0;
    var cord = [x,y,z];
    var dist = scale / 2;
    switch(dir) {
    case "up":
        cord = [-dist,y,z];
        break;
    case "down":
        cord = [dist,y,z];
        break;
    case "right":
        cord = [x,dist,z];
        break;
    case "left":
        cord = [x,-dist,z];
        break;
    case "in":
        cord = [x,y,dist];
        break;
    case "out":
        cord = [x,y,-dist];
        break;
    }
    var rot = {coord: cord, loop: flag}; 
    this.rotations.push(rot);
  }

  this.assignColor = function(color){
    if(this.moves.length == 0){
      this.setColor(color);
    }else{
      var move = this.moves[this.moves.length-1];
      move.color = color;
    }
    
  }

  this.setColor = function(color){
    if(this.color == color){
      return;
    }
    var hex = color.substr(1);
    hex = '0x'+hex;
    this.color = color;
    this.s.mesh.material.color.setHex( hex );
  }

  this.addGoal = function(goal){
    this.goal = goal;
  }
}

function Pointer(){
  this.x = 0;
  this.y = 0;
  this.z = 0;

  this.move = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  this.setmove2 = function(dir){
    switch(dir) {
      case "up":
          this.y += scale;
          break;
      case "down":
          this.y -= scale;
          break;
      case "right":
          this.x += scale;
          break;
      case "left":
          this.x -= scale;
          break;
      case "in":
          this.z += scale;
          break;
      case "out":
          this.z -= scale;
          break;
    }
  }
}

function Point(x,y,z){
  this.x = x;
  this.y = y;
  this.z = z;


  var geometry = new THREE.BoxGeometry( 5, 5, 5 );
  var material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
  var m = new THREE.Mesh( geometry, material );
  this.s = {mesh: m};
  scene.add( this.s.mesh );
  this.s.mesh.position.x = this.x;
  this.s.mesh.position.y = this.y;
  this.s.mesh.position.z = this.z;
  console.log("point made: "+x+", "+y+", "+z);
  this.update = function(){  
  };

  this.setmove2 = function(){
    switch(dir) {
      case "up":
          this.y += 10;
          break;
      case "down":
          this.y -= 10;
          break;
      case "right":
          this.x += 10;
          break;
      case "left":
          this.x -= 10;
          break;
      case "in":
          this.z += 10;
          break;
      case "out":
          this.z -= 10;
          break;
      }
  };
}

function Line(start, dist, y, x ,z , scale){
  this.vertices = [];
  this.edge = [];
  this.scale = scale;
  this.var = "y";
  this.steps = 0;
  this.fx = x;
  this.fy = y;
  this.fz = z;
  this.funcx;
  this.funcy;
  this.funcz;
  this.xtemp;
  this.ytemp;
  this.ztemp;
  this.x = start.x;
  this.y = start.y;
  this.z = start.z;
  this.startx = start.x;
  this.starty = start.y;
  this.startz = start.z;
  this.start;
  this.end;
  

  this.update = function(){
  };

  this.setUpFunc = function(){

    this.funcx = getFunc(this.fx);
    this.funcy = getFunc(this.fy);
    this.funcz = getFunc(this.fz);
  }

  this.makeMesh = function(){
    this.makeVertices();
    this.makeGeo();
  }

  this.makeGeo = function(){
    var geometry = new THREE.Geometry();
    for(var  i = 0; i < this.vertices.length; i=i+1){
      geometry.vertices.push(this.vertices[i]);
    }
    this.start = this.vertices[0];
    this.end = this.vertices[this.vertices.length-1];

    var material = new THREE.LineBasicMaterial({
        color: 0xffffff
    });
    var m = new THREE.Line( geometry, material );
    this.s = {mesh: m}
    scene.add( this.s.mesh );

  }

  this.getEnd = function(){
    return this.end;
  }

  this.makeVertices = function(){
    var x = this.x;
    var y = this.y;
    var z = this.z;
    this.xtemp = this.x;
    this.ytemp = this.y;
    this.ztemp = this.z;
    this.vertices[0] = new THREE.Vector3( x, y, z);
    var stepsize = 1;
    for(var i = 1; i < dist / stepsize; i++){
      this.steps = i * stepsize;
      this.xtemp = this.x + this.funcx(this);
      x = this.xtemp;
      this.ytemp = this.y + this.funcy(this);
      y = this.ytemp;
      this.ztemp = this.z + this.funcz(this);
      z = this.ztemp;
      this.vertices[i] = new THREE.Vector3( x, y, z);
    }
  }



  function xfunc(t){
    return t.xtemp - this.startx;
  }
  function yfunc(t){
    return t.ytemp - this.starty;
  }
  function zfunc(t){
    return t.ztemp - this.startz;
  }
  function noTilt(t){
    return 0;
  }
  function one(t){
    return t.steps;
  }
  function negone(t){
    return -t.steps;
  }
  function sin(t){
    var result = Math.sin(t.steps);
    return result * 5;
  }
  function getFunc(str){
    var f;
    switch(str) {
    case "noTilt":
        f =  noTilt;
        break;
    case "1":
        f =  one;
        break;
    case "-1":
        f =  negone;
        break;
    case "xfunc":
        f = xfunc;
        break;
    case "yfunc":
        f =  yfunc;
        break;
    case "zfunc":
        f =  zfunc;
        break;
    case "sin":
        f =  sin;
        break;
      }
    return f;
  }

  

}

function checkColy(){
  return false;
}
function checkColx(){
  return false;
}