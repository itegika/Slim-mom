const ModalInfo = ({ products, calories }) => {
  return (
    <>
      <div>
        <h2></h2>
        <p> {calories}</p>
      </div>
      <div>
        <h2></h2>
        <ol>
          {products.map((product) => {
            return <li>{product}</li>;
          })}
        </ol>
      </div>
    </>
  );
};
export default ModalInfo;
