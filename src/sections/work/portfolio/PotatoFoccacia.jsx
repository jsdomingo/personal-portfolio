import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './Recipe.module.css';
import forkast from './logo-forkast.png';

export default function PotatoFoccacia() {
  const ingredientsList = [
    "400 g flour (all purpose flour)",
    "300 g potatoes",
    "150 ml extra virgin olive oil",
    "200 ml milk",
    "7 g active dried yeast",
    "2 teaspoons salt"
  ];

  const instructionsList = [
    {
      title: "Step 1: Cook the Potatoes",
      description: "Wash the potatoes with their skins on and place them in a pan of cold water. Bring to a boil and cook until tender. Drain and mash them while still hot."
    },
    {
      title: "Step 2: Season the Potatoes",
      description: "Transfer the mashed potatoes to a bowl. Add extra virgin olive oil and salt, mixing well until the oil is fully absorbed."
    },
    {
      title: "Step 3: Activate the Yeast",
      description: "Warm the milk until lukewarm and dissolve the yeast in it. Pour this mixture into the potatoes and stir to combine."
    },
    {
      title: "Step 4: Make the Dough",
      description: "Gradually add the flour and knead vigorously for at least 10 minutes (or use a mixer with a dough hook)."
    },
    {
      title: "Step 5: First Rise",
      description: "Cover the dough and let it rise for about 2 hours in a draft-free spot."
    },
    {
      title: "Step 6: Prepare for Baking",
      description: "Oil a 26cm baking dish and spread the dough evenly inside. Cover and let rise for another hour until doubled in size."
    },
    {
      title: "Step 7: Final Touches",
      description: "Dimple the dough with your fingers, drizzle generously with olive oil."
    },
    {
      title: "Step 8: Bake",
      description: "Bake in a preheated oven at 180–200°C for 35–40 minutes until golden and cooked through."
    },
    {
      title: "Step 9: Finish and Serve",
      description: "Brush the hot focaccia with olive oil and serve warm or at room temperature."
    },
  ];

  const [checkedIngredients, setCheckedIngredients] = useState(Array(ingredientsList.length).fill(false));
  const [checkedSteps, setCheckedSteps] = useState(Array(instructionsList.length).fill(false));
  const [popIndexes, setPopIndexes] = useState({ ingredient: null, step: null });

  const toggleChecked = (index, type) => {
    const setChecked = type === "ingredient" ? setCheckedIngredients : setCheckedSteps;
    const currentState = type === "ingredient" ? checkedIngredients : checkedSteps;

    const newState = [...currentState];
    newState[index] = !newState[index];
    setChecked(newState);

    setPopIndexes(prev => ({ ...prev, [type]: index }));
    setTimeout(() => {
      setPopIndexes(prev => ({ ...prev, [type]: null }));
    }, 300);
  };

  const ingredientProgress = (checkedIngredients.filter(Boolean).length / ingredientsList.length) * 100;
  const stepProgress = (checkedSteps.filter(Boolean).length / instructionsList.length) * 100;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>← Back to Home</Link>

      <div className={styles.titleContainer}>
        <div className={styles.recipeTitle}>
          <h1 className={styles.title}>Potato Focaccia</h1>
          <p className={styles.time}>Prep Time: ~30 mins | Cook Time: ~40 mins | Total Time: ~2.5 hours</p>
          <p className={styles.stepText}>Soft potato focaccia with olive oil and a golden crust — perfect for any meal.</p>
        </div>
        <img src={forkast} alt="Forkast logo" className={styles.image} />
      </div>

      <div className={styles.recipeMethod}>
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Ingredients</h2>

          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${ingredientProgress}%` }}
              aria-label={`Ingredients progress: ${Math.round(ingredientProgress)}%`}
            />
          </div>

          <ul>
            {ingredientsList.map((item, index) => (
              <li
                key={index}
                className={`${styles.checkable} ${checkedIngredients[index] ? styles.checked : ""}`}
                onClick={() => toggleChecked(index, "ingredient")}
                role="checkbox"
                aria-checked={checkedIngredients[index]}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleChecked(index, "ingredient");
                  }
                }}
              >
                <span
                  className={`${styles.customCheckbox} ${popIndexes.ingredient === index ? styles.pop : ''}`}
                >
                  {checkedIngredients[index] ? '✦' : '☆'}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Instructions</h2>

          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${stepProgress}%` }}
              aria-label={`Instructions progress: ${Math.round(stepProgress)}%`}
            />
          </div>

          <ol>
            {instructionsList.map(({ title, description }, index) => (
              <li
                key={index}
                className={`${styles.checkable} ${checkedSteps[index] ? styles.checked : ""}`}
                onClick={() => toggleChecked(index, "step")}
                role="checkbox"
                aria-checked={checkedSteps[index]}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleChecked(index, "step");
                  }
                }}
              >
                <span
                  className={`${styles.customCheckbox} ${popIndexes.step === index ? styles.pop : ''}`}
                >
                  {checkedSteps[index] ? '✦' : '☆'}
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
