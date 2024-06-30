import test from "tape";
import { put, call } from "redux-saga/effects";
import { incrementAsync, delay } from "./saga";

test("increment Async saga test", (assert) => {
  const gen = incrementAsync();
  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    "increment async saga must call delay(1000)"
  );
  assert.deepEqual(
    gen.next().value,
    put({ type: "INCREMENT" }),
    "increment Async saga must dispatch an INCREMENT action"
  );
  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    "Increment saga must be done"
  );
  assert.end();
});
