import { horseData } from "../../pages/api/horsedata";
import { useState } from "react";

const EditListing = () => {
  const [isActive, setActive] = useState("");

  const ToggleLayout3Items = () => {
    setActive(!isActive);
  };

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
