// Variables
var IconWhatsapp = document.querySelector('#icon-whatsapp');
var form_zap = document.getElementById('form_zap');
var closemodal = document.querySelector('.closemodal');
var send_button = document.querySelector('#send_button');

// Open modal when click on whatsapp button.
IconWhatsapp.addEventListener('click' , function(){
    form_zap.classList.toggle('openclose')
})
// Close modal when click on X insade of modal.
closemodal.addEventListener('click' , function(){
    form_zap.classList.remove('openclose')
})
// Function that send the message to right option on select in form.
send_button.addEventListener('click' , send)


function send(){ // This function is activated when the button with id="send_button" is clicked.


    let name = document.querySelector('#inputname').value; // The variable 'name' get the value from id="inputname"
    let number = document.querySelector('#select_number').value; // The variable 'number' get the number of whatsapp inserted into option value selected.
    let text = select_number.selectedOptions[0].text; // The variable 'text' get the label from option selected.
    
    if (name != 0 && number != ""){ //name and number is required to send the message.
        let url = "https://api.whatsapp.com/send?phone=" + number + "&text=Olá,%20meu%20nome%20é:%0A*" + name + "*.%0AE%20gostaria%20de%20falar%20sobre%20o%20curso%20de%20*" + text + "*."; // This link sends message to whatsapp web or whatsapp app mobile. Ps: '%20' is equal a blank space " ", and '%0A' is to line break.
        window.open(url);
    }

}