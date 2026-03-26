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

const BAKED_GOODS = ["Cookies", "Rice Krispie Treats", "Brownies", "Sourdough Bread", "Edible Cookie Dough", "Cinnamon Rolls", "Cupcakes", "Banana Bread", "Lemon Loaf"] as const;
const BAKED_GOODS_IMAGES = {
  "Cookies": "/chocChip.jpg",
  "Rice Krispie Treats": "/rice-krispie.jpg",
  "Brownies": "/brownies.jpg",
  "Sourdough Bread": "/sourdough_bread.jpg",
  "Edible Cookie Dough": "/doughOfCookie.jpg",
  "Cinnamon Rolls": "/cinnamon_roll.jpg",
  "Cupcakes" : "/brownie-cupcakes.jpg",
  "Banana Bread" : "/banana_bread.jpg",
  "Lemon Loaf" : "/lemon-loaf.jpg"
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
    ],
    "Two Pack Choc Chip": [
      "Eggs",
      "Brown Sugar",
      "Sugar",
      "Margarine",
      "Shortening",
      "Baking Soda",
      "Salt",
      "Vanilla",
      "Flour",
      "Chocolate Chips",

    ]
  },

  "Rice Krispie Treats": {
    "Rice Krispie Treats": [
      "Marshmellow",
      "Butter",
      "Rice Krispie"
    ]
  },

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
    ],
    "Fudge Brownies": [
      "Sugar",
      "Enriched Flour (Wheat flour)",
      "Cocoa powder",
      "Palm Oil",
      "Corn Syrup",
      "Salt",
      "Canola Oil",
      "Carob Powder",
      "Vegetable Oil",
      "Eggs"
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

  "Cinnamon Rolls": {
    "Cinnamon Rolls": [
      "Sugar",
      "Salt",
      "Eggs",
      "Shortening",
      "Potatoes",
      "Water",
      "Yeast",
      "Flour"
    ]
  },

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

  "Banana Bread": {
    Regular: [
      "Banana",
      "Butter",
      "Sugar",
      "Eggs",
      "Flour",
      "Baking Soda",
      "Salt",
      "Vanilla Extract"
    ],
    Chocolate: [
      "Banana",
      "Butter",
      "Sugar",
      "Eggs",
      "Flour",
      "Baking Soda",
      "Salt",
      "Vanilla Extract",
      "Cinnamon",
      "Chocolate"
    ]  
  },
  "Lemon Loaf": {
    "Lemon Loaf": [
      "Lemon",
      "Flour",
      "Baking Powder",
      "Salt",
      "Sugar",
      "Butter",
      "Eggs",
      "Milk"
    ]
  } 

};
const BAKED_GOODS_ALG = {
  Cookies: {
    "Large Choc Cookies": {
      contains: ["Wheat (Gluten)", "Eggs", "Dairy"],
      mayContain: [] // dairy-free chocolate chips → no soy assumption
    },
    "Smaller Choc Cookies": {
      contains: ["Wheat (Gluten)", "Eggs", "Dairy"],
      mayContain: ["Soy"] // chocolate chips + shortening
    },
    "PB Swirl": {
      contains: ["Wheat (Gluten)", "Eggs", "Dairy", "Peanuts"],
      mayContain: ["Soy"]
    },
    "Two Pack Choc Chip": {
      contains: ["Wheat (Gluten)", "Eggs"],
      mayContain: ["Dairy", "Soy"] // margarine/shortening + chocolate chips
    }
  },

  "Rice Krispie Treats": {
    "Rice Krispie Treats": {
      contains: ["Dairy"],
      mayContain: ["Soy"] // marshmallow + cereal often contain soy
    }
  },

  Brownies: {
    "PB Chocolate": {
      contains: ["Peanuts", "Dairy", "Eggs", "Wheat (Gluten)"],
      mayContain: ["Soy"]
    },
    "Fudge Brownies": {
      contains: ["Wheat (Gluten)", "Eggs"],
      mayContain: ["Soy"] // vegetable oils + processed mix ingredients
    }
  },

  "Sourdough Bread": {
    "Sourdough Bread": {
      contains: ["Wheat (Gluten)"],
      mayContain: []
    }
  },

  "Edible Cookie Dough": {
    "Edible Cookie Dough": {
      contains: ["Dairy", "Wheat (Gluten)"],
      mayContain: ["Soy"]
    }
  },

  "Cinnamon Rolls": {
    "Cinnamon Rolls": {
      contains: ["Wheat (Gluten)", "Eggs"],
      mayContain: ["Soy"] // shortening
    }
  },

  Cupcakes: {
    Cupcakes: {
      contains: ["Wheat (Gluten)", "Eggs", "Dairy"],
      mayContain: ["Soy"] // emulsifiers
    },
    Frosting: {
      contains: ["Dairy"],
      mayContain: []
    }
  },

  "Banana Bread": {
    Regular: {
      contains: ["Dairy", "Eggs", "Wheat (Gluten)"],
      mayContain: []
    },
    Chocolate: {
      contains: ["Dairy", "Eggs", "Wheat (Gluten)"],
      mayContain: ["Soy"]
    }
  },

  "Lemon Loaf": {
    "Lemon Loaf": {
      contains: ["Wheat (Gluten)", "Eggs", "Dairy"],
      mayContain: []
    }
  }
};
const PRICES = {
  "Cookies": {
    "1 Large Chocolate Chip Cookies": ["$3"],
    "1 Small Chocolate Chip Cookies": ["$1.50"],
    "1 PB Swirl": ["$1.50"],
    "2 pack of Choclate Chip": ["$3"],
  },

  "Rice Krispie Treats": {
    "1 Bar": ["$1.50"]
  },

  "Brownies": {
    "Single PB Chocolate": ["$1.50"],
    "Single Fudge": ["$1.50"]
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
  },

  "Lemon Loaf": {
    "1 loaf": ["$5"]
  }
};

export default function Home() {
  return (
    <>
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
                        <span className="text-base flex items-center font-bold">
                          {" "}
                          ${min === max ? min.toFixed(2) : `${min.toFixed(2)} - $${max.toFixed(2)}`}
                        </span>
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
                      <b>ALLERGENS:</b>
                      {BAKED_GOODS_ALG[good] &&
                        Object.entries(BAKED_GOODS_ALG[good]).map(([section, allergens]) => (
                          <div key={section} className="mt-2 pl-4">
                            <div className="font-semibold">{section}</div>
                            {allergens.contains && (
                              <div>
                                <span className="font-medium">Contains:</span> {allergens.contains.join(", ")}
                              </div>
                            )}
                            {allergens.mayContain && (
                              <div>
                                <span className="font-medium">May contain:</span> {allergens.mayContain.join(", ")}
                              </div>
                            )}
                          </div>
                        ))}
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
  </>
  );
}
