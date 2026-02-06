
import React from 'react';
import { Project, Service, Skill } from './types';

// আপনার দেওয়া নতুন ছবির লিঙ্কটি এখানে যুক্ত করা হলো
export const PROFILE_IMAGE = "https://i.ibb.co.com/5gYdRL3t/1000117103-removebg-preview.png"; 

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Laravel Platform',
    description: 'A robust online shopping solution built with PHP Laravel, featuring inventory management and secure payments.',
    tags: ['PHP', 'Laravel', 'MySQL'],
    imageUrl: 'https://picsum.photos/seed/laravel/800/600',
    category: 'Web'
  },
  {
    id: '2',
    title: 'Corporate Brand Identity',
    description: 'Complete visual identity design including logos, social media kits, and marketing materials.',
    tags: ['Photoshop', 'Illustrator', 'Branding'],
    imageUrl: 'https://picsum.photos/seed/brand/800/600',
    category: 'Design'
  },
  {
    id: '3',
    title: 'Sales Tracking Dashboard',
    description: 'Custom tool for monitoring regional sales performance and customer relationships.',
    tags: ['React', 'Firebase', 'Data Vis'],
    imageUrl: 'https://picsum.photos/seed/sales/800/600',
    category: 'Web'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Web Development',
    description: 'Full-stack development specializing in PHP Laravel and modern frontend frameworks.',
    icon: 'layout'
  },
  {
    id: 's2',
    title: 'Graphics Design',
    description: 'Creative visual solutions, from UI design to corporate branding and marketing assets.',
    icon: 'feather'
  },
  {
    id: 's3',
    title: 'Sales & Marketing',
    description: 'Strategic market penetration and relationship management with a proven track record.',
    icon: 'smartphone'
  },
  {
    id: 's4',
    title: 'Computer Operations',
    description: 'Expertise in office software, data management, and system optimization.',
    icon: 'cpu'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Sales Marketing', level: 100 },
  { name: 'Web Development (Laravel)', level: 85 },
  { name: 'Graphics Design', level: 80 },
  { name: 'Computer Operator', level: 90 },
  { name: 'Communication Skills', level: 95 },
  { name: 'Customer Relations', level: 90 }
];

export const EDUCATION = [
  {
    title: "Bachelor Of Business Administration (B.B.A)",
    institution: "Habibullah Bahar University, Dhaka",
    period: "2022 - Present"
  },
  {
    title: "Higher Secondary Certificate (H. S. C)",
    institution: "Gazipur Metropolitan College, Gazipur",
    period: "2020 - 2021"
  },
  {
    title: "Secondary School Certificate (S. S. C)",
    institution: "Noapara M.H High School, Kaligonj, Gazipur",
    period: "2013 - 2019"
  }
];

export const EMPLOYMENT = [
  {
    role: "Sales Representative",
    company: "Pran-RFL Group (Mr. Noodles), Gazipur",
    period: "Jun 2025 - Present"
  },
  {
    role: "Sales Representative",
    company: "ACI Limited, Gazipur",
    period: "2024 - 2025"
  },
  {
    role: "Sales Representative",
    company: "Reckitt Benckiser, Gazipur",
    period: "2022 - 2024"
  }
];

export const PORTFOLIO_OWNER_CONTEXT = `
You are the AI Assistant for Mahedi Hasan Rabbi.
Professional Background:
- Award-winning Sales Representative at PRAN-RFL Group (Super SR Award 2024-2025).
- Expertise in Sales Marketing, Web Development (PHP Laravel), and Graphics Design.
- Education: BBA Student at Habibullah Bahar University.
- Skills: Customer Relationship Management, Computer Operations, and Brand Design.
- Languages: English and Hindi.
Rabbi is based in Gazipur, Dhaka. He is known for exceeding targets and building strong client relations while delivering high-quality digital solutions.
Contact: rabbiahamed026@gmail.com | +880 1403-751408.
`;
