import React, { FC } from 'react'
import Button from './button'
import { Trip } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTrip } from '../helpers/trip';

type props = {
    setOpen: (e:boolean) => void;
    trip: Trip;
}

const Delete: FC<props> = ({setOpen, trip}) => {
    const dispatch = useDispatch();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if (trip) {
            dispatch(removeTrip(trip))
        }

    } 
  return (
    <form onSubmit={handleSubmit}>
    <h2>text</h2>
    <section className='flex justify-end gap-3 '>

    <Button text="Cancel" onClick={() => setOpen(false)} />
    <Button text='Delete' type='submit' />
    </section>
    </form>
  )
}

export default Delete