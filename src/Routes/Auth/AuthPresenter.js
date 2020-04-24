import React from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input'
import Button from '../../Components/Button'

const Wrapper =styled.div `
    min-height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`;
const Box = styled.div `
    ${props=>props.theme.whiteBox}
    border-radius:0px;
    width:100%;
    max-width:350px;

`
const Link = styled.span `
    cursor:pointer;
    color: ${props=>props.theme.blueColor}
`

const StateChanger = styled(Box)`
    text-align:center;
    padding:20px 0px    
` 
const Form = styled(Box) `
    padding:40px;
    padding-bottom:30px;
    margin-bottom:15px;
    form{
        width:100%;
        input{
            
            width:100%;
            &:not(:last-child){
                margin-bottom:7px;
            }
        }
    }
    
`


export default ({
    action,
    username,
    password,
    firstname,
    email,
    setAction
}) =>{
    return (
    <Wrapper> 
        <Form>
            {action ==='logIn'? (
                <form>
                <Input placeholder ={"사용자 이름"} {...username}/>
                <Input placeholder ={"비밀번호"} type={"password"}{...password}/>
                <Button text ={"로그인"} />
            </form>
            ):(
                <form>
                <Input placeholder ={"휴대폰 번호 또는 이메일"} type ={"email"} {...email}/>
                <Input placeholder ={"성명"} {...firstname}/>
                <Input placeholder ={"사용자 이름"} {...username}/>
                <Input placeholder ={"비밀번호"} type={"password" }{...password}/>
                <Button text ={"가입"} />
            </form>
            )}
           
            
        </Form>
        <StateChanger>
        {action === 'logIn'?
         (<>
            계정이 없으신가요? <Link onClick={()=>setAction('signUp')}>가입하기 </Link>

          </>)
         :
        (<>
            계정이 있으신가요? <Link onClick={()=>setAction('logIn')}> 로그인</Link>
        </>)}


        </StateChanger>
    </Wrapper>
    
    );
}