import vegSandwichImg from '../assets/images/veg-sandwich.jpg';
import pohaImg from '../assets/images/poha.jpg';
import omeletteImg from '../assets/images/omellete.jpg';
import maggiImg from '../assets/images/maggi.jpeg';
import curdRiceImg from '../assets/images/curd-rice.jpg';
import fruitChaatImg from '../assets/images/fruit-chat.jpg';
import upmaImg from '../assets/images/upma.jpg';
import paneerBhurjiImg from '../assets/images/paneer-burji.jpg';
import pulaoImg from '../assets/images/vegetable-pulao.jpg';
import besanChillaImg from '../assets/images/besan-chilla.jpg';
import eggBhurjiImg from '../assets/images/egg-burji.jpg';
import rajmaImg from '../assets/images/rajma.jpg';
import kadhiImg from '../assets/images/kadhi-pakoda.jpg';
import friedRiceImg from '../assets/images/veg-fried-rice.jpg';
import dalImg from '../assets/images/dal.jpg';
import parathaImg from '../assets/images/aloo-paratha.jpg';
import choleImg from '../assets/images/chole.jpg';
import biryaniImg from '../assets/images/veg-biryani.jpg';
import shahiPaneerImg from '../assets/images/shahi-paneer.jpg';
import khichdiImg from '../assets/images/jain-vegetable-khichdi.jpg';

/* Recipe categories by time */
export const RECIPE_CATEGORIES = [
  { id: 'quick', label: '15–20 Minutes (Quick Mode)', icon: '⚡', timeRange: '15–20 min' },
  { id: 'short', label: '20–30 Minutes', icon: '⏱️', timeRange: '20–30 min' },
  { id: 'medium', label: '30–45 Minutes', icon: '🕒', timeRange: '30–45 min' },
  { id: 'long', label: '45–60 Minutes', icon: '🕓', timeRange: '45–60 min' },
  { id: 'weekend', label: '1 – 2 Hours (Weekend / Special)', icon: '🕔', timeRange: '1–2 hours' },
  { id: 'jain', label: 'Jain Recipe ✅', icon: '🥗', timeRange: 'No onion, no garlic, no root vegetables' },
];

/* Filter options – find food that fits your mood, time & diet */
export const TIME_OPTIONS = [
  { id: 20, label: '15–20 min' },
  { id: 30, label: '20–30 min' },
  { id: 45, label: '30–45 min' },
  { id: 60, label: '45–60 min' },
  { id: 120, label: '1–2 hours' },
];

export const MOODS = [
  { id: 'quick', label: 'Quick & Easy', icon: '⚡' },
  { id: 'comfort', label: 'Comfort', icon: '🛋️' },
  { id: 'healthy', label: 'Healthy', icon: '🥗' },
  { id: 'indulgent', label: 'Indulgent', icon: '🍫' },
  { id: 'light', label: 'Light', icon: '🌿' },
  { id: 'special', label: 'Special', icon: '✨' },
];

export const VEG_NONVEG = [
  { id: 'all', label: 'All' },
  { id: 'veg', label: 'Veg' },
  { id: 'nonveg', label: 'Non-Veg' },
];

const IMAGES = {
  veg_sandwich: vegSandwichImg,
  poha: pohaImg,
  omelette: omeletteImg,
  maggi: maggiImg,
  curd_rice: curdRiceImg,
  fruit_chaat: fruitChaatImg,
  upma: upmaImg,
  paneer: paneerBhurjiImg,
  pulao: pulaoImg,
  besan_chilla: besanChillaImg,
  egg_bhurji: eggBhurjiImg,
  rajma: rajmaImg,
  kadhi: kadhiImg,
  fried_rice: friedRiceImg,
  dal: dalImg,
  paratha: parathaImg,
  chole: choleImg,
  biryani: biryaniImg,
  shahi_paneer: shahiPaneerImg,
  khichdi: khichdiImg,
};

const defaultSteps = (texts, durations = []) =>
  texts.map((text, i) => ({ id: i + 1, text, duration: durations[i] ?? null }));
const defaultNutrition = { calories: 280, protein: 10, carbs: 42, fat: 8, fiber: 4, sodium: 320 };

