import { Link } from "react-router-dom";
import { useState } from "react";
import styles from './Recipe.module.css';
import forkast from './logo-forkast.png';

export default function CarrotCinnamonScroll() {
  const ingredientsList = [
    {
      section: "The Dough",
      items: [
        "1 cup whole milk",
        "2 carrots, cut into chunks",
        "⅔ cup sugar",
        "½ cup butter, melted",
        "2 eggs, room temperature",
        "1 ½ teaspoons kosher salt",
        "585g flour",
        "2 packets of 7g instant yeast",
        "½ cup heavy cream"
      ],
    },
    {
      section: "The Filling",
      items: [
        "1 ½ cups butter, softened",
        "1 ½ cups brown sugar",
        "3 tablespoons cinnamon",
        "2 teaspoons freshly ground nutmeg",
        "1 teaspoon ground ginger",
        "1 teaspoon ground cloves"
      ],
    },
    {
      section: "The Frosting",
      items: [
        "¼ cup butter, softened",
        "450 grams cream cheese, softened",
        "450 grams mascarpone",
        "1 cup powdered sugar",
        "1 teaspoon vanilla extract",
        "¼ teaspoon kosher salt",
        "Milk (as needed for consistency)"
      ],
    }
  ];

  const instructionsList = [
    {
      title: "Step 1",
      description: "Blend milk and carrots on high for 1–2 minutes until smooth. Strain through a fine sieve and discard solids."
    },
    {
      title: "Step 2",
      description: "Whisk flour, salt, and yeast in a stand mixer bowl."
    },
    {
      title: "Step 3",
      description: "Microwave carrot milk, melted butter, and sugar until lukewarm (not over 40°C)."
    },
    {
      title: "Step 4",
      description: "Pour wet mixture into dry. Mix on low for 2 mins. Add eggs one at a time, then knead on medium until dough pulls away from the bowl."
    },
    {
      title: "Step 5",
      description: "Check texture—tacky but not sticky. If sticky, add flour 1 tbsp at a time. Cover and rest for 15 mins."
    },
    {
      title: "Step 6",
      description: "Mix filling: softened butter, brown sugar, cinnamon, nutmeg, ginger, and cloves until smooth."
    },
    {
      title: "Step 7",
      description: "Roll dough into a 12×18-inch rectangle on a floured surface."
    },
    {
      title: "Step 8",
      description: "Spread filling, roll tightly, slice into 6–12 rolls. Place in greased pan, cover and rise until doubled (1–2 hours)."
    },
    {
      title: "Step 9",
      description: "Preheat to 190°C. Drizzle heavy cream over rolls. Bake 25–30 mins until golden brown."
    },
    {
      title: "Step 10",
      description: "Cool on a wire rack."
    },
    {
      title: "Step 11",
      description: "Make frosting: beat cream cheese, mascarpone, and butter. Add powdered sugar, vanilla, salt, lemon zest, and milk to desired texture."
    },
    {
      title: "Step 12",
      description: "Slice rolls in half and frost inside. Serve and enjoy!"
    }
  ];

  const [checkedIngredients, setCheckedIngredients] = useState(
    ingredientsList.map(section => section.items.map(() => false))
  );
  const [checkedSteps, setCheckedSteps] = useState(Array(instructionsList.length).fill(false));
  const [popIndexes, setPopIndexes] = useState({ ingredient: null, step: null });

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

  const totalIngredients = ingredientsList.reduce((acc, section) => acc + section.items.length, 0);
  const checkedIngredientsCount = checkedIngredients.flat().filter(Boolean).length;
  const ingredientProgress = (checkedIngredientsCount / totalIngredients) * 100;

  const stepProgress = (checkedSteps.filter(Boolean).length / instructionsList.length) * 100;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>← Back to Home</Link>

      <div className={styles.titleContainer}>
        <div className={styles.recipeTitle}>
          <h1 className={styles.title}>Carrot Cake Cinnamon Scroll</h1>
          <p className={styles.time}>Prep Time: | Cook Time: | Total Time:</p>
            <p className={styles.stepText}>
              <a href="https://www.youtube.com/watch?v=vm7PUbmESjE" target="_blank" rel="noopener noreferrer">Matty Matheson</a>'s 
              legendary carrot cake cinnamon rolls — soft, gooey, and packed with spice.
            </p>
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
                <span className={`${styles.customCheckbox} ${popIndexes.step === index ? styles.pop : ''}`}>
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
    </div>
  );
}