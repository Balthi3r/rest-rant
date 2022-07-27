const router = require('express').Router()
const places = require("../models/places")

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'The Taco Zone',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Mexican',
        pic: '/images/tacos.jpg'
      }, {
        name: 'Brunch and Code Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/waffles.jpg'
      }]
      
      res.render('places/index', { places })

  })

  router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
  
  

module.exports = router