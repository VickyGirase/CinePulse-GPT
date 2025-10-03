import React from 'react'

const Dropdown = ({title,option,func}) => {
  return (
      <div className='select'>
          <select onChange={func} defaultValue="0" name="format" id="format">
              <option value="0" disabled>
                  {title}
                  
              </option>

              {option.map((o, i) => (
                  <option key={i} value={o}>{o.toUpperCase()}</option>
              ))}
          </select>
    </div>
  )
}

export default Dropdown