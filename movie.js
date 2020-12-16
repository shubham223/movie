console.log("inside fucntions.js");
errorMessage = document.getElementById("errorMessage");
chatText = "chatTranscript.lines";
console.log(chatText);

 

var updateCallback = function(data){
    var value = data.newValue;
    console.log("after value ");
    console.log("value : "+value);
    var line = value[value.length -1];
    console.log("line : "+line);
    var movieName = line.text;
    console.log("after movieName");
    console.log("moviename : "+movieName);
    if (line.source.toLowerCase()==="visitor"){
        var url = "https://www.omdbapi.com?t="+movieName+"&apikey=3e626416";
        fetch(url)
                .then(function(response){
                    
                    return response.json();
                }
                ).then(function(res){
                    document.getElementById("Title").innerHTML = res.Title;
                    document.getElementById("Year").innerHTML = res.Year;
                    document.getElementById("Genre").innerHTML = res.Genre;
                    document.getElementById("Plot").innerHTML = res.Plot;

 

                }).catch(function(error){
                    console.log("I am inside catch");
                    console.log("Error Message : "+error);
                })
    }
};

 

var notifyWhenDone = function(error) {
    if (err){
        console.log("I am inside notifyWhenDone function : "+err);
    }
    var chatText = "chatTranscript.lines";
    errorMessage.innerHTML = "Unable to find the movie";
};

 

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(chatText, updateCallback, notifyWhenDone);
