import React, { FormEvent, useContext, useRef } from "react";
import { RelationContext } from "../context/RelationContext";

const AddRelation = () => {
  const { relations, addRelation } = useContext(RelationContext);

  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const relationInputRef = useRef<HTMLSelectElement>(null);

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredFirst = firstInputRef.current!.value;
    const enteredSecond = secondInputRef.current!.value;
    const enteredSelect = relationInputRef.current!.value;

    addRelation(enteredFirst, enteredSecond, enteredSelect);

    firstInputRef.current!.value = "";
    secondInputRef.current!.value = "";
  };

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <div>
        {relations.map((relation) => {
          return (
            <p
              key={relation.id}
            >{`${relation.first_person} is a ${relation.relation} of ${relation.second_person}`}</p>
          );
        })}
      </div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="first">First Person</label>
          <input type="text" ref={firstInputRef} name="first" id="first" />
        </div>
        <div>
          <label htmlFor="second">Second Person</label>
          <input type="text" ref={secondInputRef} name="second" id="second" />
        </div>
        <div>
          <label htmlFor="select">Relation</label>
          <select
            name="select"
            id="select"
            defaultValue="friend"
            ref={relationInputRef}
          >
            <option value="Friend">Friend</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRelation;
