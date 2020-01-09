const express = require('express')
const colors = require('colors')
const app = express()
const port = 3000

app.get('/images', (req, res) => res.send(db))

app.listen(port, () => console.log(`Example app listening on port ${port}!`.blue))

const db = {
    'headshots': [
        {
            'name': "ramin",
            'desc': "blabla",
            'url': "lol.com",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
    ],
    'dataing_profile': [
        {
            'name': "",
            'desc': "",
            'url': "",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
    ],
    'landscaps': [
        {
            'name': "",
            'desc': "",
            'url': "",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
        {
            'name': "",
            'desc': "",
            'url': "",
        },
    ]
}