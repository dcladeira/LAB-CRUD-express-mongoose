import { model, Schema } from "mongoose";

const albumSchema = new Schema({
    performer: {
        type: String
    },
    title: {
        type: String
    },
    cost: {
        type: Number
    }
});

const Album = model("Album", algumSchema);

export default Album;