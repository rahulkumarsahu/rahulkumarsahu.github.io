export interface SimulatorPrediction {
  question: string;
  options: Array<{ id: string; label: string }>;
  correct: string;
  explanation: string;
}

export function connectSimulatorPrediction(root: HTMLElement) {
  const panel = root.querySelector<HTMLElement>('[data-sim-prediction]');
  const question = root.querySelector<HTMLElement>('[data-sim-prediction-question]');
  const options = root.querySelector<HTMLElement>('[data-sim-prediction-options]');
  const feedback = root.querySelector<HTMLElement>('[data-sim-prediction-feedback]');
  const continueButton = root.querySelector<HTMLButtonElement>('[data-sim-prediction-continue]');
  let continueAction: (() => void) | undefined;

  const hide = () => {
    if (panel) panel.hidden = true;
    continueAction = undefined;
  };

  continueButton?.addEventListener('click', () => {
    const action = continueAction;
    hide();
    action?.();
  });

  return {
    show(prediction: SimulatorPrediction, onContinue: () => void) {
      if (!panel || !question || !options || !feedback || !continueButton) {
        onContinue();
        return;
      }
      question.textContent = prediction.question;
      feedback.textContent = 'Choose what you think the algorithm will do before revealing the next state.';
      continueButton.disabled = true;
      continueAction = onContinue;
      options.replaceChildren(...prediction.options.map((option) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = option.label;
        button.dataset.predictionChoice = option.id;
        button.setAttribute('aria-pressed', 'false');
        button.addEventListener('click', () => {
          options.querySelectorAll<HTMLButtonElement>('button').forEach((choice) => {
            choice.disabled = true;
            choice.setAttribute('aria-pressed', String(choice === button));
          });
          const correctLabel = prediction.options.find((choice) => choice.id === prediction.correct)?.label ?? 'the expected action';
          feedback.textContent = option.id === prediction.correct
            ? `Correct. ${prediction.explanation}`
            : `Not quite. The next action is “${correctLabel}”. ${prediction.explanation}`;
          continueButton.disabled = false;
          continueButton.focus();
        });
        return button;
      }));
      panel.hidden = false;
      options.querySelector<HTMLButtonElement>('button')?.focus();
    },
    hide,
  };
}
