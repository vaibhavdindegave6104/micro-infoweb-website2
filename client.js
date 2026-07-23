//clients  

function showClient(client) {
    const info = {
        Infosys:" Infosys is global leader in IT consulting and digital services.",
        tcs:"TCS provides technology and business solutions worldwide.",
        wipro:"Wipro specializes in IT, consulting and process servicess.",
        mahindra:"mahindra delivers consulting , engineering services."
    };
    document.getElementById("clientInfo").innerText =info[client];

}

//testemonials

const testemonials = [
    {
        Text:"professional teams and excellent support.",
        name:"RAhul Dev"
    },
    {
        Text:"Highly recommonded for consulting services.",
        name:"Mrunal Thakur"
    },
    {
        Text:"Delivered our project on time.",
        name:"Amit Patil"
    }
];
let current = 0;

