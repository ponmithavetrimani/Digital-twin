export interface User {
  id: string;
  name: string;
  email?: string;
  personality?: string;
  preferences?: {
    responseStyle?: string;
    language?: string;
    memoryEnabled?: boolean;
  };
}