import React from 'react';

const Nav = () => {
    
    return (
        <nav>
            <p>Astrology Pic of the Day</p>
            <form>
                <label>Previous Pics</label>
                <input 
                    type='text' 
                    id='dateInput' 
                    name='date' 
                    maxLength='10' 
                    placeholder='YYYY-MM-DD'>
                </input>
            </form>
        </nav>
    )
}

export default Nav