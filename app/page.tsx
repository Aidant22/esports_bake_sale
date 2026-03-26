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

const BAKED_GOODS = ["Cookies", "Rice Krispie Treats", "Brownies", "Sourdough Bread", "Edible Cookie Dough", "Cinnamon Rolls", "Cupcakes", "Banana Bread"] as const;
const BAKED_GOODS_IMAGES = {
  "Cookies": "/chocChip.jpg",
  "Rice Krispie Treats": "/rice-krispie.jpg",
  "Brownies": "/brownies.jpg",
  "Sourdough Bread": "/sourdough_bread.jpg",
  "Edible Cookie Dough": "/doughOfCookie.jpg",
  "Cinnamon Rolls": "/croll.jpg",
  "Cupcakes" : "/brownie-cupcakes.jpg",
  "Banana Bread" : "/banana_bread.jpg"
}
const BAKED_GOODS_ING = {
  "Cookies": "",
  "Rice Krispie Treats": "",
  "Brownies": "",
  "Sourdough Bread": "Water, Flour, Salt, Starter (wild yeast & Lactic Acid)",
  "Edible Cookie Dough": "Butter, Sugar, Dark Brown Sugar, applesauce, vanilla extract, flour, baking soda, salt, chocolate chips",
  "Cinnamon Rolls": "",
  "Cupcakes" : "",
  "Banana Bread" : ""
}
const BAKED_GOODS_AMOUNTS = {
  "Cookies": "Single",
  "Rice Krispie Treats": "Single",
  "Brownies": "Single",
  "Sourdough Bread": "Whole, Slice",
  "Edible Cookie Dough": "1 ball",
  "Cinnamon Rolls": "Single, Pan",
  "Cupcakes" : "Single",
  "Banana Bread" : "Slice"
}
const BAKED_GOODS_ALG = {
  "Cookies": "",
  "Rice Krispie Treats": "",
  "Brownies": "",
  "Sourdough Bread": "Gluten, Wheat",
  "Edible Cookie Dough": "Milk/Dairy, Gluten, Wheat, Soy",
  "Cinnamon Rolls": "",
  "Cupcakes" : "",
  "Banana Bread" : ""
}

export default function Home() {
  return (
    <div className="">
      <div className="flex border-b-2">
        <Image src="/esports_logo.png" alt="esports_logo" width={100} height={100} />
        <h1 className="text-3xl font-bold flex justify-center items-center pl-4">ESPORTS BAKE SALE</h1>
      </div>
      <div className="bg-gradient-to-b from-orange-300 to-white min-h-screen pl-8 pr-8">
        <h2 className="text-2xl font-bold underline flex justify-center items-center pt-4">Baked Goods for Sale</h2>
        <p className="text-lg font-normal flex justify-center items-center pb-8"> Please tap on any of these items to view information about ingredients, allergens, and pricing! </p>
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
                    <div className="text-xl font-bold">{good}</div>
                  </DrawerTitle>
                  <DrawerDescription className="text-lg">
                    Details about {good}
                  </DrawerDescription>
                </DrawerHeader>
                  <div className="pl-4 pb-2 text-xl">
                    <b>ALLERGENS:</b> <br/>{BAKED_GOODS_ALG[good]}
                  </div>
                  <div className="pl-4 pb-2 text-xl">
                    <b>Ingredients:</b> <br/>{BAKED_GOODS_ING[good]}
                  </div>
                  <div className="pl-4 pb-2 text-xl">
                    <b>Portions Available:</b> <br/> {BAKED_GOODS_AMOUNTS[good]}
                  </div>

                <DrawerFooter>
                  <DrawerClose>Close</DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      </div>      
    </div>
  );
}
