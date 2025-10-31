"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zfd } from "zod-form-data";

interface Iform {
  name: string;
  contact: string;
}

export function ContactZod() {
  const schema = zfd.formData({
    name: zfd.text(),
    conacts: zfd.text(),
  });
}

export default function Forms() {
  const { register, handleSubmit, formState, setValue } = useForm<Iform>({
    mode: "onChange",
  });

  const errorname = formState.errors.name?.message;
  const errorcontact = formState.errors.contact?.message;
  const onSubmit: SubmitHandler<Iform> = async (data) => {
    setValue("contact", "");
    setValue("name", "");

    const res = await fetch("/api/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
  };
  return (
    <>
      <form
        data-aos='fade-up'
        onSubmit={handleSubmit(onSubmit)}
        className='  flex flex-col gap-4 max-w-md mx-3 md:mx-auto my-40 p-6 border bg-pink-300/35 border-violet-300 rounded-lg shadow-lg '
        id='form-itcontacts'
      >
        <h2 className='text-2xl font-semibold mb-4 text-center'>
          Связаться с нами
        </h2>
        <div className='flex flex-col'>
          <input
            className=' mt-1 p-2 border border-violet-300 rounded'
            type='text'
            placeholder='Ваше имя'
            {...register("name", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9А-Яа-яA-z]{2,20}$/i,
                message:
                  "Нельзя использовать спец. символы. Пожалуйста напишите свое имя.",
              },
            })}
          />
          {errorname && (
            <p className=' w-60 text-sm'>
              Нельзя использовать спец. символы. Пожалуйста напишите свое имя.
            </p>
          )}
        </div>
        <div className='flex flex-col'>
          <input
            className='mt-1 p-2 border border-violet-300 rounded'
            type='text'
            placeholder='ваш e-mail'
            {...register("contact", {
              required: "This field is required",
              pattern: {
                value: /^[+A-Z0-9a-z!@#&_.,=]{3,30}$/i,
                message: "incorect contact",
              },
            })}
          />
          {errorcontact && (
            <p className='w-60 text-sm'>
              Неправильный контак, напишите свой контакт(email,ТГ,тел.)
            </p>
          )}
        </div>
        {!errorcontact && !errorname && formState.isValid ? (
          <button
            type='submit'
            className='bg-green-400 p-5 rounded-3xl m-5 shadow-2xl transition-all border-2  duration-500'
          >
            Отправить
          </button>
        ) : (
          <button
            type='submit'
            disabled
            className='border-2 p-5 rounded-3xl m-5 transition-all duration-500'
          >
            Отправить
          </button>
        )}
      </form>
    </>
  );
}
