$(document).ready(() => {
  $(".eatIt").on("click", (event) => {
    let id = $(this).data("id");
    let eaten = $(this).data("eaten");

    let newlyDevoured = {
      devoured: eaten,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newlyDevoured,
    }).then(() => {
      console.log("burger data ", newlyDevoured);
      location.reload();
    });
  });

  $("#create-form").on("submit", (event) => {
    event.preventDefault();

    var newBurger = {
      name: $("#newBurger").val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("burger made!!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
