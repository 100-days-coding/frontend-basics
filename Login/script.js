 // Usuario temporal
  const usuarioTemporal = {
    email: "admin@gmail.com",
    password: "1234"
  };

  // Escuchar el evento submit del formulario
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const emailInput = document.getElementById("formemail").value;
    const passwordInput = document.getElementById("formpassword").value;

    // Validar
    if (
      emailInput === usuarioTemporal.email &&
      passwordInput === usuarioTemporal.password
    ) {
      alert("✅ Login exitoso. ¡Bienvenido!");
    } else {
      alert("❌ Usuario o contraseña incorrectos");
    }
  });