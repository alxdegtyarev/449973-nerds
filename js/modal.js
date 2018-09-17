
  var link = document.querySelector(".button-contacts");
  var popup = document.querySelector(".modal-write-us");
  var close = popup.querySelector(".modal-close");
  var username = popup.querySelector("#write-us-name");
  var form = popup.querySelector(".form-write-us");
  var useremail = popup.querySelector("#write-us-email");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      username.value = storage;
      useremail.focus();
    } else {
      username.focus();
    }
  });

  close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

  form.addEventListener("submit", function (evt) {
    if (!username.value || !useremail.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", username.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
