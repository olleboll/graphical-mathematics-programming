<?php
//login('default', 'hejhej');
//getToolbox('1');
//getExample(3);
// GETTIng DEFAULT EXAMPLES AT START
if (isset($_POST['user'])){
	getExampleData($_POST['user']);
}

if (isset($_POST['Searchname'])){
	getID($_POST['Searchname']);
}

if (isset($_POST['id_examples'])){
	getExample($_POST['id_examples']);
}
// GETTING DEFAULT TOOLBOX
if (isset($_POST['id_settings'])){
	getToolbox($_POST['id_settings']);
}
// GETTING ID OF USER SETTINGS
if (isset($_POST['id_userS'])){
	getToolboxID($_POST['id_userS']);
}
// GET TOOLBOX
if (isset($_POST['id_TB'])){
	getToolbox($_POST['id_TB']);
}
// SAVE TOOLBOX
if (isset($_POST['toolbox'],$_POST['camera'])){
	saveSettings($_POST['toolbox'],$_POST['camera']);
}
//LOGIN
if (isset($_POST['login_name'], $_POST['password'])){
	login($_POST['login_name'],$_POST['password']);
}
//REGISTER
if (isset($_POST['reg_name'], $_POST['skola'], $_POST['password'])){
	register($_POST['reg_name'], $_POST['skola'], $_POST['password']);
}

// GET ID OF ALL OPEN EXAMPLES
if (isset($_POST['examples'])){
	getOpenExample($_POST['examples']);
}
//GET OPEN EXAMPLE
if (isset($_POST['id_Allexamples'])){
	getOpenExampleData($_POST['id_Allexamples']);
}
// SAVE EXAMPLE
if (isset($_POST['userid'], $_POST['name'], $_POST['example'], $_POST['open'])){
	saveExample($_POST['userid'], $_POST['name'],$_POST['example'], $_POST['open']);
}
// EDIT EXAMPLE
if (isset($_POST['id_examples'], $_POST['example'])){
	editExample($_POST['id_examples'], $_POST['example']);
}
// SUBMIT SCORE FROM ASSIG
if (isset($_POST['name'], $_POST['time'])){
	submitScore($_POST['name'], $_POST['time']);
}

if (isset($_POST['id'], $_POST['times'])){
	addScore($_POST['id'], $_POST['times']);
}

if (isset($_POST['id'], $_POST['ws'])){
	submitWorkspace($_POST['id'], $_POST['ws']);
}
if (isset($_POST['id'], $_POST['ws'], $_POST['lvl'])){
	addWorkspace($_POST['id'], $_POST['ws'], $_POST['lvl']);
}

//Getting results from test
if (isset($_POST['dummy'])){
	getWSIDs();
}

if (isset($_POST['id_ws'])){
	getWorkspace($_POST['id_ws']);
}

function connectToDB(){
	$mysqliLink = new mysqli('YOUR DATABASE HOST', 'YOUR DATABASE USERNAME', 'YOUR DATABASE PASSWORD', 'YOUR DATABASE NAME');

	if(mysqli_connect_errno()){
		exit();
	}
	return $mysqliLink;
}

function getExampleData($userid){
	$mysqliLink = connectToDB();

	
	$query = "SELECT id_examples FROM examples WHERE id_user = ?";
	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "s", $userid);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_bind_result($stmt, $result);
	$examples = array();
	$index = 0;
	while(mysqli_stmt_fetch($stmt)){
		
		$examples[$index] = $result;
		$index++;
	}
	$json = json_encode($examples);
	echo $json;
	mysqli_stmt_close($stmt);
}

function getExample($exampleid){
	$mysqliLink = connectToDB();
	$query = mysqli_query($mysqliLink ,"SELECT * FROM examples WHERE id_examples = '$exampleid'");
	$example = array();
	if($row = mysqli_fetch_row($query)){
		$example[0] = $row[1];
		$example[1] = $row[3];
		$example[2] = $row[0];
	}
	$query = mysqli_query($mysqliLink ,"SELECT id_user FROM examples WHERE id_examples = '$exampleid'");
	$iduserRow = mysqli_fetch_row($query);
	$iduser = $iduserRow[0];
	$query = mysqli_query($mysqliLink ,"SELECT name FROM users WHERE id_user = '$iduser'");
	$name = mysqli_fetch_row($query);
	$example[3] = $name[0];
	$json = json_encode($example);
	echo $json;
}

