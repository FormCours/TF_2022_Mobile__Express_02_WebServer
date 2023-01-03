const HomeController = {

    index: (req, res) => {
        const date = new Date();
        const dateOfDay = date.toLocaleDateString('fr-be', {
            dateStyle: 'long',
        });

        const people = [
            { firstname: 'Zaza', lastname: 'Vanderquack' },
            { firstname: 'Della', lastname: 'Duck' },
            { firstname: 'Balthazar', lastname: 'Picsou' },
        ];

        res.render('home/index', { dateOfDay, people });
    },

    contact_GET: (req, res) => {
        res.render('home/contact', {
            data: {},
            errors: {}
        });
    },

    contact_POST: (req, res) => {
        // Récuperation des données du formulaire
        const { pseudo, message } = req.body;

        // Remarque : des bibliotheques de validation existe !
        const pseudoNotValid = !pseudo || pseudo.length < 2;
        const messageNotValid = !message;

        if (pseudoNotValid || messageNotValid) {
            res.render('home/contact', {
                errors: {
                    pseudo: pseudoNotValid,
                    message: messageNotValid,
                },
                data: {
                    pseudo,
                    message
                }
            });
            return;
        }

        // Traitement -> Par exemple: stockage en DB
        console.log(`MESSAGE ${pseudo} : ${message}`);

        res.redirect('/');
    },

};

module.exports = HomeController;