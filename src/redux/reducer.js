

const initialState = {
    users:[],
    user: null,
    followerAnalytics: null,
    postAnalytics: null,
    ads: [],
    promotions: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
            return { ...state, users: action.payload };
      case 'FETCH_USER_BY_ID':
        return {
          ...state,
          user: action.payload
        };
      case 'FETCH_FOLLOWER_ANALYTICS':
        return {
          ...state,
          followerAnalytics: action.payload
        };
      case 'FETCH_POST_ANALYTICS':
        return {
          ...state,
          postAnalytics: action.payload
        };
      case 'FETCH_ADS':
        return {
          ...state,
          ads: action.payload
        };
      case 'FETCH_PROMOTIONS':
        return {
          ...state,
          promotions: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  