function Filters({
  searchText,
  onSearchChange,
  selectedStatus,
  onStatusChange,
}) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Search by project or client name"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ marginRight: "12px", padding: "6px" }}
      />

      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        style={{ padding: "6px" }}
      >
        <option value="">All Statuses</option>
        <option value="Active">Active</option>
        <option value="On Hold">On Hold</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}

export default Filters;

