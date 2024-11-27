import Button from "./components/Button";
import Card from "./components/Card";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

export default function App() {
  return (
   <>
   <Button variant="primary" startIcon={<PlusIcon/>} text="Add Content"/>
   <Button variant="secondary" startIcon={<ShareIcon/>} text="Share Brain"/>
   <Card/>
   </>
  )
}