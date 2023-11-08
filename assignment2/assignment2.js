// Initialize the variables
var submitBtn = null;


// Get the Submit Button and the div that we'll make an aria live region
submitBtn = document.getElementById("submitBtn");


// Some error handling
if (submitBtn) {
        // Listen for the "click" event on the button; when someone clicks it, run function sendComments(e)
        submitBtn.addEventListener("click", sendComments, false);
} else {
        console.error ("Did not get the submit button for some reason.");
}

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Add code to handle form submission, e.g., display the status message
    // Keep focus on the Submit button
    document.getElementById('submitBtn').focus();
 });

function sendComments (e) {
	e.preventDefault();  // When uncommented, this will prevent the form from submitting when the button is clicked

	// This is the message we want added to the aria live region
	let msg = "Thank you for sending your comments. Your comments have already been thrown into the dustbin of the Interwebs, and will be ignored at once!"	;

	messageCentre.innerText = msg;  // Uncomment to add the msg text to the live region.
	
} // End of sendComments
