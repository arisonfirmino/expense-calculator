import NameInput from "./name-input";
import TypeInput from "./type-input";
import ValueInput from "./value-input";

const Form = () => {
  return (
    <form className="flex w-full flex-col gap-5 rounded-3xl bg-main p-5">
      <TypeInput />
      <NameInput />
      <ValueInput />

      <button
        type="submit"
        className="rounded-xl bg-primary p-2.5 active:bg-background"
      >
        Adicionar
      </button>
    </form>
  );
};

export default Form;
