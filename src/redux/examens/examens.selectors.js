import { createSelector } from 'reselect';

const selectExamensReducer = state => state.examensReducer;

export const selectExamens = createSelector(
  [selectExamensReducer],
  reducer => reducer.examens
);

export const selectSelectedExamens = createSelector(
  [selectExamensReducer],
  reducer => reducer.selectedExamens
);

export const selectAmo = createSelector(
  [selectExamensReducer],
  reducer => reducer.isAmo
);

export const selectTotalPrice = createSelector(
  [selectAmo, selectSelectedExamens],
  (isAmo, selectSelectedExamens) => {
    let price = selectSelectedExamens.reduce(
      (acc, examen) => (isAmo ? examen.amo + acc : examen.price + acc),
      0
    );

    if (isAmo) price = price * 0.3;

    return price;
  }
);
