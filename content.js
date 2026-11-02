/*
  ============================================================
  NEXIA VIRTUAL DESK — EASY EDIT FILE (open this in VS Code)
  Change text, links, phone, year, slots and lists here.
  You usually do not need to edit app.js for content changes.
  ============================================================
*/
window.NEXIA_CONTENT = {
  brandName: "NEXIA",
  year: "",
  experience: "17 YEARS OF TRUSTED SERVICE",

  /* WhatsApp: country code + number, digits only */
  whatsappNumber: "919961850698",

  /* Top navigation */
  homeUrl: "https://nexiahomeerea.vercel.app/",
  homeLabel: "Home",
  contactPhone: "9961381033",
  contactPhoneTel: "+919961381033",
  contactLabel: "Contact Us",

  /* Know Our Services button on the launching page */
  servicesUrl: "https://nexiahomeerea.vercel.app/",
  servicesLinkText: "Know Our Services",
  servicesBadge: "2026",

  heroEyebrow: "ONLINE APPLICATION ASSISTANCE",
  heroTitleLine1: "Your Application.",
  heroTitleLine2: "Made Simple.",
  heroDescription: "Entrance exam applications made easier with guided online support from Nexia Virtual Desk.",

  chooseLabel: "GET STARTED",
  chooseTitle: "Choose your application",
  chooseSubtitle: "താഴെ ആവശ്യമായ പരീക്ഷ തിരഞ്ഞെടുക്കുക.",
  homeStripText: "Nexia Virtual Desk Home — explore all our services",

  photoBannerTitle: "Photo & Document Preparation Available",
  photoBannerText: "Physical Photo · Live Photo · Signature · Thumb Impression",

  /* Extra options shown in the application form */
  extraOptionsHeading: "Extra Options (അധിക ഓപ്ഷനുകൾ)",
  extraOptionsSubheading: "Select any extra help you need from Nexia Virtual Desk (Nexia Virtual Desk-ൽ നിന്ന് ആവശ്യമായ അധിക സഹായം തിരഞ്ഞെടുക്കുക)",
  extraOptions: [
    "Physical Photo Preparation (ഫോട്ടോ തയ്യാറാക്കൽ)",
    "Live Photo Assistance (ലൈവ് ഫോട്ടോ സഹായം)",
    "Signature Scanning (ഒപ്പ് സ്കാൻ)",
    "Thumb Impression Support (വിരലടയാളം)",
    "Other Nexia Virtual Desk Home services (മറ്റ് Nexia സേവനങ്ങൾ)"
  ],

  /* Slot booking: 3 different date/time choices, 10:00 AM to 10:00 PM */
  slotHeading: "Preferred Slot Booking Time for Registration (രജിസ്ട്രേഷനുള്ള സ്ലോട്ട് ബുക്കിംഗ് സമയം)",
  slotSubheading: "Pick 3 different dates or times between 10:00 AM and 10:00 PM (രാവിലെ 10:00 മുതൽ രാത്രി 10:00 വരെ 3 വ്യത്യസ്ത തീയതി / സമയം തിരഞ്ഞെടുക്കുക)",
  slotDateLabel: "Date (തീയതി)",
  slotTimeLabel: "Time (സമയം)",
  slotLabels: ["Slot 1", "Slot 2", "Slot 3"],
  slotStartHour: 10,
  slotEndHour: 22,
  slotIntervalMinutes: 30,
  slotRequiredMessage: "Please choose 3 different slot date/time options (3 വ്യത്യസ്ത സ്ലോട്ടുകൾ തിരഞ്ഞെടുക്കുക).",
  slotSameMessage: "Each slot must have a different date or time (ഓരോ സ്ലോട്ടും വ്യത്യസ്ത തീയതിയോ സമയമോ ആയിരിക്കണം).",

  /* Review popup before WhatsApp */
  popupTitle: "Review your details (വിവരങ്ങൾ പരിശോധിക്കുക)",
  popupMessage: "Your dates are noted. When one of our customer agents is free, they will contact you through WhatsApp or phone. (നിങ്ങളുടെ തീയതികൾ രേഖപ്പെടുത്തിയിരിക്കുന്നു. ഞങ്ങളുടെ കസ്റ്റമർ ഏജന്റ് ലഭ്യമാകുമ്പോൾ WhatsApp അല്ലെങ്കിൽ ഫോൺ വഴി ബന്ധപ്പെടും.)",
  popupSendText: "Send Details via WhatsApp (WhatsApp വഴി വിവരങ്ങൾ അയക്കുക)",
  popupEditText: "Edit details (വിവരങ്ങൾ തിരുത്തുക)",

  disclaimer: "Disclaimer: This is not an official website. Created by Nexia Virtual Desk strictly for assisting our customers with their online applications.",
  copyright: "© 2026 Nexia Virtual Desk, Olarikkara.",

  exams: {
    jee: {
      title: "JEE MAIN 2026-27",
      mark: "J",
      courses: [
        "B.E. / B.Tech (Paper 1) – എഞ്ചിനീയറിംഗ്",
        "B.Arch (Paper 2A) – ആർക്കിടെക്ചർ",
        "B.Planning (Paper 2B) – പ്ലാനിംഗ്"
      ],
      documents: [
        "Aadhaar Card / Valid ID Proof (ആധാർ കാർഡ് / സാധുവായ തിരിച്ചറിയൽ രേഖ)",
        "10th Standard Certificate / Details (പത്താം ക്ലാസ് സർട്ടിഫിക്കറ്റ് / വിവരങ്ങൾ)",
        "12th Standard Details / Mark List (പ്ലസ് ടു വിവരങ്ങൾ / മാർക്ക് ലിസ്റ്റ്)",
        "Category Certificate (if applicable) (കാറ്റഗറി സർട്ടിഫിക്കറ്റ് – ബാധകമെങ്കിൽ)",
        "PwD / UDID Certificate (if applicable) (ഭിന്നശേഷി സർട്ടിഫിക്കറ്റ് – ബാധകമെങ്കിൽ)",
        "Scanned Passport Photo (പാസ്പോർട്ട് സൈസ് ഫോട്ടോ)",
        "Scanned Signature (ഒപ്പ്)"
      ]
    },
    neet: {
      title: "NEET UG 2027",
      mark: "N",
      courses: [
        "MBBS",
        "BDS",
        "BAMS",
        "BHMS",
        "BUMS",
        "BSMS",
        "B.Sc Nursing (where applicable) – ബാധകമെങ്കിൽ",
        "BVSc & AH (where applicable) – ബാധകമെങ്കിൽ"
      ],
      documents: [
        "Aadhaar Card / Valid ID Proof (ആധാർ കാർഡ് / സാധുവായ തിരിച്ചറിയൽ രേഖ)",
        "10th Standard Certificate / Details (പത്താം ക്ലാസ് സർട്ടിഫിക്കറ്റ് / വിവരങ്ങൾ)",
        "12th Standard Details / Mark List (പ്ലസ് ടു വിവരങ്ങൾ / മാർക്ക് ലിസ്റ്റ്)",
        "Category Certificate (if applicable) (കാറ്റഗറി സർട്ടിഫിക്കറ്റ് – ബാധകമെങ്കിൽ)",
        "PwD Certificate (if applicable) (ഭിന്നശേഷി സർട്ടിഫിക്കറ്റ് – ബാധകമെങ്കിൽ)",
        "Scanned Passport Photo (പാസ്പോർട്ട് സൈസ് ഫോട്ടോ)",
        "Scanned Signature (ഒപ്പ്)",
        "Thumb Impression (if required) (വിരലടയാളം – ആവശ്യപ്പെട്ടാൽ)"
      ]
    }
  }
};
