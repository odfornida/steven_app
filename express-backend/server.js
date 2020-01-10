const express = require('express')
const colors = require('colors')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3200

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/images', (req, res) => res.send(db))
app.post('/people', function(req, res){
    var name = req.body.name;
    var num = req.body.num;
    var email = req.body.email;
    console.log(req);

    res.send(name + ' ' + num + ' ' + email);
});

app.listen(port, () => console.log(`Express backend listening on port ${port}!`.blue))

const db = {
    'headshots': [
        {
            'name': "B&W",
            'desc': "black and white headshot of a man",
            'url': "https://unsplash.com/photos/moDxmttUP00",
        },
        {
            'name': "Lion",
            'desc': "headshot of lion",
            'url': "https://unsplash.com/photos/nBaFCyujzGg",
        },
        {
            'name': "sunset",
            'desc': "headshot of a girl at sunset",
            'url': "https://unsplash.com/photos/nLfAqmZ2hJo",
        },
        {
            'name': "profile",
            'desc': "headshot of a man in profile view",
            'url': "https://unsplash.com/photos/GpM4P__U7ug",
        },
    ],
    'dataing_profile': [
        {
            'name': "accordion",
            'desc': "man playing accordion B&W",
            'url': "https://unsplash.com/photos/tALckNoPgpI",
        },
        {
            'name': "in-the-crowd",
            'desc': "man with mic in middle of a crowd",
            'url': "https://unsplash.com/photos/YC5R__f90SQ",
        },
        {
            'name': "DJ",
            'desc': "DJ at a festival B&W",
            'url': "https://unsplash.com/photos/_3UKTp06gPY",
        },
        {
            'name': "smoking",
            'desc': "man smoking cigarette",
            'url': "https://unsplash.com/photos/vFCU8cE2i_o",
        },
    ],
    'landscaps': [
        {
            'name': "ballo0n",
            'desc': "hot-air balloons in front of sunset",
            'url': "https://unsplash.com/photos/t7YycgAoVSw",
        },
        {
            'name': "purple-haze",
            'desc': "lavender bushes",
            'url': "https://unsplash.com/photos/K2s_YE031CA",
        },
        {
            'name': "body of water",
            'desc': "bust in a pool",
            'url': "https://unsplash.com/photos/BiWcSlcQgSA",
        },
        {
            'name': "pines",
            'desc': "green forest and fog",
            'url': "https://unsplash.com/photos/PDfe7H5GJR0",
        },
    ]
}