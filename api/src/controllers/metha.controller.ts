import { Request, Response } from 'express'
import { findUserById } from '../service/user.service';
import { createNewMetha, deleteMethaById, doneMetha, updateMethaById } from '../service/metha.service';

export const createMetha = async (req: Request, res: Response) => {

    const { id } = req.params

    const { category, title, done = false } = req.body

    if (!title) {
        res.status(401).json({ message: "Metha não adicionada!" });
        return
    }

    if (!category) {
        res.status(401).json({ message: "A Categoria de Metha não adicionada!" });
        return
    }

    const metha = await createNewMetha(req.body);

    const user = await findUserById(id);

    user?.methas.push(metha._id);

    user?.save();

    res.status(200).send(metha);

}

export const deleteMetha = async (req: Request, res: Response) => {
    const { metha_id } = req.body

    if (!metha_id) {
        res.status(401).json({ message: "ID da Metha não adicionada!" });
        return
    }

    try {
        await deleteMethaById(metha_id)
    } catch (error) {
        res.status(403).send(error)
        return
    }

    res.status(200).send('Metha deletada!')
}

export const editMetha = async (req: Request, res: Response) => {

    const { metha_id, title } = req.body

    if (!metha_id) {
        res.status(401).json({ message: "ID da Metha não adicionada!" });
        return
    }

    try {
        await updateMethaById(metha_id, {
            title: title
        })
    } catch (error) {
        res.status(403).send(error)
        return
    }

    res.status(200).send('Metha alterada com sucesso!')
}

export const completeMetha = async (req: Request, res: Response) => {
    const { _id } = req.body

    if (!_id) {
        res.status(401).send("Id não adicionado" )
        return
    }

    try {
        await doneMetha(_id)
    } catch (error) {
        res.status(403).send('Task não encontrada')
        return
    }

    res.status(200).send('Task completa!')
}
