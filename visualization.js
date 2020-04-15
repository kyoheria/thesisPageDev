var openess = [];
var agreeableness = [];
var csv = "FormResponce.csv";



function openByPerson() {
    document.getElementById("byPerson").style.display = "block";
    document.getElementById("By Person").style.backgroundColor = "#E6C09E";
    document.getElementById("byPersonality").style.display = "none";
    document.getElementById("By Personality").style.backgroundColor = "#2D334A";
    document.getElementById("byConnection").style.display = "none";
    document.getElementById("By Connection").style.backgroundColor = "#2D334A";
    document.getElementById("byGender").style.display = "none";
    document.getElementById("By Gender").style.backgroundColor = "#2D334A";
    document.getElementById("bySexuality").style.display = "none";
    document.getElementById("By Sexuality").style.backgroundColor = "#2D334A";
}
function openByPersonality() {
    document.getElementById("byPerson").style.display = "none";
    document.getElementById("By Person").style.backgroundColor = "#2D334A";
    document.getElementById("byPersonality").style.display = "block";
    document.getElementById("By Personality").style.backgroundColor = "#E6C09E";
    document.getElementById("byConnection").style.display = "none";
    document.getElementById("By Connection").style.backgroundColor = "#2D334A";
    document.getElementById("byGender").style.display = "none";
    document.getElementById("By Gender").style.backgroundColor = "#2D334A";
    document.getElementById("bySexuality").style.display = "none";
    document.getElementById("By Sexuality").style.backgroundColor = "#2D334A";
}

function openByConnection() {
    document.getElementById("byPerson").style.display = "none";
    document.getElementById("By Person").style.backgroundColor = "#2D334A";
    document.getElementById("byPersonality").style.display = "none";
    document.getElementById("By Personality").style.backgroundColor = "#2D334A";
    document.getElementById("byConnection").style.display = "block";
    document.getElementById("By Connection").style.backgroundColor = "#E6C09E";
    document.getElementById("byGender").style.display = "none";
    document.getElementById("By Gender").style.backgroundColor = "#2D334A";
    document.getElementById("bySexuality").style.display = "none";
    document.getElementById("By Sexuality").style.backgroundColor = "#2D334A";

    connection();
}

function openByGender() {
    document.getElementById("byPerson").style.display = "none";
    document.getElementById("By Person").style.backgroundColor = "#2D334A";
    document.getElementById("byPersonality").style.display = "none";
    document.getElementById("By Personality").style.backgroundColor = "#2D334A";
    document.getElementById("byConnection").style.display = "none";
    document.getElementById("By Connection").style.backgroundColor = "#2D334A";
    document.getElementById("byGender").style.display = "block";
    document.getElementById("By Gender").style.backgroundColor = "#E6C09E";
    document.getElementById("bySexuality").style.display = "none";
    document.getElementById("By Sexuality").style.backgroundColor = "#2D334A";

    terminology();
}

function openBySexuality() {
    document.getElementById("byPerson").style.display = "none";
    document.getElementById("By Person").style.backgroundColor = "#2D334A";
    document.getElementById("byPersonality").style.display = "none";
    document.getElementById("By Personality").style.backgroundColor = "#2D334A";
    document.getElementById("byConnection").style.display = "none";
    document.getElementById("By Connection").style.backgroundColor = "#2D334A";
    document.getElementById("byGender").style.display = "none";
    document.getElementById("By Gender").style.backgroundColor = "#2D334A";
    document.getElementById("bySexuality").style.display = "block";
    document.getElementById("By Sexuality").style.backgroundColor = "#E6C09E";
}

/*
function terminology(){
    createCanvas(windowWidth, 700);
    darwGendef();
}
*/
function connection(){
    

}