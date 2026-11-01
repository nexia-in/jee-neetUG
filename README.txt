NEXIA VIRTUAL DESK — APPLICATION PORTAL

FILES (easy to edit in VS Code)
- content.js   : year, WhatsApp number, Home URL, phone, headings, extra options, slot text, popup message, course/document lists
- style.css    : colours, glow, buttons, layout. Change values under :root at the top
- app.js       : form logic, 3-slot booking, review popup, WhatsApp send
- index.html   : page structure

HOW TO USE
1. Keep all files in the same folder.
2. Open index.html in a browser.
3. Choose JEE MAIN or NEET UG.
4. Fill the form, pick 3 different slot times (10:00 AM to 10:00 PM).
5. Review the popup, then send details via WhatsApp.

QUICK EDITS
- Colours: style.css → :root  (--page-bg, --accent, --button-from, --button-to, --jee, --neet)
- Year / WhatsApp: content.js → year, whatsappNumber
- Home link: content.js → homeUrl
- Contact call number: content.js → contactPhone and contactPhoneTel
- Know Our Services: content.js → servicesUrl, servicesLinkText
- Extra options: content.js → extraOptions
- Popup message: content.js → popupMessage, popupSendText
- Slot hours: content.js → slotStartHour, slotEndHour, slotIntervalMinutes

IMPORTANT
- This is a front-end website. It does not upload or store documents or photos.
- WhatsApp opens with a pre-filled message; the user must press Send.
- Contact Us uses tel: so a phone can place a call to 9961381033.
- This site is not an official NTA website.
