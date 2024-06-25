function talk(){
  var know = {
    "Quoi ?" : "Ordinateurs, tablettes, téléphones portables etc.",
    "Pourquoi ?" : "Notre mission : vous aider à adopter le bon équipement informatique au quotidien.",
    "Comment ?" : "Grâce à notre équipe de vendeurs et techniciens.",
    "Quand ?" : "Les horaires sont inscris sur votre gauche.",
    "Où ?" : "H&D 7, boutique d'informatique et de téléphonie. pour + d'infos, rendez vous sur notre FaceBook."
  };
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Désolé, je ne comprends pas votre demande :( <br>";
  }
}
