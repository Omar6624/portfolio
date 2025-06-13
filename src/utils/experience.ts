const getExperience = (
  startYear: number,
  startMonth: number
): [number, number] => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  let years = currentYear - startYear;
  let months = currentMonth - startMonth;

  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return [years, months];
};
export default getExperience;
