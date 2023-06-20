import methods from '../controllers/team.js'
import express ,{ Application } from 'express'

const {GET_TEAM, POST_TEAM, PUT_TEAM, DELETE_TEAM} = methods
const team: Application = express()
team.get("/team", GET_TEAM)
team.get("/team/:id", GET_TEAM)
team.post("/team", POST_TEAM)
team.put('/team:id', PUT_TEAM)
team.delete("/team/:id", DELETE_TEAM)
export { team }