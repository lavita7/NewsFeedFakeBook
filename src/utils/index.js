export const dateFormat = date => {
  const date_n = new Date(date);
  let year = date_n.getFullYear();
  let month =
    date_n.getMonth() < 10 ? '0' + date_n.getMonth() : date_n.getMonth();
  let day = date_n.getDate() < 10 ? '0' + date_n.getDate() : date_n.getDate();
  let hour =
    date_n.getUTCHours() < 10
      ? '0' + date_n.getUTCHours()
      : date_n.getUTCHours();
  let minutes =
    date_n.getUTCMinutes() < 10
      ? '0' + date_n.getUTCMinutes()
      : date_n.getUTCMinutes();

  const format_date =
    day + '-' + month + '-' + year + ' ' + hour + ':' + minutes;
  return format_date;
};
