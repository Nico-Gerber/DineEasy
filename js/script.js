// ============================================RESTAURANT LIST=========================================================



const restaurants = [
    {
        name: "Squires Loft Cheltenham",
        cuisine: "Steakhouse",
        description: "A premium steakhouse on Nepean Highway sourcing top-quality beef from the lush pastures of Gippsland, Victoria. Squires Loft has been serving expertly cooked steaks for over 25 years, with a signature baste that keeps guests coming back. Perfect for date nights, family dinners, and special celebrations in a warm and welcoming setting.",
        signatureDish: { name: "Eye Fillet", price: "$67.00" },
        signatureDish1: { name: "Scotch Fillet", price: "$64.00" },
        signatureDish2: { name: "Pork Ribs", price: "$49.00" },
        deposit: "$50",
        image: "images/Squires-Loft.webp",
        averagePrice: "$80–$100",
        dietary: ["Gluten-free", "Vegetarian"],
        budget: "premium",
        diningPurpose: ["date", "family", "celebration"],
    },
    {
        name: "The Meat and Wine Co Chadstone",
        cuisine: "Steakhouse",
        description: "Nestled inside Chadstone Shopping Centre, The Meat & Wine Co delivers an Afro-centric fine dining experience with premium steaks from their exclusive Monte Beef program. Two spacious bar and dining areas, warm Afrocentric décor, and an extensive curated wine list make it ideal for corporate lunches, celebrations, and date nights.",
        signatureDish: { name: "Monte Grain-Fed Eye Fillet", price: "$72.00" },
        signatureDish1: { name: "Wagyu Tartare", price: "$28.00" },
        signatureDish2: { name: "Szechuan Calamari", price: "$22.00" },
        deposit: "$60",
        image: "images/meat-wine.webp",
        averagePrice: "$100–$120",
        dietary: ["Gluten-free"],
        budget: "luxury",
        diningPurpose: ["date", "business", "celebration"],
    },
    {
        name: "Chelsea Inn Chinese Restaurant",
        cuisine: "Chinese",
        description: "A beloved local institution in Chelsea Heights serving authentic Hong Kong-style Chinese cuisine at reasonable prices. Known for generous portions and consistently fresh dishes, Chelsea Inn has built a loyal following over 15+ years. Great for casual family dinners and takeaway, with a broad menu covering seafood, steak, noodles, and rice dishes.",
        signatureDish: { name: "Steak with Black Bean Sauce", price: "$25.20" },
        signatureDish1: { name: "Char Kway Teow", price: "$28.20" },
        signatureDish2: { name: "Garlic Prawns", price: "$22.00" },
        deposit: "$20",
        image: "images/chelsea.jpg",
        averagePrice: "$15–$30",
        dietary: ["Vegetarian"],
        budget: "budget",
        diningPurpose: ["family", "casual", "takeaway"],
    },
    {
        name: "Meat Flour Wine",
        cuisine: "Italian",
        description: "A stylish modern Italian restaurant in Braeside combining rustic house-made pastas, wood-fire pizzas, and premium coal-grilled steaks. Meat Flour Wine prides itself on fresh local produce and a warm, buzzing atmosphere. Ideal for date nights, group dinners, and anyone seeking quality Italian fare without travelling to the CBD.",
        signatureDish: { name: "Coal-Grilled Steak", price: "$85.00" },
        signatureDish1: { name: "Prosciutto Pizza", price: "$28.00" },
        signatureDish2: { name: "Pumpkin Ravioli", price: "$26.00" },
        deposit: "$40",
        image: "images/flour.webp",
        averagePrice: "$60–$110",
        dietary: ["Vegetarian"],
        budget: "premium",
        diningPurpose: ["date", "family", "casual", "celebration"],
    },
    {
        name: "Okami Chelsea Heights",
        cuisine: "Japanese",
        description: "Okami offers an all-you-can-eat Japanese dining experience featuring over 30 traditional dishes in a relaxed two-hour sitting. From sashimi and tempura to beef carpaccio and chicken karaage, there is something for everyone. A fantastic option for groups, families, and anyone who loves Japanese food without breaking the bank.",
        signatureDish: { name: "All You Can Eat Buffet (adult)", price: "$34.80" },
        signatureDish1: { name: "Chicken Karaage Bento", price: "$22.00" },
        signatureDish2: { name: "Beef Carpaccio", price: "$18.00" },
        deposit: "$20",
        image: "images/okami.jpg",
        averagePrice: "$35–$45",
        dietary: ["Vegetarian", "Vegan"],
        budget: "mid",
        diningPurpose: ["family", "casual", "group"],
    },
    {
        name: "Sforno Italian Restaurant",
        cuisine: "Italian",
        description: "A neighbourhood Italian favourite on Charman Road in Cheltenham, Sforno serves up wood-fired pizzas and hearty pasta dishes with fresh, quality ingredients. Known for generous servings and a welcoming atmosphere, it is a popular choice for families and casual diners. The Chicken Avocado Pasta and Peri Peri Chicken Pizza are crowd favourites.",
        signatureDish: { name: "Chicken Avocado Pasta", price: "$22.00" },
        signatureDish1: { name: "Peri Peri Chicken Pizza", price: "$20.00" },
        signatureDish2: { name: "Spaghetti Carbonara", price: "$21.00" },
        deposit: "$15",
        image: "images/sforno.jpg",
        averagePrice: "$20–$35",
        dietary: ["Vegetarian"],
        budget: "budget",
        diningPurpose: ["family", "casual", "group"],
    },
    {
        name: "Big Pig Canteen",
        cuisine: "BBQ",
        description: "A large warehouse-style BBQ eatery in Moorabbin bringing authentic American smokehouse food to Melbourne's south-east. Big Pig Canteen is perfect for big groups and families, with rotating craft beers, cocktails, and hearty slow-smoked meats. The relaxed, fun atmosphere and generous portions make it a go-to for a casual night out.",
        signatureDish: { name: "Slow Smoked Brisket", price: "$32.00" },
        signatureDish1: { name: "BBQ Pork Ribs (half rack)", price: "$28.00" },
        signatureDish2: { name: "Pulled Pork Burger", price: "$18.00" },
        deposit: "$25",
        image: "images/bigpig.webp",
        averagePrice: "$30–$50",
        dietary: ["Gluten-free"],
        budget: "mid",
        diningPurpose: ["family", "casual", "group"],
    },
    {
        name: "Creative Thai & Bar",
        cuisine: "Thai",
        description: "Located on Charman Road in Beaumaris, Creative Thai & Bar serves traditional Thai cuisine crafted with fresh, top-quality ingredients and meticulous attention to detail. The menu spans fragrant curries, stir-fries, noodles, and grilled dishes. A highly rated local favourite known for authentic flavours and attentive service in a casual dining setting.",
        signatureDish: { name: "Pad Thai", price: "$22.00" },
        signatureDish1: { name: "Red Duck Curry", price: "$26.00" },
        signatureDish2: { name: "Crab Fried Rice", price: "$24.00" },
        deposit: "$20",
        image: "images/thai.jpg",
        averagePrice: "$20–$35",
        dietary: ["Vegetarian", "Gluten-free"],
        budget: "budget",
        diningPurpose: ["family", "casual", "date"],
    },
    {
        name: "Wood & Bone",
        cuisine: "BBQ",
        description: "A hidden gem tucked away in Moorabbin's industrial area, Wood & Bone is a premium steakhouse and BBQ restaurant with a European twist. Featuring exposed brick walls, a cosy fireplace, and an outstanding wine list including Pilsner Urquell on tap, it offers an intimate dining experience. Highly praised for exceptional steaks and their legendary meat platter.",
        signatureDish: { name: "BBQ Meat Platter", price: "$65.00" },
        signatureDish1: { name: "500g Scotch Fillet", price: "$58.00" },
        signatureDish2: { name: "Philadelphia Cheesesteak", price: "$28.00" },
        deposit: "$35",
        image: "images/wood.jpg",
        averagePrice: "$40–$70",
        dietary: ["Gluten-free"],
        budget: "mid",
        diningPurpose: ["date", "casual", "celebration"],
    },
    {
        name: "Deux Soeurs",
        cuisine: "French",
        description: "A charming French fine dining restaurant located inside the Buckingham Hotel on Nepean Highway in Highett. Deux Soeurs offers classic French cuisine with superb presentation and an extensive European wine list. Known for exceptional value for a fine dining experience, it is perfect for romantic dinners, anniversaries, and anyone craving authentic French flavours locally.",
        signatureDish: { name: "Filet de Boeuf", price: "$48.00" },
        signatureDish1: { name: "Veal Scaloppini", price: "$38.00" },
        signatureDish2: { name: "Escargot à la Bourguignonne", price: "$22.00" },
        deposit: "$40",
        image: "images/deux.jpg",
        averagePrice: "$60–$80",
        dietary: ["Vegetarian"],
        budget: "premium",
        diningPurpose: ["date", "business", "celebration"],
    },
    {
        name: "Braeside Brewing Co",
        cuisine: "Pub",
        description: "A family-friendly microbrewery and eatery in Braeside serving great craft beer alongside a solid menu of pub classics and modern Australian dishes. With a relaxed warehouse atmosphere, ample space for large groups, and rotating taps of house-brewed beer, Braeside Brewing Co is the perfect spot for a casual meal with friends or a family dinner.",
        signatureDish: { name: "Craft Beer Battered Fish & Chips", price: "$28.00" },
        signatureDish1: { name: "Smoked Lamb Shoulder", price: "$36.00" },
        signatureDish2: { name: "House Burger", price: "$22.00" },
        deposit: "$25",
        image: "images/beer.jpg",
        averagePrice: "$25–$45",
        dietary: ["Vegetarian"],
        budget: "mid",
        diningPurpose: ["family", "casual", "group"],
    },
    {
        name: "Kicho Japanese Restaurant",
        cuisine: "Japanese",
        description: "An upscale Japanese restaurant in Black Rock offering a refined dining experience with premium sushi, sashimi, and traditional Japanese mains. Kicho is celebrated for its attention to detail, beautifully presented dishes, and high-quality ingredients. A great choice for special occasions, date nights, or anyone seeking an elevated Japanese dining experience in Melbourne's south-east.",
        signatureDish: { name: "Wagyu Beef Sushi", price: "$24.00" },
        signatureDish1: { name: "Salmon Sashimi (5 pcs)", price: "$18.00" },
        signatureDish2: { name: "Tonkotsu Ramen", price: "$22.00" },
        deposit: "$30",
        image: "images/kicho.jpg",
        averagePrice: "$35–$60",
        dietary: ["Vegetarian", "Gluten-free"],
        budget: "mid",
        diningPurpose: ["date", "celebration", "casual"],
    },
    {
        name: "Maha Restaurant",
        cuisine: "Middle Eastern",
        description: "A celebrated modern Middle Eastern restaurant on Bond Street in the Melbourne CBD. Maha is helmed by chef Shane Delia, blending Lebanese, Turkish and North African influences into refined dishes. With a focus on premium halal-certified meats and bold spices, it's perfect for special occasions and date nights in an intimate, moody setting.",
        signatureDish: { name: "Slow Roasted Lamb Shoulder", price: "$52.00" },
        signatureDish1: { name: "Wagyu Beef Kibbeh", price: "$28.00" },
        signatureDish2: { name: "Chargrilled Octopus", price: "$26.00" },
        deposit: "$40",
        image: "images/maha.webp",
        averagePrice: "$70–$100",
        dietary: ["Halal", "Gluten-free"],
        budget: "premium",
        diningPurpose: ["date", "business", "celebration"],
    },
    {
        name: "Tavlin Israeli Street Food",
        cuisine: "Israeli",
        description: "A vibrant kosher and halal-certified Israeli street food restaurant in Melbourne's inner north. Founded by Adi Daboush, Tavlin brings Syrian spices and family recipes from Damascus, Tripoli and Tel Aviv to life with fresh, daily-prepared dishes cooked on a grill. A lively, casual spot ideal for groups and fans of bold Middle Eastern flavours.",
        signatureDish: { name: "Marinated Lamb Skewers", price: "$22.00" },
        signatureDish1: { name: "Shakshuka", price: "$18.00" },
        signatureDish2: { name: "Sabich (Eggplant & Egg Pita)", price: "$16.00" },
        deposit: "$20",
        image: "images/tavlin.webp",
        averagePrice: "$20–$40",
        dietary: ["Halal", "Kosher", "Vegetarian"],
        budget: "budget",
        diningPurpose: ["casual", "group", "family"],
    },
    {
        name: "Shelanous",
        cuisine: "Fine Dining",
        description: "A luxury multi-sensory kosher fine dining experience in Port Melbourne, certified by Kosher Australia. Chef Rony Parienty delivers a 7 to 10-course degustation menu inspired by France, Switzerland, Israel, Italy and Spain, paired with curated beverages and a seasonal soundscape. An extraordinary choice for anniversaries, celebrations, and anyone seeking an unforgettable dining experience.",
        signatureDish: { name: "Degustation Menu (7 course)", price: "$180.00" },
        signatureDish1: { name: "Degustation Menu (10 course)", price: "$230.00" },
        signatureDish2: { name: "Matched Beverage Pairing", price: "$95.00" },
        deposit: "$80",
        image: "images/shelanous.webp",
        averagePrice: "$150–$250",
        dietary: ["Kosher", "Vegetarian"],
        budget: "luxury",
        diningPurpose: ["date", "celebration", "business"],
    },
    {
        name: "Glick's Balaclava",
        cuisine: "Bakery / Deli",
        description: "Melbourne's most iconic kosher bakery and café on Carlisle Street in Balaclava, certified by Kosher Australia. Famous for hand-rolled boiled bagels made to a traditional European recipe, baked fresh multiple times daily. A beloved community institution for over decades, perfect for a casual breakfast, lunch or takeaway with classic deli fare.",
        signatureDish: { name: "Boiled Bagel with Cream Cheese", price: "$8.00" },
        signatureDish1: { name: "Smoked Salmon Bagel", price: "$16.00" },
        signatureDish2: { name: "Rugelach (dozen)", price: "$14.00" },
        deposit: "$10",
        image: "images/glicks.jpg",
        averagePrice: "$10–$25",
        dietary: ["Kosher", "Vegetarian"],
        budget: "budget",
        diningPurpose: ["casual", "family", "takeaway"],
    },
];




