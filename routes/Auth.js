import express from 'express'
import { Login, resetPassword } from '../controller/Auth.controller.js'

const authentication = express.Router()

authentication.post("/userLogin", Login)
authentication.put("/resetPassword", resetPassword)

export default authentication 