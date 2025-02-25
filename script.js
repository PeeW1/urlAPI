
let bntEncurtar = document.getElementById('btn-encurtar');

bntEncurtar.addEventListener('click', (e) => {
    let url = document.getElementById("url-input").value.trim();
    let nameUrl = document.getElementById("name-url-input").value.trim();

    if(!url) {
        alert("por favor digite uma URL valida")
        return;
        
    }

    let headers = {
        "Content-Type": "application/json",
        "apiKey": "8e687b5e639440349cd678c39fc0e38f"
    }

    let randomTag = `${nameUrl}${Math.floor(Math.random() * 10000)}`;
    console.log(randomTag)

    let linkRequest = {
        destination: url,
        slashtag: randomTag,
        domain: { fullName: "rebrand.ly" }
    }

    if (nameUrl) {
        linkRequest.slashtag = nameUrl;
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    }).then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("url-input");
            inputUrl.value = json.shortUrl;
        });
})