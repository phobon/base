/**
 * A utility function to destructure layout props from a set of props.
 * This is useful for positioning items within an Higher Order Component and simplify the incoming API.
 */
const destructureLayoutProps = (props) => {
  const { m, my, mx, mt, mb, ml, mr, position, top, left, right, bottom, width, height, fullWidth, fullHeight, cover, ...passthroughProps } = props;
  const layoutProps = { m, my, mx, mt, mb, ml, mr, position, top, left, right, bottom, width, height, fullWidth, fullHeight, cover };

  return [layoutProps, passthroughProps];
};

export default destructureLayoutProps;