// Define your models here.
export const models = [
  {
    label: 'claude-3-5-sonnet',
    name: 'claude-3-5-sonnet-20240620',
    description: 'For complex, multi-step tasks',
  },
  {
    label: 'claude-3-5-sonnet-latest',
    name: 'claude-3-5-sonnet-20241022',
    description: 'For complex, multi-step tasks',
  },
  {
    label: 'GPT 4o mini',
    name: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    label: 'GPT 4o',
    name: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: Model['name'] = 'claude-3-5-sonnet-20240620';

export type Model = (typeof models)[number];