// ============================================ RESTAURANT PAGE =========================================================


//Search Filter

function filterRestaurants() {
    var selectedCuisine = document.getElementById("cuisine-list").value;
    var search = document.getElementById("search").value;

    var filtered = restaurants;

    if (selectedCuisine !== "all") {
        filtered = filtered.filter(restaurant => restaurant.cuisine === selectedCuisine);
    }

    if (search !== "") {
        filtered = filtered.filter(restaurant => restaurant.name.toLowerCase().includes(search.toLowerCase()));
    }

    displayRestaurants(filtered);
}



//Search by cuisine

function cuisineDropdown() {
    const restaurantList = document.getElementById("cuisine-dropdown");

    var uniqueCuisines = [...new Set(restaurants.map(r => r.cuisine))];

    restaurantList.innerHTML = uniqueCuisines.map(cuisine => `
        <option value="${cuisine}">${cuisine}</option>
    `).join("");
}






function displayRestaurants(list) {
    const restaurantList = document.getElementById("restaurant-list");


    restaurantList.innerHTML = list.map(restaurant => `
    <div class="restaurant-item">
        <img src="${restaurant.image}" alt="${restaurant.name}">
    
        <h3>${restaurant.name}</h3>
            <div class="restaurant-card-body">
        <p>Cuisine: ${restaurant.cuisine}</p>
        <p id="description">${restaurant.description}</p>
        <p>Signature Dishes:</p>
        <ul id="signature-dishes">
           <li>${restaurant.signatureDish.name} — ${restaurant.signatureDish.price}</li>
           <li>${restaurant.signatureDish1.name} — ${restaurant.signatureDish1.price}</li>
           <li>${restaurant.signatureDish2.name} — ${restaurant.signatureDish2.price}</li>
        </ul>
        <p>Deposit: ${restaurant.deposit}</p>
        </div>
        <div class="restaurant-card-footer">
        <p>${restaurant.averagePrice}pp</p>

    <a href="reservation.html?restaurants=${restaurant.name}" class="reserve-button">
    Reserve Now
</a>
        </a>

        </div>
    </div>
`).join("");

}


