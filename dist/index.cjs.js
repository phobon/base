function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import styled, { css } from 'styled-components';
import { space, color, width, height, borderRadius, alignItems, justifyContent, fontSize, fontWeight, border, borderColor } from 'styled-system';
import PropTypes from 'prop-types';

var buttonVariant = function buttonVariant(props) {
  var tertiary = css(["background-color:", ";border-color:transparent;color:", ";fill:", ";&:hover{background-color:", ";}"], props.theme.colors.background, props.theme.colors.grayscale[1], props.theme.colors.grayscale[1], props.theme.colors.grayscale[5]);
  var buttonVariants = {
    primary: css(["background-color:", ";border-color:", ";color:white;fill:white;&:hover{background-color:", ";color:white;fill:white;}"], props.theme.colors.accent[1], props.theme.colors.accent[1], props.theme.colors.accent[0]),
    secondary: css(["background-color:", ";border-color:", ";color:", ";fill:", ";&:hover{background-color:", ";}"], props.theme.colors.grayscale[6], props.theme.colors.grayscale[5], props.theme.colors.grayscale[1], props.theme.colors.grayscale[1], props.theme.colors.grayscale[5]),
    tertiary: tertiary,
    warning: css(["background-color:", ";border-color:", ";color:", ";fill:", ";&:hover{background-color:", ";color:", ";fill:", ";}"], props.theme.colors.guidance.warning[1], props.theme.colors.guidance.warning[0], props.theme.colors.guidance.warning[0], props.theme.colors.guidance.warning[0], props.theme.colors.oranges[5], props.theme.colors.guidance.warning[0], props.theme.colors.guidance.warning[0]),
    danger: css(["background-color:", ";border-color:", ";color:", ";fill:", ";&:hover{background-color:", ";color:", ";fill:", ";}"], props.theme.colors.guidance.error[1], props.theme.colors.guidance.error[0], props.theme.colors.guidance.error[0], props.theme.colors.guidance.error[0], props.theme.colors.reds[5], props.theme.colors.guidance.error[0], props.theme.colors.guidance.error[0]),
    success: css(["background-color:", ";border-color:", ";color:", ";fill:", ";&:hover{background-color:", ";color:", ";fill:", ";}"], props.theme.colors.guidance.success[1], props.theme.colors.guidance.success[0], props.theme.colors.guidance.success[0], props.theme.colors.guidance.success[0], props.theme.colors.greens[5], props.theme.colors.guidance.success[0], props.theme.colors.guidance.success[0]),
    subtle: tertiary,
    link: css(["background-color:transparent;border:0;color:", ";fill:", ";padding:0;text-decoration:underline dotted;&:hover{color:", ";fill:", ";text-decoration:underline;}"], props.theme.colors.grayscale[1], props.theme.colors.grayscale[1], props.theme.colors.accent[1], props.theme.colors.accent[1]),
    clean: css(["background:0;border:0;color:inherit;fill:inherit;padding:0;width:unset;height:unset;&:hover{color:inherit;fill:inherit;}"])
  };
  return buttonVariants[props.variant];
};

var isToggled = function isToggled(props) {
  if (!props.isToggled) {
    return '';
  }

  var tertiary = css(["background-color:", ";color:", ";&:hover{background-color:", ";}"], props.theme.colors.grayscale[2], props.theme.colors.grayscale[6], props.theme.colors.grayscale[1]);
  var isToggledVariants = {
    primary: css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.accent[0], props.theme.colors.accent[1]),
    secondary: css(["background-color:", ";color:", ";&:hover{background-color:", ";}"], props.theme.colors.grayscale[2], props.theme.colors.grayscale[6], props.theme.colors.grayscale[1]),
    tertiary: tertiary,
    warning: css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.oranges[5], props.theme.colors.guidance.warning[1]),
    danger: css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.reds[5], props.theme.colors.guidance.error[1]),
    success: css(["background-color:", ";&:hover{background-color:", ";}"], props.theme.colors.greens[5], props.theme.colors.guidance.success[1]),
    subtle: tertiary,
    link: css(["color:", ";fill:", ";text-decoration:underline;&:hover{color:", ";fill:", ";text-decoration:underline dotted;}"], props.theme.colors.accent[1], props.theme.colors.accent[1], props.theme.colors.grayscale[1], props.theme.colors.grayscale[1]),
    clean: css([""])
  };
  return isToggledVariants[props.variant];
};

var fullWidth = function fullWidth(props) {
  return props.fullWidth && css(["width:100%;"]);
};

var fullHeight = function fullHeight(props) {
  return props.fullHeight && css(["height:100%;"]);
};

var size = function size(props) {
  var sizes = {
    s: css(["min-width:", "px;height:", "px;padding-left:", "px;padding-right:", "px;"], props.theme.space[4], props.theme.space[4], props.theme.space[props.pl || 2], props.theme.space[props.pr || 2]),
    m: css(["min-width:", "px;height:", "px;padding-left:", "px;padding-right:", "px;"], props.theme.space[5], props.theme.space[5], props.theme.space[props.pl || 3], props.theme.space[props.pr || 3]),
    l: css(["min-width:", "px;height:", "px;padding-left:", "px;padding-right:", "px;"], props.theme.space[6], props.theme.space[6], props.theme.space[props.pl || 3], props.theme.space[props.pr || 3])
  };
  return sizes[props.size];
};

