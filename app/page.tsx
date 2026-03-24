import Image from "next/image";
import InfoIcon from "./components/infoicon";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";

const BAKED_GOODS = ["Cookies", "Rice Krispie Treats", "Brownies", "Sourdough Bread", "Edible Cookie Dough", "Cinnamon Rolls"] as const;
const BAKED_GOODS_IMAGES = {
  "Cookies": "/chocChip.jpg",
  "Rice Krispie Treats": "/rice-krispie.jpg",
  "Brownies": "/brownies.jpg",
  "Sourdough Bread": "/sourdough_bread.jpg",
  "Edible Cookie Dough": "/doughOfCookie.jpg",
  "Cinnamon Rolls": "/croll.jpg"
};

export default function Home() {
  return (
    <div className="">
      <div className="flex border-b-2">
        <Image src="/esports_logo.png" alt="esports_logo" width={100} height={100} />
        <h1 className="text-3xl font-bold flex justify-center items-center pl-4">ESPORTS BAKE SALE</h1>
      </div>
      <div className="bg-gradient-to-b from-orange-300 to-white min-h-screen pl-8 pr-8">
        <h2 className="text-2xl font-bold underline flex justify-center items-center pt-4 pb-8">Baked Goods for Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
          {BAKED_GOODS.map((good) => (
            <Drawer key={good} direction="left">
              <DrawerTrigger asChild>
                <Button variant={"ghost"} className="capitalize flex flex-col items-center justify-evenly h-auto p-0">
                  <Image src={BAKED_GOODS_IMAGES[good]} alt={good} width={250} height={250} />
                  <p className="text-xl font-bold flex items-center gap-2">{good} <InfoIcon /></p>
                </Button>
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    <Image src={BAKED_GOODS_IMAGES[good]} alt={good} width={250} height={250} />
                    {good}
                  </DrawerTitle>
                  <DrawerDescription>
                    <p>Details about {good}</p>
                  </DrawerDescription>
                </DrawerHeader>

                <div key={good} className="pl-4">
                  Allergens in cookies: Gluten
                </div>

                <DrawerFooter>
                  <DrawerClose>Close</DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}
        </div>

        {/* <Drawer >
          <DrawerTitle className="text-2xl font-bold flex justify-center items-center">Cookie Info</DrawerTitle>
          <DrawerDescription className="flex justify-center items-center pb-8">Click on the image to show that </DrawerDescription>
          <div className="flex items-between justify-evenly">
            <div className="flex flex-col items-center">
              <Image src="/chocChip.jpg" alt="cookies" width={250} height={250} />
              <p className="text-xl font-bold flex justify-center items-center">Cookies <InfoIcon /></p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/rice-krispie.jpg" alt="Rice Krispie Treats" width={250} height={250} />
              <p className="text-xl font-bold flex justify-center items-center">Rice Krispie Treats <InfoIcon /></p>
            </div>          
            <div className="flex flex-col items-center">
              <Image src="/brownies.jpg" alt="Brownies" width={250} height={250} />
              <p className="text-xl font-bold flex justify-center items-center">Brownies <InfoIcon /></p>
            </div>    
          </div>
          <div className="flex items-between justify-evenly pt-8">
            <div className="flex flex-col items-center">
              <Image src="/sourdough_bread.jpg" alt="sourdough bread" width={250} height={250} />
              <p className="text-xl font-bold flex justify-center items-center">Sourdough Bread <InfoIcon /></p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/doughOfCookie.jpg" alt="Edible Cookie Dough" width={250} height={250}/>
              <p className="text-xl font-bold flex justify-center items-center">Edible Cookie Dough <InfoIcon /></p>
            </div>          
            <div className="flex flex-col items-center">
              <Image src="/croll.jpg" alt="Cinnamon Rolls" width={250} height={250} />
              <p className="text-xl font-bold flex justify-center items-center">Cinnamon Rolls <InfoIcon /></p>
            </div>
          </div>          
          
          <div className="flex items-between justify-evenly pt-4 ">
          </div> 
          
        </Drawer> */}
      </div>      
    </div>
  );
}
