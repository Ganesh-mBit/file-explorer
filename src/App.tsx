import { useState } from "react";
import { FolderData } from "./data";
import { Folder } from "./components";

const App = () => {
  const [explorerData, setExplorerData] = useState(FolderData);

  return (
    <main className="min-h-dvh p-5 bg-black text-white flex gap-5">
      <section className="min-w-80 dark:bg-zinc-800/70 rounded-lg p-5">
        <Folder explorer={explorerData} />
      </section>
      <section className="flex-1 p-5 dark:bg-zinc-800/70 rounded-lg overflow-hidden">
        Dashboard
      </section>
    </main>
  );
};

export default App;