var Button = styled.button.attrs(function (props) {
  return {
    disabled: props.isDisabled
  };
}).withConfig({
  displayName: "Button",
  componentId: "sc-15gnzfk-0"
})(["box-sizing:border-box;display:flex;flex:none;position:relative;", " ", " border:0;cursor:pointer;transition:border-color 180ms ease-out,background-color 180ms ease-out,color 180ms ease-out,fill 180ms ease-out,transform 180ms ease-out,opacity 180ms ease-out;", " ", " ", " ", " ", " ", " ", " ", " &:focus{outline:0;&::after{position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;content:\"\";box-shadow:0 0 0 2px ", ";border-radius:", "px;pointer-events:none;z-index:1;}}", " ", " ", " ", " ", " ", " &:disabled{opacity:0.5;background-color:", ";border:0;color:", ";fill:", ";pointer-events:none;}"], alignItems, justifyContent, fontSize, fontWeight, size, space, width, height, fullWidth, fullHeight, function (props) {
  return props.theme.colors.guidance.focus;
}, function (props) {
  return props.theme.radii[props.borderRadius];
}, buttonVariant, color, border, borderColor, borderRadius, isToggled, function (props) {
  return props.theme.colors.grayscale[6];
}, function (props) {
  return props.theme.colors.grayscale[4];
}, function (props) {
  return props.theme.colors.grayscale[4];
});
Button.displayName = 'Button';
Button.propTypes = _objectSpread({}, space.propTypes, color.propTypes, width.propTypes, height.propTypes, borderRadius.propTypes, borderColor.propTypes, alignItems.propTypes, justifyContent.propTypes, fontSize.propTypes, fontWeight.propTypes, {
  /** Whether the button is toggled. or not */
  isToggled: PropTypes.bool,

  /** Whether the button is disabled. or not */
  isDisabled: PropTypes.bool,

  /** Sizes to the full width of its parent container, or sizes to content */
  fullWidth: PropTypes.bool,

  /** Sizes to the full height of its parent container, or sizes to content */
  fullHeight: PropTypes.bool,

  /** Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'subtle', 'link', 'clean']),

  /** Button size */
  size: PropTypes.oneOf(['s', 'm', 'l']),

  /** Button type */
  type: PropTypes.string
});
Button.defaultProps = {
  width: 'initial',
  fontSize: 1,
  borderRadius: 3,
  borderColor: 'grayscale.5',
  isToggled: false,
  isDisabled: false,
  variant: 'secondary',
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm',
  type: 'button'
};
export default Button;
import styled from 'styled-components';
import Button from './Button';
var CircleButton = styled(Button).withConfig({
  displayName: "CircleButton",
  componentId: "x10ds9-0"
})(["padding:0;border-radius:50%;"]);
CircleButton.displayName = 'CircleButton';
CircleButton.defaultProps = Object.assign({}, Button.defaultProps, {
  isToggled: false,
  isDisabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm'
});
export default CircleButton;
import Button from './Button';
import CircleButton from './CircleButton';
import SquareButton from './SquareButton';
export { Button, CircleButton, SquareButton };
import styled from 'styled-components';
import Button from './Button';
var SquareButton = styled(Button).withConfig({
  displayName: "SquareButton",
  componentId: "sc-1i2kaqz-0"
})(["padding:0;"]);
SquareButton.displayName = 'SquareButton';
SquareButton.defaultProps = Object.assign({}, Button.defaultProps, {
  isToggled: false,
  isDisabled: false,
  alignItems: 'center',
  justifyContent: 'center',
  size: 'm'
});
export default SquareButton;
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import styled, { css } from 'styled-components';
import { space, color, alignItems, alignSelf, display, justifyContent, justifySelf, flexDirection, flex, flexWrap, order, fontSize, borderRadius, width, minWidth, maxWidth, height, minHeight, maxHeight, borders, borderColor, zIndex, position, gridColumn, gridRow, gridArea, top, left, bottom, right } from 'styled-system';
import PropTypes from 'prop-types';

var fullWidth = function fullWidth(props) {
  return props.fullWidth && css(["width:100%;"]);
};

var fullHeight = function fullHeight(props) {
  return props.fullHeight && css(["height:100%;"]);
};

var round = function round(props) {
  return props.round && css(["border-radius:100%;"]);
};

