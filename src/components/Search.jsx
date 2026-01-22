import React from "react";


export default function Search({ search, setSearch, category, setCategory }) {
return (
<div className="searchBar">
<input
type="text"
placeholder="Search product..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>


<select value={category} onChange={(e) => setCategory(e.target.value)}>
<option value="all">All</option>
<option value="electronics">Electronics</option>
<option value="accessories">Accessories</option>
</select>
</div>
);
}

