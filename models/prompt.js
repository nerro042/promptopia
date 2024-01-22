import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const bigSchema = new Schema();

bigSchema.add(promptSchema).add({
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt = models.prompt || model("prompt", bigSchema);

export default Prompt;
