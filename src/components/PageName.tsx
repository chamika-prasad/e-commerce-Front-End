import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

type PageNameProps = {
  title: string
}

export default function PageName(props : PageNameProps) {
  return (
    <div>
        <h2 className='py-2'>{props.title}</h2>
    </div>
    
  )
}
