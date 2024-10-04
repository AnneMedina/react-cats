#markdown documentation

1. What do props help us accomplish?
   Props work like arguments in a function. It helps deliver dynamic data in the components so they can be reusable.

2. How do you pass a prop into a component?
   Put it as an attribute in your JSX code and it'll be passed to the component as arguments.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   No because the JSX we use to describe the native DOM elements will be turned into real DOM elements by React. And these real DOM elements only have the properties/attributes specified in the HTML specification.

4. How do I receive props in a component?
   function Navbar(props) {
   return (
   <header>
   {props.name}
   </header>
   )
   }

5. What data type is `props` when the component receives it?
   Object. It is a Javascript Object.
