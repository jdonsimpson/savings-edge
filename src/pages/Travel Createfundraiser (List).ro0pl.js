// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { postData } from "backend/createFundRaiser";
$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code
	$w("#button2").onClick((event) => {
	const name = $w('#input4').value;
	const description = $w('#input5').value;
	const amount = $w('#input3').value;
	postData(name, description, amount)
		.then((result) => {
			console.log(result);
		})
	});
	});