var Box = styled.div.withConfig({
  displayName: "Box",
  componentId: "yhgpan-0"
})(["", " box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], display, borders, borderRadius, borderColor, space, color, fontSize, alignItems, alignSelf, justifyContent, justifySelf, flexDirection, flex, flexWrap, order, gridColumn, gridRow, gridArea, zIndex, position, top, left, right, bottom, fullWidth, fullHeight, round, width, minWidth, maxWidth, height, minHeight, maxHeight, position, zIndex, top, left, bottom, right);
Box.displayName = 'Box';
Box.propTypes = _objectSpread({}, space.propTypes, color.propTypes, alignItems.propTypes, alignSelf.propTypes, justifyContent.propTypes, justifySelf.propTypes, flexDirection.propTypes, flex.propTypes, flexWrap.propTypes, order.propTypes, fontSize.propTypes, borderRadius.propTypes, width.propTypes, minWidth.propTypes, maxWidth.propTypes, height.propTypes, minHeight.propTypes, maxHeight.propTypes, borders.propTypes, borderColor.propTypes, zIndex.propTypes, position.propTypes, top.propTypes, bottom.propTypes, left.propTypes, right.propTypes, gridColumn.propTypes, gridRow.propTypes, gridArea.propTypes, top.propTypes, bottom.propTypes, left.propTypes, right.propTypes, {
  /** Whether container should take up all available width, or not */
  fullWidth: PropTypes.bool,

  /** Whether container should take up all available height, or not */
  fullHeight: PropTypes.bool,

  /** Container is round */
  round: PropTypes.bool
});
Box.defaultProps = {
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  m: 0,
  p: 0,
  color: 'foreground',
  fullWidth: false,
  fullHeight: false,
  borderRadius: 0
};
export default Box;
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Box from './Box';

var boxShadow = function boxShadow(props) {
  var boxShadows = {
    none: css(["box-shadow:0;"]),
    s: css(["box-shadow:", ";"], props.theme.boxShadows[0]),
    m: css(["box-shadow:", ";"], props.theme.boxShadows[1]),
    l: css(["box-shadow:", ";"], props.theme.boxShadows[2]),
    xl: css(["box-shadow:", ";"], props.theme.boxShadows[3]),
    xxl: css(["box-shadow:", ";"], props.theme.boxShadows[4])
  };
  return boxShadows[props.boxShadowSize];
};

var Card = styled(Box).withConfig({
  displayName: "Card",
  componentId: "sc-1kysk8x-0"
})(["position:relative;&::before{position:absolute;content:'';width:100%;height:100%;", " pointer-events:none;border-radius:inherit;opacity:", ";left:0;top:0;transition:opacity 180ms ease-out;}"], boxShadow, function (props) {
  return props.boxShadowIntensity;
});
Card.displayName = 'Card';
Card.propTypes = _objectSpread({}, Box.propTypes, {
  /** Card box shadow size */
  boxShadowSize: PropTypes.oneOf(['none', 's', 'm', 'l', 'xl', 'xxl']),

  /** Card box shadow intensity between 0 and 1 (higher is more intense) */
  boxShadowIntensity: PropTypes.number
});
Card.defaultProps = Object.assign({}, Box.defaultProps, {
  bg: 'background',
  borderRadius: 3,
  boxShadowSize: 'l',
  boxShadowIntensity: 1
});
export default Card;
import styled from 'styled-components';
import Box from './Box';
var Flex = styled(Box).withConfig({
  displayName: "Flex",
  componentId: "sc-1utkd4f-0"
})([""]);
Flex.defaultProps = Object.assign({}, Box.defaultProps, {
  flex: '1 0 0%'
});
Flex.displayName = 'Flex';
export default Flex;
import styled from 'styled-components';
import { gridGap, gridRowGap, gridColumnGap, gridAutoFlow, gridAutoRows, gridAutoColumns, gridTemplateAreas, gridTemplateRows, gridTemplateColumns } from 'styled-system';
import Box from './Box';
var Grid = styled(Box).withConfig({
  displayName: "Grid",
  componentId: "plllx7-0"
})(["flex:unset;", " ", " ", " ", " ", " ", " ", " ", " ", ""], gridGap, gridRowGap, gridColumnGap, gridAutoFlow, gridAutoRows, gridAutoColumns, gridTemplateAreas, gridTemplateRows, gridTemplateColumns);
Grid.displayName = 'Grid';
Grid.defaultProps = Object.assign({}, Box.defaultProps, {
  display: 'grid'
});
/** @component */

export default Grid;
import Box from './Box';
import Flex from './Flex';
import Grid from './Grid';
import Scrollable from './Scrollable';
import Card from './Card';
export { Box, Flex, Grid, Scrollable, Card };
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Flex from './Flex';

var direction = function direction(props) {
  return props.scrollDirection === 'vertical' ? css(["overflow-y:scroll;flex-direction:column;width:100%;"]) : css(["overflow-x:scroll;height:100%;"]);
};

var childDirection = function childDirection(props) {
  return props.scrollDirection === 'vertical' ? css(["flex-direction:column;width:100%;top:0;left:0;right:0;"]) : css(["height:100%;top:0;left:0;bottom:0;"]);
};

var minimalStyle = function minimalStyle(props) {
  return props.minimal && css(["&:hover{&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.4);}}&::-webkit-scrollbar{width:", "px;}&::-webkit-scrollbar-track{background:0;border-radius:", "px;}&::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,0.2);border-radius:", "px;&:hover{background-color:rgba(0,0,0,0.4);}}"], props.theme.space[2], props.theme.radii[3], props.theme.radii[3]);
};

var ScrollableFlex = styled(Flex).withConfig({
  displayName: "Scrollable__ScrollableFlex",
  componentId: "lxmnzx-0"
})(["position:relative;overflow:hidden;", " flex:1 1 0px;> div{position:absolute;", "}", ""], direction, childDirection, minimalStyle);

var Scrollable = function Scrollable(_ref) {
  var minimal = _ref.minimal,
      scrollDirection = _ref.scrollDirection,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["minimal", "scrollDirection", "children"]);

  return React.createElement(ScrollableFlex, {
    minimal: minimal,
    scrollDirection: scrollDirection
  }, React.createElement(Flex, _extends({
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }, props), children));
};

Scrollable.displayName = 'Scrollable';
Scrollable.propTypes = _objectSpread({}, Flex.propTypes, {
  /** Display a minimal scrollable */
  minimal: PropTypes.bool,
  scrollDirection: PropTypes.oneOf(['vertical', 'horizontal'])
});
Scrollable.defaultProps = {
  minimal: false,
  scrollDirection: 'vertical'
};
export default Scrollable;
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { space, gridColumn, gridRow, gridArea, themeGet } from 'styled-system';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Label from './Label';

var labelBorder = function labelBorder(props) {
  var color = props.error ? props.theme.colors.reds[3] : themeGet("colors." + props.borderColor)(props);
  return css(["border:2px solid ", ";"], color || props.borderColor);
};

var labelBackground = function labelBackground(props) {
  var color = themeGet("colors." + props.color)(props);
  return css(["background-color:", ";"], color || props.color);
};

var CheckboxContainer = styled.div.withConfig({
  displayName: "Checkbox__CheckboxContainer",
  componentId: "sc-1l1hhb6-0"
})(["display:flex;flex:none;align-items:flex-start;justify-content:flex-start;position:relative;height:", "px;min-width:", "px;", " ", " ", " ", " label{height:100%;&::before{content:\"\";opacity:0.7;transition:80ms opacity ease-out;position:absolute;left:0;top:0;width:", "px;height:", "px;", " border-radius:", "px;box-sizing:content-box;}&::after{content:\"\";position:absolute;opacity:0;left:0;top:0;width:", "px;height:", "px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' preserveAspectRatio='xMinYMid' stroke-width='2' stroke='white' fill='none' stroke-miterlimit='10' stroke-dashoffset='0' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 9.5L5.5 12L13 4.5'/%3E%3C/svg%3E\");background-position:50% 50%;background-repeat:no-repeat;transition:80ms opacity ease-out;pointer-events:none;box-sizing:content-box;}}input[type=\"checkbox\"]{margin:0;opacity:0;label::after{content:none;}&:checked + label::after{opacity:1;}&:checked + label::before{opacity:0.9;", " ", "}&:focus + label::before{outline:0;opacity:1;border:2px solid ", ";}&:disabled + label{opacity:0.5;pointer-events:none;}}&:hover{label{&::before{opacity:1;}}}"], function (props) {
  return props.theme.space[props.size] + 4;
}, function (props) {
  return props.theme.space[props.size] + 4;
}, space, gridColumn, gridRow, gridArea, function (props) {
  return props.theme.space[props.size];
}, function (props) {
  return props.theme.space[props.size];
}, labelBorder, function (props) {
  return props.theme.radii[3];
}, function (props) {
  return props.theme.space[props.size] + 4;
}, function (props) {
  return props.theme.space[props.size] + 4;
}, labelBorder, labelBackground, function (props) {
  return props.theme.colors.guidance.focus;
});

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      labelColor = _ref.labelColor,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      checked = _ref.checked,
      required = _ref.required,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      textStyle = _ref.textStyle,
      name = _ref.name,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "label", "labelColor", "onChange", "disabled", "checked", "required", "fontSize", "fontWeight", "textStyle", "name", "size", "className"]);

  return React.createElement(CheckboxContainer, _extends({}, props, {
    size: size,
    disabled: disabled,
    className: className
  }), React.createElement("input", {
    type: "checkbox",
    id: id,
    onChange: onChange,
    disabled: disabled,
    required: required,
    className: className,
    checked: checked,
    name: name
  }), React.createElement(Label, {
    color: labelColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textStyle: textStyle,
    htmlFor: id,
    ml: label ? size : 0
  }, label));
};

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = _objectSpread({}, space.propTypes, gridColumn.propTypes, gridRow.propTypes, gridArea.propTypes, {
  /** Id, required for accessibility */
  id: PropTypes.string.isRequired,

  /** Label */
  label: PropTypes.string,

  /** Label colour */
  labelColor: PropTypes.string,

  /** Colour */
  color: PropTypes.string,

  /** Border colour */
  borderColor: PropTypes.string,

  /** Sizing based on theme space values */
  size: PropTypes.number
});
Checkbox.defaultProps = {
  label: null,
  labelColor: 'foreground',
  color: 'accent.3',
  borderColor: 'grayscale.4',
  size: 3
};
export default Checkbox;
import Checkbox from './Checkbox';
import Label from './Label';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import TextArea from './TextArea';
import PasswordInput from './PasswordInput';
import Select from './Select';
import Radio from './Radio';
export { Checkbox, TextInput, NumberInput, PasswordInput, TextArea, Label, Select, Radio };
import styled from 'styled-components';
import Text from '../typography/Text';
var Label = styled(Text).attrs(function () {
  return {
    as: 'label'
  };
}).withConfig({
  displayName: "Label",
  componentId: "sc-19p44h2-0"
})(["display:flex;flex:none;align-items:center;justify-content:center;"]);
Label.displayName = 'Label';
Label.defaultProps = Object.assign({}, Text.defaultProps, {
  color: 'grayscale.2',
  fontSize: 0
});
export default Label;
import styled from 'styled-components';
import TextInput from './TextInput';
var NumberInput = styled(TextInput).attrs(function () {
  return {
    type: 'number'
  };
}).withConfig({
  displayName: "NumberInput",
  componentId: "ws2std-0"
})([""]);
NumberInput.displayName = 'NumberInput';
export default NumberInput;
import styled from 'styled-components';
import TextInput from './TextInput';
var PasswordInput = styled(TextInput).attrs(function () {
  return {
    type: 'password'
  };
}).withConfig({
  displayName: "PasswordInput",
  componentId: "sc-1ksq7wb-0"
})([""]);
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { space, gridColumn, gridRow, gridArea, themeGet } from 'styled-system';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Label from './Label';