// ============================================ RECCOMEND PAGE =========================================================


function dietaryOptions() {
    const dietaryCheckBox = document.getElementById("dietary-options");


    //flat map is used to access the array within the array to convert it into a list of string

    var uniqueDietaryOptions = [...new Set(restaurants.flatMap(r => r.dietary))];

    dietaryCheckBox.innerHTML = uniqueDietaryOptions.map(option => `
    <label for="${option}"><input type="checkbox" id="${option}" name="dietary-preferences"
        value="${option}">${option}</label>
`).join("");
}







function cuisineOptions() {
    const cuisineCheckBox = document.getElementById("cuisine-options");



    var uniqueCuisineOptions = [...new Set(restaurants.map(r => r.cuisine))];

    cuisineCheckBox.innerHTML = uniqueCuisineOptions.map(cuisine => `
    <label for="${cuisine}"><input type="checkbox" id="${cuisine}" name="cuisine"
        value="${cuisine}">${cuisine}</label>
`).join("");
}








var currentStep = 1;

var circles


var lines


function showStep(step) {

    //hide all steps
    for (var i = 1; i <= 4; i++) {
        document.getElementById("step" + i).style.display = "none";
    }
    //overwrite hide for current step
    document.getElementById("step" + step).style.display = "block";

    if (step === 1) {
        document.getElementById("previous-button").style.visibility = "hidden";
    } else {
        document.getElementById("previous-button").style.visibility = "visible";
    }


    if (step === 4) {
        document.getElementById("previous-button").textContent = "Restart";
        document.getElementById("next-button").style.display = "none";

        document.getElementById("previous-button").addEventListener("click", function () {
            location.reload();
        });

    }



    for (var i = 0; i < circles.length; i++) {
        if (i < step - 1) {
            // completed steps
            circles[i].style.background = "#535bff";
            circles[i].style.color = "white";
            lines[i].style.background = "#535bff";
        } else if (i === step - 1) {
            // current step
            circles[i].style.background = "#535bff";
            circles[i].style.color = "white";
            lines[i] && (lines[i].style.background = "#ccc");
        } else {
            // future steps
            circles[i].style.background = "#e3e3e3";
            circles[i].style.color = "black";
            if (lines[i]) lines[i].style.background = "#ccc";
        }
    }


}


