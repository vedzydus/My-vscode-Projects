document.getElementById("data-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const shopping = document.getElementById("shopping").value;
    const food = document.getElementById("food").value;
    const groceries = document.getElementById("groceries").value;
    const home = document.getElementById("home").value;
    const bills = document.getElementById("bills").value;
    const savings = document.getElementById("savings").value;
    const incoming = document.getElementById("incoming").value;
    const spends = document.getElementById("spends").value;

    // Create URL with query parameters
    const url = `dashboard.html?shopping=${shopping}&food=${food}&groceries=${groceries}&home=${home}&bills=${bills}&savings=${savings}&incoming=${incoming}&spends=${spends}`;

    // Redirect to the dashboard page
    window.location.href = url;
});