function getOpenExample($val){
	$mysqliLink = connectToDB();
	$query = mysqli_query($mysqliLink ,"SELECT * FROM examples WHERE offentlig = '$val'");
	$examples = array();
	$index = 0;
	while($row = mysqli_fetch_assoc($query)){
		$examples[$index] = $row['id_examples'];
		$index++;
	}
	$json = json_encode($examples);
	echo $json;
}

function saveExample($id2, $name, $example, $open){
	$mysqliLink = connectToDB();
	$id = $_COOKIE['TestCookie'];
	$query = "INSERT INTO examples(id_user, name_example, example1, offentlig) VALUES('$id', ?, '$example', '$open')";

	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "s", $name);
	mysqli_stmt_execute($stmt);

	if(mysqli_stmt_affected_rows($stmt)){
		echo "Sparades!";
	}else{
		echo "Något blev fel, försök igen senare.";
	}
	mysqli_stmt_close($stmt);
}

function submitScore($name, $time){
	$mysqliLink = connectToDB();
	$query = "INSERT INTO scores(name, score) VALUES(?, '$time')";

	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "s", $name);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_bind_result($stmt, $result);
	$last_id = mysqli_insert_id($mysqliLink);

	if(mysqli_stmt_affected_rows($stmt)){
		$json = json_encode($last_id);
		echo $json;
	}else{
		echo "Något blev fel, försök igen senare.";
	}
	mysqli_stmt_close($stmt);
}

function addScore($id, $time){
	$mysqliLink = connectToDB();
	$query = "UPDATE scores SET score = '$time' WHERE id = $id";

	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "s", $name);
	mysqli_stmt_execute($stmt);

	if(mysqli_stmt_affected_rows($stmt)){
		echo "Sparades!";
	}else{
		echo "Något blev fel, försök igen senare.";
	}
	mysqli_stmt_close($stmt);
}

function submitWorkspace($id, $ws){
	$mysqliLink = connectToDB();

	$query = "INSERT INTO workspaces(playerid, workspace) VALUES('$id', '$ws')";

	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "s", $name);
	mysqli_stmt_execute($stmt);

	if(mysqli_stmt_affected_rows($stmt)){
		echo "Sparades!";
	}else{
		echo "Något blev fel, försök igen senare.";
	}
	mysqli_stmt_close($stmt);
}

function addWorkspace($id, $ws, $lvl){
	$mysqliLink = connectToDB();
	if($lvl == 2){
		$query = "UPDATE workspaces SET workspace2='$ws' WHERE playerid = '$id'";
	}
	if($lvl == 3){
		$query = "UPDATE workspaces SET workspace3='$ws' WHERE playerid = '$id'";
	}
	if($lvl == 4){
		$query = "UPDATE workspaces SET workspace4='$ws' WHERE playerid = '$id'";
	}
	$res = mysqli_query($mysqliLink, $query);
	
	if($res){
		echo "Sparades!";
	}else{
		echo $query;
	}
}


function editExample($id, $xml){
	$mysqliLink = connectToDB();
	$query = "UPDATE examples SET example1='$xml' WHERE id_examples = '$id'";
	$res = mysqli_query($mysqliLink, $query);
	
	if($res){
		echo "Sparades!";
	}else{
		echo "Något blev fel, försök igen senare.2";
	}
}

function getToolboxID($id2){
	$mysqliLink = connectToDB();
	$id = $_COOKIE['TestCookie'];
	$query = "SELECT id_settings FROM settings WHERE id_user = ?";

	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "s", $id);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_bind_result($stmt, $result);
	$settings = array();
	$index = 0;
	while(mysqli_stmt_fetch($stmt)){
		$settings[$index] = $result;
		$index++;
	}
	$json = json_encode($settings);
	echo $json;
}


