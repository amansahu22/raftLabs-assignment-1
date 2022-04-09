import React, { useState } from "react";
import Relation from "../models/Relation";

const RelationContext = React.createContext<{
  relations: Relation[];
  addRelation: (first: string, second: string, relation: string) => void;
  findRelation: () => void;
}>({
  relations: [],
  addRelation: (first: string, second: string, relation: string) => {},
  findRelation: () => {},
});

const RelationContextProvider: React.FC = (props) => {
  let initialState: Relation[] = [
    {
      id: "ambdbhdbd",
      first_person: "Aman",
      second_person: "Lucky",
      relation: "Friend",
    },
  ];
  const [relations, setRelations] = useState(initialState);

  const addRelation = (first: string, second: string, relation: string) => {
    const newEntry = new Relation(first, second, relation);
    setRelations((prevState) => [newEntry, ...prevState]);
    console.log("new entry");
  };

  const findRelation = () => {
    console.log("working on this");
  };

  const relationContextObj = {
    relations,
    addRelation,
    findRelation,
  };

  return (
    <RelationContext.Provider value={relationContextObj}>
      {props.children}
    </RelationContext.Provider>
  );
};

export { RelationContext, RelationContextProvider };
