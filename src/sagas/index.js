import { fork } from "redux-saga/effects";
import { watchAgeUp, watchAgeDown } from "./watcher";

export default function* startForeman() {
  yield fork(watchAgeDown);
  yield fork(watchAgeUp);
}