var next = true


function reccomendationFormHandeling() {



    //Purpose Error

    var purposeError = document.getElementById("purpose-error")

    var purposeOptions = document.querySelector('input[name="purpose"]:checked');

    if (!purposeOptions) {
        purposeError.textContent = "Please select an occasian"

        purposeError.style.display = "block";
        next = false;
    } else {

        purposeError.style.display = "none";

    }

    if (currentStep == 2) {
        //Budget Error

        var budgetError = document.getElementById("budget-error")

        var budgetOptions = document.querySelector('input[name="budget"]:checked');

        if (!budgetOptions) {

            budgetError.textContent = "Please select a budget"
            budgetError.style.display = "block";
            next = false;

        } else {
            budgetError.style.display = "none";
        }



    }


}


var topThree

function recommendationAlgorithm() {

    var purposeInput = document.querySelector('input[name="purpose"]:checked').value;

    var budgetInput = document.querySelector('input[name="budget"]:checked').value;


    var dietaryInputs = document.querySelectorAll('input[name="dietary-preferences"]:checked');

    var dietaryInput = Array.from(dietaryInputs).map(input => input.value);

    var cuisineInputs = document.querySelectorAll('input[name="cuisine"]:checked');

    var cuisineInput = Array.from(cuisineInputs).map(input => input.value);

    var scored = restaurants.map(restaurant => {

        var score = 0;


        if (restaurant.diningPurpose.includes(purposeInput)) {
            score += 3;
        }


        if (restaurant.budget === budgetInput) {
            score += 3;
        }

        if (dietaryInput.length === 0 || dietaryInput.every(d => restaurant.dietary.includes(d))) {

            score += 3;

        }

        if (cuisineInput.length === 0 || cuisineInput.some(c => restaurant.cuisine.includes(c))) {
            score += 6;
        }

        return {
            restaurant,
            score
        };

    });

    scored.sort((a, b) => b.score - a.score);

    //Slice to grab just top 3. Start index 0 Stop index 3 

    topThree = scored.slice(0, 3)

    return topThree;
}


