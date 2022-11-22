const formatNumberDay = (day: Number) => day < 10 ? `${'0' + day}` : day

export const formatDate = (date: Date): string => {
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1
    }-${formatNumberDay(date.getDate())}`;
  return formattedDate;
};

export const splitDate = (date: string) => {
  const formatDate = date.split("-").reverse();
  return {
    day: formatDate[0],
    month: formatDate[1],
    year: formatDate[2]
  }
};

export const formatStringToDate = (date: string) => {
  const { day, month, year } = splitDate(date)
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}

export const getNumberOfMonth = (month: string) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const result = months.indexOf(month)
  if (result !== -1) return result
  return meses.indexOf(month)
}

export const formatNumberMonth = (month: number | string): string => {
  let formatMonth = typeof month === 'string'
    ? parseInt(month)
    : month
  formatMonth++
  return formatMonth <= 9
    ? '0' + formatMonth.toString()
    : formatMonth.toString()
}

export const formatMonth = (month: number) => month < 10 ? '0' + month : month.toString()

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(number);
};

export const isCurrentMonth = (month: number) => new Date().getMonth() + 1 === month