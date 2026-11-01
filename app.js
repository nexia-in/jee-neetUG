/*
  NEXIA VIRTUAL DESK — PAGE LOGIC
  Easy edit notes:
  - Change year, WhatsApp, Home URL, phone, text and lists in content.js
  - Change colours and sizes in style.css (:root at the top)
  - This file handles navigation, 3 slot pickers, review popup and WhatsApp
*/
(() => {
  "use strict";
  const config = window.NEXIA_CONTENT;
  const $ = (id) => document.getElementById(id);
  let activeExam = null;
  let pendingMessage = "";

  function setText(id, value) {
    const node = $(id);
    if (node && value != null) node.textContent = value;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
  }

  function pad(num) {
    return String(num).padStart(2, "0");
  }

  function formatTimeLabel(hour, minute) {
    const suffix = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${pad(minute)} ${suffix}`;
  }

  function timeOptionsHtml() {
    const start = Number(config.slotStartHour) || 10;
    const end = Number(config.slotEndHour) || 22;
    const step = Number(config.slotIntervalMinutes) || 30;
    const options = ['<option value="">Select time</option>'];
    for (let hour = start; hour <= end; hour += 1) {
      for (let minute = 0; minute < 60; minute += step) {
        if (hour === end && minute > 0) break;
        const value = `${pad(hour)}:${pad(minute)}`;
        options.push(`<option value="${value}">${formatTimeLabel(hour, minute)}</option>`);
      }
    }
    return options.join("");
  }

  function todayIsoDate() {
    const now = new Date();
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  }

  function renderSlots() {
    const labels = config.slotLabels || ["Slot 1", "Slot 2", "Slot 3"];
    const minDate = todayIsoDate();
    $("slotGrid").innerHTML = labels.map((label, index) => `
      <div class="slot-card">
        <div class="slot-tag">${escapeHtml(label)}</div>
        <label class="field">
          <span>${escapeHtml(config.slotDateLabel)}</span>
          <input id="slotDate${index + 1}" type="date" min="${minDate}" required>
        </label>
        <label class="field">
          <span>${escapeHtml(config.slotTimeLabel)}</span>
          <select id="slotTime${index + 1}" required>${timeOptionsHtml()}</select>
        </label>
      </div>
    `).join("");
  }

  function setupContent() {
    setText("brandName", config.brandName);
    setText("experienceText", config.experience);
    setText("heroEyebrow", config.heroEyebrow);
    $("heroTitle").innerHTML = `${escapeHtml(config.heroTitleLine1)}<br><span>${escapeHtml(config.heroTitleLine2)}</span>`;
    setText("heroDescription", config.heroDescription);
    setText("chooseLabel", config.chooseLabel);
    setText("chooseTitle", config.chooseTitle);
    setText("chooseSubtitle", config.chooseSubtitle);
    setText("servicesLinkText", config.servicesLinkText);
    setText("servicesBadge", config.servicesBadge || config.year);
    setText("homeStripText", config.homeStripText);
    setText("photoBannerTitle", config.photoBannerTitle);
    setText("photoBannerText", config.photoBannerText);
    setText("formYear", `APPLICATION SUPPORT · ${config.year}`);
    setText("disclaimerText", config.disclaimer);
    setText("copyrightText", config.copyright.replace("2026", config.year));
    setText("extraHeading", config.extraOptionsHeading);
    setText("extraSubheading", config.extraOptionsSubheading);
    setText("timeHeading", config.slotHeading);
    setText("timeSubheading", config.slotSubheading);
    setText("popupTitle", config.popupTitle);
    setText("popupMessage", config.popupMessage);
    setText("confirmSend", config.popupSendText);
    setText("cancelSend", config.popupEditText);
    setText("navHome", config.homeLabel);
    setText("navContact", config.contactLabel);

    $("navHome").href = config.homeUrl;
    $("navContact").href = `tel:${config.contactPhoneTel || "+91" + config.contactPhone}`;
    $("knowServicesBtn").href = config.servicesUrl;
    $("homeStrip").href = config.homeUrl;
    $("formHomeLink").href = config.homeUrl;
    $("footerServicesLink").href = config.servicesUrl;
    document.title = `${config.brandName} Virtual Desk | Entrance Application Support`;
    renderSlots();
  }

  function renderOptions(exam) {
    const data = config.exams[exam];
    $("courseChoices").innerHTML = data.courses.map((course) =>
      `<label class="choice-option"><input type="checkbox" name="course" value="${escapeHtml(course)}"><span>${escapeHtml(course)}</span></label>`
    ).join("");
    $("documentChoices").innerHTML = data.documents.map((doc) =>
      `<label class="check-option"><input type="checkbox" name="document" value="${escapeHtml(doc)}"><span>${escapeHtml(doc)}</span></label>`
    ).join("");
    $("extraChoices").innerHTML = (config.extraOptions || []).map((item) =>
      `<label class="check-option"><input type="checkbox" name="extra" value="${escapeHtml(item)}"><span>${escapeHtml(item)}</span></label>`
    ).join("");
  }

  function openExam(exam) {
    activeExam = exam;
    const data = config.exams[exam];
    setText("formTitle", `${data.title} ${config.year}`);
    setText("formMiniMark", data.mark);
    setText("formIntro", exam === "jee"
      ? "Enter the details below for JEE Main application assistance (JEE Main അപേക്ഷാ സഹായത്തിനായി താഴെ വിവരങ്ങൾ നൽകുക)."
      : "Enter the details below for NEET UG application assistance (NEET UG അപേക്ഷാ സഹായത്തിനായി താഴെ വിവരങ്ങൾ നൽകുക).");
    renderOptions(exam);
    $("landingView").classList.add("hidden");
    $("formView").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    closeModal();
    $("formView").classList.add("hidden");
    $("landingView").classList.remove("hidden");
    activeExam = null;
    pendingMessage = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function checkedValues(name) {
    return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(el => el.value);
  }

  function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 3200);
  }

  function formatDateDisplay(value) {
    if (!value) return "";
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  function formatTimeDisplay(value) {
    if (!value) return "";
    const [hourText, minuteText] = value.split(":");
    return formatTimeLabel(Number(hourText), Number(minuteText));
  }

  function collectSlots() {
    return [1, 2, 3].map((num) => ({
      date: $(`slotDate${num}`).value,
      time: $(`slotTime${num}`).value
    }));
  }

  function validateSlots(slots) {
    if (slots.some(slot => !slot.date || !slot.time)) {
      showToast(config.slotRequiredMessage);
      $("slotGrid").scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    const keys = slots.map(slot => `${slot.date}|${slot.time}`);
    if (new Set(keys).size !== keys.length) {
      showToast(config.slotSameMessage);
      $("slotGrid").scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    return true;
  }

  function buildReviewHtml(payload) {
    const slotLines = payload.slots.map((slot, index) =>
      `<div><strong>${escapeHtml((config.slotLabels || [])[index] || `Slot ${index + 1}`)}:</strong> ${escapeHtml(formatDateDisplay(slot.date))} · ${escapeHtml(formatTimeDisplay(slot.time))}</div>`
    ).join("");
    return `
      <div><strong>Exam:</strong> ${escapeHtml(payload.examName)} ${escapeHtml(config.year)}</div>
      <div><strong>Student Name:</strong> ${escapeHtml(payload.name)}</div>
      <div><strong>WhatsApp Number:</strong> ${escapeHtml(payload.phone)}</div>
      <div><strong>Email:</strong> ${escapeHtml(payload.email)}</div>
      <div><strong>Course / Paper:</strong> ${escapeHtml(payload.courses.join(", "))}</div>
      <div><strong>Exam Medium:</strong> ${escapeHtml(payload.medium)}</div>
      <div><strong>Category:</strong> ${escapeHtml(payload.category)}</div>
      <div><strong>Documents:</strong> ${escapeHtml(payload.docs.join(", ") || "Not confirmed")}</div>
      <div><strong>Extra Options:</strong> ${escapeHtml(payload.extras.join(", ") || "None")}</div>
      ${slotLines}
      <div><strong>Contact Method:</strong> ${escapeHtml(payload.mode)}</div>
      <div><strong>Additional Notes:</strong> ${escapeHtml(payload.notes)}</div>
    `;
  }

  function buildWhatsAppMessage(payload) {
    const slotLines = payload.slots.map((slot, index) =>
      `• ${(config.slotLabels || [])[index] || `Slot ${index + 1}`}: ${formatDateDisplay(slot.date)} · ${formatTimeDisplay(slot.time)}`
    );
    return [
      `*${payload.examName} ${config.year} - Nexia Virtual Desk*`,
      "",
      `*Student Name:* ${payload.name}`,
      `*WhatsApp Number:* ${payload.phone}`,
      `*Email:* ${payload.email}`,
      "",
      "*Selected Course(s) / Paper(s):*",
      ...payload.courses.map(item => `• ${item}`),
      "",
      `*Exam Medium:* ${payload.medium}`,
      `*Category:* ${payload.category}`,
      "",
      "*Available Documents:*",
      ...(payload.docs.length ? payload.docs.map(item => `• ${item}`) : ["• Not confirmed"]),
      "",
      "*Extra Options:*",
      ...(payload.extras.length ? payload.extras.map(item => `• ${item}`) : ["• None"]),
      "",
      "*Preferred Slot Booking Time for Registration:*",
      ...slotLines,
      "",
      `*Contact Method:* ${payload.mode}`,
      `*Additional Notes:* ${payload.notes}`,
      "",
      "_Photo services required, if applicable: Physical Photo / Live Photo / Signature / Thumb Impression._"
    ].join("\n");
  }

  function openModal() {
    $("confirmModal").classList.remove("hidden");
  }

  function closeModal() {
    $("confirmModal").classList.add("hidden");
  }

  function sendToWhatsApp() {
    if (!pendingMessage) return;
    const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(pendingMessage)}`;
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      showToast("If WhatsApp did not open, allow pop-ups in your browser (WhatsApp തുറന്നില്ലെങ്കിൽ browser pop-up അനുവദിക്കുക).");
    } else {
      showToast("WhatsApp message is ready. Review it before sending (സന്ദേശം പരിശോധിച്ച ശേഷം അയയ്ക്കുക).");
      closeModal();
    }
  }

  $("applicationForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!activeExam) return;
    const name = $("studentName").value.trim();
    const phone = $("studentPhone").value.trim();
    if (!/^[0-9]{10}$/.test(phone)) {
      showToast("Please enter a valid 10-digit mobile number (ശരിയായ 10 അക്ക മൊബൈൽ നമ്പർ നൽകുക).");
      $("studentPhone").focus();
      return;
    }
    const courses = checkedValues("course");
    if (!courses.length) {
      showToast("Please select at least one course / paper (കുറഞ്ഞത് ഒരു കോഴ്സ് / പേപ്പർ തിരഞ്ഞെടുക്കുക).");
      $("courseChoices").scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const slots = collectSlots();
    if (!validateSlots(slots)) return;

    const payload = {
      examName: config.exams[activeExam].title,
      name,
      phone,
      email: $("studentEmail").value.trim() || "Not provided",
      courses,
      medium: $("examMedium").value || "Not selected",
      category: $("studentCategory").value || "Not specified",
      docs: checkedValues("document"),
      extras: checkedValues("extra"),
      slots,
      mode: $("contactMode").value,
      notes: $("extraNotes").value.trim() || "None"
    };

    pendingMessage = buildWhatsAppMessage(payload);
    $("reviewDetails").innerHTML = buildReviewHtml(payload);
    openModal();
  });

  $("confirmSend").addEventListener("click", sendToWhatsApp);
  $("cancelSend").addEventListener("click", closeModal);
  $("confirmModal").addEventListener("click", (event) => {
    if (event.target === $("confirmModal")) closeModal();
  });

  document.querySelectorAll("[data-exam]").forEach(button => {
    button.addEventListener("click", () => openExam(button.dataset.exam));
  });
  $("backButton").addEventListener("click", goHome);
  $("brandHome").addEventListener("click", (event) => {
    event.preventDefault();
    goHome();
  });
  setupContent();
})();
