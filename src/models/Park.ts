import { Document, Model, model, Schema } from "mongoose";


export interface IPark extends Document {
  name: string;
}

const parkSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
});

const Park = model<IPark>('Park', parkSchema);

export default Park;