var labelBorder = function labelBorder(props) {
  if (props.error) {
    return css(["border:2px solid ", ";"], props.theme.colors.reds[3]);
  }

  var color = themeGet("colors." + props.borderColor)(props);
  return css(["border:2px solid ", ";"], color || props.borderColor);
};

var labelBackground = function labelBackground(props) {
  var color = themeGet("colors." + props.color)(props);
  return css(["background-color:", ";"], color || props.color);
};

var RadioContainer = styled.div.withConfig({
  displayName: "Radio__RadioContainer",
  componentId: "sc-1810uwv-0"
})(["display:flex;flex:none;align-items:flex-start;justify-content:flex-start;position:relative;height:", "px;min-width:", "px;", " ", " ", " ", " label{height:100%;&::before{content:\"\";opacity:0.7;transition:80ms opacity ease-out;position:absolute;left:0;top:0;width:", "px;height:", "px;", " border-radius:100%;box-sizing:content-box;}&::after{content:\"\";position:absolute;opacity:0;left:0;top:0;width:", "px;height:", "px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Ccircle cx='8' cy='8' r='4' fill='white'/%3E%3C/svg%3E\");background-position:50% 50%;background-repeat:no-repeat;transition:80ms opacity ease-out;pointer-events:none;box-sizing:content-box;}}input[type=\"radio\"]{margin:0;opacity:0;label::after{content:none;}&:checked + label::after{opacity:1;}&:checked + label::before{opacity:0.9;", " ", "}&:focus + label::before{outline:0;opacity:1;border:2px solid ", ";}&:disabled + label{opacity:0.5;pointer-events:none;}}&:hover{label{&::before{opacity:1;}}}"], function (props) {
  return props.theme.space[props.size] + 4;
}, function (props) {
  return props.theme.space[props.size] + 4;
}, space, gridColumn, gridRow, gridArea, function (props) {
  return props.theme.space[props.size];
}, function (props) {
  return props.theme.space[props.size];
}, labelBorder, function (props) {
  return props.theme.space[props.size] + 4;
}, function (props) {
  return props.theme.space[props.size] + 4;
}, labelBorder, labelBackground, function (props) {
  return props.theme.colors.guidance.focus;
});

var Radio = function Radio(_ref) {
  var id = _ref.id,
      label = _ref.label,
      labelColor = _ref.labelColor,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      checked = _ref.checked,
      required = _ref.required,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      textStyle = _ref.textStyle,
      name = _ref.name,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "label", "labelColor", "onChange", "disabled", "checked", "required", "fontSize", "fontWeight", "textStyle", "name", "size", "className"]);

  return React.createElement(RadioContainer, _extends({}, props, {
    size: size,
    disabled: disabled,
    className: className
  }), React.createElement("input", {
    type: "radio",
    id: id,
    onChange: onChange,
    disabled: disabled,
    required: required,
    className: className,
    checked: checked,
    name: name
  }), React.createElement(Label, {
    color: labelColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textStyle: textStyle,
    htmlFor: id,
    ml: label ? size : 0
  }, label));
};

Radio.displayName = 'Radio';
Radio.propTypes = _objectSpread({}, space.propTypes, gridColumn.propTypes, gridRow.propTypes, gridArea.propTypes, {
  /** Id, required for accessibility */
  id: PropTypes.string.isRequired,

  /** Label */
  label: PropTypes.string,

  /** Label colour */
  labelColor: PropTypes.string,

  /** Colour */
  color: PropTypes.string,

  /** Border colour */
  borderColor: PropTypes.string,

  /** Sizing based on theme space values */
  size: PropTypes.number
});
Radio.defaultProps = {
  label: null,
  labelColor: 'foreground',
  color: 'accent.3',
  borderColor: 'grayscale.4',
  size: 3
};
export default Radio;
import styled from 'styled-components';
import TextInput from './TextInput';
var Select = styled(TextInput).attrs(function () {
  return {
    as: 'select'
  };
}).withConfig({
  displayName: "Select",
  componentId: "bgi21m-0"
})([""]);
Select.displayName = 'Select';
export default Select;
import styled from 'styled-components';
import TextInput from './TextInput';
var TextArea = styled(TextInput).attrs(function () {
  return {
    as: 'textarea'
  };
}).withConfig({
  displayName: "TextArea",
  componentId: "dx4psf-0"
})(["height:auto;min-height:", "px;"], function (props) {
  return props.theme.space[5];
});
TextArea.displayName = 'TextArea';
TextArea.defaultProps = Object.assign({}, TextInput.defaultProps, {
  py: 2
});
export default TextArea;
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import styled, { css } from 'styled-components';
import { color, space, borderRadius, border, borderColor, fontSize, width, gridColumn, gridRow, gridArea } from 'styled-system';
import PropTypes from 'prop-types';
import { informationDensity } from '../../utils';

var isError = function isError(props) {
  return props.error && css(["border:2px solid ", ";&:hover{border:2px solid ", ";}"], props.theme.colors.reds[3], props.theme.colors.reds[3]);
};

var TextInput = styled.input.attrs(function (props) {
  return {
    disabled: props.isDisabled
  };
}).withConfig({
  displayName: "TextInput",
  componentId: "sc-1tt266r-0"
})(["box-sizing:border-box;position:relative;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " padding-left:", "px;padding-right:", "px;line-height:", "px;width:", ";height:", "px;&::-webkit-input-placeholder{color:", ";}&:focus{outline:0;border:2px solid ", ";padding-left:", "px;padding-right:", "px;}&:disabled{opacity:0.5;pointer-events:none;background-color:", ";border:1px solid ", ";}", ""], color, space, fontSize, width, borderRadius, border, borderColor, gridColumn, gridRow, gridArea, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.fontSizes[props.fontSize];
}, function (props) {
  return props.fullWidth ? '100%' : null;
}, function (props) {
  return informationDensity(props.density);
}, function (props) {
  return props.theme.colors.grayscale[5];
}, function (props) {
  return props.theme.colors.guidance.focus;
}, function (props) {
  return props.theme.space[2] - 1;
}, function (props) {
  return props.theme.space[2] - 1;
}, function (props) {
  return props.theme.colors.grayscale[6];
}, function (props) {
  return props.theme.colors.grayscale[5];
}, isError);
TextInput.displayName = 'TextInput';
TextInput.propTypes = _objectSpread({}, color.propTypes, space.propTypes, borderRadius.propTypes, fontSize.propTypes, width.propTypes, gridColumn.propTypes, gridRow.propTypes, gridArea.propTypes, {
  /** Whether the input field is disabled, or not */
  isDisabled: PropTypes.bool,

  /** Optional error message to display */
  error: PropTypes.any,

  /** Whether the input field should take up all available horizontal space, or not */
  fullWidth: PropTypes.bool,

  /** Information density for this field */
  density: PropTypes.oneOf(['compact', 'normal', 'spacious'])
});
TextInput.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: false,
  borderRadius: 3,
  px: 2,
  fontSize: 1,
  bg: 'background',
  border: '1px solid',
  borderColor: 'grayscale.5',
  density: 'normal'
};
export default TextInput;
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import styled, { css } from 'styled-components';
import { display, space, width, height, borderRadius, gridColumn, gridRow, gridArea, position, zIndex, top, left, bottom, right } from 'styled-system';
import propTypes from 'prop-types';

