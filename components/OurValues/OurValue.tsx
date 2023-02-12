type Props = {
  ourValue: {
    title: string;
    content: { p: string }[];
  };
};

export const OurValue = ({ ourValue }: Props) => (
  <div className="flex flex-col text-gray-400">
    <div className="h-20 text-3xl text-white">{ourValue.title}</div>

    <div className="grid grid-cols-1 gap-4">
      {ourValue.content.map((item, key) => (
        <div key={key}>{item.p}</div>
      ))}
    </div>
  </div>
);
