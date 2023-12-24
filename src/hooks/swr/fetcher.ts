

const fetcherWithToken = async ([url, token] : [string, string]) => {
  url = process.env.NEXT_PUBLIC_V2_BACK_URL + url;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + token
      },
    });

    let text = await response.text();

    const data = text ? JSON.parse(text) : null

    if (response.ok) {
      return data
    } else if (response.status === 401) {
      const error = new Error(response.statusText);
      error.name = "access error";
      throw error
    }

    const error = new Error(response.statusText)
    error.message = "access error message";
    throw error
  } catch (error) {
    throw error
  }
}

export { fetcherWithToken }
