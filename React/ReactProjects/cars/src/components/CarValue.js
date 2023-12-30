import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, seachTerm } }) =>
    data.filter((car) => car.name.toLowerCase().includes(seachTerm.toLowerCase())).reduce((acc, car) => acc + car.cost, 0)
  );

  return <div className='car-value'>Total Cost: ${totalCost}</div>;
}

export default CarValue;

// Bugged - error shows toLowerCase as not defined
