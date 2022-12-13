import "./ChildB.css";

import { Link } from "react-router-dom";

const ChildB = () => {
  return (
    <div className="ChildB">
      <h1>ChildB</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto
        quae possimus at illo. Inventore omnis asperiores veniam numquam eum hic
        voluptatibus repellat, placeat saepe animi quisquam corrupti, nesciunt
        ratione? Vitae ducimus eaque quidem! Doloremque deserunt, totam cumque
        quia quaerat eaque maiores nesciunt laborum odit vitae, excepturi quod
        dolores soluta rerum. Consectetur eos obcaecati recusandae eaque ipsa,
        iusto inventore ipsum! Deserunt, cum mollitia cupiditate exercitationem
        suscipit modi, accusantium perspiciatis praesentium quis odit voluptatum
        soluta. Necessitatibus voluptas dicta quis numquam. Consequatur
        perspiciatis ullam architecto! Consectetur doloremque nesciunt dolor
        voluptas fuga quis.
      </p>
      <Link to="/childa">Visit Child A </Link>
    </div>
  );
};

export default ChildB;
