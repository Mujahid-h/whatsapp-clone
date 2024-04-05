import "./App.css";
import AccountProvider from "./Context/AccountProvider";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientID =
    "430045520029-jrt6e66cmjtcfv6j7c3tsa1acoh94aoh.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
