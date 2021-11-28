const dao = require("../db/profile/profile-dao");

module.exports = (app) => {

    const getCurrentProfile = (req, res)=> {
        dao.getCurrentProfile()
            .then(profile => res.json(profile));
    }

    const updateCurrentProfile = (req, res) => {
        dao.updateCurrentProfile(req.body)
            .then(newProfile => res.json(newProfile));

    }

    app.get('/rest/profile', getCurrentProfile);
    app.put('/rest/profile', updateCurrentProfile);
}