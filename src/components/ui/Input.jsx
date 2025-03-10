import PropTypes from "prop-types";

/**
 * A controlled input component.
 *
 * @param {object} props - The component props.
 * @param {string|number} props.state - The current value of the input.
 * @param {function} props.setState - A function to update the input's value.
 * @param {string} [props.type="text"] - The type of input element.
 * @param {string} [props.className=""] - Additional CSS classes for the input.
 * @returns {JSX.Element} - The input element.
 */
function Input({ state, setState, type = "text", className = "" }) {
  return (
    <input
      type={type}
      className={`input ${className}`.trim()}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export default Input;
