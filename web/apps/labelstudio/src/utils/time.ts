export function compareDate(savedDateString: string | null, days: number) {
  if (!savedDateString) {
    return true;
  }

  // Convert the string to a number
  const savedDate = Number(savedDateString);

  // Check if the conversion was successful
  if (isNaN(savedDate)) {
    return true;
  }

  // Calculate the time difference in milliseconds
  const timeDifference = Date.now() - savedDate;

  // Calculate the number of milliseconds in the specified number of days
  const daysInMs = days * 24 * 60 * 60 * 1000;

  // Return true if the saved date is older than the specified number of days
  return timeDifference > daysInMs;
}
