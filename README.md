![Github](https://user-images.githubusercontent.com/64391274/211215734-bbc57b92-9a71-496d-873e-3eedc7523916.png)


# Project Name
 PlanMyTrip <br />
 Our project is a webapp which helps users to plan their trips according to their budget.The user can enter their desired destination and a feasible budget.As a result user gets a complete travel plan which includes all the top places to visit and food suggestions if any according to their budget plan.Here we use OpenAi's Davinci text model for generating results.

## Team members
1. Rishikesh k v     https://github.com/rishi9808
2. Vismaya B         https://github.com/VismayaBalan
## Team Id
MMLsZpqYUl3kAyN1oF1R
## Link to product walkthrough
[link to video](https://drive.google.com/drive/folders/1mH8ivWU8zm-Vnr8U_O1t-3DPUgwf74Ls )
## How it Works ?
Our project is a web app built on Html, CSS, and Js at the front end and node js and express libraries at the backend. the davinci text model from openAi is used for data generation. Data is generated by modifying the model's prompt with the values of location and budget.

prompt at the backend is given as: 
   `I need a complete travel plan with places to visit and food to try in for 3 Days in ${location} in  a budget of Rs${budget}.show the output day by day `;

The values of location and budget are taken input from the user as a form and passed to the prompt, thus generating the required output.

https://drive.google.com/drive/folders/1mH8ivWU8zm-Vnr8U_O1t-3DPUgwf74Ls 

## Libraries used
nodejs - v16.17.1 <br />
express - ^4.18.2 <br />
openai - "^3.1.0 

## How to configure
1. Clone this repo <br /> 
2. Open terminal on the repo folder and install the dependencies  <br /> 
`npm install`
## How to Run
1. Open terminal on the repo folder and type
`npm run start` <br />
or <br />
`npm run dev` <br />
2. open a browser and go to http://localhost:5000
<br />

