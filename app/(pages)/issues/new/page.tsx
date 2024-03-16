import React from "react";

const NewIssuePage = () => {
  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Название"
        className="input input-bordered w-full"
      />
      <textarea
        className="textarea  input-bordered "
        placeholder="Описание"
      />
      <button className="btn btn-primary">Создать</button>
    </div>
  );
};

export default NewIssuePage;
