import { createContext } from "react";

export const StudentsContext = createContext();

const students = [
  "რეზი",
  "მათე",
  "ანდრია",
  "გიორგი",
  "ვატო",
  "ტატო",
  "სოსო",
  "საბა",
  "ბაჩი",
  "ბიბა",
  "დათუნა",
  "დავით",
  "ლუკა",
  "ლუკა",
  "ნიკოლოზ",
  "გიორგი"
];

export function StudentsProvider({ children }) {
  return (
    <StudentsContext.Provider value={students}>
      {children}
    </StudentsContext.Provider>
  );
}