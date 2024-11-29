import Button from "./components/Button";
import Card from "./components/Card";
import CreateContentModal from "./components/CreateContentModal";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

export default function App() {
  return (
    <div className="p-4">
      <CreateContentModal open={true}/>
      <div className="flex justify-end gap-4">
        <Button variant="primary" startIcon={<PlusIcon />} text="Add Content" />
        <Button
          variant="secondary"
          startIcon={<ShareIcon />}
          text="Share Brain"
        />
      </div>
      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/elonmusk/status/1812258574049157405"
          title="Elon Musk"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=lK1SNtOlty8"
          title="Wavy"
        />
      </div>
    </div>
  );
}
