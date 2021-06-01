function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

function showJobA(id) {
    if (id == "jobA") {
        document.getElementById("jobDescription").innerHTML =
            "This is the job description for job A";
    } else if (id == "clj") {
        document.getElementById("jobDescription").innerHTML =
            "This is the job description for clj";
    } else if ((id = "venetian")) {
        document.getElementById("jobDescription").innerHTML =
            "<ul><li>Coordinated carpet deliveries and exports with truck drivers and installers</li><li>Consulted with business owner in order to reduce warehouse loading times by 10%</li><li>Operated heavy machinery including forklifts to organize the carpet warehouse</li></ul>";
    }
}
