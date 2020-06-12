import React, { useContext } from 'react';

import { ThemeContext } from "styled-components"

import { FiTwitter, FiHome, FiHash, FiBell, FiMail, FiBookmark } from "react-icons/fi"
import { FaUser, FaList } from "react-icons/fa"
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Aside() {
  const { colors } = useContext(ThemeContext) 
  
  return (
    <Container>
        <FiTwitter color={colors.text} size={40}/>
        <ul>
            <Link>
                <FiHome size={25} />
                <h2>Home</h2>
            </Link>
            <Link>
                <FiHash  size={25} />
                <h2>Explore</h2>
            </Link>
            <Link>
                <FiBell  size={25} />
                <h2>Notification</h2>
            </Link>
            <Link>
                <FiMail size={25} />
                <h2>Message</h2>
            </Link>
            <Link>
                <FiBookmark  size={25} />
                <h2>BookMarks</h2>
            </Link>
            <Link>
                <FaUser size={25} />
                <h2>Profile</h2>
            </Link>
            <Link>
                <FaList  size={25} />
                <h2>List</h2>

            </Link>
    
            <button>Tweet</button>
        </ul>
    </Container>
  );
}

export default Aside;