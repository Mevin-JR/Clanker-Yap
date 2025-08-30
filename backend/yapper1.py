from transformers import pipeline
import re

def parse_model_output(raw: str) -> str:
    parts = raw.split("<start_of_turn>model")
    if len(parts) > 1:
        text = parts[-1]
        text = re.sub(r"<.*?>", "", text)
        return text.strip()
    return raw.strip()

def yapper1_text_generation(text: str) -> str:
    pipe = pipeline("text-generation", model="google/gemma-2b-it")

    messages = [
        # {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": text},
    ]

    tokenizer = pipe.tokenizer
    prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)

    outputs = pipe(prompt, max_new_tokens=256)
    return parse_model_output(outputs[0]["generated_text"])
