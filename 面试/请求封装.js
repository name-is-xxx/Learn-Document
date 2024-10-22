function globalRequest(url, timeout = 3000) {
  return new Promise((resolve, reject) => {
    // 法1：XMLHttpRequest
    const request = new XMLHttpRequest();
    setTimeout(() => {
      request.abort();
      reject(new Error("Request timed out"));
    }, timeout);
    xhr.open("GET", url, false);
    xhr.send(null);
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status >= 200 && request.status < 300)
          resolve(request.responseText);
        else reject(new Error(`Request failed with ${request.status}`));
      }
    };
    // 法2：axios
    axios({
      method: "get",
      url: url,
      timeout: timeout,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
globalRequest("https://www.bilibili.com/")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
