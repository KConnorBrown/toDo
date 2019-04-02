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


    var numItems = 15;
    var initialComp = 0;
    var emptyDivs = [];
    //remove some number of the short term items
    if(filled){
        var i = Math.floor(Math.random()*10);
        for(var j = i; j > 0; j--){
            var id = (15 - j).toString();
            document.getElementById(id).innerHTML = ' ';
            emptyDivs.push(15-j);
        }
        numItems -= i;
    }

    var triggered = false;
    var writing = false;
    var deleting = false;
    var speed = 100;
    var i;
    var rand;
    function deletingTypeWriter() {
            //find the item to delete
            console.log(deleting);
            if (!deleting){
                rand = Math.floor(Math.random()*numItems);
                while (emptyDivs.includes(rand)) {
                    rand = Math.floor(Math.random()*numItems);
                }
                emptyDivs.push(rand);
                i = document.getElementById(rand.toString()).innerHTML.length;
                deleting = true;
            }

            if (i > 0) {
                setTimeout(function(){
                    document.getElementById(rand.toString()).innerHTML = document.getElementById(rand.toString()).innerHTML.slice(0, i);
                    i--;
                }, 100);
                setTimeout(deletingTypeWriter, speed);
            } else {
                numItems -= 1;
                deleting = false;
                // writing = false;
                if (numItems < 5 && !writing) {
                    setTimeout(writingTypeWriter, 1000);
                } else if (numItems > 4 && !deleting) {
                    setTimeout(deletingTypeWriter, 1000);
                }
            }
    }

   var shuffle = function (array) {

   	var currentIndex = array.length;
   	var temporaryValue, randomIndex;

   	// While there remain elements to shuffle...
   	while (0 !== currentIndex) {
   		// Pick a remaining element...
   		randomIndex = Math.floor(Math.random() * currentIndex);
   		currentIndex -= 1;

   		// And swap it with the current element.
   		temporaryValue = array[currentIndex];
   		array[currentIndex] = array[randomIndex];
   		array[randomIndex] = temporaryValue;
   	}

   	return array;

   };

   var text;
   var rand;
        function writingTypeWriter() {
            //find the item to write
            if (!writing){
                emptyDivs = shuffle(emptyDivs);
                rand = emptyDivs.pop();
                i = document.getElementById(rand.toString()).innerHTML.length;
                var grammar = tracery.createGrammar(jsonObj);
        	    text = '  – ' + grammar.flatten('#origin#');
                writing = true;
            }
            if (i < text.length){
                setTimeout(function(){
                document.getElementById(rand.toString()).innerHTML += text.charAt(i);
                i++;
            }, 100);
                setTimeout(writingTypeWriter, speed);
            } else {
                writing = false;
                // deleting = false;
                if (numItems < 5 && !writing) {
                    setTimeout(writingTypeWriter, 1000);
                } else if (numItems > 4 && !deleting) {
                    setTimeout(deletingTypeWriter, 1000);
                }
            }
        }

if (filled) {
        if (!triggered){
            setTimeout(deletingTypeWriter, 10000);
            triggered = true;
        }
        if (triggered){
            if (numItems < 5 && !writing) {
                setTimeout(writingTypeWriter, 1000);
            }
            if (numItems > Math.random()*6 && !deleting) {
                setTimeout(deletingTypeWriter, 1000);
            }
        }
}


});
