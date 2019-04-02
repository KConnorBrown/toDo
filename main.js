$(document).ready(function() {

	var jsonObj = {
	"origin": [
		"#action# the #work# for #class#",
		"apply for #applicable#",
		"set up #setupable#",
		"read for #class#",
		"work on #workable#",
		"#acquire# #acquireable#",
		"draft #writing#",
		"email back #class# prof about #work#",
		"#call# #callable# #callabout#",
		"finish working on #finishable#",
		"#meal# with #mealable#",
        "do laundry"
	],
	"class": [
		"cs15",
		"healthcare in the US",
		"coding 4 language",
		"logic 4 systems",
		"cs1950y",
		"how poems see",
		"English"
	],
	"action": [
		"do",
		"finish",
		"start",
		"turn in",
		"review"
	],
	"applicable": [
		"internship",
		"job",
		"#fellowshipname# fellowship",
		"#class# ta position"
	],
	"fellowshipname": [
		"Ittleson",
		"Brown",
		"Green",
		"Smith",
		"Johnson",
		"Williams",
		"Davis",
		"Miller",
		"Wilson"
	],
	"setupable": [
		"#acquaintance# meeting",
		"interview for #applicable#",
		"coffee with #acquaintance#"
	],
	"acquaintance": [
		"Jessica",
		"Eric",
		"Katherine",
		"Galadriel",
		"Jared",
		"Bex",
		"Sandra",
		"Sebastian",
		"Tanvir"
	],
	"workable": [
		"homework for #class#",
		"#longtermgoal#",
		"#writing# for #class#",
		"resume"
	],
	"writing": [
		"paper",
		"essay",
		"project"
	],
	"items": [
		"detergent",
		"toothpaste",
		"dryer sheets",
		"shampoo",
		"books for #class#",
		"pasta",
		"cereal",
		"tape",
		"avocados",
		"spinach",
	],
	"longtermgoal": [
		"build website",
		"finishing search for summer opportunity",
		"half marathon"
	],
	"work": [
		"homework",
		"reading",
		"p-set",
		"essay",
		"outline",
		"presentation"
	],
	"callable": [
		"#acquaintance#",
		"#relative#",
		"boss"
	],
	"relative": [
		"uncle A",
		"dad",
		"mom",
		"Zoe",
		"Amara"
	],
	"callabout": [
		"about #finishable#",
		"to set up #setupable#"
	],
	"call": [
		"call",
		"call back"
	],
	"finishable": [
		"#work#",
		"#applicable#",
		"#writing#"
	],
	"location": [
		"to gym",
		"for run",
		"to #class# office hours",
		"workout",
		"run!",
		"cvs"
	],
	"randomcommonname": [
		"James",
		"Sarah",
		"Lisa",
		"Kevin",
		"Jason",
		"Nicholas",
		"Lucy",
		"Helen",
		"Catherine",
		"Amos",
		"Jeff",
		"Stephanie"
	],
	"mealable": [
		"#relative#",
		"#randomcommonname#"
	],
	"meal": [
		"dinner",
		"coffee",
		"lunch",
		"breakfast"
	],
	"acquireable": [
        "#items#, #items#, #items#, #items#",
		"#items#, #items#, and #items#",
		"#items#",
		"#items# and #items#",
		"#items#- don't forget!"
	],
	"acquire": [
		"get",
		"buy"
	]
}

    var filled = false;
    for (var i = 1; i < 16; i++){
        var grammar = tracery.createGrammar(jsonObj);
    	var text = '  – ' + grammar.flatten('#origin#');
        if (i==1){
            if (text.length > 25) {
                $('#prev').html(text.slice(0,25)+'...');
            } else {
                $('#prev').html(text);
            }
        }
        $('#'+i.toString()).html(text);
        if (i== 15){
            filled = true;
        }
    }



    //remove some number of the short term items
    if(filled){
        var i = Math.floor(Math.random()*10);
        console.log(i);
        for(var j = i; j > 0; j--){
            var id = (15 - j).toString();
            document.getElementById(id).innerHTML = '';
        }
    }


    // var i = 0;
    // var speed = 50;
    // function typeWriter() {
    //   if (filled){
    //      document.getElementById("storybox").innerHTML = "";
    //      i = 0;
    //      randomNumber = Math.floor(Math.random()*stories.length);
    //      txt = stories[randomNumber];
    //      filled = false;
    //   }
    //   if (i < txt.length) {
    //     setTimeout(function(){
    //     document.getElementById("storybox").innerHTML += txt.charAt(i);
    //     i++;
    //     }, 10);
    //     setTimeout(typeWriter, speed);
    //   } else {
    //     filled = true;
    //   }
    // }
    // typeWriter();



});
