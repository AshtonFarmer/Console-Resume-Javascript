console.log("Name: " + "Ashton Farmer".toUpperCase());
console.log("Career:  Professional Racecar Driver");
console.log("Description: I can make things float with my mind such as my wheels");


console.log(" "); // Spacing inbetween


console.log("My Intersts:");
console.log("* The Flash is my favorite tv show");
console.log("* Old Videogames");
console.log("* Graphics and personal detail in games");
console.log("* Coding");


console.log(" "); // Spacing inbetween


console.log("My previous Expirence:");
displayposition("Srverquene", "Server Engineer", "Fix problems in a server");
displayposition("152 Racetrack", "Racecar Diver", "Win as many races as possible")
displayposition("Covalence", "Technition expert", "Fix any problem with the software on the website")


console.log(" "); // Spacing inbetween


console.log("My Skills:");
DisplaySkill("Racing", true);
DisplaySkill("Coder", false);
DisplaySkill("Telekinesis", true);
DisplaySkill("Break anything I touch", false);
DisplaySkill("Coding", false);







function displayposition(companyname, jobtitle, description) {
    console.log(jobtitle + " at " + companyname + " - " + description);
}

function DisplaySkill(skillname, isCool) {
    if (isCool) {
        console.log("Bam: " + skillname);
    } else {
        console.log(skillname);
    }
}