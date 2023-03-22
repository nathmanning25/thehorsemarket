import { horseData } from "../api/horsedata";
import Router from "next/router";

export const getStaticProps = async ({ params }) => {
  const horseLising = horseData.filter((x) => x.id.toString() === params.id);
  return {
    props: {
      horse: horseLising[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = horseData.map((x) => ({
    params: { id: x.id.toString() },
  }));

  return { paths, fallback: false };
};

const test = ({ horse }) => (
  <div className="container">
    <button onClick={() => Router.back()}>Back to listing page</button>
    <div className="product-page">
      <h1 className="product-page__title">{horse.adTitle}</h1>

      <p className="product_page__description-title">
        {horse.descriptionTitle}
      </p>
      <p className="product_page__description">{horse.description}</p>

      <div className="more-details">
        <h2>More details</h2>
        <div className="more-details__wrapper">
          <div className="more-details__column">
            <p>Name: {horse.name}</p>
            <p>Category: {horse.category}</p>
            <p>Breed: {horse.breed}</p>
          </div>
          <div className="more-details__column">
            <p>Age: {horse.age}</p>
            <p>Height: {horse.height}</p>
            <p>Gender: {horse.gender}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default test;
