import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter-setion'>
        <h1>Sign up and get exclusive special deals</h1>
        <form className='newsletter-form'>
            <input type="email" required />
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default NewsLetter;