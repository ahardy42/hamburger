$(document).ready(() => {

    // ================================================================================================
    // vars
    // ================================================================================================

    const burgers = $(".burger-composite");
    console.log(burgers);

    // ================================================================================================
    // animation functions
    // ================================================================================================

    const appear = () => {
        $(".burger-composite").animate({opacity: "0.9"}, {duration: 1000, queue: true});
        $(".burger-composite").animate({width: "90%"}, {duration: 500, queue: true});
    }
    // ================================================================================================
    // listeners
    // ================================================================================================
    appear();

    $("body").on("click", ".burger-container", (event) => {
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

    $("body").on("click", ".make", (event) => {
        event.preventDefault();
        let burgerId = event.currentTarget.getAttribute("data-id");

        // now, we run a put to change the isDevoured property
        let updatedBurger = {
            isDevoured: 0,
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

        let name = $("#burger-name").val().trim();

        // validation
        if (name.length < 1) {
            $("#length").text("Please Enter A Valid Name!");
            return;
        } else {
            $("#length").text("");
        }

        let newBurger = {
            burger_name: name,
            isDevoured: 0
        };

        $.ajax("/burger", {
            method: "POST",
            data: newBurger
        }).then(() => {
            location.reload();
        });
    });

});