// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { getAllFundraisers } from 'backend/getAllFundraisers';
$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code
	/* getAllFundraisers().then(product => {
         console.log(product);
     })
     .catch(error => {
         console.log(error);
     });*/
});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
/*export function button3_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	getAllFundraisers().then(product => {
         console.log(product);
     })
     .catch(error => {
         console.log(error);
     });
}*/