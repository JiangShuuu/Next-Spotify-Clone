import Header from "~/components/Header";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
          <div className="grid grid-cols-1 gap-3 mt-4 sm:frid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"></div>
        </div>
      </Header>
    </div>
  );
}
