import React from 'react'
import { useState, useEffect, useRef } from 'react'
import useTypewriter from 'react-typewriter-hook'


const MagicOcean = [
  'Hey, I\'m Andy',
  'A Software Engineer',
  'Based in London.'
]
let index = 0

export default function Typewriter({ isHidden }) {
  const [magicName, setMagicName] = useState('Hey I\'m Andy')
  const intervalRef = useRef({})
  const name = useTypewriter(magicName)
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        // index = index + 1 > 2 ? 0 : ++index + 1;
        index = index > 2 ? 0 : ++index
        setMagicName(MagicOcean[index])
      }, 5000)
      return function clear() {
        clearInterval(intervalRef.current)
      }
    },
    [magicName]
  )
  return (
    <div className={isHidden ? 'Typewriter' : 'Typewriter is-hidden'}>
      <p className="cursor">{name}</p>
    </div>
  )
}