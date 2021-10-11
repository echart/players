import propTypes from 'prop-types';
import './Button.scss';

function Button({
  type = 'button',
  className = '',
  onClick = () => null,
  children,
  isPrimary,
  isSecondary,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}
        ${isPrimary && `btn--primary`}
        ${isSecondary && `btn--secondary`}`}

    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(['button', 'submit']),
  className: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.oneOfType([propTypes.element, propTypes.string]).isRequired,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
}

export default Button;
