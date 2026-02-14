import { useState } from 'react';
import QuestionScreen from './QuestionScreen';
import GiftsScreen from './GiftsScreen';

type FlowState = 'question' | 'gifts';

export default function ValentineFlow() {
  const [flowState, setFlowState] = useState<FlowState>('question');

  const handleYes = () => {
    setFlowState('gifts');
  };

  if (flowState === 'question') {
    return <QuestionScreen onYes={handleYes} />;
  }

  return <GiftsScreen />;
}