function resultsList() {
    const restaurantList = document.getElementById("results");

    restaurantList.innerHTML = topThree.map((item, index) => {
        var restaurant = item.restaurant;
        var isTopPick = index === 0;

        var tags = restaurant.diningPurpose.slice(0, 2).map(p =>
            `<span class="results-tag results-tag-purpose">${p}</span>`
        ).join("");

        if (restaurant.dietary) {
            tags += restaurant.dietary.slice(0, 1).map(d =>
                `<span class="results-tag results-tag-dietary">${d}</span>`
            ).join("");
        }

        return `
        <div class="results-card ${isTopPick ? 'results-card-top' : ''}">
            ${isTopPick ? `<div class="results-top-bar"><i class="ti ti-star"></i> top pick</div>` : ""}
            <div class="results-card-body">
                <div class="results-card-header">
                    <div>
                        <p class="results-name">${restaurant.name}</p>
                        <p class="results-sub">${restaurant.cuisine} · ${restaurant.averagePrice}pp</p>
                    </div>

                 
                    <a href="reservation.html?restaurants=${restaurant.name}">
                        <button class="results-reserve ${isTopPick ? 'results-reserve-top' : 'results-reserve-outline'}">Reserve</button>
                    </a>
                </div>
                <div class="results-tags">${tags}</div>
            </div>
        </div>
        `;
    }).join("");
}





// ============================================ REGISTER PAGE =========================================================



