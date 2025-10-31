function Forms() {
  return (
    <form className='flex flex-col gap-4 max-w-md mx-3 md:mx-auto my-40 p-6 border bg-pink-300/35 border-violet-300 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>
        Связаться с нами
      </h2>
      <label className='flex flex-col'>
        Имя:
        <input
          type='text'
          className='mt-1 p-2 border border-violet-300 rounded'
          placeholder='Ваше имя'
          required
        />
      </label>
      <label className='flex flex-col'>
        электронная почта:
        <input
          type='email'
          className='mt-1 p-2 border border-violet-300 rounded'
          placeholder='ваш e-mail'
        />
      </label>
    </form>
  );
}

export default Forms;
