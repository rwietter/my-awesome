export type IAwesomeStore = {
  contentItem: [];
  contentIndex: string[];
};

export type ActionContext = {
  addContentIndex: (payload: any) => void;
  contentText: string;
};

export enum ActionType {
  ADD_CONTENT_ITEM = 'ADD_CONTENT_ITEM',
  ADD_CONTENT_INDEX = 'ADD_CONTENT_INDEX',
  SAVE_AWESOME = 'SAVE_AWESOME',
  RESET_AWESOME = 'RESET_AWESOME',
}
