import express from 'express'
import {
  getPersons,
  getPerson,
  addPerson,
  editPerson,
  deletePerson,
} from '../controllers/persons.js'

const router = express.Router()

router.get('/', getPersons)
router.get('/:id', getPerson)
router.post('/', addPerson)
router.patch('/:id', editPerson)
router.delete('/:id', deletePerson)

export default router
