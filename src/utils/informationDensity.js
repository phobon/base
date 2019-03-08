const informationDensity = (density) => {
  const densities = {
    compact: 32,
    normal: 40,
    spacious: 48,
  };

  return densities[density];
};

export default informationDensity;