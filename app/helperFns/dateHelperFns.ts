import { DateTime } from "luxon";

type DateInsightsReturnType = {
  dateInWords: string;
  daysDiff: string;
};

export function getDateInsights(
  date: Date,
  format: string
): DateInsightsReturnType {
  const formattedDate = DateTime.fromFormat(String(date), format);

  const dateInWords = formattedDate.toLocaleString({ dateStyle: "long" });

  const daysDiff = formattedDate.diffNow().as("days").toFixed(0);

  return { dateInWords, daysDiff };
}

export function validateExpiryDate(
  dateValue: Date | null | undefined,
  message: string
) {
  if (dateValue) {
    const currentDate = new Date();
    const paramDate = new Date(dateValue);
    if (paramDate <= currentDate) {
      return message;
    } else {
      return true;
    }
  }
}
export function validateDateOfJoining(
  dateValue: Date | null | undefined,
  message: string
) {
  if (dateValue) {
    const currentDate = new Date();
    const paramDate = new Date(dateValue);
    if (paramDate >= currentDate) {
      return message;
    } else {
      return true;
    }
  }
}

export function isDateExpired(date: Date | null | undefined) {
  if (date) {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    if (selectedDate < currentDate) {
      return true;
    } else {
      return false;
    }
  }
}

export function getActiveOrExpiredStatus(
  dateValue: string
): "active" | "expired" {
  const currentDate = new Date();
  const paramDate = new Date(dateValue);
  if (paramDate < currentDate) {
    return "expired";
  } else {
    return "active";
  }
}

export function isAdult(dateOfBirth: Date | null) {
  if (dateOfBirth) {
    const birthDateString = DateTime.fromJSDate(dateOfBirth);
    const ageInYears = DateTime.now().diff(birthDateString, "years").years;

    if (Number(ageInYears) >= 18.0) {
      return true;
    }
    return false;
  }
}

export function getAge(dateOfBirth: DateTime): string {
  const currentDate = DateTime.local();
  const age = currentDate.diff(dateOfBirth, "years").years.toFixed(1);
  return `${age} years`;
}

export function getDaysToExpiry(expiryDate: DateTime): string {
  const currentDate = DateTime.local();
  const days = expiryDate.diff(currentDate, "days").days.toFixed(1);
  return days;
}
