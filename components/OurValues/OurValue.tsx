type Props = {
  data: {
    title: string;
    content: { p: string }[];
  };
  key: number;
};

export const OurValue = ({ data, key }: Props) => (
  <div key={key} className="grid grid-cols-1 gap-4 text-gray-400">
    <div className="text-3xl text-white">{data.title}</div>

    {data.content.map((item, k) => (
      <div key={k}>{item.p}</div>
    ))}
  </div>
);
