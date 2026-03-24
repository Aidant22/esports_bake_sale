# Otsego Esports Bake Sale Menu

This is a simple web app that I created to run locally on my machine while connecting my ipad and computer to a [tailscale](https://tailscale.com/) network. This app is designed to be used as a digital menu that people buying items from the bake sale can see what ingredients and allergens are in each item being sold. This app uses [next.js](https://nextjs.org/docs/app/getting-started/installation) and [react](https://react.dev/) while adding additional components from [shadcn](https://ui.shadcn.com/docs/components/radix/drawer).

### Setup
Currently the app is set up to map each image and bakery item dynamically, so if you need to add a new item you can add modify the `BAKED_GOODS` array **BUT** be sure to also add the appropriate picture url in `BAKED_GOODS_IMAGES`. All images should be added to the public folder to ensure they are able to be seen and properly implemented onto the webpage.

### Requirements
If you are looking to run this app it was built to run, ensure you [set up a tailscale account](https://tailscale.com/docs/how-to/quickstart) and add your host PC and your mobile device that you want to use. Otherwise you will have to assign this a DNS and deploy it through a site like [vercel](https://vercel.com/)

### Starting the Web App
To start this web app simply clone the repository using `git clone` and ssh or https, then run `npm run dev`. This will start the app on your machine using localhost:3000 which should be modified to use the tailscale ip of your host machine. This will allow you to create a connection that your ipad can reach while not being on the same wifi as your host.


