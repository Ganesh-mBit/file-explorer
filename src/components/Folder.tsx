import { useState } from "react";
import { FolderType } from "../types";

interface Props {
  explorer: FolderType;
}

export const Folder = ({ explorer }: Props) => {
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
      setShowInput({ visible: false, isFolder: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="flex flex-col gap-1 cursor-pointer">
        <div
          className="flex justify-between"
          onClick={() => setExpandMore(!expandMore)}
        >
          <span>📁 {explorer.name}</span>
          <div className="flex gap-2">
            <button
              className="px-2 py-1 text-xs bg-zinc-600 cursor-pointer"
              onClick={(e) => handleNewFolder(e, true)}
            >
              Floder +
            </button>
            <button
              className="px-2 py-1 text-xs bg-zinc-600 cursor-pointer"
              onClick={(e) => handleNewFolder(e, true)}
            >
              File +
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
            <Folder explorer={ele} key={ele.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return <span>📄 {explorer.name}</span>;
  }
};
