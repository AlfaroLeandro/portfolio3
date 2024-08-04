import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white" }}>

        <img src="/logo.svg" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Leandro Alfaro</span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Habilidades</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>Acerca de</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/AlfaroLeandro">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="www.linkedin.com/in/leandro-alfaro-547864233">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
