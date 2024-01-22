export function formatDate(dateString: string | null): string {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Intl.DateTimeFormat("ko-KR", options).format(date);
}
