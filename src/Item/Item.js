export default function Item({ item }) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <input type="checkbox" id={item.id} className="checkbox justify-content-start" value="" />
        </div>
        <div className="col-11">
          <p> {item.task} </p>
        </div>
      </div>
    </div>
  );
}