function saveSettings($toolbox,$camera){
	$mysqliLink = connectToDB();
	$id = $_COOKIE['TestCookie'];
	$query = "INSERT INTO settings(id_user, camera, toolbox) VALUES('$id', '$camera', ?)";

	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "s", $toolbox);
	mysqli_stmt_execute($stmt);

	if(mysqli_stmt_affected_rows($stmt)){
		echo "Sparades!";
	}else{
		//echo "Något blev fel, försök igen senare.";
	}
	mysqli_stmt_close($stmt);
}

function getToolbox($settingid){
	$mysqliLink = connectToDB();
	$query = mysqli_query($mysqliLink ,"SELECT * FROM settings WHERE id_settings = '$settingid'");
	$toolbox = "";
	if($row = mysqli_fetch_row($query)){
		$toolbox = $row[3];
	}
	$json = json_encode($toolbox);
	echo $json;
}

function getID($name){
	$mysqliLink = connectToDB();

	$query = mysqli_query($mysqliLink ,"SELECT id_user FROM users WHERE name = '$name'");
	$iduserRow = mysqli_fetch_row($query);
	$iduser = $iduserRow[0];

	$json = json_encode($iduser);
	echo $json;
	mysqli_stmt_close($stmt);
}


function getWSIDs(){
	$mysqliLink = connectToDB();

	$query = mysqli_query($mysqliLink ,"SELECT * FROM workspaces");

	$ids = array();
	$index = 0;
	

	while($result = mysqli_fetch_row($query)){
		
		$ids[$index] = $result[1];
		$index++;
	}
	$json = json_encode($ids);
	echo $json;
	mysqli_stmt_close($stmt);
}

function getWorkspace($id){
	$mysqliLink = connectToDB();

	$query = mysqli_query($mysqliLink ,"SELECT * FROM workspaces WHERE playerid = '$id'");

	$wss = array();
	$index = 0;

	$result = mysqli_fetch_row($query);


	$wss[0] = $id;
	$wss[1] = $result[2];
	$wss[2] = $result[3];
	$wss[3] = $result[4];
	$wss[4] = $result[5];

	$json = json_encode($wss);
	echo $json;
	mysqli_stmt_close($stmt);

}

function login($name, $pass){
	$mysqliLink = connectToDB();

	$query = "SELECT id_user FROM users WHERE name = ? and password = ?";

	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "ss", $name, $pass);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_bind_result($stmt, $result);
	$count = 0;
	while(mysqli_stmt_fetch($stmt)){
		$count += 1;
	}
	if($count == 1){
		setcookie("TestCookie", $result, time()+3600);
		$json = json_encode($result);
		echo $json;
	}else{
		echo "FAIL";
	}
	
	mysqli_stmt_close($stmt);
}

function register($name, $school, $pass){
	$mysqliLink = connectToDB();
	$query = "SELECT name FROM users WHERE name ='$name'";
 	
 	$stmt = mysqli_prepare($mysqliLink, $query);
	mysqli_stmt_bind_param($stmt, "s", $name);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_bind_result($stmt, $result);
	$count = 0;
	while(mysqli_stmt_fetch($stmt)){
		$count += 1;
	}
	mysqli_stmt_close($stmt);

 	if ($count==0) {

 		$query = "INSERT INTO users(name,school,password) VALUES(?,?,?)";
  		$stmt = mysqli_prepare($mysqliLink, $query);
		mysqli_stmt_bind_param($stmt, "sss", $name, $school, $pass);
		mysqli_stmt_execute($stmt);
		mysqli_stmt_bind_result($stmt, $result);

		if(mysqli_stmt_affected_rows($stmt)){
			echo "Du har registrerats. Du kan nu logga in.";
		}else{
			echo "Oväntat fel, pröva igen, senare.";
		}
		mysqli_stmt_close($stmt);
	}
}

?>