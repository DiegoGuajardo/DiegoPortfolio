console.log("Portfolio site loaded!");

window.addEventListener('load', () => {
  const welcome = document.getElementById('welcome-screen');

  // Check if welcome screen has already been shown
  if (!sessionStorage.getItem('welcomeShown')) {
    // Show it
    setTimeout(() => {
      welcome.classList.add('hide');

      setTimeout(() => {
        welcome.classList.add('hidden');
      }, 1000);
    }, 2500);

    // Mark as shown
    sessionStorage.setItem('welcomeShown', 'true');
  } else {
    // Skip animation if already shown
    welcome.classList.add('hidden');
  }
});
