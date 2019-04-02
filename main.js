$(document).ready(function() {

	var jsonObj = {
	"origin": [
		"#action# the #work# for #class#"
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
	"work": [
		"homework",
		"reading",
		"p-set",
		"essay",
		"outline",
		"presentation"
	],
	"action": [
		"do",
		"finish",
		"start",
		"turn in",
		"review"
	]
}

	var grammar = tracery.createGrammar(jsonObj);
	var text = grammar.flatten('#origin#');
	$('#1').html(text);

  // function loadJsonFromFile() {
	// 	// You can load directly from local files in firefox but not in Chrome
	// 	// To load from local files in chrome, check https://www.maketecheasier.com/setup-local-web-server-all-platforms/
	// 	$.getJSON("https://raw.githubusercontent.com/cqx931/Coding4Language/master/tutorials/week2/01_tracery_js/grammar_tracery.json", function(json) {
	//      console.log(json)
	//   });
  // };
  //
	// loadJsonFromFile();
});
