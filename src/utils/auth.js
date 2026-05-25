export const loginUser = (
  email,
  password
) => {
  const validEmail =
    "ecommerce@gmail.com";

  const validPassword =
    "Test@321";

  if (
    email.trim() ===
      validEmail &&
    password.trim() ===
      validPassword
  ) {
    const userData = {
      email,
      loggedIn: true,
      loginTime:
        new Date().getTime(),
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    sessionStorage.setItem(
      "isAuthenticated",
      "true"
    );

    return true;
  }

  return false;
};

export const logoutUser =
  () => {
    localStorage.removeItem(
      "user"
    );

    sessionStorage.clear();

    localStorage.removeItem(
      "cart"
    );

    localStorage.removeItem(
      "wishlist"
    );

    window.location.href = "/";
  };

export const getUser = () => {
  return JSON.parse(
    localStorage.getItem("user")
  );
};

export const isAuthenticated =
  () => {
    return (
      sessionStorage.getItem(
        "isAuthenticated"
      ) === "true"
    );
  };