const presence = new Presence({
	clientId: "731659541904621708"
});
presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
		startTimestamp: Date.now()
	};
	let path = document.location.pathname;
	if (path.startsWith("/fortnite")) {
		presenceData.largeImageKey = "fortnite";
		path = path.substring(9);
		if (path.length === 0) {
			presenceData.details = "Viewing homepage";
			presenceData.state = "Fortnite";
		} else if (path === "/shop") {
			presenceData.details = "Viewing item shop";
			presenceData.state =
				document.querySelector(".shop-date-small").textContent;
		} else if (path === "/cosmetics")
			presenceData.details = "Viewing all cosmetics";
		else if (
			path.startsWith("/backpack") ||
			path.startsWith("/banner") ||
			path.startsWith("/bundle") ||
			path.startsWith("/emoji") ||
			path.startsWith("/emote") ||
			path.startsWith("/glider") ||
			path.startsWith("/loading") ||
			path.startsWith("/music") ||
			path.startsWith("/outfit") ||
			path.startsWith("/pet") ||
			path.startsWith("/pickaxe") ||
			path.startsWith("/skydive") ||
			path.startsWith("/spray") ||
			path.startsWith("/toy") ||
			path.startsWith("/umbrella") ||
			path.startsWith("/wrap")
		) {
			const itemType = document.querySelector(".type-rarity-string");
			presenceData.details = `Viewing ${
				document.querySelector(".item-title").textContent
			}`;
			presenceData.state = `${itemType.childNodes[1].textContent} ${itemType.firstChild.textContent}`;
		} else if (path === "/upcoming")
			presenceData.details = "Viewing upcoming cosmetics";
		else if (path === "/sets") presenceData.details = "Viewing item sets";
		else if (path.startsWith("/sets/")) {
			presenceData.details = "Viewing item set";
			presenceData.state = document.querySelector(".item-title").textContent;
		} else presenceData.details = `Viewing ${path.substring(1)}`;
	} else if (path.startsWith("/valorant")) {
		presenceData.largeImageKey = "valorant";
		path = path.substring(9);
		if (path.length === 0) {
			presenceData.details = "Viewing homepage";
			presenceData.state = "Valorant";
		} else if (path === "/all") presenceData.details = "Viewing all skins";
		else if (path === "/weapons") presenceData.details = "Viewing weapons";
		else if (path.startsWith("/weapons/")) {
			presenceData.details = "Viewing weapon";
			presenceData.state = document
				.querySelector(".weapon-detail h1")
				.textContent.replace(" Skins", "");
		} else if (path === "/collections")
			presenceData.details = "Viewing collections";
		else if (path.startsWith("/collections/")) {
			presenceData.details = "Viewing collection";
			presenceData.state = document.querySelector(".item-title").textContent;
		} else if (
			path.startsWith("/sidearm/") ||
			path.startsWith("/sniper/") ||
			path.startsWith("/knife/") ||
			path.startsWith("/rifle/") ||
			path.startsWith("/heavy/") ||
			path.startsWith("/smg/") ||
			path.startsWith("/shotgun/") ||
			path.startsWith("/sidearm/")
		) {
			presenceData.details = "Viewing skin";
			presenceData.state =
				document.querySelector(".skin-detail h1").textContent;
		} else presenceData.details = `Viewing ${path.substring(1)}`;
	} else if (path.startsWith("/fallguys")) {
		presenceData.largeImageKey = "fallguys";
		path = path.substring(9);
		if (path.length === 0) {
			presenceData.details = "Viewing homepage";
			presenceData.state = "Fall Guys";
		} else if (path === "/all") presenceData.details = "Viewing all skins";
		else if (path === "/unreleased")
			presenceData.details = "Viewing unreleased skins";
		else if (path === "/shop") {
			presenceData.details = "Viewing item shop";
			presenceData.state =
				document.querySelector(".shop-date-small").textContent;
		} else if (
			path.startsWith("/top/") ||
			path.startsWith("/bottom") ||
			path.startsWith("/pattern") ||
			path.startsWith("/emote") ||
			path.startsWith("/faceplate") ||
			path.startsWith("/colour") ||
			path.startsWith("/celebration")
		) {
			presenceData.details = `Viewing ${
				document.querySelector(".skin-name").textContent
			}`;
			presenceData.state = `${
				document.querySelector(".skin-rarity-string > .rarity-label")
					.textContent
			} ${document.querySelector(".skin-type-string").textContent}`;
		}
	} else {
		presenceData.largeImageKey = "skindb";
		if (path === "/") presenceData.details = "Viewing homepage";
		else presenceData.details = `Viewing ${path.substring(1)}`;
	}
	presence.setActivity(presenceData);
});
