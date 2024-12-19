import { SubmitHandler, useForm } from "react-hook-form";

interface ISignupForm {
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignupForm>();

  const onSubmit: SubmitHandler<ISignupForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input type="email" placeholder="email" {...register("email")} />
      <input type="password" placeholder="password" {...register("password")} />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default SignupForm;
