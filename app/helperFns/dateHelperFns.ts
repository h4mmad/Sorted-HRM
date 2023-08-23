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
