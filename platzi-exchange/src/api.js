const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}

export default {
  getAssets,
};
