function logOut() 
{
  localStorage.removeItem("username");
  localStorage.removeItem("remove_name");
  localStorage.removeItem("room");
  localStorage.removeItem("remove_name");
  window.location="login.html";    
}
function room()
{
  room=document.getElementById("grup_name").value;
  localStorage.setItem("room_name", room);
}