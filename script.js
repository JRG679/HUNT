$("#button").click(function() {
$("#carrot").show();
$("#lo").show();
});
$("#carrot").hover(function() {
$("#carrot").hide();
$("#lo").hide();
$("#button").hide();
$("#bunny").show();
$("#t").show();
});
$("#bunny").dblclick(function() {
$("#t").hide();
$("#lm").show();
$("#evb").show();
});
$("#evb").click(function() {
$("#bunny").hide();
$("#lm").hide();
$("#t").hide();
$("#ev").show();
$("#evb").hide();
$("#el").show();
});
$("#ev").click(function() {
$("#ev").hide();
$("#el").hide();
$("#bc").show();
$("#bct").show();
});


