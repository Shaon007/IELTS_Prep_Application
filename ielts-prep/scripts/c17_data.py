import json

def get_c17_test_1():
    return {
        "id": "c17-test-1",
        "series": 17,
        "testNumber": 1,
        "title": "Cambridge IELTS 17 - Practice Test 1",
        "bookTitle": "Cambridge IELTS 17 Academic",
        "audioBookmarks": { "1": 0, "2": 390, "3": 820, "4": 1250 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Buckworth Conservation Group",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "contextNotes": ["Regular activities at Beach and Nature reserve", "Forthcoming events"],
                "questions": [
                    { "id": 1, "prompt": "Beach: making sure the beach does not have [ ... ] on it", "fieldPrefix": "making sure the beach does not have ", "fieldSuffix": " on it", "type": "text", "acceptedAnswers": ["litter"] },
                    { "id": 2, "prompt": "no [ ... ]", "fieldPrefix": "no ", "type": "text", "acceptedAnswers": ["dogs", "dog"] },
                    { "id": 3, "prompt": "next task is taking action to attract [ ... ] to the place", "fieldPrefix": "next task is taking action to attract ", "fieldSuffix": " to the place", "type": "text", "acceptedAnswers": ["insects", "insect"] },
                    { "id": 4, "prompt": "identifying types of", "fieldPrefix": "identifying types of ", "type": "text", "acceptedAnswers": ["butterflies", "butterfly"] },
                    { "id": 5, "prompt": "building a new", "fieldPrefix": "building a new ", "type": "text", "acceptedAnswers": ["wall"] },
                    { "id": 6, "prompt": "walk across the sands and reach the", "fieldPrefix": "walk across the sands and reach the ", "type": "text", "acceptedAnswers": ["island"] },
                    { "id": 7, "prompt": "wear appropriate", "fieldPrefix": "wear appropriate ", "type": "text", "acceptedAnswers": ["boots", "boot"] },
                    { "id": 8, "prompt": "Woodwork: suitable for [ ... ] to participate in", "fieldPrefix": "suitable for ", "fieldSuffix": " to participate in", "type": "text", "acceptedAnswers": ["beginners", "beginner"] },
                    { "id": 9, "prompt": "making [ ... ] out of wood", "fieldPrefix": "making ", "fieldSuffix": " out of wood", "type": "text", "acceptedAnswers": ["spoons", "spoon"] },
                    { "id": 10, "prompt": "cost of session (no camping): £ [ ... ]", "fieldPrefix": "cost of session (no camping): £ ", "type": "text", "acceptedAnswers": ["35", "thirty five", "thirty-five"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Boat trip round Tasmania",
                "instructions": "Questions 11–14: Choose the correct letter, A, B or C. Questions 15–20: Choose TWO letters.",
                "questions": [
                    { "id": 11, "prompt": "What is the maximum number of people who can stand on each side of the boat?", "type": "choice", "options": ["A 9", "B 15", "C 18"], "acceptedAnswers": ["A"] },
                    { "id": 12, "prompt": "What colour are the tour boats?", "type": "choice", "options": ["A dark red", "B jet black", "C light green"], "acceptedAnswers": ["C"] },
                    { "id": 13, "prompt": "Which lunchbox is suitable for someone who doesn’t eat meat or fish?", "type": "choice", "options": ["A Lunchbox 1", "B Lunchbox 2", "C Lunchbox 3"], "acceptedAnswers": ["B"] },
                    { "id": 14, "prompt": "What should people do with their litter?", "type": "choice", "options": ["A take it home", "B hand it to a member of staff", "C put it in the bins provided on the boat"], "acceptedAnswers": ["B"] },
                    { "id": 15, "prompt": "Which TWO features of the lighthouse does Lou mention? (Selection 1 of 2)", "type": "choice", "options": ["A why it was built", "B who built it", "C how long it took to build", "D who staffed it", "E what it was built with"], "acceptedAnswers": ["A", "D"] },
                    { "id": 16, "prompt": "Which TWO features of the lighthouse does Lou mention? (Selection 2 of 2)", "type": "choice", "options": ["A why it was built", "B who built it", "C how long it took to build", "D who staffed it", "E what it was built with"], "acceptedAnswers": ["A", "D"] },
                    { "id": 17, "prompt": "Which TWO types of creature might come close to the boat? (Selection 1 of 2)", "type": "choice", "options": ["A sea eagles", "B fur seals", "C dolphins", "D whales", "E penguins"], "acceptedAnswers": ["B", "C"] },
                    { "id": 18, "prompt": "Which TWO types of creature might come close to the boat? (Selection 2 of 2)", "type": "choice", "options": ["A sea eagles", "B fur seals", "C dolphins", "D whales", "E penguins"], "acceptedAnswers": ["B", "C"] },
                    { "id": 19, "prompt": "Which TWO points does Lou make about the caves? (Selection 1 of 2)", "type": "choice", "options": ["A Only large tourist boats can visit them.", "B The entrances to them are often blocked.", "C It is too dangerous for individuals to go near them.", "D Someone will explain what is inside them.", "E They cannot be reached on foot."], "acceptedAnswers": ["D", "E"] },
                    { "id": 20, "prompt": "Which TWO points does Lou make about the caves? (Selection 2 of 2)", "type": "choice", "options": ["A Only large tourist boats can visit them.", "B The entrances to them are often blocked.", "C It is too dangerous for individuals to go near them.", "D Someone will explain what is inside them.", "E They cannot be reached on foot."], "acceptedAnswers": ["D", "E"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Work experience for veterinary science students",
                "instructions": "Questions 21–26: Choose the correct letter, A, B or C. Questions 27–30: Choose from the box, A–F.",
                "boxOptions": [
                    { "key": "A", "label": "Tim found this easier than expected." },
                    { "key": "B", "label": "Tim thought this was not very clearly organised." },
                    { "key": "C", "label": "Diana may do some further study on this." },
                    { "key": "D", "label": "They both found the reading required for this was difficult." },
                    { "key": "E", "label": "Tim was shocked at something he learned on this module." },
                    { "key": "F", "label": "They were both surprised how little is known about some aspects of this." }
                ],
                "questions": [
                    { "id": 21, "prompt": "What problem did both Diana and Tim have when arranging their work experience?", "type": "choice", "options": ["A making initial contact with suitable farms", "B organising transport to and from the farm", "C finding a placement for the required length of time"], "acceptedAnswers": ["A"] },
                    { "id": 22, "prompt": "Tim was pleased to be able to help", "type": "choice", "options": ["A a lamb that had a broken leg.", "B a sheep that was having difficulty giving birth.", "C a newly born lamb that was having trouble feeding."], "acceptedAnswers": ["B"] },
                    { "id": 23, "prompt": "Diana says the sheep on her farm", "type": "choice", "options": ["A were of various different varieties.", "B were mainly reared for their meat.", "C had better quality wool than sheep on the hills."], "acceptedAnswers": ["B"] },
                    { "id": 24, "prompt": "What did the students learn about adding supplements to chicken feed?", "type": "choice", "options": ["A These should only be given if specially needed.", "B It is worth paying extra for the most effective ones.", "C The amount given at one time should be limited."], "acceptedAnswers": ["A"] },
                    { "id": 25, "prompt": "What happened when Diana was working with dairy cows?", "type": "choice", "options": ["A She identified some cows incorrectly.", "B She accidentally threw some milk away.", "C She made a mistake when storing milk."], "acceptedAnswers": ["C"] },
                    { "id": 26, "prompt": "What did both farmers mention about vets and farming?", "type": "choice", "options": ["A Vets are failing to cope with some aspects of animal health.", "B There needs to be a fundamental change in the training of vets.", "C Some jobs could be done by the farmer rather than by a vet."], "acceptedAnswers": ["C"] },
                    { "id": 27, "prompt": "Medical terminology", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["A"] },
                    { "id": 28, "prompt": "Diet and nutrition", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["E"] },
                    { "id": 29, "prompt": "Animal disease", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["F"] },
                    { "id": 30, "prompt": "Wildlife medication", "type": "matching", "options": ["A", "B", "C", "D", "E", "F"], "acceptedAnswers": ["C"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Labyrinths",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "Mazes are a type of", "fieldPrefix": "Mazes are a type of ", "type": "text", "acceptedAnswers": ["puzzle"] },
                    { "id": 32, "prompt": "[ ... ] is needed to navigate through a maze", "fieldPrefix": "", "fieldSuffix": " is needed to navigate through a maze", "type": "text", "acceptedAnswers": ["logic"] },
                    { "id": 33, "prompt": "derived from a word meaning a feeling of", "fieldPrefix": "derived from a word meaning a feeling of ", "type": "text", "acceptedAnswers": ["confusion"] },
                    { "id": 34, "prompt": "frequently been used in [ ... ] and prayer", "fieldPrefix": "frequently been used in ", "fieldSuffix": " and prayer", "type": "text", "acceptedAnswers": ["meditation"] },
                    { "id": 35, "prompt": "Ancient carvings on [ ... ] have been found across many cultures", "fieldPrefix": "Ancient carvings on ", "fieldSuffix": " have been found across many cultures", "type": "text", "acceptedAnswers": ["stone"] },
                    { "id": 36, "prompt": "Ancient Greeks used the symbol on", "fieldPrefix": "Ancient Greeks used the symbol on ", "type": "text", "acceptedAnswers": ["coins", "coin"] },
                    { "id": 37, "prompt": "turf labyrinth once had a big [ ... ] at its centre", "fieldPrefix": "turf labyrinth once had a big ", "fieldSuffix": " at its centre", "type": "text", "acceptedAnswers": ["tree"] },
                    { "id": 38, "prompt": "walking a maze can reduce a person's [ ... ] rate", "fieldPrefix": "walking a maze can reduce a person's ", "fieldSuffix": " rate", "type": "text", "acceptedAnswers": ["breathing"] },
                    { "id": 39, "prompt": "'finger labyrinths' made from", "fieldPrefix": "'finger labyrinths' made from ", "type": "text", "acceptedAnswers": ["paper"] },
                    { "id": 40, "prompt": "Alzheimer's sufferers experience less", "fieldPrefix": "Alzheimer's sufferers experience less ", "type": "text", "acceptedAnswers": ["anxiety"] }
                ]
            }
        }
    }

def get_c17_test_2():
    return {
        "id": "c17-test-2",
        "series": 17,
        "testNumber": 2,
        "title": "Cambridge IELTS 17 - Practice Test 2",
        "bookTitle": "Cambridge IELTS 17 Academic",
        "audioBookmarks": { "1": 0, "2": 390, "3": 810, "4": 1245 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Voluntary work in Southoe village",
                "instructions": "Questions 1–10: Complete the notes and table below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 1, "prompt": "Library: Help with [ ... ] books (times to be arranged)", "fieldPrefix": "Help with ", "fieldSuffix": " books (times to be arranged)", "type": "text", "acceptedAnswers": ["collecting"] },
                    { "id": 2, "prompt": "Help needed to keep [ ... ] of books up to date", "fieldPrefix": "Help needed to keep ", "fieldSuffix": " of books up to date", "type": "text", "acceptedAnswers": ["records", "record"] },
                    { "id": 3, "prompt": "Library is in the [ ... ] Room in the village hall", "fieldPrefix": "Library is in the ", "fieldSuffix": " Room in the village hall", "type": "text", "acceptedAnswers": ["West"] },
                    { "id": 4, "prompt": "Lunch club: Help by providing", "fieldPrefix": "Help by providing ", "type": "text", "acceptedAnswers": ["transport"] },
                    { "id": 5, "prompt": "Help with hobbies such as", "fieldPrefix": "Help with hobbies such as ", "type": "text", "acceptedAnswers": ["art"] },
                    { "id": 6, "prompt": "Taking Mrs Carroll to", "fieldPrefix": "Taking Mrs Carroll to ", "type": "text", "acceptedAnswers": ["hospital"] },
                    { "id": 7, "prompt": "Work in the [ ... ] at Mr Selsbury’s house", "fieldPrefix": "Work in the ", "fieldSuffix": " at Mr Selsbury’s house", "type": "text", "acceptedAnswers": ["garden"] },
                    { "id": 8, "prompt": "19 Oct Event: [ ... ] at Village hall", "fieldPrefix": "Event: ", "type": "text", "acceptedAnswers": ["quiz"] },
                    { "id": 9, "prompt": "18 Nov dance: checking", "fieldPrefix": "checking ", "type": "text", "acceptedAnswers": ["tickets", "ticket"] },
                    { "id": 10, "prompt": "31 Dec New Year's party: designing the", "fieldPrefix": "designing the ", "type": "text", "acceptedAnswers": ["poster"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Oniton Hall",
                "instructions": "Questions 11–14: Choose the correct letter, A, B or C. Questions 15–20: Choose from the box, A–H.",
                "boxOptions": [
                    { "key": "A", "label": "shopping" },
                    { "key": "B", "label": "watching cows being milked" },
                    { "key": "C", "label": "seeing old farming equipment" },
                    { "key": "D", "label": "eating and drinking" },
                    { "key": "E", "label": "starting a trip" },
                    { "key": "F", "label": "seeing rare breeds of animals" },
                    { "key": "G", "label": "helping to look after animals" },
                    { "key": "H", "label": "using farming tools" }
                ],
                "questions": [
                    { "id": 11, "prompt": "Many past owners made changes to", "type": "choice", "options": ["A the gardens.", "B the house.", "C the farm."], "acceptedAnswers": ["B"] },
                    { "id": 12, "prompt": "Sir Edward Downes built Oniton Hall because he wanted", "type": "choice", "options": ["A a place for discussing politics.", "B a place to display his wealth.", "C a place for artists and writers."], "acceptedAnswers": ["C"] },
                    { "id": 13, "prompt": "Visitors can learn about the work of servants in the past from", "type": "choice", "options": ["A audio guides.", "B photographs.", "C people in costume."], "acceptedAnswers": ["C"] },
                    { "id": 14, "prompt": "What is new for children at Oniton Hall?", "type": "choice", "options": ["A clothes for dressing up", "B mini tractors", "C the adventure playground"], "acceptedAnswers": ["B"] },
                    { "id": 15, "prompt": "dairy", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["D"] },
                    { "id": 16, "prompt": "large barn", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["C"] },
                    { "id": 17, "prompt": "small barn", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["G"] },
                    { "id": 18, "prompt": "stables", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["A"] },
                    { "id": 19, "prompt": "shed", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["E"] },
                    { "id": 20, "prompt": "parkland", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["F"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Review of Romeo and Juliet production",
                "instructions": "Questions 21–22: Choose TWO letters, A–E. Questions 23–27: Choose from the box, A–G. Questions 28–30: Choose the correct letter, A, B or C.",
                "boxOptions": [
                    { "key": "A", "label": "They both expected this to be more traditional." },
                    { "key": "B", "label": "They both thought this was original." },
                    { "key": "C", "label": "They agree this created the right atmosphere." },
                    { "key": "D", "label": "They agree this was a major strength." },
                    { "key": "E", "label": "They were both disappointed by this." },
                    { "key": "F", "label": "They disagree about why this was an issue." },
                    { "key": "G", "label": "They disagree about how this could be improved." }
                ],
                "questions": [
                    { "id": 21, "prompt": "TWO things students agree they need to include in review (Selection 1 of 2)", "type": "choice", "options": ["A analysis of the text", "B a summary of the plot", "C a description of the theatre", "D a personal reaction", "E a reference to particular scenes"], "acceptedAnswers": ["D", "E"] },
                    { "id": 22, "prompt": "TWO things students agree they need to include in review (Selection 2 of 2)", "type": "choice", "options": ["A analysis of the text", "B a summary of the plot", "C a description of the theatre", "D a personal reaction", "E a reference to particular scenes"], "acceptedAnswers": ["D", "E"] },
                    { "id": 23, "prompt": "the set", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["D"] },
                    { "id": 24, "prompt": "the lighting", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["C"] },
                    { "id": 25, "prompt": "the costume design", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["A"] },
                    { "id": 26, "prompt": "the music", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["E"] },
                    { "id": 27, "prompt": "the actors' delivery", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["F"] },
                    { "id": 28, "prompt": "The students think Romeo and Juliet is still relevant because", "type": "choice", "options": ["A it illustrates how easily conflict can start.", "B it deals with problems that families experience.", "C it teaches them about relationships."], "acceptedAnswers": ["B"] },
                    { "id": 29, "prompt": "The students found watching Romeo and Juliet in another language", "type": "choice", "options": ["A frustrating.", "B demanding.", "C moving."], "acceptedAnswers": ["C"] },
                    { "id": 30, "prompt": "Why do students think Shakespeare's plays have international appeal?", "type": "choice", "options": ["A The stories are exciting.", "B There are recognisable characters.", "C They can be interpreted in many ways."], "acceptedAnswers": ["C"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Digital technology and Icelandic language",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 31, "prompt": "has approximately [ ... ] speakers", "fieldPrefix": "has approximately ", "fieldSuffix": " speakers", "type": "text", "acceptedAnswers": ["321,000", "321000"] },
                    { "id": 32, "prompt": "has a [ ... ] that is still growing", "fieldPrefix": "has a ", "fieldSuffix": " that is still growing", "type": "text", "acceptedAnswers": ["vocabulary"] },
                    { "id": 33, "prompt": "computer-based concepts, such as web browser and", "fieldPrefix": "computer-based concepts, such as web browser and ", "type": "text", "acceptedAnswers": ["podcast"] },
                    { "id": 34, "prompt": "big users of digital technology, such as", "fieldPrefix": "big users of digital technology, such as ", "type": "text", "acceptedAnswers": ["smartphones", "smartphone"] },
                    { "id": 35, "prompt": "are becoming [ ... ] very quickly", "fieldPrefix": "are becoming ", "fieldSuffix": " very quickly", "type": "text", "acceptedAnswers": ["bilingual"] },
                    { "id": 36, "prompt": "discussions using only English while they are in the [ ... ] at school", "fieldPrefix": "discussions using only English while they are in the ", "fieldSuffix": " at school", "type": "text", "acceptedAnswers": ["playground"] },
                    { "id": 37, "prompt": "better able to identify the content of a [ ... ] in English", "fieldPrefix": "better able to identify the content of a ", "fieldSuffix": " in English than Icelandic", "type": "text", "acceptedAnswers": ["picture"] },
                    { "id": 38, "prompt": "because of how complicated its [ ... ] is", "fieldPrefix": "because of how complicated its ", "fieldSuffix": " is", "type": "text", "acceptedAnswers": ["grammar"] },
                    { "id": 39, "prompt": "young Icelanders may lose their [ ... ] as Icelanders", "fieldPrefix": "young Icelanders may lose their ", "fieldSuffix": " as Icelanders", "type": "text", "acceptedAnswers": ["identity"] },
                    { "id": 40, "prompt": "worried about children not being [ ... ] in either Icelandic or English", "fieldPrefix": "worried about children not being ", "fieldSuffix": " in either Icelandic or English", "type": "text", "acceptedAnswers": ["fluent"] }
                ]
            }
        }
    }

def get_c17_test_3():
    return {
        "id": "c17-test-3",
        "series": 17,
        "testNumber": 3,
        "title": "Cambridge IELTS 17 - Practice Test 3",
        "bookTitle": "Cambridge IELTS 17 Academic",
        "audioBookmarks": { "1": 0, "2": 385, "3": 815, "4": 1250 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Advice on surfing holidays in Ireland",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 1, "prompt": "Suitable for [ ... ] or groups", "fieldPrefix": "Suitable for ", "fieldSuffix": " or groups", "type": "text", "acceptedAnswers": ["family", "families"] },
                    { "id": 2, "prompt": "Need to be reasonably", "fieldPrefix": "Need to be reasonably ", "type": "text", "acceptedAnswers": ["fit"] },
                    { "id": 3, "prompt": "Good selection of [ ... ] and apartments", "fieldPrefix": "Good selection of ", "fieldSuffix": " and apartments", "type": "text", "acceptedAnswers": ["hotels", "hotel"] },
                    { "id": 4, "prompt": "Best beach: [ ... ] beach", "fieldPrefix": "Best beach: ", "fieldSuffix": " beach", "type": "text", "acceptedAnswers": ["Carrowniskey"] },
                    { "id": 5, "prompt": "Minimum booking: one", "fieldPrefix": "Minimum booking: one ", "type": "text", "acceptedAnswers": ["week"] },
                    { "id": 6, "prompt": "Facing north into the", "fieldPrefix": "Facing north into the ", "type": "text", "acceptedAnswers": ["bay"] },
                    { "id": 7, "prompt": "Best month to visit is", "fieldPrefix": "Best month to visit is ", "type": "text", "acceptedAnswers": ["September"] },
                    { "id": 8, "prompt": "Average water temperature: [ ... ] degrees", "fieldPrefix": "Average water temperature: ", "fieldSuffix": " degrees", "type": "text", "acceptedAnswers": ["19", "nineteen"] },
                    { "id": 9, "prompt": "Full day surf hire: £ [ ... ]", "fieldPrefix": "Full day surf hire: £ ", "type": "text", "acceptedAnswers": ["30", "thirty"] },
                    { "id": 10, "prompt": "Need to bring own", "fieldPrefix": "Need to bring own ", "type": "text", "acceptedAnswers": ["boots", "boot"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Cycling holidays in the Peak District",
                "instructions": "Questions 11–14: Choose the correct letter. Questions 15–20: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "historical interest" },
                    { "key": "B", "label": "scenic views" },
                    { "key": "C", "label": "challenging cycling" },
                    { "key": "D", "label": "suitable for families" },
                    { "key": "E", "label": "wildlife watching" },
                    { "key": "F", "label": "food and drink" },
                    { "key": "G", "label": "picnic facilities" }
                ],
                "questions": [
                    { "id": 11, "prompt": "TWO things included in tour package (Selection 1 of 2)", "type": "choice", "options": ["A bike insurance", "B accommodation", "C airport transfer", "D tour leader", "E luggage transfer"], "acceptedAnswers": ["B", "E"] },
                    { "id": 12, "prompt": "TWO things included in tour package (Selection 2 of 2)", "type": "choice", "options": ["A bike insurance", "B accommodation", "C airport transfer", "D tour leader", "E luggage transfer"], "acceptedAnswers": ["B", "E"] },
                    { "id": 13, "prompt": "What does the speaker say about bike maintenance?", "type": "choice", "options": ["A Free repairs are provided.", "B Tool kits must be rented.", "C Help is available on route."], "acceptedAnswers": ["C"] },
                    { "id": 14, "prompt": "What does the speaker recommend for rainy days?", "type": "choice", "options": ["A visiting museums", "B taking the train", "C exploring market towns"], "acceptedAnswers": ["C"] },
                    { "id": 15, "prompt": "Monsal Trail", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["A"] },
                    { "id": 16, "prompt": "Tissington Trail", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["E"] },
                    { "id": 17, "prompt": "Manifold Track", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["D"] },
                    { "id": 18, "prompt": "High Peak Trail", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["G"] },
                    { "id": 19, "prompt": "Carsington Water", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["F"] },
                    { "id": 20, "prompt": "Derwent Valley", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["C"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Discussion on music festival project",
                "instructions": "Questions 21–24: Choose the correct letter. Questions 25–30: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "community engagement" },
                    { "key": "B", "label": "financial planning" },
                    { "key": "C", "label": "health and safety" },
                    { "key": "D", "label": "environmental impact" },
                    { "key": "E", "label": "marketing strategy" },
                    { "key": "F", "label": "artist management" },
                    { "key": "G", "label": "site logistics" },
                    { "key": "H", "label": "cultural heritage" }
                ],
                "questions": [
                    { "id": 21, "prompt": "Why did Holly choose the Glastonbury Festival for her project?", "type": "choice", "options": ["A It is the largest in the UK.", "B It has a long and varied history.", "C It attracts world-famous performers."], "acceptedAnswers": ["B"] },
                    { "id": 22, "prompt": "Holly and her tutor agree that festival organisers must focus on", "type": "choice", "options": ["A sustainability.", "B ticket pricing.", "C security."], "acceptedAnswers": ["A"] },
                    { "id": 23, "prompt": "What aspect of Glastonbury does Holly find most remarkable?", "type": "choice", "options": ["A charitable donations", "B musical variety", "C youth participation"], "acceptedAnswers": ["A"] },
                    { "id": 24, "prompt": "What was the main finding of the local survey?", "type": "choice", "options": ["A noise disruption", "B economic benefit", "C traffic congestion"], "acceptedAnswers": ["B"] },
                    { "id": 25, "prompt": "Waste management", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["C"] },
                    { "id": 26, "prompt": "Local trade", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["A"] },
                    { "id": 27, "prompt": "Carbon footprint", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["D"] },
                    { "id": 28, "prompt": "Budgeting", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["B"] },
                    { "id": 29, "prompt": "Performers", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["F"] },
                    { "id": 30, "prompt": "Traditional crafts", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G", "H"], "acceptedAnswers": ["H"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Bird Migration Research",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.",
                "questions": [
                    { "id": 31, "prompt": "Feed on worms in the", "fieldPrefix": "Feed on worms in the ", "type": "text", "acceptedAnswers": ["mud"] },
                    { "id": 32, "prompt": "Special waterproof", "fieldPrefix": "Special waterproof ", "type": "text", "acceptedAnswers": ["feathers", "feather"] },
                    { "id": 33, "prompt": "Wings have an aerodynamic", "fieldPrefix": "Wings have an aerodynamic ", "type": "text", "acceptedAnswers": ["shape"] },
                    { "id": 34, "prompt": "Navigate using the sun, stars and the", "fieldPrefix": "Navigate using the sun, stars and the ", "type": "text", "acceptedAnswers": ["moon"] },
                    { "id": 35, "prompt": "Geese stretch out their", "fieldPrefix": "Geese stretch out their ", "type": "text", "acceptedAnswers": ["neck"] },
                    { "id": 36, "prompt": "Tracking has provided valuable", "fieldPrefix": "Tracking has provided valuable ", "type": "text", "acceptedAnswers": ["evidence"] },
                    { "id": 37, "prompt": "Migrating birds fly to specific winter", "fieldPrefix": "Migrating birds fly to specific winter ", "type": "text", "acceptedAnswers": ["destinations", "destination"] },
                    { "id": 38, "prompt": "Cross vast mountains and", "fieldPrefix": "Cross vast mountains and ", "type": "text", "acceptedAnswers": ["oceans", "ocean"] },
                    { "id": 39, "prompt": "Stop at rest areas for feeding and", "fieldPrefix": "Stop at rest areas for feeding and ", "type": "text", "acceptedAnswers": ["recovery"] },
                    { "id": 40, "prompt": "Data collected will form a global migration", "fieldPrefix": "Data collected will form a global migration ", "type": "text", "acceptedAnswers": ["atlas"] }
                ]
            }
        }
    }

def get_c17_test_4():
    return {
        "id": "c17-test-4",
        "series": 17,
        "testNumber": 4,
        "title": "Cambridge IELTS 17 - Practice Test 4",
        "bookTitle": "Cambridge IELTS 17 Academic",
        "audioBookmarks": { "1": 0, "2": 390, "3": 820, "4": 1255 },
        "parts": {
            "1": {
                "part": 1,
                "title": "Apartment Maintenance and Cleaning",
                "instructions": "Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 1, "prompt": "Sweep and mop all", "fieldPrefix": "Sweep and mop all ", "type": "text", "acceptedAnswers": ["floors", "floor"] },
                    { "id": 2, "prompt": "Defrost and wipe out the", "fieldPrefix": "Defrost and wipe out the ", "type": "text", "acceptedAnswers": ["fridge", "refrigerator"] },
                    { "id": 3, "prompt": "Wash and iron all", "fieldPrefix": "Wash and iron all ", "type": "text", "acceptedAnswers": ["shirts", "shirt"] },
                    { "id": 4, "prompt": "Clean inside of all", "fieldPrefix": "Clean inside of all ", "type": "text", "acceptedAnswers": ["windows", "window"] },
                    { "id": 5, "prompt": "Clear leaves off the", "fieldPrefix": "Clear leaves off the ", "type": "text", "acceptedAnswers": ["balcony"] },
                    { "id": 6, "prompt": "Call [ ... ] about faulty wiring", "fieldPrefix": "Call ", "fieldSuffix": " about faulty wiring", "type": "text", "acceptedAnswers": ["electrician"] },
                    { "id": 7, "prompt": "Check ventilation unit for buildup of", "fieldPrefix": "Check ventilation unit for buildup of ", "type": "text", "acceptedAnswers": ["dust"] },
                    { "id": 8, "prompt": "Report lost key fob to the", "fieldPrefix": "Report lost key fob to the ", "type": "text", "acceptedAnswers": ["police"] },
                    { "id": 9, "prompt": "Attend fire safety", "fieldPrefix": "Attend fire safety ", "type": "text", "acceptedAnswers": ["training"] },
                    { "id": 10, "prompt": "Leave online tenant", "fieldPrefix": "Leave online tenant ", "type": "text", "acceptedAnswers": ["review"] }
                ]
            },
            "2": {
                "part": 2,
                "title": "Staff Retention in Hospitality Industry",
                "instructions": "Questions 11–14: Choose the correct letter. Questions 15–20: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "improved staff meal quality" },
                    { "key": "B", "label": "flexible scheduling" },
                    { "key": "C", "label": "career progression pathway" },
                    { "key": "D", "label": "childcare assistance" },
                    { "key": "E", "label": "wellness program" }
                ],
                "questions": [
                    { "id": 11, "prompt": "Why was the hospitality survey conducted?", "type": "choice", "options": ["A high staff turnover rate", "B decreasing customer satisfaction", "C rising operational costs"], "acceptedAnswers": ["A"] },
                    { "id": 12, "prompt": "What did junior employees report as their top grievance?", "type": "choice", "options": ["A lack of training", "B long shift hours", "C low starting pay"], "acceptedAnswers": ["A"] },
                    { "id": 13, "prompt": "Managers observed that motivation improved most with", "type": "choice", "options": ["A positive recognition", "B performance bonuses", "C modern facilities"], "acceptedAnswers": ["A"] },
                    { "id": 14, "prompt": "What was the result of cross-department shadowing?", "type": "choice", "options": ["A greater overtime work", "B increased conflict", "C better team cooperation"], "acceptedAnswers": ["C"] },
                    { "id": 15, "prompt": "Grand Central Hotel", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["A"] },
                    { "id": 16, "prompt": "Parkview Suites", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["C"] },
                    { "id": 17, "prompt": "Ocean Breeze Resort", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["B"] },
                    { "id": 18, "prompt": "Mountain Lodge", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["C"] },
                    { "id": 19, "prompt": "Riverside Inn", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["B"] },
                    { "id": 20, "prompt": "Harbor View Hotel", "type": "matching", "options": ["A", "B", "C", "D", "E"], "acceptedAnswers": ["A"] }
                ]
            },
            "3": {
                "part": 3,
                "title": "Industrial Melanism and Peppered Moths",
                "instructions": "Questions 21–24: Choose TWO letters. Questions 25–30: Choose from the box.",
                "boxOptions": [
                    { "key": "A", "label": "predation pressure" },
                    { "key": "B", "label": "tree bark lichen" },
                    { "key": "C", "label": "pollution levels" },
                    { "key": "D", "label": "genetic mutation rate" },
                    { "key": "E", "label": "camouflage effectiveness" },
                    { "key": "F", "label": "regional weather" },
                    { "key": "G", "label": "scientific methodology" }
                ],
                "questions": [
                    { "id": 21, "prompt": "TWO factors researchers initially overlooked (Selection 1 of 2)", "type": "choice", "options": ["A day-time roosting habits", "B larval food source", "C ultraviolet light vision of birds", "D flight speed", "E chemical pheromones"], "acceptedAnswers": ["C", "E"] },
                    { "id": 22, "prompt": "TWO factors researchers initially overlooked (Selection 2 of 2)", "type": "choice", "options": ["A day-time roosting habits", "B larval food source", "C ultraviolet light vision of birds", "D flight speed", "E chemical pheromones"], "acceptedAnswers": ["C", "E"] },
                    { "id": 23, "prompt": "TWO key outcomes of the Clean Air Acts (Selection 1 of 2)", "type": "choice", "options": ["A rapid recovery of typical pale moths", "B total extinction of melanic form", "C shift in bird population", "D resurgence of tree lichen", "E increase in moth body size"], "acceptedAnswers": ["A", "D"] },
                    { "id": 24, "prompt": "TWO key outcomes of the Clean Air Acts (Selection 2 of 2)", "type": "choice", "options": ["A rapid recovery of typical pale moths", "B total extinction of melanic form", "C shift in bird population", "D resurgence of tree lichen", "E increase in moth body size"], "acceptedAnswers": ["A", "D"] },
                    { "id": 25, "prompt": "Lichen abundance", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["B"] },
                    { "id": 26, "prompt": "Soot deposition", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["F"] },
                    { "id": 27, "prompt": "Bird hunting efficiency", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["A"] },
                    { "id": 28, "prompt": "Color alleles", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["D"] },
                    { "id": 29, "prompt": "Airborne particulates", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["C"] },
                    { "id": 30, "prompt": "Kettlewell's experiments", "type": "matching", "options": ["A", "B", "C", "D", "E", "F", "G"], "acceptedAnswers": ["G"] }
                ]
            },
            "4": {
                "part": 4,
                "title": "Geothermal Energy and Hot Springs",
                "instructions": "Questions 31–40: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
                "questions": [
                    { "id": 31, "prompt": "Algae create brilliant [ ... ] colors", "fieldPrefix": "Algae create brilliant ", "fieldSuffix": " colors", "type": "text", "acceptedAnswers": ["golden"] },
                    { "id": 32, "prompt": "Ecosystem remains balanced and", "fieldPrefix": "Ecosystem remains balanced and ", "type": "text", "acceptedAnswers": ["healthy"] },
                    { "id": 33, "prompt": "Helps moderate regional micro", "fieldPrefix": "Helps moderate regional micro ", "type": "text", "acceptedAnswers": ["climate"] },
                    { "id": 34, "prompt": "Water filters through porous volcanic", "fieldPrefix": "Water filters through porous volcanic ", "type": "text", "acceptedAnswers": ["rocks", "rock"] },
                    { "id": 35, "prompt": "Spring pool [ ... ] exceeds 40 meters", "fieldPrefix": "Spring pool ", "fieldSuffix": " exceeds 40 meters", "type": "text", "acceptedAnswers": ["diameter"] },
                    { "id": 36, "prompt": "Fed through a narrow volcanic", "fieldPrefix": "Fed through a narrow volcanic ", "type": "text", "acceptedAnswers": ["tube"] },
                    { "id": 37, "prompt": "Historic uses included smelting and", "fieldPrefix": "Historic uses included smelting and ", "type": "text", "acceptedAnswers": ["fire"] },
                    { "id": 38, "prompt": "Geothermal turbines driven by pressurized", "fieldPrefix": "Geothermal turbines driven by pressurized ", "type": "text", "acceptedAnswers": ["steam"] },
                    { "id": 39, "prompt": "Water appears milky and", "fieldPrefix": "Water appears milky and ", "type": "text", "acceptedAnswers": ["cloudy"] },
                    { "id": 40, "prompt": "Mineral content per [ ... ] of geothermal fluid", "fieldPrefix": "Mineral content per ", "fieldSuffix": " of geothermal fluid", "type": "text", "acceptedAnswers": ["litre", "liter"] }
                ]
            }
        }
    }

print("Loaded all C17 tests 1 to 4")
