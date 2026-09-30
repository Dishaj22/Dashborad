import { useState } from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search user..."
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  );
}

function DataList({ data, searchQuery }) {
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredData.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    { id: 1, name: "Disha" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" },
    { id: 4, name: "Aman" },
    { id: 5, name: "Neha" }
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <DataList
        data={users}
        searchQuery={searchQuery}
      />
    </div>
  );
}

function App() {
  return <Dashboard />;
}

export default App;