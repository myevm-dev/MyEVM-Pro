import { NavBar, NavBarLink } from 'shared/lib/components/navbar/NavBar';
import { GREY_700 } from 'shared/lib/data/constants/Colors';
import styled from 'styled-components';
import tw from 'twin.macro';

const DEFAULT_NAV_LINKS: NavBarLink[] = [
  {
    label: 'Portfolio',
    to: '/portfolio',
  },
  {
    label: 'Markets',
    to: '/markets',
  },
  {
    label: 'Borrow',
    to: '/borrow',
  },
  {
    label: 'LP',
    to: 'https://lp.myevm,pro/',
  },
];

const EXTENDED_NAV_LINKS: NavBarLink[] = [
  ...DEFAULT_NAV_LINKS,
  // {
  //   label: 'Boost',
  //   to: '/boost',
  // },
  {
    label: 'Leaderboard',
    to: '/leaderboard',
  },
];

const Nav = styled.nav`
  ${tw`fixed top-0 left-0 right-0 flex items-center h-16`}
  border-bottom: 1px solid ${GREY_700};
  background-color: rgba(6, 11, 15, 1);
  z-index: 40;
`;

export type HeaderProps = {
  checkboxes: React.ReactNode[];
};

export default function Header(props: HeaderProps) {
  const { checkboxes } = props;

  const navLinks: NavBarLink[] = EXTENDED_NAV_LINKS;

  return (
    <Nav>
      <NavBar links={navLinks} checkboxes={checkboxes} isAllowedToInteract={true} />
    </Nav>
  );
}
