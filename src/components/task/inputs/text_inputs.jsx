const TextInputs = ({ taskData, setTaskData }) => {
  return (
    <>
      <input
        type='text'
        placeholder='Title'
        value={taskData?.title}
        onChange={(e) =>
          setTaskData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <textarea
        placeholder='Description'
        value={taskData?.description}
        onChange={(e) =>
          setTaskData((prev) => ({ ...prev, description: e.target.value }))
        }
      />
    </>
  );
};

export default TextInputs;
