import { NavBar, NavBarLink } from 'shared/lib/components/navbar/NavBar';
import { GREY_700 } from 'shared/lib/data/constants/Colors';
import { isDappnet } from 'shared/lib/util/Utils';
import styled from 'styled-components';
import tw from 'twin.macro';

const NAV_LINKS: NavBarLink[] = [
  {
    label: 'Portfolio',
    to: 'https://www.myevm.pro/portfolio',
  },
  {
    label: 'Markets',
    to: 'https://www.myevm.pro/markets',
  },
  {
    label: 'Borrow',
    to: 'https://www.myevm.pro/borrow',
    //to: isDappnet() ? 'https://earn.aloe.eth/' : 'https://www.myevm.pro/borrow',
    isExternal: true,
  },
  {
    label: 'LP',
    to: 'https://lp.myevm.pro/',
  },
  {
    label: 'Leaderboard',
    to: 'https://www.myevm.pro/leaderboard',
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

  return (
    <Nav>
      <NavBar links={NAV_LINKS} checkboxes={checkboxes} isAllowedToInteract={true} />
    </Nav>
  );
}
