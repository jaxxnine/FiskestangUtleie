


function showLogin(){
 const container = document.getElementById("loginContainer"); 
  if (container.style.display === "none" || container.style.display === "") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
 console.log();
  
}

function userLogin(){
  const username = document.getElementById("username").value.trim();
      if (username === "") {
        alert("Please enter a username first!");
      } else {
        alert("Logging in as USER: " + username);
      }

}

function adminLogin() {
      const username = document.getElementById("username").value.trim();
      if (username === "") {
        alert("Please enter a username first!");
      } else {
        alert("Logging in as ADMIN: " + username);
      }
    }
