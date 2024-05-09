const Container = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full cursor-default flex-col gap-5 bg-main p-5 text-white xl:flex-row xl:px-28 2xl:px-52">
      {children}
    </main>
  );
};

export default Container;
