const login = async (email: string, password: string) => {
  const res = await fetch('/login', { // basic auth
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${window.btoa(`${email}:${password}`)
        }`
    }
  })
  const data = await res.json();
  if (data.sessionToken) {
    return { sessionToken: data.sessionToken }
  }
  return { errorMessage: data.errorMessage };
};

export default login;
