// ==UserScript==
// @name       Coursera programming assignment result checker
// @namespace  http://anee.me/
// @version    0.1
// @description The script pings you when your programming assignment has been evaluated by coursera's servers, so as to eliminate the need of reloading and checking it manually.
// @match      https://class.coursera.org/*/assignment/part_results?part_id=*
// @copyright  2013+, Aneesh Dogra
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}
function main(){
    $(document).ready(function() {
		var REFRESH_TIMEOUT = 30000; // in milliseconds (number_of_seconds * 1000)
        var score = $("table.table:eq(0)").find("tbody").find("tr:eq(1)").find("td:eq(1)").html();
        if (score == "Not available") setTimeout("location.reload(true);", REFRESH_TIMEOUT);
        else alert("The scores are ready. You got " + score);
    });
}
// load jQuery and execute the main function
addJQuery(main);
