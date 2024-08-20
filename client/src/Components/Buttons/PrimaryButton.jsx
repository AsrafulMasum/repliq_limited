import PropTypes from "prop-types";

function PrimaryButton({ text, style }) {
  return (
    <button className={`font-medium uppercase ${style}`}>
      {text}
    </button>
  )
}

export default PrimaryButton

PrimaryButton.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
};