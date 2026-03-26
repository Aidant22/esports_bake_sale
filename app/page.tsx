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
  Cookies: {
    "Large Choc Cookies": [
      "Butter",
      "Sugar",
      "Brown Sugar",
      "Eggs",
      "Vanilla",
      "Flour",
      "Baking Soda",
      "Baking Powder",
      "Salt",
      "Dairy Free Chocolate Chips"
    ],
    "Smaller Choc Cookies": [
      "Shortening",
      "Butter",
      "Sugar",
      "Brown Sugar",
      "Eggs",
      "Flour",
      "Baking Soda",
      "Salt",
      "Chocolate Chips"
    ],
    "PB Swirl": [
      "Butter",
      "Sugar",
      "Peanut Butter",
      "Chocolate Peanut Butter",
      "Eggs",
      "Flour"
    ]
  },

  "Rice Krispie Treats": {},

  Brownies: {
    "PB Chocolate": [
      "Chocolate Peanut Butter",
      "Butter",
      "Sugar",
      "Brown Sugar",
      "Eggs",
      "Vanilla Extract",
      "Flour",
      "Cocoa Powder",
      "Salt",
      "Baking Powder"
    ]
  },

  "Sourdough Bread": {
    "Sourdough Bread": [
      "Water",
      "Flour",
      "Salt",
      "Starter (wild yeast & Lactic Acid)"
    ]
  },

  "Edible Cookie Dough": {
    "Edible Cookie Dough": [
      "Butter",
      "Sugar",
      "Dark Brown Sugar",
      "Applesauce",
      "Vanilla Extract",
      "Flour",
      "Baking Soda",
      "Salt",
      "Chocolate Chips"
    ]
  },

  "Cinnamon Rolls": {},

  Cupcakes: {
    Cupcakes: [
      "Wheat Flour",
      "Sugar",
      "Baking Soda",
      "Sodium Phosphates",
      "Modified Starch",
      "Emulsifiers",
      "Salt",
      "Cocoa Powder or Vanilla",
      "Eggs",
      "Milk",
      "Vegetable Oil"
    ],
    Frosting: [
      "Butter",
      "Powder Sugar",
      "Heavy Whipping Cream"
    ]
  },

  "Banana Bread": {}
};
const BAKED_GOODS_AMOUNTS = {
  "Cookies": "Single Choclate Chip - Small, Single Choclate Chip - Large, Single - PB Swirl Cookies",
  "Rice Krispie Treats": "Single Bar",
  "Brownies": "Single Piece",
  "Sourdough Bread": "Whole Loaf, Half Loaf",
  "Edible Cookie Dough": "2 ball",
  "Cinnamon Rolls": "Single, Pan",
  "Cupcakes" : "Single",
  "Banana Bread" : "Loaf"
}
const BAKED_GOODS_ALG = {
  "Cookies": "Large Cookies Contains: Wheat (Gluten), Eggs, Dairy (Butter). May Contain: Soy \n Smaller Cookies Contain: Wheat (Gluten), Eggs, Dairy. May Contain: Soy",
  "Rice Krispie Treats": "",
  "Brownies": "PB Chocolate Contains: Peanuts, Dairy, Eggs, Wheat (Gluten). May Contain: Soy",
  "Sourdough Bread": "Contains: Wheat (Gluten)",
  "Edible Cookie Dough": "Contains: Milk/Dairy, Wheat (Gluten), Soy",
  "Cinnamon Rolls": "",
  "Cupcakes" : "Contains: Wheat (Gluten), Eggs, Dairy. May contain: soy",
  "Banana Bread" : ""
}
const PRICES = {
  "Cookies": {
    "1 Large Chocolate Chip Cookies": ["$3"],
    "1 Small Chocolate Chip Cookies": ["$1.50"],
    "1 PB Swirl": ["$1.50"]
  },

  "Rice Krispie Treats": {
    "1 Bar": ["$1.50"]
  },

  "Brownies": {
    "Single PB Chocolate": ["$1.50"]
  },

  "Sourdough Bread": {
    "Loaf": ["$12"],
    "Half Loaf": ["$7"]
  },

  "Edible Cookie Dough": {
    "2 balls": ["$1.50"]
  },

  "Cinnamon Rolls": {
    "Single": ["$2"],
    "Pan": ["$10"]
  },

  "Cupcakes": {
    "1 Cupcake": ["$1.50"]
  },

  "Banana Bread": {
    "1 Loaf": ["$5"]
  }
};

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch pb-8">
          {BAKED_GOODS.map((good) => (
            <Drawer key={good} direction="left">
              <DrawerTrigger asChild>
                <Button variant={"ghost"} className="capitalize flex flex-col items-center justify-evenly h-auto p-0">
                  <Image src={BAKED_GOODS_IMAGES[good]} alt={good} width={250} height={250} />
                  <p className="text-xl font-bold flex items-center gap-2">{good} 
                    {(() => {
                      const itemPrices = PRICES[good];
                      if (!itemPrices) return null;

                      const values = Object.values(itemPrices)
                        .flat()
                        .map(p => parseFloat(p.replace("$", "")));

                      const min = Math.min(...values);
                      const max = Math.max(...values);

                      return (
                        <div className="text-base flex items-center font-bold">
                          {" "}
                          ${min === max ? min.toFixed(2) : `${min.toFixed(2)} - $${max.toFixed(2)}`}
                        </div>
                      );
                    })()}
                  <InfoIcon />
                  </p>
                </Button>
              </DrawerTrigger>

              <DrawerContent className="flex flex-col max-h-screen">
                <DrawerHeader>
                  <DrawerTitle>
                    <Image src={BAKED_GOODS_IMAGES[good]} alt={good} width={250} height={250} />
                    <div className="text-xl font-bold">{good}</div>
                  </DrawerTitle>
                  <DrawerDescription className="text-lg">
                    Details about {good}
                  </DrawerDescription>
                </DrawerHeader>
                  <div className="flex-1 overflow-y-auto px-4 overscroll-contain">
                    <div className="pb-2 text-xl">
                      <b>ALLERGENS:</b> <br/>{BAKED_GOODS_ALG[good]}
                    </div>
                  

                    <div className="pb-2 text-xl">
                      <b>Ingredients:</b>
                      {BAKED_GOODS_ING[good] &&
                        Object.entries(BAKED_GOODS_ING[good]).map(([section, ingredients]) => (
                          <div key={section} className="mt-2 pl-4">
                            <div className="font-semibold">{section}</div>
                            <ul className="list-disc pl-6">
                              {ingredients.map((ingredient) => (
                                <li key={ingredient}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>


                    <div className="pb-2 text-xl">
                      <b>Prices and Portions:</b>
                      {PRICES[good] &&
                        Object.entries(PRICES[good]).map(([section, portionPrices]) => (
                          <div key={section} className="mt-2 pl-4">
                            <div className="font-semibold">{section}</div>
                            <ul className="list-disc pl-6">
                              {portionPrices.map((portionPrice) => (
                                <li key={portionPrice}>{portionPrice}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>

                  </div>
                <DrawerFooter>
                  <DrawerClose>
                    <div className="text-xl font-light ">Close</div>
                    </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      </div>      
    </div>
  );
}
