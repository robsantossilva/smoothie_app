import Smoothie from "./smoothie";

describe("Test", () => {
  //`Given` "Classic,+chocolate" `shouldBe` ["banana", "chocolate","honey","ice","mango","peach","pineapple","strawberry", "yogurt"]
  it("create `Classic` plus `chocolate`", () => {
    const smoothie = new Smoothie();
    const ingredients = smoothie.getIngredients("Classic,+chocolate");
    const result = [
      "banana",
      "chocolate",
      "honey",
      "ice",
      "mango",
      "peach",
      "pineapple",
      "strawberry",
      "yogurt",
    ];
    expect(ingredients).toEqual(result);
  });

  //`Given` "Classic,+chocolate,-strawberry" `shouldBe` ["banana", "chocolate","honey","ice","mango","peach","pineapple","yogurt"]
  it("create `Classic` plus `chocolate` minus `strawberry`", () => {
    const smoothie = new Smoothie();
    const ingredients = smoothie.getIngredients(
      "Classic,+chocolate,-strawberry"
    );
    const result = [
      "banana",
      "chocolate",
      "honey",
      "ice",
      "mango",
      "peach",
      "pineapple",
      "yogurt",
    ];

    expect(ingredients).toEqual(result);
  });

  // //`Given` "Classic" `shouldBe` ["banana","honey","ice","mango","peach","pineapple","strawberry","yogurt"]
  it("create `Classic` smoothie", () => {
    const smoothie = new Smoothie();
    const ingredients = smoothie.getIngredients("Classic");
    const result = [
      "banana",
      "honey",
      "ice",
      "mango",
      "peach",
      "pineapple",
      "strawberry",
      "yogurt",
    ];
    expect(ingredients).toEqual(result);
  });

  //`Given` "Classic,-strawberry" `shouldBe` ["banana","honey","ice","mango","peach","pineapple","yogurt"]
  it("create `Classic` minus `strawberry`", () => {
    const smoothie = new Smoothie();
    const ingredients = smoothie.getIngredients("Classic,-strawberry");
    const result = [
      "banana",
      "honey",
      "ice",
      "mango",
      "peach",
      "pineapple",
      "yogurt",
    ];
    expect(ingredients).toEqual(result);
  });

  //`Given` "Just Desserts" `shouldBe` ["banana","cherry","chocolate","ice cream","peanut"]
  it("create `Just Desserts` smoothie", () => {
    const smoothie = new Smoothie();
    const ingredients = smoothie.getIngredients("Just Desserts");
    const result = ["banana", "cherry", "chocolate", "ice cream", "peanut"];
    expect(ingredients).toEqual(result);
  });

  //`Given` "Just Desserts,-ice cream,-peanut" `shouldBe` ["banana","cherry","chocolate"]
  it("create `Just Desserts` smoothie without `ice cream` and `peanut`", () => {
    const smoothie = new Smoothie();
    const ingredients = smoothie.getIngredients(
      "Just Desserts,-ice cream,-peanut"
    );
    const result = ["banana", "cherry", "chocolate"];
    expect(ingredients).toEqual(result);
  });

  //`Given` "Just Desserts,-banana,-cherry,-chocolate,-ice cream,-peanut" `shouldBe` []
  it("create a smoothie without ingredients", () => {
    const smoothie = new Smoothie();
    const ingredients = smoothie.getIngredients(
      "Just Desserts,-banana,-cherry,-chocolate,-ice cream,-peanut"
    );

    expect(ingredients).toEqual([]);
  });

  //`Given` "Classic,-banana,-mango,-peanut" `shouldBe` ["honey","ice","peach","pineapple","strawberry","yogurt"]
  it("exclude unused ingredients", () => {
    const smoothie = new Smoothie();
    const ingredients = smoothie.getIngredients(
      "Classic,-banana,-mango,-peanut"
    );
    const result = [
      "honey",
      "ice",
      "peach",
      "pineapple",
      "strawberry",
      "yogurt",
    ];
    expect(ingredients).toEqual(result);
  });
});
