/*
Author: wesleyem
Project: tpbjs
*/

// Selector for the table
var table = "#searchResult"

// Selector for untrusted and non-vip users in the 'single' view
var hideableS = "nobr a:only-of-type"

// Selector for untrusted and non-vip users in the 'double' view
var hideableD = "td a:only-of-type:not([class])"

// Selector for the viewswitch
var viewswitch = "div.viewswitch a"

if ($(table).length > 0)
{
	if ($(viewswitch).attr("href").includes("view=s"))
	{
		fadeUnwanted(hideableD)
	}
	else
	{
		fadeUnwanted(hideableS)
	}
}

function fadeUnwanted(selector) {
	var emptycallback = function (){}
	if (selector) {
		$(selector).closest("tr").fadeTo("fast", 0.2, emptycallback)
	} else {
		console.log("No selector given")
	}
}