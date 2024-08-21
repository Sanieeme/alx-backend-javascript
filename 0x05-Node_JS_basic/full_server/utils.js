function async readDatabase(path) => {
  const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
         resolve('success');
      }
      else {
        reject('failed');
    }
    }, 1000);
 });
});
