const dao = require('../db/tweets/tweets-dao');
module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));
    const createTweet = (req, res) =>
        dao.createTweet(req.body)
            .then((insertedTweet) => res.json(insertedTweet));

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));

    const likeTweet = (req, res) =>
        dao.likeTweet(req.params.id)
            .then((updatedTweet) => res.json(updatedTweet));


    app.put('/rest/tweets/:id/like', likeTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.post('/rest/tweets', createTweet);
    app.get('/rest/tweets', findAllTweets);
};
