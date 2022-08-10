const Logout = async () => {
  const { error } = await window.supabase.auth.signOut();
  if (error) {
    console.error(error);
    alert('There was an error when trying to sign in. If this problem persists, please report this bug in our Discord server. Sorry for any inconveniences caused.\n\nAlternatively, clear your cookies and local storage and refresh the tab.');
    window.location.href = '/';
  };
};

export default Logout;
