const monthNames = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", 
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

function generateCalendar() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  // Set top header label text dynamically
  document.getElementById('calendar-header').textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const daysContainer = document.getElementById('days-container');
  daysContainer.innerHTML = ''; // Wipe out old blocks to prevent overlaps

  // Get index of the first weekday of the targeted month (0 = Sunday, 1 = Monday, etc.)
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  // Get the absolute total number of days inside the targeted month
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate invisible blank spacer columns to shift the starting day
  for (let i = 0; i < firstDayIndex; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('day-cell', 'empty-cell');
    daysContainer.appendChild(emptyCell);
  }

  // Populate active calendar number cells
  for (let day = 1; day <= totalDays; day++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('day-cell');
    dayCell.textContent = day;

    // Apply the gold ring wrapper style class if it matches today's date
    if (day === currentDate) {
      dayCell.classList.add('current-day');
    }

    daysContainer.appendChild(dayCell);
  }
}

// Notion frame transparency enforcement code layer
(function() {
  function matchNotionTheme() {
    try {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.style.setProperty('background', isDark ? '#191919' : 'transparent', 'important');
      document.documentElement.style.setProperty('background', isDark ? '#191919' : 'transparent', 'important');
    } catch(e) {
      document.body.style.background = 'transparent';
    }
  }
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addListener(matchNotionTheme);
  }
  matchNotionTheme();
})();

// Build calendar layout grid on startup load
generateCalendar();
