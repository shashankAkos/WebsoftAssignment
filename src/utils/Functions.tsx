import moment from "moment";

export const formatCreatedAt = (createdAt: string) => {
  const now = moment();
  const createdMoment = moment(createdAt);
  const diffMinutes = now.diff(createdMoment, 'minutes');
  const diffHours = now.diff(createdMoment, 'hours');

  if (diffMinutes < 1) {
    return "Just now";
  } else if (diffMinutes < 60) {
    return `${diffMinutes} min ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hours ago`;
  } else {
    return createdMoment.format('dddd, MMMM D');
  }
};