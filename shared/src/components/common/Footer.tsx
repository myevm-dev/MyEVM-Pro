import React from 'react';

import { Text } from './Typography';
import styled from 'styled-components';
import TwitterFooterIcon from '../../assets/svg/TwitterFooter';
import { RESPONSIVE_BREAKPOINT_TABLET } from '../../data/constants/Breakpoints';
import { GREY_400 } from '../../data/constants/Colors';
import myevmpro from '../../assets/png/myevmpro.png';
import prologo from '/workspaces/aloe/shared/src/assets/png/prologo.png';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  background-color: rgba(0, 1, 2, 1);
  border-top: 1px solid rgba(18, 29, 37, 1);
  padding-left: 20px;
  padding-right: 20px;
  z-index: 40;

  @media (max-width: ${RESPONSIVE_BREAKPOINT_TABLET}) {
    display: none;
  }
`;

const FooterLink = styled(Text)`
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 12px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: rgba(34, 54, 69, 1);
`;

const Image = styled.img`
  width: 200px;
  height: 50px;
  margin-right: 10px;
`;

const SmallImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const LogoLink = styled.a`
  margin: 0 10px;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className='flex flex-row items-center'>
        <Image src={myevmpro} alt='MyEVMPro Logo' />
        <a href={'https://twitter.com/myevmxyz'} target='_blank' rel='noopener noreferrer' title='Follow us on Twitter'>
          <TwitterFooterIcon width={20} height={20} />
        </a>
      </div>
      <LogoContainer>
        <LogoLink href='https://myevm.pro' target='_blank' rel='noopener noreferrer'>
          <SmallImage src={prologo} alt='Pro Logo' />
        </LogoLink>
      </LogoContainer>
      <div className='flex flex-row items-center'>
        <FooterLink
          as='a'
          size='S'
          weight='medium'
          color={GREY_400}
          href={'https://aloe.capital/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered By Aloe
        </FooterLink>
        <VerticalDivider />
        <FooterLink
          as='a'
          size='S'
          weight='medium'
          color={GREY_400}
          href={'https://docs.aloe.capital/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          Docs
        </FooterLink>
      </div>
    </StyledFooter>
  );
}
