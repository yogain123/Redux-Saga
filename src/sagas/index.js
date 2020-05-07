import { takeEvery, takeLatest, put } from "redux-saga/effects";

function delaying() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 100);
  });
}

function* ageDownAsync() {
  const status = yield delaying();
  if (status) {
    yield put({ type: "AGE_DOWN_ASYNC" });
  }
}

export function* watchAgeDown() {
  yield takeEvery("AGE_DOWN", ageDownAsync);
}

function* ageUpAsync() {
  const status = yield delaying();
  if (status) {
    yield put({ type: "AGE_UP_ASYNC" });
  }
}

export function* watchAgeUp() {
  yield takeEvery("AGE_UP", ageUpAsync);
}
