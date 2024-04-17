import { useState } from "react";
import { FolderData } from "./data";
import { Folder } from "./components";
import { useTraversal } from "./hooks";

const App = () => {
  const { inserNode } = useTraversal();
  const [explorerData, setExplorerData] = useState(FolderData);

  const handleCreateFolder = (
    folderId: string | number,
    name: string,
    isFolder: boolean
  ) => {
    const newTree = inserNode(explorerData, folderId, name, isFolder);

    setExplorerData(newTree);
  };

  return (
    <main className="min-h-dvh p-5 bg-black text-white flex gap-5">
      <section className="min-w-80 dark:bg-zinc-800/70 rounded-lg p-5">
        <Folder
          handleCreateFolder={handleCreateFolder}
          explorer={explorerData}
        />
      </section>
      <section className="flex-1 p-5 dark:bg-zinc-800/70 rounded-lg overflow-hidden">
        Show Folder Items Here
      </section>
    </main>
  );
};

export default App;
