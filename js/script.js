emailjs.init({
    publicKey: "jF894Zd4PoVjbfxkw",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_kako2vh",
        "template_fupw2cp",
        this
    )
    .then(function(){

        alert("Votre message a été envoyé avec succès !");

        form.reset();

    })
    .catch(function(error){

        alert("Une erreur est survenue.");

        console.log(error);

    });

});