function validate() {
    var userName = document.getElementById("username").value;

    var userNameError = document.getElementById("username-error")

    var email = document.getElementById("email").value;

    var emailError = document.getElementById("email-error")

    var password = document.getElementById("password").value;

    var confirmpassword = document.getElementById("confirmpassword").value;


    var passwordError = document.getElementById("password-error")


    var phoneNumber = document.getElementById("phonenumber").value;

    var phoneError = document.getElementById("phone-error")


    var male = document.getElementById("male").checked;

    var female = document.getElementById("female").checked;

    var other = document.getElementById("other").checked;


    var genderError = document.getElementById("gender-error")

    var dietaryPreferences = document.querySelectorAll('input[name="dietary-preferences"]:checked');


    var dietError = document.getElementById("diet-error")








    var submit = true;

    // USER NAME EMPTY, > 5 AND CHARATERS OTHER THAN A-Z, 0-9 AND _

    if (userName == "") {
        userNameError.textContent = "Username cannot be empty.";
        userNameError.style.display = "block";
        submit = false;
        // ^ — start of the string, [a-zA-Z0-9_] — any letter, number, or underscore, + — one or more of those characters

        //Exclusion (only allowed characters) → needs ^ and $ because you're validating the whole string's format
        //Inclusion (must contain at least one of something) → no anchors needed because you just care if it exists anywhere


    } else if (!/^[a-zA-Z0-9_]+$/.test(userName) || userName.length < 5) {
        userNameError.textContent = "Minimum 5 characters; letters, numbers, and underscores only";
        userNameError.style.display = "block";
        submit = false;
    } else {
        userNameError.style.display = "none";
    }


    // EMAIL ERROR

    if (email == "") {
        emailError.textContent = "Email connot be empty."
        emailError.style.display = "block"
        submit = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        emailError.textContent = "Must be a valid email"
        emailError.style.display = "block"
        submit = false;


    } else {
        emailError.style.display = "none";
    }


    // PHONE ERROR

    if (phoneNumber == "") {
        phoneError.textContent = "Phone number cannot be empty."
        phoneError.style.display = "block"
        submit = false
        //^+$ allows full string to be tested
    } else if (!/^[0-9]+$/.test(phoneNumber)) {
        phoneError.textContent = "Phone number must contain numbers only.";
        phoneError.style.display = "block";
        submit = false;
    } else if (phoneNumber.length < 8 || phoneNumber.length > 15) {
        phoneError.textContent = "Phone number must be between 8-15 digits"
        phoneError.style.display = "block";
        submit = false;
    }

    else {
        phoneError.style.display = "none";
    }



    // PASSWORD ERRORS
    var passwordMsg = "";

    var matchMsg = "";



    if (password == "") {
        passwordMsg += "Password cannot be empty. ";
    }
    else {

        if (password.length < 10) {
            passwordMsg += "Minimum 10 characters. ";
        }
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            passwordMsg += "Must contain uppercase and lowercase. ";
        }
        if (!/[0-9]/.test(password)) {
            passwordMsg += "Must contain a number. ";
        }
        if (!/[!@#$%^&*]/.test(password)) {
            passwordMsg += "Must contain a special character. ";
        }


    }

    if (passwordMsg != "") {
        passwordError.textContent = passwordMsg;
        passwordError.style.display = "block";
        submit = false;
    } else if (passwordMsg == "" && password != confirmpassword) {
        matchMsg = "Passwords must match."
        passwordError.textContent = matchMsg;
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }




    //GENDER ERRORS

    if (male == "" && female == "" && other == "") {

        genderError.textContent = "Must select a gender."

        genderError.style.display = "block";
        submit = false;
    } else {

        genderError.style.display = "none";
    }


    //DIET ERRORS

    if (dietaryPreferences.length === 0) {

        dietError.textContent = "Must select a dietary preference"

        dietError.style.display = "block";
        submit = false;

    } else {

        dietError.style.display = "none";

    }



    return submit;
}




function initRegistration() {

    var regForm = document.getElementById("regform");


    regForm.onsubmit = validate;
}






// ============================================RESTAURANT DROP DOWN=========================================================



function restaurantDropdown() {
    const restaurantList = document.getElementById("restaurants");


    restaurantList.innerHTML += restaurants.map(restaurant => `

     <option value="${restaurant.name}">${restaurant.name}</option>
  
`).join("");

}





// ========================================= RESERVATION VALIDATION ========================================






