
================================================================================
DineEasy – README.txt
COS10005 Web Development – Assignment 2
Student: Nico Gerber
================================================================================


WEBSITE STRUCTURE
-----------------
assignment2/
├── index.html          - Home page introducing the DineEasy platform
├── restaurants.html    - Restaurant listing page with search and cuisine filter
├── recommend.html      - Recommendation page with 4-step stepper form
├── register.html       - User registration page with form validation
├── reservation.html    - Reservation page with deposit and payment logic
├── css/
│   └── style.css       - External stylesheet applied to all pages
├── js/
│   └── scripts.js      - All JavaScript for validation and interactivity
├── images/             - All images used across the site
└── readme.txt          - This file

GITHUB REPOSITORY
-----------------


JAVASCRIPT VALIDATION LOGIC
----------------------------
Registration Form:
- Username must be at least 5 characters and contain only letters, numbers and underscores
- Email is checked for a valid format using a regex pattern (must contain @ and a domain)
- Phone number must contain only digits and be between 8 and 15 characters
- Password must be at least 10 characters and include uppercase, lowercase, a number and a special character
- Confirm password must match the password field
- Gender must be selected before submission

Reservation Form:
- All required fields must be filled before submission
- Email must be in a valid format
- Phone number must be at least 10 digits
- Reservation date cannot be in the past
- Number of guests must be greater than 0
- If Voucher is selected, the credit card fields are hidden and a 12-digit voucher code field is shown
- If Online Payment is selected, a credit card number is required (16 digits for Visa/Mastercard, 15 for Amex)
- Deposit amount updates automatically based on the selected restaurant
- Billing email can be auto-filled by checking "Same as email"


Recommendation Logic:
- Users select dining purpose, budget, dietary preferences and cuisine
- Each restaurant is scored based on how many criteria it matches
- Purpose match = 3 points, budget match = 3 points, dietary match = 3 points, cuisine match = 6 points
- Top 3 highest scoring restaurants are displayed as results



Dynamic feilds 
Various feilds dynamically update when the restuarant array updates including:
- Restuarnt dropdown 
- Cuisine Checkboxes
- Dietary preferences (reccomendation page)

This reduces the need for new radio buttons or dropdown options to be hardcoded as they read from the restaurant array.


KNOWN ISSUES / LIMITATIONS
---------------------------
The assignment states that "All JavaScript code must be contained in script.js." whilst my logic was originally housed in 8 seperate files. The merge process resulted in a 1300+ line page. The project should promote sepearte and organised Js that deploys when necceaary, not a mega file.

REFERENCES
----------

Restaurant Information & Descriptions:
- Squires Loft Cheltenham: https://squiresloft.com.au
- The Meat and Wine Co Chadstone: https://www.themeatandwineco.com
- Chelsea Inn Chinese Restaurant: https://www.fantuanorder.com/dianping/store/chelsea-inn-chinese-restaurant-4925694272-au?encode__2057=YqGxuDgGi%3DDtFkDBwYx2DUErj9hhDqwDgbD
- Meat Flour Wine: https://meatflourwine.com.au
- Okami Chelsea Heights: https://okami.com.au
- Sforno Italian Restaurant: https://sforno.com.au
- Big Pig Canteen: https://www.bigpiglittlepig.com.au
- Creative Thai & Bar: https://www.creativethaibar.com/
- Wood & Bone: https://woodandbone.com.au
- Deux Soeurs: https://deuxsoeurs.com.au
- Braeside Brewing Co: https://braesidebrewingco.com.au/
- Kicho Japanese Restaurant: https://kicho.com.au
- Maha Restaurant: https://www.maharestaurant.com.au/
- Tavlin Israeli Street Food: https://tavlin.com.au
- Shelanous: https://shelanous.com.au
- Glick's Balaclava: https://glicks.com.au

Images:
- Hero/legend image: https://www.melbourne.crowneplaza.com/explore/
- Restaurant images sourced from respective restaurant websites listed above

Libraries & External Resources:
- Tabler Icons: https://tabler.io/icons
- DM Sans font: https://fonts.google.com/specimen/DM+Sans






