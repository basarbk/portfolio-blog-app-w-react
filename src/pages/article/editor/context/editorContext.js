import { createContext, useContext } from "react";

export const EditorContext = createContext();
export const EditorMutatorContext = createContext();

export function useEditorData() {
  return useContext(EditorContext);
}

export function useEditorMutator() {
  return useContext(EditorMutatorContext);
}
