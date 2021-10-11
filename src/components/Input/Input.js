import propTypes from 'prop-types';
import './Input.scss';

function Input({
  id,
  name,
  defaultValue,
  value,
  onChange = () => null,
  onBlur = () => null,
  type = 'text',
  placeholder,
  isRequired = false,
}) {
  return (
    <input
      className="form-input"
      name={name}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      data-testid="input"
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      required={isRequired}
    />
  );
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func,
  type: propTypes.string,
  isRequired: propTypes.bool,
};

export default Input;
