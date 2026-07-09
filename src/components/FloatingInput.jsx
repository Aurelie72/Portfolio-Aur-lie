import { useState } from "react";

export default function FloatingInput({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  required,
  textarea
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  const Component = textarea ? "textarea" : "input";

  return (
    <fieldset
      className={`mx-[30px] my-0 rounded-lg border-1 px-4 pb-3 transition-colors duration-200
        ${textarea ? "" : "flex items-center"}
        ${focused ? "border-emerald-300" : "border-emerald-600"}`}
    >
      <legend
        className={`overflow-hidden whitespace-nowrap transition-all duration-200 text-emerald-400 ${
          floated ? "max-w-[200px] px-2 text-base" : "max-w-0 px-0 text-base"
        }`}
      >
        {label}
      </legend>

      <Component
        type={!textarea ? type : undefined}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder={!floated ? label : ""}
        rows={textarea ? 4 : undefined}
        className="w-full bg-black text-white text-base placeholder-emerald-500 focus:outline-none resize-none py-2"
      />
    </fieldset>
  );
}