
export type UserMode = 'normal' | 'hearing' | 'sight';
export type InteractionMode = 'teaching' | 'chatbot';
export type Subject = 'Math' | 'Computer Science' | 'Physics' | 'None';
export type SessionLength = 'Short (15 min)' | 'Medium (30 min)' | 'Long (45-60 min)';

export interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
  generatedVisual?: string;
  timestamp: number;
}

export interface ExplanationResponse {
  subject: string;
  assessment: string;
  explanation: string;
  followUp: string;
  visualPrompt?: string;
  groundingLinks?: Array<{ title: string; uri: string }>;
  isConceptUnderstood?: boolean;
}

export interface AppSettings {
  userName: string;
  userMode: UserMode;
  interactionMode: InteractionMode;
  activeSubject: Subject;
  activeTopic: string;
  preferredFormat: 'Voice' | 'Written' | 'Both';
  sessionLength: SessionLength;
  isCameraOn: boolean;
  advancedMode: boolean;
}

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
    renderMathInElement: (element: HTMLElement, options: any) => void;
  }
}
