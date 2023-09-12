import React from 'react'
import ClouserItem from './ClouserItem'

export const Clouser = () => {
    const quot = [{title: "Your mental health is just as important as your physical health"}];
  return (
    <div>
        <ClouserItem data={quot[0]} />
    </div>
  )
}
