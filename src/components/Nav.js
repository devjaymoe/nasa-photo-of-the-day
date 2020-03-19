import React, {useState} from 'react';

const Nav = () => {
    const [date, setDate] = useState('')
    
    const changeDate = (e) => {
        console.log(e.target.value)
        setDate(e.target.value)
    }

    return (
        <nav>
            <p>Astrology Pic of the Day</p>
            <form>
                <label>Previous Pics</label>
                <input type='text' value={date} onChange={changeDate}placeholder='YYYY-MM-DD'></input>
            </form>
        </nav>
    )
}

export default Nav