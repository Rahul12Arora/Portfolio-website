import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiLeetcode } from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/rahul012/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Rahul12Arora" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://leetcode.com/rahul12arora/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocial;