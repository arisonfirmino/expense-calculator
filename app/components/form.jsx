"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NameInput from "./name-input";
import TypeInput from "./type-input";
import ValueInput from "./value-input";

const schema = yup.object({
  name: yup.string().required(),
  value: yup.string().required(),
});

const Form = ({ addExpense }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    data.value = parseFloat(data.value.replace(",", "."));
    addExpense(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-5 rounded-3xl bg-main p-5"
    >
      {errors.type || errors.name || errors.value ? (
        <p className="text-center text-xs font-medium text-red-600">
          Preencha todos os campos
        </p>
      ) : null}

      <TypeInput register={{ ...register("type") }} />
      <NameInput register={{ ...register("name") }} error={errors.name} />
      <ValueInput register={{ ...register("value") }} error={errors.value} />

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
