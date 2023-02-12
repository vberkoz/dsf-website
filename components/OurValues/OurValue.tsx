type Props = {
  ourValue: {
    title: string;
    content: { p: string }[];
  };
};

export const OurValue = ({ ourValue }: Props) => (
  <div className="grid grid-cols-1 gap-4 text-gray-400">
    <div className="text-3xl text-white">{ourValue.title}</div>

    {ourValue.content.map((item, key) => (
      <div key={key}>{item.p}</div>
    ))}
  </div>
);
