import React from 'react'
import { Card } from './card'

export const Tasks = () => {
    return (
        <div className='flex flex-col gap-2'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Tasks