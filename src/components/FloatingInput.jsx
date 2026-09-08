import { useState } from "react";

export default function FloatingInput({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  required,
  textarea,
  error,
  inputRef
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  const Component = textarea ? "textarea" : "input";

  return (
    <fieldset
      className={`mx-[30px] my-0 rounded-lg border-1 px-4 pb-3 transition-colors duration-200
        ${textarea ? "" : "flex items-center"}
        ${error ? "border-red-500" : focused ? "border-gray-300" : "border-gray-600"}`}
    >
      <legend id={`${id}-label`}
        className={`overflow-hidden whitespace-nowrap transition-all duration-200 ${error ? "text-red-400" : "text-gray-400"} ${floated ? "max-w-[200px] px-2 text-base" : "sr-only"}`}
      >
        {label}
      </legend>

      <Component
        ref={inputRef}
        type={!textarea ? type : undefined}
        id={id}
        name={name}
        aria-labelledby={`${id}-label`}
        aria-invalid={error ? "true" : "false"}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder={!floated ? label : ""}
        rows={textarea ? 4 : undefined}
        className="w-full bg-black text-white text-base placeholder-gray-500 focus:outline-none resize-none py-2"
      />
    </fieldset>
  );
}