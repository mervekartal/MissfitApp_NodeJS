const express = require('express')
const trainingController = require('../controllers/trainingController')
const roleMiddleware = require('../middlewares/roleMiddleware')

const router = express.Router()

router.route('/').post(roleMiddleware(["trainer","admin"]), trainingController.createTraining) //http://localhost:3000/trainings
router.route('/').get(trainingController.getAllTrainings) 
router.route('/:slug').get(trainingController.getTraining) //antrenmana ait profil sayfasını getirme
router.route('/:slug').delete(trainingController.deleteTraining) //antrenmana silme
router.route('/:slug').put(trainingController.updateTraining) //antrenmana güncelleme

module.exports = router