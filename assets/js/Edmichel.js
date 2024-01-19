/*!
=========================================================
* Eddy Landing page
=========================================================

* Copyright: Edmichel2023
* Licensed: eddymichel2002@gmail.com
* Coded by Edmichel

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll


$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

           const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

/* Soumission du formulaire
    document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez le formulaire par son ID
     const contactForm = document.getElementById('contactForm');

        // Ajoutez un écouteur d'événements pour le soumission du formulaire
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Récupérez les valeurs du formulaire
           const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comment = document.getElementById('comment').value;

            // Créez un objet avec les données du formulaire
            const formData = {
                name: name,
                email: email,
                comment:comment
               
            };

            // Effectuez une requête POST vers le backend (exemple fictif)
            fetch('https://localhost:3001/api/v1/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                
                console.log('Réponse du backend:', data);

                // Ajoutez ici le code pour afficher un message de confirmation ou effectuer toute autre action nécessaire
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi de la requête:', error);
            });
        });
    }); */