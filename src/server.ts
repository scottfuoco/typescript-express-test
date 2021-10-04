import dotenv from 'dotenv'

if(process.env.NODE_ENV !== 'development'){
    dotenv.config();
}

import express, { Request, Response } from "express";
import { User } from './models/User';
import {
    ValidatedRequest,
    createValidator
  } from 'express-joi-validation'

import { QuerySchema, querySchema } from './schema/UserGet';
import {db} from './db';

const validator = createValidator()

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000

app.get('/user', validator.query(querySchema), async (req: ValidatedRequest<QuerySchema>, res: Response) => {
    const { email } = req.query

    const user = await User.findOne({ email });

    res.status(200).send({message: 'success!', data: user})
})

app.post('/user', async (req, res) => {
    const {email, username} = req.body;

    await User.create({
        email,
        username
    });

    res.status(201).json({message: 'success'})
})

app.listen(process.env.PORT, async () => {
    console.log(`App running on port ${PORT}`);
    await db.start()
})