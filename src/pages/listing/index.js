import { horseData } from "../api/horsedata";
import Filters from "../../components/filters/Filters";

const Horse = () => {
  return (
    <div>
      <div className="container">
        <h1>Horses listing</h1>
        <Filters horseData={horseData} />
      </div>
    </div>
  );
};

export default Horse;