export const MOCK_RECIPES = [
  { id: '1', title: 'Veg Sandwich', categoryId: 'quick', image: IMAGES.veg_sandwich, prepTime: 5, cookTime: 10, totalTime: 18, servings: 2, difficulty: 'Easy', mood: 'quick', isVeg: true, ingredients: [{ name: 'bread', amount: 4, unit: 'slices' }, { name: 'cucumber', amount: 0.5, unit: 'piece' }, { name: 'tomato', amount: 1, unit: 'piece' }, { name: 'potato', amount: 1, unit: 'boiled' }, { name: 'chutney', amount: 2, unit: 'tbsp' }], steps: defaultSteps(['Toast bread. Boil potato and mash.', 'Slice veggies. Spread chutney on bread.', 'Layer potato and veggies. Serve.']), nutrition: defaultNutrition, tags: ['quick', 'breakfast', 'veg'] },
  { id: '2', title: 'Poha', categoryId: 'quick', image: IMAGES.poha, prepTime: 5, cookTime: 12, totalTime: 17, servings: 2, difficulty: 'Easy', mood: 'comfort', isVeg: true, ingredients: [{ name: 'poha', amount: 2, unit: 'cups' }, { name: 'onion', amount: 1, unit: 'piece' }, { name: 'mustard seeds', amount: 0.5, unit: 'tsp' }, { name: 'curry leaves', amount: 5, unit: 'leaves' }, { name: 'lemon', amount: 0.5, unit: 'piece' }], steps: defaultSteps(['Rinse poha. Heat oil, crackle mustard, add onion.', 'Add poha, salt, turmeric. Cook 5 min.', 'Garnish with lemon and coriander.']), nutrition: defaultNutrition, tags: ['breakfast', 'indian', 'veg'] },
  { id: '3', title: 'Masala Omelette', categoryId: 'quick', image: IMAGES.omelette, prepTime: 3, cookTime: 5, totalTime: 15, servings: 1, difficulty: 'Easy', mood: 'quick', isVeg: false, ingredients: [{ name: 'eggs', amount: 2, unit: 'pieces' }, { name: 'onion', amount: 0.25, unit: 'piece' }, { name: 'tomato', amount: 0.25, unit: 'piece' }, { name: 'green chilli', amount: 1, unit: 'piece' }, { name: 'coriander', amount: 1, unit: 'tbsp' }], steps: defaultSteps(['Beat eggs with salt, pepper, chopped veggies.', 'Pour in hot pan. Cook both sides. Serve.']), nutrition: { calories: 220, protein: 14, carbs: 4, fat: 16, fiber: 1, sodium: 280 }, tags: ['breakfast', 'eggs'] },
  { id: '4', title: 'Maggi', categoryId: 'quick', image: IMAGES.maggi, prepTime: 2, cookTime: 5, totalTime: 12, servings: 1, difficulty: 'Easy', mood: 'quick', isVeg: true, ingredients: [{ name: 'Maggi noodles', amount: 1, unit: 'pack' }, { name: 'water', amount: 1.5, unit: 'cups' }, { name: 'magic masala', amount: 1, unit: 'sachet' }, { name: 'optional veggies', amount: 0.25, unit: 'cup' }], steps: defaultSteps(['Boil water. Add noodles and masala.', 'Cook 2 min. Serve hot.']), nutrition: { calories: 340, protein: 10, carbs: 52, fat: 10, fiber: 2, sodium: 980 }, tags: ['quick', 'instant'] },
  { id: '5', title: 'Curd Rice', categoryId: 'quick', image: IMAGES.curd_rice, prepTime: 5, cookTime: 10, totalTime: 18, servings: 2, difficulty: 'Easy', mood: 'comfort', isVeg: true, ingredients: [{ name: 'cooked rice', amount: 2, unit: 'cups' }, { name: 'curd', amount: 1, unit: 'cup' }, { name: 'tempering', amount: 1, unit: 'tbsp' }, { name: 'coriander', amount: 2, unit: 'tbsp' }], steps: defaultSteps(['Mash rice, mix with curd and salt.', 'Add tempering and coriander. Serve.']), nutrition: defaultNutrition, tags: ['south indian', 'veg', 'comfort'] },
  { id: '6', title: 'Fruit Chaat', categoryId: 'quick', image: IMAGES.fruit_chaat, prepTime: 10, cookTime: 0, totalTime: 15, servings: 2, difficulty: 'Easy', mood: 'healthy', isVeg: true, ingredients: [{ name: 'apple', amount: 0.5, unit: 'piece' }, { name: 'banana', amount: 1, unit: 'piece' }, { name: 'orange', amount: 0.5, unit: 'piece' }, { name: 'chaat masala', amount: 0.5, unit: 'tsp' }, { name: 'lemon', amount: 0.5, unit: 'piece' }], steps: defaultSteps(['Chop fruits. Add chaat masala and lemon.', 'Toss and serve.']), nutrition: { calories: 120, protein: 2, carbs: 28, fat: 0, fiber: 4, sodium: 80 }, tags: ['healthy', 'snack'] },
  { id: '7', title: 'Upma', categoryId: 'short', image: IMAGES.upma, prepTime: 5, cookTime: 15, totalTime: 25, servings: 2, difficulty: 'Easy', mood: 'comfort', isVeg: true, ingredients: [{ name: 'rava', amount: 1, unit: 'cup' }, { name: 'onion', amount: 1, unit: 'piece' }, { name: 'mustard seeds', amount: 0.5, unit: 'tsp' }, { name: 'curry leaves', amount: 5, unit: 'leaves' }, { name: 'vegetables', amount: 0.5, unit: 'cup' }], steps: defaultSteps(['Dry roast rava. Temper mustard, curry leaves, onion.', 'Add water, salt. Add rava, stir. Cover 3 min. Serve.']), nutrition: defaultNutrition, tags: ['breakfast', 'south indian'] },
  { id: '8', title: 'Paneer Bhurji', categoryId: 'short', image: IMAGES.paneer, prepTime: 10, cookTime: 15, totalTime: 28, servings: 2, difficulty: 'Easy', mood: 'comfort', isVeg: true, ingredients: [{ name: 'paneer', amount: 200, unit: 'g' }, { name: 'onion', amount: 1, unit: 'piece' }, { name: 'tomato', amount: 1, unit: 'piece' }, { name: 'spices', amount: 1, unit: 'tsp' }, { name: 'coriander', amount: 2, unit: 'tbsp' }], steps: defaultSteps(['Crumble paneer. Sauté onion, tomato, spices.', 'Add paneer. Cook 5 min. Garnish.']), nutrition: { calories: 320, protein: 18, carbs: 12, fat: 22, fiber: 2, sodium: 380 }, tags: ['paneer', 'veg'] },
  { id: '9', title: 'Vegetable Pulao', categoryId: 'short', image: IMAGES.pulao, prepTime: 15, cookTime: 20, totalTime: 30, servings: 3, difficulty: 'Medium', mood: 'comfort', isVeg: true, ingredients: [{ name: 'basmati rice', amount: 1.5, unit: 'cups' }, { name: 'mixed vegetables', amount: 2, unit: 'cups' }, { name: 'whole spices', amount: 1, unit: 'tbsp' }, { name: 'onion', amount: 1, unit: 'piece' }], steps: defaultSteps(['Soak rice. Sauté onion, spices, veggies.', 'Add rice and water. Cook until done.']), nutrition: defaultNutrition, tags: ['rice', 'veg'] },
  { id: '10', title: 'Besan Chilla', categoryId: 'short', image: IMAGES.besan_chilla, prepTime: 5, cookTime: 15, totalTime: 25, servings: 2, difficulty: 'Easy', mood: 'light', isVeg: true, ingredients: [{ name: 'besan', amount: 1, unit: 'cup' }, { name: 'onion', amount: 0.5, unit: 'piece' }, { name: 'green chilli', amount: 1, unit: 'piece' }, { name: 'water', amount: 0.75, unit: 'cup' }], steps: defaultSteps(['Mix besan, water, salt, veggies.', 'Pour ladleful on hot tawa. Cook both sides.']), nutrition: { calories: 260, protein: 12, carbs: 32, fat: 8, fiber: 6, sodium: 320 }, tags: ['breakfast', 'veg'] },
  { id: '11', title: 'Egg Bhurji', categoryId: 'short', image: IMAGES.egg_bhurji, prepTime: 5, cookTime: 12, totalTime: 22, servings: 2, difficulty: 'Easy', mood: 'quick', isVeg: false, ingredients: [{ name: 'eggs', amount: 4, unit: 'pieces' }, { name: 'onion', amount: 1, unit: 'piece' }, { name: 'tomato', amount: 1, unit: 'piece' }, { name: 'spices', amount: 1, unit: 'tsp' }], steps: defaultSteps(['Sauté onion, tomato, spices.', 'Add beaten eggs. Scramble. Serve.']), nutrition: { calories: 280, protein: 20, carbs: 8, fat: 18, fiber: 1, sodium: 340 }, tags: ['eggs', 'breakfast'] },
  { id: '12', title: 'Rajma', categoryId: 'medium', image: IMAGES.rajma, prepTime: 10, cookTime: 35, totalTime: 45, servings: 4, difficulty: 'Medium', mood: 'comfort', isVeg: true, ingredients: [{ name: 'rajma', amount: 1.5, unit: 'cups' }, { name: 'onion', amount: 2, unit: 'pieces' }, { name: 'tomato', amount: 2, unit: 'pieces' }, { name: 'rajma masala', amount: 2, unit: 'tbsp' }], steps: defaultSteps(['Soak and pressure cook rajma.', 'Sauté onion-tomato, add masala, cooked rajma. Simmer.']), nutrition: { calories: 220, protein: 12, carbs: 32, fat: 6, fiber: 8, sodium: 420 }, tags: ['north indian', 'veg'] },
  { id: '13', title: 'Kadhi Pakora', categoryId: 'medium', image: IMAGES.kadhi, prepTime: 15, cookTime: 25, totalTime: 40, servings: 4, difficulty: 'Medium', mood: 'comfort', isVeg: true, ingredients: [{ name: 'besan', amount: 0.5, unit: 'cup' }, { name: 'curd', amount: 1, unit: 'cup' }, { name: 'pakoras', amount: 8, unit: 'pieces' }, { name: 'kadhi masala', amount: 1, unit: 'tbsp' }], steps: defaultSteps(['Make pakoras from besan. Fry.', 'Whisk curd, besan, water. Boil. Add pakoras.']), nutrition: defaultNutrition, tags: ['north indian', 'veg'] },
  { id: '14', title: 'Veg Fried Rice', categoryId: 'medium', image: IMAGES.fried_rice, prepTime: 15, cookTime: 15, totalTime: 38, servings: 3, difficulty: 'Easy', mood: 'quick', isVeg: true, ingredients: [{ name: 'cooked rice', amount: 3, unit: 'cups' }, { name: 'mixed vegetables', amount: 1.5, unit: 'cups' }, { name: 'soy sauce', amount: 2, unit: 'tbsp' }, { name: 'ginger garlic', amount: 1, unit: 'tbsp' }], steps: defaultSteps(['Stir-fry veggies. Add rice and soy sauce.', 'Toss on high heat. Serve.']), nutrition: defaultNutrition, tags: ['indian chinese', 'veg'] },
  { id: '15', title: 'Dal Tadka', categoryId: 'long', image: IMAGES.dal, prepTime: 10, cookTime: 40, totalTime: 55, servings: 4, difficulty: 'Easy', mood: 'comfort', isVeg: true, ingredients: [{ name: 'toor dal', amount: 1, unit: 'cup' }, { name: 'onion', amount: 1, unit: 'piece' }, { name: 'tomato', amount: 1, unit: 'piece' }, { name: 'tadka', amount: 2, unit: 'tbsp' }], steps: defaultSteps(['Pressure cook dal. Sauté tomato, add dal.', 'Temper with ghee, cumin, garlic. Pour over dal.']), nutrition: defaultNutrition, tags: ['dal', 'veg'] },
  { id: '16', title: 'Aloo Paratha', categoryId: 'long', image: IMAGES.paratha, prepTime: 25, cookTime: 25, totalTime: 50, servings: 4, difficulty: 'Medium', mood: 'comfort', isVeg: true, ingredients: [{ name: 'wheat flour', amount: 2, unit: 'cups' }, { name: 'potato', amount: 3, unit: 'boiled' }, { name: 'spices', amount: 1, unit: 'tsp' }, { name: 'ghee', amount: 2, unit: 'tbsp' }], steps: defaultSteps(['Mash potato, add spices. Make dough.', 'Stuff parathas. Cook on tawa with ghee.']), nutrition: { calories: 320, protein: 8, carbs: 52, fat: 10, fiber: 4, sodium: 380 }, tags: ['paratha', 'veg'] },
  { id: '17', title: 'Chole', categoryId: 'long', image: IMAGES.chole, prepTime: 15, cookTime: 40, totalTime: 58, servings: 4, difficulty: 'Medium', mood: 'indulgent', isVeg: true, ingredients: [{ name: 'chickpeas', amount: 2, unit: 'cups' }, { name: 'onion', amount: 2, unit: 'pieces' }, { name: 'tomato', amount: 2, unit: 'pieces' }, { name: 'chole masala', amount: 2, unit: 'tbsp' }], steps: defaultSteps(['Soak and cook chickpeas.', 'Sauté onion-tomato, add masala, chickpeas. Simmer.']), nutrition: defaultNutrition, tags: ['north indian', 'veg'] },
  { id: '18', title: 'Veg Biryani', categoryId: 'weekend', image: IMAGES.biryani, prepTime: 30, cookTime: 45, totalTime: 90, servings: 4, difficulty: 'Medium', mood: 'special', isVeg: true, ingredients: [{ name: 'basmati rice', amount: 2, unit: 'cups' }, { name: 'mixed vegetables', amount: 3, unit: 'cups' }, { name: 'biryani masala', amount: 2, unit: 'tbsp' }, { name: 'fried onion', amount: 0.5, unit: 'cup' }], steps: defaultSteps(['Marinate veggies. Parboil rice.', 'Layer rice and veg gravy. Dum cook 20 min.']), nutrition: defaultNutrition, tags: ['biryani', 'veg', 'special'] },
  { id: '19', title: 'Shahi Paneer', categoryId: 'weekend', image: IMAGES.shahi_paneer, prepTime: 20, cookTime: 35, totalTime: 75, servings: 4, difficulty: 'Medium', mood: 'indulgent', isVeg: true, ingredients: [{ name: 'paneer', amount: 400, unit: 'g' }, { name: 'onion', amount: 2, unit: 'pieces' }, { name: 'tomato', amount: 2, unit: 'pieces' }, { name: 'cashew', amount: 0.25, unit: 'cup' }, { name: 'cream', amount: 0.25, unit: 'cup' }], steps: defaultSteps(['Blend onion-tomato-cashew. Cook paste.', 'Add paneer, cream, spices. Simmer.']), nutrition: { calories: 380, protein: 16, carbs: 18, fat: 28, fiber: 2, sodium: 420 }, tags: ['paneer', 'veg', 'special'] },
  { id: '20', title: 'Jain Vegetable Khichdi', categoryId: 'jain', image: IMAGES.khichdi, prepTime: 15, cookTime: 25, totalTime: 45, servings: 3, difficulty: 'Easy', mood: 'healthy', isVeg: true, ingredients: [{ name: 'rice', amount: 1, unit: 'cup' }, { name: 'moong dal', amount: 0.5, unit: 'cup' }, { name: 'vegetables (no root)', amount: 1, unit: 'cup' }, { name: 'ghee', amount: 2, unit: 'tbsp' }, { name: 'cumin', amount: 0.5, unit: 'tsp' }], steps: defaultSteps(['Use only allowed veggies (no onion, garlic, root).', 'Pressure cook rice, dal, veggies with cumin and ghee.']), nutrition: defaultNutrition, tags: ['jain', 'veg', 'no onion no garlic'] },
];

export function getRecipesByCategory() {
  const map = {};
  RECIPE_CATEGORIES.forEach((cat) => { map[cat.id] = { ...cat, recipes: [] }; });
  MOCK_RECIPES.forEach((r) => {
    if (map[r.categoryId]) map[r.categoryId].recipes.push(r);
  });
  return RECIPE_CATEGORIES.map((cat) => ({ ...cat, recipes: map[cat.id].recipes }));
}
