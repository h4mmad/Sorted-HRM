import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 } from "uuid";

interface SwitchChoiceSelectorProps {
  choices: { choiceLabel: string; value: string }[];
  name: string;
  title: string;
  register: any;
}

export const FieldTypeSelector = ({
  choices,
  name,
  title,
}: SwitchChoiceSelectorProps) => {
  return (
    <div>
      <p className="block font-bold text-myDarkBlue">{title}</p>

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
                />
                <label
                  htmlFor={value}
                  className="p-2 text-myDarkBlue cursor-pointer bg-white  peer-checked:bg-myLightBlue peer-checked:text-white rounded-tl-full rounded-bl-full"
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
                />
                <label
                  className="p-2 text-myDarkBlue bg-white  cursor-pointer peer-checked:bg-myLightBlue peer-checked:text-white rounded-tr-full rounded-br-full"
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
              />
              <label
                htmlFor={value}
                className="p-2 text-myDarkBlue bg-white  cursor-pointer  peer-checked:bg-myLightBlue peer-checked:text-white"
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
