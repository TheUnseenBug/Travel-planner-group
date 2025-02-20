import React, { FC } from 'react'
import Button from './button'
import { Trip } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTrip } from '../helpers/trip';
import { useNavigate } from "react-router-dom";

type props = {
  setOpen: (e: boolean) => void;
  trip: Trip;
};

const Delete: FC<props> = ({ setOpen, trip }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (trip) {
      dispatch(removeTrip(trip));
      navigate("/Trips");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Are you sure you want to permanently remove the trip</h2>
      <section className="flex justify-end gap-3 ">
        <Button text="Cancel" onClick={() => setOpen(false)} />
        <Button text="Delete" className="bg-red-600" type="submit" />
      </section>
    </form>
  );
};

export default Delete