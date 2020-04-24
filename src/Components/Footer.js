import React from 'react';
import styled from 'styled-components'
const Footer = styled.footer `
   
    bottom:0;
    height: 2.5rem;  
    display:flex;
    position: absolute;
    justify-content:space-between;
    vertical-align: baseline;
    width:100%
    `
const List =styled.ul `
    display:flex;
`
    
const ListItem = styled.li `
    margin-right:16px`;
const Link = styled.a `
    color:${props =>props.theme.darkBlueColor};
    font-size:12px;
    font-weight:600;    
`;
const CopyLight = styled.span `
    font-size:12px;
    color:${props =>props.theme.darkGreyColor}

`
export default () =>{
    return(
    <Footer>
        <List>
            <ListItem> <Link>소개 </Link> </ListItem>
            <ListItem> <Link>도움말</Link> </ListItem>
            <ListItem> <Link>홍보 센터</Link> </ListItem>
            <ListItem> <Link>API</Link> </ListItem>
            <ListItem><Link>  채용 정보</Link></ListItem>
            <ListItem> <Link>개인정보처리방침</Link> </ListItem>
            <ListItem> <Link>약관 </Link></ListItem>
            <ListItem> <Link>위치</Link> </ListItem>
            <ListItem> <Link>인기 계정</Link> </ListItem>
            <ListItem><Link>해시태그 </Link> </ListItem>
            <ListItem><Link>언어 </Link> </ListItem>
        </List>
        <CopyLight>
        © {new Date().getFullYear()} INSTAGRAM FROM FACEBOOK
    </CopyLight>
    </Footer>
    );
}

