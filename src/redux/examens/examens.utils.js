export const addExamenToSelectedExamensUtil = (state, examen) => {
  const selectedExamens = state.selectedExamens;
  const exists = selectedExamens.find(({ key }) => examen.key === key);

  if (!exists) {
    return [...selectedExamens, examen];
  }

  return [...selectedExamens];
};
