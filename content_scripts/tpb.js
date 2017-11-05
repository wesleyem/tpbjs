/*
Author: wesleyem
Project: tpbjs
*/

var table = "#searchResult"
// Selector for untrusted and non-vip users in the 'single' view
var hideableS = "nobr a:only-of-type"

// Selector for untrusted and non-vip users in the 'double' view
var hideableD = "td a:only-of-type:not([class])"

if ($(table).length > 0)
{
	if ($("div.viewswitch a").attr("href").includes("view=s"))
	{
		var x = $(hideableD).closest("tr").fadeTo("fast", 0.2, function(){})
	}
	else
	{
		var y = $(hideableS).closest("tr").fadeTo("fast", 0.2, function(){})
	}
}