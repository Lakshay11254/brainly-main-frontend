import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import CreateContentModal from "./components/CreateContentModal";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [modalOpen, setmodalOpen] = useState(false);

  return <div>
    <Sidebar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
         

      <CreateContentModal
        open={modalOpen}
        onClose={() => {
          setmodalOpen(false);
        }}
      />
      <div className="flex justify-end gap-4">
        <Button onClick={() => setmodalOpen(true)} variant="primary" startIcon={<PlusIcon />} text="Add Content" />
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
    
      </div>

}
