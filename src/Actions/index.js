function delaying() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

//-------- Thunk Way Start ----------

// export function onAgeUp() {
//   return async (dispatch) => {
//     const status = await delaying();
//     if (status) {
//       dispatch({
//         type: "AGE_UP",
//       });
//     }
//   };
// }

// export function onAgeDown() {
//   return async (dispatch) => {
//     const status = await delaying();
//     if (status) {
//       dispatch({
//         type: "AGE_DOWN",
//       });
//     }
//   };
// }

//-------- Thunk Way End ----------

//------Saga Way Start --------

export function onAgeUp() {
  return { type: "AGE_UP" };
}

export function onAgeDown() {
  return { type: "AGE_DOWN" };
}

//------Saga Way End ----------
