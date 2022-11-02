function checkConsent() {
  if (!localStorage.getItem("consent")) {
    const confirmation = confirm("Agree with terms and conditions");
    if (confirmation) {
      localStorage.setItem("consent", "accepted");
    }
  }
}
