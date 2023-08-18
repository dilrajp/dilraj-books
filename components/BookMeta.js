import { Col } from "react-bootstrap";

const BookMeta = (props) => {
  return (
    <Col md="6">
      <div className="Meta">
        <h6 className="text-slate-400 text-sm font-bold mb-0">{props.name}</h6>
        <p className="text-blue-500 text-md">{props.value}</p>
      </div>
    </Col>
  );
};

export default BookMeta;
