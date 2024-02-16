
    document.getElementById("search-box").addEventListener("input", function() {
        var searchText = this.value.toLowerCase();
        var navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach(function(link) {
            var linkText = link.textContent.toLowerCase();
            if (linkText.includes(searchText)) {
                link.style.display = "inline-block";
            } else {
                link.style.display = "none";
            }
        });
    });