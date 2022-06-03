const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const createUser = () =>{
    const newFake = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.phoneNumber("###-###-####"),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        _id : faker.datatype.number()
    }
    return newFake;
}

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode('#####'),
            country: faker.address.country()
        }
    }
    return newFake;
}

app.get("/api/users/new", (req, res) =>{
    res.json(createUser());
})

app.get("/api/company/new", (req, res) =>{
    res.json(createCompany());
})

app.get("/api/user/company", (req, res) =>{
    res.json({user: createUser(), company: createCompany()});
})


app.listen(port, ()=>console.log(`Listening on port ${port}`))