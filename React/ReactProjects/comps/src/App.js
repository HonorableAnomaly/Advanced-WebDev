import { GoVerified, GoCloud, GoSquirrel, GoAlert, GoXCircle } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary>
          <GoVerified />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloud />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoSquirrel />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoAlert />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoXCircle />
          Update!
        </Button>
      </div>
    </div>
  );
}

export default App;
