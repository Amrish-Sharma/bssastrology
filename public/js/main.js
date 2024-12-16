//to get the horoscope

function gethoroscope()
{

    var x = document.createElement('script');
    x.src = './data/horoscope.txt';

    console.log(x.text);
  

}





// to send the details via the contact button
function senddetails() {

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
//to select the book consultation button
function bookconsultation() {
    const btn = document.querySelector('#book-btn');

    const srvc = document.querySelectorAll('input[name="service"]');

    let selectedvalue;

    for (const srv of srvc) {
        if (srv.checked) {
            selectedvalue = srv.value;
            break;
        }
    }
    //console.log(selectedvalue);

    if (selectedvalue == "kundli-analysis") {

        console.log("You have selected kundli analysis");
        window.open("https://www.payumoney.com/paybypayumoney/#/BD9D6CA8CE98E46246BFA8CCEBBB7191");
    }

    else if (selectedvalue == "kundli-matching") {
        console.log("You have selected kundli matching");
        window.open("https://www.payumoney.com/paybypayumoney/#/BD9D6CA8CE98E46246BFA8CCEBBB7191");

    }
    else if (selectedvalue == "palm-reading") {
        console.log("You have selected palm reading");
        window.open("https://www.payumoney.com/paybypayumoney/#/BD9D6CA8CE98E46246BFA8CCEBBB7191");

    }

    else if (selectedvalue == "vastu-consultation") {

        console.log("You have selected vastu consultation");
        window.open("https://www.payumoney.com/paybypayumoney/#/BD9D6CA8CE98E46246BFA8CCEBBB7191");

    }

    else {
        console.log("Hello,Please select correct details");
        alert("Please select the correct service again :)")

    }
}