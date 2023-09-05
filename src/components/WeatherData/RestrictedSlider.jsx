import { useState } from "react";
import ReactSlider from "react-slider";
import "./RestrictedSlider.css";

const RestrictedSlider = () => {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <ReactSlider
      className="customSlider"
      thumbClassName="customSlider-thumb"
      trackClassName="customSlider-track"
      markClassName="customSlider-mark"
      marks={5}
      min={0}
      max={15}
      defaultValue={0}
      value={currentValue}
      onChange={(value) => setCurrentValue(value)}
      renderMark={(props) => {
         if (props.key < currentValue) {
           props.className = "customSlider-mark customSlider-mark-before";
         } else if (props.key === currentValue) {
           props.className = "customSlider-mark customSlider-mark-active";
         }
         return <span {...props} />;
      }}
    />
  );
};

export default RestrictedSlider;
