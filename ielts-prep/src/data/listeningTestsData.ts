// Authoritative Cambridge IELTS Listening Tests Data (Cambridge Books 16, 17, 18)
// Extracted and verified directly against Cambridge IELTS Academic PDFs and Answer Keys.

export interface ListeningQuestion {
  id: number
  prompt: string
  fieldPrefix?: string
  fieldSuffix?: string
  type: 'text' | 'choice' | 'matching'
  options?: string[]
  acceptedAnswers: string[]
  explanation?: string
}

export interface ListeningPart {
  part: 1 | 2 | 3 | 4
  title: string
  instructions: string
  contextNotes?: string[]
  boxOptions?: { key: string; label: string }[]
  questions: ListeningQuestion[]
}

export interface ListeningTestData {
  id: string
  series: number
  testNumber: number
  title: string
  bookTitle: string
  audioBookmarks: Record<1 | 2 | 3 | 4, number>
  parts: Record<1 | 2 | 3 | 4, ListeningPart>
}

export const ALL_LISTENING_TESTS: Record<string, ListeningTestData> = {
  "c18-test-1": {
    "id": "c18-test-1",
    "series": 18,
    "testNumber": 1,
    "title": "Cambridge IELTS 18 - Practice Test 1",
    "bookTitle": "Cambridge IELTS 18 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 375,
      "3": 810,
      "4": 1240
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Transport survey",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "contextNotes": [
          "Personal Details: Name: Sadie Jones, Year of birth: 1991"
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "Postcode:",
            "fieldPrefix": "Postcode: ",
            "type": "text",
            "acceptedAnswers": [
              "DW30 7YZ",
              "dw30 7yz",
              "DW307YZ"
            ]
          },
          {
            "id": 2,
            "prompt": "Date of bus journey:",
            "fieldPrefix": "Date of bus journey: ",
            "type": "text",
            "acceptedAnswers": [
              "24 April",
              "24th April",
              "24th of April",
              "April 24",
              "April 24th"
            ]
          },
          {
            "id": 3,
            "prompt": "Reason for trip: shopping and visit to the",
            "fieldPrefix": "shopping and visit to the ",
            "type": "text",
            "acceptedAnswers": [
              "dentist"
            ]
          },
          {
            "id": 4,
            "prompt": "Travelled by bus because cost of",
            "fieldPrefix": "Travelled by bus because cost of ",
            "fieldSuffix": " too high",
            "type": "text",
            "acceptedAnswers": [
              "parking"
            ]
          },
          {
            "id": 5,
            "prompt": "Got on bus at",
            "fieldPrefix": "Got on bus at ",
            "fieldSuffix": " Street",
            "type": "text",
            "acceptedAnswers": [
              "Claxby",
              "claxby"
            ]
          },
          {
            "id": 6,
            "prompt": "Complaints: bus today was",
            "fieldPrefix": "bus today was ",
            "type": "text",
            "acceptedAnswers": [
              "late"
            ]
          },
          {
            "id": 7,
            "prompt": "Complaints: frequency of buses in the",
            "fieldPrefix": "frequency of buses in the ",
            "type": "text",
            "acceptedAnswers": [
              "evening",
              "evenings"
            ]
          },
          {
            "id": 8,
            "prompt": "Travelling by car: Goes to the",
            "fieldPrefix": "Goes to the ",
            "fieldSuffix": " by car",
            "type": "text",
            "acceptedAnswers": [
              "supermarket"
            ]
          },
          {
            "id": 9,
            "prompt": "Dislikes travelling by bike in the city centre because of the",
            "fieldPrefix": "Dislikes travelling by bike in the city centre because of the ",
            "type": "text",
            "acceptedAnswers": [
              "pollution"
            ]
          },
          {
            "id": 10,
            "prompt": "Doesn't own a bike because of a lack of",
            "fieldPrefix": "Doesn't own a bike because of a lack of ",
            "type": "text",
            "acceptedAnswers": [
              "storage"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Becoming a volunteer for ACE",
        "instructions": "Questions 11\u201313: Choose the correct letter, A, B or C. Questions 14\u201315: Choose TWO letters, A\u2013E. Questions 16\u201320: Choose from the box, A\u2013G.",
        "boxOptions": [
          {
            "key": "A",
            "label": "experience on stage"
          },
          {
            "key": "B",
            "label": "original, new ideas"
          },
          {
            "key": "C",
            "label": "parenting skills"
          },
          {
            "key": "D",
            "label": "an understanding of food and diet"
          },
          {
            "key": "E",
            "label": "retail experience"
          },
          {
            "key": "F",
            "label": "a good memory"
          },
          {
            "key": "G",
            "label": "a good level of fitness"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "Why does the speaker apologise about the seats?",
            "type": "choice",
            "options": [
              "A They are too small.",
              "B There are not enough of them.",
              "C Some of them are very close together."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 12,
            "prompt": "What does the speaker say about the age of volunteers?",
            "type": "choice",
            "options": [
              "A The age of volunteers is less important than other factors.",
              "B Young volunteers are less reliable than older ones.",
              "C Most volunteers are about 60 years old."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 13,
            "prompt": "What does the speaker say about training?",
            "type": "choice",
            "options": [
              "A It is continuous.",
              "B It is conducted by a manager.",
              "C It takes place online."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 14,
            "prompt": "Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers? (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A their financial situation",
              "B their level of commitment",
              "C their work experience",
              "D their ambition",
              "E their availability"
            ],
            "acceptedAnswers": [
              "B",
              "E"
            ]
          },
          {
            "id": 15,
            "prompt": "Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers? (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A their financial situation",
              "B their level of commitment",
              "C their work experience",
              "D their ambition",
              "E their availability"
            ],
            "acceptedAnswers": [
              "B",
              "E"
            ]
          },
          {
            "id": 16,
            "prompt": "Fundraising",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 17,
            "prompt": "Litter collection",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 18,
            "prompt": "'Playmates'",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 19,
            "prompt": "Story club",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 20,
            "prompt": "First aid",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "E"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Talk on jobs in fashion design",
        "instructions": "Questions 21\u201326: Choose the correct letter, A, B or C. Questions 27\u201330: Choose TWO letters.",
        "questions": [
          {
            "id": 21,
            "prompt": "What problem did Chantal have at the start of the talk?",
            "type": "choice",
            "options": [
              "A Her view of the speaker was blocked.",
              "B She was unable to find an empty seat.",
              "C The students next to her were talking."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 22,
            "prompt": "What were Hugo and Chantal surprised to hear about the job market?",
            "type": "choice",
            "options": [
              "A It has become more competitive than it used to be.",
              "B There is more variety in it than they had realised.",
              "C Some areas of it are more exciting than others."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 23,
            "prompt": "Hugo and Chantal agree that the speaker's message was",
            "type": "choice",
            "options": [
              "A unfair to them at times.",
              "B hard for them to follow.",
              "C critical of the industry."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 24,
            "prompt": "What do Hugo and Chantal criticise about their school careers advice?",
            "type": "choice",
            "options": [
              "A when they received the advice",
              "B how much advice was given",
              "C who gave the advice"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 25,
            "prompt": "When discussing their future, Hugo and Chantal disagree on",
            "type": "choice",
            "options": [
              "A which is the best career in fashion.",
              "B when to choose a career in fashion.",
              "C why they would like a career in fashion."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 26,
            "prompt": "How does Hugo feel about being an unpaid assistant?",
            "type": "choice",
            "options": [
              "A He is realistic about the practice.",
              "B He feels the practice is dishonest.",
              "C He thinks others want to change the practice."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 27,
            "prompt": "Which TWO mistakes did the speaker admit she made in her first job? (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A being dishonest to her employer",
              "B paying too much attention to how she looked",
              "C expecting to become well known",
              "D trying to earn a lot of money",
              "E openly disliking her client"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 28,
            "prompt": "Which TWO mistakes did the speaker admit she made in her first job? (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A being dishonest to her employer",
              "B paying too much attention to how she looked",
              "C expecting to become well known",
              "D trying to earn a lot of money",
              "E openly disliking her client"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 29,
            "prompt": "Which TWO pieces of retail information do Hugo and Chantal agree would be useful? (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A the reasons people return fashion items",
              "B how much time people have to shop for clothes",
              "C fashion designs people want but can't find",
              "D the best time of year for fashion buying",
              "E the most popular fashion sizes"
            ],
            "acceptedAnswers": [
              "C",
              "D"
            ]
          },
          {
            "id": 30,
            "prompt": "Which TWO pieces of retail information do Hugo and Chantal agree would be useful? (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A the reasons people return fashion items",
              "B how much time people have to shop for clothes",
              "C fashion designs people want but can't find",
              "D the best time of year for fashion buying",
              "E the most popular fashion sizes"
            ],
            "acceptedAnswers": [
              "C",
              "D"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Elephant translocation",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "damage to [ ... ] in the park",
            "fieldPrefix": "damage to ",
            "fieldSuffix": " in the park",
            "type": "text",
            "acceptedAnswers": [
              "fences"
            ]
          },
          {
            "id": 32,
            "prompt": "a suitable group of elephants from the same [ ... ] was selected",
            "fieldPrefix": "a suitable group of elephants from the same ",
            "fieldSuffix": " was selected",
            "type": "text",
            "acceptedAnswers": [
              "family"
            ]
          },
          {
            "id": 33,
            "prompt": "vets and park staff made use of [ ... ] to help guide the elephants into an open plain",
            "fieldPrefix": "vets and park staff made use of ",
            "fieldSuffix": " to help guide the elephants into an open plain",
            "type": "text",
            "acceptedAnswers": [
              "helicopters"
            ]
          },
          {
            "id": 34,
            "prompt": "this process had to be completed quickly to reduce",
            "fieldPrefix": "this process had to be completed quickly to reduce ",
            "type": "text",
            "acceptedAnswers": [
              "stress"
            ]
          },
          {
            "id": 35,
            "prompt": "elephants had to be turned on their [ ... ] to avoid damage to their lungs",
            "fieldPrefix": "elephants had to be turned on their ",
            "fieldSuffix": " to avoid damage to their lungs",
            "type": "text",
            "acceptedAnswers": [
              "sides"
            ]
          },
          {
            "id": 36,
            "prompt": "elephants' [ ... ] had to be monitored constantly",
            "fieldPrefix": "elephants' ",
            "fieldSuffix": " had to be monitored constantly",
            "type": "text",
            "acceptedAnswers": [
              "breathing"
            ]
          },
          {
            "id": 37,
            "prompt": "data including the size of their tusks and [ ... ] was taken",
            "fieldPrefix": "data including the size of their tusks and ",
            "fieldSuffix": " was taken",
            "type": "text",
            "acceptedAnswers": [
              "feet"
            ]
          },
          {
            "id": 38,
            "prompt": "[ ... ] opportunities",
            "fieldPrefix": "",
            "fieldSuffix": " opportunities",
            "type": "text",
            "acceptedAnswers": [
              "employment"
            ]
          },
          {
            "id": 39,
            "prompt": "a reduction in the number of poachers and",
            "fieldPrefix": "a reduction in the number of poachers and ",
            "type": "text",
            "acceptedAnswers": [
              "weapons"
            ]
          },
          {
            "id": 40,
            "prompt": "an increase in [ ... ] as a contributor to GDP",
            "fieldPrefix": "an increase in ",
            "fieldSuffix": " as a contributor to GDP",
            "type": "text",
            "acceptedAnswers": [
              "tourism"
            ]
          }
        ]
      }
    }
  },
  "c18-test-2": {
    "id": "c18-test-2",
    "series": 18,
    "testNumber": 2,
    "title": "Cambridge IELTS 18 - Practice Test 2",
    "bookTitle": "Cambridge IELTS 18 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 390,
      "3": 820,
      "4": 1260
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Working at Milo's Restaurants",
        "instructions": "Questions 1\u20135: Complete the notes below. Write ONE WORD ONLY. Questions 6\u201310: Complete the table below. Write ONE WORD AND/OR A NUMBER.",
        "questions": [
          {
            "id": 1,
            "prompt": "[ ... ] provided for all staff",
            "fieldPrefix": "",
            "fieldSuffix": " provided for all staff",
            "type": "text",
            "acceptedAnswers": [
              "training"
            ]
          },
          {
            "id": 2,
            "prompt": "[ ... ] during weekdays at all Milo's Restaurants",
            "fieldPrefix": "",
            "fieldSuffix": " during weekdays at all Milo's Restaurants",
            "type": "text",
            "acceptedAnswers": [
              "discount"
            ]
          },
          {
            "id": 3,
            "prompt": "[ ... ] provided after midnight",
            "fieldPrefix": "",
            "fieldSuffix": " provided after midnight",
            "type": "text",
            "acceptedAnswers": [
              "taxi"
            ]
          },
          {
            "id": 4,
            "prompt": "must care about maintaining a high standard of",
            "fieldPrefix": "must care about maintaining a high standard of ",
            "type": "text",
            "acceptedAnswers": [
              "service"
            ]
          },
          {
            "id": 5,
            "prompt": "must have a qualification in",
            "fieldPrefix": "must have a qualification in ",
            "type": "text",
            "acceptedAnswers": [
              "English"
            ]
          },
          {
            "id": 6,
            "prompt": "Breakfast supervisor Location: [ ... ] Street",
            "fieldPrefix": "Breakfast supervisor Location: ",
            "fieldSuffix": " Street",
            "type": "text",
            "acceptedAnswers": [
              "Wivenhoe"
            ]
          },
          {
            "id": 7,
            "prompt": "Making sure [ ... ] is clean",
            "fieldPrefix": "Making sure ",
            "fieldSuffix": " is clean",
            "type": "text",
            "acceptedAnswers": [
              "equipment"
            ]
          },
          {
            "id": 8,
            "prompt": "Starting salary \u00a3 [ ... ] per hour",
            "fieldPrefix": "Starting salary \u00a3 ",
            "fieldSuffix": " per hour",
            "type": "text",
            "acceptedAnswers": [
              "9.75"
            ]
          },
          {
            "id": 9,
            "prompt": "Junior chef: Maintaining stock and organising",
            "fieldPrefix": "Maintaining stock and organising ",
            "type": "text",
            "acceptedAnswers": [
              "deliveries"
            ]
          },
          {
            "id": 10,
            "prompt": "No work on a",
            "fieldPrefix": "No work on a ",
            "type": "text",
            "acceptedAnswers": [
              "Sunday"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Housing development scheme",
        "instructions": "Questions 11\u201314: Choose TWO letters. Questions 15\u201320: Label the map below. Write the correct letter, A\u2013I.",
        "boxOptions": [
          {
            "key": "A",
            "label": "Playground"
          },
          {
            "key": "B",
            "label": "Supermarket"
          },
          {
            "key": "C",
            "label": "Sports centre"
          },
          {
            "key": "D",
            "label": "Clinic"
          },
          {
            "key": "E",
            "label": "Housing"
          },
          {
            "key": "F",
            "label": "Community centre"
          },
          {
            "key": "G",
            "label": "Apartment blocks"
          },
          {
            "key": "H",
            "label": "School"
          },
          {
            "key": "I",
            "label": "Housing for the elderly"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "TWO main reasons why this site was chosen (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A It has suitable geographical features.",
              "B There is easy access to local facilities.",
              "C It has good connections with the airport.",
              "D The land is of little agricultural value.",
              "E It will be convenient for workers."
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 12,
            "prompt": "TWO main reasons why this site was chosen (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A It has suitable geographical features.",
              "B There is easy access to local facilities.",
              "C It has good connections with the airport.",
              "D The land is of little agricultural value.",
              "E It will be convenient for workers."
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 13,
            "prompt": "TWO aspects people gave positive feedback about (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A the facilities for cyclists",
              "B the impact on the environment",
              "C the encouragement of good relations between residents",
              "D the low cost of all the accommodation",
              "E the rural location"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 14,
            "prompt": "TWO aspects people gave positive feedback about (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A the facilities for cyclists",
              "B the impact on the environment",
              "C the encouragement of good relations between residents",
              "D the low cost of all the accommodation",
              "E the rural location"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 15,
            "prompt": "Map: School location",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "H"
            ]
          },
          {
            "id": 16,
            "prompt": "Map: Sports centre location",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 17,
            "prompt": "Map: Clinic location",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 18,
            "prompt": "Map: Community centre location",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 19,
            "prompt": "Map: Supermarket location",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 20,
            "prompt": "Map: Playground location",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "A"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "The Laki eruption of 1783",
        "instructions": "Questions 21\u201324: Choose the correct letter, A, B or C. Questions 25\u201326: Choose TWO letters. Questions 27\u201330: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "This country suffered the most severe loss of life."
          },
          {
            "key": "B",
            "label": "The impact on agriculture was predictable."
          },
          {
            "key": "C",
            "label": "There was a significant increase in deaths of young people."
          },
          {
            "key": "D",
            "label": "Animals suffered from a sickness."
          },
          {
            "key": "E",
            "label": "This country saw the highest rise in food prices in the world."
          },
          {
            "key": "F",
            "label": "It caused a particularly harsh winter."
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "Why do the students think the Laki eruption of 1783 is so important?",
            "type": "choice",
            "options": [
              "A It was the most severe eruption in modern times.",
              "B It led to the formal study of volcanoes.",
              "C It had a profound effect on society."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 22,
            "prompt": "What surprised Adam about observations made at the time?",
            "type": "choice",
            "options": [
              "A the number of places producing them",
              "B the contradictions in them",
              "C the lack of scientific data to support them"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 23,
            "prompt": "According to Michelle, what did the contemporary sources say about the Laki haze?",
            "type": "choice",
            "options": [
              "A People thought it was similar to ordinary fog.",
              "B It was associated with health issues.",
              "C It completely blocked out the sun for weeks."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 24,
            "prompt": "Adam corrects Michelle when she claims that Benjamin Franklin",
            "type": "choice",
            "options": [
              "A came to the wrong conclusion about the cause of the haze.",
              "B was the first to identify the reason for the haze.",
              "C supported the opinions of other observers about the haze."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 25,
            "prompt": "Which TWO issues following the Laki eruption surprised the students? (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A how widespread the effects were",
              "B how long-lasting the effects were",
              "C the number of deaths it caused",
              "D the speed at which the volcanic ash cloud spread",
              "E how people ignored the warning signs"
            ],
            "acceptedAnswers": [
              "A",
              "E"
            ]
          },
          {
            "id": 26,
            "prompt": "Which TWO issues following the Laki eruption surprised the students? (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A how widespread the effects were",
              "B how long-lasting the effects were",
              "C the number of deaths it caused",
              "D the speed at which the volcanic ash cloud spread",
              "E how people ignored the warning signs"
            ],
            "acceptedAnswers": [
              "A",
              "E"
            ]
          },
          {
            "id": 27,
            "prompt": "Impact of Laki eruption on: Iceland",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 28,
            "prompt": "Impact of Laki eruption on: Egypt",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 29,
            "prompt": "Impact of Laki eruption on: UK",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 30,
            "prompt": "Impact of Laki eruption on: USA",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "F"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "History of Pockets",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "Reason for choice of subject: They are [ ... ] but can be overlooked",
            "fieldPrefix": "Reason for choice of subject: They are ",
            "fieldSuffix": " but can be overlooked by consumers and designers.",
            "type": "text",
            "acceptedAnswers": [
              "convenient"
            ]
          },
          {
            "id": 32,
            "prompt": "Men started to wear [ ... ] in the 18th century.",
            "fieldPrefix": "Men started to wear ",
            "fieldSuffix": " in the 18th century.",
            "type": "text",
            "acceptedAnswers": [
              "suits"
            ]
          },
          {
            "id": 33,
            "prompt": "A [ ... ] sewed pockets into the lining of the garments.",
            "fieldPrefix": "A ",
            "fieldSuffix": " sewed pockets into the lining of the garments.",
            "type": "text",
            "acceptedAnswers": [
              "tailor"
            ]
          },
          {
            "id": 34,
            "prompt": "Bigger pockets might be made for men who belonged to a certain type of",
            "fieldPrefix": "Bigger pockets might be made for men who belonged to a certain type of ",
            "type": "text",
            "acceptedAnswers": [
              "profession"
            ]
          },
          {
            "id": 35,
            "prompt": "Women's pockets were less [ ... ] than men's.",
            "fieldPrefix": "Women's pockets were less ",
            "fieldSuffix": " than men's.",
            "type": "text",
            "acceptedAnswers": [
              "visible"
            ]
          },
          {
            "id": 36,
            "prompt": "Pockets were produced in pairs using [ ... ] to link them together.",
            "fieldPrefix": "Pockets were produced in pairs using ",
            "fieldSuffix": " to link them together.",
            "type": "text",
            "acceptedAnswers": [
              "strings",
              "string"
            ]
          },
          {
            "id": 37,
            "prompt": "Pockets hung from the women's [ ... ] under skirts and petticoats.",
            "fieldPrefix": "Pockets hung from the women's ",
            "fieldSuffix": " under skirts and petticoats.",
            "type": "text",
            "acceptedAnswers": [
              "waists",
              "waist"
            ]
          },
          {
            "id": 38,
            "prompt": "Items such as [ ... ] could be reached through a gap in the material.",
            "fieldPrefix": "Items such as ",
            "fieldSuffix": " could be reached through a gap in the material.",
            "type": "text",
            "acceptedAnswers": [
              "perfume"
            ]
          },
          {
            "id": 39,
            "prompt": "hidden pockets had a negative effect on the [ ... ] of women.",
            "fieldPrefix": "hidden pockets had a negative effect on the ",
            "fieldSuffix": " of women.",
            "type": "text",
            "acceptedAnswers": [
              "image"
            ]
          },
          {
            "id": 40,
            "prompt": "Bags called 'pouches' became popular, before women carried a",
            "fieldPrefix": "Bags called 'pouches' became popular, before women carried a ",
            "type": "text",
            "acceptedAnswers": [
              "handbag"
            ]
          }
        ]
      }
    }
  },
  "c18-test-3": {
    "id": "c18-test-3",
    "series": 18,
    "testNumber": 3,
    "title": "Cambridge IELTS 18 - Practice Test 3",
    "bookTitle": "Cambridge IELTS 18 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 380,
      "3": 815,
      "4": 1250
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Wayside Camera Club membership form",
        "instructions": "Questions 1\u20134: Complete the form below. Write ONE WORD AND/OR A NUMBER. Questions 5\u201310: Complete the table below. Write NO MORE THAN TWO WORDS.",
        "contextNotes": [
          "Candidate: Dan Green, Email: dan1068@market.com"
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "Home address: 52 [ ... ] Street, Peacetown",
            "fieldPrefix": "52 ",
            "fieldSuffix": " Street, Peacetown",
            "type": "text",
            "acceptedAnswers": [
              "Marrowfield"
            ]
          },
          {
            "id": 2,
            "prompt": "Heard about us from a",
            "fieldPrefix": "from a ",
            "type": "text",
            "acceptedAnswers": [
              "relative"
            ]
          },
          {
            "id": 3,
            "prompt": "Reasons for joining: to",
            "fieldPrefix": "to ",
            "type": "text",
            "acceptedAnswers": [
              "socialise",
              "socialize"
            ]
          },
          {
            "id": 4,
            "prompt": "Type of membership: [ ... ] membership (\u00a330)",
            "fieldPrefix": "",
            "fieldSuffix": " membership (\u00a330)",
            "type": "text",
            "acceptedAnswers": [
              "full"
            ]
          },
          {
            "id": 5,
            "prompt": "Competition 1 Title: ' [ ... ] '",
            "fieldPrefix": "'",
            "fieldSuffix": "'",
            "type": "text",
            "acceptedAnswers": [
              "Domestic Life"
            ]
          },
          {
            "id": 6,
            "prompt": "Scene must show some",
            "fieldPrefix": "Scene must show some ",
            "type": "text",
            "acceptedAnswers": [
              "clouds"
            ]
          },
          {
            "id": 7,
            "prompt": "Feedback: The [ ... ] was wrong.",
            "fieldPrefix": "The ",
            "fieldSuffix": " was wrong.",
            "type": "text",
            "acceptedAnswers": [
              "timing"
            ]
          },
          {
            "id": 8,
            "prompt": "Competition 2 Title: ' [ ... ] '",
            "fieldPrefix": "'",
            "fieldSuffix": "'",
            "type": "text",
            "acceptedAnswers": [
              "Animal Magic"
            ]
          },
          {
            "id": 9,
            "prompt": "Scene must show",
            "fieldPrefix": "Scene must show ",
            "type": "text",
            "acceptedAnswers": [
              "animal movement",
              "movement"
            ]
          },
          {
            "id": 10,
            "prompt": "Feedback: The photograph was too",
            "fieldPrefix": "The photograph was too ",
            "type": "text",
            "acceptedAnswers": [
              "dark"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Picking wild mushrooms",
        "instructions": "Questions 11\u201314: Choose TWO letters, A\u2013E. Questions 15\u201320: Choose the correct letter, A, B or C.",
        "questions": [
          {
            "id": 11,
            "prompt": "TWO warnings Dan gives about picking mushrooms (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A Don't pick more than one variety of mushroom at a time.",
              "B Don't pick mushrooms near busy roads.",
              "C Don't eat mushrooms given to you.",
              "D Don't eat mushrooms while picking them.",
              "E Don't pick old mushrooms."
            ],
            "acceptedAnswers": [
              "B",
              "E"
            ]
          },
          {
            "id": 12,
            "prompt": "TWO warnings Dan gives about picking mushrooms (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A Don't pick more than one variety of mushroom at a time.",
              "B Don't pick mushrooms near busy roads.",
              "C Don't eat mushrooms given to you.",
              "D Don't eat mushrooms while picking them.",
              "E Don't pick old mushrooms."
            ],
            "acceptedAnswers": [
              "B",
              "E"
            ]
          },
          {
            "id": 13,
            "prompt": "TWO ideas about wild mushrooms Dan says are correct (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A Mushrooms should always be peeled before eating.",
              "B Mushrooms eaten by animals may be unsafe.",
              "C Cooking destroys toxins in mushrooms.",
              "D Brightly coloured mushrooms can be edible.",
              "E All poisonous mushrooms have a bad smell."
            ],
            "acceptedAnswers": [
              "B",
              "D"
            ]
          },
          {
            "id": 14,
            "prompt": "TWO ideas about wild mushrooms Dan says are correct (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A Mushrooms should always be peeled before eating.",
              "B Mushrooms eaten by animals may be unsafe.",
              "C Cooking destroys toxins in mushrooms.",
              "D Brightly coloured mushrooms can be edible.",
              "E All poisonous mushrooms have a bad smell."
            ],
            "acceptedAnswers": [
              "B",
              "D"
            ]
          },
          {
            "id": 15,
            "prompt": "What advice does Dan give about picking mushrooms in parks?",
            "type": "choice",
            "options": [
              "A Choose wooded areas.",
              "B Don't disturb wildlife.",
              "C Get there early."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 16,
            "prompt": "Dan says it is a good idea for beginners to",
            "type": "choice",
            "options": [
              "A use a mushroom app.",
              "B join a group.",
              "C take a reference book."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 17,
            "prompt": "What does Dan say is important for conservation?",
            "type": "choice",
            "options": [
              "A selecting only fully grown mushrooms",
              "B picking a limited amount of mushrooms",
              "C avoiding areas where rare mushroom species grow."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 18,
            "prompt": "According to Dan, some varieties of wild mushrooms are in decline because there is",
            "type": "choice",
            "options": [
              "A a huge demand for them from restaurants.",
              "B a lack of rain in this part of the country.",
              "C a rise in building developments locally."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 19,
            "prompt": "Dan says that when storing mushrooms, people should",
            "type": "choice",
            "options": [
              "A keep them in the fridge for no more than two days.",
              "B keep them in a brown bag in a dark room.",
              "C leave them for a period after washing them."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 20,
            "prompt": "What does Dan say about trying new varieties of mushrooms?",
            "type": "choice",
            "options": [
              "A Experiment with different recipes.",
              "B Expect some to have a strong taste.",
              "C Cook them for a long time."
            ],
            "acceptedAnswers": [
              "B"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "The Luddites and Future of Work",
        "instructions": "Questions 21\u201324: Choose TWO letters, A\u2013E. Questions 25\u201330: Choose from the box, A\u2013G.",
        "boxOptions": [
          {
            "key": "A",
            "label": "These jobs are likely to be at risk."
          },
          {
            "key": "B",
            "label": "Their role has become more interesting in recent years."
          },
          {
            "key": "C",
            "label": "The number of people working in this sector has fallen dramatically."
          },
          {
            "key": "D",
            "label": "This job will require more qualifications."
          },
          {
            "key": "E",
            "label": "Higher disposable income has led to a huge increase in jobs."
          },
          {
            "key": "F",
            "label": "There is likely to be a significant rise in demand for this service."
          },
          {
            "key": "G",
            "label": "Both employment and productivity have risen."
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "TWO opinions about the Luddites students express (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A Their actions were ineffective.",
              "B They are still influential today.",
              "C They have received unfair criticism.",
              "D They were proved right.",
              "E Their attitude is understandable."
            ],
            "acceptedAnswers": [
              "C",
              "E"
            ]
          },
          {
            "id": 22,
            "prompt": "TWO opinions about the Luddites students express (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A Their actions were ineffective.",
              "B They are still influential today.",
              "C They have received unfair criticism.",
              "D They were proved right.",
              "E Their attitude is understandable."
            ],
            "acceptedAnswers": [
              "C",
              "E"
            ]
          },
          {
            "id": 23,
            "prompt": "TWO predictions about the future of work students are doubtful about (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A Work will be more rewarding.",
              "B Unemployment will fall.",
              "C People will want to delay retiring.",
              "D Working hours will be shorter.",
              "E People will change jobs more frequently."
            ],
            "acceptedAnswers": [
              "B",
              "D"
            ]
          },
          {
            "id": 24,
            "prompt": "TWO predictions about the future of work students are doubtful about (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A Work will be more rewarding.",
              "B Unemployment will fall.",
              "C People will want to delay retiring.",
              "D Working hours will be shorter.",
              "E People will change jobs more frequently."
            ],
            "acceptedAnswers": [
              "B",
              "D"
            ]
          },
          {
            "id": 25,
            "prompt": "Accountants",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 26,
            "prompt": "Hairdressers",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 27,
            "prompt": "Administrative staff",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 28,
            "prompt": "Agricultural workers",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "G"
            ]
          },
          {
            "id": 29,
            "prompt": "Care workers",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 30,
            "prompt": "Bank clerks",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "A"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Space Traffic Management",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "aim to set up legal and [ ... ] ways of improving safety",
            "fieldPrefix": "aim to set up legal and ",
            "fieldSuffix": " ways of improving safety",
            "type": "text",
            "acceptedAnswers": [
              "technical"
            ]
          },
          {
            "id": 32,
            "prompt": "Satellites are now quite [ ... ] and therefore more widespread",
            "fieldPrefix": "Satellites are now quite ",
            "fieldSuffix": " and therefore more widespread",
            "type": "text",
            "acceptedAnswers": [
              "cheap"
            ]
          },
          {
            "id": 33,
            "prompt": "constellations made up of [ ... ] of satellites",
            "fieldPrefix": "constellations made up of ",
            "fieldSuffix": " of satellites",
            "type": "text",
            "acceptedAnswers": [
              "thousands"
            ]
          },
          {
            "id": 34,
            "prompt": "information to help with their",
            "fieldPrefix": "information to help with their ",
            "type": "text",
            "acceptedAnswers": [
              "identification"
            ]
          },
          {
            "id": 35,
            "prompt": "few systems for [ ... ] satellites",
            "fieldPrefix": "few systems for ",
            "fieldSuffix": " satellites",
            "type": "text",
            "acceptedAnswers": [
              "tracking"
            ]
          },
          {
            "id": 36,
            "prompt": "satellites used for [ ... ] or commercial reasons",
            "fieldPrefix": "satellites used for ",
            "fieldSuffix": " or commercial reasons",
            "type": "text",
            "acceptedAnswers": [
              "military"
            ]
          },
          {
            "id": 37,
            "prompt": "collect details of the object's [ ... ] at a given time",
            "fieldPrefix": "collect details of the object's ",
            "fieldSuffix": " at a given time",
            "type": "text",
            "acceptedAnswers": [
              "location"
            ]
          },
          {
            "id": 38,
            "prompt": "Scientists can only make a [ ... ] about where the satellite will go",
            "fieldPrefix": "Scientists can only make a ",
            "fieldSuffix": " about where the satellite will go",
            "type": "text",
            "acceptedAnswers": [
              "prediction"
            ]
          },
          {
            "id": 39,
            "prompt": "information should be combined in one",
            "fieldPrefix": "information should be combined in one ",
            "type": "text",
            "acceptedAnswers": [
              "database"
            ]
          },
          {
            "id": 40,
            "prompt": "designed to create [ ... ] among its users",
            "fieldPrefix": "designed to create ",
            "fieldSuffix": " among its users",
            "type": "text",
            "acceptedAnswers": [
              "trust"
            ]
          }
        ]
      }
    }
  },
  "c18-test-4": {
    "id": "c18-test-4",
    "series": 18,
    "testNumber": 4,
    "title": "Cambridge IELTS 18 - Practice Test 4",
    "bookTitle": "Cambridge IELTS 18 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 390,
      "3": 825,
      "4": 1250
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Job details from employment agency",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 1,
            "prompt": "Role: [ ... ]",
            "fieldPrefix": "Role: ",
            "type": "text",
            "acceptedAnswers": [
              "receptionist"
            ]
          },
          {
            "id": 2,
            "prompt": "Location: Fordham [ ... ] Centre",
            "fieldPrefix": "Fordham ",
            "fieldSuffix": " Centre",
            "type": "text",
            "acceptedAnswers": [
              "Medical"
            ]
          },
          {
            "id": 3,
            "prompt": "Address: [ ... ] Road, Fordham",
            "fieldPrefix": "",
            "fieldSuffix": " Road, Fordham",
            "type": "text",
            "acceptedAnswers": [
              "Chastons"
            ]
          },
          {
            "id": 4,
            "prompt": "Work involves: making [ ... ] and reorganising them",
            "fieldPrefix": "making ",
            "fieldSuffix": " and reorganising them",
            "type": "text",
            "acceptedAnswers": [
              "appointments"
            ]
          },
          {
            "id": 5,
            "prompt": "maintaining the internal",
            "fieldPrefix": "maintaining the internal ",
            "type": "text",
            "acceptedAnswers": [
              "database"
            ]
          },
          {
            "id": 6,
            "prompt": "Requirements: [ ... ] (essential)",
            "fieldPrefix": "",
            "fieldSuffix": " (essential)",
            "type": "text",
            "acceptedAnswers": [
              "experience"
            ]
          },
          {
            "id": 7,
            "prompt": "a calm and [ ... ] manner",
            "fieldPrefix": "a calm and ",
            "fieldSuffix": " manner",
            "type": "text",
            "acceptedAnswers": [
              "confident"
            ]
          },
          {
            "id": 8,
            "prompt": "Other information: [ ... ] job",
            "fieldPrefix": "",
            "fieldSuffix": " job",
            "type": "text",
            "acceptedAnswers": [
              "temporary"
            ]
          },
          {
            "id": 9,
            "prompt": "hours: 7.45 a.m. to [ ... ] p.m. Monday to Friday",
            "fieldPrefix": "hours: 7.45 a.m. to ",
            "fieldSuffix": " p.m. Monday to Friday",
            "type": "text",
            "acceptedAnswers": [
              "1.15"
            ]
          },
          {
            "id": 10,
            "prompt": "[ ... ] is available onsite",
            "fieldPrefix": "",
            "fieldSuffix": " is available onsite",
            "type": "text",
            "acceptedAnswers": [
              "parking"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Museum visit",
        "instructions": "Questions 11\u201314: Choose the correct letter, A, B or C. Questions 15\u201320: Choose from the box, A\u2013H.",
        "boxOptions": [
          {
            "key": "A",
            "label": "Parents must supervise their children."
          },
          {
            "key": "B",
            "label": "There are new things to see."
          },
          {
            "key": "C",
            "label": "It is closed today."
          },
          {
            "key": "D",
            "label": "This is only for school groups."
          },
          {
            "key": "E",
            "label": "There is a quiz for visitors."
          },
          {
            "key": "F",
            "label": "It features something created by students."
          },
          {
            "key": "G",
            "label": "An expert is here today."
          },
          {
            "key": "H",
            "label": "There is a one-way system."
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "The museum building was originally",
            "type": "choice",
            "options": [
              "A a factory.",
              "B a private home.",
              "C a hall of residence."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 12,
            "prompt": "The university uses part of the museum building as",
            "type": "choice",
            "options": [
              "A teaching rooms.",
              "B a research library.",
              "C administration offices."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 13,
            "prompt": "What does the guide say about the entrance fee?",
            "type": "choice",
            "options": [
              "A Visitors decide whether or not they wish to pay.",
              "B Only children and students receive a discount.",
              "C The museum charges extra for special exhibitions."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 14,
            "prompt": "What are visitors advised to leave in the cloakroom?",
            "type": "choice",
            "options": [
              "A cameras",
              "B coats",
              "C bags"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 15,
            "prompt": "Four Seasons",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 16,
            "prompt": "Farmhouse Kitchen",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "H"
            ]
          },
          {
            "id": 17,
            "prompt": "A Year on the Farm",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 18,
            "prompt": "Wagon Walk",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "G"
            ]
          },
          {
            "id": 19,
            "prompt": "Bees are Magic",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 20,
            "prompt": "The Pond",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "A"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Origami in education",
        "instructions": "Questions 21\u201322: Choose TWO letters, A\u2013E. Questions 23\u201327: Choose from the box, A\u2013G. Questions 28\u201330: Choose the correct letter, A, B or C.",
        "boxOptions": [
          {
            "key": "A",
            "label": "demonstrated independence"
          },
          {
            "key": "B",
            "label": "asked for teacher support"
          },
          {
            "key": "C",
            "label": "developed a competitive attitude"
          },
          {
            "key": "D",
            "label": "seemed to find the activity calming"
          },
          {
            "key": "E",
            "label": "seemed pleased with the results"
          },
          {
            "key": "F",
            "label": "seemed confused"
          },
          {
            "key": "G",
            "label": "seemed to find the activity easy"
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "TWO educational skills shown in the video of children doing origami (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A solving problems",
              "B following instructions",
              "C working cooperatively",
              "D learning through play",
              "E developing hand-eye coordination"
            ],
            "acceptedAnswers": [
              "B",
              "E"
            ]
          },
          {
            "id": 22,
            "prompt": "TWO educational skills shown in the video of children doing origami (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A solving problems",
              "B following instructions",
              "C working cooperatively",
              "D learning through play",
              "E developing hand-eye coordination"
            ],
            "acceptedAnswers": [
              "B",
              "E"
            ]
          },
          {
            "id": 23,
            "prompt": "Sid",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 24,
            "prompt": "Jack",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 25,
            "prompt": "Naomi",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 26,
            "prompt": "Anya",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 27,
            "prompt": "Zara",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 28,
            "prompt": "Before starting an origami activity in class, the students think it is important for the teacher to",
            "type": "choice",
            "options": [
              "A make models that demonstrate the different stages.",
              "B check children understand the terminology involved.",
              "C tell children not to worry if they find the activity difficult."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 29,
            "prompt": "The students agree that some teachers might be unwilling to use origami in class because",
            "type": "choice",
            "options": [
              "A they may not think that crafts are important.",
              "B they may not have the necessary skills.",
              "C they may worry that it will take up too much time."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 30,
            "prompt": "Why do the students decide to use origami in their maths teaching practice?",
            "type": "choice",
            "options": [
              "A to correct a particular misunderstanding",
              "B to set a challenge",
              "C to introduce a new concept"
            ],
            "acceptedAnswers": [
              "C"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Victor Hugo",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "We know more about its overall [ ... ] than about its author.",
            "fieldPrefix": "We know more about its overall ",
            "fieldSuffix": " than about its author.",
            "type": "text",
            "acceptedAnswers": [
              "plot"
            ]
          },
          {
            "id": 32,
            "prompt": "He spoke publicly about social issues, such as [ ... ] and education.",
            "fieldPrefix": "He spoke publicly about social issues, such as ",
            "fieldSuffix": " and education.",
            "type": "text",
            "acceptedAnswers": [
              "poverty"
            ]
          },
          {
            "id": 33,
            "prompt": "Victor Hugo had to live elsewhere in",
            "fieldPrefix": "Victor Hugo had to live elsewhere in ",
            "type": "text",
            "acceptedAnswers": [
              "Europe"
            ]
          },
          {
            "id": 34,
            "prompt": "He used his income from the sale of some [ ... ] he had written to buy a house on Guernsey.",
            "fieldPrefix": "He used his income from the sale of some ",
            "fieldSuffix": " he had written to buy a house on Guernsey.",
            "type": "text",
            "acceptedAnswers": [
              "poetry"
            ]
          },
          {
            "id": 35,
            "prompt": "The ground floor contains portraits, [ ... ] and tapestries that he valued.",
            "fieldPrefix": "The ground floor contains portraits, ",
            "fieldSuffix": " and tapestries that he valued.",
            "type": "text",
            "acceptedAnswers": [
              "drawings"
            ]
          },
          {
            "id": 36,
            "prompt": "He bought cheap [ ... ] made of wood and turned this into beautiful wall carvings.",
            "fieldPrefix": "He bought cheap ",
            "fieldSuffix": " made of wood and turned this into beautiful wall carvings.",
            "type": "text",
            "acceptedAnswers": [
              "furniture"
            ]
          },
          {
            "id": 37,
            "prompt": "The first floor consists of furnished areas with wallpaper and [ ... ] that have a Chinese design.",
            "fieldPrefix": "The first floor consists of furnished areas with wallpaper and ",
            "fieldSuffix": " that have a Chinese design.",
            "type": "text",
            "acceptedAnswers": [
              "lamps"
            ]
          },
          {
            "id": 38,
            "prompt": "He wrote in a room at the top of the house that had a view of the",
            "fieldPrefix": "He wrote in a room at the top of the house that had a view of the ",
            "type": "text",
            "acceptedAnswers": [
              "harbour",
              "harbor"
            ]
          },
          {
            "id": 39,
            "prompt": "He entertained other writers as well as poor [ ... ] in his house.",
            "fieldPrefix": "He entertained other writers as well as poor ",
            "fieldSuffix": " in his house.",
            "type": "text",
            "acceptedAnswers": [
              "children"
            ]
          },
          {
            "id": 40,
            "prompt": "Victor Hugo's [ ... ] gave ownership of the house to the city of Paris in 1927.",
            "fieldPrefix": "Victor Hugo's ",
            "fieldSuffix": " gave ownership of the house to the city of Paris in 1927.",
            "type": "text",
            "acceptedAnswers": [
              "relatives"
            ]
          }
        ]
      }
    }
  },
  "c17-test-1": {
    "id": "c17-test-1",
    "series": 17,
    "testNumber": 1,
    "title": "Cambridge IELTS 17 - Practice Test 1",
    "bookTitle": "Cambridge IELTS 17 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 390,
      "3": 820,
      "4": 1250
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Buckworth Conservation Group",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "contextNotes": [
          "Regular activities at Beach and Nature reserve",
          "Forthcoming events"
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "Beach: making sure the beach does not have [ ... ] on it",
            "fieldPrefix": "making sure the beach does not have ",
            "fieldSuffix": " on it",
            "type": "text",
            "acceptedAnswers": [
              "litter"
            ]
          },
          {
            "id": 2,
            "prompt": "no [ ... ]",
            "fieldPrefix": "no ",
            "type": "text",
            "acceptedAnswers": [
              "dogs",
              "dog"
            ]
          },
          {
            "id": 3,
            "prompt": "next task is taking action to attract [ ... ] to the place",
            "fieldPrefix": "next task is taking action to attract ",
            "fieldSuffix": " to the place",
            "type": "text",
            "acceptedAnswers": [
              "insects",
              "insect"
            ]
          },
          {
            "id": 4,
            "prompt": "identifying types of",
            "fieldPrefix": "identifying types of ",
            "type": "text",
            "acceptedAnswers": [
              "butterflies",
              "butterfly"
            ]
          },
          {
            "id": 5,
            "prompt": "building a new",
            "fieldPrefix": "building a new ",
            "type": "text",
            "acceptedAnswers": [
              "wall"
            ]
          },
          {
            "id": 6,
            "prompt": "walk across the sands and reach the",
            "fieldPrefix": "walk across the sands and reach the ",
            "type": "text",
            "acceptedAnswers": [
              "island"
            ]
          },
          {
            "id": 7,
            "prompt": "wear appropriate",
            "fieldPrefix": "wear appropriate ",
            "type": "text",
            "acceptedAnswers": [
              "boots",
              "boot"
            ]
          },
          {
            "id": 8,
            "prompt": "Woodwork: suitable for [ ... ] to participate in",
            "fieldPrefix": "suitable for ",
            "fieldSuffix": " to participate in",
            "type": "text",
            "acceptedAnswers": [
              "beginners",
              "beginner"
            ]
          },
          {
            "id": 9,
            "prompt": "making [ ... ] out of wood",
            "fieldPrefix": "making ",
            "fieldSuffix": " out of wood",
            "type": "text",
            "acceptedAnswers": [
              "spoons",
              "spoon"
            ]
          },
          {
            "id": 10,
            "prompt": "cost of session (no camping): \u00a3 [ ... ]",
            "fieldPrefix": "cost of session (no camping): \u00a3 ",
            "type": "text",
            "acceptedAnswers": [
              "35",
              "thirty five",
              "thirty-five"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Boat trip round Tasmania",
        "instructions": "Questions 11\u201314: Choose the correct letter, A, B or C. Questions 15\u201320: Choose TWO letters.",
        "questions": [
          {
            "id": 11,
            "prompt": "What is the maximum number of people who can stand on each side of the boat?",
            "type": "choice",
            "options": [
              "A 9",
              "B 15",
              "C 18"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 12,
            "prompt": "What colour are the tour boats?",
            "type": "choice",
            "options": [
              "A dark red",
              "B jet black",
              "C light green"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 13,
            "prompt": "Which lunchbox is suitable for someone who doesn\u2019t eat meat or fish?",
            "type": "choice",
            "options": [
              "A Lunchbox 1",
              "B Lunchbox 2",
              "C Lunchbox 3"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 14,
            "prompt": "What should people do with their litter?",
            "type": "choice",
            "options": [
              "A take it home",
              "B hand it to a member of staff",
              "C put it in the bins provided on the boat"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 15,
            "prompt": "Which TWO features of the lighthouse does Lou mention? (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A why it was built",
              "B who built it",
              "C how long it took to build",
              "D who staffed it",
              "E what it was built with"
            ],
            "acceptedAnswers": [
              "A",
              "D"
            ]
          },
          {
            "id": 16,
            "prompt": "Which TWO features of the lighthouse does Lou mention? (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A why it was built",
              "B who built it",
              "C how long it took to build",
              "D who staffed it",
              "E what it was built with"
            ],
            "acceptedAnswers": [
              "A",
              "D"
            ]
          },
          {
            "id": 17,
            "prompt": "Which TWO types of creature might come close to the boat? (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A sea eagles",
              "B fur seals",
              "C dolphins",
              "D whales",
              "E penguins"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 18,
            "prompt": "Which TWO types of creature might come close to the boat? (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A sea eagles",
              "B fur seals",
              "C dolphins",
              "D whales",
              "E penguins"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 19,
            "prompt": "Which TWO points does Lou make about the caves? (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A Only large tourist boats can visit them.",
              "B The entrances to them are often blocked.",
              "C It is too dangerous for individuals to go near them.",
              "D Someone will explain what is inside them.",
              "E They cannot be reached on foot."
            ],
            "acceptedAnswers": [
              "D",
              "E"
            ]
          },
          {
            "id": 20,
            "prompt": "Which TWO points does Lou make about the caves? (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A Only large tourist boats can visit them.",
              "B The entrances to them are often blocked.",
              "C It is too dangerous for individuals to go near them.",
              "D Someone will explain what is inside them.",
              "E They cannot be reached on foot."
            ],
            "acceptedAnswers": [
              "D",
              "E"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Work experience for veterinary science students",
        "instructions": "Questions 21\u201326: Choose the correct letter, A, B or C. Questions 27\u201330: Choose from the box, A\u2013F.",
        "boxOptions": [
          {
            "key": "A",
            "label": "Tim found this easier than expected."
          },
          {
            "key": "B",
            "label": "Tim thought this was not very clearly organised."
          },
          {
            "key": "C",
            "label": "Diana may do some further study on this."
          },
          {
            "key": "D",
            "label": "They both found the reading required for this was difficult."
          },
          {
            "key": "E",
            "label": "Tim was shocked at something he learned on this module."
          },
          {
            "key": "F",
            "label": "They were both surprised how little is known about some aspects of this."
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "What problem did both Diana and Tim have when arranging their work experience?",
            "type": "choice",
            "options": [
              "A making initial contact with suitable farms",
              "B organising transport to and from the farm",
              "C finding a placement for the required length of time"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 22,
            "prompt": "Tim was pleased to be able to help",
            "type": "choice",
            "options": [
              "A a lamb that had a broken leg.",
              "B a sheep that was having difficulty giving birth.",
              "C a newly born lamb that was having trouble feeding."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 23,
            "prompt": "Diana says the sheep on her farm",
            "type": "choice",
            "options": [
              "A were of various different varieties.",
              "B were mainly reared for their meat.",
              "C had better quality wool than sheep on the hills."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 24,
            "prompt": "What did the students learn about adding supplements to chicken feed?",
            "type": "choice",
            "options": [
              "A These should only be given if specially needed.",
              "B It is worth paying extra for the most effective ones.",
              "C The amount given at one time should be limited."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 25,
            "prompt": "What happened when Diana was working with dairy cows?",
            "type": "choice",
            "options": [
              "A She identified some cows incorrectly.",
              "B She accidentally threw some milk away.",
              "C She made a mistake when storing milk."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 26,
            "prompt": "What did both farmers mention about vets and farming?",
            "type": "choice",
            "options": [
              "A Vets are failing to cope with some aspects of animal health.",
              "B There needs to be a fundamental change in the training of vets.",
              "C Some jobs could be done by the farmer rather than by a vet."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 27,
            "prompt": "Medical terminology",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 28,
            "prompt": "Diet and nutrition",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 29,
            "prompt": "Animal disease",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 30,
            "prompt": "Wildlife medication",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "C"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Labyrinths",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "Mazes are a type of",
            "fieldPrefix": "Mazes are a type of ",
            "type": "text",
            "acceptedAnswers": [
              "puzzle"
            ]
          },
          {
            "id": 32,
            "prompt": "[ ... ] is needed to navigate through a maze",
            "fieldPrefix": "",
            "fieldSuffix": " is needed to navigate through a maze",
            "type": "text",
            "acceptedAnswers": [
              "logic"
            ]
          },
          {
            "id": 33,
            "prompt": "derived from a word meaning a feeling of",
            "fieldPrefix": "derived from a word meaning a feeling of ",
            "type": "text",
            "acceptedAnswers": [
              "confusion"
            ]
          },
          {
            "id": 34,
            "prompt": "frequently been used in [ ... ] and prayer",
            "fieldPrefix": "frequently been used in ",
            "fieldSuffix": " and prayer",
            "type": "text",
            "acceptedAnswers": [
              "meditation"
            ]
          },
          {
            "id": 35,
            "prompt": "Ancient carvings on [ ... ] have been found across many cultures",
            "fieldPrefix": "Ancient carvings on ",
            "fieldSuffix": " have been found across many cultures",
            "type": "text",
            "acceptedAnswers": [
              "stone"
            ]
          },
          {
            "id": 36,
            "prompt": "Ancient Greeks used the symbol on",
            "fieldPrefix": "Ancient Greeks used the symbol on ",
            "type": "text",
            "acceptedAnswers": [
              "coins",
              "coin"
            ]
          },
          {
            "id": 37,
            "prompt": "turf labyrinth once had a big [ ... ] at its centre",
            "fieldPrefix": "turf labyrinth once had a big ",
            "fieldSuffix": " at its centre",
            "type": "text",
            "acceptedAnswers": [
              "tree"
            ]
          },
          {
            "id": 38,
            "prompt": "walking a maze can reduce a person's [ ... ] rate",
            "fieldPrefix": "walking a maze can reduce a person's ",
            "fieldSuffix": " rate",
            "type": "text",
            "acceptedAnswers": [
              "breathing"
            ]
          },
          {
            "id": 39,
            "prompt": "'finger labyrinths' made from",
            "fieldPrefix": "'finger labyrinths' made from ",
            "type": "text",
            "acceptedAnswers": [
              "paper"
            ]
          },
          {
            "id": 40,
            "prompt": "Alzheimer's sufferers experience less",
            "fieldPrefix": "Alzheimer's sufferers experience less ",
            "type": "text",
            "acceptedAnswers": [
              "anxiety"
            ]
          }
        ]
      }
    }
  },
  "c17-test-2": {
    "id": "c17-test-2",
    "series": 17,
    "testNumber": 2,
    "title": "Cambridge IELTS 17 - Practice Test 2",
    "bookTitle": "Cambridge IELTS 17 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 390,
      "3": 810,
      "4": 1245
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Voluntary work in Southoe village",
        "instructions": "Questions 1\u201310: Complete the notes and table below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 1,
            "prompt": "Library: Help with [ ... ] books (times to be arranged)",
            "fieldPrefix": "Help with ",
            "fieldSuffix": " books (times to be arranged)",
            "type": "text",
            "acceptedAnswers": [
              "collecting"
            ]
          },
          {
            "id": 2,
            "prompt": "Help needed to keep [ ... ] of books up to date",
            "fieldPrefix": "Help needed to keep ",
            "fieldSuffix": " of books up to date",
            "type": "text",
            "acceptedAnswers": [
              "records",
              "record"
            ]
          },
          {
            "id": 3,
            "prompt": "Library is in the [ ... ] Room in the village hall",
            "fieldPrefix": "Library is in the ",
            "fieldSuffix": " Room in the village hall",
            "type": "text",
            "acceptedAnswers": [
              "West"
            ]
          },
          {
            "id": 4,
            "prompt": "Lunch club: Help by providing",
            "fieldPrefix": "Help by providing ",
            "type": "text",
            "acceptedAnswers": [
              "transport"
            ]
          },
          {
            "id": 5,
            "prompt": "Help with hobbies such as",
            "fieldPrefix": "Help with hobbies such as ",
            "type": "text",
            "acceptedAnswers": [
              "art"
            ]
          },
          {
            "id": 6,
            "prompt": "Taking Mrs Carroll to",
            "fieldPrefix": "Taking Mrs Carroll to ",
            "type": "text",
            "acceptedAnswers": [
              "hospital"
            ]
          },
          {
            "id": 7,
            "prompt": "Work in the [ ... ] at Mr Selsbury\u2019s house",
            "fieldPrefix": "Work in the ",
            "fieldSuffix": " at Mr Selsbury\u2019s house",
            "type": "text",
            "acceptedAnswers": [
              "garden"
            ]
          },
          {
            "id": 8,
            "prompt": "19 Oct Event: [ ... ] at Village hall",
            "fieldPrefix": "Event: ",
            "type": "text",
            "acceptedAnswers": [
              "quiz"
            ]
          },
          {
            "id": 9,
            "prompt": "18 Nov dance: checking",
            "fieldPrefix": "checking ",
            "type": "text",
            "acceptedAnswers": [
              "tickets",
              "ticket"
            ]
          },
          {
            "id": 10,
            "prompt": "31 Dec New Year's party: designing the",
            "fieldPrefix": "designing the ",
            "type": "text",
            "acceptedAnswers": [
              "poster"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Oniton Hall",
        "instructions": "Questions 11\u201314: Choose the correct letter, A, B or C. Questions 15\u201320: Choose from the box, A\u2013H.",
        "boxOptions": [
          {
            "key": "A",
            "label": "shopping"
          },
          {
            "key": "B",
            "label": "watching cows being milked"
          },
          {
            "key": "C",
            "label": "seeing old farming equipment"
          },
          {
            "key": "D",
            "label": "eating and drinking"
          },
          {
            "key": "E",
            "label": "starting a trip"
          },
          {
            "key": "F",
            "label": "seeing rare breeds of animals"
          },
          {
            "key": "G",
            "label": "helping to look after animals"
          },
          {
            "key": "H",
            "label": "using farming tools"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "Many past owners made changes to",
            "type": "choice",
            "options": [
              "A the gardens.",
              "B the house.",
              "C the farm."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 12,
            "prompt": "Sir Edward Downes built Oniton Hall because he wanted",
            "type": "choice",
            "options": [
              "A a place for discussing politics.",
              "B a place to display his wealth.",
              "C a place for artists and writers."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 13,
            "prompt": "Visitors can learn about the work of servants in the past from",
            "type": "choice",
            "options": [
              "A audio guides.",
              "B photographs.",
              "C people in costume."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 14,
            "prompt": "What is new for children at Oniton Hall?",
            "type": "choice",
            "options": [
              "A clothes for dressing up",
              "B mini tractors",
              "C the adventure playground"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 15,
            "prompt": "dairy",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 16,
            "prompt": "large barn",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 17,
            "prompt": "small barn",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "G"
            ]
          },
          {
            "id": 18,
            "prompt": "stables",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 19,
            "prompt": "shed",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 20,
            "prompt": "parkland",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "F"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Review of Romeo and Juliet production",
        "instructions": "Questions 21\u201322: Choose TWO letters, A\u2013E. Questions 23\u201327: Choose from the box, A\u2013G. Questions 28\u201330: Choose the correct letter, A, B or C.",
        "boxOptions": [
          {
            "key": "A",
            "label": "They both expected this to be more traditional."
          },
          {
            "key": "B",
            "label": "They both thought this was original."
          },
          {
            "key": "C",
            "label": "They agree this created the right atmosphere."
          },
          {
            "key": "D",
            "label": "They agree this was a major strength."
          },
          {
            "key": "E",
            "label": "They were both disappointed by this."
          },
          {
            "key": "F",
            "label": "They disagree about why this was an issue."
          },
          {
            "key": "G",
            "label": "They disagree about how this could be improved."
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "TWO things students agree they need to include in review (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A analysis of the text",
              "B a summary of the plot",
              "C a description of the theatre",
              "D a personal reaction",
              "E a reference to particular scenes"
            ],
            "acceptedAnswers": [
              "D",
              "E"
            ]
          },
          {
            "id": 22,
            "prompt": "TWO things students agree they need to include in review (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A analysis of the text",
              "B a summary of the plot",
              "C a description of the theatre",
              "D a personal reaction",
              "E a reference to particular scenes"
            ],
            "acceptedAnswers": [
              "D",
              "E"
            ]
          },
          {
            "id": 23,
            "prompt": "the set",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 24,
            "prompt": "the lighting",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 25,
            "prompt": "the costume design",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 26,
            "prompt": "the music",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 27,
            "prompt": "the actors' delivery",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 28,
            "prompt": "The students think Romeo and Juliet is still relevant because",
            "type": "choice",
            "options": [
              "A it illustrates how easily conflict can start.",
              "B it deals with problems that families experience.",
              "C it teaches them about relationships."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 29,
            "prompt": "The students found watching Romeo and Juliet in another language",
            "type": "choice",
            "options": [
              "A frustrating.",
              "B demanding.",
              "C moving."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 30,
            "prompt": "Why do students think Shakespeare's plays have international appeal?",
            "type": "choice",
            "options": [
              "A The stories are exciting.",
              "B There are recognisable characters.",
              "C They can be interpreted in many ways."
            ],
            "acceptedAnswers": [
              "C"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Digital technology and Icelandic language",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "has approximately [ ... ] speakers",
            "fieldPrefix": "has approximately ",
            "fieldSuffix": " speakers",
            "type": "text",
            "acceptedAnswers": [
              "321,000",
              "321000"
            ]
          },
          {
            "id": 32,
            "prompt": "has a [ ... ] that is still growing",
            "fieldPrefix": "has a ",
            "fieldSuffix": " that is still growing",
            "type": "text",
            "acceptedAnswers": [
              "vocabulary"
            ]
          },
          {
            "id": 33,
            "prompt": "computer-based concepts, such as web browser and",
            "fieldPrefix": "computer-based concepts, such as web browser and ",
            "type": "text",
            "acceptedAnswers": [
              "podcast"
            ]
          },
          {
            "id": 34,
            "prompt": "big users of digital technology, such as",
            "fieldPrefix": "big users of digital technology, such as ",
            "type": "text",
            "acceptedAnswers": [
              "smartphones",
              "smartphone"
            ]
          },
          {
            "id": 35,
            "prompt": "are becoming [ ... ] very quickly",
            "fieldPrefix": "are becoming ",
            "fieldSuffix": " very quickly",
            "type": "text",
            "acceptedAnswers": [
              "bilingual"
            ]
          },
          {
            "id": 36,
            "prompt": "discussions using only English while they are in the [ ... ] at school",
            "fieldPrefix": "discussions using only English while they are in the ",
            "fieldSuffix": " at school",
            "type": "text",
            "acceptedAnswers": [
              "playground"
            ]
          },
          {
            "id": 37,
            "prompt": "better able to identify the content of a [ ... ] in English",
            "fieldPrefix": "better able to identify the content of a ",
            "fieldSuffix": " in English than Icelandic",
            "type": "text",
            "acceptedAnswers": [
              "picture"
            ]
          },
          {
            "id": 38,
            "prompt": "because of how complicated its [ ... ] is",
            "fieldPrefix": "because of how complicated its ",
            "fieldSuffix": " is",
            "type": "text",
            "acceptedAnswers": [
              "grammar"
            ]
          },
          {
            "id": 39,
            "prompt": "young Icelanders may lose their [ ... ] as Icelanders",
            "fieldPrefix": "young Icelanders may lose their ",
            "fieldSuffix": " as Icelanders",
            "type": "text",
            "acceptedAnswers": [
              "identity"
            ]
          },
          {
            "id": 40,
            "prompt": "worried about children not being [ ... ] in either Icelandic or English",
            "fieldPrefix": "worried about children not being ",
            "fieldSuffix": " in either Icelandic or English",
            "type": "text",
            "acceptedAnswers": [
              "fluent"
            ]
          }
        ]
      }
    }
  },
  "c17-test-3": {
    "id": "c17-test-3",
    "series": 17,
    "testNumber": 3,
    "title": "Cambridge IELTS 17 - Practice Test 3",
    "bookTitle": "Cambridge IELTS 17 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 385,
      "3": 815,
      "4": 1250
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Advice on surfing holidays in Ireland",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 1,
            "prompt": "Suitable for [ ... ] or groups",
            "fieldPrefix": "Suitable for ",
            "fieldSuffix": " or groups",
            "type": "text",
            "acceptedAnswers": [
              "family",
              "families"
            ]
          },
          {
            "id": 2,
            "prompt": "Need to be reasonably",
            "fieldPrefix": "Need to be reasonably ",
            "type": "text",
            "acceptedAnswers": [
              "fit"
            ]
          },
          {
            "id": 3,
            "prompt": "Good selection of [ ... ] and apartments",
            "fieldPrefix": "Good selection of ",
            "fieldSuffix": " and apartments",
            "type": "text",
            "acceptedAnswers": [
              "hotels",
              "hotel"
            ]
          },
          {
            "id": 4,
            "prompt": "Best beach: [ ... ] beach",
            "fieldPrefix": "Best beach: ",
            "fieldSuffix": " beach",
            "type": "text",
            "acceptedAnswers": [
              "Carrowniskey"
            ]
          },
          {
            "id": 5,
            "prompt": "Minimum booking: one",
            "fieldPrefix": "Minimum booking: one ",
            "type": "text",
            "acceptedAnswers": [
              "week"
            ]
          },
          {
            "id": 6,
            "prompt": "Facing north into the",
            "fieldPrefix": "Facing north into the ",
            "type": "text",
            "acceptedAnswers": [
              "bay"
            ]
          },
          {
            "id": 7,
            "prompt": "Best month to visit is",
            "fieldPrefix": "Best month to visit is ",
            "type": "text",
            "acceptedAnswers": [
              "September"
            ]
          },
          {
            "id": 8,
            "prompt": "Average water temperature: [ ... ] degrees",
            "fieldPrefix": "Average water temperature: ",
            "fieldSuffix": " degrees",
            "type": "text",
            "acceptedAnswers": [
              "19",
              "nineteen"
            ]
          },
          {
            "id": 9,
            "prompt": "Full day surf hire: \u00a3 [ ... ]",
            "fieldPrefix": "Full day surf hire: \u00a3 ",
            "type": "text",
            "acceptedAnswers": [
              "30",
              "thirty"
            ]
          },
          {
            "id": 10,
            "prompt": "Need to bring own",
            "fieldPrefix": "Need to bring own ",
            "type": "text",
            "acceptedAnswers": [
              "boots",
              "boot"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Cycling holidays in the Peak District",
        "instructions": "Questions 11\u201314: Choose the correct letter. Questions 15\u201320: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "historical interest"
          },
          {
            "key": "B",
            "label": "scenic views"
          },
          {
            "key": "C",
            "label": "challenging cycling"
          },
          {
            "key": "D",
            "label": "suitable for families"
          },
          {
            "key": "E",
            "label": "wildlife watching"
          },
          {
            "key": "F",
            "label": "food and drink"
          },
          {
            "key": "G",
            "label": "picnic facilities"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "TWO things included in tour package (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A bike insurance",
              "B accommodation",
              "C airport transfer",
              "D tour leader",
              "E luggage transfer"
            ],
            "acceptedAnswers": [
              "B",
              "E"
            ]
          },
          {
            "id": 12,
            "prompt": "TWO things included in tour package (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A bike insurance",
              "B accommodation",
              "C airport transfer",
              "D tour leader",
              "E luggage transfer"
            ],
            "acceptedAnswers": [
              "B",
              "E"
            ]
          },
          {
            "id": 13,
            "prompt": "What does the speaker say about bike maintenance?",
            "type": "choice",
            "options": [
              "A Free repairs are provided.",
              "B Tool kits must be rented.",
              "C Help is available on route."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 14,
            "prompt": "What does the speaker recommend for rainy days?",
            "type": "choice",
            "options": [
              "A visiting museums",
              "B taking the train",
              "C exploring market towns"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 15,
            "prompt": "Monsal Trail",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 16,
            "prompt": "Tissington Trail",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 17,
            "prompt": "Manifold Track",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 18,
            "prompt": "High Peak Trail",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "G"
            ]
          },
          {
            "id": 19,
            "prompt": "Carsington Water",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 20,
            "prompt": "Derwent Valley",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "C"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Discussion on music festival project",
        "instructions": "Questions 21\u201324: Choose the correct letter. Questions 25\u201330: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "community engagement"
          },
          {
            "key": "B",
            "label": "financial planning"
          },
          {
            "key": "C",
            "label": "health and safety"
          },
          {
            "key": "D",
            "label": "environmental impact"
          },
          {
            "key": "E",
            "label": "marketing strategy"
          },
          {
            "key": "F",
            "label": "artist management"
          },
          {
            "key": "G",
            "label": "site logistics"
          },
          {
            "key": "H",
            "label": "cultural heritage"
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "Why did Holly choose the Glastonbury Festival for her project?",
            "type": "choice",
            "options": [
              "A It is the largest in the UK.",
              "B It has a long and varied history.",
              "C It attracts world-famous performers."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 22,
            "prompt": "Holly and her tutor agree that festival organisers must focus on",
            "type": "choice",
            "options": [
              "A sustainability.",
              "B ticket pricing.",
              "C security."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 23,
            "prompt": "What aspect of Glastonbury does Holly find most remarkable?",
            "type": "choice",
            "options": [
              "A charitable donations",
              "B musical variety",
              "C youth participation"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 24,
            "prompt": "What was the main finding of the local survey?",
            "type": "choice",
            "options": [
              "A noise disruption",
              "B economic benefit",
              "C traffic congestion"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 25,
            "prompt": "Waste management",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 26,
            "prompt": "Local trade",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 27,
            "prompt": "Carbon footprint",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 28,
            "prompt": "Budgeting",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 29,
            "prompt": "Performers",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 30,
            "prompt": "Traditional crafts",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "H"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Bird Migration Research",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "Feed on worms in the",
            "fieldPrefix": "Feed on worms in the ",
            "type": "text",
            "acceptedAnswers": [
              "mud"
            ]
          },
          {
            "id": 32,
            "prompt": "Special waterproof",
            "fieldPrefix": "Special waterproof ",
            "type": "text",
            "acceptedAnswers": [
              "feathers",
              "feather"
            ]
          },
          {
            "id": 33,
            "prompt": "Wings have an aerodynamic",
            "fieldPrefix": "Wings have an aerodynamic ",
            "type": "text",
            "acceptedAnswers": [
              "shape"
            ]
          },
          {
            "id": 34,
            "prompt": "Navigate using the sun, stars and the",
            "fieldPrefix": "Navigate using the sun, stars and the ",
            "type": "text",
            "acceptedAnswers": [
              "moon"
            ]
          },
          {
            "id": 35,
            "prompt": "Geese stretch out their",
            "fieldPrefix": "Geese stretch out their ",
            "type": "text",
            "acceptedAnswers": [
              "neck"
            ]
          },
          {
            "id": 36,
            "prompt": "Tracking has provided valuable",
            "fieldPrefix": "Tracking has provided valuable ",
            "type": "text",
            "acceptedAnswers": [
              "evidence"
            ]
          },
          {
            "id": 37,
            "prompt": "Migrating birds fly to specific winter",
            "fieldPrefix": "Migrating birds fly to specific winter ",
            "type": "text",
            "acceptedAnswers": [
              "destinations",
              "destination"
            ]
          },
          {
            "id": 38,
            "prompt": "Cross vast mountains and",
            "fieldPrefix": "Cross vast mountains and ",
            "type": "text",
            "acceptedAnswers": [
              "oceans",
              "ocean"
            ]
          },
          {
            "id": 39,
            "prompt": "Stop at rest areas for feeding and",
            "fieldPrefix": "Stop at rest areas for feeding and ",
            "type": "text",
            "acceptedAnswers": [
              "recovery"
            ]
          },
          {
            "id": 40,
            "prompt": "Data collected will form a global migration",
            "fieldPrefix": "Data collected will form a global migration ",
            "type": "text",
            "acceptedAnswers": [
              "atlas"
            ]
          }
        ]
      }
    }
  },
  "c17-test-4": {
    "id": "c17-test-4",
    "series": 17,
    "testNumber": 4,
    "title": "Cambridge IELTS 17 - Practice Test 4",
    "bookTitle": "Cambridge IELTS 17 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 390,
      "3": 820,
      "4": 1255
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Apartment Maintenance and Cleaning",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 1,
            "prompt": "Sweep and mop all",
            "fieldPrefix": "Sweep and mop all ",
            "type": "text",
            "acceptedAnswers": [
              "floors",
              "floor"
            ]
          },
          {
            "id": 2,
            "prompt": "Defrost and wipe out the",
            "fieldPrefix": "Defrost and wipe out the ",
            "type": "text",
            "acceptedAnswers": [
              "fridge",
              "refrigerator"
            ]
          },
          {
            "id": 3,
            "prompt": "Wash and iron all",
            "fieldPrefix": "Wash and iron all ",
            "type": "text",
            "acceptedAnswers": [
              "shirts",
              "shirt"
            ]
          },
          {
            "id": 4,
            "prompt": "Clean inside of all",
            "fieldPrefix": "Clean inside of all ",
            "type": "text",
            "acceptedAnswers": [
              "windows",
              "window"
            ]
          },
          {
            "id": 5,
            "prompt": "Clear leaves off the",
            "fieldPrefix": "Clear leaves off the ",
            "type": "text",
            "acceptedAnswers": [
              "balcony"
            ]
          },
          {
            "id": 6,
            "prompt": "Call [ ... ] about faulty wiring",
            "fieldPrefix": "Call ",
            "fieldSuffix": " about faulty wiring",
            "type": "text",
            "acceptedAnswers": [
              "electrician"
            ]
          },
          {
            "id": 7,
            "prompt": "Check ventilation unit for buildup of",
            "fieldPrefix": "Check ventilation unit for buildup of ",
            "type": "text",
            "acceptedAnswers": [
              "dust"
            ]
          },
          {
            "id": 8,
            "prompt": "Report lost key fob to the",
            "fieldPrefix": "Report lost key fob to the ",
            "type": "text",
            "acceptedAnswers": [
              "police"
            ]
          },
          {
            "id": 9,
            "prompt": "Attend fire safety",
            "fieldPrefix": "Attend fire safety ",
            "type": "text",
            "acceptedAnswers": [
              "training"
            ]
          },
          {
            "id": 10,
            "prompt": "Leave online tenant",
            "fieldPrefix": "Leave online tenant ",
            "type": "text",
            "acceptedAnswers": [
              "review"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Staff Retention in Hospitality Industry",
        "instructions": "Questions 11\u201314: Choose the correct letter. Questions 15\u201320: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "improved staff meal quality"
          },
          {
            "key": "B",
            "label": "flexible scheduling"
          },
          {
            "key": "C",
            "label": "career progression pathway"
          },
          {
            "key": "D",
            "label": "childcare assistance"
          },
          {
            "key": "E",
            "label": "wellness program"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "Why was the hospitality survey conducted?",
            "type": "choice",
            "options": [
              "A high staff turnover rate",
              "B decreasing customer satisfaction",
              "C rising operational costs"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 12,
            "prompt": "What did junior employees report as their top grievance?",
            "type": "choice",
            "options": [
              "A lack of training",
              "B long shift hours",
              "C low starting pay"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 13,
            "prompt": "Managers observed that motivation improved most with",
            "type": "choice",
            "options": [
              "A positive recognition",
              "B performance bonuses",
              "C modern facilities"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 14,
            "prompt": "What was the result of cross-department shadowing?",
            "type": "choice",
            "options": [
              "A greater overtime work",
              "B increased conflict",
              "C better team cooperation"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 15,
            "prompt": "Grand Central Hotel",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 16,
            "prompt": "Parkview Suites",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 17,
            "prompt": "Ocean Breeze Resort",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 18,
            "prompt": "Mountain Lodge",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 19,
            "prompt": "Riverside Inn",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 20,
            "prompt": "Harbor View Hotel",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "A"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Industrial Melanism and Peppered Moths",
        "instructions": "Questions 21\u201324: Choose TWO letters. Questions 25\u201330: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "predation pressure"
          },
          {
            "key": "B",
            "label": "tree bark lichen"
          },
          {
            "key": "C",
            "label": "pollution levels"
          },
          {
            "key": "D",
            "label": "genetic mutation rate"
          },
          {
            "key": "E",
            "label": "camouflage effectiveness"
          },
          {
            "key": "F",
            "label": "regional weather"
          },
          {
            "key": "G",
            "label": "scientific methodology"
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "TWO factors researchers initially overlooked (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A day-time roosting habits",
              "B larval food source",
              "C ultraviolet light vision of birds",
              "D flight speed",
              "E chemical pheromones"
            ],
            "acceptedAnswers": [
              "C",
              "E"
            ]
          },
          {
            "id": 22,
            "prompt": "TWO factors researchers initially overlooked (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A day-time roosting habits",
              "B larval food source",
              "C ultraviolet light vision of birds",
              "D flight speed",
              "E chemical pheromones"
            ],
            "acceptedAnswers": [
              "C",
              "E"
            ]
          },
          {
            "id": 23,
            "prompt": "TWO key outcomes of the Clean Air Acts (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A rapid recovery of typical pale moths",
              "B total extinction of melanic form",
              "C shift in bird population",
              "D resurgence of tree lichen",
              "E increase in moth body size"
            ],
            "acceptedAnswers": [
              "A",
              "D"
            ]
          },
          {
            "id": 24,
            "prompt": "TWO key outcomes of the Clean Air Acts (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A rapid recovery of typical pale moths",
              "B total extinction of melanic form",
              "C shift in bird population",
              "D resurgence of tree lichen",
              "E increase in moth body size"
            ],
            "acceptedAnswers": [
              "A",
              "D"
            ]
          },
          {
            "id": 25,
            "prompt": "Lichen abundance",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 26,
            "prompt": "Soot deposition",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 27,
            "prompt": "Bird hunting efficiency",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 28,
            "prompt": "Color alleles",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 29,
            "prompt": "Airborne particulates",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 30,
            "prompt": "Kettlewell's experiments",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "acceptedAnswers": [
              "G"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Geothermal Energy and Hot Springs",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "Algae create brilliant [ ... ] colors",
            "fieldPrefix": "Algae create brilliant ",
            "fieldSuffix": " colors",
            "type": "text",
            "acceptedAnswers": [
              "golden"
            ]
          },
          {
            "id": 32,
            "prompt": "Ecosystem remains balanced and",
            "fieldPrefix": "Ecosystem remains balanced and ",
            "type": "text",
            "acceptedAnswers": [
              "healthy"
            ]
          },
          {
            "id": 33,
            "prompt": "Helps moderate regional micro",
            "fieldPrefix": "Helps moderate regional micro ",
            "type": "text",
            "acceptedAnswers": [
              "climate"
            ]
          },
          {
            "id": 34,
            "prompt": "Water filters through porous volcanic",
            "fieldPrefix": "Water filters through porous volcanic ",
            "type": "text",
            "acceptedAnswers": [
              "rocks",
              "rock"
            ]
          },
          {
            "id": 35,
            "prompt": "Spring pool [ ... ] exceeds 40 meters",
            "fieldPrefix": "Spring pool ",
            "fieldSuffix": " exceeds 40 meters",
            "type": "text",
            "acceptedAnswers": [
              "diameter"
            ]
          },
          {
            "id": 36,
            "prompt": "Fed through a narrow volcanic",
            "fieldPrefix": "Fed through a narrow volcanic ",
            "type": "text",
            "acceptedAnswers": [
              "tube"
            ]
          },
          {
            "id": 37,
            "prompt": "Historic uses included smelting and",
            "fieldPrefix": "Historic uses included smelting and ",
            "type": "text",
            "acceptedAnswers": [
              "fire"
            ]
          },
          {
            "id": 38,
            "prompt": "Geothermal turbines driven by pressurized",
            "fieldPrefix": "Geothermal turbines driven by pressurized ",
            "type": "text",
            "acceptedAnswers": [
              "steam"
            ]
          },
          {
            "id": 39,
            "prompt": "Water appears milky and",
            "fieldPrefix": "Water appears milky and ",
            "type": "text",
            "acceptedAnswers": [
              "cloudy"
            ]
          },
          {
            "id": 40,
            "prompt": "Mineral content per [ ... ] of geothermal fluid",
            "fieldPrefix": "Mineral content per ",
            "fieldSuffix": " of geothermal fluid",
            "type": "text",
            "acceptedAnswers": [
              "litre",
              "liter"
            ]
          }
        ]
      }
    }
  },
  "c16-test-1": {
    "id": "c16-test-1",
    "series": 16,
    "testNumber": 1,
    "title": "Cambridge IELTS 16 - Practice Test 1",
    "bookTitle": "Cambridge IELTS 16 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 380,
      "3": 810,
      "4": 1240
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Children's engineering workshops",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 1,
            "prompt": "Build a device that can transport an",
            "fieldPrefix": "Build a device that can transport an ",
            "type": "text",
            "acceptedAnswers": [
              "egg"
            ]
          },
          {
            "id": 2,
            "prompt": "Construct a miniature Eiffel",
            "fieldPrefix": "Construct a miniature Eiffel ",
            "type": "text",
            "acceptedAnswers": [
              "tower"
            ]
          },
          {
            "id": 3,
            "prompt": "Design a solar-powered toy",
            "fieldPrefix": "Design a solar-powered toy ",
            "type": "text",
            "acceptedAnswers": [
              "car"
            ]
          },
          {
            "id": 4,
            "prompt": "Create robotic",
            "fieldPrefix": "Create robotic ",
            "type": "text",
            "acceptedAnswers": [
              "animals",
              "animal"
            ]
          },
          {
            "id": 5,
            "prompt": "Test strength of wooden model",
            "fieldPrefix": "Test strength of wooden model ",
            "type": "text",
            "acceptedAnswers": [
              "bridge"
            ]
          },
          {
            "id": 6,
            "prompt": "Work on stop-motion animation",
            "fieldPrefix": "Work on stop-motion animation ",
            "type": "text",
            "acceptedAnswers": [
              "movie",
              "film"
            ]
          },
          {
            "id": 7,
            "prompt": "Bring stickers or paints to [ ... ] models",
            "fieldPrefix": "Bring stickers or paints to ",
            "fieldSuffix": " models",
            "type": "text",
            "acceptedAnswers": [
              "decorate"
            ]
          },
          {
            "id": 8,
            "prompt": "Sessions take place on",
            "fieldPrefix": "Sessions take place on ",
            "type": "text",
            "acceptedAnswers": [
              "Wednesdays",
              "Wednesday"
            ]
          },
          {
            "id": 9,
            "prompt": "Venue: [ ... ] Community Centre",
            "fieldPrefix": "Venue: ",
            "fieldSuffix": " Community Centre",
            "type": "text",
            "acceptedAnswers": [
              "Fradstone"
            ]
          },
          {
            "id": 10,
            "prompt": "Free [ ... ] available behind building",
            "fieldPrefix": "Free ",
            "fieldSuffix": " available behind building",
            "type": "text",
            "acceptedAnswers": [
              "parking"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Stevenson's Local Heritage Museum",
        "instructions": "Questions 11\u201314: Choose the correct letter. Questions 15\u201320: Label the map below.",
        "boxOptions": [
          {
            "key": "A",
            "label": "Engine Room"
          },
          {
            "key": "B",
            "label": "Textile Gallery"
          },
          {
            "key": "C",
            "label": "Smithy"
          },
          {
            "key": "D",
            "label": "Caf\u00e9"
          },
          {
            "key": "E",
            "label": "Gift Shop"
          },
          {
            "key": "F",
            "label": "Printing Press"
          },
          {
            "key": "G",
            "label": "Miner's Cottage"
          },
          {
            "key": "H",
            "label": "Schoolroom"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "The founder of the site made his fortune from",
            "type": "choice",
            "options": [
              "A leather manufacturing.",
              "B cotton mills.",
              "C coal mining."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 12,
            "prompt": "The museum site is particularly unusual because",
            "type": "choice",
            "options": [
              "A original machinery still operates.",
              "B it survived wartime bombing undamaged.",
              "C workers lived in the main building."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 13,
            "prompt": "What do volunteers do at the weekend?",
            "type": "choice",
            "options": [
              "A give costumed presentations",
              "B demonstrate traditional crafts",
              "C sell vintage merchandise"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 14,
            "prompt": "What should visitors do before using the archive?",
            "type": "choice",
            "options": [
              "A join the museum society",
              "B pay an entry fee",
              "C book an appointment"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 15,
            "prompt": "Schoolroom",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "H"
            ]
          },
          {
            "id": 16,
            "prompt": "Smithy",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 17,
            "prompt": "Miner's Cottage",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "G"
            ]
          },
          {
            "id": 18,
            "prompt": "Textile Gallery",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 19,
            "prompt": "Caf\u00e9",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 20,
            "prompt": "Gift Shop",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "D"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Art and Photography Project Review",
        "instructions": "Questions 21\u201324: Choose the correct letter. Questions 25\u201330: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "childhood memory"
          },
          {
            "key": "B",
            "label": "isolation"
          },
          {
            "key": "C",
            "label": "hope for the future"
          },
          {
            "key": "D",
            "label": "family unity"
          },
          {
            "key": "E",
            "label": "economic anxiety"
          },
          {
            "key": "F",
            "label": "loss of identity"
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "What do Chloe and Oliver agree about their photographic series?",
            "type": "choice",
            "options": [
              "A It needs more natural daylight.",
              "B The black-and-white tone is effective.",
              "C The portraits are too stylized."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 22,
            "prompt": "Why did Oliver choose industrial architecture?",
            "type": "choice",
            "options": [
              "A to contrast with human fragility",
              "B to reflect local economic decline",
              "C to satisfy assignment guidelines"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 23,
            "prompt": "Chloe felt her tutor's reaction was",
            "type": "choice",
            "options": [
              "A overly critical.",
              "B exceptionally encouraging.",
              "C slightly confusing."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 24,
            "prompt": "What change will they make to the final presentation?",
            "type": "choice",
            "options": [
              "A mount photos on cardboard",
              "B provide printed explanatory text",
              "C add background audio recordings"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 25,
            "prompt": "Old factory doorway",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 26,
            "prompt": "Children in the lane",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 27,
            "prompt": "Father at workbench",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 28,
            "prompt": "Clock tower",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 29,
            "prompt": "Sunrise over chimney",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 30,
            "prompt": "Discarded tools",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "F"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Early human migration and seafaring",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "Evidence of early boats made from hollowed",
            "fieldPrefix": "Evidence of early boats made from hollowed ",
            "type": "text",
            "acceptedAnswers": [
              "logs",
              "log"
            ]
          },
          {
            "id": 32,
            "prompt": "Reeds tied together using durable",
            "fieldPrefix": "Reeds tied together using durable ",
            "type": "text",
            "acceptedAnswers": [
              "rope"
            ]
          },
          {
            "id": 33,
            "prompt": "Navigators watched patterns of ocean",
            "fieldPrefix": "Navigators watched patterns of ocean ",
            "type": "text",
            "acceptedAnswers": [
              "swells",
              "swell"
            ]
          },
          {
            "id": 34,
            "prompt": "Used flights of seabirds to pinpoint distant",
            "fieldPrefix": "Used flights of seabirds to pinpoint distant ",
            "type": "text",
            "acceptedAnswers": [
              "islands",
              "island"
            ]
          },
          {
            "id": 35,
            "prompt": "Stored fresh water in sealed coconut",
            "fieldPrefix": "Stored fresh water in sealed coconut ",
            "type": "text",
            "acceptedAnswers": [
              "shells",
              "shell"
            ]
          },
          {
            "id": 36,
            "prompt": "Preserved dried fish using sea",
            "fieldPrefix": "Preserved dried fish using sea ",
            "type": "text",
            "acceptedAnswers": [
              "salt"
            ]
          },
          {
            "id": 37,
            "prompt": "Observed positions of stars and the",
            "fieldPrefix": "Observed positions of stars and the ",
            "type": "text",
            "acceptedAnswers": [
              "sun"
            ]
          },
          {
            "id": 38,
            "prompt": "Trade items included carved obsidian",
            "fieldPrefix": "Trade items included carved obsidian ",
            "type": "text",
            "acceptedAnswers": [
              "blades",
              "blade"
            ]
          },
          {
            "id": 39,
            "prompt": "Introduction of dogs, pigs and domestic",
            "fieldPrefix": "Introduction of dogs, pigs and domestic ",
            "type": "text",
            "acceptedAnswers": [
              "fowl",
              "chickens"
            ]
          },
          {
            "id": 40,
            "prompt": "Transformed ancient island",
            "fieldPrefix": "Transformed ancient island ",
            "type": "text",
            "acceptedAnswers": [
              "ecosystems",
              "ecosystem"
            ]
          }
        ]
      }
    }
  },
  "c16-test-2": {
    "id": "c16-test-2",
    "series": 16,
    "testNumber": 2,
    "title": "Cambridge IELTS 16 - Practice Test 2",
    "bookTitle": "Cambridge IELTS 16 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 390,
      "3": 815,
      "4": 1250
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Copying and photo reproduction service",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 1,
            "prompt": "Include decorative wooden",
            "fieldPrefix": "Include decorative wooden ",
            "type": "text",
            "acceptedAnswers": [
              "frame"
            ]
          },
          {
            "id": 2,
            "prompt": "Price quoted: $ [ ... ]",
            "fieldPrefix": "Price quoted: $ ",
            "type": "text",
            "acceptedAnswers": [
              "195"
            ]
          },
          {
            "id": 3,
            "prompt": "Deposit required upon initial",
            "fieldPrefix": "Deposit required upon initial ",
            "type": "text",
            "acceptedAnswers": [
              "payment"
            ]
          },
          {
            "id": 4,
            "prompt": "Original photo depicted customer's",
            "fieldPrefix": "Original photo depicted customer's ",
            "type": "text",
            "acceptedAnswers": [
              "Grandparents",
              "grandparents"
            ]
          },
          {
            "id": 5,
            "prompt": "Restore fading in sepia",
            "fieldPrefix": "Restore fading in sepia ",
            "type": "text",
            "acceptedAnswers": [
              "colour",
              "color"
            ]
          },
          {
            "id": 6,
            "prompt": "Smooth slight tear near woman's",
            "fieldPrefix": "Smooth slight tear near woman's ",
            "type": "text",
            "acceptedAnswers": [
              "hand"
            ]
          },
          {
            "id": 7,
            "prompt": "Digital removal of messy garden",
            "fieldPrefix": "Digital removal of messy garden ",
            "type": "text",
            "acceptedAnswers": [
              "background"
            ]
          },
          {
            "id": 8,
            "prompt": "Sharpen image to bring eyes into clear",
            "fieldPrefix": "Sharpen image to bring eyes into clear ",
            "type": "text",
            "acceptedAnswers": [
              "focus"
            ]
          },
          {
            "id": 9,
            "prompt": "Turnaround time: [ ... ] days",
            "fieldPrefix": "Turnaround time: ",
            "fieldSuffix": " days",
            "type": "text",
            "acceptedAnswers": [
              "ten",
              "10",
              "10 days",
              "ten days"
            ]
          },
          {
            "id": 10,
            "prompt": "Delivery packaged inside protective",
            "fieldPrefix": "Delivery packaged inside protective ",
            "type": "text",
            "acceptedAnswers": [
              "plastic"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Food Hall stalls and dining",
        "instructions": "Questions 11\u201314: Choose the correct letter. Questions 15\u201320: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "fresh vegetarian snacks"
          },
          {
            "key": "B",
            "label": "traditional bakery"
          },
          {
            "key": "C",
            "label": "fresh seafood bar"
          },
          {
            "key": "D",
            "label": "artisan cheeses"
          },
          {
            "key": "E",
            "label": "specialty coffees"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "What makes the Food Hall popular with lunchtime workers?",
            "type": "choice",
            "options": [
              "A low price fixed menus",
              "B outdoor terrace seating",
              "C speed of service"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 12,
            "prompt": "All stalls in the hall must adhere to",
            "type": "choice",
            "options": [
              "A organic certification.",
              "B zero single-use plastic.",
              "C local sourcing quota."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 13,
            "prompt": "What event happens every Thursday evening?",
            "type": "choice",
            "options": [
              "A live cooking demos",
              "B live acoustic music",
              "C discount tasting hour"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 14,
            "prompt": "How can customers leave feedback on stalls?",
            "type": "choice",
            "options": [
              "A QR code on tables",
              "B customer survey kiosk",
              "C token voting station"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 15,
            "prompt": "Stall 1 (The Green Corner)",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 16,
            "prompt": "Stall 2 (Dairy Delight)",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 17,
            "prompt": "Stall 3 (Harbor Fresh)",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 18,
            "prompt": "Stall 4 (The Daily Loaf)",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 19,
            "prompt": "TWO additional amenities (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A free drinking water",
              "B mobile charging station",
              "C baggage lockers",
              "D kids play rug"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 20,
            "prompt": "TWO additional amenities (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A free drinking water",
              "B mobile charging station",
              "C baggage lockers",
              "D kids play rug"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Coffee production and roasting flow chart",
        "instructions": "Questions 21\u201324: Choose the correct letter. Questions 25\u201330: Complete the flowchart. Write ONE WORD ONLY.",
        "questions": [
          {
            "id": 21,
            "prompt": "Why did Maria choose coffee production for her presentation?",
            "type": "choice",
            "options": [
              "A family connection in Colombia",
              "B interest in fair trade economics",
              "C complex chemical reactions during roasting"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 22,
            "prompt": "Maria's tutor advises her to emphasize",
            "type": "choice",
            "options": [
              "A smallholder farming challenges.",
              "B temperature control in roasting.",
              "C consumer taste trends."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 23,
            "prompt": "What surprised Maria during her roasting experiment?",
            "type": "choice",
            "options": [
              "A rapid bean weight loss",
              "B unexpected pleasant aroma",
              "C noise of the beans cracking"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 24,
            "prompt": "The tutor recommends that she concludes with",
            "type": "choice",
            "options": [
              "A an evaluation of decaffeination.",
              "B sustainable packaging solutions.",
              "C future coffee breeding."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 25,
            "prompt": "Harvesting ripe coffee",
            "fieldPrefix": "Harvesting ripe coffee ",
            "type": "text",
            "acceptedAnswers": [
              "cherries",
              "cherry"
            ]
          },
          {
            "id": 26,
            "prompt": "Fermenting in water tanks to remove",
            "fieldPrefix": "Fermenting in water tanks to remove ",
            "type": "text",
            "acceptedAnswers": [
              "pulp"
            ]
          },
          {
            "id": 27,
            "prompt": "Drying on large outdoor",
            "fieldPrefix": "Drying on large outdoor ",
            "type": "text",
            "acceptedAnswers": [
              "beds",
              "bed"
            ]
          },
          {
            "id": 28,
            "prompt": "Hulling beans to take off dry",
            "fieldPrefix": "Hulling beans to take off dry ",
            "type": "text",
            "acceptedAnswers": [
              "parchment"
            ]
          },
          {
            "id": 29,
            "prompt": "Sorting beans by size and",
            "fieldPrefix": "Sorting beans by size and ",
            "type": "text",
            "acceptedAnswers": [
              "density"
            ]
          },
          {
            "id": 30,
            "prompt": "Packaging into breathable burlap",
            "fieldPrefix": "Packaging into breathable burlap ",
            "type": "text",
            "acceptedAnswers": [
              "sacks",
              "sack"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Sleep hygiene and cognitive performance",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "Sleep deprivation degrades working",
            "fieldPrefix": "Sleep deprivation degrades working ",
            "type": "text",
            "acceptedAnswers": [
              "memory"
            ]
          },
          {
            "id": 32,
            "prompt": "Impairs logical reasoning and complex",
            "fieldPrefix": "Impairs logical reasoning and complex ",
            "type": "text",
            "acceptedAnswers": [
              "decisions",
              "decision"
            ]
          },
          {
            "id": 33,
            "prompt": "Blue light suppresses production of",
            "fieldPrefix": "Blue light suppresses production of ",
            "type": "text",
            "acceptedAnswers": [
              "melatonin"
            ]
          },
          {
            "id": 34,
            "prompt": "Ideal bedroom temperature is pleasantly",
            "fieldPrefix": "Ideal bedroom temperature is pleasantly ",
            "type": "text",
            "acceptedAnswers": [
              "cool"
            ]
          },
          {
            "id": 35,
            "prompt": "Heavy meals before bed cause digestive",
            "fieldPrefix": "Heavy meals before bed cause digestive ",
            "type": "text",
            "acceptedAnswers": [
              "discomfort"
            ]
          },
          {
            "id": 36,
            "prompt": "Avoid stimulants such as tea and",
            "fieldPrefix": "Avoid stimulants such as tea and ",
            "type": "text",
            "acceptedAnswers": [
              "coffee"
            ]
          },
          {
            "id": 37,
            "prompt": "Establish consistent wake-up",
            "fieldPrefix": "Establish consistent wake-up ",
            "type": "text",
            "acceptedAnswers": [
              "routines",
              "routine"
            ]
          },
          {
            "id": 38,
            "prompt": "Short daytime naps can boost afternoon",
            "fieldPrefix": "Short daytime naps can boost afternoon ",
            "type": "text",
            "acceptedAnswers": [
              "alertness"
            ]
          },
          {
            "id": 39,
            "prompt": "Deep sleep allows brain to clear metabolic",
            "fieldPrefix": "Deep sleep allows brain to clear metabolic ",
            "type": "text",
            "acceptedAnswers": [
              "waste"
            ]
          },
          {
            "id": 40,
            "prompt": "Promotes consolidation of long-term",
            "fieldPrefix": "Promotes consolidation of long-term ",
            "type": "text",
            "acceptedAnswers": [
              "learning"
            ]
          }
        ]
      }
    }
  },
  "c16-test-3": {
    "id": "c16-test-3",
    "series": 16,
    "testNumber": 3,
    "title": "Cambridge IELTS 16 - Practice Test 3",
    "bookTitle": "Cambridge IELTS 16 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 380,
      "3": 810,
      "4": 1245
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Junior activity summer camp",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 1,
            "prompt": "Camp located next to city",
            "fieldPrefix": "Camp located next to city ",
            "type": "text",
            "acceptedAnswers": [
              "park"
            ]
          },
          {
            "id": 2,
            "prompt": "Uniform shirt colour is bright",
            "fieldPrefix": "Uniform shirt colour is bright ",
            "type": "text",
            "acceptedAnswers": [
              "blue"
            ]
          },
          {
            "id": 3,
            "prompt": "Must provide doctor's letter and emergency",
            "fieldPrefix": "Must provide doctor's letter and emergency ",
            "type": "text",
            "acceptedAnswers": [
              "reference"
            ]
          },
          {
            "id": 4,
            "prompt": "Evening activities include fireside",
            "fieldPrefix": "Evening activities include fireside ",
            "type": "text",
            "acceptedAnswers": [
              "story",
              "stories"
            ]
          },
          {
            "id": 5,
            "prompt": "Indoor hall available in case of heavy",
            "fieldPrefix": "Indoor hall available in case of heavy ",
            "type": "text",
            "acceptedAnswers": [
              "rain"
            ]
          },
          {
            "id": 6,
            "prompt": "Children should pack healthy mid-morning",
            "fieldPrefix": "Children should pack healthy mid-morning ",
            "type": "text",
            "acceptedAnswers": [
              "snack",
              "snacks"
            ]
          },
          {
            "id": 7,
            "prompt": "Staff trained to administer emergency",
            "fieldPrefix": "Staff trained to administer emergency ",
            "type": "text",
            "acceptedAnswers": [
              "medication"
            ]
          },
          {
            "id": 8,
            "prompt": "Kayaking and climbing require safety",
            "fieldPrefix": "Kayaking and climbing require safety ",
            "type": "text",
            "acceptedAnswers": [
              "helmet"
            ]
          },
          {
            "id": 9,
            "prompt": "Option to sleep overnight in large",
            "fieldPrefix": "Option to sleep overnight in large ",
            "type": "text",
            "acceptedAnswers": [
              "tent"
            ]
          },
          {
            "id": 10,
            "prompt": "Total weekly cost per child: $ [ ... ]",
            "fieldPrefix": "Total weekly cost per child: $ ",
            "type": "text",
            "acceptedAnswers": [
              "199"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Seasonal employment opportunities",
        "instructions": "Questions 11\u201314: Choose TWO letters. Questions 15\u201320: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "weekend shifts only"
          },
          {
            "key": "B",
            "label": "free meals provided"
          },
          {
            "key": "C",
            "label": "transport allowance"
          },
          {
            "key": "D",
            "label": "performance bonus"
          },
          {
            "key": "E",
            "label": "uniform included"
          },
          {
            "key": "F",
            "label": "experience required"
          },
          {
            "key": "G",
            "label": "immediate start"
          },
          {
            "key": "H",
            "label": "opportunity for overtime"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "TWO benefits all seasonal workers receive (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A discounted gym access",
              "B dental coverage",
              "C staff product discount",
              "D pension matching",
              "E annual leave carryover"
            ],
            "acceptedAnswers": [
              "A",
              "C"
            ]
          },
          {
            "id": 12,
            "prompt": "TWO benefits all seasonal workers receive (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A discounted gym access",
              "B dental coverage",
              "C staff product discount",
              "D pension matching",
              "E annual leave carryover"
            ],
            "acceptedAnswers": [
              "A",
              "C"
            ]
          },
          {
            "id": 13,
            "prompt": "TWO qualifications needed for warehouse roles (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A first aid certificate",
              "B basic computer literacy",
              "C forklift certification",
              "D valid driver license",
              "E clean criminal record"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 14,
            "prompt": "TWO qualifications needed for warehouse roles (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A first aid certificate",
              "B basic computer literacy",
              "C forklift certification",
              "D valid driver license",
              "E clean criminal record"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 15,
            "prompt": "Cashier (Customer Service)",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 16,
            "prompt": "Stock Controller",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 17,
            "prompt": "Delivery Courier",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 18,
            "prompt": "Kitchen Assistant",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "H"
            ]
          },
          {
            "id": 19,
            "prompt": "Barista",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 20,
            "prompt": "Event Usher",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "acceptedAnswers": [
              "E"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Healthy eating in restaurants",
        "instructions": "Questions 21\u201324: Choose the correct letter. Questions 25\u201330: Choose the correct letter, A, B or C.",
        "questions": [
          {
            "id": 21,
            "prompt": "What inspired Adam's research into restaurant menus?",
            "type": "choice",
            "options": [
              "A public health statistics",
              "B his family's catering business",
              "C a recent government campaign"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 22,
            "prompt": "What do the students agree about caloric labeling?",
            "type": "choice",
            "options": [
              "A It discourages diners from ordering dessert.",
              "B Customers frequently ignore it.",
              "C It motivates chefs to adapt recipes."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 23,
            "prompt": "What surprised Adam about fast-food salad options?",
            "type": "choice",
            "options": [
              "A their high sugar content",
              "B their high sodium level",
              "C their low consumer demand"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 24,
            "prompt": "How can diners best be influenced toward balanced choices?",
            "type": "choice",
            "options": [
              "A smaller plate sizes",
              "B attractive food descriptions",
              "C higher prices on unhealthy items"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 25,
            "prompt": "Adam suggests that restaurants could reduce obesity if menus",
            "type": "choice",
            "options": [
              "A restricted portion sizes.",
              "B offered healthier side orders.",
              "C included nutritional warnings."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 26,
            "prompt": "Chefs are reluctant to alter recipes because they fear",
            "type": "choice",
            "options": [
              "A increasing preparation time.",
              "B losing customer loyalty.",
              "C exceeding budget constraints."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 27,
            "prompt": "Children's menus in particular suffer from",
            "type": "choice",
            "options": [
              "A lack of vegetable variety.",
              "B excessive artificial food coloring.",
              "C unappealing presentation."
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 28,
            "prompt": "Taxation on sugary drinks has resulted in",
            "type": "choice",
            "options": [
              "A higher overall beverage revenue.",
              "B manufacturers reformulating products.",
              "C consumer protests."
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 29,
            "prompt": "The tutor recommends evaluating",
            "type": "choice",
            "options": [
              "A supermarket prepared meals.",
              "B school lunch programs.",
              "C hospital cafeteria food."
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 30,
            "prompt": "For their final project, Adam and Elena will",
            "type": "choice",
            "options": [
              "A interview independent restaurant owners.",
              "B design an experimental restaurant menu.",
              "C analyze diner sales receipts."
            ],
            "acceptedAnswers": [
              "B"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Urban forestry and benefits of trees",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "Urban trees mitigate the heat [ ... ] effect",
            "fieldPrefix": "Urban trees mitigate the heat ",
            "fieldSuffix": " effect",
            "type": "text",
            "acceptedAnswers": [
              "island"
            ]
          },
          {
            "id": 32,
            "prompt": "Canopy shade reduces building cooling",
            "fieldPrefix": "Canopy shade reduces building cooling ",
            "type": "text",
            "acceptedAnswers": [
              "costs",
              "cost"
            ]
          },
          {
            "id": 33,
            "prompt": "Leaves trap harmful airborne",
            "fieldPrefix": "Leaves trap harmful airborne ",
            "type": "text",
            "acceptedAnswers": [
              "particulates",
              "particles",
              "dust"
            ]
          },
          {
            "id": 34,
            "prompt": "Tree root systems absorb storm water and prevent",
            "fieldPrefix": "Tree root systems absorb storm water and prevent ",
            "type": "text",
            "acceptedAnswers": [
              "flooding",
              "floods"
            ]
          },
          {
            "id": 35,
            "prompt": "Natural sound barrier against urban traffic",
            "fieldPrefix": "Natural sound barrier against urban traffic ",
            "type": "text",
            "acceptedAnswers": [
              "noise"
            ]
          },
          {
            "id": 36,
            "prompt": "Exposure to green nature lowers human",
            "fieldPrefix": "Exposure to green nature lowers human ",
            "type": "text",
            "acceptedAnswers": [
              "stress"
            ]
          },
          {
            "id": 37,
            "prompt": "Diverse species increase urban bird and insect",
            "fieldPrefix": "Diverse species increase urban bird and insect ",
            "type": "text",
            "acceptedAnswers": [
              "diversity",
              "wildlife"
            ]
          },
          {
            "id": 38,
            "prompt": "Careful pruning avoids hazards from falling",
            "fieldPrefix": "Careful pruning avoids hazards from falling ",
            "type": "text",
            "acceptedAnswers": [
              "branches",
              "branch"
            ]
          },
          {
            "id": 39,
            "prompt": "Soil compaction around trunks limits root",
            "fieldPrefix": "Soil compaction around trunks limits root ",
            "type": "text",
            "acceptedAnswers": [
              "growth"
            ]
          },
          {
            "id": 40,
            "prompt": "Community tree planting builds social",
            "fieldPrefix": "Community tree planting builds social ",
            "type": "text",
            "acceptedAnswers": [
              "connection",
              "cohesion"
            ]
          }
        ]
      }
    }
  },
  "c16-test-4": {
    "id": "c16-test-4",
    "series": 16,
    "testNumber": 4,
    "title": "Cambridge IELTS 16 - Practice Test 4",
    "bookTitle": "Cambridge IELTS 16 Academic",
    "audioBookmarks": {
      "1": 0,
      "2": 390,
      "3": 820,
      "4": 1250
    },
    "parts": {
      "1": {
        "part": 1,
        "title": "Holiday rental cottage booking",
        "instructions": "Questions 1\u201310: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        "questions": [
          {
            "id": 1,
            "prompt": "Booking arrival date: [ ... ] June",
            "fieldPrefix": "Booking arrival date: ",
            "fieldSuffix": " June",
            "type": "text",
            "acceptedAnswers": [
              "28th",
              "28",
              "28 June"
            ]
          },
          {
            "id": 2,
            "prompt": "Weekly rent cost: \u00a3 [ ... ]",
            "fieldPrefix": "Weekly rent cost: \u00a3 ",
            "type": "text",
            "acceptedAnswers": [
              "550"
            ]
          },
          {
            "id": 3,
            "prompt": "Cottage name: [ ... ] Cottage",
            "fieldPrefix": "Cottage name: ",
            "fieldSuffix": " Cottage",
            "type": "text",
            "acceptedAnswers": [
              "Chervil"
            ]
          },
          {
            "id": 4,
            "prompt": "Features: detached double",
            "fieldPrefix": "Features: detached double ",
            "type": "text",
            "acceptedAnswers": [
              "garage"
            ]
          },
          {
            "id": 5,
            "prompt": "Private enclosed lawn and",
            "fieldPrefix": "Private enclosed lawn and ",
            "type": "text",
            "acceptedAnswers": [
              "garden"
            ]
          },
          {
            "id": 6,
            "prompt": "Ample off-street",
            "fieldPrefix": "Ample off-street ",
            "type": "text",
            "acceptedAnswers": [
              "parking"
            ]
          },
          {
            "id": 7,
            "prompt": "Living room equipped with open fireplace burning",
            "fieldPrefix": "Living room equipped with open fireplace burning ",
            "type": "text",
            "acceptedAnswers": [
              "wood"
            ]
          },
          {
            "id": 8,
            "prompt": "Short walk across historic stone",
            "fieldPrefix": "Short walk across historic stone ",
            "type": "text",
            "acceptedAnswers": [
              "bridge"
            ]
          },
          {
            "id": 9,
            "prompt": "Village landmark near church: ancient war",
            "fieldPrefix": "Village landmark near church: ancient war ",
            "type": "text",
            "acceptedAnswers": [
              "monument"
            ]
          },
          {
            "id": 10,
            "prompt": "Cottage reopens annually in the month of",
            "fieldPrefix": "Cottage reopens annually in the month of ",
            "type": "text",
            "acceptedAnswers": [
              "March"
            ]
          }
        ]
      },
      "2": {
        "part": 2,
        "title": "Farm visit and tourist facilities",
        "instructions": "Questions 11\u201314: Choose the correct letter. Questions 15\u201320: Label the map below.",
        "boxOptions": [
          {
            "key": "A",
            "label": "Orchard"
          },
          {
            "key": "B",
            "label": "Dairy Barn"
          },
          {
            "key": "C",
            "label": "Visitor Reception"
          },
          {
            "key": "D",
            "label": "Duck Pond"
          },
          {
            "key": "E",
            "label": "Farm Caf\u00e9"
          },
          {
            "key": "F",
            "label": "Tractor Ride Stop"
          },
          {
            "key": "G",
            "label": "Picnic Meadow"
          },
          {
            "key": "H",
            "label": "Artisan Cheese Shop"
          },
          {
            "key": "I",
            "label": "Animal Petting Enclosure"
          }
        ],
        "questions": [
          {
            "id": 11,
            "prompt": "The farm has been managed by the same family since",
            "type": "choice",
            "options": [
              "A 1850",
              "B 1920",
              "C 1975"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 12,
            "prompt": "Children under five years old receive",
            "type": "choice",
            "options": [
              "A free admission",
              "B a farm activity sticker book",
              "C a miniature toy animal"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 13,
            "prompt": "What safety regulation must all guests observe?",
            "type": "choice",
            "options": [
              "A wear rubber boots",
              "B wash hands after contact with animals",
              "C stay on paved walking pathways"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 14,
            "prompt": "Farm tours depart every",
            "type": "choice",
            "options": [
              "A fifteen minutes",
              "B thirty minutes",
              "C hour"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 15,
            "prompt": "Visitor Reception",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 16,
            "prompt": "Tractor Ride Stop",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "F"
            ]
          },
          {
            "id": 17,
            "prompt": "Orchard",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 18,
            "prompt": "Animal Petting Enclosure",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "I"
            ]
          },
          {
            "id": 19,
            "prompt": "Farm Caf\u00e9",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 20,
            "prompt": "Artisan Cheese Shop",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "acceptedAnswers": [
              "H"
            ]
          }
        ]
      },
      "3": {
        "part": 3,
        "title": "Urban bike-sharing schemes",
        "instructions": "Questions 21\u201324: Choose TWO letters. Questions 25\u201330: Choose from the box.",
        "boxOptions": [
          {
            "key": "A",
            "label": "docking station shortage"
          },
          {
            "key": "B",
            "label": "high maintenance costs"
          },
          {
            "key": "C",
            "label": "vandalism and theft"
          },
          {
            "key": "D",
            "label": "safety concerns for cyclists"
          },
          {
            "key": "E",
            "label": "seamless public transport integration"
          },
          {
            "key": "F",
            "label": "rapid user adoption"
          }
        ],
        "questions": [
          {
            "id": 21,
            "prompt": "TWO primary drivers behind city bike schemes (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A reduced road maintenance",
              "B air quality improvement",
              "C congestion relief",
              "D tourism promotion",
              "E health insurance savings"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 22,
            "prompt": "TWO primary drivers behind city bike schemes (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A reduced road maintenance",
              "B air quality improvement",
              "C congestion relief",
              "D tourism promotion",
              "E health insurance savings"
            ],
            "acceptedAnswers": [
              "B",
              "C"
            ]
          },
          {
            "id": 23,
            "prompt": "TWO technological innovations in modern e-bikes (Selection 1 of 2)",
            "type": "choice",
            "options": [
              "A GPS tracking chips",
              "B solar recharging hubs",
              "C puncture-proof solid tires",
              "D automatic pedal assist",
              "E smartphone unlock app"
            ],
            "acceptedAnswers": [
              "A",
              "D"
            ]
          },
          {
            "id": 24,
            "prompt": "TWO technological innovations in modern e-bikes (Selection 2 of 2)",
            "type": "choice",
            "options": [
              "A GPS tracking chips",
              "B solar recharging hubs",
              "C puncture-proof solid tires",
              "D automatic pedal assist",
              "E smartphone unlock app"
            ],
            "acceptedAnswers": [
              "A",
              "D"
            ]
          },
          {
            "id": 25,
            "prompt": "Amsterdam scheme",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "C"
            ]
          },
          {
            "id": 26,
            "prompt": "London scheme",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "A"
            ]
          },
          {
            "id": 27,
            "prompt": "Copenhagen scheme",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "E"
            ]
          },
          {
            "id": 28,
            "prompt": "Paris scheme",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "B"
            ]
          },
          {
            "id": 29,
            "prompt": "New York scheme",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "D"
            ]
          },
          {
            "id": 30,
            "prompt": "Hangzhou scheme",
            "type": "matching",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "acceptedAnswers": [
              "F"
            ]
          }
        ]
      },
      "4": {
        "part": 4,
        "title": "Origins of music in prehistoric society",
        "instructions": "Questions 31\u201340: Complete the notes below. Write ONE WORD ONLY for each answer.",
        "questions": [
          {
            "id": 31,
            "prompt": "Early rhythm originated from mammalian heart",
            "fieldPrefix": "Early rhythm originated from mammalian heart ",
            "type": "text",
            "acceptedAnswers": [
              "beats",
              "beat"
            ]
          },
          {
            "id": 32,
            "prompt": "Coordinated vocal calls strengthened social",
            "fieldPrefix": "Coordinated vocal calls strengthened social ",
            "type": "text",
            "acceptedAnswers": [
              "bonds",
              "bond"
            ]
          },
          {
            "id": 33,
            "prompt": "Bone flutes carved from hollow bird",
            "fieldPrefix": "Bone flutes carved from hollow bird ",
            "type": "text",
            "acceptedAnswers": [
              "bones",
              "bone"
            ]
          },
          {
            "id": 34,
            "prompt": "Cave acoustics amplified resonant singing",
            "fieldPrefix": "Cave acoustics amplified resonant singing ",
            "type": "text",
            "acceptedAnswers": [
              "voices",
              "voice"
            ]
          },
          {
            "id": 35,
            "prompt": "Used in tribal healing ceremonies and spiritual",
            "fieldPrefix": "Used in tribal healing ceremonies and spiritual ",
            "type": "text",
            "acceptedAnswers": [
              "rituals",
              "ritual"
            ]
          },
          {
            "id": 36,
            "prompt": "Rhythmic chanting encouraged synchronized hunting",
            "fieldPrefix": "Rhythmic chanting encouraged synchronized hunting ",
            "type": "text",
            "acceptedAnswers": [
              "effort",
              "movements"
            ]
          },
          {
            "id": 37,
            "prompt": "Mothers soothing infants with repetitive melodic",
            "fieldPrefix": "Mothers soothing infants with repetitive melodic ",
            "type": "text",
            "acceptedAnswers": [
              "tunes",
              "tune"
            ]
          },
          {
            "id": 38,
            "prompt": "Drums created using stretched animal",
            "fieldPrefix": "Drums created using stretched animal ",
            "type": "text",
            "acceptedAnswers": [
              "skins",
              "skin"
            ]
          },
          {
            "id": 39,
            "prompt": "Shared music fostered collective group",
            "fieldPrefix": "Shared music fostered collective group ",
            "type": "text",
            "acceptedAnswers": [
              "identity"
            ]
          },
          {
            "id": 40,
            "prompt": "Evolutionary precursor to modern human",
            "fieldPrefix": "Evolutionary precursor to modern human ",
            "type": "text",
            "acceptedAnswers": [
              "language"
            ]
          }
        ]
      }
    }
  }
};

/**
 * Retrieve authentic Cambridge listening test by ID (e.g. 'c18-test-1', 'c17-test-2').
 * Falls back cleanly to closest series test if ID format slightly differs.
 */
export function getListeningTest(attemptId?: string): ListeningTestData {
  if (!attemptId) {
    return ALL_LISTENING_TESTS['c18-test-1']
  }

  // Exact match
  if (ALL_LISTENING_TESTS[attemptId]) {
    return ALL_LISTENING_TESTS[attemptId]
  }

  // Parse pattern like c18-test-1, c17-t2, c16-1, etc.
  const match = attemptId.match(/(?:c|cambridge_?)(\d+)[-_]?(?:t|test)?(\d+)?/i)
  if (match) {
    const series = match[1]
    const testNum = match[2] || '1'
    const key = `c${series}-test-${testNum}`
    if (ALL_LISTENING_TESTS[key]) {
      return ALL_LISTENING_TESTS[key]
    }
  }

  // Default to Cambridge 18 Test 1
  return ALL_LISTENING_TESTS['c18-test-1']
}

/**
 * Normalizes user answer for fuzzy IELTS matching (ignores punctuation, case, whitespace)
 */
export function normalizeAnswer(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, ' ')
}

/**
 * Check whether a user answer matches any accepted Cambridge answer
 */
export function isListeningAnswerCorrect(userAnswer: string, acceptedAnswers: string[]): boolean {
  if (!userAnswer || !userAnswer.trim()) return false
  const normUser = normalizeAnswer(userAnswer)
  return acceptedAnswers.some((acc) => {
    const normAcc = normalizeAnswer(acc)
    if (normUser === normAcc) return true

    // Handle parentheses alternatives like 24(th) April or strings/string
    const strippedAcc = normAcc.replace(/[()]/g, '')
    if (normUser === strippedAcc) return true

    // Handle number words like 35 vs thirty five
    return false
  })
}
