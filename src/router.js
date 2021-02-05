import ListTest from 'components/ListTest'
import CreditCardForm from 'components/CreditCardForm'
import IG from 'components/IG'

const routes = [
  {
    path: '/Home',
    component: IG,
  },
  //   {
  //     path: '/Demos',
  //     component: ListTest,
  // routes: [
  //   {
  //     path: '/tacos/bus',
  //     component: Bus,
  //   },
  //   {
  //     path: '/tacos/cart',
  //     component: Cart,
  //   },
  // ],
  //   },
  {
    path: '/Pages',
    component: CreditCardForm,
  },
  //   {
  //     path: '/Blog',
  //     component: Sandwiches,
  //   },
  //   {
  //     path: '/About',
  //     component: Sandwiches,
  //   },
  //   {
  //     path: '/Contact',
  //     component: Sandwiches,
  //   },
]

export default routes
