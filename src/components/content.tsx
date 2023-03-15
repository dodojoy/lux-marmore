type Props = { background: string };

export default function Content({ background }: Props) {
  return (
    <section
      className="flex flex-col items-center mb-10"
      style={{ backgroundColor: background }}
    >
      <h1 className="uppercase text-[var(--color-blue)] font-semibold my-6">
        Sobre a Lux Mármore
      </h1>
      <p className="w-4/5 text-justify mb-2 text-[var(--color-gray)]">
        Há mais de 20 anos no mercado, Lux Mármore é uma das marmorarias com
        maior destaque na cidade de Paulo Afonso - BA e região.
      </p>
      <p className="w-4/5 text-justify text-[var(--color-gray)]">
        Ao longo desses anos, a Lux Mármore tem usado como base em seu serviço o
        comprometimento de prazo, acabamentos de qualidade e o melhor
        atendimento aos clientes.
      </p>
    </section>
  );
}
