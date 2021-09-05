// function contador(ini) {
//   let cont = ini
//   return new Promise(resolve => {
//     setInterval(() => {
//       resolve(cont++)
//     }, 1000)
//   })
// }

// contador(123)
//   .then(contador => console.log(contador))
//RETURNS THE COUNTER JUST ONCE


const { Observable } = require('rxjs')

function contador(ini) {
  let cont = ini
  return new Observable(suscriber => {
    setInterval(() => {
      suscriber.next(cont++)
    }, 1000)
  })
}
contador(123)
  .subscribe(
    contador => console.log(contador)
  )

//RETURNS THE COUNTER SEVERAL TIMES: 123, 124, 125 AND SO ON

// ejemplo en clase

const { Observable } = require('rxjs');

const interval = new Observable((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    observer.next(count++);
  }, 1000);

  // once we stop listening to values clear the interval
  return () => {
    console.log(`Me llamaron`);
    //Probar comentando y descomentando el clearInterval
    // clearInterval(interval);
  };
});

const subscription = interval.subscribe((value) => {
  console.log(value);
  // Cuando se hace la desuscripción se llama al return del Obervable
  if (value >= 5) subscription.unsubscribe();
});