var responsive = function responsive(props) {
  return props.responsive && css(["width:100%;height:auto;"]);
};

var round = function round(props) {
  return props.round && css(["border-radius:100%;"]);
};

var Image = styled.img.withConfig({
  displayName: "Image",
  componentId: "sc-7kvo0v-0"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], display, space, width, height, borderRadius, position, zIndex, top, left, bottom, right, responsive, round, gridColumn, gridRow, gridArea);
Image.displayName = 'Image';
Image.propTypes = _objectSpread({}, display.propTypes, space.propTypes, width.propTypes, height.propTypes, borderRadius.propTypes, gridColumn.propTypes, gridRow.propTypes, gridArea.propTypes, {
  /** Image is responsive. */
  responsive: propTypes.bool,

  /** Image is round. */
  round: propTypes.bool
});
Image.defaultProps = {
  borderRadius: 0,

  /** Blockify images by default */
  display: 'block'
};
export default Image;
import Image from './Image';
import Vector from './Vector';
export { Image, Vector };
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Image from './Image';
var Vector = styled(Image).attrs(function () {
  return {
    as: 'svg',
    xmlns: 'http://www.w3.org/2000/svg'
  };
}).withConfig({
  displayName: "Vector",
  componentId: "jvevjl-0"
})(["fill:", ";"], function (props) {
  return themeGet("colors." + props.color, '#FFF');
});
Vector.defaultProps = {
  color: 'foreground'
};
Vector.displayName = 'Vector';
export default Vector;
import { Box, Flex, Scrollable, Grid, Card } from './containers';
import { BoxList, BoxListItem } from './lists';
import { Heading, Text, Truncate } from './typography';
import { Image, Vector } from './images';
import Link from './link';
import Table from './table';
import { Checkbox, TextInput, NumberInput, PasswordInput, Label, Select, TextArea, Radio } from './form';
import { Button, CircleButton, SquareButton } from './buttons';
export { Box, Flex, Scrollable, Grid, Card, BoxList, BoxListItem, Heading, Text, Truncate, Image, Vector, Link, Table, Checkbox, TextInput, NumberInput, PasswordInput, Label, Select, TextArea, Radio, Button, CircleButton, SquareButton };
export { default } from './Link';
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../typography';
var Link = styled(Text).attrs(function () {
  return {
    as: 'a'
  };
}).withConfig({
  displayName: "Link",
  componentId: "y7r662-0"
})(["text-decoration:", ";position:relative;&:hover{color:", ";text-decoration:underline;}&:visited,&:focus{text-decoration:none;}&:focus{outline:0;&::after{position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;content:\"\";box-shadow:0 0 0 2px ", ";border-radius:", "px;pointer-events:none;}}"], function (props) {
  return props.clean ? 'none' : 'underline dotted';
}, function (props) {
  return props.theme.colors.accent[3];
}, function (props) {
  return props.theme.colors.guidance.focus;
}, function (props) {
  return props.theme.radii[2];
});
Link.displayName = 'Link';
Link.propTypes = _objectSpread({}, Text.propTypes, {
  /** Represents a link with text-decoration removed. */
  clean: PropTypes.bool,

  /** Represents an active link. */
  active: PropTypes.bool
});
Link.defaultProps = Object.assign({}, Text.defaultProps, {
  color: 'accent.1',
  fontSize: 1,
  textAlign: 'left',
  active: false
});
export default Link;
import styled from 'styled-components';
import { Box } from '../containers';
var BoxList = styled(Box).attrs(function (props) {
  return {
    as: props.as ? props.as : 'ul'
  };
}).withConfig({
  displayName: "BoxList",
  componentId: "sc-169kws0-0"
})([""]);
BoxList.displayName = 'BoxList';
export default BoxList;
import styled from 'styled-components';
import { Box } from '../containers';
var BoxListItem = styled(Box).attrs(function () {
  return {
    as: 'li'
  };
}).withConfig({
  displayName: "BoxListItem",
  componentId: "q0zfcc-0"
})([""]);
BoxListItem.displayName = 'BoxListItem';
export default BoxListItem;
import BoxList from './BoxList';
import BoxListItem from './BoxListItem';
export { BoxList, BoxListItem };
export { default } from './Table';
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { css } from 'styled-components';
import { space, width } from 'styled-system';
import PropTypes from 'prop-types';

var informationDensity = function informationDensity(props) {
  var densityValues = {
    compact: 1,
    normal: 2,
    spacious: 3
  };
  var d = densityValues[props.density];
  return css(["thead{th{padding-top:", "px;padding-bottom:", "px;}}tbody{tr{td{padding-top:", "px;padding-bottom:", "px;padding-right:", "px;}&:first-child{td{padding-top:", "px;}}&:last-child{td{border-bottom:0;padding-bottom:", "px;}}}}"], props.theme.space[d], props.theme.space[d], props.theme.space[d], props.theme.space[d], props.theme.space[props.horizontalCellPadding], props.theme.space[d], props.theme.space[d]);
};

var showSeparator = function showSeparator(props) {
  return props.showSeparator ? css(["border-bottom:1px dashed ", ";"], props.theme.colors.grayscale[5]) : css(["border-bottom:1px solid transparent;"]);
};

var StyledTable = styled.table.withConfig({
  displayName: "Table__StyledTable",
  componentId: "sc-1o40zg2-0"
})(["", " width:100%;border-spacing:0;border-collapse:separate;color:", ";box-sizing:border-box;border-bottom:2px solid ", ";th,td{vertical-align:top;text-align:left;box-sizing:border-box;&:last-child{padding-right:0;}&.cell--numeric{text-align:right;}&.cell--fill{width:100%;}&.cell--truncate{position:relative;> *{position:absolute;left:0;right:", "px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}}&.cell--disabled{opacity:0.3;}}thead{th{font-size:", "px;color:", ";font-weight:", ";white-space:pre;background-color:", ";padding-right:", "px;border-bottom:2px solid ", ";&:first-child{padding-left:", "px;border-radius:", "px 0 0 0;}&:last-child{padding-right:", "px;border-radius:0 ", "px 0 0;}}}tbody{tr{td{text-align:left;", " &:first-child{padding-left:", "px;}&:last-child{padding-right:", "px;}}}}", ""], space, function (props) {
  return props.theme.colors.foreground;
}, function (props) {
  return props.theme.colors.grayscale[5];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.fontSizes[1];
}, function (props) {
  return props.theme.colors.grayscale[2];
}, function (props) {
  return props.theme.fontWeights.normal;
}, function (props) {
  return props.theme.colors.grayscale[6];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.colors.grayscale[5];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.radii[3];
}, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.radii[3];
}, showSeparator, function (props) {
  return props.theme.space[3];
}, function (props) {
  return props.theme.space[3];
}, informationDensity);
var Col = styled.col.withConfig({
  displayName: "Table__Col",
  componentId: "sc-1o40zg2-1"
})(["", " ", ""], space, width);

