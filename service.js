const services = [
    {
        title:"Business Consulting",
        description:"Helping organisations improve performance and achieve business goals."
    },
    {
        title:"Marketind Research",
        description:"Providing valuable insights through data analysis and market studies."
    },
    {
        title:"Project Management",
        description:"planning, executing and monitering projects efficiently."
    },
    {
        title:"Digital Transformation",
        description:"Implementing modern technologies to streamline business operations."
    }
];

const servicesContainer =
document.getElementById("servicescontainer");

services.forEach(service => {

    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML =`
        <h3>${service.title}</h3>
        <button onclick="showServices${service.description}
        view description
        </button>
    `;
    servicesContainer.appendChild(card);
});
function showServices(description){
    document.getElementById("serviceInfo").innerText= description;
}