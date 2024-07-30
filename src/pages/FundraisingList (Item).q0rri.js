// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { getAllFundraisers } from 'backend/getAllFundraisers';
$w.onReady(function () {

	$w('#repeater1').onItemReady(($item,itemData, index) =>{
		//$item("#text45").text = itemData._id;
		$item("#text50").text = itemData.name;
		$item("#text47").text = itemData.description;
		$item("#text48").text = itemData.amount.toString();
		$item("#text49").text = itemData.amountCollected.toString();
	})
	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code
	getAllFundraisers().then(product => {
		const productList = product.map(((char) => char = {...char, _id:char.id.toString()}));
		$w('#repeater1').data = productList
        //console.log(product);
     })
     .catch(error => {
         console.log(error);
     });

});