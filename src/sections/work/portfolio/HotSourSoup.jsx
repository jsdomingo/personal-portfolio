import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './Recipe.module.css';
import forkast from './logo-forkast.png';

export default function HotSourSoup() {
  const ingredientsList = [
    {
      section: "Produce",
      items: [
        "8 dried shiitake mushrooms",
        "6 dried black fungus",
        "4 cups water",
        "1 small carrot",
        "1 inch knob of ginger",
        "2 spring onions",
        "2 eggs",
        "Coriander leaves",
        "100g fresh firm tofu",
        "100g bamboo shoots"
      ],
    },
    {
      section: "Soup Sauce",
      items: [
        "4 tbsp Chinese black vinegar",
        "2 tbsp rice vinegar",
        "1 tsp white pepper",
        "2 tsp mushroom bouillon",
        "1 tbsp light soy sauce",
        "2 tbsp dark soy sauce",
        "1 tsp toasted sesame oil"
      ],
    },
    {
      section: "Cornstarch Slurry",
      items: [
        "4 tbsp cornstarch",
        "3 tbsp water",
      ],
    },
  ];

  const instructionsList = [
    {
      title: "Step 1: Soak the Mushrooms",
      description: "Rinse the dried shiitake and black fungus mushrooms, then soak them in 4 cups of hot water for 30 minutes until soft. Slice into thin strips."
    },
    {
      title: "Step 2: Prep the Veggies and Tofu",
      description: "Julienne the carrots, ginger, bamboo shoots, and scallions. Cut the tofu into thin sticks."
    },
    {
      title: "Step 3: Mix Soup Sauce and Slurry",
      description: "In one bowl, whisk cornstarch, water, light and dark soy sauces, and salt. In another, combine black vinegar, rice vinegar, white pepper, and mushroom bouillon."
    },
    {
      title: "Step 4: Cook the Soup",
      description: "Use the mushroom soaking liquid and add water to make 4 cups. Bring it to a boil with ginger, carrots, bamboo shoots, mushrooms, and tofu. Stir in the cornstarch mixture to thicken. Add more slurry or water as needed. Slowly pour in the egg, then remove from heat and stir in the soup sauce mixture and scallions."
    },
    {
      title: "Step 5: Finish and Serve",
      description: "Adjust seasoning with salt. Garnish with scallions, cilantro, and a drizzle of toasted sesame oil. Serve warm."
    }
  ];

  // Initialize nested checkedIngredients state matching structure
  const [checkedIngredients, setCheckedIngredients] = useState(
    ingredientsList.map(section => section.items.map(() => false))
  );
  const [checkedSteps, setCheckedSteps] = useState(Array(instructionsList.length).fill(false));
  const [popIndexes, setPopIndexes] = useState({ ingredient: null, step: null });

  // Toggle function supports nested indices for ingredients, single for steps
  const toggleChecked = (index1, index2 = null, type) => {
    if (type === "ingredient") {
      const newChecked = checkedIngredients.map((section, sIdx) =>
        sIdx === index1
          ? section.map((item, iIdx) => (iIdx === index2 ? !item : item))
          : section
      );
      setCheckedIngredients(newChecked);

      setPopIndexes(prev => ({ ...prev, ingredient: `${index1}-${index2}` }));
      setTimeout(() => {
        setPopIndexes(prev => ({ ...prev, ingredient: null }));
      }, 300);
    } else {
      const newState = [...checkedSteps];
      newState[index1] = !newState[index1];
      setCheckedSteps(newState);

      setPopIndexes(prev => ({ ...prev, step: index1 }));
      setTimeout(() => {
        setPopIndexes(prev => ({ ...prev, step: null }));
      }, 300);
    }
  };

  // Calculate progress for ingredients and steps
  const totalIngredients = ingredientsList.reduce((acc, section) => acc + section.items.length, 0);
  const checkedIngredientsCount = checkedIngredients.flat().filter(Boolean).length;
  const ingredientProgress = (checkedIngredientsCount / totalIngredients) * 100;

  const stepProgress = (checkedSteps.filter(Boolean).length / instructionsList.length) * 100;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>← Back to Home</Link>

      <div className={styles.titleContainer}>
        <div className={styles.recipeTitle}>
          <h1 className={styles.title}>Hot Sour Soup</h1>
          <p className={styles.time}>Prep Time: 20 mins | Cook Time: 10 mins | Serves: 4</p>
          <p className={styles.stepText}>A hot take on the Chinese dish Hot Sour Soup. I just like this one.</p>
        </div>
        <img src={forkast} alt="Forkast logo" className={styles.image} />
      </div>

      <div className={styles.recipeMethod}>
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Ingredients</h2>

          {/* Ingredients Progress Bar */}
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${ingredientProgress}%` }}
              aria-label={`Ingredients progress: ${Math.round(ingredientProgress)}%`}
            />
          </div>

          {ingredientsList.map(({ section, items }, sectionIndex) => (
            <div key={sectionIndex} className={styles.ingredientSection}>
              <h3 className={styles.subSectionTitle}>{section}</h3>
              <ul>
                {items.map((item, itemIndex) => {
                  const checked = checkedIngredients[sectionIndex][itemIndex];
                  const popKey = `${sectionIndex}-${itemIndex}`;
                  return (
                    <li
                      key={itemIndex}
                      className={`${styles.checkable} ${checked ? styles.checked : ""}`}
                      onClick={() => toggleChecked(sectionIndex, itemIndex, "ingredient")}
                      role="checkbox"
                      aria-checked={checked}
                      tabIndex={0}
                      onKeyDown={e => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleChecked(sectionIndex, itemIndex, "ingredient");
                        }
                      }}
                    >
                      <span className={`${styles.customCheckbox} ${popIndexes.ingredient === popKey ? styles.pop : ''}`}>
                        {checked ? "✦" : "☆"}
                      </span>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Instructions</h2>

          {/* Instructions Progress Bar */}
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${stepProgress}%` }}
              aria-label={`Instructions progress: ${Math.round(stepProgress)}%`}
            />
          </div>

          <ol>
            {instructionsList.map((step, index) => (
              <li
                key={index}
                className={`${styles.checkable} ${checkedSteps[index] ? styles.checked : ""}`}
                onClick={() => toggleChecked(index, null, "step")}
                role="checkbox"
                aria-checked={checkedSteps[index]}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleChecked(index, null, "step");
                  }
                }}
              >
                <span
                  className={`${styles.customCheckbox} ${popIndexes.step === index ? styles.pop : ''}`}
                >
                  {checkedSteps[index] ? '✦' : '☆'}
                </span>
                <div>
                  <strong>{step.title}</strong>
                  {step.description && <p>{step.description}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <h3>Note:</h3>
        <p className={styles.stepText}>
          Feel free to substitute the egg for tofu skin or omit it completely. Eggs are a commodity these days and sometimes hard to come by. 🥲
        </p>
      </div>
    </div>
  );
}
