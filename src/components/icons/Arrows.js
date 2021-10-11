import propTypes from 'prop-types'

function Icon(isActive, direction = 'asc') {
  return (
    <svg
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM4.5 13V1H3.5V13H4.5Z"
        fill="#585563"
        fillOpacity={isActive && direction === 'asc' ? '1' : '0.4'}
      />
      <path
        d="M14.6464 13.3536C14.8417 13.5488 15.1583 13.5488 15.3536 13.3536L18.5355 10.1716C18.7308 9.97631 18.7308 9.65973 18.5355 9.46447C18.3403 9.2692 18.0237 9.2692 17.8284 9.46447L15 12.2929L12.1716 9.46447C11.9763 9.2692 11.6597 9.2692 11.4645 9.46447C11.2692 9.65973 11.2692 9.97631 11.4645 10.1716L14.6464 13.3536ZM14.5 1L14.5 13H15.5L15.5 1H14.5Z"
        fill="#585563"
        fillOpacity={isActive && direction === 'desc' ? '1' : '0.4'}
      />
    </svg>
  );
}

Icon.propTypes = {
  isActive: propTypes.bool.isRequired,
  direction: propTypes.oneOf(['asc', 'desc']),
}

export default Icon;
