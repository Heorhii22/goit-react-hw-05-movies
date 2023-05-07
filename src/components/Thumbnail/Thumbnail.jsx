import css from './Thumbnail.module.css';
import PropTypes from 'prop-types';

const Thumbnail = ({ noText }) => {
  return (
    <div className={css.container}>
      <svg width={200} height={200} xmlns="http://www.w3.org/2000/svg">
        <title>{'t'}</title>
        <title>{'Layer 1'}</title>
        <path
          strokeWidth={2}
          stroke="#DDD"
          fill="#DDD"
          d="M2.847 43.144 165.911 3.506l31.288 128.713-163.064 39.638z"
        />
        <path
          d="M89.374 27.738 71.409 87.93l71.68 21.392 17.964-60.192-71.68-21.393zm43.974 73.052L84.234 86.13l14.88-49.86 49.114 14.659-14.88 49.86zM105.23 59.377c3.785 1.13 7.788-1.072 8.935-4.915 1.147-3.846-.994-7.878-4.78-9.008-3.788-1.13-7.788 1.071-8.935 4.915-1.147 3.843.991 7.877 4.78 9.008zm32.705 16.365-9.099-17.148-23.927 13.162-3.547-6.686-9.52 5.237-4.154 13.92L131.5 97.303l6.435-21.561z"
          strokeWidth={2}
          stroke="#000"
          fill="#fff"
        />
        <text
          xmlSpace="preserve"
          fontFamily="Noto Sans JP"
          fontSize={24}
          y={141.6}
          x={44}
          strokeWidth={0}
          stroke="#000"
        >
          {noText}
        </text>
        <text
          xmlSpace="preserve"
          fontFamily="Noto Sans JP"
          fontSize={24}
          y={173.6}
          x={40.727}
          strokeWidth={0}
          stroke="#000"
        >
          {'AVAILABLE'}
        </text>
      </svg>
    </div>
  );
};
Thumbnail.propTypes = {
  noText: PropTypes.string,
};
export default Thumbnail;
