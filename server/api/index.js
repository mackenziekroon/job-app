const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/candidate', require('./candidate'))
router.use('/organization', require('./organization'))
router.use('/job', require('./job'))
router.use('/profile', require('./profile'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})