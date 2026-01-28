import { ArrowRightIcon, HeartHandshake } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import servicesData from "../../assets/data/servicesData";
import ServiceCard from "../../ui/ServiceCard";

const ServiceSec = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto py-28 px-4">
        <SectionTitle
          topTitle={"Our Services"}
          icon={HeartHandshake}
          title="How We Makes Your"
          titleColor=" Study Abroad Journey Simple"
          subtitle="Our expert team offers complete, end-to-end support for students
                planning to study overseas, ensuring a smooth and stress-free
                experience from start to finish."
          color="primary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesData.map((service) => {
            return <ServiceCard service={service} key={service.id} />;
          })}
        </div>
        <div className="mt-8 flex mx-auto justify-center">
          <Button
            to="/services"
            variant="primary"
            icon={<ArrowRightIcon />}
            iconPosition="right"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSec;
