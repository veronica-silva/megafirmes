export const formataData = (data) => {
  const quebraData = data.split("-");
  const [ano, mes, dia] = quebraData;
  return `  ${dia}/${mes}/${ano}`;
};
