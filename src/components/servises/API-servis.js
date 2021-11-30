

const URL = 'https://pixabay.com/api/?q='
const key = '22353010-e1640ec84a31ac5dbc2cb01be'
const page = 1

async function fetchImages(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
};

export function fetchHomeContacts() {
  return fetchImages(`https://61a37875d5e833001729203a.mockapi.io/contacts`);
};

export function fetchPutContacts() {
  return fetchImages(`https://61a37875d5e833001729203a.mockapi.io/contacts`);
};

