import "./ChildA.css";

import { Link } from "react-router-dom";
const ChildA = () => {
  return (
    <div className="ChildA">
      <h1>ChildA</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
        consectetur illum nemo debitis. Inventore nemo iste sapiente modi maxime
        commodi dignissimos doloribus asperiores dolor, recusandae nobis, error
        nihil at necessitatibus. Doloremque, similique recusandae, veritatis
        possimus omnis atque nihil unde magni ea sint quod fugiat ipsa officia
        repudiandae illum dolores nobis sunt quisquam cumque fugit minus
        nesciunt? Expedita illo beatae natus? Hic incidunt molestias, corporis
        accusamus nisi fuga eius dolore laudantium voluptatem dolores quas
        fugiat nostrum. In veritatis deleniti deserunt fugit. Minus pariatur
        nostrum magnam vel, distinctio est ut possimus fugiat! Repudiandae
        debitis natus molestiae a ad necessitatibus provident ipsa impedit
        possimus repellat placeat iure, tempore ut delectus in corporis! Ea esse
        accusamus quasi minus natus cupiditate amet cum quidem! Repellat. Dolor
        molestiae reprehenderit beatae repudiandae repellendus natus omnis,
        reiciendis doloremque adipisci accusamus qui necessitatibus eaque
        expedita dignissimos ad commodi delectus accusantium molestias
        consequuntur inventore aliquid. Rem expedita corporis a. Ipsa!
      </p>
      <Link to="/childb">Visit Child B </Link>
    </div>
  );
};

export default ChildA;
