
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  category: 'Web' | 'Mobile' | 'Design' | 'AI';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
