// Plain unsortable table
// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Apple", color: "bg-red-500", price: "1.29" },
    { name: "Orange", color: "bg-orange-400", price: "1.99" },
    { name: "Bananas", color: "bg-yellow-200", price: "2.29" },
    { name: "Kiwis", color: "bg-green-400", price: "4.49" },
    { name: "Blueberries", color: "bg-blue-800", price: "3.89" },
    { name: "Plum", color: "bg-purple-800", price: "1.19" }
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name, sortValue: (fruit) => fruit.name },
    { label: "Color", render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div> },
    { label: "Price", render: (fruit) => fruit.price, sortValue: (fruit) => fruit.price }
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable
        data={data}
        config={config}
        keyFn={keyFn}
      />
    </div>
  );
}

export default TablePage;