function defaultValidations() {



    var voucher = document.getElementById("voucher").checked;
    var paymentSection = document.getElementById("payment-card");
    var voucherSection = document.getElementById("voucherSection");
    var useSameEmailCheck = document.getElementById("same-email").checked;
    var email = document.getElementById("email").value;
    var voucherCode = document.getElementById("voucher-input").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiary = document.getElementById("expiary").value;


    // payment toggle
    if (voucher == true) {
        voucherSection.style.display = "block";
        paymentSection.style.display = "none";
        document.getElementById("card-number").value = "";
        document.getElementById("expiary").value = "";
        document.getElementById("cvv").value = "";
    } else {
        voucherSection.style.display = "none";
        paymentSection.style.display = "block";
        document.getElementById("voucher-input").value = "";
    }

    // billing email
    if (useSameEmailCheck == true) {
        document.getElementById("billing-email").value = email;
        document.getElementById("billing-email").disabled = true;
    } else {
        document.getElementById("billing-email").value = "";
        document.getElementById("billing-email").disabled = false;
    }






    // deposit
    var selectedName = document.getElementById("restaurants").value;
    var selected = restaurants.find(function (r) { return r.name === selectedName; });
    document.getElementById("deposit").value = selected ? selected.deposit : "";



    if (!voucher) {

        // card type
        var cardInput = document.getElementById("card-number");
        var cardType = document.querySelector('input[name="card-type"]:checked').value;

        //amex formating

        if (cardType === "amex") {
            cardInput.maxLength = 17;
            cardInput.placeholder = "XXXX XXXXXX XXXXX";

            if (cardNumber.length > 0) {
                cardNumber = cardNumber.replaceAll(" ", "");
                var cardNumberArray = cardNumber.split("");
                var amexArray = [4, 10];
                for (var i = 0; i < amexArray.length; i++) {
                    cardNumberArray.splice(amexArray[i] + i, 0, " ");
                }
                document.getElementById("card-number").value = cardNumberArray.join("");
            }

        } else {

            //VISA formating


            cardInput.maxLength = 19;
            cardInput.placeholder = "XXXX XXXX XXXX XXXX";

            if (cardNumber.length > 0) {
                cardNumber = cardNumber.replaceAll(" ", "");
                var cardNumberArray = cardNumber.split("");
                for (var i = 4; i < cardNumberArray.length; i += 5) {
                    cardNumberArray.splice(i, 0, " ");
                }
                document.getElementById("card-number").value = cardNumberArray.join("");
            }
        }



        // Expiary 


        expiary = expiary.replaceAll("/", "");

        var expiaryArray = expiary.split("");

        for (var i = 2; i < expiaryArray.length; i += 3) {

            expiaryArray.splice(i, 0, "/");

        }

        document.getElementById("expiary").value = expiaryArray.join("");

    }

    if (voucher) {

        //Clear voucher dashes
        voucherCode = voucherCode.replaceAll("-", "");

        // Makes voucher code an array
        var code = voucherCode.split("")


        // Inserts a dash every four letters
        for (var i = 4; i < code.length; i += 5) {


            //splice(start, deleteCount, Newelement)
            code.splice(i, 0, "-");
        }


        document.getElementById("voucher-input").value = code.join("");

    }






}


function validateReservation() {

    var fullName = document.getElementById("fullname").value;

    var fullNameError = document.getElementById("fullname-error")

    var email = document.getElementById("email").value;

    var emailError = document.getElementById("email-error")

    var phoneNumber = document.getElementById("phonenumber").value

    var phoneError = document.getElementById("phone-error")

    var restaurant = document.getElementById("restaurants").value;

    var restaurantError = document.getElementById("restaurant-error")

    var date = document.getElementById("date").value

    var dateError = document.getElementById("date-error")

    var time = document.getElementById("time").value

    var timeError = document.getElementById("time-error")


    var guests = document.getElementById("guests").value


    var guestError = document.getElementById("guestnum-error")


    var cardNum = document.getElementById("card-number").value


    var expiary = document.getElementById("expiary").value


    var cvv = document.getElementById("cvv").value


    var cardNumberError = document.getElementById("cardnumber-error")

    var expirayError = document.getElementById("expiary-error")

    var cvvError = document.getElementById("cvv-error")



    var voucherCode = document.getElementById("voucher-input").value


    var voucherError = document.getElementById("voucher-error")


    var voucher = document.getElementById("voucher").checked;



    var billingEmail = document.getElementById("billing-email").value




    var billingEmailError = document.getElementById("billing-email-error")






    var submit = true;


    // FULL NAME 

    if (fullName == "") {

        fullNameError.textContent = "Name cannot be empty."

        fullNameError.style.display = "block";
        submit = false;

    } else {

        fullNameError.style.display = "none";

    }

    // EMAIL 


    if (email == "") {
        emailError.textContent = "Email connot be empty."
        emailError.style.display = "block"
        submit = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        emailError.textContent = "Must be a valid email"
        emailError.style.display = "block"
        submit = false;


    } else {
        emailError.style.display = "none";
    }


    // PHONE

    if (phoneNumber == "") {
        phoneError.textContent = "Phone number cannot be empty."
        phoneError.style.display = "block";
        submit = false;
    } else if (!/^[0-9]+$/.test(phoneNumber)) {
        phoneError.textContent = "Phone number must contain numbers only.";
        phoneError.style.display = "block";
        submit = false;
    } else if (phoneNumber.length < 10) {
        phoneError.textContent = "Phone number cannot be less than 10 digits."
        phoneError.style.display = "block";
        submit = false;
    } else {
        phoneError.style.display = "none";
    }


    // RESTURANT


    if (restaurant == "") {
        restaurantError.textContent = "Please select a restaurant.";
        restaurantError.style.display = "block";
        submit = false;
    } else {
        restaurantError.style.display = "none";
    }



    // DATE

    if (date == "") {
        dateError.textContent = "Please select a date."
        dateError.style.display = "block";
        submit = false;
    } else {
        dateError.style.display = "none";

    }



    // TIME


    if (time == "") {
        timeError.textContent = "Please select a time."
        timeError.style.display = "block";
        submit = false;
    } else {
        timeError.style.display = "none";

    }



    // NUMBER OF GUESTS


    if (guests == "") {
        guestError.textContent = "Number of guests cannot be empty"
        guestError.style.display = "block";
        submit = false;
    } else if (guests < 1) {

        guestError.textContent = "Number of guests cannot be less than 1"
        guestError.style.display = "block";
        submit = false;

    } else {
        guestError.style.display = "none";

    }



    //CARD NUMBER


    if (cardNum == "" && voucher == false) {
        cardNumberError.textContent = "Card number cannot be empty."
        cardNumberError.style.display = "block";
        submit = false;
    } else if (!/^[0-9 ]+$/.test(cardNum)) {
        cardNumberError.textContent = "Card number must contain numbers only.";
        cardNumberError.style.display = "block";
        submit = false;
    } else {
        cardNumberError.style.display = "none";

    }





    //EXPIARY


    if (expiary == "" && voucher == false) {
        expirayError.textContent = "Expiary date cannot be empty."
        expirayError.style.display = "block";
        submit = false;
        // \/ means '/'???
    } else if (!/^[0-9]{2}\/[0-9]{2}$/.test(expiary)) {
        expirayError.textContent = "Expiary date must contain numbers only.";
        expirayError.style.display = "block";
        submit = false;
    } else {
        expirayError.style.display = "none";

    }


    //CVV


    if (cvv == "" && voucher == false) {
        cvvError.textContent = "CVV cannot be empty."
        cvvError.style.display = "block";
        submit = false;
    } else if (!/^[0-9]+$/.test(cvv)) {
        cvvError.textContent = "CVV must contain numbers only.";
        cvvError.style.display = "block";
        submit = false;
    } else {
        cvvError.style.display = "none";

    }



    // VOUCHER 



    if (voucherCode == "" && voucher == true) {
        voucherError.textContent = "Voucher code cannot be empty."
        voucherError.style.display = "block";
        submit = false;
    } else {
        voucherError.style.display = "none";

    }



    //Billing Email


    if (billingEmail == "") {
        billingEmailError.textContent = "Billing email cannot be empty."
        billingEmailError.style.display = "block";
        submit = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billingEmail)) {

        billingEmailError.textContent = "Must be a valid email"
        billingEmailError.style.display = "block"
        submit = false;


    } else {
        billingEmailError.style.display = "none";

    }






    return submit;

}





