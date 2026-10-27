
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const message = document.getElementById("message");

function showForm(type) {
  const isLogin = type === "login";

  loginForm.classList.toggle("hidden", !isLogin);
  registerForm.classList.toggle("hidden", isLogin);

  loginTab.classList.toggle("active", isLogin);
  registerTab.classList.toggle("active", !isLogin);

  message.textContent = "";
}

loginTab.addEventListener("click", () => showForm("login"));
registerTab.addEventListener("click", () => showForm("register"));

document.getElementById("showRegister").addEventListener("click", (e) => {
  e.preventDefault();
  showForm("register");
});

document.getElementById("showLogin").addEventListener("click", (e) => {
  e.preventDefault();
  showForm("login");
});

// Show or hide passwords
document.querySelectorAll(".toggle-password").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";
    button.textContent = isHidden ? "🙈" : "👁";
    button.setAttribute(
      "aria-label",
      isHidden ? "Hide password" : "Show password"
    );
  });
});

// Registration form validation
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.style.color = "#ff7777";
    return;
  }

  message.style.color = "#00f5ff";
  message.textContent =
    "Form validated! Connect a backend to create your account.";
});

// Login form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  message.style.color = "#00f5ff";
  message.textContent =
    "Form validated! Connect a backend to log in securely.";
});

// Demo forgot-password interaction
document.getElementById("forgotLink").addEventListener("click", (e) => {
  e.preventDefault();
  message.style.color = "#00f5ff";
  message.textContent =
    "Password reset needs a verified email and backend service.";
});
