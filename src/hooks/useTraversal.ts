import { FolderType } from "../types";

export const useTraversal = () => {
  const inserNode = (
    tree: FolderType,
    folderId: string | number,
    name: string,
    isFolder: boolean
  ): FolderType => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        items: [],
      });
      return tree;
    }
    let lastItem = [];
    lastItem = tree.items.map((ele) =>
      inserNode(ele, folderId, name, isFolder)
    );
    return { ...tree, items: lastItem };
  };

  return { inserNode };
};
