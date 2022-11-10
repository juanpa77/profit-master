
export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(number);
};
