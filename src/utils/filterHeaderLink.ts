const filterHeaderLink = (
  Headerlinks: any[],
  auth: { user: { email: any } }
) => {
  return Headerlinks.map((link: { $if: { user: boolean } }) => {
    if (auth.user.email && (link.$if?.user === true || !link.$if)) {
      return link;
    } else if (!auth.user.email && (link.$if?.user === false || !link.$if)) {
      return link;
    }
    return null;
  }).filter(Boolean);
};

export default filterHeaderLink;
