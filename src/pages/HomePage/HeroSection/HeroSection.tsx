import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import sliderImage1 from "../../../../public/slider (1).jpg";
import sliderImage2 from "../../../../public/slider (2).jpg";
import sliderImage3 from "../../../../public/slider (3).jpg";
import { Button } from "@/components/ui/button";

function HeroSection() {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
      subTitle: "Move your world",
      Title: "Lowe Alpine Backpacks",
    },
    {
      id: 2,
      image: sliderImage2,
      subTitle: "Move your world",
      Title: "Lowe Alpine Backpacks",
    },
    {
      id: 3,
      image: sliderImage3,
      subTitle: "Move your world",
      Title: "Lowe Alpine Backpacks",
    },
  ];
  return (
    <div className="flex justify-center md:mx-14">
      <Carousel>
        <CarouselContent>
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent">
                <CardContent className="relative flex items-center justify-center h-[500px] p-0">
                  <img
                    src={slider?.image}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    alt=""
                  />
                  <div className="absolute mt-56 md:gap-5 gap-3 inset-0 flex flex-col items-center uppercase justify-center text-white">
                    <p className="md:text-4xl text-xl">{slider?.subTitle}</p>
                    <h1 className="md:text-7xl text-3xl">{slider?.Title}</h1>
                    <Button className="uppercase md:w-32 bg-green-500">Shop Now</Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroSection;
