import { useState } from "react";
import { Action } from "../application/employees/master-record/page";
import { v4 } from "uuid";

interface SwitchChoiceSelectorProps {
  choices: { choiceLabel: string; value: string }[];
  name: string;
  defaultVal?: string | number;
  disabled?: boolean;
  title: string;
  titleStyle?: string;
  stateFunctionProp: React.Dispatch<Action>;
}

export const SwitchChoiceSelector = ({
  choices,
  name,
  title,
  stateFunctionProp,
}: SwitchChoiceSelectorProps) => {
  return (
    <div>
      <h2 className="block font-bold text-myDarkBlue mb-1">{title}</h2>

      <div className="flex">
        {choices.map(({ choiceLabel, value }, index) => {
          if (index === 0) {
            return (
              <div key={String(index)}>
                <input
                  type="radio"
                  className="peer  w-0.5 h-0.5 appearance-none outline-none"
                  name={name}
                  value={value}
                  id={value}
                  onChange={(e) =>
                    stateFunctionProp({
                      type: "TOGGLE_FIELD_TYPE",
                      payload: e.target.value,
                    })
                  }
                />
                <label
                  htmlFor={value}
                  className="px-2 py-1 text-myDarkBlue cursor-pointer bg-white  peer-checked:bg-myLightBlue peer-checked:text-white rounded-tl-full rounded-bl-full"
                >
                  {choiceLabel}
                </label>
              </div>
            );
          }
          if (index === choices.length - 1) {
            return (
              <div key={String(index)}>
                <input
                  type="radio"
                  name={name}
                  value={value}
                  id={value}
                  className="peer  w-0.5 h-0.5 appearance-none outline-none"
                  onChange={(e) =>
                    stateFunctionProp({
                      type: "TOGGLE_FIELD_TYPE",
                      payload: e.target.value,
                    })
                  }
                />
                <label
                  className="px-2 py-1 text-myDarkBlue bg-white  cursor-pointer peer-checked:bg-myLightBlue peer-checked:text-white rounded-tr-full rounded-br-full"
                  htmlFor={value}
                >
                  {choiceLabel}
                </label>
              </div>
            );
          }

          return (
            <div key={String(index)}>
              <input
                type="radio"
                required
                className="peer  w-0.5 h-0.5 appearance-none outline-none"
                name={name}
                value={value}
                id={value}
                onChange={(e) =>
                  stateFunctionProp({
                    type: "TOGGLE_FIELD_TYPE",
                    payload: e.target.value,
                  })
                }
              />
              <label
                htmlFor={value}
                className="px-2 py-1 text-myDarkBlue bg-white  cursor-pointer  peer-checked:bg-myLightBlue peer-checked:text-white"
              >
                {choiceLabel}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
