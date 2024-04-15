export interface FolderType {
  id: string | number;
  name: string;
  isFolder: boolean;
  items: FolderType[];
}
