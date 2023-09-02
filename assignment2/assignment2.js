var submitBtn = null;

submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
	submitBtn.addEventListener("click", sendComments, false);
}

function sendComments (e) {
	let msg = "Thank you for sending your comments. Your comments have already been thrown into the dustbin of the Interwebs, and will be ignored at once!"	;

} // End of sendComments
