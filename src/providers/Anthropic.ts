import { IServiceProvider } from './types';

export default {
  name: 'Anthropic',
  apiBase: 'https://api.anthropic.com/',
  currency: 'USD',
  options: {
    apiBaseCustomizable: true,
    apiKeyCustomizable: true,
  },
  chat: {
    apiSchema: ['base', 'key', 'model'],
    topP: { min: 0, max: 1, default: null },
    temperature: { min: 0, max: 1, default: 1.0 },
    options: {
      modelCustomizable: true,
    },
    models: {
      'claude-3.5-sonnet-latest': {
        name: 'claude-3-5-sonnet-20241022',
        contextWindow: 200000,
        maxTokens: 8192,
        inputPrice: 0.003,
        outputPrice: 0.015,
        vision: {
          enabled: true,
          allowBase64: true,
          allowedMimeTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
          ],
        },
        description: `Most intelligent multilingual model, highest level of intelligence and capability`,
        group: 'Claude-3.5',
      },
      'claude-3.5-sonnet': {
        name: 'claude-3-5-sonnet-20240620',
        contextWindow: 200000,
        maxTokens: 8192,
        inputPrice: 0.003,
        outputPrice: 0.015,
        vision: {
          enabled: true,
          allowBase64: true,
          allowedMimeTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
          ],
        },
        isDefault: true,
        description: `Most intelligent multilingual model, highest level of intelligence and capability`,
        group: 'Claude-3.5',
      },
      'claude-3.5-haiku': {
        name: 'claude-3-5-haiku-20241022',
        contextWindow: 200000,
        maxTokens: 8192,
        inputPrice: 0.001,
        outputPrice: 0.005,
        description: `The fastest model of Anthropic, Intelligence at blazing speeds`,
        group: 'Claude-3.5',
      },
      'claude-3-opus': {
        name: 'claude-3-opus-20240229',
        contextWindow: 200000,
        maxTokens: 4096,
        inputPrice: 0.015,
        outputPrice: 0.075,
        vision: {
          enabled: true,
          allowBase64: true,
          allowedMimeTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
          ],
        },
        description: `Powerful multilingual model for highly complex tasks, top-level performance, intelligence, fluency, and understanding`,
        group: 'Claude-3',
      },
      'claude-3-sonnet': {
        name: 'claude-3-sonnet-20240229',
        contextWindow: 200000,
        maxTokens: 4096,
        inputPrice: 0.003,
        outputPrice: 0.015,
        vision: {
          enabled: true,
          allowBase64: true,
          allowedMimeTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
          ],
        },
        description:
          'A multilingual model with balance of intelligence and speed, strong utility, balanced for scaled deployments',
        group: 'Claude-3',
      },
      'claude-3-haiku': {
        name: 'claude-3-haiku-20240307',
        contextWindow: 200000,
        maxTokens: 4096,
        inputPrice: 0.000025,
        outputPrice: 0.00125,
        vision: {
          enabled: true,
          allowBase64: true,
          allowedMimeTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
          ],
        },
        description:
          'Fastest and most compact multilingual model for near-instant responsiveness, quick and accurate targeted performance',
        group: 'Claude-3',
      },
    },
  },
} as IServiceProvider;
