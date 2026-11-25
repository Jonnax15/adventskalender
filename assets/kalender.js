const season = Number(document.documentElement.dataset.year);
const localPreview = location.protocol === 'file:';
const dateFormatter = new Intl.DateTimeFormat('de-DE', {
  timeZone: 'Europe/Berlin',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

const date = Object.fromEntries(
  dateFormatter.formatToParts(new Date())
    .filter(({ type }) => type !== 'literal')
    .map(({ type, value }) => [type, Number(value)]),
);
const beforeSeason = date.year < season || (date.year === season && date.month < 12);
const today = date.year === season && date.month === 12 ? date.day : 0;

function isAvailable(day) {
  return localPreview || (!beforeSeason && (!today || today >= day));
}

function pageUrl(relativeDirectory) {
  return localPreview ? `${relativeDirectory}index.html` : relativeDirectory;
}

for (const door of document.querySelectorAll('[data-door]')) {
  const day = Number(door.dataset.door);
  const status = door.querySelector('.door-status');
  if (!isAvailable(day)) continue;

  const link = document.createElement('a');
  link.className = door.className;
  link.href = pageUrl(`./Tag-${day}/`);
  status.textContent = day === today ? 'Heute öffnen' : 'Öffnen';
  if (day === today) link.classList.add('door-today');
  link.setAttribute('aria-label', `Türchen ${day}. ${status.textContent}`);
  link.append(...door.childNodes);
  door.replaceWith(link);
}

const message = document.querySelector('#day-message');
if (message) {
  const day = Number(message.dataset.day);
  const content = document.getElementById('day-text');
  const status = document.getElementById('day-status');

  if (isAvailable(day)) {
    message.replaceChildren(content.content.cloneNode(true));
  } else {
    status.textContent = `Dieses Türchen öffnet sich am ${day}. Dezember ${season}.`;
  }
}

for (const link of document.querySelectorAll('[data-home]')) {
  link.href = pageUrl(link.dataset.home);
}
