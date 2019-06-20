$(document).ready(() => {

    // ================================================================================================
    // listeners
    // ================================================================================================

    $("body").on("click", ".eat", (event) => {
        event.preventDefault();
        let burgerId = event.currentTarget.getAttribute("data-id");
        
        // now, we run a put to change the isDevoured property
        let updatedBurger = {
            isDevoured: 1,
            id: burgerId
        };

        $.ajax("/update", {
            method: "PUT",
            data: updatedBurger
        }).then(() => {
            location.reload();
        });
    });

    $("#burger").on("click", (event) => {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#burger-name").val().trim(),
            isDevoured: 0
        };

        $.ajax("/burger", {
            method: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        });
    })



});