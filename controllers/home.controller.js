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
        // TODO Finish this
        res.sendStatus(501);
    },

    contact_POST: (req, res) => {
        // TODO Finish this
        res.sendStatus(501);
    },

};

module.exports = HomeController;