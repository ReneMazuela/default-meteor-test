import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { CodeAssistant } from '../components/CodeAssistant.jsx';

export const App = () => (
  <div className="App">
      <h1 className="text-center text-2xl font-bold mt-4">OpenAI Code Assistant</h1>
      <CodeAssistant />
    </div>
);


