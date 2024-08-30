const products = [
  {
    id: 1,
    name: 'Ultimate Pepperoni',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png',
    price: 1078,
    description: 'The Ultimate Pepperoni is a timeless classic that never fails to satisfy. Loaded with an abundance of spicy pepperoni slices that curl up perfectly during baking, this pizza is smothered in a generous layer of melted mozzarella cheese, which adds a rich and creamy texture to every bite. The base is a crispy crust that holds up the tangy tomato sauce, creating a delightful balance of flavors. Whether you’re a pepperoni enthusiast or simply looking for a reliable option, the Ultimate Pepperoni is sure to be a crowd-pleaser at any gathering.',
  },
  {
    id: 2,
    name: 'ExtravaganZZa',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png',
    price: 1244,
    description: 'The ExtravaganZZa is the ultimate feast for pizza lovers who crave variety in every slice. This hearty pizza features a delicious combination of premium toppings, including zesty pepperoni, savory sausage, tender mushrooms, sweet onions, and fresh green peppers. Each bite offers a symphony of flavors, from the spicy kick of the sausage to the earthy undertones of the mushrooms, all layered on a perfectly crisp crust. The ExtravaganZZa is a celebration of all things pizza, making it the perfect choice for those who want it all.',
  },
  {
    id: 3,
    name: 'MeatZZa',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png',
    price: 1118,
    description: 'The MeatZZa is a meat lover’s paradise, offering a generous helping of all your favorite meats in one glorious pizza. Packed with pepperoni, sausage, bacon, and ham, this pizza is a protein powerhouse that delivers bold, savory flavors with every bite. The pepperoni adds a spicy kick, while the sausage and bacon bring a smoky richness that is complemented by the tender, juicy ham. All of this is layered on a perfectly baked crust and topped with gooey mozzarella cheese, making the MeatZZa a hearty and satisfying meal that’s perfect for any occasion.',
  },
  {
    id: 4,
    name: 'Margarita',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/margarita.png',
    price: 822,
    description: 'The Margarita pizza is a true classic, inspired by the traditional flavors of Italy. It features a simple yet delightful combination of fresh tomatoes, creamy mozzarella cheese, and fragrant basil leaves, all layered on a crispy, thin crust. The tomatoes provide a burst of freshness, while the mozzarella melts into a creamy, luscious layer that complements the herbaceous notes of the basil. Drizzled with a hint of olive oil and a sprinkle of sea salt, the Margarita is a perfect example of how simplicity can lead to culinary perfection. It’s a light and refreshing option that’s ideal for those who appreciate the pure, unadulterated taste of quality ingredients.',
  },
  {
    id: 5,
    name: 'Pacific Veggie',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/veggie.png',
    price: 1078,
    description: 'The Pacific Veggie pizza is a vibrant and flavorful option that celebrates the natural goodness of fresh vegetables. It’s loaded with a colorful assortment of mushrooms, onions, bell peppers, and tomatoes, each adding its unique texture and taste to the mix. The mushrooms provide a hearty, earthy flavor, while the onions add a touch of sweetness, and the bell peppers offer a satisfying crunch. The tomatoes bring a burst of juiciness that ties everything together, all resting on a crisp, golden crust. This pizza is perfect for those who want a delicious and nutritious meal without compromising on flavor.',
  },
  {
    id: 6,
    name: 'Hawaiian',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/hawaiin.png',
    price: 871,
    description: 'The Hawaiian pizza is a unique and flavorful combination that blends sweet and savory elements in every bite. This pizza features juicy slices of ham, paired with chunks of sweet, tangy pineapple that add a refreshing contrast to the savory meat. The ham provides a rich, smoky flavor, while the pineapple adds a burst of tropical sweetness that perfectly complements the melted mozzarella cheese and tomato sauce. The Hawaiian is a delightful choice for those who enjoy bold and unexpected flavor combinations, offering a taste of the islands in every slice.',
  },
  {
    id: 7,
    name: 'Deluxe',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/deluxe.png',
    price: 1410,
    description: 'The Deluxe pizza is the epitome of indulgence, offering a premium selection of toppings that cater to those with a taste for the finer things in life. This pizza is loaded with pepperoni, sausage, mushrooms, onions, and green peppers, creating a complex and satisfying flavor profile. The pepperoni and sausage provide a spicy, savory kick, while the mushrooms and onions add depth and earthiness. The green peppers bring a touch of freshness and crunch, all layered on a perfectly crisp crust. The Deluxe is a rich and hearty option that’s perfect for special occasions or when you simply want to treat yourself to something extraordinary.',
  },
  {
    id: 8,
    name: 'BBQ Chicken',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/veggie.png',
    price: 1071,
    description: 'The BBQ Chicken pizza is a flavorful and satisfying option that combines the smoky, tangy taste of barbecue sauce with tender pieces of grilled chicken. This pizza is topped with red onions and cilantro, adding a fresh and zesty note that balances the rich and savory barbecue sauce. The grilled chicken is juicy and flavorful, absorbing the sauce’s bold flavors while the red onions provide a bit of crunch and sweetness. All of this is layered on a soft, chewy crust that complements the robust toppings. The BBQ Chicken pizza is a delicious choice for those who love the combination of sweet, smoky, and savory flavors.',
  },
  {
    id: 9,
    name: 'Chicken Bacon Ranch',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png',
    price: 1161,
    description: 'The Chicken Bacon Ranch pizza is a decadent and comforting option that brings together the rich flavors of crispy bacon, grilled chicken, and creamy ranch sauce. The crispy bacon adds a smoky, salty crunch that pairs perfectly with the tender, juicy chicken pieces. The ranch sauce ties everything together with its creamy, tangy goodness, creating a harmonious blend of flavors that are sure to satisfy. This pizza is perfect for those who love indulgent, savory flavors and want a hearty meal that’s full of character.',
  },
  {
    id: 10,
    name: '6 Cheese',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png',
    price: 1102,
    description: 'The 6 Cheese pizza is a cheese lover’s dream come true, offering a rich and creamy blend of six artisanal cheeses that melt together into a luscious, gooey topping. Each slice is packed with the bold, tangy flavors of mozzarella, cheddar, provolone, Parmesan, Asiago, and Romano cheeses, creating a complex and satisfying taste experience. The combination of these cheeses provides a perfect balance of creaminess, sharpness, and depth, all layered on a crisp, golden crust. The 6 Cheese pizza is a luxurious and indulgent option that’s sure to please anyone with a passion for great cheese.',
  },
];

export default products;
