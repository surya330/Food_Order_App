import './App.css';
import Header from './Components/Layout/Header';
import AvailableMeals from './Components/Meals/AvailableMeals';
import MealsSummary from './Components/Meals/MealsSummary';

function App() {
  return (
    <>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default App;
