export type User = {
    id : number;
    name: string;
    email: string;
    role: "admin" | "user";
    status: "active" | "inactive";
};
export const users: User[] = [ 

    {id: 1, name:"Lucas" , email:"Lucasinho@gmail.com", role:"user", status:"active"},
    {id: 2, name:"Ibrahim" , email:"Ibrahim@gmail.com", role:"admin", status:"active"},
    {id: 3, name:"Salma" , email:"Salma@yahoo.com", role:"user", status:"inactive"},
    {id: 4, name:"Yehia" , email:"Yehia@gmail.com", role:"user", status:"active"},
    {id: 5, name:"Mostafa" , email:"Mostafa@yahoo.com", role:"admin", status:"inactive"},
    {id: 6, name:"Hamed" , email:"Hamed@gmail.com", role:"user", status:"active"},
    {id: 7, name:"Nour" , email:"Nour@yahoo.com", role:"user", status:"inactive"},
    {id: 8, name:"Khaled" , email:"Khaled@gmail.com", role:"admin", status:"active"},
    {id: 9, name:"Omar" , email:"Omar@yahoo.com", role:"admin", status:"inactive"},
    {id: 10, name:"Ayman" , email:"Ayman@gmail.com", role:"user", status:"active"},
];
