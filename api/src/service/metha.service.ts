import methaModel from "../models/metha.model";

export function createNewMetha(input: {
    category: string,
    title: string,
    done: boolean,
    owner: string
}) {
    return methaModel.create(input);
}

export function deleteMethaById(id: string) {
    return methaModel.findByIdAndDelete(id)
}

export function updateMethaById(id: string, metha: {
    title: string
}) {
    return methaModel.findByIdAndUpdate(id, metha)
}

export function doneMetha(id: string) {
    return methaModel.findByIdAndUpdate(id, {
        done: true
    })
}

export function notDoneMetha(id: string) {
    return methaModel.findByIdAndUpdate(id, {
        done: false
    })
}

export function getAllMethaById(id: string) {
    return methaModel.find({ owner: id })
}
