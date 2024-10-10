// document.getElementById('referral-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

//   const referralCode = document.getElementById('referral-code').value;
//   const messageElement = document.getElementById('referral-message');

//   // Example logic for handling referral codes
//   if (referralCode === 'WELCOME10') { // Example referral code
//       messageElement.textContent = 'Referral code accepted! You have earned a 10% discount on your next purchase.';
//       messageElement.style.color = 'green';
//   } else {
//       messageElement.textContent = 'Invalid referral code. Please try again.';
//       messageElement.style.color = 'red';
//   }

//   // Here you can add further logic to save the referral code, track usage, etc.
// });





document.getElementById('referral-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const referralCode = document.getElementById('referral-code').value.trim();
  const messageElement = document.getElementById('referral-message');

  if (referralCode === '') {
      messageElement.textContent = 'Please enter a valid referral code.';
      messageElement.style.color = 'red';
  } else {
      // Example action on form submission (you can replace this with a real API call)
      messageElement.textContent = `Referral code "${referralCode}" submitted successfully! Thank you.`;
      messageElement.style.color = '#4CAF50';  // Green message color
  }
});
