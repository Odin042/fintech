import React from "react";

type inputProps = React.ComponentProps<"input"> & {
  label?: string;
};

const Input = ({ label, ...props }: inputProps) => {
  return (
    <div style={{ marginBottom: "1rem"}}>
      <label htmlFor={props.id}>{label}</label>
      <input name="Desafio" id="1" />
  	</div>
  );
};

export default Input;
