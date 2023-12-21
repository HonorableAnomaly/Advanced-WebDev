import PropTypes from "prop-types";

function Button({ children, plain, primary, secondary, success, warning, danger, outline, rounded }) {
  return <button>{children}</button>;
}

Button.propTypes = {
  checkVariation: ({ plain, primary, secondary, success, warning, danger }) => {
    const count = Number(!!plain) + Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

    if (count > 1) {
      return new Error("Only a single variation can be used!");
    }
  }
};

export default Button;
