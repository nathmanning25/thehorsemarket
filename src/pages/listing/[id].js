import { horseData } from "../api/horsedata";
import Router from "next/router";

export const getStaticProps = async ({ params }) => {
  const topicList = horseData.filter((x) => x.id.toString() === params.id);
  return {
    props: {
      tp: topicList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = horseData.map((x) => ({
    params: { id: x.id.toString() },
  }));

  return { paths, fallback: false };
};

const test = ({ tp }) => (
  <div className="container">
    <button onClick={() => Router.back()}>Back to listing page</button>
    <div className="product-page">
      <h1 className="product-page__title">{tp.adTitle}</h1>

      <p className="product_page__description-title">{tp.descriptionTitle}</p>
      <p className="product_page__description">{tp.description}</p>

      <div className="more-details">
        <h2>More details</h2>
        <div className="more-details__wrapper">
          <div className="more-details__column">
            <p>Name: {tp.name}</p>
            <p>Category: {tp.category}</p>
            <p>Breed: {tp.breed}</p>
          </div>
          <div className="more-details__column">
            <p>Age: {tp.age}</p>
            <p>Height: {tp.height}</p>
            <p>Gender: {tp.gender}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default test;
