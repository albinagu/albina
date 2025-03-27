import Image from "next/image";
import island from "../assets/island.svg";

export default function Projects() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold text-purple-300 mb-4">Projects</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden group transform transition-all duration-200 hover:scale-102">
          <Image src={island} alt="island" />
          <p>Frontpage - Life Events</p>
        </div>
        <div className="rounded-lg overflow-hidden group transform transition-all duration-200 hover:scale-102">
          <Image src={island} alt="island" />
          <p>Application for Passport</p>
        </div>
        <div className="rounded-lg overflow-hidden group transform transition-all duration-200 hover:scale-102">
          <Image src={island} alt="island" />
          <p>Application for Marriage</p>
        </div>
        <div className="rounded-lg overflow-hidden group transform transition-all duration-200 hover:scale-102">
          <Image src={island} alt="island" />
          <p>Application for Drivers license</p>
        </div>
        <div className="rounded-lg overflow-hidden group transform transition-all duration-200 hover:scale-102">
          <Image src={island} alt="island" />
          <p>Application for P-card</p>
        </div>
        <div className="rounded-lg overflow-hidden group transform transition-all duration-200 hover:scale-102">
          <Image src={island} alt="island" />
          <p>Application for Estate settlement</p>
        </div>
        <div className="rounded-lg overflow-hidden group transform transition-all duration-200 hover:scale-102">
          <Image src={island} alt="island" />
          <p>Application for Inheritance financial statement</p>
        </div>
        <div className="rounded-lg overflow-hidden group transform transition-all duration-200 hover:scale-102">
          <Image src={island} alt="island" />
          <p>
            Signature Collection System used in presidential and parliamentary
            elections
          </p>
        </div>
      </div>
    </section>
  );
}
