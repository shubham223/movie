const title = document.getElementById("Title");
const genre = document.getElementById("Genre");
const year = document.getElementById("Year");
const plot = document.getElementById("Plot");
const pathToData = "chatTranscript.lines";

var updateCallback = function(data) {
var value = data.newValue;
var updatedLine = value[value.length - 1];
console.log(updatedLine);
var customerMessage = updatedLine.text;
if(updatedLine.source.toLowerCase() === "visitor"){
var url = "https://www.omdbapi.com?t=" + customerMessage + "&apikey= 3e626416";
console.log(url);
fetch(url)
.then(function (response){
	return response.json();
}).then(function (res){
	console.log(res);
	document.getElementById("Title").innerHTML = res.Title;
	document.getElementById("Genre").innerHTML = res.Genre;
	document.getElementById("Year").innerHTML = res.Year;
	document.getElementById("Plot").innerHTML = res.Plot;
}).catch(function (error){
	console.log("Error:" + error);
});
}
};

var notifyWhenDone = function(err){
	if(err){
		//Printing the error
		console.log("Error:" + err);
	}
	var pathToData = "chatTranscript.lines";
	errorMessage.innerHTML = "Data is not fetched";
};

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
