export const verifyFilters = ({ type, filters }) => {
  switch (type) {
    case "Preços":
      return (
        filters.filtering === "Cores" ||
        filters.filtering === "Tamanhos" ||
        filters.searching !== ""
      );
    case "Tamanhos":
      return (
        filters.filtering === "Cores" ||
        filters.filtering === "Preços" ||
        filters.searching !== ""
      );
    case "Cores":
      return (
        filters.filtering === "Tamanhos" ||
        filters.filtering === "Preços" ||
        filters.searching !== ""
      );
    default:
      return false;
  }
};
