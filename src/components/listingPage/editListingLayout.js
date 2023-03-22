import { horseData } from "../../pages/api/horsedata";

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
          <p>Showing: {horseData.length} results</p>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
