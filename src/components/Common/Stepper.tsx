interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
}

const Stepper = ({ steps }: StepperProps) => {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
              {index + 1}
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;