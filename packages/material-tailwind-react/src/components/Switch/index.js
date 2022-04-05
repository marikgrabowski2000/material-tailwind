/* eslint-disable jsx-a11y/no-static-element-interactions */
import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";
import { MaterialTailwindTheme } from "context/theme";

export const Switch = forwardRef(
  ({ color, label, ripple, className, containerProps, circleProps, labelProps, ...rest }, ref) => {
    // 1. init
    const { switch: toggle } = useContext(MaterialTailwindTheme);
    const { defaultProps, valid } = toggle;
    const { base, colors } = toggle.styles;

    // 2. set default props
    color = color || defaultProps.color;
    ripple = ripple === undefined ? defaultProps.ripple : ripple;
    className = className || defaultProps.className;

    // 3. set ripple effect instance
    const rippleEffect = ripple !== undefined && new Ripple();

    // 4. set styles
    const rootClasses = classnames(objectsToString(base.root));
    const containerClasses = classnames(
      objectsToString(base.container),
      containerProps && containerProps.className ? containerProps.className : "",
    );
    const inputClasses = classnames(
      objectsToString(base.input),
      objectsToString(colors[findMatch(valid.colors, color, "light-blue")]),
      className,
    );
    const circleClasses = classnames(
      objectsToString(base.circle),
      colors[findMatch(valid.colors, color, "light-blue")].circle,
      colors[findMatch(valid.colors, color, "light-blue")].before,
      circleProps && circleProps.className ? circleProps.className : "",
    );
    const rippleClasses = classnames(objectsToString(base.ripple));
    const labelClasses = classnames(
      objectsToString(base.label),
      labelProps && labelProps.className ? labelProps.className : "",
    );

    // 4. return
    return (
      <div ref={ref} className={rootClasses}>
        <div {...containerProps} htmlFor={rest.id || "switch"} className={containerClasses}>
          <input {...rest} type="checkbox" id={rest.id || "switch"} className={inputClasses} />
          <label {...circleProps} htmlFor={rest.id || "switch"} className={circleClasses}>
            {ripple && (
              <div
                className={rippleClasses}
                onMouseDown={(e) => {
                  const onMouseDown =
                    containerProps && containerProps.onMouseDown
                      ? containerProps.onMouseDown
                      : undefined;

                  if (ripple) {
                    rippleEffect.create(e, "dark");
                  }

                  return typeof onMouseDown === "function" && onMouseDown();
                }}
              />
            )}
          </label>
        </div>
        {label && (
          <label {...labelProps} htmlFor={rest.id || "switch"} className={labelClasses}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Switch.propTypes = {
  color: PropTypes.oneOf([
    "blue-grey",
    "grey",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  label: PropTypes.string,
  ripple: PropTypes.bool,
  className: PropTypes.string,
  containerProps: PropTypes.instanceOf(Object),
  circleProps: PropTypes.instanceOf(Object),
  labelProps: PropTypes.instanceOf(Object),
};

Switch.displayName = "Switch";

export default Switch;
