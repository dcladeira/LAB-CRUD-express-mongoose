import { model, Schema } from "mongoose";

const purchaseSchema = new Schema({
    shippingAddress: {
        type: String
    },
    algum: {
        type: Schema.Types.ObjectId,
        ref: "Album"
    }
});

const Purchase = model("Purchase", purchaseSchema);

export default Purchase;