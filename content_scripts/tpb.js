/*
Author: wesleyem
Project: tpbjs
*/

function fadeUnwanted(element)
{
	var emptycallback = function () {}
	if (element)
	{
		$(element).fadeTo("fast", 0.2, emptycallback)
	}
	else
	{
		console.log("Error code: Elephants")
	}
}

function showable(tr)
{
	return $(tr).find("img[alt='Trusted']").length == 1 ||
			$(tr).find("img[alt='VIP']").length == 1
}

function isHeader(tr)
{
	return $(tr).hasClass("header")
}

function isFooter(tr)
{
	return $(tr).find("td[colspan]").length == 1
}

$("#searchResult tr").each(function () {
	if (isHeader(this) || isFooter(this)) {}
	else
	{
		if (!showable(this))
		{
			fadeUnwanted(this)
		}
	}
})