async function getGames(){
	const response = await fetch("https://cdn.jsdelivr.net/gh/hackclub/sprig@main/games/metadata.json");
	const json = await response.json();
	let people = [];
	for(let i = 0; i < json.length; i++){
		let matching = people.find((element) => {return element.name===json[i].author});
		if(matching){
			people[people.indexOf(matching)].games.push(json[i].filename);
		}else{
			people.push({name:json[i].author,games:[json[i].filename]});
		}
	}
	people = people.sort((a,b) => {return b.games.length-a.games.length});
	for(let i = 0; i < people.length; i++){
		let tr = document.createElement("tr");
		let un = document.createElement("td");
		let ua = document.createElement("td");
		un.innerHTML = "<a href='user.html?name="+people[i].name+"'>"+people[i].name+"</a>";
		ua.innerHTML = people[i].games.length;
		tr.appendChild(un);
		tr.appendChild(ua);
		document.querySelector("table").appendChild(tr);
	}
}

getGames();