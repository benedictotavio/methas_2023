import mongoose from 'mongoose'

const MethasSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        uppercase: true
    },
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false,
        required: true
    },
    owner: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model("Methas", MethasSchema)
