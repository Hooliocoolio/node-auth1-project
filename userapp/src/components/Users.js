import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    background: rgba(76, 175, 80, 0.6);;
    padding: 1%;
    margin 20px;
    border-radius: 10px;
    text-align: left;
    width 20%;
    font-family: 'Open Sans', sans-serif;`
    ;

    const Name = styled.h2`
    text-align: center;
    font-family: 'Orbitron', sans-serif;
    background-color: black;
    color: white;
    width: 100%;
    font-size: 20px;
    padding: 4% 4;`
    ;

const Span = styled.h4`
    display: inline;
    font-family: 'Marcellus SC', serif;
    color: yellow;`
    ;

const Stats = styled.h3`
    font-family: 'Ranchers', cursive;
    color: black;
    text-align: left;`
    ;

const Users = ({ user }) => {
    return (
        <Card>
        <Name>{user.username}</Name>
      
        </Card>
        
      

    )
}

export default Users;