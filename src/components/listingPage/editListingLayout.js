const EditListing = ({ ToggleLayout3Items }) => {
  return (
    <div>
      <div className="edit-listing-bar">
        <div className="edit-listing-bar__sort">
          <button onClick={ToggleLayout3Items}>
            1 item lengthways per row
          </button>
        </div>

        <div className="edit-listing-bar__filters">
          <p>Showing: results</p>
          <p>Sort by:</p>
          <select id="filter" name="horseFilter">
            <option value=""></option>
            <option value="">Sort by price Low - High</option>
            <option value="">Sort by price High - Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
