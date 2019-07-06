/**
 * A utility function to destructure layout props from a set of props.
 * This is useful for positioning items within an Higher Order Component and simplify the incoming API.
 */
const destructureLayoutProps = (props) => {
  const {
    m, mt, mr, mb, ml, mx, my,
    width, height, minHeight, maxHeight, minWidth, maxWidth, size,
    position, top, right, bottom, left,
    fullWidth, fullHeight, cover,
    gridArea, gridRow, gridColumn, ...passthroughProps
  } = props;
  const layoutProps = {
    m, mt, mr, mb, ml, mx, my,
    width, height, minHeight, maxHeight, minWidth, maxWidth, size,
    position, top, right, bottom, left,
    fullWidth, fullHeight, cover,
    gridArea, gridRow, gridColumn,
  };

  // Delete any undefined objects from this object so it doesn't mess with layout props.
  Object.keys(layoutProps).forEach(key => layoutProps[key] === undefined && delete layoutProps[key])

  return [layoutProps, passthroughProps];
};

export default destructureLayoutProps;