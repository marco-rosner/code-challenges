lifecycle after React v16
> getDerivedStateFromProps  
> componentDidMount  
> shouldComponentUpdate  
> getSnapshotBeforeUpdate  
> componentDidUpdate  
> componentWillUnmount  

lifecycle deprecated in v16
> componentWillMount  
> componentWillReceiveProps  
> componentWillUpdate  

useEffect
> componentDidMount, componentDidUpdate and componentWillUnmount  
> Runs every render. Instead of thinking in terms of "mounting" and "updating", just "after render".  

useMemo
> Memorize a calculation to avoid unnecessary re-renders depending some dependencies

useReducer / React Redux
> Action -> Dispatcher -> Store -> View  
> Single source of truth (only one store)  
> State is read-only  
> Changes are made in the reducer, a pure function (immutable)  
> Dispatch actions that will handle by switch statemant in reducer function  

useContext (Context API)
> Avoid prop drilling  
> const TestContext = createContext(initialValue)  
> components: TestContext, TestProvider (a wrapper using TestContext.provider) and useTestContext (another wrapper for useContext(TestContext))  

Create-react-app
> React (Javascript library)  
> Webpack (Module bundler)  
> Babel (Javascript compiler)  
> ESLint (Statical anallyzer)  
> Jest (Test framework)  
> React Testing Library (Test library)  

Flux
> State is mutable  
> Multiple stores

Element vs Component
> Element is a plain object while Component takes props as input and returns a JSX tree as output

Pure Component
> Render the same output for the same state and props

Props
> Read-only objects used as inputs for the components
State  
> An object that holds some information during the lifetime of the component

Synthetic events
> Cross-browser wrapper around the browser's native event.

React Fiber
> The new reconciliation engine in React v16. Improve animation, layout, gestures and new concurrency primitives. Using incremental rendering: split rendering work into chunks and spread it out over multiple frames

Controlled components
> when component controls all actions inside it  

Uncontrolled components
> The dev can control the specifications of the component through props

HOC - High Order Component
> Takes a component and returns a new component with informations added to the component wrapped

className over class
> class is a keyword in JavaScript.

Virtual DOM
> Copy of real DOM to have less changes cost operation

Shadow DOM
> Subtrees of the real DOM eleements added in the document instead in the real DOM

Error Boundaries
> Use getDerivedStateFromError static function to show the fallback UI and componentDidCatch to send the log to log services.

React-DOM package
> render(), hydrate(), findDomNode and createPortal

ReactDOMServer
> For SSR use  
> renderToString() or renderToStaticMarkup()

React Router v4

Types of routers
> BrowserRouter  
> HashRouter  
> MemoryRouter  

Components
> Routes/Route  
> Link  
> NavLink - activeClassName  
> Navigate - Update only the block that it has been called  

Hooks
> useRoutes - Receive a object with the route configuration  
> useParams - Returns a object with key/value params of the URL  
> useLocation - Returns the actual URL  
> useNavigate - Same as Navigate component  
> useHistory - Returns history object  

React Query
> Automatic caching and synchronization  
> useQuery = `const { data, isLoading, isError } = useQuery('posts', fetchPosts)`  
> useMutation = `const { mutate, isSuccess, isError } = useMutation(updateUser)`  
> Built-in devtools  