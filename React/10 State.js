/*  
State represents the possible conditions of your application. Maybe you have a state for editing, and a state for saved,
or a state for logged in and logged out. In react apps we want to identify the minimal representation of app state, and 
then we want to reduce state to as few components as possible. 
This way we can avoid overwriting state variables, which can cause chaos in our applications.

It's a very common pattern in React, that the parent component(viz APP.js) has the 'state' which will it then transer to
the children components. Somewhere in your APP.js, say when a service becomes active, you will override the 'state' object
using this.setState({..}) (if you are using createClass way) and when ever setState is called, React automatically calls
the render() method in where you've the code passing the state to children components as props

*/
IN this article, state declaration for two types is discussed
1. Type-1: for components created with createClass method
2. Type 2: Components created with ES6 Class syntax (i.e extends React.Component)


/*	Type-1: for components created with createClass method	*/

//Create a new component called "App"
//(make new file "app.js" in Components flder
(in app.js)

                import { createClass } from 'react'

                export const App = createClass({
                  getInitialState() {
                    return {
                      allSkiDays: [
                      {
                        resort: "Squaw Valley",
                        date: new Date("1/2/2016"),
                        powder: true,
                        backcountry: false
                      },
                      {
                        resort: "Kirkwood",
                        date: new Date("3/28/2016"),
                        powder: false,
                        backcountry: false
                      },
                      {
                        resort: "Mt. Tallac",
                        date: new Date("4/2/2016"),
                        powder: false,
                        backcountry: true
                      }
                    ]
                    }
                  },
                  render() {
                    return (
                      <div className="app">
                        {this.state.allSkiDays[0]["resort"]}  //"Squaw Valley"
                      </div>
                    )
                  }
                })
                
(in index.js) //we've removed the table structure and now instead of holding these as props, we're going to hold them in state.
              import React from 'react'
              import { render } from 'react-dom'
              import './stylesheets/ui.scss'
              import { App } from './components/App'

              window.React = React

              render(
                <App />,
                document.getElementById('react-container')
              )
              
              
              
              
/*  Passing State as props  */
// Let's pass down our state data as properties to our child components. 
// We're going to use the App component to render SkiDayList and SkiDayCount. 
(in App.js)
//render() and countDays(..) are methods inside class. render() will come last
render() {
		return (
			<div className="app">
				<SkiDayList days={this.state.allSkiDays}/> //here we are passing state of parent(this) as property to child(SkiDaylist)
				<SkiDayCount total={this.countDays()} //no filter is passed, because we want to count all
							 powder={this.countDays( 
							 		"powder"  //'powder' filter is passed
							 	)}
							 backcountry={this.countDays(
							 		"backcountry"
							 	)}/>
      </div>
		)
	}
})


countDays(filter) {
 
    return this.state.allSkiDays.filter(function(day) {
      if(filter) {return day[filter]} //filter is just the ES5 filter function that we can use to deal with arrays.
      else {return day}
    }).length
  /* or you can use ES6 syntax
		const { allSkiDays } = this.state
		return allSkiDays.filter( 
			(day) => (filter) ? day[filter] : day).length //day[filter] | day
      */
	}
























/*	Type 2: Components created with ES6 Class syntax	*/
// When creating stateful components with ES6, the syntax is very similar to createClass but there are a few things to look out for.
class App extends React.Component {
                state = {
                    loggedIn: false
                }
                render() {
                    return (
                        <div>
                            <div>The user is {this.state.loggedIn ? "logged in" : "not logged in"}.</div>
                            <Lake name="Lake Tahoe" />
                            <Lake name="Angora Lake" />
                            <Lake name="Shirley Lake" />
                            <Lake name="Cathedral Lake" />
                        </div>
                    )
                }
            }
/* first see this above simplest example, and then go for App.js example */


(In App.js)
	//add `import { Component } from 'react'
        //change export const App = createClass(..) to export class App extends Component {..}
	//remove commas within the methods which shouldn't be there in class syntax

	//There's a different method that we need to add to our class component here and it's called constructor.
	//So constructor is going to be responsible for taking in props. We're going to call our super class and we're going 
	//to add some new state data to our class.
	import { Component } from 'react'
	import { SkiDayList } from './SkiDayList'
	import { SkiDayCount } from './SkiDayCount'

	export class App extends Component {
		constructor(props) {
			super(props)
			this.state = {	//instead of using getInitialState, we use this.state property and assign it our array	 object
				allSkiDays: [
				{
					resort: "Squaw Valley",
					date: new Date("1/2/2016"),
					powder: true,
					backcountry: false
				},
				{
					resort: "Kirkwood",
					date: new Date("3/28/2016"),
					powder: false,
					backcountry: false
				},
				{
					resort: "Mt. Tallac",
					date: new Date("4/2/2016"),
					powder: false,
					backcountry: true
				}
			]
			}
		}
		
		coumtDays(powderOrBackcountry) {
			return this.state.allSkiDays.filter(function(day) {
				if(filter) return day[powderOrBackcountry];
				else return day;
				}).length
		}
		/* abridged version: Try to understand clearly
		countDays(powderOrBackcountry) {
			const { allSkiDays } = this.state
			return allSkiDays.filter(
				(day) => (powderOrBackCountry) ? day[filter] : day).length
		}
		
		*/
		
		render() {
			return (
				<div className="app">
					<SkiDayList days={this.state.allSkiDays}/>
					<SkiDayCount total={this.countDays()}
								 powder={this.countDays(
										"powder"
									)}
								 backcountry={this.countDays(
										"backcountry"
									)}/>
				</div>
			)
		}
	}

              
              
              
              
              
              
              
              
              
              
              
              
