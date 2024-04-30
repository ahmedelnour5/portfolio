import React from "react";

const FormGroup = ({
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  id,
  inputLabel,
}) => {
  return (
    <div>
      <label className="block">
        <span className="block font-medium text-white">{inputLabel}</span>
      </label>
      <input
        className="px-3 py-2 w-full mt-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        onBlur={onBlur}
      ></input>
    </div>
  );
};

export default FormGroup;
