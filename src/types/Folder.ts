export interface FolderType {
  id: string;
  name: string;
  isFolder: boolean;
  items: FolderType[];
}
