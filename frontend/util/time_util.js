const timeago = (date) => {
  if (date === undefined) {
    return "0 seconds";

  }
  date = new Date(date);

  const seconds = Math.floor((new Date() - date) / 1000);

  const timeinyear = Math.floor(seconds / 31536000);

  if (timeinyear > 1) {
    return timeinyear + " years";
  }

  const timeinmonth = Math.floor(seconds / 2592000);
  if (timeinmonth > 1) {
    return timeinmonth + " months";
  }

  const timeindays = Math.floor(seconds / 86400);
  if (timeindays > 1) {
    return timeindays + " days";
  }

  const timeinhours = Math.floor(seconds / 3600);

  if (timeinhours > 1) {
    return timeinhours + " hours";
  }

  const timeinminutes = Math.floor(seconds / 60);
  if (timeinminutes > 1) {
    return timeinminutes + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

export default timeago;