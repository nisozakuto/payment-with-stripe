require('dotenv').config

const express = require('express')
const app = express()

app.use(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 1000, name: "Learn react" }],
    [2, { priceInCents: 2000, name: "Learn CsS" }]
])

app.listen(3000)