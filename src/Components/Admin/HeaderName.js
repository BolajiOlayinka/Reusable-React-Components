import React from 'react';
import styled from 'styled-components';

export default function HeaderName(props) {
    return (
        <Wrapper>
            <Name>
                {props.Name}
            </Name>
          
        </Wrapper>
    )
}

const Wrapper = styled.div `
width:100%;
padding-top:30px;
padding-bottom:30px;
padding-left:30px;
padding-right:15px;
height: 160px;
z-index: -1;
background: #64C5B1;
    
`
const Name = styled.h2`
font-size:32px;
font-weight:bold;
// font-family: "Nunito Sans", sans-serif;
color:white;
`

