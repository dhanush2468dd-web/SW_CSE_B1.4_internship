import Button from "./components/FunctionalComponent";
import { LeftArrow, RightArrow } from "./components/FunctionalComponentTwo";

function App() {
  const name = "Amay";
  const isLoggedIn = false;

  return (
    <>
      <p>{isLoggedIn ? "Welcome Back" : "Please Login"}</p>

      <Button />
      <LeftArrow />
      <RightArrow />
    </>
  );
}

export default App;