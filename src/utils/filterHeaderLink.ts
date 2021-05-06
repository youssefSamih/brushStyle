import { authContextPops } from 'interfaces';

const filterHeaderLink = (Headerlinks: any[], auth?: authContextPops) => {
  return Headerlinks.map((link: { $if: { user: boolean } }) => {
    if (auth?.user.emailVerified && (link.$if?.user === true || !link.$if)) {
      return link;
    } else if (
      !auth?.user.emailVerified &&
      (link.$if?.user === false || !link.$if)
    ) {
      return link;
    }
    return null;
  }).filter(Boolean);
};

export default filterHeaderLink;
