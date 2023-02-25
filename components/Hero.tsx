import Link from "next/link";

type Prop = {
  data: {
    id: string;
    image: string;
    title: string;
    content: (string[] | string)[];
    link: string;
    href: string;
  };
};

export const Hero = ({ data }: Prop) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-r from-gray-900/100 to-gray-900/50 text-left text-white lg:to-gray-900/0">
        <div className="lg:p-14">
          <div className="p-3">
            <h1 className="mb-4 pb-40 text-4xl font-light sm:text-5xl">
              {data.title}
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              <div>
                {data.content.map((item, pKey) => {
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

                {data.link && (
                  <Link
                    href={data.href}
                    className="mt-8 flex w-fit cursor-pointer bg-yellow-300 px-4 py-3 text-black hover:bg-yellow-400"
                  >
                    <span className="mr-4 leading-[1.2rem]">{data.link}</span>
                    <svg
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
