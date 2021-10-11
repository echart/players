import propTypes from 'prop-types';
import './Label.scss';

function Label({ label, children }) {
  return (
    <div className="form-label">
      <label>
        {label}
        {children}
      </label>
    </div>
  );
}

Label.propTypes = {
  label: propTypes.string.isRequired,
  children: propTypes.element,
};

export default Label;