var Table = function Table(_ref) {
  var id = _ref.id,
      columns = _ref.columns,
      rows = _ref.rows,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "columns", "rows"]);

  var cols = columns.map(function (c, i) {
    return React.createElement(Col, _extends({
      key: id + "__col__" + i
    }, c));
  });
  var header = columns.map(function (c, i) {
    return React.createElement("th", {
      key: id + "__header__" + i,
      className: "" + (c.type === 'numeric' ? 'cell--numeric' : '')
    }, c.label);
  });
  var rowItems = rows.map(function (r, rowIndex) {
    var cells = r.cells.map(function (c, cellIndex) {
      var _columns$cellIndex = columns[cellIndex],
          fill = _columns$cellIndex.fill,
          truncate = _columns$cellIndex.truncate,
          rest = _objectWithoutPropertiesLoose(_columns$cellIndex, ["fill", "truncate"]);

      var cell = (fill ? 'cell--fill' : '') + " \n        " + (truncate ? 'cell--truncate' : '') + " \n        " + (r.disabled ? 'cell--disabled' : '');
      return React.createElement("td", {
        key: r.id + "-cell__" + cellIndex,
        className: cell,
        style: rest
      }, React.createElement("span", null, c.content));
    });
    return React.createElement("tr", {
      key: r.id + "-row__" + rowIndex
    }, cells);
  });
  return React.createElement(StyledTable, props, React.createElement("colgroup", null, cols), React.createElement("thead", null, React.createElement("tr", null, header)), React.createElement("tbody", null, rowItems));
};

Table.displayName = 'Table';
Table.propTypes = _objectSpread({}, space.propTypes, {
  /** Optional identifier */
  id: PropTypes.node,

  /** Horizontal padding */
  horizontalCellPadding: PropTypes.number,

  /** Whether to show a separator between rows, or not */
  showSeparator: PropTypes.bool,

  /** Columns to display in this table */
  columns: PropTypes.array,

  /** Rows to display in this table */
  rows: PropTypes.array,

  /** Information density */
  density: PropTypes.oneOf(['compact', 'normal', 'spacious'])
});
Table.defaultProps = {
  id: Math.random() * 100,
  showSeparator: true,
  horizontalCellPadding: 5,
  columns: null,
  rows: null,
  density: 'normal'
};
/** @component */

export default Table;
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from './Text';
var defaultProps = {
  color: 'grayscale.1',
  m: 0,
  fontWeight: 'light',
  lineHeight: 0,
  fontSize: 7,
  textAlign: 'left'
};
var H1 = styled(Text).attrs(function () {
  return {
    as: 'h1'
  };
}).withConfig({
  displayName: "Heading__H1",
  componentId: "sc-1fotxre-0"
})([""]);
H1.displayName = 'Heading.H1';
H1.defaultProps = defaultProps;
var H2 = styled(Text).attrs(function () {
  return {
    as: 'h2'
  };
}).withConfig({
  displayName: "Heading__H2",
  componentId: "sc-1fotxre-1"
})([""]);
H2.displayName = 'Heading.H2';
H2.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 6,
  lineHeight: 1
});
var H3 = styled(Text).attrs(function () {
  return {
    as: 'h3'
  };
}).withConfig({
  displayName: "Heading__H3",
  componentId: "sc-1fotxre-2"
})([""]);
H3.displayName = 'Heading.H3';
H3.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 5,
  lineHeight: 1
});
var H4 = styled(Text).attrs(function () {
  return {
    as: 'h4'
  };
}).withConfig({
  displayName: "Heading__H4",
  componentId: "sc-1fotxre-3"
})([""]);
H4.displayName = 'Heading.H4';
H4.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 4,
  lineHeight: 2
});
var H5 = styled(Text).attrs(function () {
  return {
    as: 'h5'
  };
}).withConfig({
  displayName: "Heading__H5",
  componentId: "sc-1fotxre-4"
})([""]);
H5.displayName = 'Heading.H5';
H5.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 3,
  lineHeight: 3
});
var H6 = styled(Text).attrs(function () {
  return {
    as: 'h6'
  };
}).withConfig({
  displayName: "Heading__H6",
  componentId: "sc-1fotxre-5"
})([""]);
H6.displayName = 'Heading.H6';
H6.defaultProps = Object.assign({}, defaultProps, {
  fontSize: 2,
  lineHeight: 4
});

var Heading = function Heading(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(H3, props, children);
};

Heading.propTypes = {
  children: PropTypes.node
};
Heading.defaultProps = {
  children: null
};
Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;
export default Heading;
import Heading from './Heading';
import Text from './Text';
import Truncate from './Truncate';
export { Heading, Text, Truncate };
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, color, fontSize, lineHeight, width, height, minWidth, maxWidth, textAlign, fontWeight, textStyle, gridColumn, gridRow, gridArea, position, zIndex, top, left, bottom, right, display } from 'styled-system';

var fullWidth = function fullWidth(props) {
  return props.fullWidth && 'width: 100%';
};

var fullHeight = function fullHeight(props) {
  return props.fullHeight && 'height: 100%';
};

var Text = styled.div.withConfig({
  displayName: "Text",
  componentId: "sc-1yskwpr-0"
})(["box-sizing:border-box;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ";", ";"], display, space, width, height, minWidth, maxWidth, color, fontSize, lineHeight, textAlign, fontWeight, textStyle, position, zIndex, top, bottom, left, right, gridColumn, gridRow, gridArea, fullWidth, fullHeight);
Text.displayName = 'Text';
Text.propTypes = _objectSpread({}, display.propTypes, space.propTypes, color.propTypes, fontSize.propTypes, lineHeight.propTypes, width.propTypes, height.propTypes, minWidth.propTypes, maxWidth.propTypes, textAlign.propTypes, fontWeight.propTypes, textStyle.propTypes, gridColumn.propTypes, gridRow.propTypes, gridArea.propTypes, {
  /** Text contianer should take up all available width */
  fullWidth: PropTypes.bool,

  /** Text container should take up all available height */
  fullHeight: PropTypes.bool
});
Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4
};
export default Text;
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import { Flex } from '../containers';
var TruncateText = styled(Text).withConfig({
  displayName: "Truncate__TruncateText",
  componentId: "zf0kw5-0"
})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]);
var TruncateContainer = styled(Flex).withConfig({
  displayName: "Truncate__TruncateContainer",
  componentId: "zf0kw5-1"
})(["min-width:0;max-width:100%;"]);

var Truncate = function Truncate(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return React.createElement(TruncateContainer, {
    justifyContent: "flex-start"
  }, React.createElement(TruncateText, props, children));
};

