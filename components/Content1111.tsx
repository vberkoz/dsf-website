type Props = {
  content: {
    caption: string;
    title1: string;
    title2: string;
    col1: (string[] | string)[];
    col2: (string[] | string)[];
  };
};

export default function Content1111({ content }: Props) {
  return (
    <div className="bg-gray-900 py-8 text-white lg:pl-14">
      <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="font-bold sm:col-span-2 lg:col-span-1">
          {content.caption}
        </div>

        <div className="flex flex-col text-gray-400">
          <div className="mb-4 text-3xl text-white">{content.title1}</div>
          {content.col1.map((i, k) => {
            if (Array.isArray(i)) {
              return (
                <ul key={k}>
                  {i.map((li, lKey) => (
                    <li key={lKey}>{li}</li>
                  ))}
                </ul>
              );
            } else {
              return <div key={k}>{i}</div>;
            }
          })}
        </div>

        <div className="flex flex-col text-gray-400">
          <div className="mb-4 text-3xl text-white">{content.title2}</div>
          {content.col2.map((i, k) => {
            if (Array.isArray(i)) {
              return (
                <ul key={k}>
                  {i.map((li, lKey) => (
                    <li key={lKey}>{li}</li>
                  ))}
                </ul>
              );
            } else {
              return <div key={k}>{i}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
}
