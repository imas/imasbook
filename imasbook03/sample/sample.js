function exe(unitName) {
  const Query = "PREFIX schema: <http://schema.org/>" +
    "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>" +
    "PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>" +
    "PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>" +
    "SELECT ?iname ?color WHERE {?unit rdf:type imas:Unit;schema:name ?uname;" +
    "schema:member ?member." +
    "filter(?uname=\"" + unitName.value + "\")" +
    "?member rdfs:label ?iname;imas:Color ?color.}order by ?member";
  const url = 'https://sparql.crssnky.xyz/spql/imas/query?query=' +
    encodeURIComponent(Query);
  const request = new XMLHttpRequest();

  request.addEventListener("load", (e) => {
    const json = JSON.parse(e.target.responseText)["results"]["bindings"];
    if (json.length === 0) {
      document.getElementById("message").innerText =
        "Not unit name. OR Each members don't has color.";
      return;
    }
    document.getElementById("sub").style = "display:none";
    const width = 100.0 / json.length;
    const div = document.getElementById("main");
    json.forEach(i => {
      const box = document.createElement("div");
      div.appendChild(box);
      box.classList.add("element");

      const name = i.iname.value;
      const color = i.color.value;
      box.style.width = width + "%";
      box.style.backgroundColor = "#" + color;
      box.style.fontSize = (width / 2) + "px";
      box.innerText = name + "\n#" + color;
      const red = parseInt(color.substring(0, 2), 16);
      const green = parseInt(color.substring(2, 4), 16);
      const blue = parseInt(color.substring(4, 6), 16);
      box.style.color = ((red * 0.299 + green * 0.587 + blue * 0.114) < 186) ?
        "white" : "black";
    });
  });

  request.addEventListener("error", () => {
    console.log("Http Request Error");
  });

  request.open("GET", url);
  request.send();
}