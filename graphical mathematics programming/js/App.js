// Dessa första två ska alltid köras och fylla upp en lista med exempel som alla användare kan komma åt!

// GÖR OM SÅ DET UTFÖRS MED CALLBACKS (a la getDefaultData(user, callback); ). ALLDELES FÖR MÅNGA FUNKTIONER NU!

function getExampleIds(user, callback){
	var posting = $.post("php/getData.php", {
		user: user
	});

	posting.done(function(data){
		callback(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getExample(id, callback){
	var posting = $.post("php/getData.php", {
		id_examples: id
	});

	posting.done(function(data){
		callback(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function searchName(name){
	var posting = $.post("php/getData.php", {
		Searchname: name
	});

	posting.done(function(data){
		getExampleIds(JSON.parse(data), setupSearchExamples);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getAllOpenExamples(){
	var posting = $.post("php/getData.php", {
		examples: '1'
	});

	posting.done(function(data){
		setUpAllOpenExamples(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getSettingIds(user, callback){
	var posting = $.post("php/getData.php", {
		id_userS: user
	});

	posting.done(function(data){
		console.log(data + ", "+ callback);
		callback(data);
		//setupUserSettings(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getDefaultSettings(id){
	var posting = $.post("php/getData.php", {
		id_settings: id
	});

	posting.done(function(data){
		setupSettings(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function getUserSettingsID(user, callback){
	var posting = $.post("php/getData.php", {
		id_userS: user
	});

	posting.done(function(data){
		//console.log(data);
		callback(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

// Kan vara sårbar för injections
function getUserSetting(id,callback){
	var posting = $.post("php/getData.php", {
		id_TB: id
	});

	posting.done(function(data){
		callback(data);
		//defineUserSettings(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}


function login(inputs){
	var posting = $.post("php/getData.php", {
		login_name: inputs[0], password: inputs[1]
	});

	posting.done(function(data){
		if(data == "FAIL!"){
			alert("Fel namn eller lösenord");
		}else{
			//console.log(JSON.parse(data));
			setUserID(data);
			document.getElementById("myexamples").innerHTML = "INLOGGAD <br> Exempel <br>";
			document.getElementById("mysettings").innerHTML = "Verktygslådor <br>";
			setUpInterface();
			getExampleIds(JSON.parse(data),setupUserExamples);
			getUserSettingsID(JSON.parse(data), setupUserSettings);
		}

	});

	posting.fail(function(){
		alert("fail");
	});
}

function register(inputs){
	var posting = $.post("php/getData.php", {
		reg_name: inputs[0], skola: inputs[1], password: inputs[2]
	});

	posting.done(function(data){
		alert(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function saveExample(id, name, xml, open){
	var posting = $.post("php/getData.php", {
		userid: id, name: name, example: xml, open:open
	});

	posting.done(function(data){
		alert(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}

function editExample(id, xml){
	console.log("editing example: "+id);
	var posting = $.post("php/getData.php", {
		id_examples: id, example: xml
	});

	posting.done(function(data){
		alert("Exempel: " + id + " har ändrats.");
	});

	posting.fail(function(){

		alert("fail");
	});
}

function saveSettings(settings){
	var posting = $.post("php/getData.php", {
		toolbox: settings[0], camera: settings[1]
	});

	posting.done(function(data){
		alert(data);
	});

	posting.fail(function(){
		alert("fail");
	});
}



$(document).ready(function(){
	$("#login").submit(function(e){
		e.preventDefault();
		var inputs = [];
		inputs[0] = $('#login_name').val();
		inputs[1] = $('#login_password').val();
        login(inputs);
    });
    $("#register").submit(function(e){
		e.preventDefault();
		var inputs = [];
		inputs[0] = $('#reg_name').val();
		inputs[1] = $('#reg_skola').val();
		inputs[2] = $('#reg_password').val();
		inputs[3] = $('#reg_password2').val();
		if(inputs[2] == inputs[3]){
			//console.log(inputs);
        	register(inputs);
		}else{
			alert("Inte samma lösenord, gör om gör rätt!");
		}
		
    });
    $("#search").submit(function(e){
		e.preventDefault();
		var inputs;
		inputs = $('#search_name').val();
		console.log(inputs);
        searchName(inputs);
    });
    
	getExampleIds("1", setupExamples);
	setupSettings(null);
	getAllOpenExamples();
});
