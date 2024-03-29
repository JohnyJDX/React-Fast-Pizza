import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Menu, { loader as menuLoader } from './components/menu/Menu';
import CreateOrder, {
	action as createOrderAction,
} from './components/order/CreateOrder';
import Order, { loader as orderLoader } from './components/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{ path: '/', element: <Home /> },
			{
				path: '/menu',
				element: <Menu />,
				loader: menuLoader,
				errorElement: <Error />,
			},
			{ path: '/cart', element: <Cart /> },
			{
				path: '/order/new',
				element: <CreateOrder />,
				action: createOrderAction,
			},
			{
				path: '/order/:orderID',
				element: <Order />,
				loader: orderLoader,
				errorElement: <Error />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
