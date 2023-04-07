# Part One
## Introduction and Setup
---
### Feature Flags
Feature flags (or feature toggles if you're less fun) are a powerful technique used by developers to release new features in a controlled and gradual manner. With feature flags, developers can turn on or off specific features based on user segments, geographical regions, or other criteria. This allows them to test new features in production without affecting all users at once, reduce the risk of bugs and errors, and gather user feedback before rolling out a feature to everyone.

In this tutorial, we will explore how to create a simple experiment using feature flags in a simple React recreation of Netflix in the good old days when it mailed you DVDs. Specifically, we will create three types of checkout buttons, each with a different color and design, and randomly assign them to users using feature flags. Although we won't cover the data collection portion, you'll have a good idea of how it could be done!

#### Requirements
We'll be using **[Unleash](https://www.getunleash.io/)**, an open source feature flagging platform, to run create our experiment. The application is a simple React.JS website, so you'll need to install **[Node](https://nodejs.org/en)** - the version isn't too important here.

You'll also need **[Docker](https://www.docker.com/)**, the most widely used containerization tool. Unleash is only free when self hosted, so we'll need to run our own instance in a Docker container. Don't worry if you've never used Docker before - we'll walk you through it step by step!

#### Step One | Clone This Repository
This should be pretty simple! Just throw the command below into your terminal.

```sh
git clone https://github.com/GeorgeBerdovskiy/feature-flagging-example.git
```

#### Step Two | Set Up Unleash
Start by running `docker network create unleash`, which will create a new network dedicated to Unleash.

Then, enter the following code into your terminal to start the PostgreSQL database. Once it starts you'll be able to see it in the Docker application!

```sh
docker run \
  -e POSTGRES_USER=unleash_user \
  -e POSTGRES_PASSWORD=some_password \
  -e POSTGRES_DB=unleash \
  --network unleash \
  --name postgres \
  postgres
```

Now you're ready to start Unleash. Run this code in a new terminal tab -

```sh
docker run \
  -p 4242:4242 \
  -e DATABASE_HOST=postgres \
  -e DATABASE_NAME=unleash \
  -e DATABASE_USERNAME=unleash_user \
  -e DATABASE_PASSWORD=some_password \
  -e DATABASE_SSL=false \
  --network unleash \
  --name unleash \
  --pull=always unleashorg/unleash-server
```

Visit Unleash in your browser by visiting `http://localhost:4242`. Log in with the user `admin` and the password `unleash4all`.

#### Step Three | Set Up Feature Flag
If you've signed in, you'll be greeted with this pleasant but mostly empty dashboard -

![[Screenshots/01.png]]

Let's add our flag, which we'll call `Button`. Go to **Default**, then press **New Feature Toggle.** Use "Button" as the name and set the toggle type to be "Experiment." Although we won't be collecting or using any data, turn on impression data - read [this](https://docs.getunleash.io/reference/impression-data) to learn more about it if you're interested, as that's what we'd need if we wanted to compare clickthrough rates!

![[Screenshots/02.png]]

Add both development and production strategies for the toggle.

![[Screenshots/03.png]]

Then, go to **Variants** and press **Add Variant** for development (or production, either way we'll be applying it to both so there's no confusion).

![[Screenshots/04.png]]

Add three variants called **Fill, Ghost,** and **Clear**. The payload can be empty - we'll only be using the variant name. When you're done, your **Variants** page should look a little like this -

![[Screenshots/05.png]]

Notice that each variant has a weight of around 1/3. This means there's a 1/3 chance that a user will receive each of these three variants when they visit our site. Of course ideally, we'd like to make sure one user will always see the same type of button every time, but for simplicity, we'll just go with this.
