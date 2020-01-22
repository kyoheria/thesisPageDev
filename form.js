function next_step1() {
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "block";
}
Button_1=document.getElementById('next_btn1')
Button_1.addEventListener('click', function(evt){
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var nickName = document.getElementById("nickName").value;
  console.log(firstName);
  console.log(lastName);
  console.log(nickName);
})

function next_step2() {
  document.getElementById("second").style.display = "none";
  document.getElementById("third").style.display = "block";
}
Button_2=document.getElementById('next_btn2')
Button_2.addEventListener('click', function(evt){
  var nationality = document.getElementById("Nationality").value;
  var ethnicity = document.getElementById("Ethnicity").value;
  var age = document.getElementById("Age").value;
  var carrer = document.getElementById("Carrer").value;
  console.log(nationality);
  console.log(ethnicity);
  console.log(age);
  console.log(carrer);
})

function next_step3() {
  document.getElementById("third").style.display = "none";
  document.getElementById("forth").style.display = "block";
}
M = 0;
F = 0;
// var Fslider = document.getElementById("female ");
// Fslider.addEventListener('change', storeVal);
// var Foutput = document.getElementById("Fdemo");
Mval = document.getElementById('male')
Mval2 = document.getElementById('Mdemo')
Fval = document.getElementById('female')
Fval2 = document.getElementById('Fdemo')
Gval = document.getElementById('genderFluid')
Gval2 = document.getElementById('Gdemo')
Aval = document.getElementById('agender')
Aval2 = document.getElementById('Ademo')
Nval = document.getElementById('non-binary')
Nval2 = document.getElementById('Ndemo')
Qval = document.getElementById('genderqueer')
Qval2 = document.getElementById('Qdemo')
Tval = document.getElementById('transe')
Tval2 = document.getElementById('Tdemo')

//B=document.getElementById('B')
Button_3=document.getElementById('next_btn3')
Button_3.addEventListener('click', function(evt){
  Mval2 = document.getElementById('Mdemo').innerHTML
  console.log('M :'+Mval2)
  Fval2 = document.getElementById('Fdemo').innerHTML
  console.log('F :'+Fval2)
  Gval2 = document.getElementById('Gdemo').innerHTML
  console.log('G :'+Gval2)
  Aval2 = document.getElementById('Ademo').innerHTML
  console.log('A :'+Aval2)
  Nval2 = document.getElementById('Ndemo').innerHTML
  console.log('N :'+Nval2)
  Qval2 = document.getElementById('Qdemo').innerHTML
  console.log('Q :'+Qval2)
  Tval2 = document.getElementById('Tdemo').innerHTML
  console.log('T :'+Tval2)
})

function next_step4() {
  document.getElementById("forth").style.display = "none";
  document.getElementById("fifth").style.display = "block";
}

// var Fslider = document.getElementById("female ");
// Fslider.addEventListener('change', storeVal);
// var Foutput = document.getElementById("Fdemo");
StVal = document.getElementById('straight')
StVal2 = document.getElementById('straightDemo')
GaVal= document.getElementById('gay')
GaVal2 = document.getElementById('gayDemo')
LeVal = document.getElementById('lesbian')
LeVal2 = document.getElementById('lesbianDemo')
BiVal = document.getElementById('bisexual')
BiVal2 = document.getElementById('bisexualDemo')
PaVal = document.getElementById('pansexual')
PaVal2 = document.getElementById('pansexualDemo')
AsVal = document.getElementById('asexual')
AsVal2 = document.getElementById('asexualDemo')
QuVal = document.getElementById('questioning')
QuVal2 = document.getElementById('questioningDemo')

//B=document.getElementById('B')
Button_4=document.getElementById('next_btn4')
Button_4.addEventListener('click', function(evt){
  StVal2 = document.getElementById('straightDemo').innerHTML
  console.log('St :'+StVal2)
  GaVal2 = document.getElementById('gayDemo').innerHTML
  console.log('F :'+GaVal2)
  LeVal2 = document.getElementById('lesbianDemo').innerHTML
  console.log('G :'+LeVal2)
  Aval2 = document.getElementById('Ademo').innerHTML
  console.log('A :'+Aval2)
  Nval2 = document.getElementById('Ndemo').innerHTML
  console.log('N :'+Nval2)
  Qval2 = document.getElementById('Qdemo').innerHTML
  console.log('Q :'+Qval2)
  Tval2 = document.getElementById('Tdemo').innerHTML
  console.log('T :'+Tval2)
})

function next_step5() {
  document.getElementById("fifth").style.display = "none";
  document.getElementById("six").style.display = "block";
}
Button_5=document.getElementById('next_btn5')
Button_5.addEventListener('click', function(evt){
  /*
  var fs = require("fs");
  var myObj, myJSON, textOne, textTow, data;

  data = {content:textOne, contenttype: "text/plain", created: 1447639154000, id: "666073008692314113",language: "en"},{content:textOne, contenttype: "text/plain", created: 1447639154000, id: "666073008692314113",language: "en"};

  // Storing data:
  myObj = { contentItems: data };
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);

  fs.writeFile("./object.json", myJSON, (err) => {
      if (err) {
          console.error(err);
          return;
      };
      console.log("File has been created");
  });

  // Retrieving data:
  // text = localStorage.getItem("testJSON");
  // obj = JSON.parse(text);
  // document.getElementById("demo").innerHTML = obj.name;

  */
})

function next_step6() {
  document.getElementById("six").style.display = "none";
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}