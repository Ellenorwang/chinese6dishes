// Function to filter dishes in different classic
function filterDishes() {
    const selectedCategory = document.getElementById("category").value;
    const dishes = document.querySelectorAll(".dish");

    dishes.forEach(dish => {
        if (selectedCategory === "all" || dish.getAttribute("data-category") === selectedCategory) {
            dish.style.display = "block";
        } else {
            dish.style.display = "none";
        }
    });
}
