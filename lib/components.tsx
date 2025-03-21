const components = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1 className="text-4xl tracking-tight font-bold mb-8" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-3xl tracking-tight font-semibold my-6" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-2xl font-semibold my-4" {...props} />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <h4 className="text-xl font-medium my-2" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-base text-zinc-800 my-2 leading-relaxed" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc pl-5 py-2" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal pl-5 py-2" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => <li {...props} />,
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 pl-4 italic text-zinc-600 my-4"
      {...props}
    />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-bold" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="italic" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-blue-600 hover:text-blue-800" {...props} />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code className="bg-zinc-100 px-2 py-1 rounded-xl text-sm" {...props} />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="bg-zinc-800 text-white text-sm p-4 rounded-xl my-8 overflow-x-auto"
      {...props}
    />
  ),
  img: (props: React.ComponentProps<"img">) => (
    <img className="my-4 max-w-full h-auto" {...props} />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <table className="table-auto w-full mb-4" {...props} />
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="bg-zinc-200" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="border px-4 py-2 text-left" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td className="border px-4 py-2" {...props} />
  ),
};

export { components };
