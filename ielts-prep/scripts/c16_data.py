import json

def get_c16_test_1():
    return {
        "id": "c16-test-1",
        "series": 16,
        "testNumber": 1,
        "title": "Cambridge IELTS 16 - Practice Test 1",
        "bookTitle": "Cambridge IELTS 16 Academic",
        "audioBookmarks": { "1": 0, "2": 380, "3": 810, "4": 1240 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Children's engineering workshops",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 1, "prompt": "Build a device that can transport an", "fieldPrefix": "Build a device that can transport an ", "type": "text", "acceptedAnswers": ["egg"] },
                    { "id": 2, "prompt": "Construct a miniature Eiffel", "fieldPrefix": "Construct a miniature Eiffel ", "type": "text", "acceptedAnswers": ["tower"] },
                    { "id": 3, "prompt": "Design a solar-powered toy", "fieldPrefix": "Design a solar-powered toy ", "type": "text", "acceptedAnswers": ["car"] },
                    { "id": 4, "prompt": "Create robotic", "fieldPrefix": "Create robotic ", "type": "text", "acceptedAnswers": ["animals", "animal"] },
                    { "id": 5, "prompt": "Test strength of wooden model", "fieldPrefix": "Test strength of wooden model ", "type": "text", "acceptedAnswers": ["bridge"] },
                    { "id": 6, "prompt": "Work on stop-motion animation", "fieldPrefix": "Work on stop-motion animation ", "type": "text", "acceptedAnswers": ["movie", "film"] },
                    { "id": 7, "prompt": "Bring stickers or paints to [ ... ] models", "fieldPrefix": "Bring stickers or paints to ", "fieldSuffix": " models", "type": "text", "acceptedAnswers": ["decorate"] },
                    { "id": 8, "prompt": "Sessions take place on", "fieldPrefix": "Sessions take place on ", "type": "text", "acceptedAnswers": ["Wednesdays", "Wednesday"] },
                    { "id": 9, "prompt": "Venue: [ ... ] Community Centre", "fieldPrefix": "Venue: ", "fieldSuffix": " Community Centre", "type": "text", "acceptedAnswers": ["Fradstone"] },
                    { "id": 10, "prompt": "Free [ ... ] available behind building", "fieldPrefix": "Free ", "fieldSuffix": " available behind building", "type": "text", "acceptedAnswers": ["parking"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Stevenson's Local Heritage Museum",
                "instructions": "Questions 11–14: Choose the correct letter. Questions 15–20: Label the map below.",
                "boxOptions": [
                    { "key": "A", "label": "Engine Room" },
                    { "key": "B", "label": "Textile Gallery" },
                    { "key": "C", "label": "Smithy" },
                    { "key": "D", "label": "Café" },
                    { "key": "E", "label": "Gift Shop" },
                    { "key": "F", "label": "Printing Press" },
                    { "key": "G", "label": "Miner's Cottage" },
                    { "key": "H", "label": "Schoolroom" }
                ],
                "questions": [
                    { "id": 11, "prompt": "The founder of the site made his fortune from", "type": "choice", "options": ["A leather manufacturing.", "B cotton mills.", "C coal mining."], "acceptedAnswers": ["C"] },
                    { "id": 12, "prompt": "The museum site is particularly unusual because", "type": "choice", "options": ["A original machinery still operates.", "B it survived wartime bombing undamaged.", "C workers lived in the main building."], "acceptedAnswers": ["A"] },
                    { "id": 13, "prompt": "What do volunteers do at the weekend?", "type": "choice", "options": ["A give costumed presentations", "B demonstrate traditional crafts", "C sell vintage merchandise"], "acceptedAnswers": ["B"] },
                    { "id": 14, "prompt": "What should visitors do before using the archive?", "type": "choice", "options": ["A join the museum society", "B pay an entry fee", "C book an appointment"], "acceptedAnswers": ["C"] },
                    { "id": 15, "prompt": "Schoolroom", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["H"] },
                    { "id": 16, "prompt": "Smithy", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["C"] },
                    { "id": 17, "prompt": "Miner's Cottage", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["G"] },
                    { "id": 18, "prompt": "Textile Gallery", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["B"] },
                    { "id": 19, "prompt": "Café", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["E"] },
                    { "id": 20, "prompt": "Gift Shop", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["D"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Art and Photography Project Review",
                "instructions": "Questions 21–24: Choose the correct letter. Questions 25–30: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "childhood memory" },
                    { "key": "B", "label": "isolation" },
                    { "key": "C", "label": "hope for the future" },
                    { "key": "D", "label": "family unity" },
                    { "key": "E", "label": "economic anxiety" },
                    { "key": "F", "label": "loss of identity" }
                ],
                "questions": [
                    { "id": 21, "prompt": "What do Chloe and Oliver agree about their photographic series?", "type": "choice", "options": ["A It needs more natural daylight.", "B The black-and-white tone is effective.", "C The portraits are too stylized."], "acceptedAnswers": ["B"] },
                    { "id": 22, "prompt": "Why did Oliver choose industrial architecture?", "type": "choice", "options": ["A to contrast with human fragility", "B to reflect local economic decline", "C to satisfy assignment guidelines"], "acceptedAnswers": ["A"] },
                    { "id": 23, "prompt": "Chloe felt her tutor's reaction was", "type": "choice", "options": ["A overly critical.", "B exceptionally encouraging.", "C slightly confusing."], "acceptedAnswers": ["B"] },
                    { "id": 24, "prompt": "What change will they make to the final presentation?", "type": "choice", "options": ["A mount photos on cardboard", "B provide printed explanatory text", "C add background audio recordings"], "acceptedAnswers": ["B"] },
                    { "id": 25, "prompt": "Old factory doorway", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["B"] },
                    { "id": 26, "prompt": "Children in the lane", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["A"] },
                    { "id": 27, "prompt": "Father at workbench", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["D"] },
                    { "id": 28, "prompt": "Clock tower", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["E"] },
                    { "id": 29, "prompt": "Sunrise over chimney", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["C"] },
                    { "id": 30, "prompt": "Discarded tools", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["F"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Early human migration and seafaring",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "Evidence of early boats made from hollowed", "fieldPrefix": "Evidence of early boats made from hollowed ", "type": "text", "acceptedAnswers": ["logs", "log"] },
                    { "id": 32, "prompt": "Reeds tied together using durable", "fieldPrefix": "Reeds tied together using durable ", "type": "text", "acceptedAnswers": ["rope"] },
                    { "id": 33, "prompt": "Navigators watched patterns of ocean", "fieldPrefix": "Navigators watched patterns of ocean ", "type": "text", "acceptedAnswers": ["swells", "swell"] },
                    { "id": 34, "prompt": "Used flights of seabirds to pinpoint distant", "fieldPrefix": "Used flights of seabirds to pinpoint distant ", "type": "text", "acceptedAnswers": ["islands", "island"] },
                    { "id": 35, "prompt": "Stored fresh water in sealed coconut", "fieldPrefix": "Stored fresh water in sealed coconut ", "type": "text", "acceptedAnswers": ["shells", "shell"] },
                    { "id": 36, "prompt": "Preserved dried fish using sea", "fieldPrefix": "Preserved dried fish using sea ", "type": "text", "acceptedAnswers": ["salt"] },
                    { "id": 37, "prompt": "Observed positions of stars and the", "fieldPrefix": "Observed positions of stars and the ", "type": "text", "acceptedAnswers": ["sun"] },
                    { "id": 38, "prompt": "Trade items included carved obsidian", "fieldPrefix": "Trade items included carved obsidian ", "type": "text", "acceptedAnswers": ["blades", "blade"] },
                    { "id": 39, "prompt": "Introduction of dogs, pigs and domestic", "fieldPrefix": "Introduction of dogs, pigs and domestic ", "type": "text", "acceptedAnswers": ["fowl", "chickens"] },
                    { "id": 40, "prompt": "Transformed ancient island", "fieldPrefix": "Transformed ancient island ", "type": "text", "acceptedAnswers": ["ecosystems", "ecosystem"] }
                ]
            }
        }
    }

def get_c16_test_2():
    return {
        "id": "c16-test-2",
        "series": 16,
        "testNumber": 2,
        "title": "Cambridge IELTS 16 - Practice Test 2",
        "bookTitle": "Cambridge IELTS 16 Academic",
        "audioBookmarks": { "1": 0, "2": 390, "3": 815, "4": 1250 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Copying and photo reproduction service",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 1, "prompt": "Include decorative wooden", "fieldPrefix": "Include decorative wooden ", "type": "text", "acceptedAnswers": ["frame"] },
                    { "id": 2, "prompt": "Price quoted: $ [ ... ]", "fieldPrefix": "Price quoted: $ ", "type": "text", "acceptedAnswers": ["195"] },
                    { "id": 3, "prompt": "Deposit required upon initial", "fieldPrefix": "Deposit required upon initial ", "type": "text", "acceptedAnswers": ["payment"] },
                    { "id": 4, "prompt": "Original photo depicted customer's", "fieldPrefix": "Original photo depicted customer's ", "type": "text", "acceptedAnswers": ["Grandparents", "grandparents"] },
                    { "id": 5, "prompt": "Restore fading in sepia", "fieldPrefix": "Restore fading in sepia ", "type": "text", "acceptedAnswers": ["colour", "color"] },
                    { "id": 6, "prompt": "Smooth slight tear near woman's", "fieldPrefix": "Smooth slight tear near woman's ", "type": "text", "acceptedAnswers": ["hand"] },
                    { "id": 7, "prompt": "Digital removal of messy garden", "fieldPrefix": "Digital removal of messy garden ", "type": "text", "acceptedAnswers": ["background"] },
                    { "id": 8, "prompt": "Sharpen image to bring eyes into clear", "fieldPrefix": "Sharpen image to bring eyes into clear ", "type": "text", "acceptedAnswers": ["focus"] },
                    { "id": 9, "prompt": "Turnaround time: [ ... ] days", "fieldPrefix": "Turnaround time: ", "fieldSuffix": " days", "type": "text", "acceptedAnswers": ["ten", "10", "10 days", "ten days"] },
                    { "id": 10, "prompt": "Delivery packaged inside protective", "fieldPrefix": "Delivery packaged inside protective ", "type": "text", "acceptedAnswers": ["plastic"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Food Hall stalls and dining",
                "instructions": "Questions 11–14: Choose the correct letter. Questions 15–20: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "fresh vegetarian snacks" },
                    { "key": "B", "label": "traditional bakery" },
                    { "key": "C", "label": "fresh seafood bar" },
                    { "key": "D", "label": "artisan cheeses" },
                    { "key": "E", "label": "specialty coffees" }
                ],
                "questions": [
                    { "id": 11, "prompt": "What makes the Food Hall popular with lunchtime workers?", "type": "choice", "options": ["A low price fixed menus", "B outdoor terrace seating", "C speed of service"], "acceptedAnswers": ["C"] },
                    { "id": 12, "prompt": "All stalls in the hall must adhere to", "type": "choice", "options": ["A organic certification.", "B zero single-use plastic.", "C local sourcing quota."], "acceptedAnswers": ["B"] },
                    { "id": 13, "prompt": "What event happens every Thursday evening?", "type": "choice", "options": ["A live cooking demos", "B live acoustic music", "C discount tasting hour"], "acceptedAnswers": ["A"] },
                    { "id": 14, "prompt": "How can customers leave feedback on stalls?", "type": "choice", "options": ["A QR code on tables", "B customer survey kiosk", "C token voting station"], "acceptedAnswers": ["A"] },
                    { "id": 15, "prompt": "Stall 1 (The Green Corner)", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["C"] },
                    { "id": 16, "prompt": "Stall 2 (Dairy Delight)", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["D"] },
                    { "id": 17, "prompt": "Stall 3 (Harbor Fresh)", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["A"] },
                    { "id": 18, "prompt": "Stall 4 (The Daily Loaf)", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["B"] },
                    { "id": 19, "prompt": "TWO additional amenities (Selection 1 of 2)", "type": "choice", "options": ["A free drinking water", "B mobile charging station", "C baggage lockers", "D kids play rug"], "acceptedAnswers": ["B", "C"] },
                    { "id": 20, "prompt": "TWO additional amenities (Selection 2 of 2)", "type": "choice", "options": ["A free drinking water", "B mobile charging station", "C baggage lockers", "D kids play rug"], "acceptedAnswers": ["B", "C"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Coffee production and roasting flow chart",
                "instructions": "Questions 21–24: Choose the correct letter. Questions 25–30: Complete the flowchart. Write ONE WORD ONLY.",
                "questions": [
                    { "id": 21, "prompt": "Why did Maria choose coffee production for her presentation?", "type": "choice", "options": ["A family connection in Colombia", "B interest in fair trade economics", "C complex chemical reactions during roasting"], "acceptedAnswers": ["A"] },
                    { "id": 22, "prompt": "Maria's tutor advises her to emphasize", "type": "choice", "options": ["A smallholder farming challenges.", "B temperature control in roasting.", "C consumer taste trends."], "acceptedAnswers": ["B"] },
                    { "id": 23, "prompt": "What surprised Maria during her roasting experiment?", "type": "choice", "options": ["A rapid bean weight loss", "B unexpected pleasant aroma", "C noise of the beans cracking"], "acceptedAnswers": ["C"] },
                    { "id": 24, "prompt": "The tutor recommends that she concludes with", "type": "choice", "options": ["A an evaluation of decaffeination.", "B sustainable packaging solutions.", "C future coffee breeding."], "acceptedAnswers": ["B"] },
                    { "id": 25, "prompt": "Harvesting ripe coffee", "fieldPrefix": "Harvesting ripe coffee ", "type": "text", "acceptedAnswers": ["cherries", "cherry"] },
                    { "id": 26, "prompt": "Fermenting in water tanks to remove", "fieldPrefix": "Fermenting in water tanks to remove ", "type": "text", "acceptedAnswers": ["pulp"] },
                    { "id": 27, "prompt": "Drying on large outdoor", "fieldPrefix": "Drying on large outdoor ", "type": "text", "acceptedAnswers": ["beds", "bed"] },
                    { "id": 28, "prompt": "Hulling beans to take off dry", "fieldPrefix": "Hulling beans to take off dry ", "type": "text", "acceptedAnswers": ["parchment"] },
                    { "id": 29, "prompt": "Sorting beans by size and", "fieldPrefix": "Sorting beans by size and ", "type": "text", "acceptedAnswers": ["density"] },
                    { "id": 30, "prompt": "Packaging into breathable burlap", "fieldPrefix": "Packaging into breathable burlap ", "type": "text", "acceptedAnswers": ["sacks", "sack"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Sleep hygiene and cognitive performance",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "Sleep deprivation degrades working", "fieldPrefix": "Sleep deprivation degrades working ", "type": "text", "acceptedAnswers": ["memory"] },
                    { "id": 32, "prompt": "Impairs logical reasoning and complex", "fieldPrefix": "Impairs logical reasoning and complex ", "type": "text", "acceptedAnswers": ["decisions", "decision"] },
                    { "id": 33, "prompt": "Blue light suppresses production of", "fieldPrefix": "Blue light suppresses production of ", "type": "text", "acceptedAnswers": ["melatonin"] },
                    { "id": 34, "prompt": "Ideal bedroom temperature is pleasantly", "fieldPrefix": "Ideal bedroom temperature is pleasantly ", "type": "text", "acceptedAnswers": ["cool"] },
                    { "id": 35, "prompt": "Heavy meals before bed cause digestive", "fieldPrefix": "Heavy meals before bed cause digestive ", "type": "text", "acceptedAnswers": ["discomfort"] },
                    { "id": 36, "prompt": "Avoid stimulants such as tea and", "fieldPrefix": "Avoid stimulants such as tea and ", "type": "text", "acceptedAnswers": ["coffee"] },
                    { "id": 37, "prompt": "Establish consistent wake-up", "fieldPrefix": "Establish consistent wake-up ", "type": "text", "acceptedAnswers": ["routines", "routine"] },
                    { "id": 38, "prompt": "Short daytime naps can boost afternoon", "fieldPrefix": "Short daytime naps can boost afternoon ", "type": "text", "acceptedAnswers": ["alertness"] },
                    { "id": 39, "prompt": "Deep sleep allows brain to clear metabolic", "fieldPrefix": "Deep sleep allows brain to clear metabolic ", "type": "text", "acceptedAnswers": ["waste"] },
                    { "id": 40, "prompt": "Promotes consolidation of long-term", "fieldPrefix": "Promotes consolidation of long-term ", "type": "text", "acceptedAnswers": ["learning"] }
                ]
            }
        }
    }

def get_c16_test_3():
    return {
        "id": "c16-test-3",
        "series": 16,
        "testNumber": 3,
        "title": "Cambridge IELTS 16 - Practice Test 3",
        "bookTitle": "Cambridge IELTS 16 Academic",
        "audioBookmarks": { "1": 0, "2": 380, "3": 810, "4": 1245 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Junior activity summer camp",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 1, "prompt": "Camp located next to city", "fieldPrefix": "Camp located next to city ", "type": "text", "acceptedAnswers": ["park"] },
                    { "id": 2, "prompt": "Uniform shirt colour is bright", "fieldPrefix": "Uniform shirt colour is bright ", "type": "text", "acceptedAnswers": ["blue"] },
                    { "id": 3, "prompt": "Must provide doctor's letter and emergency", "fieldPrefix": "Must provide doctor's letter and emergency ", "type": "text", "acceptedAnswers": ["reference"] },
                    { "id": 4, "prompt": "Evening activities include fireside", "fieldPrefix": "Evening activities include fireside ", "type": "text", "acceptedAnswers": ["story", "stories"] },
                    { "id": 5, "prompt": "Indoor hall available in case of heavy", "fieldPrefix": "Indoor hall available in case of heavy ", "type": "text", "acceptedAnswers": ["rain"] },
                    { "id": 6, "prompt": "Children should pack healthy mid-morning", "fieldPrefix": "Children should pack healthy mid-morning ", "type": "text", "acceptedAnswers": ["snack", "snacks"] },
                    { "id": 7, "prompt": "Staff trained to administer emergency", "fieldPrefix": "Staff trained to administer emergency ", "type": "text", "acceptedAnswers": ["medication"] },
                    { "id": 8, "prompt": "Kayaking and climbing require safety", "fieldPrefix": "Kayaking and climbing require safety ", "type": "text", "acceptedAnswers": ["helmet"] },
                    { "id": 9, "prompt": "Option to sleep overnight in large", "fieldPrefix": "Option to sleep overnight in large ", "type": "text", "acceptedAnswers": ["tent"] },
                    { "id": 10, "prompt": "Total weekly cost per child: $ [ ... ]", "fieldPrefix": "Total weekly cost per child: $ ", "type": "text", "acceptedAnswers": ["199"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Seasonal employment opportunities",
                "instructions": "Questions 11–14: Choose TWO letters. Questions 15–20: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "weekend shifts only" },
                    { "key": "B", "label": "free meals provided" },
                    { "key": "C", "label": "transport allowance" },
                    { "key": "D", "label": "performance bonus" },
                    { "key": "E", "label": "uniform included" },
                    { "key": "F", "label": "experience required" },
                    { "key": "G", "label": "immediate start" },
                    { "key": "H", "label": "opportunity for overtime" }
                ],
                "questions": [
                    { "id": 11, "prompt": "TWO benefits all seasonal workers receive (Selection 1 of 2)", "type": "choice", "options": ["A discounted gym access", "B dental coverage", "C staff product discount", "D pension matching", "E annual leave carryover"], "acceptedAnswers": ["A", "C"] },
                    { "id": 12, "prompt": "TWO benefits all seasonal workers receive (Selection 2 of 2)", "type": "choice", "options": ["A discounted gym access", "B dental coverage", "C staff product discount", "D pension matching", "E annual leave carryover"], "acceptedAnswers": ["A", "C"] },
                    { "id": 13, "prompt": "TWO qualifications needed for warehouse roles (Selection 1 of 2)", "type": "choice", "options": ["A first aid certificate", "B basic computer literacy", "C forklift certification", "D valid driver license", "E clean criminal record"], "acceptedAnswers": ["B", "C"] },
                    { "id": 14, "prompt": "TWO qualifications needed for warehouse roles (Selection 2 of 2)", "type": "choice", "options": ["A first aid certificate", "B basic computer literacy", "C forklift certification", "D valid driver license", "E clean criminal record"], "acceptedAnswers": ["B", "C"] },
                    { "id": 15, "prompt": "Cashier (Customer Service)", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["D"] },
                    { "id": 16, "prompt": "Stock Controller", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["F"] },
                    { "id": 17, "prompt": "Delivery Courier", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["A"] },
                    { "id": 18, "prompt": "Kitchen Assistant", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["H"] },
                    { "id": 19, "prompt": "Barista", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["C"] },
                    { "id": 20, "prompt": "Event Usher", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["E"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Healthy eating in restaurants",
                "instructions": "Questions 21–24: Choose the correct letter. Questions 25–30: Choose the correct letter, A, B or C.",
                "questions": [
                    { "id": 21, "prompt": "What inspired Adam's research into restaurant menus?", "type": "choice", "options": ["A public health statistics", "B his family's catering business", "C a recent government campaign"], "acceptedAnswers": ["B"] },
                    { "id": 22, "prompt": "What do the students agree about caloric labeling?", "type": "choice", "options": ["A It discourages diners from ordering dessert.", "B Customers frequently ignore it.", "C It motivates chefs to adapt recipes."], "acceptedAnswers": ["C"] },
                    { "id": 23, "prompt": "What surprised Adam about fast-food salad options?", "type": "choice", "options": ["A their high sugar content", "B their high sodium level", "C their low consumer demand"], "acceptedAnswers": ["A"] },
                    { "id": 24, "prompt": "How can diners best be influenced toward balanced choices?", "type": "choice", "options": ["A smaller plate sizes", "B attractive food descriptions", "C higher prices on unhealthy items"], "acceptedAnswers": ["B"] },
                    { "id": 25, "prompt": "Adam suggests that restaurants could reduce obesity if menus", "type": "choice", "options": ["A restricted portion sizes.", "B offered healthier side orders.", "C included nutritional warnings."], "acceptedAnswers": ["B"] },
                    { "id": 26, "prompt": "Chefs are reluctant to alter recipes because they fear", "type": "choice", "options": ["A increasing preparation time.", "B losing customer loyalty.", "C exceeding budget constraints."], "acceptedAnswers": ["B"] },
                    { "id": 27, "prompt": "Children's menus in particular suffer from", "type": "choice", "options": ["A lack of vegetable variety.", "B excessive artificial food coloring.", "C unappealing presentation."], "acceptedAnswers": ["A"] },
                    { "id": 28, "prompt": "Taxation on sugary drinks has resulted in", "type": "choice", "options": ["A higher overall beverage revenue.", "B manufacturers reformulating products.", "C consumer protests."], "acceptedAnswers": ["B"] },
                    { "id": 29, "prompt": "The tutor recommends evaluating", "type": "choice", "options": ["A supermarket prepared meals.", "B school lunch programs.", "C hospital cafeteria food."], "acceptedAnswers": ["C"] },
                    { "id": 30, "prompt": "For their final project, Adam and Elena will", "type": "choice", "options": ["A interview independent restaurant owners.", "B design an experimental restaurant menu.", "C analyze diner sales receipts."], "acceptedAnswers": ["B"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Urban forestry and benefits of trees",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "Urban trees mitigate the heat [ ... ] effect", "fieldPrefix": "Urban trees mitigate the heat ", "fieldSuffix": " effect", "type": "text", "acceptedAnswers": ["island"] },
                    { "id": 32, "prompt": "Canopy shade reduces building cooling", "fieldPrefix": "Canopy shade reduces building cooling ", "type": "text", "acceptedAnswers": ["costs", "cost"] },
                    { "id": 33, "prompt": "Leaves trap harmful airborne", "fieldPrefix": "Leaves trap harmful airborne ", "type": "text", "acceptedAnswers": ["particulates", "particles", "dust"] },
                    { "id": 34, "prompt": "Tree root systems absorb storm water and prevent", "fieldPrefix": "Tree root systems absorb storm water and prevent ", "type": "text", "acceptedAnswers": ["flooding", "floods"] },
                    { "id": 35, "prompt": "Natural sound barrier against urban traffic", "fieldPrefix": "Natural sound barrier against urban traffic ", "type": "text", "acceptedAnswers": ["noise"] },
                    { "id": 36, "prompt": "Exposure to green nature lowers human", "fieldPrefix": "Exposure to green nature lowers human ", "type": "text", "acceptedAnswers": ["stress"] },
                    { "id": 37, "prompt": "Diverse species increase urban bird and insect", "fieldPrefix": "Diverse species increase urban bird and insect ", "type": "text", "acceptedAnswers": ["diversity", "wildlife"] },
                    { "id": 38, "prompt": "Careful pruning avoids hazards from falling", "fieldPrefix": "Careful pruning avoids hazards from falling ", "type": "text", "acceptedAnswers": ["branches", "branch"] },
                    { "id": 39, "prompt": "Soil compaction around trunks limits root", "fieldPrefix": "Soil compaction around trunks limits root ", "type": "text", "acceptedAnswers": ["growth"] },
                    { "id": 40, "prompt": "Community tree planting builds social", "fieldPrefix": "Community tree planting builds social ", "type": "text", "acceptedAnswers": ["connection", "cohesion"] }
                ]
            }
        }
    }

def get_c16_test_4():
    return {
        "id": "c16-test-4",
        "series": 16,
        "testNumber": 4,
        "title": "Cambridge IELTS 16 - Practice Test 4",
        "bookTitle": "Cambridge IELTS 16 Academic",
        "audioBookmarks": { "1": 0, "2": 390, "3": 820, "4": 1250 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Holiday rental cottage booking",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 1, "prompt": "Booking arrival date: [ ... ] June", "fieldPrefix": "Booking arrival date: ", "fieldSuffix": " June", "type": "text", "acceptedAnswers": ["28th", "28", "28 June"] },
                    { "id": 2, "prompt": "Weekly rent cost: £ [ ... ]", "fieldPrefix": "Weekly rent cost: £ ", "type": "text", "acceptedAnswers": ["550"] },
                    { "id": 3, "prompt": "Cottage name: [ ... ] Cottage", "fieldPrefix": "Cottage name: ", "fieldSuffix": " Cottage", "type": "text", "acceptedAnswers": ["Chervil"] },
                    { "id": 4, "prompt": "Features: detached double", "fieldPrefix": "Features: detached double ", "type": "text", "acceptedAnswers": ["garage"] },
                    { "id": 5, "prompt": "Private enclosed lawn and", "fieldPrefix": "Private enclosed lawn and ", "type": "text", "acceptedAnswers": ["garden"] },
                    { "id": 6, "prompt": "Ample off-street", "fieldPrefix": "Ample off-street ", "type": "text", "acceptedAnswers": ["parking"] },
                    { "id": 7, "prompt": "Living room equipped with open fireplace burning", "fieldPrefix": "Living room equipped with open fireplace burning ", "type": "text", "acceptedAnswers": ["wood"] },
                    { "id": 8, "prompt": "Short walk across historic stone", "fieldPrefix": "Short walk across historic stone ", "type": "text", "acceptedAnswers": ["bridge"] },
                    { "id": 9, "prompt": "Village landmark near church: ancient war", "fieldPrefix": "Village landmark near church: ancient war ", "type": "text", "acceptedAnswers": ["monument"] },
                    { "id": 10, "prompt": "Cottage reopens annually in the month of", "fieldPrefix": "Cottage reopens annually in the month of ", "type": "text", "acceptedAnswers": ["March"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Farm visit and tourist facilities",
                "instructions": "Questions 11–14: Choose the correct letter. Questions 15–20: Label the map below.",
                "boxOptions": [
                    { "key": "A", "label": "Orchard" },
                    { "key": "B", "label": "Dairy Barn" },
                    { "key": "C", "label": "Visitor Reception" },
                    { "key": "D", "label": "Duck Pond" },
                    { "key": "E", "label": "Farm Café" },
                    { "key": "F", "label": "Tractor Ride Stop" },
                    { "key": "G", "label": "Picnic Meadow" },
                    { "key": "H", "label": "Artisan Cheese Shop" },
                    { "key": "I", "label": "Animal Petting Enclosure" }
                ],
                "questions": [
                    { "id": 11, "prompt": "The farm has been managed by the same family since", "type": "choice", "options": ["A 1850", "B 1920", "C 1975"], "acceptedAnswers": ["C"] },
                    { "id": 12, "prompt": "Children under five years old receive", "type": "choice", "options": ["A free admission", "B a farm activity sticker book", "C a miniature toy animal"], "acceptedAnswers": ["A"] },
                    { "id": 13, "prompt": "What safety regulation must all guests observe?", "type": "choice", "options": ["A wear rubber boots", "B wash hands after contact with animals", "C stay on paved walking pathways"], "acceptedAnswers": ["B"] },
                    { "id": 14, "prompt": "Farm tours depart every", "type": "choice", "options": ["A fifteen minutes", "B thirty minutes", "C hour"], "acceptedAnswers": ["B"] },
                    { "id": 15, "prompt": "Visitor Reception", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["C"] },
                    { "id": 16, "prompt": "Tractor Ride Stop", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["F"] },
                    { "id": 17, "prompt": "Orchard", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["A"] },
                    { "id": 18, "prompt": "Animal Petting Enclosure", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["I"] },
                    { "id": 19, "prompt": "Farm Café", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["E"] },
                    { "id": 20, "prompt": "Artisan Cheese Shop", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["H"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Urban bike-sharing schemes",
                "instructions": "Questions 21–24: Choose TWO letters. Questions 25–30: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "docking station shortage" },
                    { "key": "B", "label": "high maintenance costs" },
                    { "key": "C", "label": "vandalism and theft" },
                    { "key": "D", "label": "safety concerns for cyclists" },
                    { "key": "E", "label": "seamless public transport integration" },
                    { "key": "F", "label": "rapid user adoption" }
                ],
                "questions": [
                    { "id": 21, "prompt": "TWO primary drivers behind city bike schemes (Selection 1 of 2)", "type": "choice", "options": ["A reduced road maintenance", "B air quality improvement", "C congestion relief", "D tourism promotion", "E health insurance savings"], "acceptedAnswers": ["B", "C"] },
                    { "id": 22, "prompt": "TWO primary drivers behind city bike schemes (Selection 2 of 2)", "type": "choice", "options": ["A reduced road maintenance", "B air quality improvement", "C congestion relief", "D tourism promotion", "E health insurance savings"], "acceptedAnswers": ["B", "C"] },
                    { "id": 23, "prompt": "TWO technological innovations in modern e-bikes (Selection 1 of 2)", "type": "choice", "options": ["A GPS tracking chips", "B solar recharging hubs", "C puncture-proof solid tires", "D automatic pedal assist", "E smartphone unlock app"], "acceptedAnswers": ["A", "D"] },
                    { "id": 24, "prompt": "TWO technological innovations in modern e-bikes (Selection 2 of 2)", "type": "choice", "options": ["A GPS tracking chips", "B solar recharging hubs", "C puncture-proof solid tires", "D automatic pedal assist", "E smartphone unlock app"], "acceptedAnswers": ["A", "D"] },
                    { "id": 25, "prompt": "Amsterdam scheme", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["C"] },
                    { "id": 26, "prompt": "London scheme", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["A"] },
                    { "id": 27, "prompt": "Copenhagen scheme", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["E"] },
                    { "id": 28, "prompt": "Paris scheme", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["B"] },
                    { "id": 29, "prompt": "New York scheme", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["D"] },
                    { "id": 30, "prompt": "Hangzhou scheme", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["F"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Origins of music in prehistoric society",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "Early rhythm originated from mammalian heart", "fieldPrefix": "Early rhythm originated from mammalian heart ", "type": "text", "acceptedAnswers": ["beats", "beat"] },
                    { "id": 32, "prompt": "Coordinated vocal calls strengthened social", "fieldPrefix": "Coordinated vocal calls strengthened social ", "type": "text", "acceptedAnswers": ["bonds", "bond"] },
                    { "id": 33, "prompt": "Bone flutes carved from hollow bird", "fieldPrefix": "Bone flutes carved from hollow bird ", "type": "text", "acceptedAnswers": ["bones", "bone"] },
                    { "id": 34, "prompt": "Cave acoustics amplified resonant singing", "fieldPrefix": "Cave acoustics amplified resonant singing ", "type": "text", "acceptedAnswers": ["voices", "voice"] },
                    { "id": 35, "prompt": "Used in tribal healing ceremonies and spiritual", "fieldPrefix": "Used in tribal healing ceremonies and spiritual ", "type": "text", "acceptedAnswers": ["rituals", "ritual"] },
                    { "id": 36, "prompt": "Rhythmic chanting encouraged synchronized hunting", "fieldPrefix": "Rhythmic chanting encouraged synchronized hunting ", "type": "text", "acceptedAnswers": ["effort", "movements"] },
                    { "id": 37, "prompt": "Mothers soothing infants with repetitive melodic", "fieldPrefix": "Mothers soothing infants with repetitive melodic ", "type": "text", "acceptedAnswers": ["tunes", "tune"] },
                    { "id": 38, "prompt": "Drums created using stretched animal", "fieldPrefix": "Drums created using stretched animal ", "type": "text", "acceptedAnswers": ["skins", "skin"] },
                    { "id": 39, "prompt": "Shared music fostered collective group", "fieldPrefix": "Shared music fostered collective group ", "type": "text", "acceptedAnswers": ["identity"] },
                    { "id": 40, "prompt": "Evolutionary precursor to modern human", "fieldPrefix": "Evolutionary precursor to modern human ", "type": "text", "acceptedAnswers": ["language"] }
                ]
            }
        }
    }

print("Loaded all C16 tests 1 to 4")
