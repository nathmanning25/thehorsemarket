import Link from "next/link";

const HorseProducts = (props) => {
  return (
    <div
      className={
        props.isActive
          ? "horse-listing__card flex-grow flex-item"
          : "horse-listing "
      }
    >
      {props.horseItems.map((horse) => (
        <Link
          href={`listing/${horse.id}`}
          key={horse.id}
          className={
            props.isActive
              ? "one-item-layout-listing"
              : "horse-listing__card flex-grow flex-item"
          }
        >
          <div className="placeholder-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Lusitano_Hengst_%28132668445%29.jpeg"></img>
          </div>

          <div className="horse-listing__card--description">
            <h3>{horse.name}</h3>
            <p className="description">{horse.description}</p>
            <div className="description-wrap">
              <p>
                <b>Breed:</b> {horse.breed}
              </p>
              <p>
                <b>Gender:</b> {horse.gender}
              </p>
            </div>
            <div className="description-wrap">
              <p>
                <b>Colour:</b> {horse.colour}
              </p>
              <p>
                <b>Height:</b> {horse.height}
              </p>
            </div>
            <p className="applied-filters">£{horse.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorseProducts;
