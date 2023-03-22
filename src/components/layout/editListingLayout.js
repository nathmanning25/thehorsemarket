import { horseData } from "../../pages/api/horsedata";

const EditListing = (props) => {
  return (
    <div>
      <div className="edit-listing-bar">
        <div className="edit-listing-bar__sort">
          <button onClick={props.active}>1 item lengthways per row</button>
        </div>

        <div className="edit-listing-bar__filters">
          <p>Showing: {horseData.length} results</p>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
