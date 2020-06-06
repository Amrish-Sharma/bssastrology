function senddetails() {
    /* To debug use this feature
         email = document.getElementById("user_email").value;
         console.log("user is: " + name);
         console.log("user email is: " + email);
         console.log("user message is: " + message)
     */
    message = document.getElementById("user_message").value;
    name = document.getElementById("user_name").value;
    // This opens a window in end user's desktop or phone to refine the query 
    window.open('mailto:astrobishan@gmail.com?subject=Astrology Query&body=' + message + "%0A%0D%0A%20Sent%20By,%0D%0A" + name);
}