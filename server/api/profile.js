const router = require('express').Router()
const {User, Candidate, Organization, Job} = require('../db/models')

// mounted on /api/profile

router.get('/', async (req, res, next) => {
  let details
  try {
    console.log('REQ USER IN USER DETAILS', req.user)
    if (req.user.userType === 'CANDIDATE') {
      details = await Candidate.findOne({
        where: {
          userId: req.user.id,
        },
      })
    } else {
      details = await Organization.findOne({
        where: {
          userId: req.user.id,
        },
        include: {
          model: Job,
        },
      })
    }
    console.log('details:', details)
    res.send(details)
  } catch (error) {
    next(error)
  }
})

module.exports = router
