export default function calculateWorktime(
  start: string,
  end: string | null
): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date(); // Use current date if `end` is null

  const diffInMs = endDate.getTime() - startDate.getTime();

  const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
  const diffInMonths = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
  );

  if (diffInYears) {
    return `${diffInYears} years, ${diffInMonths} months`;
  } else {
    return `${diffInMonths} months`;
  }
}
