import './Header.scss';
import propTypes from 'prop-types';

function Header({ title }) {
  return (
    <header data-testid="header">
      <h1 className="title">
        {title}
      </h1>
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