function initReservation() {

    var regForm = document.getElementById("regform");


    regForm.onsubmit = validateReservation;
}








// ========================================= WINDOW ON LOAD ========================================


window.onload = function () {

    // Restaurant page

    if (document.getElementById("restaurant-list")) {
        displayRestaurants(restaurants);
        cuisineDropdown();
        document.getElementById("cuisine-list").addEventListener("change", filterRestaurants);
        document.getElementById("search").addEventListener("input", filterRestaurants);

    }


    // Recommendation page
    if (document.getElementById("step1")) {
        circles = document.querySelectorAll(".circle");
        lines = document.querySelectorAll(".stepper-line");
        dietaryOptions();
        cuisineOptions();
        showStep(1);
        document.getElementById("next-button").addEventListener("click", function () {
            next = true;
            reccomendationFormHandeling();
            if (next && currentStep < 4) {
                currentStep++;
                showStep(currentStep);
            }
            if (currentStep === 4) {
                var purposeCheck = document.querySelector('input[name="purpose"]:checked');
                var budgetCheck = document.querySelector('input[name="budget"]:checked');
                if (purposeCheck && budgetCheck) {
                    recommendationAlgorithm();
                    resultsList();
                }
            }
        });
        document.getElementById("previous-button").addEventListener("click", function () {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
            }
        });
    }

    // Registration page

    if (document.getElementById("username")) {
        initRegistration();
    }

    // Reservation page
    if (document.getElementById("fullname")) {
        var today = new Date().toISOString().split("T")[0];
        document.getElementById("date").min = today;
        restaurantDropdown();

        var params = new URLSearchParams(window.location.search);
        var preselected = params.get("restaurants");

        if (preselected) {
            document.getElementById("restaurants").value = preselected;
        }

        defaultValidations();


        document.getElementById("online-payment").addEventListener("change", defaultValidations);
        document.getElementById("voucher").addEventListener("change", defaultValidations);
        document.getElementById("same-email").addEventListener("change", defaultValidations);
        document.getElementById("payment-card").addEventListener("change", defaultValidations);
        document.getElementById("restaurants").addEventListener("change", defaultValidations);
        document.getElementById("voucher-input").addEventListener("input", defaultValidations);
        document.getElementById("card-number").addEventListener("input", defaultValidations);
        document.getElementById("expiary").addEventListener("input", defaultValidations);

        initReservation();
    }




}
