import { useState } from 'react'

let nextId = 0
interface Artist {
  id: number
  name: string
}
export default function List() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState<Artist[]>([])

  return (
    <>
      <h1 className='text-3xl'>振奋人心的雕塑家们：</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border-[10px] border-solid border-e-fuchsia-200 focus:ring-0 focus:outline-none'
      />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name }])
        }}>
        添加
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}
