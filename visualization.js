var openess = [];
var agreeableness = [];
var csv = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpQmll0IN35vyqKtiB31pqcYN2d5a8JBtJi1qw4DnclPhxjefbq9J89rG6C_t1knCMYoo9qrPhcp3S/pub?output=csv';

class Person{

    person;
    personality;
    testScore;
    story;
  
    constructor(nam,nat,e,a,g,s,p,c,t,st,personal){
      this.person =[nam,nat,e,a,g,s,p,c];
      this.testScore = t;
      this.story = st;
      this.personality = personal;
    }
  }

  var people = [];
  var OjObj = ["Openness","Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.","You are eager to experience new things","You enjoy beauty and seek out creative experiences","You are aware of your feelings and how to express them","You have a wild imagination","You are open to and intrigued by new ideas and love to explore them","You are open to and intrigued by new ideas and love to explore them"];
  var ShanshanObj= ["Agreeableness","Value getting along with others. They have a more optimistic view of human nature.","You feel fulfilled when helping others, and will go out of your way to do so","You are easy to please and try to avoid confrontation","You are uncomfortable being the center of attention","You are uncomfortable being the center of attention","You feel what others feel and are compassionate towards them","You believe the best in others and trust people easily"];
  var DaheeObj = ["Openness","Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.","You enjoy beauty and seek out creative experiences","You are aware of your feelings and how to express them","You have a wild imagination","You are open to and intrigued by new ideas and love to explore them","You are open to and intrigued by new ideas and love to explore them"]
  var RianObj = ["Agreeableness","Value getting along with others. They have a more optimistic view of human nature.","You feel fulfilled when helping others, and will go out of your way to do so","You are easy to please and try to avoid confrontation","You are uncomfortable being the center of attention","You are uncomfortable being the center of attention","You feel what others feel and are compassionate towards them","You believe the best in others and trust people easily"];
  var KiraOdj = ["Agreeableness","Value getting along with others. They have a more optimistic view of human nature.","You feel fulfilled when helping others, and will go out of your way to do so","You are easy to please and try to avoid confrontation","You are uncomfortable being the center of attention","You are uncomfortable being the center of attention","You feel what others feel and are compassionate towards them","You believe the best in others and trust people easily"];
  var MacotoOdj = ["Openness","Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.","You enjoy beauty and seek out creative experiences","You are aware of your feelings and how to express them","You have a wild imagination","You are open to and intrigued by new ideas and love to explore them","You are open to and intrigued by new ideas and love to explore them"];
  people.push(new Person("Oj","United States","Indian","20-24","Male","Asexual","he, him","Student", "100", "I am always uncomfortable when sex scenes come up in books, movies, etc. I always thought it was conservative Indian values rubbing off on me, but turns out I'm ace. So that's nice.",OjObj));
    people.push(new Person("Shanshan","USA", "Asian", "20-24","Female", "Lesbian", "she, her", "Student", "66", "I haven't yet come out to my entire family but I care out as bisexual first to my mother. I told her one of my friends couldn't visit bc her girlfriend had something going on, and my mom was shocked I had gay friends. Then I said well what if I like girls, too, and she said she saw in that moment the devil in my spirit. She looked at me like a stranger and told me never to bring it up again and never to tell the rest of my family. I didn't bring it up again. She will sometimes bring it up in weird ways like yelling at my for wearing different colored socks and saying \“why do you have to be so different all the time? Also I know that friend you have is gay...\'  However, 4 years later, I think she is coming around to it because recently she told me it would be good to find a \"partner\" and that \"it doesn\'t matter so much what they are like as long as they make you happy.\" She has said before how I look good in suits... I'm still nervous to bring it up again but I trust my mom loves me and I want to give her time to come to terms on her own way.",ShanshanObj));
    people.push(new Person("Dahee","American", "Korean and Chinese", "20-24","Female", "Queer", "she, her", "Student", "100", "Sometimes when I say I'm queer people have no idea what that means. People will sometimes react by saying like \"you're a lesbian??\" Or \"so you're gay?\" Or \"isn't queer a bad word\" which is MAD funny. Most people seem to not understand what \"queer\" really means tbh. People think queer is either a bad word or it just means \"gay\" which isn't true. ",DaheeObj));
    people.push(new Person("Rian","Japan", "Japanese", "20-24","Female", "Lesbian", "she, her", "Student", "100", "Coming out is such a strange thing to do. You feel like it should be such a scary thing cause in the ideal world, no one assumes that you are straight, they just assume you are a human being like everyone else. So to do this project, I needed to make a powerpoint to explain where I was in the project. And to try to explain why I am doing this I just came outstanding on the podium facing about 35 people. My hands didn't even stop shaking.Even though many of my classmates have already known this part of me it was scary. But life-changing too. Hearing everyone but clapping of getting quite personal stories as feedback, knowing that this classroom is a quite safe place that when I make gay jokes in the presentation, someone will get it and laugh. I am lucky one being able to feel safe to come out in front of the class. I am lucky that many of my friends was like \"ya, I knew\" or \"you finally said it\" or \"OMG I did not know but I am too!\" And coming out provided me much meaningful friendship for me. It might not sound so funny, but to me, I find it funny that I was so terrified cause I am so glad I have done it and it felt so much warmer than anything I expected.",RianObj));
    people.push(new Person("Kira","United States","english/italian american","20-24","Genderqueer","Gay","he, him","Student", "100", "When I first came out as not cisgender, I did so with a letter while I was not home. I had a million letter drafts and spent so much time thinking over every little word I used. I was so terrified to tell them even though my parents have never been explicitly homophobic or transphobic. Ultimately, I was still afraid of their reaction. I instead made my eldest sister give them the letter after dinner while I was at my friends house. My mom was upset that I did not feel safe enough to tell her while I was there. My parents did not really understand why I feel the way I do. After I came home, I did not know how to talk to them about what I wrote in the letter. So, one day my mom just approached me asking if we were ever gonna talk about it. That was 3 years ago, and I still have a hard time talking to my parents about it. They still sometimes mess up pronouns and do not truly understand my identity and how I understand it.",KiraOdj));
    people.push(new Person("Macoto","Japan", "Japanese", "25-29","Female", "Bisexual", "she, her", "Office worker", "23", "When I was 17 years old, I got into the Takarazuka Revue, and I started to feel like a cool woman.My first love for my love was a girl of the same age who became friends through SNS when I was 18 years old.Until then, even with a little favor from the boys, he could not have any more feelings.I met her only once, but she realized that she loved herself because of her cool appearance, gentle gestures, etc., but not for friends but for the general public.From that point on, he sometimes favored men, but he felt more comfortable with women than with men and wants to be more together.",MacotoOdj));

for(var i = 1; i<=people.length; i++){
    //console.log(people[i-1]);
    var p = people[i-1];
    document.getElementById("person"+i+"name").innerHTML = p.person[0];
    document.getElementById("person"+i+"C").innerHTML = p.person[1];
    document.getElementById("person"+i+"E").innerHTML = p.person[2];
    document.getElementById("person"+i+"A").innerHTML = p.person[3];
    document.getElementById("person"+i+"G").innerHTML = p.person[4];
    document.getElementById("person"+i+"S").innerHTML = p.person[5];
    document.getElementById("person"+i+"P").innerHTML = p.person[6];
    document.getElementById("story"+i).innerHTML = p.story;
    
    if(p.personality[0]=="Openness"){
        openess.push(p.person[0]);
    }
    
    

}


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

function terminology(){
    d3.csv(csv).then(function(data) {
        console.log(data[1]);
      });
}