
interface ResumeLayoutProps {
  children: React.ReactNode;
  clientsList: React.ReactNode;
  petsList: React.ReactNode;
}

export default function AsyncResumeLayout({ children, clientsList, petsList }: ResumeLayoutProps) {
  return (
    <main
      className="flex flex-col items-center px-14 py-10"
    >
      <h1
        className="text-2xl font-medium mb-6"
      >
        Resumo dos dados cadastrados (Lista assíncrona):
      </h1>

      <section
        className="flex justify-center w-full gap-x-16"
      >
        <div className="flex flex-col items-center gap-y-5">
          <span className="text-lg">
            Clientes
          </span>

          {clientsList}
        </div>

        <div className="flex flex-col items-center gap-y-5">
          <span className="text-lg" >
            Pets
          </span>

          {petsList}
        </div>

      </section>

      {children}
    </main>
  )
}