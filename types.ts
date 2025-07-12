
export interface AnalysisResult {
  isHealthy: boolean;
  disease: string;
  description: string;
  treatment: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
