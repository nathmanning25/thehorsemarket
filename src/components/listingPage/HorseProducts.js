import Link from "next/link";

const HorseProducts = (props) => {
  return (
    <div>
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
            <div className="placeholder-img">250px</div>
            <div className="horse-listing__card--description">
              <h3>Horsename: {horse.name}</h3>
              <p className="description">{horse.description}</p>
              <p>Breed: {horse.breed}</p>
              <p>Price: £{horse.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorseProducts;