import mongoose from 'mongoose'

const MethasSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("Methas", MethasSchema)
