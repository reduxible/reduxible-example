import Reduxible from '../libs/Reduxible';
import Html from './views/containers/Html';
import Error from './views/containers/Error/Error';
import routes from './routes';
import middleware from './middleware/index';
import reducer from './reducer/index';

export default function reduxible(config) {
  return new Reduxible({
    config,
    container: Html,
    errorContainer: Error,
    routes: routes,
    middleware: middleware,
    reducer: reducer
  });
}