Truncate.displayName = 'Truncate';
Truncate.propTypes = {
  children: PropTypes.node
};
Truncate.defaultProps = {
  children: null
};
export default Truncate;
import { theme } from '../tokens';
import { colour } from '../tokens/palettes';

var getTheme = function getTheme(type) {
  var themeDefinitions = {
    light: {
      foreground: colour.grayscale[0],
      background: theme.colors.white,
      grayscale: [].concat(colour.grayscale)
    },
    dark: {
      foreground: 'hsl(220, 4%, 98%)',
      background: 'hsl(228, 34%, 9%)',
      grayscale: [].concat(colour.reverseGrayscale)
    }
  };
  return themeDefinitions[type];
};

export default getTheme;
import useWindowSize from './useWindowSize';
import usePortal from './usePortal';
import useInterval from './useInterval';
import useTheme from './useTheme';
import useAccent from './useAccent';
export { useWindowSize, usePortal, useInterval, useTheme, useAccent };
import { useState, useEffect } from 'react';
import { colour } from '../tokens/palettes';

var useAccent = function useAccent() {
  var _useState = useState('greens'),
      accent = _useState[0],
      setAccent = _useState[1];

  useEffect(function () {
    return void requestAnimationFrame(function () {
      // eslint-disable-line no-void
      var root = document.querySelector(':root');
      var newColours = [].concat(colour[accent]);
      newColours.forEach(function (c, i) {
        root.style.setProperty("--c-accent-" + i, c);
      });
    }, [accent]);
  });
  return [accent, setAccent];
};

export default useAccent;
import { useEffect, useRef } from 'react'; // A custom hook that makes setInterval declarative in a hooks world.
// Adapted from https://overreacted.io/making-setinterval-declarative-with-react-hooks/ by Dan Abramov

var useInterval = function useInterval(callback, delay) {
  var savedCallback = useRef(); // Remember the latest callback.

  useEffect(function () {
    savedCallback.current = callback;
  }); // Set up the interval.

  useEffect(function () {
    var tick = function tick() {
      savedCallback.current();
    };

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }

    return null;
  }, [delay]);
};

export default useInterval;
import { useState } from 'react';
import { createPortal } from 'react-dom';
var selector = '#base__portal';

var usePortal = function usePortal(child) {
  var _useState = useState(null),
      container = _useState[0],
      setContainer = _useState[1];

  if (typeof window === 'undefined') {
    return null;
  }

  if (!container) {
    var c = document.querySelector(selector);

    if (!c) {
      c = document.createElement('div');
      c.setAttribute('id', selector);
      c.style.cssText = 'left:0;top:0;right:0;bottom:0;position:fixed;pointer-events:none;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;';
      document.querySelector('body').appendChild(c);
    }

    setContainer(c);
  }

  return container && createPortal(child, container);
};

export default usePortal;
import { useState, useEffect } from 'react';
import getTheme from './getTheme';

var useTheme = function useTheme() {
  var _useState = useState('light'),
      theme = _useState[0],
      setTheme = _useState[1];

  useEffect(function () {
    return void requestAnimationFrame(function () {
      // eslint-disable-line no-void
      var root = document.querySelector(':root');
      var newTheme = getTheme(theme, root);
      root.style.setProperty('--c-foreground', newTheme.foreground);
      root.style.setProperty('--c-background', newTheme.background);
      newTheme.grayscale.forEach(function (c, i) {
        root.style.setProperty("--c-grayscale-" + i, c);
      });
    }, [theme]);
  });
  return [theme, setTheme];
};

export default useTheme;
import { useState, useCallback, useEffect } from 'react';

var getWindowSize = function getWindowSize() {
  return {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight
  };
};
/**
 * Hook to query the current window size. Triggers on window resize.
 */


