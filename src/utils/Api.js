class Api {
  setData({ tel, name }) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tel: tel,
        name: name,
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
  }
}

const api = new Api();
