import methods from '../controllers/team.js'
import express, { Application } from 'express'
import adminChecker from '../middleware/admin.checker.js'

const { GET_TEAM, POST_TEAM, PUT_TEAM, DELETE_TEAM } = methods
const team: Application = express()
team.get("/team", GET_TEAM)
team.get("/team/:id", GET_TEAM)
team.post("/team", adminChecker, POST_TEAM)
team.put('/team/:id', adminChecker, PUT_TEAM)
team.delete("/team/:id", adminChecker, DELETE_TEAM);
export { team }