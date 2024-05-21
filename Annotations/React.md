lifecycle after React v16
Functional component  
> componentDidMount  
> componentDidUpdate  
> componentWillUnmount  

Class component  
> static getDerivedStateFromProps - equivalent to call the set function from useState in function component  
> static getDerivedStateFromError  
> componentDidCatch  
> getSnapshotBeforeUpdate  
> shouldComponentUpdate  

lifecycle deprecated in v16
> componentWillMount  
> componentWillReceiveProps  
> componentWillUpdate  

React 19
> const [isPending, startTransition] = useTransition  
> const [optimisticState, addOptimistic] = useOptimistic(state, (currentState, optimisticValue) => {...})  
> useFormState now is useActionState
> const { pending, data, method, action } = useFormStatus
> use hook: use(promise) or use(ApiContext)
> Context.Provider could be use only as Context

Hooks
> Features that allow the developer to access React state and lifecycle in functional components

useEffect
> componentDidMount, componentDidUpdate and componentWillUnmount  
> Runs every render. Instead of thinking in terms of "mounting" and "updating", just "after render".  

useLayoutEffect
> Runs after the DOM updates and before the Browser paint the page
> Used to manipulate the DOM

useMemo
> Memorize a calculation to avoid unnecessary re-renders depending some dependencies

useCallback
> Memorize a function to avoid unnecessary re-renders to component childrens down the tree.

useReducer / React Redux
> Action -> Dispatcher -> Store -> View  
> Single source of truth (only one store)  
> State is read-only  
> Changes are made in the reducer, a pure function (immutable)  
> Dispatch actions that will handle by switch statemant in reducer function  

``` 
const [state, dispatch] = useReducer(reducer, initialValue)
```

useContext (Context API)
> Avoid prop drilling  
> components: TestContext, TestProvider (a wrapper using TestContext.provider) and useTestContext (another wrapper for useContext(TestContext))

```
const TestContext = createContext(initialValue)

const TestProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <TestContext.Provider values={ state, dispatch }>
            {children}
        </TestContext.Provider>
    )
}

useTestContext = () => useContext(TestContext)
```

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

Closures
> Enhancing React's functionality, particularly in managing state and handling events.
> Any function that deals with state, props or events in a functional component

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
> Reusuability - Allow reuse component logic across multiple components
> Flexibility - Add additional arguments to customize component behavior
> Separation of concerns - Encapsulating functionality in a separate component
> Composition - Compose behaviors to create more complex functionality
> Use for authentication, error handling, logging, performance tracking...

className over class
> class is a keyword in JavaScript.

Virtual DOM
> Copy of real DOM to have less changes cost operation

Shadow DOM
> Subtrees of the real DOM eleements added in the document instead in the real DOM

Error Boundaries
> Use `getDerivedStateFromError` static function to show the fallback UI and `componentDidCatch` to send the log to log services.

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

React Window and React Virtualized
> Window is a re-rewrite to make is smaller and faster than Virtualized
> Both are used to improve performance of rendering long lists by only writing the visible portion of the list in the DOM