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
        'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
    },
    {
        'name': "Lion",
        'desc': "headshot of lion",
        'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
    },
    {
        'name': "sunset",
        'desc': "headshot of a girl at sunset",
        'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
    },
    {
        'name': "profile",
        'desc': "headshot of a man in profile view",
        'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
    },
    {
      'name': "B&W",
      'desc': "black and white headshot of a man",
      'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
  },
  {
      'name': "Lion",
      'desc': "headshot of lion",
      'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
  },
  {
      'name': "sunset",
      'desc': "headshot of a girl at sunset",
      'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
  },
  {
      'name': "profile",
      'desc': "headshot of a man in profile view",
      'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
  },
  {
    'name': "B&W",
    'desc': "black and white headshot of a man",
    'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
    'name': "Lion",
    'desc': "headshot of lion",
    'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
    'name': "sunset",
    'desc': "headshot of a girl at sunset",
    'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
    'name': "profile",
    'desc': "headshot of a man in profile view",
    'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
  'name': "B&W",
  'desc': "black and white headshot of a man",
  'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
  'name': "Lion",
  'desc': "headshot of lion",
  'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
  'name': "sunset",
  'desc': "headshot of a girl at sunset",
  'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
  'name': "profile",
  'desc': "headshot of a man in profile view",
  'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
'name': "B&W",
'desc': "black and white headshot of a man",
'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
'name': "Lion",
'desc': "headshot of lion",
'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
'name': "sunset",
'desc': "headshot of a girl at sunset",
'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
{
'name': "profile",
'desc': "headshot of a man in profile view",
'url': "https://car-images.bauersecure.com/pagefiles/8181/bmw_xdrive_050.jpg",
},
    ],
    'dating profiles': [
        {
            'name': "accordion",
            'desc': "man playing accordion B&W",
            'url': "http://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg",
        },
        {
            'name': "in-the-crowd",
            'desc': "man with mic in middle of a crowd",
            'url': "http://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg",
        },
        {
            'name': "DJ",
            'desc': "DJ at a festival B&W",
            'url': "http://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg",
        },
        {
            'name': "smoking",
            'desc': "man smoking cigarette",
            'url': "http://vickmark.com/wp-content/uploads/2011/03/12-704-page/ato-headshot(pp_w1251_h834).jpg",
        },
    ],
    'landscapes': [
        {
            'name': "ballo0n",
            'desc': "hot-air balloons in front of sunset",
            'url': "https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg",
        },
        {
            'name': "purple-haze",
            'desc': "lavender bushes",
            'url': "https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg",
        },
        {
            'name': "body of water",
            'desc': "bust in a pool",
            'url': "https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg",
        },
        {
            'name': "pines",
            'desc': "green forest and fog",
            'url': "https://miro.medium.com/max/4320/0*QNdQhs_T3ffa6B0m.jpeg",
        },
    ]
  }