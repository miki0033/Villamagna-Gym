const TextDiv = ({ text }: { text: string }) => {
  return (
    <div className="w-4/5 m-2 p-2 bg-red-500 text-white font-semibold">
      {text}
    </div>
  );
};

export default TextDiv;
