import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount]=useState(0);
  const [text, setText]=useState([])
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    let amount = parseInt(count)
    let result = []

    for (let i = 0; i < amount; i++) {
      result.push(data[0])
    }
    
    setText(result)
  }

  return (
    <section className='section-center'>
      <h3>Tired og boring lorem ipsum ?</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='number'>paragraphs:</label>
        <input
          type='number'
          min='0'
          name='amount'
          id='amount'
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article>
        {text.map((item, itemIndex) => {
          return <p key={itemIndex}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
