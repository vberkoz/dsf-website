type DateFormatterProps = {
  dateString: string;
  format?: "short" | "long" | "medium";
}

export default function DateFormatter({ dateString, format = "long" }: DateFormatterProps) {
  const date = new Date(dateString);
  
  const formatOptions: Record<string, Intl.DateTimeFormatOptions> = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    medium: { year: 'numeric', month: 'long', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
  };

  const formattedDate = date.toLocaleDateString('en-US', formatOptions[format]);

  return <time dateTime={dateString}>{formattedDate}</time>;
}