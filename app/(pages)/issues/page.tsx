import Link from 'next/link'
import React from 'react'

const IsuesPage = () => {
  return (
    <div>
      <Link className="btn btn-primary" href='/issues/new'>Создать заметку</Link>
    </div>
  )
}

export default IsuesPage