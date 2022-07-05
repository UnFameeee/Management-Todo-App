import Swal from "sweetalert2";
export const checkEmail = (email) => {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email)) {
    Swal.fire({
      title: "Invalid input",
      text: "Please enter the valid email",
      icon: "error",
      confirmButtonColor: "#333333",
    });
    return false;
  }
  return true;
};

export const alertEmptyField = () => {
  Swal.fire({
    title: "Empty Field",
    text: "Please fill all the field",
    icon: "error",
  });
};

export const alertAuthenticationError = (message) => {
  Swal.fire({
    title: "Error Systems",
    text: `${message}`,
    icon: "error",
  });
};
export const alertError = (message) => {
  Swal.fire({
    title: "Error Systems",
    text: `${message}`,
    icon: "error",
  });
};

export const alertSuccess = (title, message) => {
  Swal.fire({
    title: `${title}`,
    text: `${message}`,
    icon: "success",
    // didClose: () => {window.location.replace(`/${url}`)}
  });
}
export const alertSuccess2 = (title, message) => {
  Swal.fire({
    title: `${title}`,
    text: `${message}`,
    icon: "success",
  });
}