import Image from "next/image";
import Balance from "../components/balance";
import TotalIncomes from "../components/total-incomes";
import TotalExpenses from "../components/total-expenses";
import Form from "../components/form";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-highlight">
      <div className="rounded-3xl bg-primary p-5">
        <section className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="logo"
              height={1024}
              width={1024}
              className="w-10 rounded-xl"
            />
            <h1 className="text-lg font-medium text-secondary">
              Expense Calculator
            </h1>
          </div>

          <Balance />

          <div className="flex gap-5">
            <TotalIncomes />
            <TotalExpenses />
          </div>

          <div>
            <Form />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
