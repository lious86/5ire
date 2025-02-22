import { IChatModel, IServiceProvider } from "providers/types";
import { ICollection } from "types/knowledge";

export interface IChatResponseMessage {
  content: string;
  isEnd?: boolean;
  inputTokens?: number;
  outputTokens?: number;
  context?: string;
  error?: {
    code?: number;
    type?: string
    message: string;
  };
}

export interface IChatRequestMessageContent {
  type: 'text' | 'image_url' | 'image' | 'function';
  text?: string;
  image_url?: {
    url: string
  };
  function?: {
    name: string;
    description?: string;
    parameters?: any;
  };
  source?:{
    type:string,
    media_type:string,
    data: string
  }
}


export interface IGeminiChatRequestMessageContent {
  text?: string;
  inline_data?: {
    mimeType: string;
    data: string;
  };
}

export interface IChatRequestMessage {
  role: string;
  content?:
    | string
    | IChatRequestMessageContent[];
  parts?: IGeminiChatRequestMessageContent[];
}

export interface IChatRequestPayload {
  model?: string;
  temperature?: number;
  max_tokens?: number | null;
  presence_penalty?: number;
  top_p?: number;
  stream?: boolean;
  prompt?:string; //ollama
  context?: number[]; // ollama
  system?: string; // baidu, anthropic, ollama
  options?: {
    temperature?: number;
    max_tokens?: number | null;
  };
  messages?: IChatRequestMessage[];
  contents?: IChatRequestMessage[];
  generationConfig?:{
    maxOutputTokens?: number;
    top_p?: number;
    temperature?: number;
  }
}

export type ModelGroup =
  | 'GPT-3.5'
  | 'GPT-4'
  | 'Gemini'
  | 'ERNIE'
  | 'Moonshot'
  | 'Open Source';

export interface IChatContext {
  getActiveChat: ()=> IChat;
  getProvider: ()=> IServiceProvider;
  getModel: ()=> IChatModel;
  getSystemMessage: () => string | null;
  getTemperature: () => number;
  getMaxTokens: () => number | null;
  getChatContext: () => string;
  getCtxMessages: () => IChatMessage[];
  isStream: () => boolean;
}

export interface IChat {
  id: string;
  summary: string;
  model?: string;
  systemMessage?: string | null;
  maxCtxMessages?: number;
  temperature?: number;
  stream?:boolean;
  context?: string|null;
  maxTokens?: number | null;
  createdAt: number | null;
  isPersisted?:boolean
}

export interface IChatMessage {
  id: string;
  bookmarkId?: string | null;
  chatId: string;
  systemMessage?: string | null;
  prompt: string;
  reply: string;
  model: string;
  temperature: number;
  maxTokens: number | null;
  inputTokens: number;
  outputTokens: number;
  memo?: string;
  createdAt: number;
  isActive: boolean | 0 | 1;
  citedFiles?: string;
  citedChunks?: string;
}

export interface IPromptDef {
  id: string;
  name: string;
  systemMessage: string;
  userMessage: string;
  maxTokens?: number;
  temperature?: number;
  systemVariables?: string[];
  userVariables?: string[];
  models?: string[] | null;
  createdAt: number;
  updatedAt: number;
  pinedAt: number | null;
}

export interface IPrompt {
  id: string;
  name: string;
  systemMessage: string;
  userMessage: string;
  maxTokens?: number;
  temperature?: number;
}

export interface IStage {
  chatId: string;
  systemMessage?: string | null;
  prompt?: IPrompt | null;
  input?: string;
  temperature?: number;
  maxTokens?: number | null;
}
