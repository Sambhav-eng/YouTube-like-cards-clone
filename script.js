
// function CreateCards(title, cname , views, monthsold, duration, thumbnail) {
//     console.log(title, cname, views, monthsold, duration, thumbnail);
// }

// while (true) {  
//     let stop = prompt("Type 'stop' to exit or press OK to continue:");
//    if (!stop || stop.toLowerCase() === "stop") break;

//     let title = prompt("Enter title:");
//     let cname = prompt("Enter the channel's name:");
//     let views = prompt("Enter views count:");
//     if (!title || !cname || !views) {
//     alert("Please fill in title, channel name, and views!");
//     continue;
// }
//     if (views > 999) views = Math.floor(views / 1000) + "k views";
//     else views = views + " views";

//     let monthsold = prompt("How many months old?");
//     let duration = prompt("Duration:");
//     let thumbnail = prompt("Link for Thumbnail");

//     let newdiv = document.createElement("div");
//     newdiv.className = "box";

//     CreateCards(title, cname, views, monthsold, duration, thumbnail);
//     document.body.appendChild(newdiv);

//     console.log("Cards created @#")

//     let inforow = document.createElement("div");
//     inforow.className = "Elements-parent";

//     let titleelem = document.createElement("h3");
//     titleelem.className = "card-title";
//     titleelem.textContent = title;
//     inforow.appendChild(titleelem);

//     let channelname = document.createElement("div");
//     channelname.className = "channel-name";
//     channelname.textContent = cname;

//     let dot1 = document.createElement("div");
//     dot1.className = "dot";
//     dot1.textContent = ".";

//     let dot2 = document.createElement("div");
//     dot2.className = "dot";
//     dot2.textContent = ".";

//     let Old = document.createElement("div");
//     Old.className = "VideoOld";
//     Old.textContent = `${monthsold}`;

//     let viewsonch = document.createElement("div");
//     viewsonch.className = "channel-View";
//     viewsonch.textContent = views;

//     let flexwrap = document.createElement("div");
//     flexwrap.className = "Master-Wrap";
//     newdiv.appendChild(flexwrap);

//     let pic = document.createElement("div");
//     pic.className = "picture";
//     pic.style.backgroundImage = `url(${thumbnail})`;

//     let timedur = document.createElement("div");
//     timedur.className = "Time-duration";
//     timedur.textContent = duration;
//     pic.appendChild(timedur);

//     let infobar = document.createElement("div");
//     infobar.className = "info-bar";
//     infobar.appendChild(channelname);
//     infobar.appendChild(dot1);
//     infobar.appendChild(viewsonch);
//     infobar.appendChild(dot2);
//     infobar.appendChild(Old);

//     inforow.appendChild(infobar);
//     flexwrap.appendChild(pic);
//     flexwrap.appendChild(inforow);

//     console.log(`Trying to load: ${thumbnail}`);
// }


async function start() {
  while (true) {
    let stop = prompt("Type 'stop' to exit or press OK to continue:");
    if (!stop || stop.toLowerCase() === "stop") break;

    let title = prompt("Enter title:");
    let cname = prompt("Enter channel name:");
    let views = prompt("Enter views count:");
    if (!title || !cname || !views) {
      alert("Missing input!");
      continue;
    }

    views = parseInt(views);
    views = views > 999 ? Math.floor(views / 1000) + "k views" : views + " views";

    let monthsold = prompt("How many months old?");
    let duration = prompt("Duration:");
    let thumbnail = prompt("Thumbnail link:");

    // Create the card here (your code below is same)
    let newdiv = document.createElement("div");
    newdiv.className = "box";
    document.body.appendChild(newdiv);

    let flexwrap = document.createElement("div");
    flexwrap.className = "Master-Wrap";
    newdiv.appendChild(flexwrap);

    let pic = document.createElement("div");
    pic.className = "picture";
    pic.style.backgroundImage = `url(${thumbnail})`;

    let timedur = document.createElement("div");
    timedur.className = "Time-duration";
    timedur.textContent = duration;
    pic.appendChild(timedur);

    let inforow = document.createElement("div");
    inforow.className = "Elements-parent";

    let titleelem = document.createElement("h3");
    titleelem.className = "card-title";
    titleelem.textContent = title;
    inforow.appendChild(titleelem);

    let channelname = document.createElement("div");
    channelname.className = "channel-name";
    channelname.textContent = cname;

    let dot1 = document.createElement("div");
    dot1.className = "dot";
    dot1.textContent = ".";

    let viewsonch = document.createElement("div");
    viewsonch.className = "channel-View";
    viewsonch.textContent = views;

    let dot2 = document.createElement("div");
    dot2.className = "dot";
    dot2.textContent = ".";

    let Old = document.createElement("div");
    Old.className = "VideoOld";
    Old.textContent = monthsold;

    let infobar = document.createElement("div");
    infobar.className = "info-bar";
    infobar.appendChild(channelname);
    infobar.appendChild(dot1);
    infobar.appendChild(viewsonch);
    infobar.appendChild(dot2);
    infobar.appendChild(Old);

    inforow.appendChild(infobar);
    flexwrap.appendChild(pic);
    flexwrap.appendChild(inforow);

    console.log("✅ Card created");

    // 🔁 Force DOM update before next prompt
    await new Promise(r => setTimeout(r, 50));
  }
}

// Start after page loads
start();
