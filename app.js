fetch("data.json")

.then(response => response.json())

.then(data => {

document.getElementById("avatar").src = data.avatar;

document.getElementById("name").textContent = data.name;

document.getElementById("bio").textContent = data.bio;

document.getElementById("desc").textContent = data.description;

const linksContainer = document.getElementById("links");

const socialsContainer = document.getElementById("socials");

/* liens */

data.links.forEach(link => {

const a = document.createElement("a");

a.href = link.url;

a.target = "_blank";

a.className = "link";

if(link.icon){

const img = document.createElement("img");

img.src = link.icon;

a.appendChild(img);

}

const span = document.createElement("span");

span.textContent = link.title;

a.appendChild(span);

linksContainer.appendChild(a);

});

/* réseaux */

data.socials.forEach(social => {

const a = document.createElement("a");

a.href = social.url;

a.target = "_blank";

const icon = document.createElement("i");

icon.className = social.icon;

a.appendChild(icon);

socialsContainer.appendChild(a);

});

});