var useWindowSize = function useWindowSize() {
  var _useState = useState(getWindowSize()),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  var handleResize = useCallback(function () {
    return setWindowSize(getWindowSize());
  });
  useEffect(function () {
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};

export default useWindowSize;
import { Box, Flex, Scrollable, Grid, Card, BoxList, BoxListItem, Heading, Text, Truncate, Image, Vector, Link, Table, Checkbox, TextInput, NumberInput, PasswordInput, Label, Select, TextArea, Radio, Button, CircleButton, SquareButton } from './components';
import { theme, randomA11y, randomColor } from './tokens';
import { useInterval, usePortal, useWindowSize, useTheme, useAccent } from './hooks';
import { Normalize, informationDensity } from './utils';
export { Box, Flex, Scrollable, Grid, Card, BoxList, BoxListItem, Heading, Text, Truncate, Image, Vector, Link, Table, Checkbox, TextInput, NumberInput, PasswordInput, Label, Select, TextArea, Radio, Button, CircleButton, SquareButton, Normalize, informationDensity, theme, randomA11y, randomColor, useInterval, usePortal, useWindowSize, useTheme, useAccent };
var boxShadows = ['0 1px 3px hsla(0, 0%, 0%, .12), 0 1px 2px hsla(0, 0%, 0%, .24)', '0 3px 6px hsla(0, 0%, 0%, .15), 0 2px 4px hsla(0, 0%, 0%, .12)', '0 10px 20px hsla(0, 0%, 0%, .15), 0 3px 6px hsla(0, 0%, 0%, .10)', '0 15px 25px hsla(0, 0%, 0%, .15), 0 5px 10px hsla(0, 0%, 0%, .2)', '0 20px 40px hsla(0, 0%, 0%, .2)'];
export default boxShadows;
var breakpoints = ['40em', '52em', '64em'];
export default breakpoints;
var fonts = {
  default: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  monospace: 'SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace'
};
export default fonts;
var fontSizes = [12, 14, 16, 18, 22, 26, 30, 34];
export default fontSizes;
var fontWeights = {
  light: 400,
  normal: 500,
  bold: 700
};
export default fontWeights;
import theme from './theme';
import { randomA11y, randomColor } from './palettes';
export { theme, randomA11y, randomColor };
var letterSpacings = {
  normal: 'normal',
  caps: '0.25em'
};
export default letterSpacings;
var lineHeights = [1, 1.125, 1.25, 1.4, 1.5];
export default lineHeights;
export var white = 'hsl(0, 0%, 100%)';
export var black = 'hsl(0, 0%, 0%)';
export var transparent = 'hsla(0, 0%, 0%, 0)';
export var focus = 'hsl(211, 97%, 61%)';
export var grayscale = ['var(--c-grayscale-0, hsl(228, 34%, 11%))', 'var(--c-grayscale-1, hsl(227, 14%, 25%))', 'var(--c-grayscale-2, hsl(229, 8%, 38%))', 'var(--c-grayscale-3, hsl(226, 5%, 51%))', 'var(--c-grayscale-4, hsl(228, 6%, 65%))', 'var(--c-grayscale-5, hsl(223, 6%, 78%))', 'var(--c-grayscale-6, hsl(220, 7%, 91%))'];
export var colour = {
  accent: ['var(--c-accent-0, hsl(197, 100%, 17%))', 'var(--c-accent-1, hsl(197, 94%, 25%))', 'var(--c-accent-2, hsl(197, 81%, 33%))', 'var(--c-accent-3, hsl(197, 69%, 40%))', 'var(--c-accent-4, hsl(197, 59%, 56%))', 'var(--c-accent-5, hsl(197, 72%, 74%))', 'var(--c-accent-6, hsl(199, 84%, 90%))'],
  grayscale: ['hsl(228, 34%, 11%)', 'hsl(227, 14%, 25%)', 'hsl(229, 8%, 38%)', 'hsl(226, 5%, 51%)', 'hsl(228, 6%, 65%)', 'hsl(223, 6%, 78%)', 'hsl(220, 7%, 91%)', 'hsl(220, 6%, 96%)'],
  reverseGrayscale: ['hsl(220, 6%, 96%)', 'hsl(220, 7%, 91%)', 'hsl(223, 6%, 78%)', 'hsl(228, 6%, 65%)', 'hsl(226, 5%, 51%)', 'hsl(229, 8%, 38%)', 'hsl(227, 14%, 25%)', 'hsl(228, 34%, 11%)'],
  greens: ['hsl(173, 100%, 15%)', 'hsl(173, 100%, 21%)', 'hsl(173, 93%, 28%)', 'hsl(173, 81%, 35%)', 'hsl(173, 48%, 50%)', 'hsl(173, 53%, 65%)', 'hsl(172, 58%, 81%)'],
  oranges: ['hsl(34, 83%, 28%)', 'hsl(31, 68%, 40%)', 'hsl(29, 65%, 54%)', 'hsl(27, 87%, 67%)', 'hsl(26, 98%, 75%)', 'hsl(28, 100%, 82%)', 'hsl(29, 100%, 89%)'],
  reds: ['hsl(8, 96%, 27%)', 'hsl(8, 78%, 38%)', 'hsl(7, 67%, 51%)', 'hsl(7, 77%, 61%)', 'hsl(6, 87%, 71%)', 'hsl(7, 96%, 80%)', 'hsl(7, 100%, 88%)'],
  blues: ['hsl(197, 100%, 17%)', 'hsl(197, 94%, 25%)', 'hsl(197, 81%, 33%)', 'hsl(197, 69%, 40%)', 'hsl(197, 59%, 56%)', 'hsl(197, 72%, 74%)', 'hsl(199, 84%, 90%)'],
  purples: ['hsl(283, 38%, 25%)', 'hsl(284, 34%, 37%)', 'hsl(284, 30%, 48%)', 'hsl(283, 37%, 60%)', 'hsl(283, 38%, 72%)', 'hsl(283, 38%, 84%)', 'hsl(285, 40%, 96%)']
};
var palettes = ['greens', 'oranges', 'reds', 'blues', 'purples'];
export var randomA11y = function randomA11y() {
  var r = Math.floor(Math.random() * palettes.length);
  var palette = palettes[r];
  return [colour[palette][0], colour[palette][5]];
};
export var randomColor = function randomColor() {
  var r = Math.floor(Math.random() * palettes.length);
  var palette = palettes[r];
  var item = Math.floor(Math.random() * palette.length);
  return colour[palette][item];
};
var radii = [0, 1, 2, 4, 8, 16, 9999];
export default radii;
var space = [0, // 0
4, // 1
8, // 2
16, // 3
24, // 4
32, // 5
48, // 6
64, // 7
96, // 8
128, // 9
192, // 10
256, // 11
384, // 12
512, // 13
640];
export default space;
// A set of common text styles that can be consumed by a Text component.
var textStyles = {
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  monospace: {
    fontFamily: '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;'
  },
  italic: {
    fontStyle: 'italic'
  }
};
export default textStyles;
import breakpoints from './breakpoints';
import timingFunctions from './timingFunctions';
import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import textStyles from './textStyles';
import boxShadows from './boxShadows';
import space from './space';
import radii from './radii';
import { white, black, focus, grayscale, colour } from './palettes';
var lightSwatch = {
  background: "var(--c-background, " + white + ")",
  foreground: "var(--c-foreground, " + grayscale[0] + ")",
  grayscale: [].concat(grayscale)
}; // Construct a base colors object to use in a theme.

var baseColors = {
  // Primary palettes
  black: black,
  white: white,
  accent: [].concat(colour.accent),
  // Secondary palettes
  blues: [].concat(colour.blues),
  reds: [].concat(colour.reds),
  oranges: [].concat(colour.oranges),
  greens: [].concat(colour.greens),
  purples: [].concat(colour.purples),
  // Guidance palettes
  guidance: {
    info: [colour.blues[0], colour.blues[6]],
    error: [colour.reds[0], colour.reds[6]],
    warning: [colour.oranges[0], colour.oranges[6]],
    success: [colour.greens[0], colour.greens[6]],
    focus: focus
  }
};
var lightColors = Object.assign({}, baseColors, lightSwatch); // Construct a base theme with values we want.

var baseTheme = {
  breakpoints: breakpoints,
  timingFunctions: timingFunctions,
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  letterSpacings: letterSpacings,
  lineHeights: lineHeights,
  radii: radii,
  boxShadows: boxShadows,
  space: space,
  textStyles: textStyles
};
var lightTheme = Object.assign({}, baseTheme, {
  colors: lightColors
});
export default lightTheme;
var easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)';
var easeOut = 'cubic-bezier(0, 0, 0.25, 1)';
var easeIn = 'cubic-bezier(0.5, 0, 1, 1)';
var timingFunctions = {
  easeInOut: easeInOut,
  easeOut: easeOut,
  easeIn: easeIn
};
export default timingFunctions;
var transitionDelays = {
  small: '80ms',
  medium: '180ms',
  large: '260ms',
  xLarge: '360ms'
};
export default transitionDelays;
import Normalize from './Normalize';
import informationDensity from './informationDensity';
export { Normalize, informationDensity };
var informationDensity = function informationDensity(density) {
  var densities = {
    compact: 32,
    normal: 40,
    spacious: 48
  };
  return densities[density];
};

export default informationDensity;
function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  :root, body {\n    width: 100vw;\n    min-height: 100vh;\n\n    margin: 0;\n    padding: 0;\n\n    font-size: 8px;\n    overflow-x: hidden;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.43;\n\n    // Specific layout resets.\n    display: flex;\n    flex: none;\n    flex-direction: column;\n  }\n\n  *, ::before, ::after {\n    box-sizing: border-box;\n  }\n\n  a,\n  a:hover,\n  a:visited {\n    text-decoration: none;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  code,\n  kbd {\n    font-family: \"SF Mono\", \"Segoe UI Mono\", \"Roboto Mono\", \"Ubuntu Mono\", Menlo, Courier, monospace;\n  }\n\n  template {\n    display: none;\n  }\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  main,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n\n  html,\n  body,\n  p,\n  div,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  ul,\n  ol,\n  dl,\n  img,\n  pre,\n  form,\n  fieldset {\n    margin: 0;\n    padding: 0;\n  }\n\n  img,\n  fieldset {\n    border: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import { createGlobalStyle } from 'styled-components';
var Normalize = createGlobalStyle(_templateObject());
export default Normalize;
