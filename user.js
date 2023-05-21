async function getGames(){
	const response = await fetch("https://cdn.jsdelivr.net/gh/hackclub/sprig@main/games/metadata.json");
	const json = await response.json();
	let search = new URLSearchParams(window.location.search).get("name");
	let games = [];
	for(let i = 0; i < json.length; i++){
		if(json[i].author === search){
			games.push(json[i].filename);
		}
	}
	for(let i = 0; i < games.length; i++){
		let li = document.createElement("li");
		li.innerHTML = "<a href='https://sprig.hackclub.com/gallery/"+games[i]+"'>"+games[i]+"</a>";
		document.querySelector("ol").appendChild(li);
	}
}

getGames();