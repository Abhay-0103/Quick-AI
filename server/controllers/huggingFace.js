import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HUGGING_FACE_API);

const ImageGeneration = async (prompt) => {

    const image = await client.textToImage({
        model: "black-forest-labs/FLUX.1-schnell",
        inputs: prompt,
        parameters: {
            num_inference_steps: 5
        }
    });

    return image;
};

export default ImageGeneration;