import React from 'react';
import { Layout } from './Layout';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { UpcomingProject } from './UpcomingProject';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { AIAssistant } from './AIAssistant';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <UpcomingProject />
      <Skills />
      <Contact />
      <AIAssistant />
    </Layout>
  );
};

export default App;