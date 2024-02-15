# IN THIS REPOSITORY

## 📜Create Web page with ROUTES
 ***you can see output in*** 📌[Netlify.com](https://react-web-page-router-by-arun.netlify.app/)

### 🔖Command for install react-router-dom

```command prompt
 ✒ npm i react-router-dom 
```
**What is Router?**
```textarea
    In React Application, it is a process or 'Navigating different pages' of the application 'without reloading' the web page 
```

📢 *Structure for Routing :* 🔽 
```javascript
<BrouserRouter>
	<Routes>
		<Route path="/"  element={<Home />} />   //Main Route component
		<Route path="/about"  element={<About />} />	
	</Routes>
</BrouserRouter>
````
*For linking Multiple components we are using `<Link to='/' > Component name </Link>` or we can use `<NavLink to='/' > component name</NavLink>`* 


