import MethasModel from '../models/metha.model'
import { Request, Response } from 'express'

export const createMetha = async (req: Request, res: Response) => {

    const { category, title, done = false } = req.body

    if (!title) {
        res.status(401).json({ message: "Metha não adicionada!" })
        return
    }

    MethasModel
        .create({
            category,
            title,
            done: done
        })
        .then(() => res.status(201).json(req.body))
        .catch((err) => res.status(401).json({ message: err }));
}