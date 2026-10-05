import json

def get_c18_test_1():
    return {
        "id": "c18-test-1",
        "series": 18,
        "testNumber": 1,
        "title": "Cambridge IELTS 18 - Practice Test 1",
        "bookTitle": "Cambridge IELTS 18 Academic",
        "audioBookmarks": { "1": 0, "2": 375, "3": 810, "4": 1240 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Transport survey",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "contextNotes": ["Personal Details: Name: Sadie Jones, Year of birth: 1991"],
                "questions": [
                    { "id": 1, "prompt": "Postcode:", "fieldPrefix": "Postcode: ", "type": "text", "acceptedAnswers": ["DW30 7YZ", "dw30 7yz", "DW307YZ"] },
                    { "id": 2, "prompt": "Date of bus journey:", "fieldPrefix": "Date of bus journey: ", "type": "text", "acceptedAnswers": ["24 April", "24th April", "24th of April", "April 24", "April 24th"] },
                    { "id": 3, "prompt": "Reason for trip: shopping and visit to the", "fieldPrefix": "shopping and visit to the ", "type": "text", "acceptedAnswers": ["dentist"] },
                    { "id": 4, "prompt": "Travelled by bus because cost of", "fieldPrefix": "Travelled by bus because cost of ", "fieldSuffix": " too high", "type": "text", "acceptedAnswers": ["parking"] },
                    { "id": 5, "prompt": "Got on bus at", "fieldPrefix": "Got on bus at ", "fieldSuffix": " Street", "type": "text", "acceptedAnswers": ["Claxby", "claxby"] },
                    { "id": 6, "prompt": "Complaints: bus today was", "fieldPrefix": "bus today was ", "type": "text", "acceptedAnswers": ["late"] },
                    { "id": 7, "prompt": "Complaints: frequency of buses in the", "fieldPrefix": "frequency of buses in the ", "type": "text", "acceptedAnswers": ["evening", "evenings"] },
                    { "id": 8, "prompt": "Travelling by car: Goes to the", "fieldPrefix": "Goes to the ", "fieldSuffix": " by car", "type": "text", "acceptedAnswers": ["supermarket"] },
                    { "id": 9, "prompt": "Dislikes travelling by bike in the city centre because of the", "fieldPrefix": "Dislikes travelling by bike in the city centre because of the ", "type": "text", "acceptedAnswers": ["pollution"] },
                    { "id": 10, "prompt": "Doesn't own a bike because of a lack of", "fieldPrefix": "Doesn't own a bike because of a lack of ", "type": "text", "acceptedAnswers": ["storage"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Becoming a volunteer for ACE",
                "instructions": "Questions 11–13: Choose the correct letter, A, B or C. Questions 14–15: Choose TWO letters, A–E. Questions 16–20: Choose from the box, A–G.",
                "boxOptions": [
                    { "key": "A", "label": "experience on stage" },
                    { "key": "B", "label": "original, new ideas" },
                    { "key": "C", "label": "parenting skills" },
                    { "key": "D", "label": "an understanding of food and diet" },
                    { "key": "E", "label": "retail experience" },
                    { "key": "F", "label": "a good memory" },
                    { "key": "G", "label": "a good level of fitness" }
                ],
                "questions": [
                    { "id": 11, "prompt": "Why does the speaker apologise about the seats?", "type": "choice", "options": ["A They are too small.", "B There are not enough of them.", "C Some of them are very close together."], "acceptedAnswers": ["C"] },
                    { "id": 12, "prompt": "What does the speaker say about the age of volunteers?", "type": "choice", "options": ["A The age of volunteers is less important than other factors.", "B Young volunteers are less reliable than older ones.", "C Most volunteers are about 60 years old."], "acceptedAnswers": ["A"] },
                    { "id": 13, "prompt": "What does the speaker say about training?", "type": "choice", "options": ["A It is continuous.", "B It is conducted by a manager.", "C It takes place online."], "acceptedAnswers": ["A"] },
                    { "id": 14, "prompt": "Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers? (Selection 1 of 2)", "type": "choice", "options": ["A their financial situation", "B their level of commitment", "C their work experience", "D their ambition", "E their availability"], "acceptedAnswers": ["B", "E"] },
                    { "id": 15, "prompt": "Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers? (Selection 2 of 2)", "type": "choice", "options": ["A their financial situation", "B their level of commitment", "C their work experience", "D their ambition", "E their availability"], "acceptedAnswers": ["B", "E"] },
                    { "id": 16, "prompt": "Fundraising", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["F"] },
                    { "id": 17, "prompt": "Litter collection", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["D"] },
                    { "id": 18, "prompt": "'Playmates'", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["A"] },
                    { "id": 19, "prompt": "Story club", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["B"] },
                    { "id": 20, "prompt": "First aid", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["E"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Talk on jobs in fashion design",
                "instructions": "Questions 21–26: Choose the correct letter, A, B or C. Questions 27–30: Choose TWO letters.",
                "questions": [
                    { "id": 21, "prompt": "What problem did Chantal have at the start of the talk?", "type": "choice", "options": ["A Her view of the speaker was blocked.", "B She was unable to find an empty seat.", "C The students next to her were talking."], "acceptedAnswers": ["A"] },
                    { "id": 22, "prompt": "What were Hugo and Chantal surprised to hear about the job market?", "type": "choice", "options": ["A It has become more competitive than it used to be.", "B There is more variety in it than they had realised.", "C Some areas of it are more exciting than others."], "acceptedAnswers": ["B"] },
                    { "id": 23, "prompt": "Hugo and Chantal agree that the speaker's message was", "type": "choice", "options": ["A unfair to them at times.", "B hard for them to follow.", "C critical of the industry."], "acceptedAnswers": ["A"] },
                    { "id": 24, "prompt": "What do Hugo and Chantal criticise about their school careers advice?", "type": "choice", "options": ["A when they received the advice", "B how much advice was given", "C who gave the advice"], "acceptedAnswers": ["C"] },
                    { "id": 25, "prompt": "When discussing their future, Hugo and Chantal disagree on", "type": "choice", "options": ["A which is the best career in fashion.", "B when to choose a career in fashion.", "C why they would like a career in fashion."], "acceptedAnswers": ["B"] },
                    { "id": 26, "prompt": "How does Hugo feel about being an unpaid assistant?", "type": "choice", "options": ["A He is realistic about the practice.", "B He feels the practice is dishonest.", "C He thinks others want to change the practice."], "acceptedAnswers": ["A"] },
                    { "id": 27, "prompt": "Which TWO mistakes did the speaker admit she made in her first job? (Selection 1 of 2)", "type": "choice", "options": ["A being dishonest to her employer", "B paying too much attention to how she looked", "C expecting to become well known", "D trying to earn a lot of money", "E openly disliking her client"], "acceptedAnswers": ["B", "C"] },
                    { "id": 28, "prompt": "Which TWO mistakes did the speaker admit she made in her first job? (Selection 2 of 2)", "type": "choice", "options": ["A being dishonest to her employer", "B paying too much attention to how she looked", "C expecting to become well known", "D trying to earn a lot of money", "E openly disliking her client"], "acceptedAnswers": ["B", "C"] },
                    { "id": 29, "prompt": "Which TWO pieces of retail information do Hugo and Chantal agree would be useful? (Selection 1 of 2)", "type": "choice", "options": ["A the reasons people return fashion items", "B how much time people have to shop for clothes", "C fashion designs people want but can't find", "D the best time of year for fashion buying", "E the most popular fashion sizes"], "acceptedAnswers": ["C", "D"] },
                    { "id": 30, "prompt": "Which TWO pieces of retail information do Hugo and Chantal agree would be useful? (Selection 2 of 2)", "type": "choice", "options": ["A the reasons people return fashion items", "B how much time people have to shop for clothes", "C fashion designs people want but can't find", "D the best time of year for fashion buying", "E the most popular fashion sizes"], "acceptedAnswers": ["C", "D"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Elephant translocation",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "damage to [ ... ] in the park", "fieldPrefix": "damage to ", "fieldSuffix": " in the park", "type": "text", "acceptedAnswers": ["fences"] },
                    { "id": 32, "prompt": "a suitable group of elephants from the same [ ... ] was selected", "fieldPrefix": "a suitable group of elephants from the same ", "fieldSuffix": " was selected", "type": "text", "acceptedAnswers": ["family"] },
                    { "id": 33, "prompt": "vets and park staff made use of [ ... ] to help guide the elephants into an open plain", "fieldPrefix": "vets and park staff made use of ", "fieldSuffix": " to help guide the elephants into an open plain", "type": "text", "acceptedAnswers": ["helicopters"] },
                    { "id": 34, "prompt": "this process had to be completed quickly to reduce", "fieldPrefix": "this process had to be completed quickly to reduce ", "type": "text", "acceptedAnswers": ["stress"] },
                    { "id": 35, "prompt": "elephants had to be turned on their [ ... ] to avoid damage to their lungs", "fieldPrefix": "elephants had to be turned on their ", "fieldSuffix": " to avoid damage to their lungs", "type": "text", "acceptedAnswers": ["sides"] },
                    { "id": 36, "prompt": "elephants' [ ... ] had to be monitored constantly", "fieldPrefix": "elephants' ", "fieldSuffix": " had to be monitored constantly", "type": "text", "acceptedAnswers": ["breathing"] },
                    { "id": 37, "prompt": "data including the size of their tusks and [ ... ] was taken", "fieldPrefix": "data including the size of their tusks and ", "fieldSuffix": " was taken", "type": "text", "acceptedAnswers": ["feet"] },
                    { "id": 38, "prompt": "[ ... ] opportunities", "fieldPrefix": "", "fieldSuffix": " opportunities", "type": "text", "acceptedAnswers": ["employment"] },
                    { "id": 39, "prompt": "a reduction in the number of poachers and", "fieldPrefix": "a reduction in the number of poachers and ", "type": "text", "acceptedAnswers": ["weapons"] },
                    { "id": 40, "prompt": "an increase in [ ... ] as a contributor to GDP", "fieldPrefix": "an increase in ", "fieldSuffix": " as a contributor to GDP", "type": "text", "acceptedAnswers": ["tourism"] }
                ]
            }
        }
    }

def get_c18_test_2():
    return {
        "id": "c18-test-2",
        "series": 18,
        "testNumber": 2,
        "title": "Cambridge IELTS 18 - Practice Test 2",
        "bookTitle": "Cambridge IELTS 18 Academic",
        "audioBookmarks": { "1": 0, "2": 390, "3": 820, "4": 1260 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Working at Milo's Restaurants",
                "instructions": "Questions 1–5: Complete the notes below. Write ONE WORD ONLY. Questions 6–10: Complete the table below. Write ONE WORD AND/OR A NUMBER.",
                "questions": [
                    { "id": 1, "prompt": "[ ... ] provided for all staff", "fieldPrefix": "", "fieldSuffix": " provided for all staff", "type": "text", "acceptedAnswers": ["training"] },
                    { "id": 2, "prompt": "[ ... ] during weekdays at all Milo's Restaurants", "fieldPrefix": "", "fieldSuffix": " during weekdays at all Milo's Restaurants", "type": "text", "acceptedAnswers": ["discount"] },
                    { "id": 3, "prompt": "[ ... ] provided after midnight", "fieldPrefix": "", "fieldSuffix": " provided after midnight", "type": "text", "acceptedAnswers": ["taxi"] },
                    { "id": 4, "prompt": "must care about maintaining a high standard of", "fieldPrefix": "must care about maintaining a high standard of ", "type": "text", "acceptedAnswers": ["service"] },
                    { "id": 5, "prompt": "must have a qualification in", "fieldPrefix": "must have a qualification in ", "type": "text", "acceptedAnswers": ["English"] },
                    { "id": 6, "prompt": "Breakfast supervisor Location: [ ... ] Street", "fieldPrefix": "Breakfast supervisor Location: ", "fieldSuffix": " Street", "type": "text", "acceptedAnswers": ["Wivenhoe"] },
                    { "id": 7, "prompt": "Making sure [ ... ] is clean", "fieldPrefix": "Making sure ", "fieldSuffix": " is clean", "type": "text", "acceptedAnswers": ["equipment"] },
                    { "id": 8, "prompt": "Starting salary £ [ ... ] per hour", "fieldPrefix": "Starting salary £ ", "fieldSuffix": " per hour", "type": "text", "acceptedAnswers": ["9.75"] },
                    { "id": 9, "prompt": "Junior chef: Maintaining stock and organising", "fieldPrefix": "Maintaining stock and organising ", "type": "text", "acceptedAnswers": ["deliveries"] },
                    { "id": 10, "prompt": "No work on a", "fieldPrefix": "No work on a ", "type": "text", "acceptedAnswers": ["Sunday"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Housing development scheme",
                "instructions": "Questions 11–14: Choose TWO letters. Questions 15–20: Label the map below. Write the correct letter, A–I.",
                "boxOptions": [
                    { "key": "A", "label": "Playground" },
                    { "key": "B", "label": "Supermarket" },
                    { "key": "C", "label": "Sports centre" },
                    { "key": "D", "label": "Clinic" },
                    { "key": "E", "label": "Housing" },
                    { "key": "F", "label": "Community centre" },
                    { "key": "G", "label": "Apartment blocks" },
                    { "key": "H", "label": "School" },
                    { "key": "I", "label": "Housing for the elderly" }
                ],
                "questions": [
                    { "id": 11, "prompt": "TWO main reasons why this site was chosen (Selection 1 of 2)", "type": "choice", "options": ["A It has suitable geographical features.", "B There is easy access to local facilities.", "C It has good connections with the airport.", "D The land is of little agricultural value.", "E It will be convenient for workers."], "acceptedAnswers": ["B", "C"] },
                    { "id": 12, "prompt": "TWO main reasons why this site was chosen (Selection 2 of 2)", "type": "choice", "options": ["A It has suitable geographical features.", "B There is easy access to local facilities.", "C It has good connections with the airport.", "D The land is of little agricultural value.", "E It will be convenient for workers."], "acceptedAnswers": ["B", "C"] },
                    { "id": 13, "prompt": "TWO aspects people gave positive feedback about (Selection 1 of 2)", "type": "choice", "options": ["A the facilities for cyclists", "B the impact on the environment", "C the encouragement of good relations between residents", "D the low cost of all the accommodation", "E the rural location"], "acceptedAnswers": ["B", "C"] },
                    { "id": 14, "prompt": "TWO aspects people gave positive feedback about (Selection 2 of 2)", "type": "choice", "options": ["A the facilities for cyclists", "B the impact on the environment", "C the encouragement of good relations between residents", "D the low cost of all the accommodation", "E the rural location"], "acceptedAnswers": ["B", "C"] },
                    { "id": 15, "prompt": "Map: School location", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["H"] },
                    { "id": 16, "prompt": "Map: Sports centre location", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["C"] },
                    { "id": 17, "prompt": "Map: Clinic location", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["D"] },
                    { "id": 18, "prompt": "Map: Community centre location", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["F"] },
                    { "id": 19, "prompt": "Map: Supermarket location", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["B"] },
                    { "id": 20, "prompt": "Map: Playground location", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H", "I"], "acceptedAnswers": ["A"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "The Laki eruption of 1783",
                "instructions": "Questions 21–24: Choose the correct letter, A, B or C. Questions 25–26: Choose TWO letters. Questions 27–30: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "This country suffered the most severe loss of life." },
                    { "key": "B", "label": "The impact on agriculture was predictable." },
                    { "key": "C", "label": "There was a significant increase in deaths of young people." },
                    { "key": "D", "label": "Animals suffered from a sickness." },
                    { "key": "E", "label": "This country saw the highest rise in food prices in the world." },
                    { "key": "F", "label": "It caused a particularly harsh winter." }
                ],
                "questions": [
                    { "id": 21, "prompt": "Why do the students think the Laki eruption of 1783 is so important?", "type": "choice", "options": ["A It was the most severe eruption in modern times.", "B It led to the formal study of volcanoes.", "C It had a profound effect on society."], "acceptedAnswers": ["C"] },
                    { "id": 22, "prompt": "What surprised Adam about observations made at the time?", "type": "choice", "options": ["A the number of places producing them", "B the contradictions in them", "C the lack of scientific data to support them"], "acceptedAnswers": ["A"] },
                    { "id": 23, "prompt": "According to Michelle, what did the contemporary sources say about the Laki haze?", "type": "choice", "options": ["A People thought it was similar to ordinary fog.", "B It was associated with health issues.", "C It completely blocked out the sun for weeks."], "acceptedAnswers": ["B"] },
                    { "id": 24, "prompt": "Adam corrects Michelle when she claims that Benjamin Franklin", "type": "choice", "options": ["A came to the wrong conclusion about the cause of the haze.", "B was the first to identify the reason for the haze.", "C supported the opinions of other observers about the haze."], "acceptedAnswers": ["B"] },
                    { "id": 25, "prompt": "Which TWO issues following the Laki eruption surprised the students? (Selection 1 of 2)", "type": "choice", "options": ["A how widespread the effects were", "B how long-lasting the effects were", "C the number of deaths it caused", "D the speed at which the volcanic ash cloud spread", "E how people ignored the warning signs"], "acceptedAnswers": ["A", "E"] },
                    { "id": 26, "prompt": "Which TWO issues following the Laki eruption surprised the students? (Selection 2 of 2)", "type": "choice", "options": ["A how widespread the effects were", "B how long-lasting the effects were", "C the number of deaths it caused", "D the speed at which the volcanic ash cloud spread", "E how people ignored the warning signs"], "acceptedAnswers": ["A", "E"] },
                    { "id": 27, "prompt": "Impact of Laki eruption on: Iceland", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["D"] },
                    { "id": 28, "prompt": "Impact of Laki eruption on: Egypt", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["E"] },
                    { "id": 29, "prompt": "Impact of Laki eruption on: UK", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["C"] },
                    { "id": 30, "prompt": "Impact of Laki eruption on: USA", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["F"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "History of Pockets",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "Reason for choice of subject: They are [ ... ] but can be overlooked", "fieldPrefix": "Reason for choice of subject: They are ", "fieldSuffix": " but can be overlooked by consumers and designers.", "type": "text", "acceptedAnswers": ["convenient"] },
                    { "id": 32, "prompt": "Men started to wear [ ... ] in the 18th century.", "fieldPrefix": "Men started to wear ", "fieldSuffix": " in the 18th century.", "type": "text", "acceptedAnswers": ["suits"] },
                    { "id": 33, "prompt": "A [ ... ] sewed pockets into the lining of the garments.", "fieldPrefix": "A ", "fieldSuffix": " sewed pockets into the lining of the garments.", "type": "text", "acceptedAnswers": ["tailor"] },
                    { "id": 34, "prompt": "Bigger pockets might be made for men who belonged to a certain type of", "fieldPrefix": "Bigger pockets might be made for men who belonged to a certain type of ", "type": "text", "acceptedAnswers": ["profession"] },
                    { "id": 35, "prompt": "Women's pockets were less [ ... ] than men's.", "fieldPrefix": "Women's pockets were less ", "fieldSuffix": " than men's.", "type": "text", "acceptedAnswers": ["visible"] },
                    { "id": 36, "prompt": "Pockets were produced in pairs using [ ... ] to link them together.", "fieldPrefix": "Pockets were produced in pairs using ", "fieldSuffix": " to link them together.", "type": "text", "acceptedAnswers": ["strings", "string"] },
                    { "id": 37, "prompt": "Pockets hung from the women's [ ... ] under skirts and petticoats.", "fieldPrefix": "Pockets hung from the women's ", "fieldSuffix": " under skirts and petticoats.", "type": "text", "acceptedAnswers": ["waists", "waist"] },
                    { "id": 38, "prompt": "Items such as [ ... ] could be reached through a gap in the material.", "fieldPrefix": "Items such as ", "fieldSuffix": " could be reached through a gap in the material.", "type": "text", "acceptedAnswers": ["perfume"] },
                    { "id": 39, "prompt": "hidden pockets had a negative effect on the [ ... ] of women.", "fieldPrefix": "hidden pockets had a negative effect on the ", "fieldSuffix": " of women.", "type": "text", "acceptedAnswers": ["image"] },
                    { "id": 40, "prompt": "Bags called 'pouches' became popular, before women carried a", "fieldPrefix": "Bags called 'pouches' became popular, before women carried a ", "type": "text", "acceptedAnswers": ["handbag"] }
                ]
            }
        }
    }

def get_c18_test_3():
    return {
        "id": "c18-test-3",
        "series": 18,
        "testNumber": 3,
        "title": "Cambridge IELTS 18 - Practice Test 3",
        "bookTitle": "Cambridge IELTS 18 Academic",
        "audioBookmarks": { "1": 0, "2": 380, "3": 815, "4": 1250 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Wayside Camera Club membership form",
                "instructions": "Questions 1–4: Complete the form below. Write ONE WORD AND/OR A NUMBER. Questions 5–10: Complete the table below. Write NO MORE THAN TWO WORDS.",
                "contextNotes": ["Candidate: Dan Green, Email: dan1068@market.com"],
                "questions": [
                    { "id": 1, "prompt": "Home address: 52 [ ... ] Street, Peacetown", "fieldPrefix": "52 ", "fieldSuffix": " Street, Peacetown", "type": "text", "acceptedAnswers": ["Marrowfield"] },
                    { "id": 2, "prompt": "Heard about us from a", "fieldPrefix": "from a ", "type": "text", "acceptedAnswers": ["relative"] },
                    { "id": 3, "prompt": "Reasons for joining: to", "fieldPrefix": "to ", "type": "text", "acceptedAnswers": ["socialise", "socialize"] },
                    { "id": 4, "prompt": "Type of membership: [ ... ] membership (£30)", "fieldPrefix": "", "fieldSuffix": " membership (£30)", "type": "text", "acceptedAnswers": ["full"] },
                    { "id": 5, "prompt": "Competition 1 Title: ' [ ... ] '", "fieldPrefix": "'", "fieldSuffix": "'", "type": "text", "acceptedAnswers": ["Domestic Life"] },
                    { "id": 6, "prompt": "Scene must show some", "fieldPrefix": "Scene must show some ", "type": "text", "acceptedAnswers": ["clouds"] },
                    { "id": 7, "prompt": "Feedback: The [ ... ] was wrong.", "fieldPrefix": "The ", "fieldSuffix": " was wrong.", "type": "text", "acceptedAnswers": ["timing"] },
                    { "id": 8, "prompt": "Competition 2 Title: ' [ ... ] '", "fieldPrefix": "'", "fieldSuffix": "'", "type": "text", "acceptedAnswers": ["Animal Magic"] },
                    { "id": 9, "prompt": "Scene must show", "fieldPrefix": "Scene must show ", "type": "text", "acceptedAnswers": ["animal movement", "movement"] },
                    { "id": 10, "prompt": "Feedback: The photograph was too", "fieldPrefix": "The photograph was too ", "type": "text", "acceptedAnswers": ["dark"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Picking wild mushrooms",
                "instructions": "Questions 11–14: Choose TWO letters, A–E. Questions 15–20: Choose the correct letter, A, B or C.",
                "questions": [
                    { "id": 11, "prompt": "TWO warnings Dan gives about picking mushrooms (Selection 1 of 2)", "type": "choice", "options": ["A Don't pick more than one variety of mushroom at a time.", "B Don't pick mushrooms near busy roads.", "C Don't eat mushrooms given to you.", "D Don't eat mushrooms while picking them.", "E Don't pick old mushrooms."], "acceptedAnswers": ["B", "E"] },
                    { "id": 12, "prompt": "TWO warnings Dan gives about picking mushrooms (Selection 2 of 2)", "type": "choice", "options": ["A Don't pick more than one variety of mushroom at a time.", "B Don't pick mushrooms near busy roads.", "C Don't eat mushrooms given to you.", "D Don't eat mushrooms while picking them.", "E Don't pick old mushrooms."], "acceptedAnswers": ["B", "E"] },
                    { "id": 13, "prompt": "TWO ideas about wild mushrooms Dan says are correct (Selection 1 of 2)", "type": "choice", "options": ["A Mushrooms should always be peeled before eating.", "B Mushrooms eaten by animals may be unsafe.", "C Cooking destroys toxins in mushrooms.", "D Brightly coloured mushrooms can be edible.", "E All poisonous mushrooms have a bad smell."], "acceptedAnswers": ["B", "D"] },
                    { "id": 14, "prompt": "TWO ideas about wild mushrooms Dan says are correct (Selection 2 of 2)", "type": "choice", "options": ["A Mushrooms should always be peeled before eating.", "B Mushrooms eaten by animals may be unsafe.", "C Cooking destroys toxins in mushrooms.", "D Brightly coloured mushrooms can be edible.", "E All poisonous mushrooms have a bad smell."], "acceptedAnswers": ["B", "D"] },
                    { "id": 15, "prompt": "What advice does Dan give about picking mushrooms in parks?", "type": "choice", "options": ["A Choose wooded areas.", "B Don't disturb wildlife.", "C Get there early."], "acceptedAnswers": ["A"] },
                    { "id": 16, "prompt": "Dan says it is a good idea for beginners to", "type": "choice", "options": ["A use a mushroom app.", "B join a group.", "C take a reference book."], "acceptedAnswers": ["B"] },
                    { "id": 17, "prompt": "What does Dan say is important for conservation?", "type": "choice", "options": ["A selecting only fully grown mushrooms", "B picking a limited amount of mushrooms", "C avoiding areas where rare mushroom species grow."], "acceptedAnswers": ["B"] },
                    { "id": 18, "prompt": "According to Dan, some varieties of wild mushrooms are in decline because there is", "type": "choice", "options": ["A a huge demand for them from restaurants.", "B a lack of rain in this part of the country.", "C a rise in building developments locally."], "acceptedAnswers": ["C"] },
                    { "id": 19, "prompt": "Dan says that when storing mushrooms, people should", "type": "choice", "options": ["A keep them in the fridge for no more than two days.", "B keep them in a brown bag in a dark room.", "C leave them for a period after washing them."], "acceptedAnswers": ["A"] },
                    { "id": 20, "prompt": "What does Dan say about trying new varieties of mushrooms?", "type": "choice", "options": ["A Experiment with different recipes.", "B Expect some to have a strong taste.", "C Cook them for a long time."], "acceptedAnswers": ["B"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "The Luddites and Future of Work",
                "instructions": "Questions 21–24: Choose TWO letters, A–E. Questions 25–30: Choose from the box, A–G.",
                "boxOptions": [
                    { "key": "A", "label": "These jobs are likely to be at risk." },
                    { "key": "B", "label": "Their role has become more interesting in recent years." },
                    { "key": "C", "label": "The number of people working in this sector has fallen dramatically." },
                    { "key": "D", "label": "This job will require more qualifications." },
                    { "key": "E", "label": "Higher disposable income has led to a huge increase in jobs." },
                    { "key": "F", "label": "There is likely to be a significant rise in demand for this service." },
                    { "key": "G", "label": "Both employment and productivity have risen." }
                ],
                "questions": [
                    { "id": 21, "prompt": "TWO opinions about the Luddites students express (Selection 1 of 2)", "type": "choice", "options": ["A Their actions were ineffective.", "B They are still influential today.", "C They have received unfair criticism.", "D They were proved right.", "E Their attitude is understandable."], "acceptedAnswers": ["C", "E"] },
                    { "id": 22, "prompt": "TWO opinions about the Luddites students express (Selection 2 of 2)", "type": "choice", "options": ["A Their actions were ineffective.", "B They are still influential today.", "C They have received unfair criticism.", "D They were proved right.", "E Their attitude is understandable."], "acceptedAnswers": ["C", "E"] },
                    { "id": 23, "prompt": "TWO predictions about the future of work students are doubtful about (Selection 1 of 2)", "type": "choice", "options": ["A Work will be more rewarding.", "B Unemployment will fall.", "C People will want to delay retiring.", "D Working hours will be shorter.", "E People will change jobs more frequently."], "acceptedAnswers": ["B", "D"] },
                    { "id": 24, "prompt": "TWO predictions about the future of work students are doubtful about (Selection 2 of 2)", "type": "choice", "options": ["A Work will be more rewarding.", "B Unemployment will fall.", "C People will want to delay retiring.", "D Working hours will be shorter.", "E People will change jobs more frequently."], "acceptedAnswers": ["B", "D"] },
                    { "id": 25, "prompt": "Accountants", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["A"] },
                    { "id": 26, "prompt": "Hairdressers", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["F"] },
                    { "id": 27, "prompt": "Administrative staff", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["C"] },
                    { "id": 28, "prompt": "Agricultural workers", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["G"] },
                    { "id": 29, "prompt": "Care workers", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["E"] },
                    { "id": 30, "prompt": "Bank clerks", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["A"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Space Traffic Management",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "aim to set up legal and [ ... ] ways of improving safety", "fieldPrefix": "aim to set up legal and ", "fieldSuffix": " ways of improving safety", "type": "text", "acceptedAnswers": ["technical"] },
                    { "id": 32, "prompt": "Satellites are now quite [ ... ] and therefore more widespread", "fieldPrefix": "Satellites are now quite ", "fieldSuffix": " and therefore more widespread", "type": "text", "acceptedAnswers": ["cheap"] },
                    { "id": 33, "prompt": "constellations made up of [ ... ] of satellites", "fieldPrefix": "constellations made up of ", "fieldSuffix": " of satellites", "type": "text", "acceptedAnswers": ["thousands"] },
                    { "id": 34, "prompt": "information to help with their", "fieldPrefix": "information to help with their ", "type": "text", "acceptedAnswers": ["identification"] },
                    { "id": 35, "prompt": "few systems for [ ... ] satellites", "fieldPrefix": "few systems for ", "fieldSuffix": " satellites", "type": "text", "acceptedAnswers": ["tracking"] },
                    { "id": 36, "prompt": "satellites used for [ ... ] or commercial reasons", "fieldPrefix": "satellites used for ", "fieldSuffix": " or commercial reasons", "type": "text", "acceptedAnswers": ["military"] },
                    { "id": 37, "prompt": "collect details of the object's [ ... ] at a given time", "fieldPrefix": "collect details of the object's ", "fieldSuffix": " at a given time", "type": "text", "acceptedAnswers": ["location"] },
                    { "id": 38, "prompt": "Scientists can only make a [ ... ] about where the satellite will go", "fieldPrefix": "Scientists can only make a ", "fieldSuffix": " about where the satellite will go", "type": "text", "acceptedAnswers": ["prediction"] },
                    { "id": 39, "prompt": "information should be combined in one", "fieldPrefix": "information should be combined in one ", "type": "text", "acceptedAnswers": ["database"] },
                    { "id": 40, "prompt": "designed to create [ ... ] among its users", "fieldPrefix": "designed to create ", "fieldSuffix": " among its users", "type": "text", "acceptedAnswers": ["trust"] }
                ]
            }
        }
    }

def get_c18_test_4():
    return {
        "id": "c18-test-4",
        "series": 18,
        "testNumber": 4,
        "title": "Cambridge IELTS 18 - Practice Test 4",
        "bookTitle": "Cambridge IELTS 18 Academic",
        "audioBookmarks": { "1": 0, "2": 390, "3": 825, "4": 1250 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Job details from employment agency",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 1, "prompt": "Role: [ ... ]", "fieldPrefix": "Role: ", "type": "text", "acceptedAnswers": ["receptionist"] },
                    { "id": 2, "prompt": "Location: Fordham [ ... ] Centre", "fieldPrefix": "Fordham ", "fieldSuffix": " Centre", "type": "text", "acceptedAnswers": ["Medical"] },
                    { "id": 3, "prompt": "Address: [ ... ] Road, Fordham", "fieldPrefix": "", "fieldSuffix": " Road, Fordham", "type": "text", "acceptedAnswers": ["Chastons"] },
                    { "id": 4, "prompt": "Work involves: making [ ... ] and reorganising them", "fieldPrefix": "making ", "fieldSuffix": " and reorganising them", "type": "text", "acceptedAnswers": ["appointments"] },
                    { "id": 5, "prompt": "maintaining the internal", "fieldPrefix": "maintaining the internal ", "type": "text", "acceptedAnswers": ["database"] },
                    { "id": 6, "prompt": "Requirements: [ ... ] (essential)", "fieldPrefix": "", "fieldSuffix": " (essential)", "type": "text", "acceptedAnswers": ["experience"] },
                    { "id": 7, "prompt": "a calm and [ ... ] manner", "fieldPrefix": "a calm and ", "fieldSuffix": " manner", "type": "text", "acceptedAnswers": ["confident"] },
                    { "id": 8, "prompt": "Other information: [ ... ] job", "fieldPrefix": "", "fieldSuffix": " job", "type": "text", "acceptedAnswers": ["temporary"] },
                    { "id": 9, "prompt": "hours: 7.45 a.m. to [ ... ] p.m. Monday to Friday", "fieldPrefix": "hours: 7.45 a.m. to ", "fieldSuffix": " p.m. Monday to Friday", "type": "text", "acceptedAnswers": ["1.15"] },
                    { "id": 10, "prompt": "[ ... ] is available onsite", "fieldPrefix": "", "fieldSuffix": " is available onsite", "type": "text", "acceptedAnswers": ["parking"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Museum visit",
                "instructions": "Questions 11–14: Choose the correct letter, A, B or C. Questions 15–20: Choose from the box, A–H.",
                "boxOptions": [
                    { "key": "A", "label": "Parents must supervise their children." },
                    { "key": "B", "label": "There are new things to see." },
                    { "key": "C", "label": "It is closed today." },
                    { "key": "D", "label": "This is only for school groups." },
                    { "key": "E", "label": "There is a quiz for visitors." },
                    { "key": "F", "label": "It features something created by students." },
                    { "key": "G", "label": "An expert is here today." },
                    { "key": "H", "label": "There is a one-way system." }
                ],
                "questions": [
                    { "id": 11, "prompt": "The museum building was originally", "type": "choice", "options": ["A a factory.", "B a private home.", "C a hall of residence."], "acceptedAnswers": ["B"] },
                    { "id": 12, "prompt": "The university uses part of the museum building as", "type": "choice", "options": ["A teaching rooms.", "B a research library.", "C administration offices."], "acceptedAnswers": ["B"] },
                    { "id": 13, "prompt": "What does the guide say about the entrance fee?", "type": "choice", "options": ["A Visitors decide whether or not they wish to pay.", "B Only children and students receive a discount.", "C The museum charges extra for special exhibitions."], "acceptedAnswers": ["A"] },
                    { "id": 14, "prompt": "What are visitors advised to leave in the cloakroom?", "type": "choice", "options": ["A cameras", "B coats", "C bags"], "acceptedAnswers": ["C"] },
                    { "id": 15, "prompt": "Four Seasons", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["F"] },
                    { "id": 16, "prompt": "Farmhouse Kitchen", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["H"] },
                    { "id": 17, "prompt": "A Year on the Farm", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["C"] },
                    { "id": 18, "prompt": "Wagon Walk", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["G"] },
                    { "id": 19, "prompt": "Bees are Magic", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["E"] },
                    { "id": 20, "prompt": "The Pond", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["A"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Origami in education",
                "instructions": "Questions 21–22: Choose TWO letters, A–E. Questions 23–27: Choose from the box, A–G. Questions 28–30: Choose the correct letter, A, B or C.",
                "boxOptions": [
                    { "key": "A", "label": "demonstrated independence" },
                    { "key": "B", "label": "asked for teacher support" },
                    { "key": "C", "label": "developed a competitive attitude" },
                    { "key": "D", "label": "seemed to find the activity calming" },
                    { "key": "E", "label": "seemed pleased with the results" },
                    { "key": "F", "label": "seemed confused" },
                    { "key": "G", "label": "seemed to find the activity easy" }
                ],
                "questions": [
                    { "id": 21, "prompt": "TWO educational skills shown in the video of children doing origami (Selection 1 of 2)", "type": "choice", "options": ["A solving problems", "B following instructions", "C working cooperatively", "D learning through play", "E developing hand-eye coordination"], "acceptedAnswers": ["B", "E"] },
                    { "id": 22, "prompt": "TWO educational skills shown in the video of children doing origami (Selection 2 of 2)", "type": "choice", "options": ["A solving problems", "B following instructions", "C working cooperatively", "D learning through play", "E developing hand-eye coordination"], "acceptedAnswers": ["B", "E"] },
                    { "id": 23, "prompt": "Sid", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["A"] },
                    { "id": 24, "prompt": "Jack", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["F"] },
                    { "id": 25, "prompt": "Naomi", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["D"] },
                    { "id": 26, "prompt": "Anya", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["C"] },
                    { "id": 27, "prompt": "Zara", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["E"] },
                    { "id": 28, "prompt": "Before starting an origami activity in class, the students think it is important for the teacher to", "type": "choice", "options": ["A make models that demonstrate the different stages.", "B check children understand the terminology involved.", "C tell children not to worry if they find the activity difficult."], "acceptedAnswers": ["B"] },
                    { "id": 29, "prompt": "The students agree that some teachers might be unwilling to use origami in class because", "type": "choice", "options": ["A they may not think that crafts are important.", "B they may not have the necessary skills.", "C they may worry that it will take up too much time."], "acceptedAnswers": ["B"] },
                    { "id": 30, "prompt": "Why do the students decide to use origami in their maths teaching practice?", "type": "choice", "options": ["A to correct a particular misunderstanding", "B to set a challenge", "C to introduce a new concept"], "acceptedAnswers": ["C"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Victor Hugo",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "We know more about its overall [ ... ] than about its author.", "fieldPrefix": "We know more about its overall ", "fieldSuffix": " than about its author.", "type": "text", "acceptedAnswers": ["plot"] },
                    { "id": 32, "prompt": "He spoke publicly about social issues, such as [ ... ] and education.", "fieldPrefix": "He spoke publicly about social issues, such as ", "fieldSuffix": " and education.", "type": "text", "acceptedAnswers": ["poverty"] },
                    { "id": 33, "prompt": "Victor Hugo had to live elsewhere in", "fieldPrefix": "Victor Hugo had to live elsewhere in ", "type": "text", "acceptedAnswers": ["Europe"] },
                    { "id": 34, "prompt": "He used his income from the sale of some [ ... ] he had written to buy a house on Guernsey.", "fieldPrefix": "He used his income from the sale of some ", "fieldSuffix": " he had written to buy a house on Guernsey.", "type": "text", "acceptedAnswers": ["poetry"] },
                    { "id": 35, "prompt": "The ground floor contains portraits, [ ... ] and tapestries that he valued.", "fieldPrefix": "The ground floor contains portraits, ", "fieldSuffix": " and tapestries that he valued.", "type": "text", "acceptedAnswers": ["drawings"] },
                    { "id": 36, "prompt": "He bought cheap [ ... ] made of wood and turned this into beautiful wall carvings.", "fieldPrefix": "He bought cheap ", "fieldSuffix": " made of wood and turned this into beautiful wall carvings.", "type": "text", "acceptedAnswers": ["furniture"] },
                    { "id": 37, "prompt": "The first floor consists of furnished areas with wallpaper and [ ... ] that have a Chinese design.", "fieldPrefix": "The first floor consists of furnished areas with wallpaper and ", "fieldSuffix": " that have a Chinese design.", "type": "text", "acceptedAnswers": ["lamps"] },
                    { "id": 38, "prompt": "He wrote in a room at the top of the house that had a view of the", "fieldPrefix": "He wrote in a room at the top of the house that had a view of the ", "type": "text", "acceptedAnswers": ["harbour", "harbor"] },
                    { "id": 39, "prompt": "He entertained other writers as well as poor [ ... ] in his house.", "fieldPrefix": "He entertained other writers as well as poor ", "fieldSuffix": " in his house.", "type": "text", "acceptedAnswers": ["children"] },
                    { "id": 40, "prompt": "Victor Hugo's [ ... ] gave ownership of the house to the city of Paris in 1927.", "fieldPrefix": "Victor Hugo's ", "fieldSuffix": " gave ownership of the house to the city of Paris in 1927.", "type": "text", "acceptedAnswers": ["relatives"] }
                ]
            }
        }
    }

print("Loaded all C18 tests 1 to 4")
