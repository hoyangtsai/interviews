// const getBankList = fetch('api/bankList');

// getBankList().then(list => newsList.value = list);

function getBankList() {
  return fetch('https://example.com/api/bankList');
}

const getBankListWithDefaultValue = (defaultValue, waitSec) => {
  // Create a promise that resolves after waitingSeconds
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultValue);
    }, waitSec * 1000);
  });

  const fetchPromise = getBankList().then((res) => res.json());

  // Use Promise.race to resolve with the first completed promise
  return Promise.race([fetchPromise, timeoutPromise]);
}


getBankListWithDefaultValue({'message': 'failed'}, 2)
  .then((res) => {
    console.log('res :>> ', res);
  })