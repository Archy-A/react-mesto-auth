export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    if (response.status == '201'){
      return response.json();
    }
    else {
      return
     }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
}

export const sigin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    if (response.status == '200'){
      return response.json();
    }
    else {
      return
     }
  })
  .then((res) => {
    if (res.token){
      localStorage.setItem('token', res.token);
      return res;
    } else {
      console.log("message =", res.message)
      return res;
    }
  })
  .catch((err) => console.log(err));
}; 

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())
  .then(data => data)
} 
