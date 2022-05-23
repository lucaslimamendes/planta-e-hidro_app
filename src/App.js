import { useState, useEffect } from 'react';
import { AppContext } from './context';
import Routes from './Routes';
import { APIAuth } from './utils/http-common';

const App = () => {
  const [ logged, setLogged ] = useState(false);
  const [ user, setUser ] = useState({});
  const [ plantations, setPlantations ] = useState([]);
	
	const dispatchEvent = (actionType, payload) => {
		switch (actionType) {
			case 'SET_LOGGED':
				setLogged(payload.logged);
				return;
      case 'SET_USER':
        setUser(payload.user);
        return;
      case 'SET_PLANTATIONS':
        setUser(payload.plantations);
        return;
			default:
				return;
		}
	};

  const verifySession = async () => {
    const resp = await APIAuth.get('/v2/user');

    if (resp.status === 200) {
      await getPlantations();
      dispatchEvent('SET_LOGGED', { logged: true });
      dispatchEvent('SET_USER', { user: await resp.data });
    }
  };

  const getPlantations = async () => {
    try {
        const resp = await APIAuth.get('/v1/greenhouses');
        if(resp.status == 200){
          setPlantations(await resp.data);
        }
    } catch (error) {
        console.log('error.message', error.message);
    }
  };

  useEffect(() => {
    verifySession();
  }, []);

  return (
    <AppContext.Provider value={{ logged, plantations, user, dispatchEvent }}>
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
