import Link from 'next/link';
import { Flex, Item } from 'react-flex-ready';
import { Container } from 'ui/styles';
import links from 'data/footerLinks.json';

import { Address, Links, SubItem, Wrapper } from './styles';
import Logo from 'ui/Logo';

const Footer = () => (
  <Wrapper>
    <Flex as={Container} align="flex-start">
      <Item col={8} colTablet={12} colMobile={12} gap={2}>
        <Link href="/" as="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Address>
          <p>987 Dinero Road</p>
          <p>Stamford CT 01234</p>
        </Address>
      </Item>
      <Item col={4} colTablet={12} colMobile={12} gap={2}>
        <Links>
          {links.map(({ block }, index) => (
            <SubItem key={index}>
              {block.map(({ title, href, as }, i) => (
                <Link key={i} href={href} as={as}>
                  <a>{title}</a>
                </Link>
              ))}
            </SubItem>
          ))}
        </Links>
      </Item>
    </Flex>
  </Wrapper>
);

export default Footer;
