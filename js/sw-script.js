

console.log('navigator', navigator);
 if (navigator.serviceWorker) {
   navigator.serviceWorker.register('/service-worker.js', {scope: '/'})
   .then(function (registration) {
        console.log('Registration Success:', registration);
   })
   .catch(function (error) {
        confirm('Registration failed:', error);
   });
 }
else {
   console. log('Service workers are not supported.');
}
