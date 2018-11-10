const Main = function() {
	Main.initializeReleases();
};

Main.initializeReleases = function() {
	fetch("https://api.github.com/repos/NiclasOlofsson/MEENET/releases").then(function(response) {
		return response.json();
	}).then(function(releases) {
		for(var i = 0; i < releases.length; i++) {
			const release = releases[i];
			
			const cardElement = document.createElement("div");
			cardElement.className = "card mb-4 shadow";
			cardElement.innerHTML = "<div class=\"card-body\">" +
				"<h4 class=\"card-title\">" + release.name + "</h4>" +
				"<p class=\"card-text\">Released on <b>" + new Date(release.published_at).toLocaleDateString() + "</b> by <a href=\"" + release.author.html_url + "\" target=\"_blank\">" + release.author.login + "</a>.</p>" +
				"<a href=\"" + release.html_url + "\" class=\"btn btn-primary w-100\">Download</button>" +
				"</div>";
			document.getElementById("releases").appendChild(cardElement);

			if(i == 2) {
				break;
            		}
		}
	});
};


Main();
