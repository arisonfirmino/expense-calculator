import Container from "../components/container";
import Balance from "../components/balance";
import TotalIncomes from "../components/total-incomes";
import TotalExpenses from "../components/total-expenses";
import Form from "../components/form";

const Home = () => {
  return (
    <Container>
      <section className="flex min-h-full w-full flex-col items-center gap-5 rounded-3xl bg-black p-5">
        <div className="flex w-full flex-col gap-5 text-black xl:flex-row">
          <Balance />

          <div className="flex w-full flex-col gap-5">
            <TotalIncomes />
            <TotalExpenses />
          </div>
        </div>

        <Form />
      </section>

      <section className="flex min-h-full w-full flex-col rounded-3xl bg-black p-5 xl:max-w-[420px]">
        <h3 className="font-medium uppercase">Histórico de despesas</h3>
      </section>
    </Container>
  );
};

export default Home;
