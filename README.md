# chatbot-with-angular
Chatbot implementation using Angular.

You want to create a chatbot client with angular. 
Here you go

1. Just clone the application using the command
`git clone https://github.com/richavadhut/chatbot-with-angular.git`

2. Install the packages using the command
`npm install`

3. Create an agent on dialogflow.

4. Make sure, the created agent have the _**Default Welcome Intent**_  Intent with _**Welcome**_ Event. By defult, there is **Default Welcome Intent** intent.

5. Go to setting page of the agent by clicking the gear icon in-front of agent name.

6. Copy the "**Client access token**" and Replace with "**CLIENT_ACCESS_TOKEN**" from _environment.ts_ and _environment.prod.ts_. If you have a different agent for production and development, you have to make the changes accordingly in _environment.ts_ and _environment.prod.ts_.
`export const environment = {`
  `production: false,`
  `dialogflow:{`
    `angularBot:'CLIENT_ACCESS_TOKEN'`
  `}`
`};`

7. Run the application using the following command.
`ng serve --o`

Your application is ready to play on URL `http://localhost:4200/`

Following response has been decoded in this example :

`{`
	`"fulfillment": {`
		`"speech": "This is for testing...!!! Ignore it...!!!",`
		`"source": "",`
		`"messages": [{`
			`"type": 0,`
			`"speech": "This is for testing...!!! Ignore it...!!!"`
		`}, {`
			`"type": 2,`
			`"title": "",`
			`"replies": ["C", "C++", "Java", "JavaScript", "PHP", "DOT NET", "Type Script", "Phyton"]`
		`}, {`
			`"type": 1,`
			`"title": "This is title",`
			`"subtitle": "this is text body",`
			`"imageUrl": "https://image.flaticon.com/icons/svg/149/149076.svg",`
			`"buttons": [{`
				`"text": "This is a button",`
				`"postback": "https://docs.dialogflow.com/"`
			`}]`
		`}, {`
			`"type": 3,`
			`"imageUrl": "https://image.flaticon.com/icons/svg/149/149076.svg"`
		`}, {`
			`"type": 0,`
			`"speech": "This is text"`
		`}, {`
			`"type": 4,`
			`"data": {`
				`"list": ["C", "C++", "Java", "JavaScript", "PHP", "DOT NET", "Type Script", "Phyton"]`
			`}`
		`}],`
		`"data": {`
			`"default": {`
				`"list": ["C", "C++", "Java", "JavaScript", "PHP", "DOT NET", "Type Script", "Phyton"]`
			`}`
		`}`
	`}`
`}`

