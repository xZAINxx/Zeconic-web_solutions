import { services } from "@/lib/services";
import ServiceBlock from "./ServiceBlock";

export default function ServicesPage() {
  return (
    <>
      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}
    </>
  );
}
