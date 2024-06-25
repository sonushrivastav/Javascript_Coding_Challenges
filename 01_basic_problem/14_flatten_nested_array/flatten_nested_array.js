function flatternArray(arr) {
  return arr.reduce(
    (flat, toFlatten) =>
      flat.concat(
        Array.isArray(toFlatten) ? flatternArray(toFlatten) : toFlatten
      ),
    []
  );
}

module.exports = flatternArray;
