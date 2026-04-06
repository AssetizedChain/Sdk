const API = "http://localhost:3000/api/assets";

async function createAsset() {
  const name = document.getElementById("name").value;
  const value = document.getElementById("value").value;

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, value })
  });

  loadAssets();
}

async function loadAssets() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(asset => {
    const li = document.createElement("li");
    li.innerText = `${asset.name} - $${asset.value}`;
    list.appendChild(li);
  });
}

loadAssets();
