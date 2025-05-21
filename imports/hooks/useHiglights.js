import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx'; 
export const useHighlight = (code) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
};