function senddetails() {
    /* To debug use this feature
         
         console.log("user is: " + name);
         console.log("user email is: " + email);
         console.log("user message is: " + message)
     */
    email = document.getElementById("user_email").value;
    message = document.getElementById("user_message").value;
    name = document.getElementById("user_name").value;
    // This opens a window in end user's desktop or phone to refine the query 
    if (!name || !message || !email) {
        alert("Name or Message or Email is empty\nPlease enter correct details\nTry Again");
    }
    else {

        window.open('mailto:astrobishan@gmail.com?subject=Astrology Query&body=' + message + "%0A%0D%0A%20Sent%20By,%0D%0A" + name);
        //setting up the value as null after the mail is sent
        // to further change the appearance of div section to null

        document.getElementById("user_name").style.visibility = 'hidden';
        document.getElementById("user_email").style.visibility = 'hidden';
        document.getElementById("user_message").style.visibility = 'hidden';
        document.getElementById("btn_send").innerHTML = "Message Sent";
    }


}