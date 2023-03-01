type Props = {
  data: {
    question: string;
    answer: (string[] | string)[];
  };
};

/*

{
  id: "FAQ",
  question: "",
  answer: [],
},
*/

export default function FAQ({ data }: Props) {
  return (
    <div className="bg-gray-900 py-8 lg:pl-14 xl:pr-[108px]">
      <div className="grid grid-cols-1 p-3 text-gray-400 lg:grid-cols-3 xl:grid-cols-4">
        <div></div>
        <div className="grid grid-cols-1 gap-4 pb-4 md:col-span-3 lg:col-span-2">
          <div className="text-xl text-white">{data.question}</div>
          {data.answer.map((item, pKey) => {
            if (Array.isArray(item)) {
              return (
                <ul key={pKey}>
                  {item.map((li, lKey) => (
                    <li key={lKey}>{li}</li>
                  ))}
                </ul>
              );
            } else {
              return <div key={pKey}>{item}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
}
