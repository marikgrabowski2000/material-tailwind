import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useSelect } from "./SelectContext";

// types
import type { value, index, disabled, children } from "../../types/components/select";
import {
  propTypesValue,
  propTypesIndex,
  propTypesDisabled,
  propTypesChildren,
} from "../../types/components/select";

export interface SelectOptionProps extends React.ComponentProps<"li"> {
  value?: value;
  index?: index;
  disabled?: disabled;
  children: children;
}

export const SelectOption = (props: SelectOptionProps) => {
  // 1. init
  const { value, index, disabled, children, ...rest } = props;
  const { select } = useTheme();
  const { styles } = select;
  const { base } = styles;

  // 2. set @floating-ui
  const {
    selectedIndex,
    setSelectedIndex,
    listRef,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
    dataRef,
  } = useSelect();

  function handleSelect() {
    setSelectedIndex(index);
    onChange(value);
    setOpen(false);
    setActiveIndex(null);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" || (event.key === " " && !dataRef.current.typing)) {
      event.preventDefault();
      handleSelect();
    }
  }

  // 3. set styles
  const optionBaseClasses = objectsToString(base.option.initial);
  const optionActiveClasses = objectsToString(base.option.active);
  const optionDisabledClasses = objectsToString(base.option.disabled);
  const classes = classnames(optionBaseClasses, {
    [optionActiveClasses]: selectedIndex === index,
    [optionDisabledClasses]: disabled,
  });

  // 4. return
  return (
    <li
      {...rest}
      role="option"
      ref={(node) => (listRef.current[index] = node)}
      className={classes}
      tabIndex={activeIndex === index ? 0 : 1}
      aria-selected={activeIndex === index && selectedIndex === index}
      data-selected={selectedIndex === index}
      {...getItemProps({
        onClick: (e: any) => {
          const onClick = rest?.onClick;

          if (typeof onClick === "function") {
            onClick(e);
            handleSelect();
          }

          handleSelect();
        },
        onKeyDown: (e: any) => {
          const onKeyDown = rest?.onKeyDown;

          if (typeof onKeyDown === "function") {
            onKeyDown(e);
            handleKeyDown(e);
          }

          handleKeyDown(e);
        },
      })}
    >
      {children}
    </li>
  );
};

SelectOption.defaultProps = {
  value: "",
  index: 0,
  disabled: false,
};

SelectOption.propTypes = {
  value: propTypesValue,
  index: propTypesIndex,
  disabled: propTypesDisabled,
  children: propTypesChildren,
};

SelectOption.displayName = "MaterialTailwind.SelectOption";

export default SelectOption;
