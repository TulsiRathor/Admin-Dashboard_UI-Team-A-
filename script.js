function approveUser(button) {
    const row = button.closest("tr");
    const status = row.querySelector(".status");
    status.innerText = "Approved";
    status.classList.remove("pending", "rejected");
    status.classList.add("approved");
}

function rejectUser(button) {
    const row = button.closest("tr");
    const status = row.querySelector(".status");
    status.innerText = "Rejected";
    status.classList.remove("pending", "approved");
    status.classList.add("rejected");
}

function openProfile(name,type,skills,projects) {
    document.getElementById("name").innerText = name;
    document.getElementById("type").innerText = type;
    document.getElementById("skills").innerText = skills;
    document.getElementById("projects").innerText = projects;
    document.getElementById("profileModal").style.display = "flex";
}

function closeProfile() {
    document.getElementById("profileModal").style.display = "none";
}
