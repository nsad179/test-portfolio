import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-12 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Neeraj</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>SEO/PPC Expert</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              I build SEO and growth systems that drive qualified traffic, boost conversions, and deliver long-term impact. With 5+ years across SaaS, e-commerce, and product-led brands, I scale organic growth and optimize acquisition funnels.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={getImgPath("/images/home/banner/banner-img.png")}
              alt="banner-img"
              width={685}
              height={650}
              className="w-full h-auto max-w-[500px] lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
