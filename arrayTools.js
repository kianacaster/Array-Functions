// Array functions for JavaScript by Kian Acaster \\
// (Yes, I do know that some of these functions are in JavaScript already, but I felt like redoing it) \\
// Current functions:
//  - Sorting
// - Reversing
// - Clearing
/* 	
* A simple sorting function.
* It iterates through the array,
* then, checks at each index if
* it is larger than the number at
* the index in front of it.
* If it is larger, they swap places,
* else, they stay the same.
* This then means that by the
* end of the process, the array is sorted.
*/
Array.prototype.bubblesort = function() {
	for(var i = 0; i < this.length; i++){ // Loop over the array forwards (to execute the swap process the required amount of times)
		for(var j = 0; j < this.length - 1; j++){ // Loops over the array forwards again
			if(this[j] > this[j + 1]){ // If the current index value is larger than the one in front...
				var temp = this[j + 1]; // Temporarily store the value of the index in front because we change it before it is used.
				this[j + 1] = this[j]; // Swaps the values - the one in front becomes the current one
				this[j] = temp; // The current one becomes the one in front.
			}
		}
	}
	return this; // Return the array after each element has been swapped accordingly
};
/*
* A function to reverse the array.
* The function iterates over the array
* backwards, and pushes each item into 
* a temporary array. The temporary array
* will have all the elements from the main 
* array, but in reverse order (because it
* was iterated over backwards).
* As the array is being iterated over,
* for each item we push to the temporary array,
* we splice from the main array.
* This results in the main array being empty
* and the temporary array being the main array
* but in reverse order. Then all we do is
* join the arrays together, and return.
*/
Array.prototype.reverseArray = function(){
	var temp = []; // Temporary array
	for(var i = this.length - 1; i >= 0; i--){ // Loop over the main array backwards
		temp.push(this[i]); // Push each element from the main array to the temporary array in reverse order
		this.splice(i,1); // Get rid of each element added to the temporary array from the main array
	}
	return this.concat(temp); // Join the arrays and return
}
/*
* A function to remove specific variable types from an array.
* It loops through the array checks if the element
* at the current index is a type of the element
* the user specified.
* If it is, remove it. 
*/
Array.prototype.removeType = function(type){
	for(var i = 0; i < this.length; i++){ // Loops over to make sure everything is checked.
		for(var j = 0; j < this.length; j++){ // Loops over each elements in the array.
			if(typeof this[j] == type){ // If the current element is a type of variable that the user specified...
				this.splice(j,1); // Delete it
			}
		}
	}
	return this; // Return the array.
}
/*
* An alternative function to clear an array.
* It splices each element from index 0 to the last index,
* resulting in an empty array.
*/
Array.prototype.wipe = function(){
	this.splice(0, this.length); // Splice each element
	return this; // Return the array
}
