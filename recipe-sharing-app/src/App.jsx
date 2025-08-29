// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';
import RecipeDetails from './components/RecipeDetails';
import { useState } from 'react';

function App() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const recipes = useRecipeStore((state) => state.recipes);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (title && description) {
      addRecipe({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Recipe Sharing App</h1>
              <form onSubmit={handleAdd}>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
                <button type="submit">Add Recipe</button>
              </form>

              <ul>
                {recipes.map((r) => (
                  <li key={r.id}>
                    <Link to={`/recipe/${r.id}`}>{r.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <Route path="/recipe/:id" element={<RecipeRoute />} />
      </Routes>
    </Router>
  );
}

function RecipeRoute() {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
}

export default App;

