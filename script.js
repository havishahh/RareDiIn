function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    if (name.trim() === "" || email.trim() === "" || feedback.trim() === "") 
    {
        alert("Please fill in all fields!");
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) 
    {
        alert("Please enter a valid email address!");
        return false;
    }

    alert("Your feedback submitted successfully."+"\n"+"Thank you.");
    return true;
}

function toggleCard(letter) {
    var card = document.getElementById('card' + letter);
    if (card) {
      if (card.style.display === 'none' || card.style.display === '') 
      {
        card.style.display = 'block';
      } 
      else 
      {
        card.style.display = 'none';
      }
    }
  }