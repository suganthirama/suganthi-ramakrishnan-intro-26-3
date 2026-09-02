const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("P");
copyright.innerHTML =  `© Suganthi ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

const skillsSection = document.getElementById("Skills");

const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName,usersEmail,usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li")
    newMessage.innerHTML = '<a href = "mailto:'+ usersEmail +' " >' + usersName + '</a><span> '+usersMessage+'</span>';

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type","button");

    removeButton.addEventListener("click", function(){
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage)
    messageForm.reset();
});

var repositories = [];

fetch("https://api.github.com/users/suganthirama/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    repositories = data;
    console.log(repositories);

      const projectSection = document.getElementById("Projects");
      const projectList = projectSection.querySelector("ul");

      for(let i= 0; i < repositories.length; i++){
          const project= document.createElement("li");
          project.innerText = repositories[i].name;
          projectList.appendChild(project);
      }

  })
  .catch(function(error) {
    console.log("There was an error:", error);
  })
