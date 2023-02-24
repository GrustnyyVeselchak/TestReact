import React from "react";
import {Contaiter, Wrapper, Row, Column, Link, Title} from './styles/footer'

export default function Footer({children, ...restProps})
{
    return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper ({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow ({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Сolumn = function FooterColumn ({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink ({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterWrapper ({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}