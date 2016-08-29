# LearningReact
Learn React.js from scratch.

## Basics of React

* Transpiling  - Babeljs
* Components always output only one html element
* Anything in curly braces {} inside jsx i.e. return (...) will be executed as js, self executing anonymous function, invoke class methods, have a constructor in class
* Data management - state : this.state (only on that component) - Updates on virtual DOM, modifies real DOM only on change in virtual i.e. only that particular element is modified
* Data management - props : Passed herarchically(top to down) (Similar to properties or attributes in HTML tags)
* If a component is only aware of the data it needs and the event(s) it needs to fire when things change, it can be extremely decoupled from the rest of the application and less prone to break as the React JS application changes over time.
* Route Params - navigate to / route -
	** this.props.history.pushState(null,"/") - will have previous history
	** this.props.history.replaceState(null,"/") - will not have previous history
* Route params and query variables commit # 10
	** this.props.params.repos === "vivek" for 'http://localhost/repos/vivek'
	** this.props.location.query.date === "today" this.props.location.query.filter === "asc"  for 'http://localhost/repos/vivek?date=today&filter=asc'
