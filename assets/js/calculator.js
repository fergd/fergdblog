document.addEventListener("DOMContentLoaded", function () {
  const dateSpans = document.querySelectorAll(".date-range");

  dateSpans.forEach(el => {
    const startRaw = el.dataset.start;
    const endRaw = el.dataset.end;

    function parseDate(raw) {
      if (!raw) return null;
      if (raw.toLowerCase() === "present") return new Date();

      if (/^\d{4}$/.test(raw)) {
        return new Date(Date.UTC(parseInt(raw), 0, 1));
      } else if (/^\d{4}-\d{2}$/.test(raw)) {
        const [year, month] = raw.split("-");
        return new Date(Date.UTC(parseInt(year), parseInt(month) - 1, 1));
      } else if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
        const [year, month, day] = raw.split("-");
        return new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
      } else {
        return null;
      }
    }

    const start = parseDate(startRaw);
    const end = parseDate(endRaw);

    if (!start || !end || isNaN(start.getTime()) || isNaN(end.getTime())) {
      console.warn("Invalid date format:", startRaw, endRaw);
      el.textContent = '';
      return;
    }

    const years = (end - start) / (1000 * 60 * 60 * 24 * 365.25);

    let roundedYears;
    if (years < 1) {
      roundedYears = "<1 yr";
    } else if (years % 1 === 0) {
      // Whole number
      roundedYears = `${years.toFixed(0)} yrs`;
    } else {
      // Decimal
      roundedYears = `${years.toFixed(1)} yrs`;
    }

    el.textContent = `(${roundedYears})`;
  });
});
