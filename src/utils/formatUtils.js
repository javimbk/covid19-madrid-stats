function humanizeDateString(dateString) {
  const [year, month, day] = dateString.split('-');

  return `${day}/${month}/${year}`;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  humanizeDateString,
};
