const eraController = {
    index: (req, res) => {
        res.render('home');
    },
    music: (req, res) => {
        res.render('music');
    },
    artist: (req, res) => {
        res.render('artist');
    },
    favorites: (req, res) => {
        res.render('favorites');
    },
    library: (req, res) => {
        res.render('library');
    }
};

module.exports = eraController;