import Step from "./Step.jsx";
import StepsData from "../data/stepsData.json"

export default function Steps () {

  return (
    <div className="steps">
      {StepsData.map((step, index) => (
        <Step
          key={index}
          number={index + 1}
          title={step.title}
          description={step.description}
          icon={`icon-${step.icon}`}
        />
      ))}
    </div>
  );
}