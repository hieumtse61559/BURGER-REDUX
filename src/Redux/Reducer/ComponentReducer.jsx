const initialState = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {

    salad: 10,

    cheese: 20,

    beef: 55

  },
  total: 85,
}


export default function ComponentReducer(state = initialState, action){

  const sumTotal = (numSalad, numCheese, numBeef) => {
    state.total = (numSalad * state.menu.salad) + (numCheese * state.menu.cheese) + (numBeef * state.menu.beef)
    return state.total
  }

  

  switch (action.type) {
    case "SALAD_INCREASE" : {
      const newBurger = {...state.burger, salad: state.burger.salad + 1};
      const newTotal = sumTotal(newBurger.salad, newBurger.cheese, newBurger.beef);
      return {
        ...state, burger: newBurger, total: newTotal
      }
    }
    case "SALAD_DECREASE" : {
      const newBurger = {...state.burger, salad: state.burger.salad - 1};
      const newTotal = sumTotal(newBurger.salad, newBurger.cheese, newBurger.beef);
      return {
        ...state, burger: newBurger, total: newTotal
      }
    }

    case "CHEESE_INCREASE" : {
      const newBurger = {...state.burger, cheese: state.burger.cheese + 1};
      const newTotal = sumTotal(newBurger.salad, newBurger.cheese, newBurger.beef);
      return {
        ...state, burger: newBurger, total: newTotal
      }
    }
    case "CHEESE_DECREASE" : {
      const newBurger = {...state.burger, cheese: state.burger.cheese - 1};
      const newTotal = sumTotal(newBurger.salad, newBurger.cheese, newBurger.beef);
      return {
        ...state, burger: newBurger, total: newTotal
      }
    }

    case "BEEF_INCREASE" : {
      const newBurger = {...state.burger, beef: state.burger.beef + 1};
      const newTotal = sumTotal(newBurger.salad, newBurger.cheese, newBurger.beef);
      return {
        ...state, burger: newBurger, total: newTotal
      }
    }
    case "BEEF_DECREASE" : {
      const newBurger = {...state.burger, beef: state.burger.beef - 1};
      const newTotal = sumTotal(newBurger.salad, newBurger.cheese, newBurger.beef);
      return {
        ...state, burger: newBurger, total: newTotal
      }
    }
    
  
    default:
      return state;
  }
}