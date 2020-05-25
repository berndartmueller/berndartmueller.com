// Credits https://gist.github.com/polygonplanet/7952234

/**
 * Format a date like YYYY-MM-DD.
 *
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 * @license MIT
 */
export function formatDate(template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');

  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);

  return date
    .toISOString()
    .split(/[-:.TZ]/)
    .reduce(function (template, item, i) {
      return template.split(specs[i]).join(item);
    }, template);
}

export function formatDateNth(date) {
  const nth = function (d) {
    if (d > 3 && d < 21) return 'th';

    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const day = date.getDate();

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][
    date.getMonth()
  ];

  return `${day}<sup>${nth(day)}</sup> ${month} ${date.getFullYear()}`;
}
