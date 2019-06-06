#FIXES
[x] Adding CORS for server 
`pip install -U flask-cors`
[x] fix typo sjon => json

#TODO
[X] Rank titles page: Display all titles available in the company in list format, including title name and id for reference. Call `/titles/` API
[x] Employee page: 
	* List all registered employees their info, including id, name, email and title. Only display 20 employees per page. API GET `/employee` return all employees
	* Create employee form: textbox to provide name, title_id (refer to rank titles page) and email. On submission call PUT `/employee` API and display status message
	* Search employee button: Search employee by id using GET `/employee/id`, display result with 2 action buttons: UPDATE and DELETE. Update button provide similar form as create employee, calling POST `employee/id`, and refresh the result page upon successful update. Delete button call DELETE `/employee/id` and return to list all employees page upon successful deletion
[x] Adding interaction
[X] Improve UX UI


**INSTRUCTION**
`yarn install` to install all dependencies packages
`yarn run dev` to start development server at http://localhost:3000	
`yarn run build` to build. Built files are located in "public" folder
`yarn run start` this script is to run the app on production server or test built files