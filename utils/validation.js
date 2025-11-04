function validateEmail(email) {
  if (!email || email.trim() === "") {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log(validateEmail("")); 
console.log(validateEmail("kevin@example.com"));

