import Forms from "../components/Form/forms";

export default function AddTrip() {
  return (
    <div className="add-trip flex justify-center align-center flex-col">
      <h1>Lägg till en ny resa</h1>
      <Forms type="add" />
    </div>
  );
}
