import { genAI } from './gemini';

export const vectorize = async (input: string): Promise<number[]> => {
  const embedder = genAI.getGenerativeModel({ model: 'embedding-1.0' });

  const embeddingResponse = await embedder.embedContent(input);

  const vector = embeddingResponse.embedding.values;

  return vector;
};
