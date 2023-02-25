import methaModel from "../models/metha.model";

export function createNewMetha(input: object) {
    return methaModel.create(input);
}

export function deleteMethaById(id: string) {
    return methaModel.deleteOne({ id })
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
