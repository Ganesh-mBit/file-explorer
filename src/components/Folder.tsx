import { useState } from "react";
import { FolderType } from "../types";
import { AddFile, AddFolder } from "../icons";

interface Props {
  explorer: FolderType;
  handleCreateFolder: (
    folderId: string | number,
    name: string,
    isFolder: boolean
  ) => void;
}

export const Folder = ({ explorer, handleCreateFolder }: Props) => {
  const [expandMore, setExpandMore] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isFolder = false
  ) => {
    e.stopPropagation();
    setExpandMore(true);
    setShowInput({ visible: true, isFolder: isFolder });
  };

  const onAddFolder = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      // Add Logic for adding folder or file
      handleCreateFolder(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ visible: false, isFolder: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="flex flex-col gap-1 cursor-pointer">
        <div
          className="flex justify-between items-center"
          onClick={() => setExpandMore(!expandMore)}
        >
          <span>📁 {explorer.name}</span>
          <div className="flex">
            <button
              className="p-2 hover:bg-zinc-700 rounded-full"
              onClick={(e) => handleNewFolder(e, true)}
            >
              <AddFolder />
            </button>
            <button
              className="p-2 hover:bg-zinc-700 rounded-full"
              onClick={(e) => handleNewFolder(e, false)}
            >
              <AddFile />
            </button>
          </div>
        </div>
        <div
          className={`${
            expandMore ? "block" : "hidden"
          } pl-4 flex flex-col gap-1`}
        >
          {showInput.visible && (
            <div className="flex gap-2 py-1">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                autoFocus
                className="bg-transparent p-1 text-sm outline outline-1 outline-zinc-600 rounded-sm"
                onBlur={() =>
                  setShowInput((prev) => ({ ...prev, visible: false }))
                }
              />
            </div>
          )}
          {explorer.items.map((ele) => (
            <Folder
              handleCreateFolder={handleCreateFolder}
              explorer={ele}
              key={ele.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <span>📄 {explorer.name}</span>;
  }
};
