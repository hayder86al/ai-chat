import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { LanguageModelV1 } from '@ai-sdk/provider';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { type Model } from '@/lib/model';

import { customMiddleware } from './custom-middleware';

export const customModel = (modelName: Model['name']) => {
  return wrapLanguageModel({
    model: modelName.startsWith('claude')
      ? (anthropic('claude-3-haiku-20240307') as LanguageModelV1)
      : (openai(modelName) as LanguageModelV1),
    middleware: customMiddleware,
  });
};
